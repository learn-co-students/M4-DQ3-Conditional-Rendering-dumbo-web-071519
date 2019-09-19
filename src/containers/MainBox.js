import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'
import { cocktails } from '../data.js'

class MainBox extends React.Component {

  state = {
    active: "profile"
  }


  handleState = (event) => {
    this.setState({
      active: event.target.id
    })
  }
  
  dealComponent = () => {
    switch (this.state.active){
      case "profile": 
        return Profile();
      case "pokemon": 
        return (<Pokemon />);
      case "photo":
        return Photos();
      case "cocktail":
        return Cocktails();    
    }
  }
  
  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleState={this.handleState} />
        {this.dealComponent()}
      </div>
    )
  }

}

export default MainBox
