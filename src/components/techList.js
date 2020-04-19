import React, { Component } from 'react';
import TecIntem from './techItem'

export default class TechList extends Component {
  state = {
    newTech:[
      ''
    ],
    techs:[
      'Node.js',
      'React.js',
      'React Native'
    ]
  };
  handleIputChange = e => {
    this.setState({newTech: e.target.value})
  }

  handleSubmit= e =>{
    e.preventDefault();

    this.setState({ techs:[...this.state.techs,this.state.newTech],
      newTech:''
    })
  }

  handleDelete= (tech) =>{
    this.setState({techs:this.state.techs.filter(t=> t !== tech)})
    
  }
  
  
  render() {
    return(
      <>
      <h1>Uma Lista de Tecnologias: </h1>
      <ul>
        {this.state.techs.map(tech => 
          <TecIntem key={tech} 
                    tech={tech} 
                    onDelete={()=>this.handleDelete(tech)}/> )}
      </ul>
      <form onSubmit={this.handleSubmit}>
          <input type="text"
             onChange={this.handleIputChange} 
             placeholder="digite aqui uma nova tecnologia"
             value={this.state.newTech}/>
          <button type="submit">
            Enviar
          </button>
      </form>
      </>
    );
  }
}
