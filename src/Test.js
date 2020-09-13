import React, { Component } from 'react'

export class Test extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
        }
    }

    incrementHandler = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    }

    decrementHandler = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }))
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {

        console.log('render');

        return (
            <div>
                <button onClick={this.incrementHandler}>Increment</button>
                <button onClick={this.decrementHandler}>Decrement</button>
                <br /><br />
                Counter: {this.state.counter}
            </div>
        )
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default Test
