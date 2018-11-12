import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import BattleArea from './BattleArea';
import ChatForm from './ChatForm';

const arString = "AngryRobot takes a long time to fart but eventually does. It can potentially do 12 damage.";
const arChatString = "AngryRobot: Danny you really suck"
const danString = "Dannydk6 tries to counter with an even louder fart, but fails. Gets hit for 12 damage.";
const danChatString = "Dannydk6: Ah but AR you suck even more"
const chatObjects = [
{text: arString, type:'battle', color:'blue', player: 1},
{text: arChatString, type:'chat', player: 1},
{text: danString, type:'battle', color:'red', player: 2},
{text: danChatString, type:'chat', color:'blue', player: 2}
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sideBarOpen: false,
      chatObjects
    };
    this.openSidebar = this.openSidebar.bind(this);
    this.addChatElement = this.addChatElement.bind(this);
  }

  openSidebar(){
    if (this.state.sideBarOpen){
      this.setState({sideBarOpen: false});
    }else{
      this.setState({sideBarOpen: true});
    }
    
    console.log(this.state.sideBarOpen);
  }

  addChatElement(text){
    const chats = [...this.state.chatObjects,{
      text: "AngryRobot: " + text, type:'chat', player: 1
    }];
    this.setState({chatObjects: chats});
  }

  render() {

    return (
      <div className="App">
        <Navbar openSidebar={this.openSidebar}/>
        <div className="sidebar-wrapper">
          <Sidebar sideBarOpen={this.state.sideBarOpen} />
          <div className="main-elements">
            <BattleArea chatObjects={this.state.chatObjects} />
            <div className="hud">Hud elements</div>
            <ChatForm 
              addChatElement={this.addChatElement}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
