import { Component, OnInit } from '@angular/core';
import { Capability } from '../capability';


@Component({
  selector: 'app-capability-list',
  templateUrl: './capability-list.component.html',
  styleUrls: ['./capability-list.component.css']
})
export class CapabilityListComponent implements OnInit {
  capabilities: Capability[];

  constructor() { this.capabilities = CAPABILITIES}

  ngOnInit() {
    
  }

}

const CAPABILITIES = [
  {
    title: "Story time",
    tagline: "Nothing like a good story",
    icon: "book",
    description: "Read to your child at least 15 minutes",
    category: "Development",
  },
  {
    title: "Bubble bath",
    tagline: "Scrub a dub dub",
    icon: "soap",
    description: "Daily bath time routine",
    category: "General",
  },
  {
    title: "Community event",
    tagline: "Time for an outing!",
    icon: "car",
    description: "Get out on the town and mix with the locals",
    category: "Development",
  },
  {
    title: "Public changing",
    tagline: "Getting dirty",
    icon: "poop",
    description: "Baby have a movement on the road?  Hit the nearest public restroom and hope it has a changing table",
    category: "Hygiene",
  },
  {
    title: "Grocery run with the baby",
    tagline: "Hit the stores",
    icon: "cart",
    description: "Do a full grocery run with baby in tow",
    category: "Chores",
  }
];