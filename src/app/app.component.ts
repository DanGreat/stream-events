import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  
  currentTime: string = '';
  channelIds: any;
  events: any;
  filteredEvents: any[] = [];
  activeChannelId: number = 0;
  isLoading: boolean = false;
  

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    this.getChannelIdsAndEvents()
  }

  getChannelIdsAndEvents(): void {
    this.isLoading = !this.isLoading

    this.eventService.getChannelIdsAndEvents().subscribe({
      next: (response: any) => {
        this.isLoading = !this.isLoading
        this.currentTime = response?.currentTime
        this.channelIds = response?.channelIds
        this.events = response?.events
      }
    })
  }

  getChannelEvents(channelId: number): void {
    this.activeChannelId = channelId
    this.filteredEvents = []

    this.events.forEach((event: any) => {
      if(event?.channelIds.includes(channelId)){
        this.filteredEvents.push(event)
      }
    });
  }

  sortByStartTime(filteredEvents: any[]): Array<any> {
    return filteredEvents.sort((a: any, b: any) => (new Date(a.start).getTime() - new Date(b.start).getTime()))
  }
}
