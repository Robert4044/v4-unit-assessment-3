import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = e => {
        console.log(e.target.value);
        this.setState({
            userInput: e.target.value,
        });
    };

    handleClick(input) {
        this.props.filterBooks(input);
    }

    handleClear() {
        this.setState({
            userInput: '',
        });
        this.props.reset();
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.input}
                />
                <button onClick={() => this.handleClick}>Search</button>
                <button>Clear Search</button>
            </div>
        );
    }
}

export default SearchBar;
