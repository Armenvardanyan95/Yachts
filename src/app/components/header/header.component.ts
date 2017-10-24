import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu = [
    {
      name: 'Financial Management',
      children: [
        {name: 'Banking', path: '/banking'},
        {name: 'Reporting', path: '/reporting'},
        {name: 'Insurance', path: '/insurance'}
      ]
    },
    {
      name: 'Crew Management',
      path: '/crew-management'
    },
    {
      name: 'Operational Management',
      children: [
        {name: 'Refit', path: '/refit'},
        {name: 'Technical Support', path: '/technical-support'},
        {name: 'Fuel & Dockage', path: '/fuel-and-dockage'},
        {name: 'Procurement & Yacht Services', path: '/procurement-and-services'},
      ]
    },
    {
      name: 'ISM & ISMS',
      path: 'ism-and-isms'
    },
    {
      name: 'Luxury Concierge Services & Lifestyle Management',
      path: '/luxury'
    },
    {
      name: 'Confidentiality',
      path: '/confidentiality'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
