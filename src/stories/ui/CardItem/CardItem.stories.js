import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../../../components/ui/CardItem';

export default {
  title: "Components/UI",
  component: CardItem,
}

export const CardItemStory = (args) => (
    <CardItem {...args}/>
);

CardItemStory.propTypes = {
    card: PropTypes.object.isRequired
};

CardItemStory.args = {
  card:{
    title: 'Her siparişinize bir kampanya',
    description: 'Getir\'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.',
    image: 'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg'
  }
};
