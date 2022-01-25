import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GlobalshareService {
  currUser :string = '';
  constructor(private http :HttpClient){

  }

  isToken = new BehaviorSubject(false);
  apiUrl = 'https://reqres.in/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  login(logobj:any) {
    let retvalue = false;
    if(logobj != null && logobj['user_id'] == 'samcom@gmail.com')
     {
      if(logobj['password'] == '123')
        retvalue = true
      else
        alert("Invalid Password");
    }
    else if( logobj['user_id'] == 'samcomtechnobrains@gmail.com'){
      if(logobj['password'] == 'sam123@')
        retvalue = true
      else
        alert("Invalid Password");
    }
    else{
      retvalue = false
      alert("Invalid User ID");
    }
    
    return retvalue;
  }

  listOfusers():Observable<any>{debugger;
    let url = this.apiUrl+'users';
    return this.http.get(url,this.httpOptions);
  }

}
