import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { RegisterComponent } from '@pages/auth/register/register.component';
import { LoginComponent } from '@pages/auth/login/login.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  constructor(private dialog: MatDialog) {}

  onLoginClick(): void {
    this.dialog.open(LoginComponent);
  }

  onRegisterClick(): void {
    this.dialog.open(RegisterComponent);
  }
}
