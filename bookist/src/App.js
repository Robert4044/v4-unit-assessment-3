import './App.css';
import Header from './component/Header';
import BookList from './component/BookList';
import Shelf from './component/Shelf';
import data from './data';
import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: data,
            shelf: [],
        };
        this.addToShelf = this.addToShelf.bind(this);
    }

    addToShelf(title) {
        // let newTitle = this.state.shelf.push(title);
        this.setState({
            shelf: [...this.state.shelf, title],
        });
        console.log(this.state.shelf);
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <div className='main-container'>
                    <BookList
                        data={this.state.data}
                        addToShelf={this.addToShelf}
                        // shelf={this.state.shelf}
                    />
                    <Shelf shelf={this.state.shelf} />
                </div>
            </div>
        );
    }
}

export default App;
