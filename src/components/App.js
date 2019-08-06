import React from 'react';
import '../styles/App.css';
import Editor from './Editor'
import Preview from './Preview';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: ""
    }

    this.getText = this.getText.bind(this)
  }

  getText(data) {
    this.setState({
      data
    })
  }

  render() {
    return (
      <div className="App" >
        <Editor
          sendTextToParent={this.getText}
        />

        <Preview
          previewText={this.state.data}
        />
      </div>
    )
  }


}

export default App;
