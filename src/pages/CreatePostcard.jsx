import { useState } from 'react';
import PostcardPreview from '../components/PostcardPreview';
import PostcardTemplates from '../components/PostcardTemplates';

function CreatePostcard() {
  const [postcardData, setPostcardData] = useState({
    recipient: '',
    message: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostcardData({ ...postcardData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostcardData({ ...postcardData, image: URL.createObjectURL(file) });
    }
  };

  const handleTemplateSelect = (template) => {
    setPostcardData({
      ...postcardData,
      message: template.message,
      image: template.image,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log('Postcard data:', postcardData);
  };

  return (
    <div className="container mx-auto mt-12 px-4 animate-fade-in">
      <h2 className="text-4xl font-serif font-bold mb-8 text-coffee text-center">Create a Postcard</h2>
      <div className="bg-vanilla shadow-lg rounded-lg p-8 animate-slide-in">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="recipient" className="block text-sm font-medium text-coffee">Recipient:</label>
            <input
              type="text"
              id="recipient"
              name="recipient"
              value={postcardData.recipient}
              onChange={handleInputChange}
              className="input"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-coffee">Message:</label>
            <textarea
              id="message"
              name="message"
              value={postcardData.message}
              onChange={handleInputChange}
              className="input"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-coffee">Upload Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageUpload}
              accept="image/*"
              className="mt-1 block w-full text-sm text-sepia
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-caramel file:text-cream
                hover:file:bg-mocha transition-colors duration-200"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Create Postcard
          </button>
        </form>
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-serif font-bold mb-6 text-coffee">Or choose a template:</h3>
        <PostcardTemplates onSelectTemplate={handleTemplateSelect} />
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-serif font-bold mb-6 text-coffee">Preview:</h3>
        <PostcardPreview {...postcardData} />
      </div>
    </div>
  );
}

export default CreatePostcard;