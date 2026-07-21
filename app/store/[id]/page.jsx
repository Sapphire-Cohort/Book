'use client'
import { useParams } from "next/navigation"
import { useState, useEffect } from "react";
const StoreDetailPage = () => {
   
    const { id } = useParams()

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        
        if (!id) return;

        const fetchBooks = async () => {
            try {
               
                const response = await fetch(`http://localhost:4000/books/${id}`)

               
                const data = await response.json();
                setBook(data);
                console.log('Fetched books:', data);
            } catch (error) {
                console.error('Error fetching books:', error);
                setError('Unable to load this book right now.');
            } finally {
                setLoading(false);
            }
        }

        fetchBooks()
    }, [id]) 

    return (
        <div className="p-6">
            {loading && <p>Loading books...</p>}

            {error && <p className="text-red-600">{error}</p>}

            {!loading && !error && !book && (
                <p className="text-slate-600">No book found for this item.</p>
            )}

            {!loading && book && (
                <div className="mt-4 rounded-lg bg-slate-100 p-6 shadow-md">
                    <h3 className="font-bold text-[16px]">{book.title}</h3>
                    <p className="text-slate-600 text-sm">Author: {book.author}</p>
                    <p className="text-slate-600 text-sm">Year: {book.year}</p>
                </div>
            )}
        </div>
    )
}
export default StoreDetailPage