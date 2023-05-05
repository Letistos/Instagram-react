export default function User (){
    return(
        <div class="usuario">
            <img data-test="profile-image" src={require('../assets/kermit-cha.png')} alt="imagem de perfil" />
            <div class="texto">
                <span data-test="name">
                    <strong>thekermit</strong>
                    <ion-icon data-test="edit-name" name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}