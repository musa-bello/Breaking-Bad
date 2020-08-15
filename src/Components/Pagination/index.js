import React, { Component } from 'react'

class Pagination extends Component {
    render() {
        const {itemsPerPage, totalItems, paginate, nextPage, prevPage} = this.props
        const pageNumbers = []
        for (let i = 1; i < Math.ceil(totalItems/itemsPerPage); i++) {
            pageNumbers.push(i)
        }
        
        return (
            <div className="px-3 mt-3">
                <ul className="pagination justify-content-end">
                    {/* <li className="page-item">
                        <button onClick = {()=> prevPage(pageNumbers)} className="page-link" tabIndex="-1">
                            Previous
                        </button>
                    </li> */}
                    {
                        pageNumbers.map(num => {
                            return (
                                <li className="page-item" key={num}>
                                <button onClick={()=> paginate(num)} className="page-link ">{num}</button>
                            </li>
                            )
                        })
                    }
                    {/* <li className="page-item">
                        <button onClick = {()=> nextPage(pageNumbers)} className="page-link">
                            Next
                        </button>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default Pagination
