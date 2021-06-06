import data from '../data.json';
import { Data } from './../models/Data.d';

export const getData = (): Data => {
    return {
        ...data,
    };
};
