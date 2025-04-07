import pkg from '@tonejs/midi'
const { Midi } = pkg
import fs from 'fs'

export function loadMidiFile(filePath: string) {
    const midiData = fs.readFileSync(filePath)
    const midi = new Midi(midiData)
    return midi
}

export function saveMidiFile(midi: any, filePath: string): void {
    const arrayBuffer = midi.toArray()
    // 将ArrayBuffer转换为Buffer并写入文件
    fs.writeFileSync(filePath, Buffer.from(arrayBuffer))
}