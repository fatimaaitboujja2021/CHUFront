import {Component, OnInit} from '@angular/core';
import {EventService} from '../demo/service/eventservice';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {ListegardeService} from '../controller/service/listegarde.service';

@Component({
    templateUrl: './app.calendar.component.html',
    styles: [`
        @media screen and (max-width: 960px) {
            :host ::ng-deep .fc-header-toolbar {
                display: flex;
                flex-wrap: wrap;
            }
        }
    `]
})
export class AppCalendarComponent implements OnInit{

    events: any[];

    options: any;

    header: any;

    eventDialog: boolean;

    changedEvent: any;

    clickedEvent = null;

    constructor(private eventService: ListegardeService) {}

    ngOnInit() {
        this.eventService.init().subscribe(events => {this.events = events; });
        this.changedEvent = {dateGarde: '', dureDeGarde: '', statue: ''};

        this.options = {
            plugins: [ dayGridPlugin],
            defaultDate: '2021-06-01',
            header: {
                left: 'prev,next',
                center: 'dateGarde',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true,
            eventClick: (e) => {
                this.eventDialog = true;

                this.clickedEvent = e.event;

                this.changedEvent.dureDeGarde = this.clickedEvent.dureDeGarde;
                this.changedEvent.dateGarde = this.clickedEvent.dateGarde;
                this.changedEvent.statue = this.clickedEvent.statue;
            }
        };
    }


}
