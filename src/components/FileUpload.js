import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [mode, setMode] = useState(1);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      const res = await axios.post(`http://localhost:3002/api/upload/${mode}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResult(res.data);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. See console for details.");
    }
  };
  

  return (
    <div className="p-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <select value={mode} onChange={(e) => setMode(e.target.value)} className="ml-2">
        <option value={1}>Create New Companies</option>
        <option value={2}>Create New + Update Existing (No Overwrite)</option>
        <option value={3}>Create New + Update Existing (Overwrite)</option>
        <option value={4}>Update Only Existing (No Overwrite)</option>
        <option value={5}>Update Only Existing (Overwrite)</option>
      </select>
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 ml-2">Upload</button>

      {result && (
        <div className="mt-4">
          <p><strong>Inserted:</strong> {result.inserted}</p>
          <p><strong>Updated:</strong> {result.updated}</p>
          <p><strong>Skipped:</strong> {result.skipped}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
