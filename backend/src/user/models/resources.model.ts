import { Document } from 'mongoose';

export interface Resources extends Document {
    readonly id: number;
    readonly name: string;
    readonly levelProduction: number;
    readonly count: number;
}
