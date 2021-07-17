import styled from 'styled-components';
import Box from '../Box';

export const ProfileRelationsBoxWrapper = styled(Box)`

  background: #29293d;
  border: 4px solid #444444;
  border-radius: 0.5rem;
  padding: 0rem;
  color: #F4F4F4;
  margin: 5px;
  margin-bottom: 10px;

  .contentBox {
      padding: 16px;
      margin-left: auto;
      margin-right: auto;
  }

  .boxLink {
    font-size: 14px;
    color: #F4F4F4;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #F4F4F4;
  }

  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #F4F4F4;
    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }

  input {
    width: 100%;
    background-color: #f9f9f9;
    color: #363AAA;
    border: 0;
    padding: 8px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;

    ::placeholder {
      color: #363AAA;
      opacity: 1;
    }

  }

  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }

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