import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AngularFirestore } from '@angular/fire/firestore';
interface list {
  id: number;
  label: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData:any;
  dashboardDetails: any;
  selectionList: list[];
  mentee:any = 1;
  constructor(private dashboardServices: DashboardService,private firestore: AngularFirestore) { }

  ngOnInit() {
    this.getUsers();
    // this.selectionList = [
    //   {id: 1, label: 'Email Communication'},
    //   {id: 2, label: 'Skating'},
    //   {id: 3, label: 'Online Clasess'},
    //   {id: 4, label: 'Live Classes'},
    //   {id: 5, label: 'Email Communication'},
    //   {id: 6, label: 'Skating'},
    //   {id: 7, label: 'Online Clasess'},
    //   {id: 8, label: 'Live Classes'},
    // ]
    this.getSelctionList()
  }
  getSelctionList() {
    this.dashboardServices.getSelectionList().subscribe((res:any)=>{
      this.selectionList = res.selectionList
    })
  }
  getUsers() {
    this.firestore.collection("users").snapshotChanges().subscribe((res)=>{
      let email = sessionStorage.getItem('userMail')
      res.map(action => {
        let data: any = action.payload.doc.data();
        let $key: any = action.payload.doc.id;
        if(email === data.email){
          this.userData = data;
          this.setDashboardData();
        }
    });
    })
  }

  setDashboardData() {
    if(parseInt(this.userData.radioData) === this.mentee){
      this.dashboardDetails = {
        title: 'Mentee should pick topics',
      }
    } else {
      this.dashboardDetails = {
        title: 'Mentor should pick topics',}      
    }
  }

}
