// src/App.js
import React from 'react';
import FileUpload from './components/FileUpload'; // ✅ no curly braces!

function App() {
  return (
    <div className='flex justify-center'>
      <FileUpload />
    </div>
  );
}

export default App;
