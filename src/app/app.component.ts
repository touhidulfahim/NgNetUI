import { Component } from '@angular/core';
import { Country } from './models/ng-net-ui';
import { NgNetUIService } from './services/ng-net-ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgNetUI';

  countries:Country[]=[];
  constructor(private ngNetUIServices : NgNetUIService){}
  ngOnInit():void{
    this.ngNetUIServices.getCountries()
    .subscribe((result:Country[])=>(this.countries==result));
  }
}
