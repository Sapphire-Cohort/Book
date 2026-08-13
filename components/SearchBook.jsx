


const SearchBook = ({ searchBook, setSearchBook }) => {
    return (
        <div className="flex items-center gap-2 p-4 flex-col sm:flex-row">
            
            <label htmlFor="search" className="text-gray-700 font-semibold">
                Search:
            </label>
            <input
                id="search"
                placeholder="Search for books..."
                value={searchBook}
                onChange={(e) => setSearchBook(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}
export default SearchBook