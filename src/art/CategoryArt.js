import { useSelector } from 'react-redux'
import langObjArt from './textsArt'
import '../category.css';
// The photo   src={require('./......./img_....../1_main_..........jpg')}
// and other same ones
// should be horizontal with  a 3 to 2 aspect ratio



function Art() {
   const data = useSelector((state)=>state.dudu);
   const  keys = Object.entries(langObjArt);

  return (
    <>
                 <div className="container_page">  

    <div className='container_of_albums' >
    <div className="albums_header"><h1>{keys[0][1][data]}</h1></div>


    <div className='album'>
      <a  className='href' href="/art/frost"  >

         <div className="album_div">
             <img className="album_img" src={require('./frost/img_frost/1_main_frost.jpg')} alt="SPACE_355" />

           <div className= "album_name_1">  

              <div>
                 <h1>
                   {keys[1][1][data]} 
                 </h1>
              </div>
           </div>  

           <div className= "album_name">
              <div>
                 <h1>
                   {keys[1][1][data]} 
                 </h1>
              </div>
           </div>  
         </div>   
      </a>
    </div>


    <div className='album'>
      <a  className='href' href="/art/boryspil"  >

         <div className="album_div">
             <img className="album_img" src={require('./boryspil/img_boryspil/1_main_boryspil.jpg')} alt="SPACE_355" />

           <div className= "album_name_1">  

              <div>
                 <h1>
                 {keys[2][1][data]} 
                 </h1>
              </div>
           </div>  

           <div className= "album_name">
              <div>
                 <h1>
                   {keys[2][1][data]} 
                 </h1>
              </div>
           </div>  
         </div>   
      </a>
    </div>


    <div className='album'>
      <a  className='href' href="/art/windows"  >

         <div className="album_div">
             <img className="album_img" src={require('./windows/img_windows/1_main_windows.jpg')} alt="SPACE_355" />

           <div className= "album_name_1">  

              <div>
                 <h1>
                   {keys[3][1][data]} 
                 </h1>
              </div>
           </div>  

           <div className= "album_name">
              <div>
                 <h1>
                    {keys[3][1][data]} 
                 </h1>
              </div>
           </div>  
         </div>   
      </a>
    </div>

    </div>
    </div>

    </>
    );


}
  export default Art;