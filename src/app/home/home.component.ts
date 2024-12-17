import { Component, ViewChild } from '@angular/core';
import { CalendarOptions, EventContentArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import timeGrigPlugin from '@fullcalendar/timegrid';
import { EventInput } from '@fullcalendar/core';
import { addDays, startOfToday, isBefore, isAfter } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public title = 'fullCalnder-view';
  public isSidePanelVisible: boolean = false;
  selectedEventTitle = '';
  selectedEventImageUrl = '';
  selectedEventDescription = '';
  public selectedEventDate: string = '';
  public selectedEventTime: string = '';
  public selectedPlatformIcon: string = '';
  public showPopup: boolean = false;

  isPreviousEnabled = false;
  isNextEnabled = true;

  @ViewChild('calendarComponent') calendarComponent: any;

  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  today = startOfToday();
  maxFutureDate = addDays(this.today, 30)

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  allowDrag = false;

  public performance = [
    { label: 'Engagement', color: '#4C5F32', value: '58%' },
    { label: 'Views', color: '#45370F', value: '90.6K' },
    { label: 'Reach', color: '#CDE5FD', value: '1.2K' },
  ]

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGrigPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    allDaySlot: false,
    initialDate: new Date(),
    firstDay: new Date().getDay(),
    slotDuration: '01:00:00',
    slotLabelInterval: '01:00:00',
    slotMinTime: '08:00:00',
    slotMaxTime: '18:00:00',
    expandRows: true,
    selectable: true,
    dayHeaders: true,
    datesSet: this.handleDateRange.bind(this),
    eventDragStart: this.handleDragStart.bind(this),
    eventDrop: this.handleEventDrop.bind(this),
    // eventAllow: this.handleEventAllow.bind(this),
    validRange: {
      // start: new Date(),
      end: new Date(new Date().setDate(new Date().getDate() + 30))
    },
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    // eventChange: this.handleDraggedEvents.bind(this),
    // selectMirror: true,
    dayMaxEvents: true,
    dayHeaderFormat: {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    },
    titleFormat: {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      weekday: 'long'
    },
    dayHeaderContent: (args) => {
      const date = args.date;
      const day = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      const weekdayName = date.toLocaleDateString('en-US', { weekday: 'long' });

      const eventsOnThisDate = (this.calendarOptions.events as any).filter((event: any) =>
        new Date(event.date).toDateString() === date.toDateString()
      );

      const eventCount = eventsOnThisDate.length;
      const dynamicText = "Post";
      const count = 1;
      return {
        html: `
        <div style="color: #666; font-weight: 400;">
          <div class="today-date">${day}</div>
          <div class="header-info">
            <span>${weekdayName}</span>
            <span>${eventCount} ${dynamicText}</span>
          </div>
        </div>
      `
      };
    },
    editable: true,
    headerToolbar: {
      left: '',
      right: 'prev next'
    },
    events: [
      {
        title: 'Event 2',
        date: '2024-12-14',
        start: '2024-12-20T08:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar3.png', description: 'Description for Event 2 🌊 Embrace the unknown and unleash your inner explorer. Life is full of uncharted territories, waiting to be discovered. Step outside your comfort zone, dive into new experiences, and let every adventure shape you into a braver, bolder version of yourself.', icon: 'pi pi-facebook' }
      },
      {
        title: 'Event 3',
        date: '2024-12-12T12:00:00',
        start: '2024-12-23T12:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar1.png', description: 'Description for Event 1 🌊 Embrace the unknown and unleash your inner explorer. Life is full of uncharted territories, waiting to be discovered. Step outside your comfort zone, dive into new experiences, and let every adventure shape you into a braver, bolder version of yourself.🌊 Embrace the unknown and unleash your inner explorer. Life is full of uncharted territories, waiting to be discovered. Step outside your comfort zone, dive into new experiences, and let every adventure shape you into a braver, bolder version of yourself.', icon: 'pi pi-instagram' }
      },
      {
        title: 'Event 4',
        date: '2024-11-12T11:00:00',
        start: '2024-11-12T08:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar2.png', description: 'Description for Event 2', icon: 'pi pi-tiktok' }
      },
      {
        title: 'Event 4s',
        date: '2024-12-12',
        start: '2024-12-19T09:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar1.png' }
      },
      {
        title: 'Event 6s',
        date: '2024-12-17',
        start: '2024-12-17T09:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar4.png' }
      }, {
        title: 'Event 6s',
        date: '2024-12-17',
        start: '2024-12-25T10:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar3.png' }
      },
      {
        title: 'Event 6s',
        date: '2024-12-17',
        start: '2024-12-18T16:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar3.png' }
      },
      {
        title: 'Event 6s',
        date: '2024-12-12',
        start: '2024-12-26T14:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar2.png' }
      },
      {
        title: 'Event 6s',
        date: '2024-12-12',
        start: '2024-12-22T10:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar2.png' }
      },
      {
        title: 'Event 6s',
        date: '2024-12-12',
        start: '2024-12-27T11:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar1.png' }
      },
      {
        title: 'Event tess',
        date: '2024-12-21',
        start: '2024-12-21T02:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar4.png' }
      },
      {
        title: 'Event 5',
        date: '2024-12-12',
        start: '2024-12-15T12:00:00',
        extendedProps: { imageUrl: 'assets/images/calendar1.png', description: 'Description for Event 3 🌊 Embrace the unknown and unleash your inner explorer. Life is full of uncharted territories, waiting to be discovered. Step outside your comfort zone, dive into new experiences, and let every adventure shape you into a braver, bolder version of yourself.', icon: 'pi pi-instagram' }
      }
    ],
    eventContent: this.renderEventContent
  };

  public handleDateSelect(event: any) {
    // console.log('handleDateSelect', event);
  }

  public handleEventClick(event: any) {
    console.log('event', event);
    const { extendedProps, start } = event.event;
    // console.log('handleEventClick', event);
    this.isSidePanelVisible = true;
    this.selectedEventTitle = event.event.title;
    this.selectedEventImageUrl = event.event.extendedProps.imageUrl;
    this.selectedEventDescription = event.event.extendedProps.description;

    this.selectedEventDate = new Date(start).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    this.selectedEventTime = new Date(start).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    this.selectedPlatformIcon = extendedProps.platformIcon || 'pi pi-instagram';
  }

  public handleDraggedEvents(event: any) {
    // console.log('handleEvents', event);
    this.showPopup = true;
  }

  public renderEventContent(eventContent: EventContentArg) {
    const { title, start, extendedProps }: any = eventContent.event;
    const { imageUrl, description, icon } = extendedProps;
    const startTime = new Date(start).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    return {
      html: `
        <p-card header="Simple Card">
          <div class="calender-card">
            <div class="calender-header">
              <span>
                <i class="${icon || 'pi pi-calendar'}" style="font-size: 0.7rem"></i>
              </span>
              <span>
                 <i class="pi pi-clock" style="font-size: 0.7rem"></i> ${startTime}
              </span>
            </div>
            <div class="calender-image">
              <img src="${imageUrl}" alt="${title}" />
            </div>
            <p class="calender-desc">
              ${title} ${description}
              Lorem ipsum dolor sit amet... <br> 
            </p>
          </div>
        </p-card>`
    };
  }

  public eventClicked(event: any) { }

  public createAccount() {

  }

  public Hide(event: any) {

  }

  public handleDragStart(event: any) {
    console.log('called sarte');

  }

  public handleEventDrop(event: any) {
    console.log('called');
    this.showPopup = true;
    if (!this.allowDrag) {
      event.revert();
    }
  }

  public handleEventAllow(dropInfo: any, draggedEvent: any) {
    // return this.allowDrag;
  }

  public onPopupDecision(confirm: boolean) {
    this.allowDrag = confirm;
    this.showPopup = false;

    if (!confirm) {
      const draggedEvent = (this.calendarOptions.events as any).find((event: any) => event.id === draggedEvent.id);
      draggedEvent.revert();
    }
  }


  handleDateRange(arg: any) {
    console.log('arg', arg);
    const start = arg.start;
    const end = arg.end;

    // Check if the start is before today's date
    this.isPreviousEnabled = isBefore(start, this.today);
    // Check if the end is beyond the 30-day future limit
    this.isNextEnabled = isBefore(end, this.maxFutureDate);
  }

  // Logic for previous button click
  onPrevious() {
    if (true) {
      console.log('ped')
      // Move the calendar view backward
      this.calendarComponent.getApi().prev();
    }
  }

  // Logic for next button click
  onNext() {
    if (this.isNextEnabled) {
      // Move the calendar view forward
      this.calendarComponent.getApi().next();
    }
  }
}
