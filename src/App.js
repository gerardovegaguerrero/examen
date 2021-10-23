import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/header';
import React, { Component } from 'react';
import Movies from './componentes/movies';
import Tiket from './componentes/Tiket'

class App extends Component 
 {
  constructor() {
    super();
    this.state = {
      compra:{},
      cartelera:[
        {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00','17:50','20:30'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
        {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00','11:30','13:30'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
        {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00','13:50','19:40'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
        {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30','14:20','18:30'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
      ],
    };
  }
  agregar=(com,hora)=>
  {
    const peli=
    {
      codigo:com.codigo,
      nombre:com.nombre,
      idioma:com.idioma,
      clasificacion:com.clasificacion,
      horario:hora,
      duracion:com.duracion,
      cantidad:0,
      total:0
    }
    this.setState({...this.state,
    compra:peli})
  }
  calcular=(classi,cant)=>
  {
    let valor;

    if(cant.clasificacion==="A"){
      valor=50;
    }
    if(cant.clasificacion==="B"){
      valor=80;
    }
    if(cant.clasificacion==="C"){
      valor=95;
    }
    const peli=
    {
      codigo:cant.codigo,
      nombre:cant.nombre,
      idioma:cant.idioma,
      clasificacion:cant.clasificacion,
      horario:cant.horario,
      duracion:cant.duracion,
      cantidad:classi,
      total:classi*valor
    }
    if(cant<=0)
    {
      peli.total=0
    }
    this.setState({  ...this.state,
      compra:peli,})

  }
  eliminacion_total=()=>
  {
    this.setState({compra:[],
   })
  }
  comprar=(veri)=>
  {
    if(veri.cantidad>0)
    {
      alert("compra exitosa, saquese de aqui porfavor")
      this.setState({compra:[],
      })
    }else
    {
      alert("verificar la cantidad de boletos")
    }
  
  }

   render(){
     
  return (
    <div className="App">
     <Header/>
     <div className="diseño">
     <Movies
     peliculas={this.state.cartelera}
     agregar={this.agregar}
     />
     <Tiket
     compra={this.state.compra}
      calcular={this.calcular}
      comprar={this.comprar}
      eliminarCompra={this.eliminacion_total}
     />
</div>
    </div>
  );
}
}
export default App;
