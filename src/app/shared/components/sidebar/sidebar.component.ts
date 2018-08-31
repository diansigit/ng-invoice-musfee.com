import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MENU
} from '../../../app.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() currentUser;

  menus: any;

  constructor() {}

  ngOnInit() {
    this.menus = MENU;
  }

  menuHasRole(menuRoles): boolean {
    const roles = this.currentUser.roles;

    if (menuRoles.length > 0 && roles) {
      let showMenu = false;

      roles.forEach(role => {
        if (menuRoles.indexOf(role.code) !== -1) {
          showMenu = true;
        }
      });

      return showMenu;
    } else {
      return true;
    }
  }

}
