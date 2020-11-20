import './App.css';
import Header from './component/Header';
import BookList from './component/BookList';
import Shelf from './component/Shelf';
import data from './data';
import React, { Component } from 'react';
import SearchBar from './component/SearchBar';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: data,
            shelf: [],
        };
        this.addToShelf = this.addToShelf.bind(this);
        this.clearShelf = this.clearShelf.bind(this);
    }

    addToShelf(title) {
        // let newTitle = this.state.shelf.push(title);
        this.setState({
            shelf: [...this.state.shelf, title],
        });
        // console.log(this.state.shelf);
    }

    clearShelf() {
        this.setState({ shelf: [] });
    }

    filterBooks(input) {
        let filteredBooks = this.state.data.filter(book => {
            return book.includes(input);
        });
        this.setState({
            data: filteredBooks,
        });
    }

    reset() {
        this.setState({
            data: data,
        });
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <SearchBar filterBooks={this.filterBooks} reset={this.reset} />
                <div className='main-container'>
                    <BookList
                        data={this.state.data}
                        addToShelf={this.addToShelf}
                        // shelf={this.state.shelf}
                    />
                    <Shelf
                        shelf={this.state.shelf}
                        clearShelf={this.clearShelf}
                    />
                </div>
            </div>
        );
    }
}

export default App;
