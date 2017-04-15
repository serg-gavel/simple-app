import React from 'react';
import Board from './board';


export default class Game extends React.Component {
    constructor(){
        super();

        this.state ={
            xIsNext: true,
            stepNumber: 0,
            history: [{
                squares: Array(9).fill(null)
            }]
        };
    }

    handleClick(i){
        console.log('handleClick', i);
    }

    render() {
        const {xIsNext, stepNumber, history} = this.state;
        const current = history[stepNumber];

        const status = 'Next player is: ' + (xIsNext ? 'X' : '0');


        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{/*todo*/}</ol>
                </div>
            </div>
        );
    }
}