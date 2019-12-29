import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
variable = "Joel";
nombre = "jOel aGustin toriBio polAnco";

arreglo = [1,2,3,4,5,6,7,8,9,10];
pi = Math.PI;
a: number = 0.259;
salario = 123456;

heroe = {
nombre: "Logan",
clave: "Wolverine",
edad: 500,
direccion: {
calle: "primera",
casa: "19"  
}  
}

valorPromesa = new Promise((resolve, reject)=>{
setTimeout(()=>resolve("Llego la data"), 1000);
});


date = new Date();

// url video
video:string = "ojwDUImJVWc";

activar:boolean = true;
}
