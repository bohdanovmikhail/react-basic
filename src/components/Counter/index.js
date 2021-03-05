import React from 'react';

export class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.start || 0,
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                {this.state.value}
                <button onClick={this.increment}>+</button>
            </div>
        );
    }

    increment() {
        this.setState({
            value: this.state.value + 1,
        });
    }

    decrement() {
        this.setState({
            value: this.state.value - 1,
        });
    }
}
