import React from 'react';
import { Link } from '@reach/router';

import {
  ListItem,
  ItemDetails,
  ItemHero,
  Image,
  Title
} from '../styles/movies';

interface CardProps {
  title: string;
  image: string;
  linkTo: string;
  description: string;
}

function Card({ title, description, image, linkTo }: CardProps) {
  return (
    <ListItem>
      <ItemHero>
        {image && <Image src={`${image}`} />}
        <Title>
          <Link to={linkTo}>{title}</Link>
        </Title>
      </ItemHero>
      <ItemDetails>
        <p>{description.split(' ').slice(0, 10).join(' ') + '...'}</p>
      </ItemDetails>
    </ListItem>
  )
};

Card.defaultProps = {};

export default Card;