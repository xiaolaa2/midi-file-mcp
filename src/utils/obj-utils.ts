// 注意：不再导入loadMidiFile
// 此函数现在直接接收midi对象而不是文件路径，这样我们可以保持对同一个midi对象的引用
export function getTrackByIndex(midi: any, trackIndex: number) {
    if (trackIndex < 0 || trackIndex >= midi.tracks.length) {
        throw new Error('Track index out of range')
    }
    return midi.tracks[trackIndex]
}