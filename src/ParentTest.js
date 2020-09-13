import React, { Component } from 'react'
import Test from "./Test";

export class ParentTest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mount: true
        }
    }

    mountHandler = () => {
        this.setState({
            mount: true
        })
    }

    unmountHandler = () => {
        this.setState({
            mount: false
        })
    }

    render() {
        return (
            <div>
                {this.state.mount ? <Test /> : null}
                <button onClick={this.mountHandler}>Mount</button>
                <button onClick={this.unmountHandler}>Unmount</button>
            </div>
        )
    }
}

export default ParentTest
