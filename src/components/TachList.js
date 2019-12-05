import React, { Component } from 'react'
import TechItem from './TechItem';


class TechList extends Component {

  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente é montado na tela
  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }

  // Executado sempre que houver alteração no estado ou nas props, e recebe elas como parametros
  componentDidUpdate(_, prevState) {
    //this.props para as props e this.state para o estado

    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {

  }



  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.newTech)
    this.setState(
      {
        techs: [...this.state.techs, this.state.newTech],
        newTech: ''
      }
    )
  }

  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    }),
      console.log(`${tech} removido`)

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Tecnogias</h3>
        < ul >
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}

        </ul >
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech} /> <br />
        <button type="submit">Adicionar</button>
      </form>
    )
  }
}



export default TechList