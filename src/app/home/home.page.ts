/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  n1: string='';
  n2: string='';

  constructor(public alertController: AlertController) { }
  async exibirAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Você selecionou:',
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
  }
  verificaSelecionado(valor: any) {
    let mensagem: string;
    mensagem = valor.detail.value;
    this.exibirAlerta(mensagem);
  }
}
