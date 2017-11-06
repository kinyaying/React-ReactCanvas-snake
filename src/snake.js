import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './snake.css';

export default class Snake extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snakeArr: [[0,0],[0,1],[0,2],[0,3]],
      cell: []
    };
    this.timer = null;
    this.preDirection = 'right';

  }

  componentWillMount() {
    this.createCell();
  }

  componentDidMount() {
    this.moveAuto(this.goRight);
    document.onkeydown = (e) => {
      if(e.keyCode == 39) {
        // this.goRight();
        this.moveAuto(this.goRight);
      } else if(e.keyCode == 37) {
        // this.goLeft();
        this.moveAuto(this.goLeft);
      } else if(e.keyCode == 40) {
        // this.goDown();
        this.moveAuto(this.goDown);
      } else if(e.keyCode == 38) {
        // this.goUp();
        this.moveAuto(this.goUp);
      }

    }
  }

  createCell = () => {
    let cell = [Math.round(Math.random()*50), Math.round(Math.random()*50)];
    this.setState({cell});
  }

  eatCell = (snakeHead) => {
    if(snakeHead[0] == this.state.cell[0] && snakeHead[1] == this.state.cell[1]) {
      return true;
    } else {
      return false;
    }
  }

  moveAuto(cb) {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      cb && cb();
    }, 200);
  }

  goRight = () => {
    if(this.preDirection == 'left') return;
    this.preDirection = 'right';
    let snakeArr = this.state.snakeArr;
    let snakeHead = snakeArr[snakeArr.length - 1];
    let [x, y] = snakeHead;
    snakeArr.push([x, y+1]);
    if(this.eatCell([x, y+1])) {
      this.createCell();
    } else {
      snakeArr.shift();
    }
    this.setState({
      snakeArr
    })
  }

  goLeft = () => {
    if(this.preDirection == 'right') return;
    this.preDirection = 'left';
    let snakeArr = this.state.snakeArr;
    let snakeHead = snakeArr[snakeArr.length - 1];
    let [x, y] = snakeHead;
    snakeArr.push([x, y - 1]);
    if(this.eatCell([x, y - 1])) {
      this.createCell()
    } else {
      snakeArr.shift();
    }
    this.setState({
      snakeArr
    })
  }

  goDown = () => {
    if(this.preDirection == 'up') return;
    this.preDirection = 'down';
    let snakeArr = this.state.snakeArr;
    let snakeHead = snakeArr[snakeArr.length - 1];
    let [x, y] = snakeHead;
    snakeArr.push([x + 1, y]);
    if(this.eatCell([x + 1, y])) {
      this.createCell()
    } else {
      snakeArr.shift();
    }
    this.setState({
      snakeArr
    })
  }

  goUp = () => {
    if(this.preDirection == 'down') return;
    this.preDirection = 'up';
    let snakeArr = this.state.snakeArr;
    let snakeHead = snakeArr[snakeArr.length - 1];
    let [x, y] = snakeHead;
    snakeArr.push([x - 1, y]);
    if(this.eatCell([x - 1, y])) {
      this.createCell()
    } else {
      snakeArr.shift();
    }
    this.setState({
      snakeArr
    })
  }

  createGame() {
    let DOM = [];
    for(var i = 0; i < 50; i++) {
      let liDOM = [];
      for(var j = 0; j < 50; j++) {
        let isSnake = this.state.snakeArr.some(cell => {
                        if(cell[0] == 50 || cell[1] == 50 || cell[0] < 0 || cell[1] < 0) {
                          alert('啊呀，撞上了！');
                          clearInterval(this.timer);
                          // location.reload();
                          return;
                          // this.initSnake();
                          // return;
                        }
                        return cell[0] == i && cell[1] == j;
                      });
        let isCell = this.state.cell[0] == i && this.state.cell[1] == j;
        if(isCell) {
          liDOM.push(<span key={`${i}_${j}`} className="snake"></span>);
        } else if(isSnake) {
          liDOM.push(<span key={`${i}_${j}`} className="snake"></span>);
        } else {
          liDOM.push(<span key={`${i}_${j}`}></span>);
        }
      }
      DOM.push(<li key={`${i}_${j}`}>{liDOM}</li>);
    }
    return DOM;
  }

  render() {
    return (<div>{this.createGame()}</div>);
  }
}
