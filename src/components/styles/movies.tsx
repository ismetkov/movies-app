import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ListItem = styled.div`
  background: var(--white);
  margin: 10px 0;
  width: 30%;
  box-shadow: var(--shad);

  @media all and (max-width: 850px) {
    width: 48%;
  }

  @media all and (max-width: 550px) {
    width: 100%;
  }
`;

export const ItemHero = styled.div`
  position: relative;
  padding: 0 10px 0 10px;
  text-align: right;
`

export const ItemDetails = styled.div`
  padding: 2rem;

  p {
    line-height: 1.2;
    margin-bottom: 0;
  }
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  position: absolute;
  left: 0;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
`;

export const Title = styled.h2`
  word-wrap: break-word;
  position: relative;
  z-index: 2;
  margin: 0;
  font-size: 40px;
  z-index: 2;
  line-height: 1.1;
  -ms-transform: skew(0, -3deg);
  transform: skew(0, -3deg);
  line-height: 1.1;
  padding-top: 150px;

  a {
    background-image: linear-gradient(to right, rgba(255, 196, 14, 0.8) 100%, rgba(255, 196, 14, 0.8) 50%);
  }
  }
`