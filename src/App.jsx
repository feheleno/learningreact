import React from 'react';
import AddColorForm from './AddColorForm.jsx';
import ColorList from './ColorList.jsx';
import './stylesheets/App.scss';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      colors:[]
    }
  }

  render(){
    const {colors} = this.state
    return(
      <div className="app">
        <AddColorForm />
        <ColorList colors={colors} />
      </div>
    )
  }

}

export default App;
