import data from '../data.json';
import { Data } from './../models/data.d';

export const getData = (): Data => {
    return {
        ...data,
    };
};
