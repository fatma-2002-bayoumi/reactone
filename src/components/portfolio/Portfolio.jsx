import { useState } from "react";
import testone from "../../assets/portfolio/poert1.png";
import testtwo from "../../assets/portfolio/port2.png";
import testthree from "../../assets/portfolio/port3.png";

const images = [testone, testtwo, testthree, testone, testtwo, testthree];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white w-dvw h-dvh flex justify-center items-center">
      <div className="container flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {images.map((image, index) => (
            <div key={index} onClick={() => setSelectedImage(image)} className="cursor-pointer">
              <img src={image} alt="Portfolio item" className="w-full" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-md">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <img src={selectedImage} alt="Selected" className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
