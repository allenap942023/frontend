import React, { useState, useRef } from 'react';
import { AiOutlineCloudUpload, AiOutlineUpload } from 'react-icons/ai';

const ProfilePictureUploader = ({ onUpload }) => {
  const [isHovered, setHovered] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setHovered(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setHovered(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setHovered(false);

    const files = e.dataTransfer.files;

    if (files.length > 0) {
      const uploadedFile = files[0];
      const imageUrl = URL.createObjectURL(uploadedFile);
      setImageUrl(imageUrl);
      onUpload(uploadedFile);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    onUpload(file);
  };

  const handleClick = () => {
    // Abrir el explorador de archivos al hacer clic en el componente
    fileInputRef.current.click();
  };

  return (
    <div
      className={`relative flex items-center justify-center bg-white bg-opacity-20 w-48 h-48 border-2 border-dashed animate-pulse rounded-full cursor-pointer overflow-hidden transition-all  ${
        isHovered ? 'bg-gray-100' : ''
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile"
          className="object-cover w-full h-full rounded-full"
        />
      ) : (
        <>
          <AiOutlineCloudUpload className="text-3xl mb-2 text-gray-400" />
          <p className="text-sm text-center text-white">
            Arrastra y suelta o haz clic para subir una foto
          </p>
        </>
      )}
      {imageUrl && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <AiOutlineUpload className="text-white text-2xl" />
        </div>
      )}
    </div>
  );
};

export default ProfilePictureUploader;
