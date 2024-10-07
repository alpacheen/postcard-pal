import React from 'react';

function PostcardPreview({ recipient, message, image }) {
  return (
    <div className="border-2 border-gray-300 p-4 mt-4 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Postcard Preview</h3>
      <div className="bg-white p-4 shadow-md rounded">
        <p className="font-bold">To: {recipient}</p>
        <p className="mt-2">{message}</p>
        {image && (
          <img 
            src={URL.createObjectURL(image)} 
            alt="Postcard" 
            className="mt-4 max-w-full h-auto"
          />
        )}
      </div>
    </div>
  );
}

export default PostcardPreview;