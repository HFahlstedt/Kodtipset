import { ContentData } from "./content-data";

export interface Category {
    id: number; 
    name: string; 
    content: ContentData[];
    style?: any;
}