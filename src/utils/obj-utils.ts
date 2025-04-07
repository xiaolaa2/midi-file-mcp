export function getTrackByIndex(midi: any, trackIndex: number) {
    if (trackIndex < 0 || trackIndex >= midi.tracks.length) {
        throw new Error('Track index out of range')
    }
    return midi.tracks[trackIndex]
}