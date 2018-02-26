import { Category } from "../entities/category";

export class Api {
    private categories: Category[] = [{
        id: 1, 
        name: 'Spel',
        style: { 'background-color': 'red' },
        content: [
            { id: 101, title: 'Spel 1', },
            { id: 102, title: 'Spel 2', }
        ]
    },
    {
        id: 2,
        name: 'Hårdvara',
        style: { 'background-color': 'green' },
        content: [
            { id: 201, title: 'Robot 1', },
            { id: 202, title: 'Robot 2', },
            { id: 203, title: 'Robot 3', },
            { id: 204, title: 'Robot 4', }
        ]
    },
    {
        id: 3,
        name: 'Programmeringsspråk',
        style: { 'background-color': 'purple' },
        content: [
            { id: 301, title: 'Språk 1', },
            { id: 302, title: 'Språk 2', },
            { id: 303, title: 'Språk 3', }
        ]
    },
    {
        id: 4,
        name: 'Utbildning',
        style: { 'background-color': 'yellow', 'color': 'black' },
        content: [
            { id: 401, title: 'Kurs 1', },
            { id: 402, title: 'Kurs 2', },
            { id: 403, title: 'Kurs 3', },
            { id: 404, title: 'Kurs 4', }

        ]
    },
    {
        id: 5,
        name: 'Böcker',
        style: { 'background-color': 'orange' },
        content: [
            { id: 501, title: 'Bok 1', },
            { id: 502, title: 'Bok 2', }            
        ]
    },
    {
        id: 6,
        name: 'Butiker',
        style: { 'background-color': 'blue'},
        content: []
    }];

    getCategories(): Promise<Category[]> { 
        return Promise.resolve<Category[]>(this.categories);
    }

    getCategory(categoryId: number): Promise<Category> {
        const category = categoryId > 0 ? this.categories[categoryId-1] : this.categories[0];
        return Promise.resolve<Category>(category);
    }
}