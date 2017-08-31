import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  items: SideNavItem[];

  constructor() { this.items = SIDENAVITEMS }

  ngOnInit() {
  }

}

class SideNavItem {
  label: string;
  icon: string;
}

const SIDENAVITEMS = [
  {
    label: 'Status',
    icon: 'dashboard'
  },
  {
    label: 'Add achievement',
    icon: 'add_circle'
  },
  {
    label: 'Level-up Info',
    icon: 'trending_up'
  },
  {
    label: 'Standings',
    icon: 'polls'
  },
  {
    label: 'Parent friends',
    icon: 'group'
  }
]