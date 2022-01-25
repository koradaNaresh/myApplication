import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalshareService } from '../globalshare.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabledata : any;
  userName :any;
  constructor(private globalService  :  GlobalshareService,private router : Router) { }
  
  ngOnInit(): void {
    if(localStorage.getItem('userid') != "" && localStorage.getItem('userid') != null){
      this.userName = this.globalService.currUser != "" ? this.globalService.currUser : localStorage.getItem('userid');
      this.globalService.listOfusers().subscribe(data =>{
        console.log(this.tabledata);
        this.tabledata = data.data;
      });
     
    }else{
      this.globalService.isToken.next(false);
      this.globalService.currUser = "";
      localStorage.removeItem('userid');
      this.router.navigate(['login']);
    }
  }
  logout(){
    this.globalService.isToken.next(false);
    this.globalService.currUser = "";
    localStorage.removeItem('userid');
    this.tabledata.length = 0;
    this.router.navigate(['login']);
  }
}
