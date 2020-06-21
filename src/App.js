import React, {Component} from 'react'
import './style.css'

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      newItem: '', //current item
      list: []  //state for our list of items
    }
  }

  //using local storage in project, sets a key value pair for every input
  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    })
  }


  //this function adds a item to our toDo list
  addItem(){
    //create the item with its own specific id
    const newItem={
      id: 1 + Math.random(), //give the unique id
      value: this.state.newItem.slice() //copy the newitem in state
    }

    //copy the current list of the items
    const list = [...this.state.list]

    //add new item to end of list
    list.push(newItem)

    //UPDate the state with the list, and reset the item, so user can add new item
    this.setState({
      list, //gives the new list with added item
      newItem:'' //resets the new item so user can put another item
    })
  }

  deleteItem(id){
    //copy the current list of the items
    const list = [...this.state.list]

    //filter out item being updated
    const updatedList = list.filter(item => item.id !== id)

    this.setState({list: updatedList}) //sets the new state as the new updated list with the deleted item
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

          <button
            onClick={() => this.addItem()} //button adds the text of user inputs in input (field), that will contain a onclick
                                           //will call a function additem everytime its clicked
          >
            Add
          </button>
          <br/>
          <ul>                          {/* mapp over the list current items in the list, the ones we can delete */}
          {this.state.list.map(item => {
          return(
            <li key={item.id}>        {/* we are mapping over the items, so we must include a key/id as every id is unique */}
              {item.value}
              <button
                onClick={() => this.deleteItem(item.id)} //we are adding a delete button to each item in the list
              >
              X
              </button>
            </li>
          )
        })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
