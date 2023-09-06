import { RouterModule } from '@angular/router';
import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';

import { SettingsComponent } from '@pages/settings/settings.component';
import { ShareComponent } from '@pages/share/share.component';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    TranslateModule,
  ],
})
export class TopMenuComponent implements OnInit {
  mobileDisplay = false;
  @Output() menuClick = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.detectDisplayType();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.detectDisplayType();
  }

  onSettingsClick(): void {
    this.dialog.open(SettingsComponent);
  }

  onShareClick(): void {
    const shareData = {
      title: 'Guess who',
      text: 'Play with me',
      url: window.location.href,
    };

    navigator.canShare(shareData)
      ? navigator.share(shareData)
      : this.dialog.open(ShareComponent);
  }

  detectDisplayType(): void {
    if (window.innerWidth < 480) {
      this.mobileDisplay = true;
    } else {
      this.mobileDisplay = false;
    }
  }
}
