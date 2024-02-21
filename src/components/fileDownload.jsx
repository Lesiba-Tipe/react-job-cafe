import React from 'react';

const FileDownload = ({file}) => {
  

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = file.url;
    link.setAttribute('download', `${file.name}.${file.ext}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={downloadFile}>Download {file.name}</button>
    </div>
  );
}

export default FileDownload;