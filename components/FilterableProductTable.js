import React from 'react';
const ProductCategoryRow = (props) => {
    const category = props.category;
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
};

const ProductRow = (props) => {
    const product = props.product;
    const styleProduct = !product.stocked ? {color:'red'} : {};
    const name = <span style={styleProduct}>{product.name}</span>;
    const price= <span>{product.price}</span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
}

const ProductTable = (props) => {
    const products = props.products;
    const rows = [];
    let lastCategory = null;
    products.forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category} key={rows.length}/>
            );
        }
        rows.push(
            <ProductRow product={product} key={rows.length}/>
        );
        lastCategory = product.category;
    });
    return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
    <tbody>{rows}</tbody>
    </table>
    );
}

const SearchBar = () => {
    let labelText = 'labelText';
    return (
        <form>
            <p>
            <input name="q" placeholder="Search..." ref={input => input && input.focus()} aria-label={labelText}
            />
            </p>
            <p>
            <input type="checkbox" name="s" value='1'/> {' '}
                <span>Only show products in stock</span>
            </p>
        </form>
    );
}

const FilterableProductTable = () => {
    const PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
    return (
        <div>
            <br/>
            <SearchBar />
            <ProductTable products={PRODUCTS}/>
        </div>
    );
}
export default FilterableProductTable;
