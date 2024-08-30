import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent {
 
  isCollapsed: boolean = true;
  constructor(private router: Router) {}
  menuItems: { icon: string; description: string; hidden: boolean;route?: string }[] = [
    { icon: 'bi bi-grid', description: 'Dashboard', hidden: false,route:'/dashboard'  },
    { icon: 'bi bi-person-circle', description: 'product categories', hidden: false},
    { icon: 'bi bi-file-bar-graph', description: 'Lead Management', hidden: false },
    { icon: 'bi bi-envelope-check', description: 'Contact', hidden: false },
    { icon: 'bi bi-pencil', description: 'Application', hidden: false },
    { icon: 'bi bi-person-bounding-box', description: 'Mycontacts', hidden: false },
    { icon: 'bi bi-card-list', description: 'claims', hidden: false },
    { icon: 'bi bi-twitter', description: 'Twitter', hidden: false },
    { icon: 'bi bi-gear', description: 'Settings', hidden: false },
    
  ];
  navigateTo(route?: string) {
    if (route) {
      this.router.navigate([route]);;
    }
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;

    if (this.isCollapsed) {
      this.hideDescriptions();
    }
  }

  hideDescriptions() {
    this.menuItems.forEach(item => item.hidden = true);
  }
  

  }



