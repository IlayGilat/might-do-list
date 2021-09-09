import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Storage } from '@ionic/storage-angular';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  myTasks: Task[] = [];
  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
    const t: Task = {id:1,text:'hello'};
    this.myTasks.push(t);
  }



  deleteTask(task: Task){

  }


}
