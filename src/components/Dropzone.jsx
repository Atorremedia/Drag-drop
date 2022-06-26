import React, {useState} from 'react'
import {useDropzone} from 'react-dropzone'

export default function Dropzone (){
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const [dropped, setDropped] = useState();


  const files = acceptedFiles.map(file => (
    <li key={file.path}><span className="material-symbols-outlined">task</span>
      <b> {file.path}</b> - <em>{file.size}</em> bytes
    </li>
  ));
 
    
  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()}/>
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div className="dropped">
        <h4>Uploaded Files</h4>
        <ul className="list">{files}</ul>
      </div>
    </section>
    
  );
}


