const ProductRow = ({ index, name, price, quantity, category }) => {
    const factorQuantity = (category) => {
        switch (category) {
            case 'Fruits':
            case 'Vegetables':
            case 'Sea food':
            case 'Meat':
                return 'kgs';
            case 'Bakery': return 'boxes';
            case 'Beverage': return 'litres';
            default: return ''
        }
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity} {factorQuantity(category)}</td>
        </tr>)
}
export default ProductRow