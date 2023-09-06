import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: true,
  imports: [NgIf, MatProgressSpinnerModule, MatProgressBarModule],
})
export class LoadingComponent {
  @Input() mode: 'spinner' | 'bar' = 'spinner';
  @Input() centerSpinner = true;
}
