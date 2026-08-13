'use client'

import BookCard from "@/components/BookCard";
import SearchBook from "@/components/SearchBook";
import FilteredCategory from "@/components/FilteredCategory";
import { useState, useEffect, useMemo } from "react";


const StorePage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchBook, setSearchBook] = useState('')
    const [category, setCategory] = useState('All')

    const filtered = useMemo(() => {
        return books.filter((book) => {
            const matchSearchBook = book.title
                .toLowerCase()
                .includes(searchBook.toLowerCase())


            const matchCategory = category === 'All' || book.category === category;

            return matchSearchBook && matchCategory
        })

    }, [books, searchBook, category]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // Fetching from an API
                const response = await fetch("/api/books");


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

            <div className="flex gap-4">
                <SearchBook searchBook={searchBook} setSearchBook={setSearchBook} />
                <FilteredCategory category={category} setCategory={setCategory} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {filtered.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}
export default StorePage