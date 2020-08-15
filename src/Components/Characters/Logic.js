import React, { Component } from 'react'
import CharacterList from './CharacterList'
import Pagination from '../Pagination'


class Logic extends Component {
    state = {
        isLoading: true,
        characters: [],
        currentPage: 1,
        itemsPerPage: 8

    }

    componentDidMount = () => {
        fetch('https://www.breakingbadapi.com/api/characters')
            .then( response => {
                return response.json()
            })
            .then( data => {
                data.sort( () => Math.random() - 0.5 )
                
                this.setState({
                    characters: data,
                    isLoading: false
                })
                console.log(this.state);
            })
            .catch( error => {
                console.error(error);
            })
    }
    
    render() {
        const { characters, currentPage, itemsPerPage, isLoading } = this.state
        const indexOfLastItem = currentPage * itemsPerPage
        const indexOfFirstItem = indexOfLastItem - itemsPerPage
        const currentItem = characters.slice(indexOfFirstItem, indexOfLastItem)
        const paginate = pageNum => this.setState({currentPage:pageNum})
        const nextPage = () => this.setState({currentPage: currentPage + 1})
        const prevPage = () => this.setState({currentPage: currentPage - 1})
        
        return (
            <div className='px-4 mt-4'>
               <CharacterList characters={currentItem} loading={isLoading} />
               <Pagination itemsPerPage ={itemsPerPage} totalItems={characters.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
            </div>
        )
    }
}

export default Logic
