import React from "react"


export class Statecheck extends React.Component {
  render() {
    function Hilostate(deck, x){
       if (deck[x + 1] > deck[x]) {
      return "Higher";
    } else {
      return "Lower";
    }
    function Playercorrect(guess, state){
      if (guess === state){
        return "Correct"
      } else {
        return "Wrong"
      }
    } 
}