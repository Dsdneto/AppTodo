import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TODOPage implements OnInit {

  constructor(private alertCrtl: AlertController) {}


  ngOnInit() {
  }

  async showAdd() {
    const alert = await this.alertCrtl.create({
      cssClass: 'my-custom-class',
      header: 'O que você deseja fazer?',
      inputs: [
        {
          name: 'tarefa1',
          type: 'text',
          placeholder: 'Digite o que deseja fazer.',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role:'Cancel',
          cssClass:'secondary',
          handler: () => {
            console.log('Cancelado com sucesso!');
          },
        },
      {
        text: 'Adicionar',
        handler: () => {
          console.log('Adicionado com sucesso!');
        },
      },
    ],
    });

    await alert.present();
  }
}
