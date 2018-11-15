import React from 'react';
import SingleButton from "./button";

export default class Container extends React.Component {
    state = {
        lastChar: '',
        toCalculate: '',
        result: 0,
    };


    checkAction(i) {

        switch (i) {
            case 'c':
                this.setState(() => ({
                    toCalculate: '',
                    result: 0,
                    lastChar: '',
                    history: '',
                }));
                break;
            case '=':
                const previousChar = this.state.toCalculate.slice(-2, -1);
                if (previousChar === '+' || previousChar === '-' || previousChar === '/' || previousChar === '*') {
                    this.setState((prevState) => ({
                        toCalculate: 'Error!!!',
                        history: prevState.toCalculate.slice(0, -1),
                    }),this.resetMem())
                }
                else {
                        this.setState((prevState) => ({
                            result: eval(prevState.toCalculate.slice(0, -1)),
                            toCalculate: prevState.toCalculate.slice(0, -1),
                        }));
                        break;
                    }
                }
        }

    resetMem(){
        setTimeout(()=>this.setState((prevState) => ({
            result: eval(prevState.history.slice(0, -1)),
            toCalculate: prevState.history.slice(0, -1),
        })), 500);
    }



    handleClick(i) {
        this.setState(prevState => ({
            toCalculate: prevState.toCalculate + i,
            lastChar: i,
            previousChar: prevState.toCalculate.slice(-2,-1),
        }), () => {
            this.checkAction(i);
        });

    }

    renderButton(i) {
        return (
            <SingleButton
                value={i}
                onClick={() => this.handleClick(i)}
            />
        );
    }


    render() {
        return (
            <div className="container">
                <div className="display">
                    <span className="memory">{this.state.toCalculate}</span>
                </div>
                <div className="result">
                    <h3 className="input">{this.state.result}</h3>
                </div>
                <div>
                    <div>
                        <div className="board-row">
                            {this.renderButton(1)}
                            {this.renderButton(2)}
                            {this.renderButton(3)}
                            {this.renderButton('+')}
                        </div>
                        <div className="board-row">
                            {this.renderButton(4)}
                            {this.renderButton(5)}
                            {this.renderButton(6)}
                            {this.renderButton('-')}
                        </div>
                        <div className="board-row">
                            {this.renderButton(7)}
                            {this.renderButton(8)}
                            {this.renderButton(9)}
                            {this.renderButton('*')}
                        </div>
                        <div className="board-row">
                            {this.renderButton('c')}
                            {this.renderButton(0)}
                            {this.renderButton('=')}
                            {this.renderButton('/')}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}