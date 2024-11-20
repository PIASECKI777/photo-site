import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import langObjPhoto from '../textsPhoto'
import '../../gallery.css';
import { natureImages } from './img_nature/nature.js';

function Nature() {
  const [file, setFile] = useState(null);
  const data = useSelector((state)=>state.dudu);
  const  keys = Object.entries(langObjPhoto); 
  
  return (
    <> 
      <div className='container_gallery'>
      <div className="gallery_header"><h1>{keys[6][1][data]}</h1></div>  
        <div className='media_container'>
          {
            natureImages.map((file,index) => (
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
  
  export default Nature;