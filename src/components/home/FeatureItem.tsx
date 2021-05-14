import {
    createStyles,
    Grid,
    makeStyles,
    Typography,
    Theme,
} from "@material-ui/core"
import { Button, Link } from "gatsby-theme-material-ui"
import React, { ReactNode } from "react"
import clsx from "clsx"

export interface FeatureItemProps {
    startImage?: ReactNode
    title?: string
    subtitle?: string
    subtitle2?: string
    description?: string
    caption?: string
    buttonText?: string
    centered?: boolean
    buttonColor?: "primary" | "secondary" | "default"
    buttonUrl?: string
    buttonVariant?: "outlined" | "contained" | "link"
    image?: ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        centered: {
            textAlign: "center",
        },
        description: {
            fontSize: theme.typography.fontSize * 2.1,
        },
        caption: {
            fontSize: theme.typography.fontSize * 1.8,
        },
        button: {
            fontSize: theme.typography.fontSize * 1.8,
        },
    })
)

export default function FeatureItem(props: FeatureItemProps) {
    const {
        title,
        subtitle,
        subtitle2,
        description,
        buttonText,
        buttonUrl,
        buttonColor = "primary",
        buttonVariant = "contained",
        startImage,
        caption,
        image,
        centered,
    } = props
    const classes = useStyles()
    const centeredCls = centered && classes.centered
    const cls = centeredCls
    return (
        <>
            {startImage && (
                <Grid item xs={12}>
                    {startImage}
                </Grid>
            )}
            {title && (
                <Grid item xs={12}>
                    <Typography variant="h1" className={cls}>
                        {title}
                    </Typography>
                </Grid>
            )}
            {subtitle && (
                <Grid item xs={12}>
                    <Typography variant="h2" className={cls}>
                        {subtitle}
                    </Typography>
                </Grid>
            )}
            {subtitle2 && (
                <Grid item xs={12}>
                    <Typography variant="h3" className={cls}>
                        {subtitle2}
                    </Typography>
                </Grid>
            )}
            {description && (
                <Grid item xs={12}>
                    <Typography
                        variant="body1"
                        className={clsx(cls, classes.description)}
                    >
                        {description}
                    </Typography>
                </Grid>
            )}
            {caption && (
                <Grid item xs={12}>
                    <Typography
                        variant="body2"
                        className={clsx(cls, classes.caption)}
                    >
                        {caption}
                    </Typography>
                </Grid>
            )}
            {buttonUrl && buttonText && (
                <Grid item xs={12} className={clsx(cls, classes.button)}>
                    {buttonVariant === "link" ? (
                        <Link to={buttonUrl}>
                            {buttonText}
                            {" >"}
                        </Link>
                    ) : (
                        <Button
                            variant="contained"
                            color={buttonColor}
                            to={buttonUrl}
                        >
                            {buttonText}
                        </Button>
                    )}
                </Grid>
            )}
            {image && (
                <Grid item xs={12} className={cls}>
                    {image}
                </Grid>
            )}
        </>
    )
}
