import { Component } from '@angular/core';

@Component({
  selector: 'app-today-schedule',
  templateUrl: './today-schedule.component.html',
  styleUrls: ['./today-schedule.component.css']
})
export class TodayScheduleComponent {
   currentDate: Date = new Date();
  dates: { date: Date, day: string }[] = [];
  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 60000);
    
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const day = this.getDayOfWeek(date);
      this.dates.push({ date, day });
    }
  }
  getDayOfWeek(date: Date): string {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays[date.getDay()];
  }
}
