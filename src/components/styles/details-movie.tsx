import styled from 'styled-components'
import { Link } from '@reach/router';

export const MovieDetailsHero = styled.div`
  height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2vw), 0% 100%);

  &:before {
    display: block;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    background:
      linear-gradient(45deg, hsla(190, 95%, 43%, 1) 0%, hsla(190, 95%, 43%, 0) 70%),
      linear-gradient(135deg, hsla(219, 93%, 48%, 1) 10%, hsla(219, 93%, 48%, 0) 80%),
      linear-gradient(225deg, hsla(293, 93%, 48%, 1) 10%, hsla(293, 93%, 48%, 0) 80%),
      linear-gradient(315deg, hsla(130, 96%, 45%, 1) 100%, hsla(130, 96%, 45%, 0) 70%);
    opacity: 0.6;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2vw), 0% 100%);
  }
`
export const MovieDetailsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`

export const MovieDescription = styled.div`
  background: var(--white);
  position: relative;
  padding: 3rem;
  margin-top: -10rem;
  box-shadow: 0 0 10px 2px rgba(0,0,0,0.15);
`


export const MovieDetailsTitle = styled.h2`
  max-width: 600px;
  font-size: 10rem;
  text-align: center;
  background-image: linear-gradient(to right, rgba(255, 196, 14, 0.8) 100%, rgba(255, 196, 14, 0.8) 50%);
  transform: skew(-5deg);
  z-index: 2;
}
`

export const GoBack = styled(Link)`
  position: absolute;
  top: 41px;
  right: 40px;
  font-size: 2rem;
  background: var(--black);
  transform: skew(-5deg);
  color: var(--white);
  padding: 10px;
`

export const LoaderText = styled.p`
  text-align: center;
`;