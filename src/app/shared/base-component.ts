import { ViewContainerRef, ComponentRef } from '@angular/core';
import { AlertCustomComponent } from '../presentation/components/@standalone/alert-custom/alert-custom.component';

export class BaseComponent {
  protected alertContainer!: ViewContainerRef;
  private alertComponentRef!: ComponentRef<AlertCustomComponent>;

  showAlert(message: string, type: 'info' | 'success' | 'warning' | 'error', duration: number = 3000): void {
    this.alertContainer.clear();
    this.alertComponentRef = this.alertContainer.createComponent(AlertCustomComponent);
    this.alertComponentRef.instance.message = message;
    this.alertComponentRef.instance.type = type;
    this.alertComponentRef.instance.durationInSeconds = duration;
    this.alertComponentRef.instance.closeAlert.subscribe(() => {
      this.alertComponentRef.destroy();
    });
  }
}
