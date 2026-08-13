import { NextResponse } from "next/server";
import booksData from "@/data/books.json"; // booksData is a variable i gave to the imported data from books.json file. So you can call yours whatever variable name you want.

/*
Now go to your the page.jsx where you are doing your fetching. In my case, it is the store/[id]/page.jsx. Change fetch(`http://localhost:3000/books/${id}`) to fetch(`/api/books/${id}`)

Once I did that, the data is being fetched successfully again. You do not need to start the for the mock data again. Just run your npm run dev and all should work fine
*/

export async function GET(request, { params }) {
    const { id } = await params;

    const book = booksData.books.find(
        (book) => book.id === id
    );

    if (!book) {
        return NextResponse.json(
            { message: "Book not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(book);
}