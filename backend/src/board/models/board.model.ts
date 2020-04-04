import { Document } from 'mongoose';

import { Title } from './title.model';
import { Award } from './award.model';

export interface Board extends Document {
    readonly poles: string[];
    readonly generation: number;
    readonly oxygen: number;
    readonly oceans: number;
    readonly temperature: boolean;
    readonly titles: Title[];
    readonly awards: Award[];
}
