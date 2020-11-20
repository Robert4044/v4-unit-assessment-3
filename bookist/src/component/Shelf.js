import React from 'react';

function Shelf(props) {
    console.log(props);
    const mappedTitles = props.shelf.map(element => {
        console.log(element);
        return (
            <div>
                <h1>{element}</h1>
                <img src={element.img} alt='' />
            </div>
        );
    });

    return (
        <div>
            <button onClick={() => props.clearShelf()}>Clear Shelf</button>
            <h1>Your Shelf</h1>
            {mappedTitles}
        </div>
    );
}

export default Shelf;
