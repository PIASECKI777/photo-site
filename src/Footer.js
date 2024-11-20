import clip from './icons/clip-1.png'

function Footer() {
    return (
      <>
        <div className ="footer" >
 
          <div className="footer-rights">All rights reserved.</div>
          <div className='footer-clip-div'>
          <img
                src= {clip}
                height= '30'
                width=  '30'
                className='footer-clip'
                alt= 'CLIP'
            />
          </div>  
          <div className="footer-name">Władysław Piasecki - photographer.</div>
        </div>
        
      </>
    );
  }
  
  export default Footer;