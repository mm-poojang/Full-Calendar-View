import { Component, ViewChild } from '@angular/core';
import { CalendarOptions, EventContentArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import timeGrigPlugin from '@fullcalendar/timegrid';
import { EventInput } from '@fullcalendar/core';
import { addDays, startOfToday, isBefore, isAfter } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

}
