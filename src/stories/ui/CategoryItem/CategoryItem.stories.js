import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from '../../../components/ui/CategoryItem';

export default {
  title: "Components/UI",
  component: CategoryItem,
}

export const CategoryItemStory = (args) => (
    <CategoryItem {...args}/>
);

CategoryItemStory.propTypes = {
    category: PropTypes.object.isRequired
};

CategoryItemStory.args = {
    category: {
        url: null,
        image: "http://cdn.getir.com/cat/5697c78dc181490f00c99fea_f7ef7ccb-f3a4-4388-b787-232967c16320.jpeg",
        title: 'Yeni'
    }
};
