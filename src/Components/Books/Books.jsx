import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
    const {books} = useLoaderData();
   
    //console.log(booksData);
    return (
        <div className='my-container'>
           <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 '>
            {
                books.map(book =>  ( 
                <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                    <img className='object-cover w-full h-56 md:h-64 xl:h-80' src={book.image} alt='Book Cover'/>
                    <div className='bg-black text-white bg-opacity-75 opacity-0 hover:opacity-70 p-2
                     absolute inset-0 transition-opacity duration-200'>
                        <p>{book.title}</p>
                        <br/>
                        <p><small>{book.subtitle}</small></p>
                        <br/>
                        <p><small>Price: {book.price}</small></p>
                    </div>
                </div> 
                ))
            }
           </div>
        </div>
    );
};

export default Books;