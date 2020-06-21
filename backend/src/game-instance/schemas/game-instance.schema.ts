import * as mongoose from 'mongoose';

export const GameInstanceSchema = new mongoose.Schema(
    {
        users: {
            type: [String],
        },
        board: { type: String },
        instanceName: { type: String },
        extensions: { type: [String] },
        cards: { type: [Number] },
        isDone: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);
