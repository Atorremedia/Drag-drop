import './App.css';
import Header from './components/header';
import StyledDropzone from './components/Dropzone';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="welcome">
      Welcome to the upload area. You can drag and drop your files in the dropzone or click and select them in your file browser.
      </div>
      {/* <Dropzone/> */}
      <StyledDropzone />
      <Footer/>
    </div>
  );
}

export default App;
