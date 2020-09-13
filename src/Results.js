import React, { Component } from 'react'
const axios = require("axios")
// import Result from "./Result"

export class Results extends Component {

    constructor(props) {
        super(props)

        this.state = {
            shows: []
        }
    }

    componentDidMount() {

        let query = this.props.query;
        let url = `http://api.tvmaze.com/search/shows?q=${query}`;

        axios.get(url)
            .then(res => {
                let results = res.data;
                this.setState({
                    shows: results
                })
            })
    }

    render() {

        let { shows } = this.state

        let searchResults = this.state.shows.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <a href={item.show.url} target="_blank">
                        {item.show.image ? <img src={item.show.image.medium} alt={item.show.name} /> : <div className="unavailable"><p>Image Unavailable</p></div>}
                    </a>
                    <p>{item.show.name}</p>
                </div>
            )
        })

        return (
            <div className="cards">
                {searchResults}
            </div>
        )
    }
}

export default Results
