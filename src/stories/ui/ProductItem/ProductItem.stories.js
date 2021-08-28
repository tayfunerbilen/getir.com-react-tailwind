import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../../components/ui/ProductItem';

export default {
  title: "Components/UI",
  component: ProductItem,
}

// FIXME: ProductItem component'inin aslında max height'e ve max width değerlerine sahip olması gerekiyor. @suleymansevimli
export const ProductItemStory = (args) => (
    <div style={{maxHeight:'25%', maxWidth:'25%'}}>
        <ProductItem {...args}/>
    </div>
);

ProductItemStory.propTypes = {
    product: PropTypes.object.isRequired
};

ProductItemStory.args = {
    product: {
        "id": 1,
        "title": "Lay's Mevsim Yeşillikli",
        "image": "https://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1609123518121.jpeg",
        "alt": "96 g",
        "price": 6.36
      }
};
