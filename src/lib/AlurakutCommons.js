import React from 'react';
import styled, { css } from 'styled-components';
import NextLink from 'next/link';

const BASE_URL = 'http://alurakut.vercel.app/';

const v = '1';

function Link({href, children, ...props}) {
  return (
    <NextLink href = { href } passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  )
}

// ================================================================================================================
// Menu
// ================================================================================================================
export function AlurakutMenu({ githubUser }) {

  const [isMenuOpen, setMenuState] = React.useState(false);

  return (
    <AlurakutMenu.Wrapper isMenuOpen={isMenuOpen}>

      <div className="container">

        <AlurakutMenu.Logo src={`${BASE_URL}/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {[
            { name: 'Inicio', slug: '/'}, 
            {name: 'Amigos', slug: '/amigos'}, 
            {name: 'Comunidades', slug: '/comunidades'}
          ].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>

          <a href={`/logout`}>
            Sair
          </a>

          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>

        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />}
        </button>

      </div>

      <AlurakutMenuProfileSidebar githubUser={githubUser} />
      
    </AlurakutMenu.Wrapper>
  )
}

AlurakutMenu.Wrapper = styled.header`
  width: 100%;
  background-color: #006699;

  .alurakutMenuProfileSidebar {
    background: white;
    position: fixed;
    z-index: 100;
    padding: 2.88rem;
    bottom: 0;
    left: 0;
    right: 0;
    top: 3rem;
    transition: 0.3s;
    pointer-events: ${({ isMenuOpen }) => isMenuOpen ? 'all' : 'none'};
    opacity: ${({ isMenuOpen }) => isMenuOpen ? '1' : '0'};
    transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))'};
    @media(min-width: 860px) {
      display: none;
    }
    > div {
      max-width: 25rem;
      margin: auto;
    }
    a {
      font-size: 1.13rem;
    }
    .boxLink {
      font-size: 1.13rem;
      color: #2E7BB4;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
    }
    hr {
      margin-top: 0.75rem;
      margin-bottom: 0.5rem;
      border-color: transparent;
      border-bottom-color: #ECF2FA;
    }
  }
  .container {
    background-color: #006699;
    padding: 0.44rem 1rem;
    max-width: 69.38rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 101;
    @media(min-width: 860px) {
      justify-content: flex-start;
    }
    button {
      border: 0;
      background: transparent;
      align-self: center;
      display: inline-block;
      @media(min-width: 860px) {
        display: none;
      }
    }
    nav {
      display: none;
      @media(min-width: 860px) {
        display: flex;
      }
      a {
        font-size: 0.75rem;
        color: white;
        padding: 0.63rem 1rem;
        position: relative;
        text-decoration: none;
        &:after {
          content: " ";
          background-color: #5292C1;
          display: block;
          position: absolute;
          width: 0.06rem;
          height: 0.75rem;
          margin: auto;
          left: 0;
          top: 0;
          bottom: 0;
        }
      }
    }
    input {
      color: #ffffff;
      background: #5579A1;
      padding: 0.63rem 2.63rem;
      border: 0;
      background-image: url(${`${BASE_URL}/icons/search.svg`});
      background-position: 0.94rem center;
      background-repeat: no-repeat;
      border-radius: 62.50rem;
      font-size: 0.75rem;
      ::placeholder {
        color: #ffffff;
        opacity: 1;
      }
    } 
  }
`;
AlurakutMenu.Logo = styled.img`
  background-color: #ffffff;
  padding: 0.56rem 0.88rem;
  border-radius: 62.50rem;
  height: 2.13rem;
`;

function AlurakutMenuProfileSidebar({ githubUser }) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '0.5rem' }} />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  )
}

// ================================================================================================================
// AlurakutProfileSidebarMenuDefault
// ================================================================================================================
export function AlurakutProfileSidebarMenuDefault() {
  return (
    <AlurakutProfileSidebarMenuDefault.Wrapper>
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/user.svg`} />
          Perfil
        </a>

        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} />
          Recados
        </a>

        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
          Fotos
        </a>

        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} />
          Github Trends
        </a>

        <a href="/">
          <img src={`${BASE_URL}/icons/logout.svg`} />
          Logout
        </a>
      </nav>
    </AlurakutProfileSidebarMenuDefault.Wrapper>
  )
}

AlurakutProfileSidebarMenuDefault.Wrapper = styled.div`
  a {
    font-size: 0.75rem;
    color: #2E7BB4;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;

    img {
      width: 1rem;
      height: 1rem;
      margin-right: 0.31rem;
    }
  }
`;

// ================================================================================================================
// OrkutNostalgicIconSet
// ================================================================================================================
export function OrkutNostalgicIconSet(props) {

  return (

    <OrkutNostalgicIconSet.List>
      {[
        { name: 'Recados', slug: 'recados', icon: 'book' },
        { name: 'Fotos', slug: 'fotos', icon: 'camera' },
        { name: 'Videos', slug: 'videos', icon: 'video-camera' },
        { name: 'Fãs', slug: 'fas', icon: 'star' },
        { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
      ].map(({ name, slug, icon }) => (

        <li key={`orkut__icon_set__${slug}`}>

          <span style={{ gridArea: 'title' }} className="OrkutNostalgicIconSet__title">
            {name}
          </span>
          <span className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>

            <img 
              key={`orkut__icon_set__${slug}_img`} 
              className="OrkutNostalgicIconSet__iconSample" 
              src={`https://alurakut.vercel.app/icons/${icon}.svg`} 
            />

            {props[slug] ? props[slug] : 6}

          </span>

        </li>

      ))}

      {[
        { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
        { name: 'Legal', slug: 'legal', icon: 'cool' },
        { name: 'Sexy', slug: 'sexy', icon: 'heart' },
      ].map(({ name, slug, icon }) => {

        const total = props[slug] ? props[slug] : 3;

        return (

          <li key={`orkut__icon_set__${slug}`}>

            <span className="OrkutNostalgicIconSet__title">
              {name}
            </span>
            
            <span className="OrkutNostalgicIconSet__iconComplex" className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= (total - 1);
                return (
                  <img 
                    key={`orkut__icon_set__${slug}_img_${index}`} 
                    src={`https://alurakut.vercel.app/icons/${icon}.svg`} 
                    style={{ marginRight: '2px', opacity: isHeartActive ? 1 : '0.5' }} 
                  />
                )
              })}
            </span>

          </li>

        );
        
      })}

    </OrkutNostalgicIconSet.List>

  )

}

OrkutNostalgicIconSet.List = styled.ul`

  margin-top: 2rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    font-size: 0.75rem;
    color: #5A5A5A;
    display: grid;
    grid-template-areas:
      "title title"
      "number number"; 
    
    &:not(:last-child) {
      margin-right: 0.31rem;
    }

    .OrkutNostalgicIconSet__title {
      display: block;
      font-style: italic; 
    }

    .OrkutNostalgicIconSet__number {
      min-width: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .OrkutNostalgicIconSet__iconSample {
        margin-right: 0.44rem;
      }

    }

  }

`;

// ================================================================================================================
// Login Page
// ================================================================================================================
const AlurakutLoginScreen = css`

  :root {
    --backgroundPrimary: #D9E6F6;
    --backgroundSecondary: #F1F9FE;
    --backgroundTertiary: #FFFFFF;
    --backgroundQuarternary: #BBCDE8;
    --colorPrimary: #2E7BB4;
    --colorSecondary: #388BB0;
    --colorTertiary: #2F4A71;
    --colorQuarternary: #D81D99;
    --textPrimaryColor: #333333;
    --textSecondaryColor: #FFFFFF;
    --textTertiaryColor: #5A5A5A;
    --textQuarternaryColor: #C5C6CA;
    --commonRadius: 0.5rem;
  }

  .loginScreen {
    padding: 1rem;
    max-width: 69.38rem;
    display: grid;
    --gap: 0.75rem;
    --gutter: 1rem;
    grid-gap: var(--gap);
    grid-template-areas: 
      "logoArea"
      "formArea"
      "footerArea";
    @media(min-width: 860px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas: 
              "logoArea formArea"
              "logoArea formArea"
              "footerArea footerArea";
    }

    .logoArea {
      grid-area: logoArea;
      background-color: var(--backgroundTertiary);
      border-radius: var(--commonRadius);
      padding: var(--gutter);
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      min-height: 16.44rem;

      @media(min-width: 860px) {
        min-height: 23rem;
      }

      p {
        font-size: 0.75rem;
        line-height: 1.2;
        &:not(:last-child) {
          margin-bottom: 0.75rem;
        }
        strong {
          color: var(--colorQuarternary);
        }
      }

      img {
        max-height: 2.81rem;
        margin-bottom: 2.25rem;
      }

    }

    .formArea {
      grid-area: formArea;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--gutter);
        padding-left: 3.13rem;
        padding-right: 3.13rem;
        background-color: var(--backgroundSecondary);
        border-radius: var(--commonRadius);
        flex: 1;
        &:not(:last-child) {
          margin-bottom: var(--gap);
        }
        &:first-child {
          min-height: 14rem;
          @media(min-width: 860px) {
            min-height: 17.63rem;
          }
        }

        p {
          font-size: 0.88rem;
        }

        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }

        input {
          width: 100%;
          display: block;
          border: 0.06rem solid var(--textQuarternaryColor);
          padding: 0.75rem;
          background-color: var(--backgroundTertiary);
          border-radius: var(--commonRadius);
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }

        button {
          width: 100%;
          display: block;
          border: 0;
          padding: 0.75rem;
          border-radius: var(--commonRadius);
          background-color: var(--colorPrimary);
          color: var(--textSecondaryColor);
        }

      }

    }

    .footerArea {
      grid-area: footerArea;
      background-color: var(--backgroundQuarternary);
      border-radius: var(--commonRadius);
      padding: 0.5rem;

      p {
        font-size: 0.75rem;
        text-align: center;

        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }

      }

    }

  }

`;

// ================================================================================================================
// Reset Styles
// ================================================================================================================
export const AlurakutStyles = css`

  *::-webkit-scrollbar {
    width: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }

  *::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 0.63rem;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  
  a,
  button {

    cursor: pointer;
    transition: 0.3s;
    outline: 0;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

  }

  input {

    transition: 0.3s;
    outline: 0;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover,
    &:focus {
      box-shadow: 0rem 0rem 0.31rem #33333357;
    }

  }

  ${AlurakutLoginScreen}

`;