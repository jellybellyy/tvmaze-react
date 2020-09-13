import React, { Component } from 'react';
import Search from "./Search";
import Results from "./Results";

export class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            defaultValue: "",
            query: "",
            hasSearched: false
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            defaultValue: e.target.value
        })
    }

    searchHandler = (e) => {
        this.setState({
            query: this.state.defaultValue,
            hasSearched: true,
            defaultValue: ""
        })
    }

    searchAgainHandler = (e) => {
        this.setState({
            query: "",
            hasSearched: false
        })
    }

    render() {

        return (
            <div>
                <h1>TVMaze React</h1>
                <Search
                    value={this.state.defaultValue}
                    onChange={this.onChangeHandler}
                    search={this.searchHandler}
                    searchAgain={this.searchAgainHandler}
                    hasSearched={this.state.hasSearched}
                />
                {this.state.hasSearched ? <Results
                    query={this.state.query}
                /> : null}
            </div>
        )
    }
}

export default Home

