import React from 'react'

// const app = () => <h1>Hello GalsenTech</h1>
class App extends React.Component {
  render() {
    return (
      <>
      <h1>{ this.props.text }</h1>
      <p>je cherche une solution</p>
      </>
      )
  }
}


export default App