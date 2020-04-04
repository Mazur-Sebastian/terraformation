import { Document } from 'mongoose';

export interface User extends Document {
    readonly users: string[];
    readonly name: string;
    readonly usedCards: number[];
    readonly handCards: number[];
    readonly points: number;
    readonly resources: Resources[];
}

interface Resources {
    readonly id: number;
    readonly name: string;
    readonly levelProduction: number;
    readonly count: number;
}
