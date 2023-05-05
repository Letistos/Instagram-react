import ReactDOM from 'react-dom';

import NavBar from './components/Navbar'

import Body from './components/Body'


function App(){
    return (
        <div>
            <NavBar />
            <Body/>
            
        </div>
    );
}
const site = App();

const siteRoot = document.querySelector('.root');

ReactDOM.render(site,siteRoot);

