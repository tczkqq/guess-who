import { Component } from '@angular/core';

import { MatChipListboxChange } from '@angular/material/chips';

import { TranslateService } from '@ngx-translate/core';

import { ColorSchemeService } from '@services/color-scheme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  flagsPath = '../../../assets/flags/';

  currentLang = localStorage.getItem('lang') || 'en';
  langList = [
    { name: 'English', code: 'en', flag: 'gb.svg' },
    { name: 'Polski', code: 'pl', flag: 'pl.svg' },
  ];

  currentTheme = this.colorSchemeService.currentActive();
  themeList = [
    { name: 'Dark theme', value: 'dark', icon: 'dark_mode' },
    { name: 'Light theme', value: 'light', icon: 'light_mode' },
  ];

  constructor(
    public colorSchemeService: ColorSchemeService,
    private translate: TranslateService
  ) {}

  onThemeChange(event: MatChipListboxChange): void {
    if (event.value) {
      this.colorSchemeService.update(event.value);
      this.currentTheme = event.value;
    }
  }

  onLangChange(event: MatChipListboxChange): void {
    if (event.value) {
      this.translate.use(event.value);
      localStorage.setItem('lang', event.value);
      this.currentLang = event.value;
    }
  }
}
