import React, { Component } from 'react';
import TecIntem from './techItem'

export default class TechList extends Component {
  state = {
    newTech:[
      ''
    ],
    techs:[]
    
  };
//Executado assim q o componente aparece em tela(chamrada a api etc)
componentDidMount(){
  const techs =localStorage.getItem('techs')
  if( techs){
    this.setState({techs:JSON.parse(techs)})
  }
}

//sempre q ocorre mudança nas props ou no estado
componentDidUpdate(_, PrevState){
  if (PrevState !== this.state.techs){
    localStorage.setItem('techs',JSON.stringify(this.state.techs))
  }
}

//quando o componet deixa de existir
componentWillUnmount(){
  
}

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
