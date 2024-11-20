import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import langObjPhoto from '../textsPhoto'
import '../../gallery.css'
import { portraitImages } from './img_portrait/portrait.js';

function Portrait () {
  const [file, setFile] = useState(null);
  const data = useSelector((state)=>state.dudu);
  const  keys = Object.entries(langObjPhoto);

return (
  <>
  
    <div className="gallery_header"><h1>{keys[4][1][data]}</h1></div>

    <div className='container_gallery'>

      <div className='media_container'>
        {
          portraitImages.map((file,index) => (
            <div className='media' key={index} onClick = {() => setFile(file)}>
              {
                <img src={file.url} alt="GGGGGGGG"/>              
              }
            </div>
          ))
        }
      </div>

      <div className='popup-media' style={{ display: file ? 'block' : 'none'}}>
        <span onClick={ () => setFile(null)}>&times;</span>
           {

               <img  src={file?.url} alt="DDDDDD"/>
           }
      </div>  
    </div>
  </>
);
}
  
  export default Portrait;