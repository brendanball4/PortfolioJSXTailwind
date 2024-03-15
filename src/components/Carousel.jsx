import React, { useState } from 'react';
import { FiZoomIn, FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Go to previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = () => {
    setSelectedImage(images[currentIndex]);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  // Go to previous image inside modal
  const goToPreviousModalImage = () => {
    const isFirstImage = selectedImage === images[0];
    const newIndex = isFirstImage ? images.length - 1 : images.indexOf(selectedImage) - 1;
    setSelectedImage(images[newIndex]);
  };

  // Go to next image inside modal
  const goToNextModalImage = () => {
    const isLastImage = selectedImage === images[images.length - 1];
    const newIndex = isLastImage ? 0 : images.indexOf(selectedImage) + 1;
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="relative w-full max-w-4xl h-64 overflow-hidden group">
        {/* Adjusted Image Container */}
        <div className="relative w-full h-full">

              <img
              src={images[currentIndex]}
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
          <FiArrowLeft className='h-6 bg-black rounded-full w-6 text-white dark:hover:text-black dark:hover:bg-white transition-colors duration-150 ease-in hover:text-black hover:bg-white' />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full"
        >
          <FiArrowRight className='h-6 w-6 bg-black rounded-full text-white dark:hover:text-black dark:hover:bg-white transition-colors duration-150 ease-in hover:text-black hover:bg-white' />
        </button>
      </div>

      {/* Modal */}
{isModalOpen && (
  <div
  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  onClick={closeModal}
  >
          {/* Modal navigation arrows */}
          <button
        onClick={(event) => {
          event.stopPropagation();
          goToPreviousModalImage();
        }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-5 rounded-full z-60"
      >
        <FiArrowLeft className='h-10 bg-black dark:bg-white rounded-full w-10 text-white dark:text-black dark:hover:text-white dark:hover:bg-black transition-colors duration-150 ease-in hover:text-black hover:bg-white' />
      </button>
      <button
         onClick={(event) => {
          event.stopPropagation();
          goToNextModalImage();
        }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-5 rounded-full z-60"
      >
        <FiArrowRight className='h-10 bg-black dark:bg-white rounded-full w-10 text-white dark:text-black dark:hover:text-white dark:hover:bg-black transition-colors duration-150 ease-in hover:text-black hover:bg-white' />
      </button>
      <button
        onClick={closeModal}
        className="absolute right-2 top-12 transform -translate-y-1/2 text-white p-5 rounded-full z-10"
      >
        <FiX className='h-12 bg-black rounded-full w-12 text-white dark:text-black dark:bg-white dark:hover:bg-black dark:hover:text-white transition-colors duration-150 ease-in hover:text-black hover:bg-white' />
      </button>
  <div
    className="relative bg-white p-4 rounded-lg shadow-lg max-w-[950px] xl:max-w-[1500px] 2-xl:max-w-[300px] mx-auto my-auto"
    onClick={(e) => e.stopPropagation()}
  >


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
