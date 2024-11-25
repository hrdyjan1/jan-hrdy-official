import { czechProjectList, englishProjectList } from "./utils/projectData";
import { BehaviorSubject, Observable } from "rxjs";
import { SEARCH_POSSIBILITIES } from "./utils/searchPossibilities";

export type ProjectListType = typeof englishProjectList | typeof czechProjectList;

export type GetSuggestionsType =  (subject: BehaviorSubject<string>, possibility: keyof typeof SEARCH_POSSIBILITIES) => Observable<string[]>