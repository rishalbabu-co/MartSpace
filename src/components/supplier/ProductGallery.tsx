import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="aspect-w-1 aspect-h-1 mb-4">
        <img
          src={images[activeImage]}
          alt="Product view"
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
              activeImage === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-24 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}