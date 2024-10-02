import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-custom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-custom.component.html',
  styleUrls: ['./alert-custom.component.scss']
})
export class AlertCustomComponent implements OnInit{
  @Input() message: string = 'This is an alert!';
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() durationInSeconds!: number;
  
  @Output() closeAlert = new EventEmitter<void>();

  ngOnInit(): void {
    setTimeout(() => {
      this.onClose();
    }, this.durationInSeconds);
  }

  onClose(): void {
    this.closeAlert.emit();
  }

  getAlertClass(): string {
    switch (this.type) {
      case 'success':
        return 'alert-success';
      case 'warning':
        return 'alert-warning';
      case 'error':
        return 'alert-error';
      default:
        return 'alert-info';
    }
  }
}
