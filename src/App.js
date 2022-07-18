//instalar el boostrap y el delete row para el correcto uso del programa
//npm install react-bootstrap bootstrap
//npm install react-delete-row
import React, { useState } from 'react';
import ReactDeleteRow from 'react-delete-row';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
class Calculadora extends React.Component {
  state = {
    list: [],
    contadorCalculos: '',
    distancia: '',
    tiempo: '',
    veloccontadorCalculosad: ''
  };

  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { contadorCalculos, distancia, tiempo, list } = this.state;

    if ( distancia && tiempo) {
      const contadorCalculos = list.length + 1;
      var arreglo = this.state.data;
      const veloccontadorCalculosad =  distancia/tiempo;

      this.setState({
        list: [...list, { contadorCalculos, distancia, tiempo, veloccontadorCalculosad }],
        contadorCalculos: '',
        distancia: '',
        tiempo: ''

      });
    } else {
      console.log('Por favor llenar los datos');
    }

    event.preventDefault();
  };
  render() {
    const { contadorCalculos, distancia, tiempo, list, veloccontadorCalculosad } = this.state;
    return (
      <>
        <div className="inputs_tours">
          <form onSubmit={this.handleSubmit} className="form_tours">
            <div className="form-group">
              <label htmlFor="distancia">
                <h5>Ingrese la distancia:</h5>
                <input type="number" className="form-control" contadorCalculos="distancia" placeholder="" name="distancia" value={distancia}
                onChange={this.handleInputChange}
                />
              </label>
            </div>
            <br></br>
            <div className="form-group room">
              <label htmlFor="tiempo">
              <h5>Ingrese el tiempo:</h5>
                <input type="number" className="form-control" contadorCalculos="tiempo" placeholder="" name="tiempo" value={tiempo}
                onChange={this.handleInputChange}
                />
              </label>
            </div>
            <br></br>
            <div className="distancia_btn">
              <button type="submit" className="btn btn-success">
                Calcular
              </button>
              
            </div>
          </form>
        </div>
        <br></br>
        <div className="table_tours">
          <table className="table table-info">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Distancia (m)</th>
                <th scope="col">Tiempo (s)</th>
                <th scope="col">VeloccontadorCalculosad (m/s)</th>
                <th scope="col"></th>

              </tr>
            </thead>
            <tbody>
              {list.map((item) => { return (
                <ReactDeleteRow key={contadorCalculos} data={item}
                iconClassName='text-danger'
                onDelete={ item => { return true }}>
                  <td>{item.contadorCalculos}</td>
                  <td>{item.distancia}</td>
                  <td>{item.tiempo}</td>
                  <td>{item.veloccontadorCalculosad}</td>


                </ReactDeleteRow>
              )}) }
              
            </tbody>
            
          </table>
          
        </div>
      </>
    );
  }
}

export default Calculadora;