'use client'

import BookCard from "@/components/BookCard";
import { useState, useEffect } from "react";


const StorePage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // Fetching from an API
                const response = await fetch('http://localhost:4000/books')

                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }

                const data = await response.json();
                setBooks(data);
                console.log('Fetched books:', data);

            } catch (error) {
                console.error('Error fetching books:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchBooks()

    }, [])

    return (
        <div>
            {loading && <p>Loading books...</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>  
        </div>
    )
}
export default StorePage