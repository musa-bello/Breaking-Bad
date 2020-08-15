import React, { Component } from 'react'

class QuoteGen extends Component {
    state = {
        quotes: [],
        clicked: false
    }

handleclick = () => {
    fetch('https://www.breakingbadapi.com/api/quote/random')
        .then (response => {
            return response.json()
        })
        .then (data => {
            this.setState({ quotes: data, clicked: true})
            
        })
        .catch (error => {
            console.log(error);
        })
    
}

    render() {
        const {quotes, clicked} = this.state
        console.log(quotes);
        const quote = quotes.map (item => {
            return (
                <div className="card-body" key={item.quote_id} >
                    <h5 className="card-title"> {item.author} </h5>
                    <p className="card-text">"{item.quote}"</p>
                
                </div>
            )
        })
        return (
            <div className="p-4 quote-section">
    
                <div className="card text-center">
                    <div className="card-header">
                        Random Quote Generator
                    </div>
                    {
                        clicked ? ( (quote)) : (<h5 className="py-3">Click the button below to get a random quote</h5>)
                    }
                    <div className="px-2">
                        <button className="btn btn-outline-success" onClick={this.handleclick}>Generate Quote</button>
                    </div>
                    </div>
            </div>
        )
    }
}

export default QuoteGen
