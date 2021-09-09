import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTaskComponent } from '../components/add-task/add-task.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { TaskItemComponent } from '../components/task-item/task-item.component';

import { HomePageRoutingModule } from './home-routing.module';
import { DailyHighlightComponent } from '../components/daily-highlight/daily-highlight.component';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [HomePage,TasksComponent,AddTaskComponent,DailyHighlightComponent,TaskItemComponent],
    entryComponents: [TasksComponent,TaskItemComponent,AddTaskComponent,DailyHighlightComponent,TaskItemComponent],
    exports: [TaskItemComponent,AddTaskComponent,DailyHighlightComponent,TasksComponent],


})
export class HomePageModule {}
