import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() delete: EventEmitter<Task> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {}

  onDelete(task){
    this.delete.emit(task);
  }


}
