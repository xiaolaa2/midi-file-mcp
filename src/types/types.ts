import { z } from 'zod'

const PitchDescriptionSchema = z.discriminatedUnion('type', [
    z.object({
        type: z.literal('name'),
        name: z.string(),
    }),
    z.object({
        type: z.literal('pitch'),
        pitch: z.string(),
        octave: z.number(),
    }),
    z.object({
        type: z.literal('midi'),
        midi: z.number(),
    }),
])

const VelocityDescriptionSchema = z.object({
    velocity: z.number().optional(),
    noteOffVelocity: z.number().optional(),
})

const TimeDescriptionSchema = z.discriminatedUnion('timeType', [
    z.object({
        timeType: z.literal('seconds'),
        time: z.number(),
        duration: z.number().optional(),
    }),
    z.object({
        timeType: z.literal('ticks'),
        ticks: z.number(),
        durationTicks: z.number().optional(),
    }),
])

export const NoteConstructorInterfaceSchema = PitchDescriptionSchema
    .and(VelocityDescriptionSchema)
    .and(TimeDescriptionSchema)

export const ControlChangeInterfaceSchema = z.object({
    number: z.number(),
    value: z.number(),
}).and(z.union([
    z.object({
        time: z.number(),
    }),
    z.object({
        ticks: z.number(),
    })
]))

export const PitchBendInterfaceSchema = z.object({
    value: z.number(),
}).and(z.union([
    z.object({
        time: z.number(),
    }),
    z.object({
        ticks: z.number(),
    })
]))