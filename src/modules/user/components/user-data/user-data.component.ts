import { Component, Input, OnInit, Optional, AfterViewInit } from '@angular/core';
import { UserInterface } from '../../../../interfaces';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit, AfterViewInit {

  @Input() user: UserInterface;

  constructor(@Optional() private parent: UserComponent) { }

  ngOnInit() {
    console.log(this.parent);
  }

  ngAfterViewInit() {
    this.parent.user = { ...this.user };
  }

}
