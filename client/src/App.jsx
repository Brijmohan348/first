import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await axios.post("http://localhost:5000/profile", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      });

      console.log('File uploaded successfully:',);
    } catch (error) {
      console.error('Error uploading file:', error);
    }


    try {
      const response = await axios.get("http://localhost:5000/profile", {
        headers: {
          'content-type': 'application/json',
        },
        withCredentials: true
      });
      console.log(response)

      console.log('File uploaded successfully:');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          name="avatar" 
          accept='image/png, image/jpeg *'
          onChange={(e) => setFile(e.target.files[0])} 
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
