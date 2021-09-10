import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-daily-highlight',
  templateUrl: './daily-highlight.component.html',
  styleUrls: ['./daily-highlight.component.scss'],
})
export class DailyHighlightComponent implements OnInit {
  dailyText: string;
  finished: boolean;
  constructor(private storage: Storage) { }

  async ngOnInit() {
    this.storage.create();
    this.dailyText = await this.storage.get('dailyhighlight');
    this.finished = await this.storage.get('isChecked');
  }

  async onChange() {
    await this.storage.set('dailyhighlight',this.dailyText);
  }

  async onCheking(){
    console.log(this.finished);
    await this.storage.set('isChecked',this.finished);
  }
}
