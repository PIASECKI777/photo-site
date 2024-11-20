

import './App.css';

import Header from './Header';
import LeftMenu from './LeftMenu';

import Home from './Home';
import About from './About';
import Error from './Error';

import  Photo from './photo/CategoryPhoto.js';
import  Studio from './studio/CategoryStudio.js';
import  Art from './art/CategoryArt.js';
import  Articles from './articles/Articles.js';

import  Video from './video/Video.js';
import  Services from './services/Services.js';
import  Contacts from './contacts/Contacts';

import  Wedding from './photo/wedding/Wedding';
import  BeforeAndAfter from './photo/before_and_after/BeforeAndAfter';
import  Children from './photo/children/Children';
import  Portrait from './photo/portrait/Portrait';
import  Genre from './photo/genre/Genre.js';
import  Nature from './photo/nature/Nature.js';
import  Lovestory from './photo/lovestory/Lovestory.js';

import  Dasha from './studio/dasha/Dasha';
import  Graduate_book from './studio/graduate_book/Graduate_book';
import  West from './studio/west/West';
import  Studio_mix from './studio/studio_mix/Studio_mix';
import  Presents from './studio/presents/Presents';
import  Wedding_photobook from './studio/wedding_photobook/Wedding_photobook';

import  Frost from './art/frost/Frost';
import  Boryspil from './art/boryspil/Boryspil';
import  Windows from './art/windows/Windows';

import Footer from './Footer';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>

    <div className="container_app">

      <div className="container_header">
        <div className='empty'></div>

                        <Header/>  
                        <LeftMenu/>
      </div>


        <Router>

          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>



            <Route path="/photo" element={<Photo/>}/>
            <Route path="/studio" element={<Studio/>}/>          
            <Route path="/art" element={<Art/>}/>
            <Route path="/articles" element={<Articles/>}/>   

            <Route path="/video" element={<Video/>}/>
            <Route path="/services" element={<Services/>}/>          
            <Route path="/contacts" element={<Contacts/>}/>

            <Route path="/photo/wedding" element={<Wedding/>}/>
            <Route path="/photo/before" element={<BeforeAndAfter/>}/>
            <Route path="/photo/children" element={<Children/>}/>
            <Route path="/photo/portrait" element={<Portrait/>}/>
            <Route path="/photo/genre" element={<Genre/>}/>
            <Route path="/photo/nature" element={<Nature/>}/>
            <Route path="/photo/lovestory" element={<Lovestory/>}/>

            <Route path="/studio/dasha" element={<Dasha/>}/>
            <Route path="/studio/graduate_book" element={<Graduate_book/>}/>
            <Route path="/studio/west" element={<West/>}/>
            <Route path="/studio/studio_mix" element={<Studio_mix/>}/>
            <Route path="/studio/presents" element={<Presents/>}/>
            <Route path="/studio/wedding_photobook" element={<Wedding_photobook/>}/>

            <Route path="/art/frost" element={<Frost/>}/>            
            <Route path="/art/boryspil" element={<Boryspil/>}/>
            <Route path="/art/windows" element={<Windows/>}/>

          </Routes>

        </Router> 

                                        <Footer/>
      </div>
    </>
  );
}

export default App;

