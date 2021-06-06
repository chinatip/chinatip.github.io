import data from '../data.json';
import { Data } from '../models/Data';

export const getData = (): Data => {
    return {
        ...data,
    };
};
