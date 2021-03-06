import React from "react";

export class Shuffle extends React.Component {
  render(){
  const cardValues = {
    s1: 1,
    s2: 2,
    s3: 3,
    s4: 4,
    s5: 5,
    s6: 6,
    s7: 7,
    s8: 8,
    s9: 9,
    s10: 10,
    s11: 11,
    s12: 12,
    s13: 13,
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
    h6: 6,
    h7: 7,
    h8: 8,
    h9: 9,
    h10: 10,
    h11: 11,
    h12: 12,
    h13: 13,
    d1: 1,
    d2: 2,
    d3: 3,
    d4: 4,
    d5: 5,
    d6: 6,
    d7: 7,
    d8: 8,
    d9: 9,
    d10: 10,
    d11: 11,
    d12: 12,
    d13: 13,
    c1: 1,
    c2: 2,
    c3: 3,
    c4: 4,
    c5: 5,
    c6: 6,
    c7: 7,
    c8: 8,
    c9: 9,
    c10: 10,
    c11: 11,
    c12: 12,
    c13: 13,
    j1: 100,
    j2: 100
  };
  let deck = Object.values(cardValues);

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array
  };
      
}
