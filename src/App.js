import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      newItem: '', //current item
      list: []  //state for our list of items
    }
  }

  render() {
    return (
      <div className="App"> {/* remember in JSX classname is the same as class in HTML*/}
        <div>         {/* lets the user know to add an item */}
         Add an item...
         <br/>
                    {/* input form */}
         <input
            type="text"                     //type of input
            placeholder="Type item here"
            value={this.state.newItem}      //the value will take on a new item everytime a user adds that to input
            onChange={e => this.updateInput("newItem", e.target.value)} //this function will be called everytime the onchange is ran
          />
        </div>
      </div>
    )
  }
}

export default App;
