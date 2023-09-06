import { Component } from '@angular/core';
import { BoardsService } from '@services/api-requests/boards.service';
import { NotificationService } from '@services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public notificationService: NotificationService,
    private boardsServe: BoardsService
  ) {}

  testClick() {
    this.boardsServe.getAll().subscribe((data) => {
      console.log(data);
    });
  }
}
