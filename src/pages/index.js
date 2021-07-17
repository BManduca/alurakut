import { useState } from 'react';

import Box, { BarTab, OpenTab } from '../components/Box';
import MainGrid from '../components/MainGrid';
import { ProfileRelationsBoxWrapper } from '../components/ProfileRelations';

import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../lib/AlurakutCommons';

function ProfileSidebar(props) {
  
  return (
    <OpenTab>

      <BarTab />

      <div className="contentBox">

        <img src={ `https://github.com/${props.githubUser}.png` } />

        <hr />

        <p>
          <a className="boxLink" href={`https://github.com/${props.githubUser}`} >
            @{props.githubUser}
          </a>
        </p>

        <hr />

        <AlurakutProfileSidebarMenuDefault />

      </div>


    </OpenTab>
  );
  
}


function ProfileRelationsBox(props) {
  
  // select all desired input fields and attach tooltips to them
  $("#myform :input").tooltip({
  
    // place tooltip on the right edge
    position: "center right",
  
    // a little tweaking of the position
    offset: [-2, 10],
  
    // use the built-in fadeIn/fadeOut effect
    effect: "fade",
  
    // custom opacity setting
    opacity: 0.7
  
  });

  return (

    
    <OpenTab>

      <BarTab />

      <div className="contentBox">

        <ProfileRelationsBoxWrapper>
        
          <h2 className="smallTitle">
            {props.title} ({props.items.length})
          </h2>

          <ul>
            {props.items.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                  <a href={`https://github.com/${itemAtual.login}`} target="_blank">
                    <img src={`https://github.com/${itemAtual.login}.png`} />
                    <span> {itemAtual.login} </span>
                  </a>
                </li>
              );
            })}
          </ul>

        </ProfileRelationsBoxWrapper>

      </div>

    </OpenTab>

  );

}


export default function Home() {
  const user = 'BManduca';
  const [ pessoasComunidade, setPessoasComunidade ] = useState([]);
  const [ comunidades, setComunidades ] = useState([{
    id: '45787865264564',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const [ seguidores, setSeguidores ] = useState([]);

  const pessoasFavoritas = [
    'RafaelCamarda',
    'maykbrito',
    'diego3g',
    'juunegreiros',
    'peas',
    'omariosouto'
  ]

  return (

    /* 
      fragments -> é uma propriedade(agrupador) que auxilia na utilização
      de mais de uma tag, sem precisar recorrer a divs e assim lotar nossa
      aplicação com diversos divs e deixando de uma forma menos performática
    */
    <>

      <AlurakutMenu githubUser={ user } />

      <MainGrid> 

        <div className="profileArea" style = {{ gridArea: 'profileArea' }} >
          <ProfileSidebar githubUser = { user } />
        </div>


        <div className="welcomeArea" style = {{ gridArea: 'welcomeArea' }} >
          
          <OpenTab>
            <BarTab />
            <div className="contentBox">
              <h1 className="title"> 
                Bem-vindo(a), { user }
              </h1>
              <OrkutNostalgicIconSet confiavel="3" legal="2" sexy="2" />
            </div>
          </OpenTab>

          <OpenTab>

            <BarTab />

            <div className="contentBox">


              <h2 className="subTitle"> O que você deseja fazer? </h2>

              <form id="myform" onSubmit={ function handleCreateComunity(event) {
                
                event.preventDefault();
                const dadosForm = new FormData(event.target);
                
                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosForm.get('title'),
                  image: dadosForm.get('image')
                }
                
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas);
                
              }}>
                
                <div>

                  <input 
                    placeholder="Qual vai ser o nome da sua comunidade?" 
                    name="title" 
                    aria-label="Qual vai ser o nome da sua comunidade?"
                    type="text"
                  />

                </div>

                <div>

                  <input 
                    placeholder="Insira uma URL para ser utilizada de capa" 
                    name="image" 
                    aria-label="Insira uma URL para ser utilizada de capa" 
                  />

                </div>

                <div>


                  <input
                    placeholder="Insira um link para sua comunidade"
                    name="link" 
                    aria-label="Insira um link para sua comunidade"
                    title="Este campo é opcional!"
                  />
                  
                </div>

                <button>
                  Criar comunidade
                </button>

              </form>

            </div>
          </OpenTab>

        </div>


        <div className="profileRelationsArea" style = {{ gridArea: 'profileRelationsArea' }} >

          <ProfileRelationsBoxWrapper>

            <BarTab />

            <div className="contentBox">

              <h2 className="smallTitle"> 
                Pessoas da Comunidade ({pessoasFavoritas.length})
              </h2>

              <ul>
                {pessoasFavoritas.map((pessoaComunidadeAtual) => {
                  return (
                    <li key={pessoaComunidadeAtual}>
                      <a href={`/users/${pessoaComunidadeAtual}`} >
                        <img src={`https://github.com/${pessoaComunidadeAtual}.png`} alt="imagem github"/>
                        <span> {pessoaComunidadeAtual} </span>
                      </a>
                    </li>
                  )
                })}
              </ul>

            </div>

          </ProfileRelationsBoxWrapper>
          

          <ProfileRelationsBoxWrapper>

            <BarTab />

            <div className="contentBox">

              <h2 className="smallTitle"> 
                Comunidades ({comunidades.length})
              </h2>

              <ul>
                {
                  comunidades.map((comunidadeAtual) => {
                    return (
                      <li key={comunidadeAtual.id}>
                        <a href={`/users/${comunidadeAtual.title}`}>
                          <img src={comunidadeAtual.image} />
                          <span> {comunidadeAtual.title} </span>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>

            </div>

          </ProfileRelationsBoxWrapper>

        </div>

      </MainGrid>

    </>

  )
}
