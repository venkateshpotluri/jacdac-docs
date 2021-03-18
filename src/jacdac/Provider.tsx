import React, { useState, useEffect, ReactNode } from "react"
import JacdacContext from "./Context"
import { JDBus } from "../../jacdac-ts/src/jdom/bus"
import {
    createUSBTransport,
    isWebUSBSupported,
} from "../../jacdac-ts/src/jdom/usb"
import {
    createBluetoothTransport,
    isWebBluetoothSupported,
} from "../../jacdac-ts/src/jdom/bluetooth"
import IFrameBridgeClient from "../../jacdac-ts/src/jdom/iframebridgeclient"
import Flags from "../../jacdac-ts/src/jdom/flags"
import GamepadHostManager from "../../jacdac-ts/src/hosts/gamepadhostmanager"

function sniffQueryArguments() {
    if (typeof window === "undefined" || typeof URLSearchParams === "undefined")
        return {
            diagnostic: false,
            webUSB: isWebUSBSupported(),
            webBluetooth: isWebBluetoothSupported(),
        }

    const params = new URLSearchParams(window.location.search)
    return {
        diagnostics: params.get(`dbg`) === "1",
        webUSB: isWebUSBSupported() && params.get(`webusb`) !== "0",
        webBluetooth: isWebBluetoothSupported() && params.get(`webble`) !== "0",
        parentOrigin: params.get("parentOrigin"),
        frameId: window.location.hash?.slice(1),
    }
}

const args = sniffQueryArguments()
Flags.diagnostics = args.diagnostics
Flags.webUSB = args.webUSB
Flags.webBluetooth = args.webBluetooth

const bus = new JDBus(
    [
        Flags.webUSB && createUSBTransport(),
        Flags.webBluetooth && createBluetoothTransport(),
    ],
    {
        parentOrigin: args.parentOrigin,
    }
)
bus.setBackgroundFirmwareScans(true)
GamepadHostManager.start(bus)

// tslint:disable-next-line: no-unused-expression
// always start bridge
if (typeof window !== "undefined") new IFrameBridgeClient(bus, args.frameId) // start bridge

export default function JacdacProvider(props: { children: ReactNode }) {
    const { children } = props
    const [firstConnect, setFirstConnect] = useState(false)

    // connect in background on first load
    useEffect(() => {
        if (!firstConnect) {
            setFirstConnect(true)
            bus.connect(true)
        }
        return () => {}
    }, [])
    return (
        <JacdacContext.Provider value={{ bus }}>
            {children}
        </JacdacContext.Provider>
    )
}
