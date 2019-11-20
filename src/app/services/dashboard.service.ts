import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class DashboardService {
    constructor(private http: HttpClient){       
    }

    getSelectionList() {
        return this.http.get("../../assets/selectionList.json");
    }
}