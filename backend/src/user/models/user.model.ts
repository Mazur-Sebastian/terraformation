import { Document } from 'mongoose';

export interface User extends Document {
    readonly name: string;
    readonly usedCards: number[];
    readonly handCards: number[];
    readonly points: number;
    readonly resources: string[];
}
