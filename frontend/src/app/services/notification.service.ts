import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  showInformation(message: string, duration = 3000, action = 'Close'): void {
    this._snackBar.open(message, action, {
      duration: duration,
    });
  }

  showError(message: string, duration = 7000, action = 'Close'): void {
    this._snackBar.open(message, action, {
      duration: duration,
      panelClass: ['error-snackbar'],
    });
  }
}
