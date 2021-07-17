import styled from 'styled-components';

export const OpenTab = styled.div`

  background: #29293d;
  border: 6px solid #444444;
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
    color: #363AAA;
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

  .tooltip {
    background-color:#000;
    border:1px solid #fff;
    padding:10px 15px;
    width:200px;
    display:none;
    color:#fff;
    text-align:left;
    font-size:12px;
  }

`;

export const BarTab = styled.div`

  width: 100%;
  margin: 0rem;
  padding: 0.94rem;
  background: #808080;
  background-image: url("https://imagetourlconverter.com/files/EGMbGtH5S9680264.svg");
  background-position: top 0.25rem right 0.25rem;
  background-size: 4.06rem;
  background-repeat: no-repeat;
  border-bottom: 5px solid #444444;
  box-sizing: border-box;
  height: 1.88rem;
  color: #363AAA;

  .button {
      float: right;
      height: 1.25rem;
  }

`;

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 0.5rem;
  padding: 1rem;

  margin-bottom: 0.625rem;

  .boxLink {
    font-size: 0.875rem;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  } 

  .title {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1.25rem;
  }

  .subTitle {
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 1.25rem;
  }

  .smallTitle {
    margin-bottom: 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    color: #333333;
    margin-bottom: 1.25rem;
  }

  hr {
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    border-color: transparent;
    border-bottom-color: #29293d;
  }

  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 0.875rem 1rem;
    margin-bottom: 0.875rem;
    border-radius: 625rem;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }

  button {
    border: 0;
    padding: 0.5rem 0.75rem;
    color: #FFFFFF;
    border-radius: 625rem;
    background-color: #006699;
  }

  img {
    border-radius: 0.5rem;
  }

  a {
    border-radius: 0.5rem;
  }

`;

export default Box;