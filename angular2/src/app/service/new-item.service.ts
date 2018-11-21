import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewItemService {

    constructor(private http: Http) {}


    get() {
      
        return this.http.get('http://localhost:7070/')
        .map(response => {
            return response.json();
        });
    }

    add(newItem) {
        //let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' }); 
        return this.http.post('http://localhost:7070/add/parent', newItem)
            .map(response => {});
    }

    delete(newItem) {
       return this.http.delete(`http://localhost:7070/parent/${newItem.ID}`)
        .map(response => {});
    }


    upload(input) {
    let headers = new Headers({ 'Content-Type': 'image/jpeg' });
    return this.http
        .post("http://localhost:7070/add/child", input, { headers: headers });
    }

    addChild(child) {
        //let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' }); 
        return this.http.post('http://localhost:7070/add/child', child)
            .map(response => {});
    }

    deleteChild(child) {
       return this.http.delete(`http://localhost:7070/child/${child.IdChild}`)
        .map(response => {});
    }

}