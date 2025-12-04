// TODO: FIX THE TYPES OF GET KEYS
// @ts-nocheck
export const getKeys = <T>(object: T) => Object.keys(object) as (keyof T)[];
