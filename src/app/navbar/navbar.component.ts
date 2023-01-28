import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private breakpointObserver:BreakpointObserver){}

  title = 'quangcao';
  isCollapsed = true;
  isMenu=true;
  ngOnInit(): void {
    this.getBeakpoint()
  }
  getBeakpoint(){this.breakpointObserver
    .observe(['(min-width: 800px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        console.log('Viewport width is 500px or greater!');
        this.isMenu=false
      } else {
        console.log('Viewport width is less than 500px!');
        this.isMenu=true
      }
    });}
}
