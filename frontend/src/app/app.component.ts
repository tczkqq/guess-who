import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ColorSchemeService } from '@services/color-scheme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Guess Who!';
  mobileDisplay = false;

  constructor(
    private translate: TranslateService,
    private colorSchemeService: ColorSchemeService
  ) {}

  ngOnInit(): void {
    this.colorSchemeService.load();
    if (localStorage.getItem('lang')) {
      this.translate.use(localStorage.getItem('lang') as string);
    } else {
      localStorage.setItem('lang', 'en');
      this.translate.use(localStorage.getItem('lang') as string);
    }
    this.detectDisplayType();
  }

  detectDisplayType(): void {
    if (window.innerWidth < 900) {
      this.mobileDisplay = true;
    } else {
      this.mobileDisplay = false;
    }
  }
}
