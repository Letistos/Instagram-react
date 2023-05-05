import Posts from './Stories'

import SideBar from './SideBar'

import Stories from './Stories'


export default function Body(){
    return(
        <div class="corpo">

          <div class="esquerda">
            <Stories/>            
            <Posts/>           
          </div>
          <SideBar/>
        
        </div>

    );
}