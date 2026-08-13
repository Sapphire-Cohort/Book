


const FilteredCatgory = ({ category, setCategory }) => {
    return (
        <div className="flex items-center gap-2 p-4 flex-col sm:flex-row">
            <h1>Filtered </h1>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="All">Select a category</option>
                <option value="Fiction">Fiction</option>
                <option value="Dystopian">Dystopian</option>
                <option value="Classic">Classic</option>
                <option value="Magical Realism">Magical Realism</option>
                <option value="Science">Science</option>
            </select>
        </div>
    )
}
export default FilteredCatgory