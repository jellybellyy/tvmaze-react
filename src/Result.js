import React, { Component } from 'react'

export class Result extends Component {

    render() {

        let { shows } = this.props

        // if (shows.length > 0) {
        //     let allShows = shows.map(item => {
        //         return <p>{item.name}</p>
        //     })
        // }

        // if (shows.length > 0) {
        //     console.log(shows[1].name)
        // }

        let allshows = null;

        if (shows.length > 0) {
            let allShows = shows.map(item => {
                console.log(item.name)
            })
        }



        // let allShows = shows.map(item => {
        //     return <div>{item}</div>
        // })

        return (
            <div>
                {/* {allShows} */}
            </div>
        )
    }
}

export default Result
