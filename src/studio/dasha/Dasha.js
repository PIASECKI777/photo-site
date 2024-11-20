import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import langObjStudio from '../textsStudio'
import '../../gallery.css';
import { dashaImages } from './img_dasha/dasha.js';

function Genre () {
  const [file, setFile] = useState(null);
  const data = useSelector((state)=>state.dudu);
  const  keys = Object.entries(langObjStudio);

  return (
    <>
      <div className='container_gallery'>
      <div className="gallery_header"><h1>{keys[1][1][data]}</h1></div>  
        <div className='media_container'>
          {
            dashaImages.map((file,index) => (
              <div className='media' key={index} onClick = {() => setFile(file)}>
                {
                  <img src={file.url} alt="NO IMG"/>              
                }
              </div>
            ))
          }
        </div>
  
        <div className='popup-media' style={{ display: file ? 'block' : 'none'}}>
          <span onClick={ () => setFile(null)}>&times;</span>
             {
  
                 <img  src={file?.url} />
             }
        </div>  
      </div>
    </>
  );
}
  export default Genre;