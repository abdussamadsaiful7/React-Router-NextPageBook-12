import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    return (
        <Link to={`../book/${book.isbn13}`}>
             <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                    <img className='object-cover w-full h-56 md:h-64 xl:h-80' src={book.image} alt='Book Cover'/>
                    <div className='bg-black text-white bg-opacity-75 opacity-0 hover:opacity-70 px-6 py-4
                     absolute inset-0 transition-opacity duration-200 flex flex-col'>
                        <p>{book.title}</p>
                        <br/>
                        <p><small>{book.subtitle.substring(0, 55)}....</small></p>
                        <br/>
                        <p className='mt-auto'><small>Price: {book.price}</small></p>
                    </div>
                </div> 
        </Link>
    );
};

export default Book;