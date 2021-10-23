import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css'

class Tiket extends Component
{
    
    render()
    {
        return ( 
            <div className="Lista">
              {
                Object.keys(this.props.compra).length!==0
               ?
                <div>
                    <h1>Taquilla</h1>
                    <div className="Ticket">
                      <p>{this.props.compra.nombre} ({this.props.compra.idioma})</p>
                      <p>Hora: {this.props.compra.horario}</p>
                      <p>Cantidad:<input type='number'  className="text-center" style={{width: '15vmin'}} value={this.props.compra.cantidad} onChange={e=>this.props.calcular(e.target.value,this.props.compra)}/></p>
                      <p>Total: ${(this.props.compra.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                      <div className="Botones">
                        <Button onClick={()=>this.props.eliminarCompra()}variant="danger">Cancelar</Button> 
                        <Button onClick={()=>this.props.comprar(this.props.compra)}variant="success">Comprar</Button> 
                      </div>
                    </div> 
                </div> 
                
                :
                  <div className="alternativa">
                    <p>Selecciona una película dando click en su horario</p>
                  </div>
    
                }
              </div>
         );
    }
}
export default Tiket;