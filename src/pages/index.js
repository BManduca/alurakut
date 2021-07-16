import MainGrid from '../components/MainGrid';
import Box from '../components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../components/ProfileRelations';

function ProfileSidebar(props) {
  
  return (
    <Box>
      <img src={ `https://github.com/${props.githubUser}.png` } />
    </Box>
  );
  
}


export default function Home() {

  const githubUser = 'BManduca';

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

      <AlurakutMenu />

      <MainGrid> 

        <div className="profileArea" style = {{ gridArea: 'profileArea' }} >
          <ProfileSidebar githubUser = {githubUser} />
        </div>


        <div className="welcomeArea" style = {{ gridArea: 'welcomeArea' }} >
          <Box>
            <h1 className="title"> 
              Bem-vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>


        <div className="profileRelationsArea" style = {{ gridArea: 'profileRelationsArea' }} >

          <ProfileRelationsBoxWrapper>
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
          </ProfileRelationsBoxWrapper>

          <Box>
            Comunidades
          </Box>

        </div>

      </MainGrid>

    </>

  )
}
