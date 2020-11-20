import React from 'react';

function BookList(props) {
    // console.log(props);
    const mappedBooks = props.data.map((element, index) => {
        return (
            <div key={element.id}>
                <h2>{element.title}</h2>
                <img
                    src={element.img}
                    alt=''
                    // onClick={() => props.addToShelf(props.index)}
                    // onClick={props.addToShelf(element.title)}
                    onClick={() => props.addToShelf(element.title)}
                />

                <h1>{element.author}</h1>
            </div>
        );
    });
    return <div>{mappedBooks}</div>;
}

export default BookList;
