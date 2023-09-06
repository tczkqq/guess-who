import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  link: string;

  ngOnInit(): void {
    this.link = window.location.href;
  }

  onCopyClick(): void {
    navigator.clipboard.writeText(this.link);
  }
}
