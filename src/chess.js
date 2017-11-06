import React, {Component} from 'react';
import './index.css';

class Chess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chessData: [],
      patternArr: ['o', 'x'],
      patternIndex: 0
    }
    this.chessboard = 16;
    this.size = 5;
    // this.ruleArr = this.createRule();
  }

  initChess() {
    let tempRes = [];
    for(var i = 0; i < this.chessboard; i++) {
      let tempArr = [];
      for(var j = 0; j < this.chessboard; j++) {
        tempArr.push(``)
      }
      tempRes.push(tempArr);
    }
    return tempRes;
  }

  // createRule() {
  //   // let ruleArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
  //   let ruleArr = [[{x:0, y:0},{x:0,y:1},{x:0,y:2}]]
  //   return ruleArr;
  // }

  componentWillMount() {
    this.setState({
      chessData: this.initChess()
    })
  }

  handleClick(xIndex, yIndex, index) {
    let tempChess = this.state.chessData;
    let patternArr = this.state.patternArr;
    let patternIndex = this.state.patternIndex;
    if(tempChess[xIndex][yIndex] === '') {
      tempChess[xIndex][yIndex] = patternArr[patternIndex % 2];
      this.setState({
        chessData: tempChess,
        patternIndex: this.state.patternIndex + 1
      });
    }
    this.checkRule(xIndex, yIndex)
   }

   checkRule(x, y) {

     let tempChess = this.state.chessData;
     let chess = this.state.chessData[x][y];
     // 横向比较
     for(let i = 0; i < this.chessboard-this.size+1; i++) {
       let count = 0, start = i, end = this.size+i;
       for(let j = start; j < end; j++) {
         if(tempChess[x][j] === chess) {
           count++;
         } else {
           break;
         }
       }
       if(count === this.size) {
         alert(`${chess} win!`)
         return true;
       }
     }

     // 竖向比较
     for(let i = 0; i < this.chessboard-this.size+1; i++) {
       let count = 0, start = i, end = this.size+i;
       for(let j = start; j < end; j++) {
         if(tempChess[j][y] === chess) {
           count++;
         } else {
           break;
         }
       }
       if(count === this.size) {
         alert(`${chess} win!`)
         return true;
       }
     }
     // 斜下 y-x max-x+y
    if(x < y) {
      var startX = 0, startY = y - x;
    } else {
      var startY = 0, startX = x - y;
    }
    let tempCount1 = 0, tempCount2 = 0;
    for(let i = 0; i < this.chessboard; i++) {
      for(let j = 0; j < this.chessboard; j++) {
        if(j - i === startY - startX) {
          if(tempChess[i][j] === chess) {
            tempCount1++
          } else {
            tempCount1 = 0;
          }
        }
        if(j + i === x + y) {
          if(tempChess[i][j] === chess) {
            tempCount2++
          } else {
            tempCount2 = 0;
          }
        }
      }
      if(tempCount1 === this.size || tempCount2 === this.size) {
        alert(`${chess} win!`)
        return true;
      }

    }

     // 斜上

   }

   renderChess() {
     let index = -1;
     let chessDOM = this.state.chessData.map((row, xIndex) => {
       return row.map((item, yIndex) => {
         index++;
         return <li key={`${xIndex}_${yIndex}`} onClick={this.handleClick.bind(this, xIndex, yIndex, index)}>{item}</li>
       })
     })

     return <ul>{chessDOM}</ul>;
   }

   renderConfig() {

   }

   render() {
      return <div>{this.renderChess()}</div>
   }
}

export default Chess;
