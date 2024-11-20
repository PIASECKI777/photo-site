import { useSelector } from 'react-redux'
import langObjStudio from './textsStudio'
import '../category.css';

// The photo   src={require('./......./img_....../1_main_..........jpg')}
// and other same ones
// should be horizontal with  a 3 to 2 aspect ratio


function Photo() {
   const data = useSelector((state)=>state.dudu);
   const  keys = Object.entries(langObjStudio);

   return (
     <>

                  <div className="container_page">  

     <div className='container_of_albums' >
     <div className="albums_header"><h1>{keys[0][1][data]} </h1></div>


     <div className='album'>
       <a  className='href' href="/studio/dasha"  >

          <div className="album_div">
              <img className="album_img" src={require('./dasha/img_dasha/1_main_dasha.jpg')} alt="SPACE_355" />

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
       <a  className='href' href="/studio/graduate_book"  >

          <div className="album_div">
              <img className="album_img" src={require('./graduate_book/img_graduate_book/1_main_graduate_book.jpg')} alt="SPACE_355" />

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
       <a  className='href' href="/studio/west"  >

          <div className="album_div">
              <img className="album_img" src={require('./west/img_west/1_main_west.jpg')} alt="SPACE_355" />

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
       <a  className='href' href="studio/studio_mix"  >

          <div className="album_div">
              <img className="album_img" src={require('./studio_mix/img_studio_mix/1_main_studio_mix.jpg')} alt="SPACE_3554444444" />

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
       <a  className='href' href="/studio/presents"  >

          <div className="album_div">
              <img className="album_img" src={require('./presents/img_presents/1_main_presents.jpg')} alt="SPACE_355" />

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
       <a  className='href' href="/studio/wedding_photobook"  >

          <div className="album_div">
              <img className="album_img" src={require('./wedding_photobook/img_wedding_photobook/1_main_wedding_photobook.jpg')} alt="SPACE_355" />

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

{/*
     <div className='album'>
       <a  className='href' href="/photo/lovestory"  >

          <div className="album_div">
              <img className="album_img" src={require('./lovestory/img_lovestory/1_main_lovestory.jpg')} alt="SPACE_355" />

            <div className= "album_name_1">  

               <div>
                  <h1>
                    LOVE STORY
                  </h1>
               </div>
            </div>  

            <div className= "album_name">
               <div>
                  <h1>
                    LOVE STORY
                  </h1>
               </div>
            </div>  
          </div>   
       </a>
     
     </div>

*/}
     </div>

                                        </div>

     

     </>
     );
}
  
  export default Photo;