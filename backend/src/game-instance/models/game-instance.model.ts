import { Document } from 'mongoose';

export interface GameInstance extends Document {
    readonly users: string[];
    readonly board: string;
    readonly gameAdditions: string[];
    readonly cards: number[];
    readonly isDone: boolean;
}
