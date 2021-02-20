import React from 'react';
import PhotoGallery from './components/PhotoGallery'
import Pics from './pics'

function App() {
    return (
        <PhotoGallery pics={Pics}/>
    );
}

export default App;