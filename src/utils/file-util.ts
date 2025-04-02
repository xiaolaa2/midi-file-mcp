import pkg from '@tonejs/midi'
const { Midi } = pkg
import fs from 'fs'

export function loadMidiFile(filePath: string) {
    // 读取MIDI文件
    const midiData = fs.readFileSync(filePath)
    const midi = new Midi(midiData)
    return midi
}

export function saveMidiFile(midi: any, filePath: string): void {
    // 将MIDI对象转换为ArrayBuffer
    const arrayBuffer = midi.toArray()
    // 将ArrayBuffer转换为Buffer并写入文件
    fs.writeFileSync(filePath, Buffer.from(arrayBuffer))
}