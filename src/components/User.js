export default function User (){   

    let novoNome;
    
    const userName = 'thekermit'// prompt('qual o nome de usuário?');
    
    if(userName ===''|| userName === undefined || userName === null){
        novoNome = 'the';
    }else{
       novoNome = userName;
    }


    return(

        <div className="usuario">
            <img data-test="profile-image" src={require('../assets/kermit-cha.png')} alt="imagem de perfil" />
            <div className="texto">
                <span data-test="name">
                    <strong> { novoNome } </strong>
                    <ion-icon data-test="edit-name" name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}
