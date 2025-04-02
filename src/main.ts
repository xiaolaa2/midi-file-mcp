#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { loadMidiFile, saveMidiFile } from './utils/file-util.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { getTrackByIndex } from './utils/obj-utils.js'
import {
    ControlChangeInterfaceSchema,
    NoteConstructorInterfaceSchema,
    PitchBendInterfaceSchema,
} from './types/types.js'

const server = new McpServer({
    name: 'midi-file-mcp',
    version: '0.0.1',
}, {
    capabilities: {
        tools: {},
    }
})

const withErrorHandling = <T extends Record<string, any>>(handler: (args: T) => any) => {
    return async (args: T) => {
        try {
            return await handler(args)
        } catch (e) {
            return {
                isError: true,
                content: [
                    {
                        type: 'text',
                        text: `Error: ${e}`,
                    },
                ]
            }
        }
    }
}

server.tool(
    'get_midi_info',
    'Get midi file info',
    {
        filePath: z.string().describe('Absoulate File Path to midi file'),
    },
    withErrorHandling(({ filePath }) => {
        const midi = loadMidiFile(filePath)
        const midiInfo = {
            header: midi.header.toJSON(),
            tracksCount: midi.tracks.length,
            duration: midi.duration,
            durationTicks: midi.durationTicks,

        }
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(midiInfo),
                },
            ]
        }
    })
)

server.tool(
    'set_tempo',
    'Set tempo for midi file',
    {
        filePath: z.string().describe('Absoulate File Path to midi file'),
        bpm: z.number().describe('BPM'),
    },
    withErrorHandling(({ filePath, bpm }) => {
        const midi = loadMidiFile(filePath)
        midi.header.setTempo(bpm)
        saveMidiFile(midi, filePath)
        return {
            content: [
                {
                    type: 'text',
                    text: `Set tempo to ${bpm}`,
                },
            ]
        }
    })
)

server.tool(
    'get_tracks_info',
    'Get tracks info from midi file',
    {
        filePath: z.string().describe(`Absoulate File Path to midi file 
            eg: D:\programming\Project\my-project\midi-parser-mcp\test.mid`),
    },
    withErrorHandling(({ filePath }) => {
        const midi = loadMidiFile(filePath)
        const tracksInfo = midi.tracks.map(track => {
            return {
                name: track.name,
                instrument: track.instrument.toJSON(),
                channel: track.channel,
                endOfTrackTicks: track.endOfTrackTicks,
                duration: track.duration,
                durationTicks: track.durationTicks,
                noteCount: track.notes.length,
            }
        })
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(tracksInfo),
                },
            ]
        }
    })
)

server.tool(
    'get_track_info_by_index',
    `Get track info from midi file by track index. 
    name, instrument, channel, endOfTrackTicks, duration, durationTicks, noteCount`,
    {
        filePath: z.string().describe('Absoulate File Path to midi file'),
        trackIndex: z.number().describe('Track index number'),
    },
    withErrorHandling(({ filePath, trackIndex }) => {
        const midi = loadMidiFile(filePath)
        const track = getTrackByIndex(midi, trackIndex)
        const trackInfo = {
            name: track.name,
            instrument: track.instrument.toJSON(),
            channel: track.channel,
            endOfTrackTicks: track.endOfTrackTicks,
            duration: track.duration,
            durationTicks: track.durationTicks,
            noteCount: track.notes.length,
        }
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(trackInfo),
                },
            ]
        }
    })
)

server.tool(
    'get_notes_by_index',
    'Get notes from midi file by track index',
    {
        filePath: z.string().describe('Absoulate File Path to midi file'),
        trackIndex: z.number().describe('Track index number'),
    },
    withErrorHandling(({ filePath, trackIndex }) => {
        const midi = loadMidiFile(filePath)
        const track = getTrackByIndex(midi, trackIndex)
        const notes = track.notes.map((note: any) => note.toJSON())
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(notes),
                },
            ]
        }
    })
)

server.tool(
    'get_pitchbends_by_index',
    'Get pitchbends from midi file by track index',
    {
        filePath: z.string().describe('Absoulate File Path to midi file'),
        trackIndex: z.number().describe('Track index number'),
    },
    withErrorHandling(({ filePath, trackIndex }) => {
        const midi = loadMidiFile(filePath)
        const track = getTrackByIndex(midi, trackIndex)
        const pitchbends = track.toJSON().pitchBends
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(pitchbends),
                },
            ]
        }
    })
)

server.tool(
    'get_controlchanges_by_index',
    'Get controlchanges from midi file by track index',
    {
        filePath: z.string().describe('Absoulate File Path to midi file'),
        trackIndex: z.number().describe('Track index number'),
    },
    withErrorHandling(({ filePath, trackIndex }) => {
        const midi = loadMidiFile(filePath)
        const track = getTrackByIndex(midi, trackIndex)
        const controlchanges = track.toJSON().controlChanges
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(controlchanges),
                },
            ]
        }
    })
)

server.tool(
    'add_notes_by_index',
    'Add notes to midi file by track index',
    {
        filePath: z.string().describe('Absoulate File Path to midi file'),
        trackIndex: z.number().describe('Track index number'),
        notes: z.array(NoteConstructorInterfaceSchema)
    },
    withErrorHandling(({ filePath, trackIndex, notes }) => {
        // 读取文件
        const midi = loadMidiFile(filePath)
        // 查找轨道
        const track = getTrackByIndex(midi, trackIndex)
        // 添加音符
        notes.forEach(note => {
            track.addNote(note)
        })
        // 保存文件
        saveMidiFile(midi, filePath)

        return {
            content: [
                {
                    type: 'text',
                    text: 'add note success',
                },
            ]
        }
    })
)

server.tool(
    'add_controlchanges_by_index',
    'Add controlchanges to midi file by track index',
    {
        filePath: z.string().describe('Absoulate File Path to midi file'),
        trackIndex: z.number().describe('Track index number'),
        controlchanges: z.array(ControlChangeInterfaceSchema)
    },
    withErrorHandling(({ filePath, trackIndex, controlchanges }) => {
        // 读取文件
        const midi = loadMidiFile(filePath)
        // 查找轨道
        const track = getTrackByIndex(midi, trackIndex)
        // 添加控制器变化
        controlchanges.forEach(controlchange => {
            track.addCC(controlchange)
        })
        // 保存文件
        saveMidiFile(midi, filePath)

        return {
            content: [
                {
                    type: 'text',
                    text: 'add controlchange success',
                },
            ]
        }
    })
)

server.tool(
    'add_pitchbends_by_index',
    'Add pitchbends to midi file by track index',
    {
        filePath: z.string().describe('Absoulate File Path to midi file'),
        trackIndex: z.number().describe('Track index number'),
        pitchbends: z.array(PitchBendInterfaceSchema)
    },
    withErrorHandling(({ filePath, trackIndex, pitchbends }) => {
        // 读取文件
        const midi = loadMidiFile(filePath)
        // 查找轨道
        const track = getTrackByIndex(midi, trackIndex)
        // 添加弯音
        pitchbends.forEach(pitchbend => {
            track.addPitchBend(pitchbend)
        })
        // 保存文件
        saveMidiFile(midi, filePath)

        return {
            content: [
                {
                    type: 'text',
                    text: 'add pitchbend success',
                },
            ]
        }
    })
)

server.tool(
    'add_track',
    'Add a new track to midi file and return the new track info',
    {
        filePath: z.string().describe('Absoulate File Path to midi file'),
    },
    withErrorHandling(({ filePath }) => {
        // 读取文件
        const midi = loadMidiFile(filePath)
        // 添加新轨道
        const newTrack = midi.addTrack()
        // 保存文件
        saveMidiFile(midi, filePath)

        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(newTrack),
                },
            ]
        }
    })
)

const transport = new StdioServerTransport()
await server.connect(transport)