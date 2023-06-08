import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from './ProductRow'

const ProductTable = ({ products, searchText, inStock }) => {
    let filteredProducts = new Map()
    products.forEach((product) => {
        if ((product.name.toLowerCase().includes(searchText) === false)) { return }
        if (inStock && !product.stocked) { return }
        if (filteredProducts.has(product.category)) {
            filteredProducts.set(product.category, [...filteredProducts.get(product.category), product])
        } else {
            filteredProducts.set(product.category, [product])
        }
    })
    const productsList = []
    filteredProducts.forEach((value, key) => {
        const result = value.map((product, index) => <ProductRow key={product.name} index={index} name={product.name} price={product.price}
            quantity={product.quantity}
            category={product.category} />)
        productsList.push(<>
            <ProductCategoryRow title={key} />
            {result}
        </>)
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {productsList}
            </tbody>
        </table>
    )
}
export default ProductTable