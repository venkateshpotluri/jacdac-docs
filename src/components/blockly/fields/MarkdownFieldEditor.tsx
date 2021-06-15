import React, { useContext, useState } from "react"
import ReactMarkdown from "react-markdown"
import HighlightTextField from "../../ui/HighlightTextField"
import { ReactFieldJSON } from "./ReactField"
import ReactInlineField from "./ReactInlineField"
import ValueContext, { ValueContextProps } from "./ValueContext"

function MarkdownWidget() {
    const { value } = useContext<ValueContextProps<string>>(ValueContext)
    const source = value || "..."
    console.log("markdown", { source })
    return <ReactMarkdown>{source}</ReactMarkdown>
}

function EditorWidget() {
    const { value, onValueChange } =
        useContext<ValueContextProps<string>>(ValueContext)
    const [source, setSource] = useState(value || "...")
    const handleSetSource = (newSource: string) => {
        setSource(newSource)
        onValueChange(newSource)
    }
    return (
        <div style={{ minWidth: "22rem", minHeight: "10rem" }}>
            <HighlightTextField
                code={source}
                language={"markdown"}
                onChange={handleSetSource}
            />
        </div>
    )
}

export default class MarkdownField extends ReactInlineField<string> {
    static KEY = "jacdac_field_markdown"
    static EDITABLE = true

    static fromJson(options: ReactFieldJSON) {
        return new MarkdownField(options)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(options?: any) {
        super(options)
        this.blocklyBindEvents = true
    }

    get defaultValue() {
        return "..."
    }

    renderField() {
        return <EditorWidget />
    }

    renderInlineField() {
        return <MarkdownWidget />
    }
}
