import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({providedIn :"root"})
export  class personneService {

public  constructor(private httpclient : HttpClient){}


public  getpersonelist ():Observable<any>{

return  this.httpclient.get("http://localhost:8181/personne/listpersonne");

}


public  deletepersonnefromdatabase (id):Observable<any>{

return this.httpclient.get('http://localhost:8181/personne/deletepersonne/'+id)

}

}
