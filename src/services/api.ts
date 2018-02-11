import { Category } from "../entities/category";

export class Api {
    getCategories(): Promise<Category[]> { 
        return Promise.resolve<Category[]>([{
            id: 1, 
            name: 'Spel',
            style: { 'background-color': 'red' }
        },
        {
            id: 2,
            name: 'Hårdvara',
            style: { 'background-color': 'green' }
        },
        {
            id: 3,
            name: 'Programmeringsspråk',
            style: { 'background-color': 'purple' }
        },
        {
            id: 4,
            name: 'Utbildning',
            style: { 'background-color': 'yellow', 'color': 'black' }
        },
        {
            id: 5,
            name: 'Böcker',
            style: { 'background-color': 'orange' }
        }]);
    }
}