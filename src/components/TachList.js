import React, { Component } from 'react'
import TechItem from './TechItem';


class TechList extends Component {

  state = {
    newTech: '',
    techs: [
      'Node.Js',
      'React',
      'React Native',
      'Anderson do Abap'
    ]
  };

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
          <TechItem />
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