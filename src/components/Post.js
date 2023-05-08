import { useState } from 'react';
export default function EntradaPost(){

const listaPosts = [
        {user:'frogged', avatar:require('../assets/sapo-bracos-cruzados.jpg'), picture:require('../assets/kermit-green-painting.jpg'), post:"01", curtiu:require('../assets/logo-sapo-preto.jpg')},
        {user:'frog', avatar:require('../assets/sapo-bracos-cruzados.jpg'), picture:require('../assets/kermit-gif.gif'), post:"02",curtiu:require('../assets/sapo-cartola.webp')},
        {user:'froggy', avatar:require('../assets/logo-perereca.png'), picture:require('../assets/sapo-deitado-na-flor.jpg'), post:"03",curtiu:require('../assets/logo-sapo-preto.jpg')},
        {user:'forg', avatar:require('../assets/kermit-sorrindo.jpeg'), picture:require('../assets/sapo-laranja.webp'),post:"04",curtiu:require('../assets/logo-sapo-preto.jpg')},
        {user:'mcSapao', avatar:require('../assets/logo-sapo-preto.jpg'), picture:require('../assets/sapo-bracos-cruzados.jpg'),post:"05",curtiu:require('../assets/logo-sapo-preto.jpg')},
        {user:'sapino', avatar:require('../assets/sapo-cama-sapinho.jpeg'), picture:require('../assets/sapo-cama-sapinho.jpeg'),post:"06",curtiu:require('../assets/logo-sapo-preto.jpg')}
];


return(

    <ul class='posts'>
        
    { listaPosts.map( (postagem) => 
    
    (<li key={postagem.avatar} class='post' >
       

        <div data-test="post" className="post">
          <div className="topo">
            <div className="usuario">
              <img src={postagem.avatar} alt="avatar"/>{postagem.user}</div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
            <img data-test="post-image" src={postagem.picture} alt="post"/>
          </div>

          <div className="fundo">
            
            <Acoes/>

            <div class="curtidas">
              <img src={postagem.curtiu} alt="respondeai"/>
              <div className="texto">
                Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras 101.523 pessoas</strong>
              </div>
            </div>

          </div>
        </div>     

        </li>) ) }
    </ul>
);
}

function Acoes(){
  let [classBookmark, setClass] = useState('');

function trocarClasse(){
  if(classBookmark === ''){
    setClass('salvou')
  }else{
    setClass('')
  }
}

let [nameBookmark, setName] = useState('bookmark-outline');

function trocarNome(){
  if(nameBookmark === 'bookmark-outline'){
    setName('bookmark')
  }else{
    setName('bookmark-outline')
  }
}
return(

  <div className="acoes">
              <div>
                <ion-icon data-test="like-post" name="heart-outline" ></ion-icon>
                <ion-icon data-test="save-post" name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick={() => { trocarNome(); trocarClasse()}} class={classBookmark} name={nameBookmark}></ion-icon>
              </div>
            </div>
);
}