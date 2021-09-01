import { useState, useEffect } from 'react';
import Title from 'components/ui/Title';
import Products from 'api/products.json';
import ProductItem from 'components/ui/ProductItem'

export default function Favorites() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products);
    }, [])

    return (
        <div>
            <Title>Favoriler</Title>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-0.1 rounded-lg overflow-hidden">
                {products.length && products.map(product => <ProductItem key={product.id} product={product} />)}
            </div>
        </div>
    )
}