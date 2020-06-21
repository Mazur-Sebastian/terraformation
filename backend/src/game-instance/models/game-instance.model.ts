import {Document} from 'mongoose';

export interface GameInstance extends Document {
    readonly users: string[];
    readonly board: string;
    readonly extensions: string[];
    readonly cards: number[];
    readonly isDone: boolean;
    readonly instanceName: string;
}
