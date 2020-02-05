import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./characters.json";
import FooterPage from "./components/Footer"
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({
        clicked: this
          .state
          .clicked
          .concat(id)
      });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({currentScore: newScore, rightWrong: ""});
    if (newScore >= this.state.topScore) {
      this.setState({topScore: newScore});
    } else if (newScore === 12) {
      this.setState({rightWrong: "You win!"});
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({currentScore: 0, topScore: this.state.topScore, rightWrong: "Wubba lubba dub dub!", clicked: []});
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({friends: shuffledFriends});
  };

  render() {
    return (
      <Wrapper>
        <Header/>
        <Nav
          title="The Rick and Morty Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}/>

        <Title>
          Click on an Rick and Morty character to earn points, but don't click on any more
          than once!
        </Title>

        <Container>
          <Row>
            {this
              .state
              .friends
              .map(friend => (
                <Column size="md-3 sm-6">
                  <FriendCard
                    key={friend.id}
                    handleClick={this.handleClick}
                    handleIncrement={this.handleIncrement}
                    handleReset={this.handleReset}
                    handleShuffle={this.handleShuffle}
                    id={friend.id}
                    title={friend.title}
                    image={friend.image}/>
                </Column>
              ))}
          <FooterPage></FooterPage>
          </Row>
        </Container>


      </Wrapper>
    );
  }
}

export default App;
