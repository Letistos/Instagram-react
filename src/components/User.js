import { useState } from 'react';

export default function User() {

    let [userName, setName] = useState('thekermit');

    function perguntarNome() {

        let novoNome = prompt('qual seu nome?');
        setName(novoNome);


    }

    let [userImg, setImage] = useState('https://ih1.redbubble.net/image.1414841714.5868/pp,504x498-pad,600x600,f8f8f8.u2.jpg');

    function alteraImagem() {

        let novaImg = prompt('qual a url da nova imagem de perfil?');

        setImage(novaImg);

    }

    return(

        <div className="usuario">
            <img onClick={alteraImagem} data-test="profile-image" src={ userImg ? `${userImg}`: 'https://ih1.redbubble.net/image.1414841714.5868/pp,504x498-pad,600x600,f8f8f8.u2.jpg'} alt="foto de perfil"/>
            <div className="texto">
                <span data-test="name">
                    <strong> { userName ? `${userName}`: `thekermit`} </strong>
                    <ion-icon onClick={perguntarNome} data-test="edit-name" name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}
