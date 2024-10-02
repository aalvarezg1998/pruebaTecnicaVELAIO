import { Component } from '@angular/core';
import PersonalData from 'src/app/core/entities/personal-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  personalData: PersonalData = {
    address: 'Cra 5a #39-33 Apto 1 Valledupar - Cesar',
    email: 'ing.alexanderg1998@gmail.com',
    phone: '+57 3042180784',
    socialNetworks: [
      {
        link: 'https://web.facebook.com/alvarezg.alex',
        nombre: 'Facebook'
      },
      {
        link:'https://www.linkedin.com/in/alex-alvarez-594397166/',
        nombre: 'LinkedIn'
      }
    ]
  }

}
