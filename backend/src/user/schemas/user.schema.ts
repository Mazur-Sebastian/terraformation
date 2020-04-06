import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        usedCards: { type: [Number] },
        handCards: { type: [Number] },
        points: { type: Number },
        resources: { type: [String] },
    },
    {
        timestamps: true,
    },
);
