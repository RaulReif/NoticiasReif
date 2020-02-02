import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  options = [
    {
      name: 'Main',
      redirect: 'main',
      icon: 'home'
    },
    {
      name: 'Policy',
      redirect: 'policy',
      icon: 'briefcase'
    },
    {
      name: 'Sports',
      redirect: 'sports',
      icon: 'american-football'
    },
    {
      name: 'Games',
      redirect: 'games',
      icon: 'logo-steam'
    },
    {
      name: 'Finance',
      redirect: 'finance',
      icon: 'logo-euro'
    },
    {
      name: 'Fitness',
      redirect: 'fitness',
      icon: 'bicycle'
    },
  ];

  constructor() { }

  ngOnInit() {}

}
