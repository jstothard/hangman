import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Hangman from "./components/Hangman";
import Letters from "./components/Letters";
import WinOrLose from "./components/WinOrLose";
import InputWord from "./components/InputWord";

class App extends Component {
  state = {
    answer: "",
    correctGuesses: "",
    guesses: [],
    finished: false
  };
  render() {
    const { answer, correctGuesses, guesses } = this.state;
    const incorrectGuesses = guesses
      .filter(guess => {
        return !RegExp(guess, "i").test(answer);
      })
      .join("");
    const numOfIncGuesses = incorrectGuesses.split("").length;

    const win = !RegExp("_", "i").test(correctGuesses);
    const lose = numOfIncGuesses === 10;

    return (
      <div onKeyDown={this.checkCorrect}>
        <Header />
        <Input
          answer={answer}
          guesses={correctGuesses}
          checkCorrect={this.checkCorrect}
        />
        <InputWord answer={answer} />
        <Hangman guesses={numOfIncGuesses} />
        <Letters guesses={incorrectGuesses} />
        <WinOrLose answer={answer} win={win} lose={lose} />
      </div>
    );
  }

  checkCorrect = event => {
    const guess = event.target.value;
    if (
      guess !== "" &&
      this.state.guesses.length < 10 &&
      RegExp("_", "i").test(this.state.correctGuesses)
    ) {
      const { answer, correctGuesses, guesses } = this.state;
      if (!guesses.includes(guess)) {
        if (RegExp(guess, "i").test(answer)) {
          this.setState({
            correctGuesses: this.checkLetters(guess, answer, correctGuesses)
          });
        }
        this.setState({
          guesses: [...guesses, guess]
        });
      }
    }
    event.target.value = "";
  };

  checkLetters = (guess, answer, correctGuesses) => {
    let ans = "";
    for (let i = 0; i < answer.length; i++) {
      const letter = answer[i];
      if (letter === guess) {
        ans += letter;
      } else {
        ans += correctGuesses[i];
      }
    }
    return ans;
  };
}

export default App;
