const SearchBar = ({ searchText, setSearchText, inStock, setInStock }) => {
    return (
        <form>
            <input type="text" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }} />
            <input type="checkbox" checked={inStock} id="inStock" onChange={(e) => setInStock(e.target.checked)} />
            <label for="inStock">only show products in stock</label>
        </form>
    )
}
export default SearchBar