import { ARA } from "./ARA";

export type TypeBibliaARA = typeof ARA
export const BibliaARA = ARA

export const OldTestament = BibliaARA.slice(0,38)
export const NewTestament = BibliaARA.slice(39,66)
