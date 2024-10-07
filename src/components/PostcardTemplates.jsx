import React from 'react';

const templates = [
  { id: 1, name: 'Mountain View', image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', message: 'Greetings from the mountains!' },
  { id: 2, name: 'Beach Sunset', image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', message: 'Wish you were here!' },
  { id: 3, name: 'City Lights', image: 'https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', message: 'Greetings from the big city!' },
];

const PostcardTemplates = ({ onSelectTemplate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <div key={template.id} className="bg-vanilla rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={() => onSelectTemplate(template)}>
          <img src={template.image} alt={template.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2 text-coffee">{template.name}</h3>
            <p className="text-mocha">{template.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostcardTemplates;
