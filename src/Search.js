import React, { Component } from 'react'

export class Search extends Component {

    render() {

        let { value, onChange, search, searchAgain, hasSearched } = this.props

        return (
            <div>
                <form>
                    {!hasSearched ? <input type="text"
                        name="searchInput"
                        value={value}
                        onChange={(e) => {
                            onChange(e)
                        }}
                    /> : null}

                    {!hasSearched ? <button onClick={(e) => {
                        e.persist()
                        e.preventDefault()
                        search(e)
                    }}>Search</button> : null}

                    {hasSearched ? <button onClick={(e) => {
                        e.persist()
                        e.preventDefault()
                        searchAgain(e)
                    }}>Search Again</button> : null}
                </form>
            </div>
        )
    }
}

export default Search
