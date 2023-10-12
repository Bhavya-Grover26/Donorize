import React, { useState } from 'react';
import './AddEventOrg.css';
import NavbarOrg from '../NavbarOrg/NavbarOrg'

const AddEvent = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className='Addd'>
    <NavbarOrg/>
    <div className="Addevent">
        
      <div className="LeftSection">
        <label htmlFor="imageUpload" className="UploadButton">
          Upload Image
        </label>
        <input
          type="file"
          id="imageUpload"
          className="UploadInput"
          onChange={handleChange}
          accept="image/*"
        />
        {file && (
          <div className="PreviewContainer">
            <img src={file} alt="Preview" className="PreviewImage" />
          </div>
        )}
      </div>
      <div className="RightSection">
  {/* Add your form inputs for event name, short description, long description, and maximum objectives */}
  <input type="text" placeholder="Event Name" className="EventInput" />
  <textarea placeholder="Short Description" className="ShortDescriptionTextArea"></textarea>
  <textarea placeholder="Long Description" className="LongDescriptionTextArea"></textarea>
  <input type="text" placeholder="Maximum Objectives" className="MaximumObjectivesInput" />
</div>

    </div>
    </div>
  );
};

export default AddEvent;
