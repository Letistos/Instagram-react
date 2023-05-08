

export default function EntradaStorie(){
    
    const listaUsers = [
        {user:'sapaoMC', picture:require('../assets/sapo-bracos-cruzados.jpg'), descricao:"1"},
        {user:'frog', picture:require('../assets/Frog-Logo-Neon-Sign.jpg'), descricao:"2"},
        {user:'sapolino', picture:require('../assets/logo-perereca.png'), descricao:"3"},
        {user:'forg', picture:require('../assets/kermit-sorrindo.jpeg'),descricao:"4"},
        {user:'mcSapao', picture:require('../assets/logo-sapo-preto.jpg'),descricao:"5"},
        {user:'sapino', picture:require('../assets/sapo-cama-sapinho.jpeg'),descricao:"6"}
    ];

    return(

        <ul>
        { listaUsers.map( (story) => 
        
        (<li key={story.descricao} >
           
                <div className="story">
                

                    <div className="imagem">
                         <img src={ story.picture } alt={ story.descricao }/>
                     </div>

                     <div className="usuario">{ story.user }</div>

                </div>


               

            </li>) ) }
        </ul>
    );

}