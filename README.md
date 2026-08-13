## BOOKSTORE APP

In class we used json-server to mock our data whiich made it possible for to fetch from 

```javascript
 https://localhost:4000/books
```

Vercel does not recognise json-server, meaning that our data is not going to be visible on our UI again. 

To make sure our data is being fetched correctly, we need to update our fetch logic. 

1. First create the folder inside the app folder, name it **api**
1. Inside the **api folder** create a file called route.js
1. Copy and paste the code below in it
    
    ```javascipt

    import { NextResponse } from "next/server";
    import booksData from "@/data/books.json"; 
    // booksData is a variable i gave to the imported data from books.json file. So you can call yours whatever variable name you want.

    /*
    Now go to your the page.jsx where you are doing your fetching. In my case, it is the store/[id]/page.jsx. Change fetch("http://localhost:3000/books") to fetch("/api/books")

    Once I did that, the data is being fetched successfully again. You do not need to start the for the mock data again. Just run your npm run dev and all should work fine
    */
    
    export async function GET() {
    return NextResponse.json(booksData.books);
    }

    ```

4. Within the same folder, create another file. name it **[id]/route.js**
1. Copy and paste the code below into it

```

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

```

