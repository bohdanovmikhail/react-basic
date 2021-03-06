import React, { useState } from 'react';

export function Counter(props) {
    const [value, setValue] = useState(props.start || 0);

    return (
        <div>
            <button onClick={() => setValue(value - 1)}>-</button>
            {value}
            <button onClick={() => setValue(value + 1)}>+</button>
        </div>
    );
}

export class _Counter extends React.Component {
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
