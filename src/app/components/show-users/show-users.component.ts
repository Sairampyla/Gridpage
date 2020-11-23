import { Component, Input, OnInit } from '@angular/core';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
 
   public data =[]

   public show:boolean = false;
   @Input() Values = {name:'',sequence:''}
  constructor(private _servc:SampleService) { }

  ngOnInit(): void {
    this._servc.getData().subscribe(x => this.data = x)
  }

  onSubmit(){

  }

  

}
