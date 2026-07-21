import Image from "next/image"
import Button from "./Button";
import Link from "next/link";


const BookCard = ({ book }) => {

    // Image is the only property destructured from the book object
    const { cover_url: image } = book;
    return (
        <div>

            <div className="bg-slate-200 rounded-lg p-4 m-4 shadow-md flex flex-col justify-between max-w-75">
                <Link href={`/store/${book.id}`}>
                    <Image
                        src={image}
                        alt={book.title}
                        width={200}
                        height={200}
                        className="mx-auto flex-1"
                    />
                </Link>
                <div className="mt-4 px-6">
                    <h3 className="font-bold text-[16px]">{book.title}</h3>
                    <p className="text-slate-600 text-sm">Author: {book.author}</p>
                    <p className="text-slate-600 text-sm">Year: {book.year}</p>
                </div>

                <Button
                    label="Add to Wishlist"
                    className="bg-slate-800 text-white my-6 rounded-full"
                />
            </div>

        </div>
    )
}
export default BookCard