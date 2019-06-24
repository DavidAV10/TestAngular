import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['Ryan', 'Joe', 'Felipe', 'Jhon', 'Bruce'];
  activo = true;
  nombre: string = 'Marco';
  edad: number = 20;
  publicaciones = [];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(dataService => {
      this.publicaciones = dataService;
    });
  }


  sayHello() {
    alert('Hola');
  }

  eliminarUsuario(user) {
    for (let i = 0; i < this.users.length; i++) {
      if (user === this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

  agregarUsuario(newUsuario) {
    this.users.push(newUsuario.value);
    newUsuario.value = '';
    return false;
  }



  // TypeScrypt prueba
  // nombre = 'Jorge Casas';
  // edad: number;
  // direccion: {
  //   calle: string;
  //   ciudad: string;
  // };

  // hobbies = [];

  // constructor() {
  //   this.edad = 28;
  //   this.direccion = {
  //     calle: 'Carrera 200#42-23',
  //     ciudad: 'Bogotá'
  //   };
  //   this.hobbies = ['nadar', 'correr', 'leer'];
  // }

}
