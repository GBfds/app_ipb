import { ARA } from "./ARA";

export type biblieType = typeof ARA
export type bookType = typeof BibliaARA[0]
export type chapterType = {
    length: number;
    verse: number;
    verses: string[][];
    name: string;
}
export const BibliaARA = ARA

export const OldTestament = BibliaARA.slice(0,38)
export const NewTestament = BibliaARA.slice(39,66)
