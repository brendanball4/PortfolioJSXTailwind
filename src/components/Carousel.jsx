import React, { useState } from 'react';
import { FiZoomIn, FiXCircle, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageUrls = images.map(path => new URL(`../PortfolioImages/${path}`, import.meta.url).href);

  // Go to previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  // Go to next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = () => {
    setSelectedImage(imageUrls[currentIndex]);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  // Go to previous image inside modal
  const goToPreviousModalImage = () => {
    const isFirstImage = selectedImage === imageUrls[0];
    const newIndex = isFirstImage ? imageUrls.length - 1 : imageUrls.indexOf(selectedImage) - 1;
    setSelectedImage(imageUrls[newIndex]);
  };

  // Go to next image inside modal
  const goToNextModalImage = () => {
    const isLastImage = selectedImage === imageUrls[images.length - 1];
    const newIndex = isLastImage ? 0 : imageUrls.indexOf(selectedImage) + 1;
    setSelectedImage(imaimageUrlsges[newIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="relative w-full max-w-4xl h-64 overflow-hidden group">
        {/* Adjusted Image Container */}
        <div className="relative w-full h-full">

              <img
              src={imageUrls[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover group-hover:opacity-50 dark:group-hover:opacity-75"
            />
          <div onClick={openModal} className="absolute inset-0 flex justify-center cursor-pointer items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <FiZoomIn className="dark:text-white text-6xl" />
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full"
        >
          <FiArrowLeftCircle className='h-6 bg-gray-400 rounded-full w-6 text-black text-black hover:bg-gray-500' />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full"
        >
          <FiArrowRightCircle className='h-6 w-6 bg-gray-400 rounded-full text-black text-black hover:bg-gray-500' />
        </button>
      </div>

      {/* Modal */}
{isModalOpen && (
  <div
  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  onClick={closeModal}
  >
  <div
    className="relative bg-white p-4 rounded-lg shadow-lg max-w-[950px] xl:max-w-[1500px] 2-xl:max-w-[300px] mx-auto my-auto"
    onClick={(e) => e.stopPropagation()}
  >
      {/* Modal navigation arrows */}
      <button
        onClick={goToPreviousModalImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-5 rounded-full z-10"
      >
        <FiArrowLeftCircle className='h-8 bg-gray-400 rounded-full w-8 text-black text-black hover:bg-gray-500' />
      </button>
      <button
        onClick={goToNextModalImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-5 rounded-full z-10"
      >
        <FiArrowRightCircle className='h-8 bg-gray-400 rounded-full w-8 text-black text-black hover:bg-gray-500' />
      </button>

      <button
        onClick={closeModal}
        className="absolute right-2 top-12 transform -translate-y-1/2 text-white p-5 rounded-full z-10"
      >
        <FiXCircle className='h-12 bg-gray-400 rounded-full w-12 text-black hover:bg-gray-500' />
      </button>

      {/* Enlarged Image with fixed width and auto height */}
      <img
      src={selectedImage}
      alt="Enlarged"
      className="w-full h-auto object-contain mx-auto"
    />

    </div>
  </div>
)}

    </div>
  );
};

export default Carousel;
