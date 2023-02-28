import React from "react";
import instance from "../../Axios";
import './Files.css'

function Files() {

    const [dragActive, setDragActive] = React.useState(false);
    const inputRef = React.useRef(null);
    
    const handleDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };
    
    const handleDrop = function(e) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      }
    };
    
    const handleChange = function(e) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
      }
    };
    
    const onButtonClick = () => {
      inputRef.current.click();
    };
  
    return (
      <div className="Files">
        <h1>Twoje pliki</h1>

        <h1>Prześlij pliki</h1>

        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                <div>
                    <p>Drag and drop your file here or</p>
                    <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
                </div> 
            </label>
            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        </form>

      </div>
    );
  }
  
  export default Files;
  