import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css'

class Movies extends Component
{
    
    render()
    {
        return(
            <div className="cartel">
                <h1>cartelera</h1>
                {
                    this.props.peliculas.map((a,p)=>
                    {
                        return(
                            <div className="contenedor" key={p}>
                                <div className="imagen">
                                     {<img style={{height: '30vh', alignitems: 'center'}} src={a.url} className="Logo" alt="logo" />}
                                     </div>
                                   <div className="informacion">
                                       <p>{a.nombre}</p>
                                       <z>{a.idioma}</z>
                                       <z>{a.clasificacion}</z>
                                       <z>{a.duracion}</z>
                                       <div className="Horarios">
                                       {
                                       a.horarios.map((f,s)=><Button variant="dark" key={s} onClick={()=> this.props.agregar(a,f)}>{f}</Button>)
                                       }
                                       </div>
                                   </div>
                                 
                            </div>
                        )
                    })
                }
            </div>
            
        );
    }
}
export default Movies;