export class BusEvent {
  eventType: string;
  eventPayload: any;

  constructor(eventType: string, eventPayload: any) {
    this.eventType = eventType;
    this.eventPayload = eventPayload;
  }
}
