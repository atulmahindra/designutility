import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-backend-footer',
  templateUrl: './backend-footer.component.html',
  styleUrls: ['./backend-footer.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class BackendFooterComponent implements OnInit {
  
  menus:any;
  constructor(public sidebarservice:SharedService) {
    this.menus = sidebarservice.getMenuList();
   }

  ngOnInit(): void {
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu:any) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach((element: { active: boolean; }) => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu:any) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

}
