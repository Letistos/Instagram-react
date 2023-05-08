export default function Suggestion(){
    const listaSugestoes=[
    {usuario:'Frogg',avatar:require('../assets/kermit-cha.png')},
    {usuario:'chiltoaddart',avatar:require('../assets/sapo-carregando-papeis.png')},
    {usuario:'adorable_frogs',avatar:require('../assets/sapo-com-dentes.jpeg')},
    {usuario:'frog_memes',avatar:require('../assets/sapo-deitado-na-flor.jpg')},
    {usuario:'smallcutefrogs',avatar:require('../assets/sapo-cartola.webp')}
    ];

    return(
        <ul>
        {listaSugestoes.map(opcao =>

         (<li key={opcao.usuario}>

            <div className="sugestao">
                <div className="usuario">
                    <img src={opcao.avatar} alt="avatar usuario" />
                    <div className="texto">
                        <div className="nome">{opcao.usuario}</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>

            </li>))}

         </ul>

    );
}