import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  public color!: ThemePalette;

  @Input()
  public disabled = false;

  @Input()
  public text!: string;

  @Input()
  public type!: 'raised' | 'stroked' | 'flat';

  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();
}
