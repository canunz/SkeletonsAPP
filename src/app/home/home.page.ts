import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  educationLevel: string = '';
  birthDate: string = '';
  showDatePicker: boolean = false;

  constructor(private alertController: AlertController) { }

  openDatePicker() {
    this.showDatePicker = true;
  }

  closeDatePicker() {
    this.showDatePicker = false;
  }

  async onShow() {
    const alert = await this.alertController.create({
      header: 'Información Personal',
      message: `Nombre: ${this.firstName} ${this.lastName}<br>Nivel Educativo: ${this.educationLevel}<br>Fecha de Nacimiento: ${this.birthDate}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  onClear() {
    this.firstName = '';
    this.lastName = '';
    this.educationLevel = '';
    this.birthDate = '';
  }
}
