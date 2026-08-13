'use client'
import Button from "@/components/Button";
import Image from "next/image";
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

                const response = await fetch(`/api/books/${id}`);


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
    }, [id]);

    return (
        <div className="p-6">
            {loading && <p>Loading books...</p>}

            {error && <p className="text-red-600">{error}</p>}

            {!loading && !error && !book && (
                <p className="text-slate-600">No book found for this item.</p>
            )}

            {!loading && book && (
                <div className="mt-4 rounded-lg bg-slate-100 p-6 shadow-md flex gap-4">
                    <div>
                        <Image src={book.cover_url} alt={book.title} width={300} height={200} />
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl">{book.title}</h3>
                        <p className="text-slate-600 text-lg">{book.description}</p>
                        <p className="text-slate-600 font-medium">Author: {book.author}</p>
                        <div className="mt-4 flex text-slate-900 font-semibold justify-between gap-2">
                            <p className="text-slate-600 text-sm">Genre: {book.genre}</p>
                            <p className="text-slate-600 text-sm">Year: {book.year}</p>
                        </div>

                        <div className={`mt-4`}>
                            <Button
                                label="Add to Wishlist"
                                className={`text-white ${book.available ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                            />
                        </div>
                    </div>


                </div>
            )}
        </div>
    )
}
export default StoreDetailPage