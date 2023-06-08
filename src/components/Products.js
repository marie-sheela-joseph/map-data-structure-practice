import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { products } from '../data';
import { useState } from 'react';

const Products = () => {
    const [searchText, setSearchText] = useState('')
    const [inStock, setInStock] = useState(false)
    const changeSearchText = (newSearchText) => {
        setSearchText(newSearchText.toLowerCase())
    }
    const changeInStock = (newStock) => {
        setInStock(newStock)
    }
    return (
        <section className='products'>
            <h1><span>Fresh</span> supermarket</h1>
            <h2>Inventory</h2>
            <SearchBar searchText={searchText} setSearchText={changeSearchText} inStock={inStock} setInStock={changeInStock} />
            <ProductTable products={products} searchText={searchText} inStock={inStock} />
        </section>
    )
}
export default Products