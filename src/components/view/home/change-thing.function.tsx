import { updateState } from "hyperwrap";

export const changeThing = (e: any, thing: string) => { updateState('thing', thing); }
