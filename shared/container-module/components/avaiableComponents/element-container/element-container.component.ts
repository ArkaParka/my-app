import {Component, OnInit} from "@angular/core";
import { EventBusService } from '../../event-bus/event-bus.service';

@Component({
  selector: 'element-container',
  templateUrl: './element-container.component.html'
})
export class ElementContainerComponent implements OnInit {

  public currentComponent: string = 'ClaimComponent';

  constructor(private eventBus: EventBusService) {
    this.eventBus.on("NavTreeItemClicked", (event)=>{
      console.log("Лог в обертке", event)
    })
  }

  ngOnInit(): void {
    
  }

}
