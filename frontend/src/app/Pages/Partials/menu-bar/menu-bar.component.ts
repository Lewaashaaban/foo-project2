import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  constructor(
    private router: Router
  ) {
    
  }
  scrollToFooter() {
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
      }
  } 
  
  homeClick() {
    this.router.navigateByUrl('/');
  }
  findClick() {
    this.router.navigate(['#find-us'])
  }
  footerClick() {
    this.router.navigate(['#footer']);
  }
  CartClick() {
    this.router.navigate(['/cart']);
  }

}
