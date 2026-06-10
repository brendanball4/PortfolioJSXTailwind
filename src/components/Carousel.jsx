import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { FiZoomIn, FiX, FiArrowLeft, FiArrowRight, FiImage } from 'react-icons/fi';

const Carousel = ({ images, height = 'h-64' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Graceful fallback when a project has no screenshots yet
  if (!images || images.length === 0) {
    return (
      <div className={`relative w-full ${height} flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-800`}>
        <div className="flex flex-col items-center gap-2 text-stone-500 dark:text-stone-400">
          <FiImage className="text-5xl" />
          <span className="text-sm font-medium">Screenshots coming soon</span>
        </div>
      </div>
    );
  }

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
      <div className={`relative w-full ${height} overflow-hidden group`}>
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

        {/* Arrows: glass buttons that fade in on hover */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              aria-label="Previous image"
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-stone-900/60 backdrop-blur-md border border-stone-200/60 dark:border-stone-600/60 text-stone-700 dark:text-stone-200 shadow-sm opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 transition-all duration-200"
            >
              <FiArrowLeft className='w-4 h-4' />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next image"
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-stone-900/60 backdrop-blur-md border border-stone-200/60 dark:border-stone-600/60 text-stone-700 dark:text-stone-200 shadow-sm opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 transition-all duration-200"
            >
              <FiArrowRight className='w-4 h-4' />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 rounded-full bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Modal (portaled to body so transformed ancestors can't trap the fixed overlay) */}
{isModalOpen && createPortal(
  <div
  className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
  onClick={closeModal}
  >
      {/* Modal navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(event) => {
              event.stopPropagation();
              goToPreviousModalImage();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 hover:scale-105 active:scale-95 transition-all duration-150 z-50"
          >
            <FiArrowLeft className='w-6 h-6' />
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              goToNextModalImage();
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 hover:scale-105 active:scale-95 transition-all duration-150 z-50"
          >
            <FiArrowRight className='w-6 h-6' />
          </button>
        </>
      )}
      <button
        onClick={closeModal}
        aria-label="Close"
        className="absolute right-4 top-4 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 hover:rotate-90 transition-all duration-200 z-50"
      >
        <FiX className='w-6 h-6' />
      </button>
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm z-50">
          {images.indexOf(selectedImage) + 1} / {images.length}
        </div>
      )}
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
  </div>,
  document.body
)}

    </div>
  );
};

export default Carousel;
