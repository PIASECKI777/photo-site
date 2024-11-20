import { useSelector } from 'react-redux'
import langObjPhoto from './textsPhoto'
import '../category.css';

// The photo   src={require('./......./img_....../1_main_..........jpg')}
// and other same ones
// should be horizontal with  a 3 to 2 aspect ratio


function Photo() {
   const data = useSelector((state)=>state.dudu);
   const  keys = Object.entries(langObjPhoto);
   
   return (
     <>
            <div className="container_page">


     <div className='container_of_albums' >
     <div className="albums_header"><h1>{keys[0][1][data]} </h1></div>       {/* <p>Data From Child: {data}</p> */}


     <div className='album'>
       <a  className='href' href="/photo/wedding"  >

          <div className="album_div">
              <img className="album_img" src={require('./wedding/img_wedding/1_main_wedding.jpg')} alt="SPACE_355" />

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
       <a  className='href' href="/photo/before"  >

          <div className="album_div">
              <img className="album_img" src={require('./before_and_after/img_before_and_after/1_main_before.jpg')} alt="SPACE_355" />

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
       <a  className='href' href="/photo/children"  >

          <div className="album_div">
              <img className="album_img" src={require('./children/img_children/1_main_children.jpg')} alt="SPACE_355" />

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




     <div className='album'>
       <a  className='href' href="/photo/portrait"  >

          <div className="album_div">
              <img className="album_img" src={require('./portrait/img_portrait/1_main_portrait.jpg')} alt="SPACE_3554444444" />

            <div className= "album_name_1">  

               <div>
                  <h1>
                    {keys[4][1][data]}
                  </h1>
               </div>
            </div>  

            <div className= "album_name">
               <div>
                  <h1>
                    {keys[4][1][data]}
                  </h1>
               </div>
            </div>  
          </div>   
       </a>
     </div>


     <div className='album'>
       <a  className='href' href="/photo/genre"  >

          <div className="album_div">
              <img className="album_img" src={require('./genre/img_genre/1_main_genre.jpg')} alt="SPACE_355" />

            <div className= "album_name_1">  

               <div>
                  <h1>
                    {keys[5][1][data]}
                  </h1>
               </div>
            </div>  

            <div className= "album_name">
               <div>
                  <h1>
                    {keys[5][1][data]}
                  </h1>
               </div>
            </div>  
          </div>   
       </a>
     </div>


     <div className='album'>
       <a  className='href' href="/photo/nature"  >

          <div className="album_div">
              <img className="album_img" src={require('./nature/img_nature/1_main_nature.jpg')} alt="SPACE_355" />

            <div className= "album_name_1">  

               <div>
                  <h1>
                    {keys[6][1][data]}
                  </h1>
               </div>
            </div>  

            <div className= "album_name">
               <div>
                  <h1>
                    {keys[6][1][data]}
                  </h1>
               </div>
            </div>  
          </div>   
       </a>
     </div>


     <div className='album'>
       <a  className='href' href="/photo/lovestory"  >

          <div className="album_div">
              <img className="album_img" src={require('./lovestory/img_lovestory/1_main_lovestory.jpg')} alt="SPACE_355" />

            <div className= "album_name_1">  

               <div>
                  <h1>
                    {keys[7][1][data]}
                  </h1>
               </div>
            </div>  

            <div className= "album_name">
               <div>
                  <h1>
                    {keys[7][1][data]}
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
  
  export default Photo;