import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IApiBoard } from '@models/board.model';

import { BoardsService } from '@services/api-requests/boards.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  boards$: Observable<IApiBoard[]> = this.boardsService.getAll();
  searchControl = new FormControl();

  constructor(private boardsService: BoardsService) {}

  ngOnInit(): void {
    this.boards$.subscribe();
  }
}
