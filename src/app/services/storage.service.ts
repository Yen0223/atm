import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class StorageService {
    constructor() {}
    public async set(checklists : string, value : any): Promise < void > {
        localStorage.setItem(checklists, JSON.stringify(value));
    }
    public async get(key : string): Promise < any > {
        let value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        } else {return undefined}
    }
}
