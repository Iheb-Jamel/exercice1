import { Component, OnInit } from '@angular/core';
import { personneService } from './personneService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personnefrontapplication';
  personnes : any
public constructor(private  personneService: personneService ){}
  ngOnInit(): void {

this.personneService.getpersonelist().subscribe(data=>{

this.personnes = data

});

  }
 public deletepersonne(id){
this.personneService.deletepersonnefromdatabase(id).subscribe(data=>{

this.ngOnInit()

})
  console.log(id)
 }

}
