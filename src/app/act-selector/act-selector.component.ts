import { Component, OnInit, Input } from '@angular/core';
import { Capability } from '../capability';
import { User } from '../user';

@Component({
  selector: 'app-act-selector',
  templateUrl: './act-selector.component.html',
  styleUrls: ['./act-selector.component.css']
})
export class ActSelectorComponent implements OnInit {
  @Input() capability: Capability;
  user: User;

  constructor() { this.user = {name: "Default User"} }

  ngOnInit() {

  }

}
