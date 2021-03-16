import { connect } from 'react-redux';

function Counter2(props) {
    const increment = () => {
        props.dispatch({
            type: 'INCREMENT',
        });
    };
    const decrement = () => {
        props.dispatch({
            type: 'DECREMENT',
        });
    };

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            Value: {props.value}
        </div>
    );
}

const mapStateToProps = state => ({
    value: state.counter,
});

export default connect(mapStateToProps)(Counter2);