import styled from 'styled-components';
import Box from '../Box';

export const ProfileRelationsBoxWrapper = styled(Box)`

  ul {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr 1fr 1fr; 
    max-height: 13.75rem;
    list-style: none;
  }

  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  ul li a {
    display: inline-block;
    height: 6.38rem;
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    
    span {
      color: #FFFFFF;
      font-size: 0.63rem;
      position: absolute;
      left: 0;
      bottom: 0.63rem;
      z-index: 2;
      padding: 0rem 0.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);

    }

  }

`;