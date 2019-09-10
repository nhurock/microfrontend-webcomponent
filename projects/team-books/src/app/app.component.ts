import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmiterService } from './service/event.emmiter.service';

@Component({
  //selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
   encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  title = 'team-books';
  
  @Input('state') 
  set state(state: string) {
      //alert('Book received new state: '+ state);
  }

  @Output() message = new EventEmitter<any>();
  
  constructor(private router: Router, private eventEmiter: EventEmiterService) {}

  ngOnInit() {

    /* this will be called once user select a book for adding into the cart */
    this.eventEmiter.data.subscribe(data => {
        this.message.emit(data);
    })

    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    
    this.router.navigate(['/books/book']);
  
  }
}