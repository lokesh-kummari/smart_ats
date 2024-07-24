import React from 'react';

const FileUpload = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    onFileChange(e.target.files[0]);
  };

  return (
    <div className="form-group">
      <label htmlFor="resumeFile">Upload Your Resume (PDF):</label>
      <input
        type="file"
        id="resumeFile"
        className="form-control"
        accept=".pdf"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
