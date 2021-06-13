import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

  @HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('.header') as HTMLElement;
    console.log('asda')
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('header-inverse');
    } else {
      element.classList.remove('header-inverse');
    }
  }
}
