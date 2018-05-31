import { Directive, EventEmitter, HostListener, OnInit, OnDestroy, Output, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appThrottleClick]'
})
export class ThrottleClickDirective implements OnInit, OnDestroy {

  @Output() throttleClick = new EventEmitter();
  @Input() throttleTime = 1000; 
  private click = new Subject();
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = this.click.pipe(
      throttleTime(this.throttleTime)
    ).subscribe(e => this.throttleClick.emit(e));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  onClickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.click.next(event);
  }
}
