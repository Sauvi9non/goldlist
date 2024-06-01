// Note 모델링
import { Page } from "./page";

export enum Language {
    en = "English",
    kr = "Korean",
    sp = "Spanish",
    jp = "Japanese",
    etc = "Other"
}

export interface Note {
    noteDate: string;
    noteId: string;
    language: Language;
    pages: Page[];
}