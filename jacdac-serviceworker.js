class Flags {
}
/**
 * Enables additional logging and diagnostics
 */
Flags.diagnostics = false;
/**
 * Enables/disabled WebUSB
 */
Flags.webUSB = true;
/**
 * Enables/disables WebBLE
 */
Flags.webBluetooth = false;
/**
 * Use local storage and indexeddb to store data
 */
Flags.storage = false;

function throwError(msg, cancel) {
    const e = new Error(msg);
    if (cancel)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        e.__cancel = true;
    throw e;
}
function delay(millis, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), millis));
}
function memcpy(trg, trgOff, src, srcOff, len) {
    if (srcOff === void 0)
        srcOff = 0;
    if (len === void 0)
        len = src.length - srcOff;
    for (let i = 0; i < len; ++i)
        trg[trgOff + i] = src[srcOff + i];
}
function uint8ArrayToString(input) {
    const len = input.length;
    let res = "";
    for (let i = 0; i < len; ++i)
        res += String.fromCharCode(input[i]);
    return res;
}
function fromUTF8(binstr) {
    if (!binstr)
        return "";
    // escape function is deprecated
    let escaped = "";
    for (let i = 0; i < binstr.length; ++i) {
        const k = binstr.charCodeAt(i) & 0xff;
        if (k == 37 || k > 0x7f) {
            escaped += "%" + k.toString(16);
        }
        else {
            escaped += binstr.charAt(i);
        }
    }
    // decodeURIComponent does the actual UTF8 decoding
    return decodeURIComponent(escaped);
}
class PromiseBuffer {
    constructor() {
        this.waiting = [];
        this.available = [];
    }
    drain() {
        for (const f of this.waiting) {
            f(new Error("Promise Buffer Reset"));
        }
        this.waiting = [];
        this.available = [];
    }
    pushError(v) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.push(v);
    }
    push(v) {
        const f = this.waiting.shift();
        if (f)
            f(v);
        else
            this.available.push(v);
    }
    shiftAsync(timeout = 0) {
        if (this.available.length > 0) {
            const v = this.available.shift();
            if (v instanceof Error)
                return Promise.reject(v);
            else
                return Promise.resolve(v);
        }
        else
            return new Promise((resolve, reject) => {
                const f = (v) => {
                    if (v instanceof Error)
                        reject(v);
                    else
                        resolve(v);
                };
                this.waiting.push(f);
                if (timeout > 0) {
                    delay(timeout).then(() => {
                        const idx = this.waiting.indexOf(f);
                        if (idx >= 0) {
                            this.waiting.splice(idx, 1);
                            reject(new Error("Timeout"));
                        }
                    });
                }
            });
    }
}
class PromiseQueue {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.promises = {};
    }
    enqueue(id, f) {
        return new Promise((resolve, reject) => {
            let arr = this.promises[id];
            if (!arr) {
                arr = this.promises[id] = [];
            }
            const cleanup = () => {
                arr.shift();
                if (arr.length == 0)
                    delete this.promises[id];
                else
                    arr[0]();
            };
            arr.push(() => f().then(v => {
                cleanup();
                resolve(v);
            }, err => {
                cleanup();
                reject(err);
            }));
            if (arr.length == 1)
                arr[0]();
        });
    }
}
function fromHex(hex) {
    const r = new Uint8Array(hex.length >> 1);
    for (let i = 0; i < hex.length; i += 2)
        r[i >> 1] = parseInt(hex.slice(i, i + 2), 16);
    return r;
}
function write32(buf, pos, v) {
    buf[pos + 0] = (v >> 0) & 0xff;
    buf[pos + 1] = (v >> 8) & 0xff;
    buf[pos + 2] = (v >> 16) & 0xff;
    buf[pos + 3] = (v >> 24) & 0xff;
}
function write16(buf, pos, v) {
    buf[pos + 0] = (v >> 0) & 0xff;
    buf[pos + 1] = (v >> 8) & 0xff;
}
function read32(buf, pos) {
    return ((buf[pos] |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16) |
        (buf[pos + 3] << 24)) >>>
        0);
}
function read16(buf, pos) {
    return buf[pos] | (buf[pos + 1] << 8);
}
function encodeU32LE(words) {
    const r = new Uint8Array(words.length * 4);
    for (let i = 0; i < words.length; ++i)
        write32(r, i * 4, words[i]);
    return r;
}
function bufferToString(buf) {
    return fromUTF8(uint8ArrayToString(buf));
}
function bufferConcat(a, b) {
    const r = new Uint8Array(a.length + b.length);
    r.set(a, 0);
    r.set(b, a.length);
    return r;
}
function assert(cond, msg = "Assertion failed") {
    if (!cond) {
        if (Flags.diagnostics)
            // eslint-disable-next-line no-debugger
            debugger;
        throw new Error(msg);
    }
}

// see https://github.com/microsoft/uf2/blob/main/hf2.md for full spec
const HF2_DEVICE_MAJOR = 42;
const HF2_CMD_BININFO = 0x0001; // no arguments
const HF2_MODE_BOOTLOADER = 0x01;
const HF2_MODE_USERSPACE = 0x02;
/*
struct HF2_BININFO_Result {
    uint32_t mode;
    uint32_t flash_page_size;
    uint32_t flash_num_pages;
    uint32_t max_message_size;
};
*/
const HF2_CMD_INFO = 0x0002;
// no arguments
// results is utf8 character array
const HF2_CMD_RESET_INTO_APP = 0x0003; // no arguments, no result
// no arguments
// results is utf8 character array
const HF2_FLAG_SERIAL_OUT = 0x80;
const HF2_FLAG_SERIAL_ERR = 0xc0;
const HF2_FLAG_CMDPKT_LAST = 0x40;
const HF2_FLAG_CMDPKT_BODY = 0x00;
const HF2_FLAG_MASK = 0xc0;
const HF2_STATUS_OK = 0x00;
const HF2_STATUS_INVALID_CMD = 0x01;
const HF2_STATUS_EXEC_ERR = 0x02;
const HF2_STATUS_EVENT = 0x80;
// the eventId is overlayed on the tag+status; the mask corresponds
// to the HF2_STATUS_EVENT above
const HF2_EV_MASK = 0x800000;
const HF2_CMD_JDS_CONFIG = 0x0020;
const HF2_CMD_JDS_SEND = 0x0021;
const HF2_EV_JDS_PACKET = 0x800020;
class HF2Proto {
    constructor(io) {
        this.io = io;
        this.eventHandlers = {};
        this.msgs = new PromiseBuffer();
        this.cmdSeq = (Math.random() * 0xffff) | 0;
        this.lock = new PromiseQueue();
        let frames = [];
        io.onData = buf => {
            const tp = buf[0] & HF2_FLAG_MASK;
            const len = buf[0] & 63;
            //console.log(`msg tp=${tp} len=${len}`)
            const frame = new Uint8Array(len);
            memcpy(frame, 0, buf, 1, len);
            if (tp & HF2_FLAG_SERIAL_OUT) {
                this.onSerial(frame, tp == HF2_FLAG_SERIAL_ERR);
                return;
            }
            frames.push(frame);
            if (tp == HF2_FLAG_CMDPKT_BODY) {
                return;
            }
            else {
                assert(tp == HF2_FLAG_CMDPKT_LAST);
                let total = 0;
                for (const f of frames)
                    total += f.length;
                const r = new Uint8Array(total);
                let ptr = 0;
                for (const f of frames) {
                    memcpy(r, ptr, f);
                    ptr += f.length;
                }
                frames = [];
                if (r[2] & HF2_STATUS_EVENT) {
                    // asynchronous event
                    this.handleEvent(r);
                }
                else {
                    this.msgs.push(r);
                }
            }
        };
    }
    error(m) {
        return this.io.error(m);
    }
    talkAsync(cmd, data) {
        if (!this.io)
            console.log("rogue hf2 instance");
        let len = 8;
        if (data)
            len += data.length;
        const pkt = new Uint8Array(len);
        const seq = ++this.cmdSeq & 0xffff;
        write32(pkt, 0, cmd);
        write16(pkt, 4, seq);
        write16(pkt, 6, 0);
        if (data)
            memcpy(pkt, 8, data, 0, data.length);
        let numSkipped = 0;
        const handleReturnAsync = () => this.msgs
            .shiftAsync(1000) // we wait up to a second
            .then(res => {
            if (read16(res, 0) != seq) {
                if (numSkipped < 3) {
                    numSkipped++;
                    this.io.log(`message out of sync, (${seq} vs ${read16(res, 0)}); will re-try`);
                    return handleReturnAsync();
                }
                this.error("out of sync");
            }
            let info = "";
            if (res[3])
                info = "; info=" + res[3];
            switch (res[2]) {
                case HF2_STATUS_OK:
                    return res.slice(4);
                case HF2_STATUS_INVALID_CMD:
                    this.error("invalid command" + info);
                    break;
                case HF2_STATUS_EXEC_ERR:
                    this.error("execution error" + info);
                    break;
                default:
                    this.error("error " + res[2] + info);
                    break;
            }
            return null;
        })
            .catch(e => {
            this.error(e);
            return null;
        });
        return this.lock.enqueue("talk", () => this.sendMsgAsync(pkt).then(handleReturnAsync));
    }
    sendMsgAsync(buf, serial = 0) {
        // Util.assert(buf.length <= this.maxMsgSize)
        const frame = new Uint8Array(64);
        const loop = (pos) => {
            let len = buf.length - pos;
            if (len <= 0)
                return Promise.resolve();
            if (len > 63) {
                len = 63;
                frame[0] = HF2_FLAG_CMDPKT_BODY;
            }
            else {
                frame[0] = HF2_FLAG_CMDPKT_LAST;
            }
            if (serial)
                frame[0] =
                    serial == 1 ? HF2_FLAG_SERIAL_OUT : HF2_FLAG_SERIAL_ERR;
            frame[0] |= len;
            for (let i = 0; i < len; ++i)
                frame[i + 1] = buf[pos + i];
            return this.io.sendPacketAsync(frame).then(() => loop(pos + len));
        };
        return loop(0);
    }
    onEvent(id, f) {
        assert(!!(id & HF2_EV_MASK));
        this.eventHandlers[id + ""] = f;
    }
    onJDMessage(f) {
        this.talkAsync(HF2_CMD_JDS_CONFIG, encodeU32LE([1]));
        this.onEvent(HF2_EV_JDS_PACKET, f);
    }
    sendJDMessageAsync(buf) {
        return this.talkAsync(HF2_CMD_JDS_SEND, buf).then(() => { });
    }
    handleEvent(buf) {
        const evid = read32(buf, 0);
        const f = this.eventHandlers[evid + ""];
        if (f) {
            f(buf.slice(4));
        }
        else {
            this.io.log("unhandled event: " + evid.toString(16));
            // We can get these before we're ready to recv; this is fine.
            //if (evid === 0x800020) {
            //    this.io.onError(new Error("hf2 corrupted"))
            //}
        }
    }
    onSerial(data, iserr) {
        const msg = `hf2 serial: ${bufferToString(data)}`;
        if (iserr)
            console.warn(msg);
        else
            console.log(msg);
    }
    async postConnectAsync() {
        await this.checkMode();
        const buf = await this.talkAsync(HF2_CMD_INFO);
        this.io.log("Connected to: " + bufferToString(buf));
    }
    async checkMode() {
        // first check that we are not talking to a bootloader
        const info = await this.talkAsync(HF2_CMD_BININFO);
        const mode = read32(info, 0);
        this.io.log(`hf2 mode ${mode}`);
        if (mode == HF2_MODE_USERSPACE) {
            // all good
            this.io.log(`device in user-space mode`);
        }
        else if (mode == HF2_MODE_BOOTLOADER) {
            this.io.log(`device in bootloader mode, reseting into user-space mode`);
            await this.talkAsync(HF2_CMD_RESET_INTO_APP);
            // and fail
            throwError("Device in bootloader mode");
        }
        else {
            // unknown mdoe
            throwError("Unknown device operation mode");
        }
    }
    async disconnectAsync() {
        if (this.io) {
            const io = this.io;
            this.io = undefined;
            await io.disconnectAsync();
        }
    }
}

class CMSISProto {
    constructor(io) {
        this.io = io;
        this.q = new PromiseQueue();
        this.sendQ = [];
        console.log(`micro:bit: start proto`);
    }
    startRecvToLoop() {
        console.assert(!this._lastInterval);
        let last = this.recvTo;
        this._lastInterval = setInterval(() => {
            if (!this.io)
                this.stopRecvToLoop();
            if (last && last == this.recvTo) {
                last();
            }
            last = this.recvTo;
        }, 200);
    }
    stopRecvToLoop() {
        if (this._lastInterval) {
            clearInterval(this._lastInterval);
            this._lastInterval = undefined;
        }
    }
    error(msg) {
        this.stopRecvToLoop();
        this.io?.error(msg);
        // clear state
        this.xchgAddr = null;
    }
    onJDMessage(f) {
        this._onJDMsg = f;
    }
    sendJDMessageAsync(buf) {
        if (buf.length & 3) {
            const tmp = new Uint8Array((buf.length + 3) & ~3);
            tmp.set(buf);
            buf = tmp;
        }
        return new Promise(resolve => {
            this.sendQ.push({
                buf,
                cb: resolve,
            });
        });
    }
    async disconnectAsync() {
        if (this.io) {
            console.debug(`micro:bit: disconnect proto`);
            this.stopRecvToLoop();
            this._onJDMsg = () => console.warn("rogue jd callback");
            const io = this.io;
            this.io = undefined;
            if (io)
                await io.disconnectAsync();
        }
    }
    recvAsync() {
        return new Promise((resolve, reject) => {
            // io may have been cleared
            if (!this.io) {
                reject(new Error("USB disconnected"));
                return;
            }
            this.io.recvPacketAsync().then(v => {
                const f = resolve;
                resolve = null;
                if (f) {
                    this.recvTo = null;
                    f(v);
                }
            }, err => {
                if (resolve) {
                    resolve = null;
                    this.recvTo = null;
                    reject(err);
                }
            });
            this.recvTo = () => {
                if (resolve) {
                    resolve = null;
                    reject(new Error("CMSIS recv timeout"));
                }
            };
        });
    }
    talkAsync(cmds) {
        return this.q.enqueue("talk", async () => {
            if (!this.io) {
                console.debug(`micro:bit disconnected, skip send`, { cmds });
                this.error("micro:bit disconnected");
                return; // disconnected
            }
            //console.log("TALK", cmds)
            await this.io.sendPacketAsync(new Uint8Array(cmds));
            if (!this.io) {
                console.debug(`micro:bit disconnected, skip response`, { cmds });
                this.error("micro:bit disconnected");
                return; // disconnected
            }
            let response = await this.recvAsync();
            if (response[0] !== cmds[0]) {
                const msg = `Bad response for ${cmds[0]} -> ${response[0]}, try again`;
                console.debug(msg, { cmds, response });
                try {
                    response = await this.recvAsync();
                }
                catch (e) {
                    // throw the original error in case of timeout
                    this.error(msg);
                }
                if (response[0] !== cmds[0])
                    this.error(msg);
            }
            return response;
        });
    }
    talkHexAsync(str) {
        return this.talkAsync(fromHex(str.replace(/ /g, "")));
    }
    decodeString(buf) {
        const len = buf[1];
        const ss = buf.slice(2, 2 + len);
        return uint8ArrayToString(ss);
    }
    dapDelay(micros) {
        const cmd = [0x09, 0, 0];
        if (micros > 0xffff)
            this.error("too large delay");
        write16(cmd, 1, micros);
        return this.talkAsync(cmd);
    }
    async setBaudRate() {
        const setBaud = [0x82, 0, 0, 0, 0];
        write32(setBaud, 1, 115200);
        await this.talkAsync(setBaud); // this reset the board on 0255
    }
    async xchgLoop() {
        let currSend;
        while (this.io) {
            const now = Date.now();
            if (Flags.diagnostics &&
                this.lastXchg &&
                now - this.lastXchg > 50) {
                console.warn("slow xchg: " + (now - this.lastXchg) + "ms");
            }
            this.lastXchg = now;
            let numev = 0;
            let inp = await this.readBytes(this.xchgAddr + 12, 256, true);
            if (inp[2]) {
                await this.writeWord(this.xchgAddr + 12, 0);
                await this.triggerIRQ();
                inp = inp.slice(0, inp[2] + 12);
                this._onJDMsg(inp);
                numev++;
            }
            let sendFree = false;
            if (currSend) {
                const send = await this.readBytes(this.xchgAddr + 12 + 256, 4);
                if (!send[2]) {
                    currSend.cb();
                    currSend = null;
                    sendFree = true;
                    numev++;
                }
            }
            if (!currSend && this.sendQ.length) {
                if (!sendFree) {
                    const send = await this.readBytes(this.xchgAddr + 12 + 256, 4);
                    if (!send[2])
                        sendFree = true;
                }
                if (sendFree) {
                    currSend = this.sendQ.shift();
                    const bbody = currSend.buf.slice(4);
                    await this.writeWords(this.xchgAddr + 12 + 256 + 4, new Uint32Array(bbody.buffer));
                    const bhead = currSend.buf.slice(0, 4);
                    await this.writeWords(this.xchgAddr + 12 + 256, new Uint32Array(bhead.buffer));
                    await this.triggerIRQ();
                    this.lastSend = Date.now();
                    numev++;
                }
                else {
                    if (this.lastSend) {
                        const d = Date.now() - this.lastSend;
                        if (d > 50) {
                            this.lastSend = 0;
                            console.warn("failed to send packet fast enough");
                        }
                    }
                }
            }
            if (await this.readSerial())
                numev++;
            if (numev == 0)
                await this.dapDelay(1000);
        }
    }
    async readSerial() {
        let buf = await this.talkAsync([0x83]);
        const len = buf[1];
        if (len) {
            buf = buf.slice(2, 2 + len);
            if (this.pendingSerial)
                buf = bufferConcat(this.pendingSerial, buf);
            let ptr = 0;
            let beg = 0;
            while (ptr < buf.length) {
                if (buf[ptr] == 10 || buf[ptr] == 13) {
                    const line = buf.slice(beg, ptr);
                    if (line.length)
                        console.log("SERIAL: " + fromUTF8(uint8ArrayToString(line)));
                    beg = ptr + 1;
                }
                ptr++;
            }
            buf = buf.slice(beg);
            this.pendingSerial = buf.length ? buf : null;
            if (this.pendingSerial)
                this.lastPendingSerial = Date.now();
        }
        else if (this.pendingSerial) {
            const d = Date.now() - this.lastPendingSerial;
            if (d > 500) {
                const s = fromUTF8(uint8ArrayToString(this.pendingSerial));
                this.pendingSerial = null;
                console.log("SERIAL[TO]: " + s);
            }
        }
        return len;
    }
    async talkStringAsync(...cmds) {
        return this.talkAsync(cmds).then(buf => this.decodeString(buf));
    }
    async readDP(reg) {
        const nums = [0x05, 0, 1, 2 | reg, 0, 0, 0, 0];
        const buf = await this.talkAsync(nums);
        return read32(buf, 3);
    }
    async setupTAR(addr) {
        const nums = [5, 0, 2, 1, 0x52, 0, 0, 0x23, 5, 0, 0, 0, 0];
        write32(nums, 9, addr);
        await this.talkAsync(nums);
    }
    async writeWords(addr, data) {
        await this.setupTAR(addr);
        const MAX = 0xe;
        let ptr = 0;
        const reqHd = [6, 0, MAX, 0, 0xd];
        for (let i = 0; i < MAX * 4; ++i)
            reqHd.push(0);
        const req = new Uint8Array(reqHd);
        let overhang = 1;
        let ptrTX = 0;
        const count = data.length;
        const dataBytes = new Uint8Array(data.buffer);
        let lastCh = MAX;
        //console.log("WRITE", addr.toString(16), data)
        await this.q.enqueue("talk", async () => {
            while (ptr < count) {
                const ch = Math.min(count - ptrTX, MAX);
                if (ch) {
                    req[2] = ch;
                    req.set(dataBytes.slice(ptrTX * 4, (ptrTX + ch) * 4), 5);
                    await this.io.sendPacketAsync(ch == MAX ? req : req.slice(0, 5 + 4 * ch));
                    ptrTX += ch;
                    lastCh = ch;
                }
                if (overhang-- > 0)
                    continue;
                const buf = await this.recvAsync();
                if (buf[0] != req[0])
                    this.error(`bad response, ${buf[0]} != ${req[0]}`);
                if (buf[1] != MAX && buf[1] != lastCh)
                    this.error(`bad response, ${buf[1]} != ${MAX} && ${buf[1]} != ${lastCh}`);
                ptr += buf[1];
            }
        });
    }
    async readBytes(addr, count, jdmode = false) {
        if (addr & 3 || count & 3)
            this.error("unaligned");
        const b = await this.readWords(addr, count >> 2, jdmode);
        return new Uint8Array(b.buffer);
    }
    async readWords(addr, count, jdmode = false) {
        await this.setupTAR(addr);
        const MAX = 0xe;
        const res = new Uint32Array(count);
        let ptr = 0;
        const req = new Uint8Array([6, 0, MAX, 0, 0xf]);
        let overhang = 1;
        let ptrTX = 0;
        // console.log("READ", addr.toString(16), count)
        let numPending = 0;
        await this.q.enqueue("talk", async () => {
            while (ptr < count || numPending) {
                const ch = Math.min(count - ptrTX, MAX);
                if (ch > 0) {
                    req[2] = ch;
                    numPending++;
                    await this.io.sendPacketAsync(req);
                    ptrTX += ch;
                }
                if (overhang-- > 0)
                    continue;
                const buf = await this.recvAsync();
                numPending--;
                if (buf[0] != req[0])
                    this.error("bad response");
                const len = buf[1];
                const words = new Uint32Array(buf.slice(4, (1 + len) * 4).buffer);
                if (words.length != len)
                    this.error("bad response2");
                res.set(words, ptr);
                // limit transfer, according to JD frame size
                if (jdmode && ptr == 0) {
                    const frmsz = new Uint8Array(res.buffer)[2];
                    const words = (frmsz + 12 + 3) >> 2;
                    if (count > words)
                        count = words;
                }
                ptr += words.length;
            }
        });
        return res;
    }
    async findExchange() {
        const memStart = 536870912;
        const memStop = memStart + 128 * 1024;
        const checkSize = 1024;
        let p0 = 0x20006000;
        let p1 = 0x20006000 + checkSize;
        const check = async (addr) => {
            if (addr < memStart)
                return null;
            if (addr + checkSize > memStop)
                return null;
            const buf = await this.readWords(addr, checkSize >> 2);
            for (let i = 0; i < buf.length; ++i) {
                if (buf[i] == 0x786d444a && buf[i + 1] == 0xb0a6c0e9)
                    return addr + (i << 2);
            }
            return 0;
        };
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const a0 = await check(p0);
            if (a0)
                return a0;
            const a1 = await check(p1);
            if (a1)
                return a1;
            if (a0 === null && a1 === null)
                return null;
            p0 -= checkSize;
            p1 += checkSize;
        }
    }
    async triggerIRQ() {
        const addr = 0xe000e200 + (this.irqn >> 5) * 4;
        const data = new Uint32Array([1 << (this.irqn & 31)]);
        await this.writeWords(addr, data);
    }
    writeWord(addr, val) {
        return this.writeWords(addr, new Uint32Array([val]));
    }
    async reset() {
        await this.writeWord(0xe000edfc, 0); // DEMCR
        await this.writeWord(0xe000ed0c, 0x05fa0000 | (1 << 2)); // AIRCR
    }
    async postConnectAsync() {
        this.startRecvToLoop();
        const devid = await this.talkStringAsync(0x80);
        if (/^9902/.test(devid)) {
            this.error(`micro:bit v1 is not supported. sorry.`);
            return;
        }
        if (!/^990[3456789]/.test(devid)) {
            this.error(`Invalid Vendor0 response: ` + devid);
            return;
        }
        this.io.log("DAPLink v" + (await this.talkStringAsync(0x00, 0x04)));
        await this.setBaudRate(); // this may reset the board
        const freq = [0x11, 0, 0, 0, 0];
        write32(freq, 1, 10000000);
        await this.talkAsync(freq);
        const inits = [
            "02 00",
            "04 00 64 00 00 00",
            // SWD switch
            "12 38 FF FF FF FF FF FF FF",
            "12 10 9E E7",
            "12 38 FF FF FF FF FF FF FF",
            "12 08 00",
            // read DPIDR
            "05 00 01 02 00 00 00 00",
            // clear errors
            "05 00 03 00 04 00 00 00 08 00 00 00 00 04 00 00 00 50",
        ];
        for (const ini of inits)
            await this.talkHexAsync(ini);
        for (let i = 0; i < 100; ++i) {
            const st = await this.readDP(4);
            const mask = (1 << 29) | (1 << 31);
            if ((st & mask) == mask)
                break;
            await delay(20);
        }
        await this.reset();
        await delay(1000); // the actual minimum until mbbridge starts seems to be 700ms; give it some more time just in case
        const xchg = await this.findExchange();
        if (xchg === null) {
            this.error(`exchange address not found; add jacdac to your project`);
            return;
        }
        this.xchgAddr = xchg;
        const info = await this.readBytes(xchg, 16);
        this.irqn = info[8];
        if (info[12 + 2] != 0xff) {
            this.error("invalid memory; try power-cycling the micro:bit");
            return;
        }
        // clear initial lock
        await this.writeWord(xchg + 12, 0);
        this.io.log(`exchange address: 0x${xchg.toString(16)}; irqn=${this.irqn}`);
        /* async */ this.xchgLoop().catch(e => {
            console.debug(e);
            this.error(e?.message || "an error occured");
        });
    }
}

const USB_FILTERS = {
    filters: [
        {
            // hf2 devices (incl. arcade)
            classCode: 255,
            subclassCode: HF2_DEVICE_MAJOR,
        },
        {
            // micro:bit v2
            vendorId: 3368,
            productId: 516,
        },
    ],
};
const controlTransferGetReport = 0x01;
const controlTransferSetReport = 0x09;
const controlTransferOutReport = 0x200;
const controlTransferInReport = 0x100;
class USBIO {
    constructor(options) {
        this.options = options;
        this.readLoopStarted = false;
        this.ready = false;
        this.rawMode = false;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.onData = (v) => { };
        this.onError = (e) => {
            console.warn("usb error: " + (e ? e.stack : e));
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    log(msg, v) {
        if (v != undefined)
            console.log("usb: " + msg, v);
        else
            console.log("usb: " + msg);
    }
    mkProto() {
        return this.isMicrobit() ? new CMSISProto(this) : new HF2Proto(this);
    }
    clearDev() {
        if (this.dev) {
            this.dev = null;
            this.epIn = null;
            this.epOut = null;
            this.onData = () => console.warn("rogue hf2 onData");
        }
    }
    disconnectAsync() {
        this.ready = false;
        if (!this.dev)
            return Promise.resolve();
        console.debug("close device");
        return this.dev
            .close()
            .catch(e => {
            // just ignore errors closing, most likely device just disconnected
            console.debug(e);
        })
            .then(() => {
            this.clearDev();
            return delay(500);
        });
    }
    recvPacketAsync() {
        if (!this.rawMode)
            this.error("rawMode required");
        return this.recvPacketCoreAsync();
    }
    recvPacketCoreAsync() {
        const final = (res) => {
            if (res.status != "ok")
                this.error("USB IN transfer failed");
            const arr = new Uint8Array(res.data.buffer);
            if (arr.length == 0)
                return this.recvPacketCoreAsync();
            return arr;
        };
        if (!this.dev)
            return Promise.reject(new Error("Disconnected"));
        if (!this.epIn) {
            return this.dev
                .controlTransferIn({
                requestType: "class",
                recipient: "interface",
                request: controlTransferGetReport,
                value: controlTransferInReport,
                index: this.iface.interfaceNumber,
            }, 64)
                .then(final);
        }
        return this.dev.transferIn(this.epIn.endpointNumber, 64).then(final);
    }
    error(msg) {
        this.onError(new Error(`device ${this.dev ? this.dev.productName : "n/a"} (${msg})`));
    }
    async readLoop() {
        if (this.rawMode || this.readLoopStarted)
            return;
        this.readLoopStarted = true;
        console.debug("start read loop");
        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (!this.ready) {
                break;
                //await delay(300)
                //continue
            }
            try {
                const buf = await this.recvPacketCoreAsync();
                if (buf[0]) {
                    // we've got data; retry reading immedietly after processing it
                    this.onData(buf);
                }
                else {
                    // throttle down if no data coming
                    await delay(5);
                }
            }
            catch (err) {
                if (this.dev) {
                    this.onError(err);
                    await this.disconnectAsync();
                }
                await delay(300);
            }
        }
    }
    sendPacketAsync(pkt) {
        if (!this.dev)
            return Promise.reject(new Error("Disconnected"));
        assert(pkt.length <= 64);
        if (!this.epOut) {
            return this.dev
                .controlTransferOut({
                requestType: "class",
                recipient: "interface",
                request: controlTransferSetReport,
                value: controlTransferOutReport,
                index: this.iface.interfaceNumber,
            }, pkt)
                .then(res => {
                if (res.status != "ok")
                    this.error("USB CTRL OUT transfer failed");
            });
        }
        return this.dev
            .transferOut(this.epOut.endpointNumber, pkt)
            .then(res => {
            if (res.status != "ok")
                this.error("USB OUT transfer failed");
        });
    }
    isMicrobit() {
        return (this.dev && this.dev.productId == 516 && this.dev.vendorId == 3368);
    }
    checkDevice() {
        this.iface = undefined;
        this.altIface = undefined;
        if (!this.dev)
            return false;
        console.debug("connect device: " +
            this.dev.manufacturerName +
            " " +
            this.dev.productName);
        // resolve interfaces
        const subcl = this.isMicrobit() ? 0 : HF2_DEVICE_MAJOR;
        for (const iface of this.dev.configuration.interfaces) {
            const alt = iface.alternates[0];
            if (alt.interfaceClass == 0xff && alt.interfaceSubclass == subcl) {
                this.iface = iface;
                this.altIface = alt;
                break;
            }
        }
        if (this.isMicrobit())
            this.rawMode = true;
        return !!this.iface;
    }
    async tryReconnectAsync(deviceId) {
        try {
            const devices = await this.options.getDevices();
            this.dev = deviceId
                ? devices.find(dev => dev.serialNumber === deviceId)
                : devices[0];
        }
        catch (e) {
            console.log(e);
            this.dev = undefined;
        }
    }
    async requestDeviceAsync() {
        try {
            this.dev = await this.options.requestDevice(USB_FILTERS);
        }
        catch (e) {
            console.log(e);
            this.dev = undefined;
        }
    }
    async connectAsync(background, deviceId) {
        await this.tryReconnectAsync(deviceId);
        if (!this.dev && !background)
            await this.requestDeviceAsync();
        // background call and no device, just give up for now
        if (!this.dev && background)
            throwError("device not paired", true);
        // let's connect
        await this.openDeviceAsync();
        const proto = this.mkProto();
        try {
            await proto.postConnectAsync();
        }
        catch (e) {
            console.debug(e);
            await proto.disconnectAsync();
            throw e;
        }
        return proto;
    }
    async openDeviceAsync() {
        if (!this.dev)
            throwError("device not found");
        if (!this.checkDevice())
            throwError("device does not support HF2");
        await this.dev.open();
        await this.dev.selectConfiguration(1);
        if (this.altIface.endpoints.length) {
            this.epIn = this.altIface.endpoints.filter(e => e.direction == "in")[0];
            this.epOut = this.altIface.endpoints.filter(e => e.direction == "out")[0];
            assert(this.epIn.packetSize == 64);
            assert(this.epOut.packetSize == 64);
        }
        console.debug("claim interface");
        await this.dev.claimInterface(this.iface.interfaceNumber);
        console.debug("all connected");
        this.ready = true;
        this.readLoop();
    }
}

const { debug, error: error$1 } = console;
class USBTransportProxy {
    constructor() { }
    async connect(deviceId) {
        debug(`jdsw: connect`, { deviceId });
        if (this.hf2) {
            debug(`jdsw: cleanup hf2`);
            await this.hf2.disconnectAsync();
            this.hf2 = undefined;
        }
        const io = new USBIO({
            getDevices: () => navigator.usb.getDevices(),
        });
        io.onError = e => {
            error$1(e);
            postMessage({
                type: "error",
                error: {
                    message: e.message,
                },
            });
        };
        const onJDMessage = (buf) => {
            //debug(`jdsw: frame`, buf)
            postMessage({
                type: "frame",
                payload: buf,
            });
        };
        this.hf2 = await io.connectAsync(true, deviceId);
        this.hf2.onJDMessage(onJDMessage);
    }
    async send(payload) {
        await this.hf2?.sendJDMessageAsync(payload);
    }
    async disconnect() {
        debug(`jdsw: disconnect`);
        const h = this.hf2;
        this.hf2 = undefined;
        if (h)
            await h.disconnectAsync();
    }
}

const { info, error } = console;
info(`jdsw: starting...`);
let proxy;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleCommand(resp, handler) {
    try {
        await handler();
        postMessage(resp);
    }
    catch (e) {
        postMessage({
            ...resp,
            error: {
                message: e.message,
            },
        });
    }
}
onmessage = async (event) => {
    const { data } = event;
    const { type, payload } = data;
    //console.debug(`jdsw, onmessage ${type}`, data)
    switch (type) {
        case "connect": {
            if (proxy)
                await proxy.disconnect();
            const { deviceId } = data;
            info(`jdsw: connecting`);
            proxy = new USBTransportProxy();
            await handleCommand(data, () => proxy.connect(deviceId));
            break;
        }
        case "packet":
            //info(`jdsw: send`)
            proxy?.send(payload).then(() => { }, e => error(e));
            // don't wait or acknowledge
            break;
        case "disconnect":
            if (proxy) {
                info(`jdsw: disconnecting`);
                await handleCommand(data, () => proxy.disconnect());
            }
            break;
    }
};
info(`jdsw: ready...`);
//# sourceMappingURL=jacdac-serviceworker.js.map
