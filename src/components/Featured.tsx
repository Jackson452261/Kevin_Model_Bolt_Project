import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const featuredImages = [
  {
    url: 'https://res.cloudinary.com/dtbj43yha/image/upload/v1749265674/IMG_5775_11zon_snkgmo.jpg',
    title: 'Marc marquez',
    description: '2023 Malaysian MotoGP'
  },
  {
    url: 'https://res.cloudinary.com/dtbj43yha/image/upload/v1749265975/IMG_5721_11zon_nrpij0.jpg',
    title: 'Francesco Bagnaia',
    description: '2023 Malaysian MotoGP'
  },
  {
    url: 'https://res.cloudinary.com/dtbj43yha/image/upload/v1756132612/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-08-25_224011_lqaeln.png',
    title: 'Jorge Martín',
    description: '2023 Malaysian MotoGP'
  },
  {
    url: 'https://res.cloudinary.com/dtbj43yha/image/upload/v1756132852/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2025-08-25_224404_u37xjz.png',
    title: 'Álex Márquez',
    description: '2023 Malaysian MotoGP'
  },
];

export default function Featured() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === featuredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="travel" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
            風景 <span className="font-normal">拍攝</span>
          </h2>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
            旅行
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-gray-200 rounded-sm">
            {featuredImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                  <h3 className="text-3xl lg:text-5xl font-light mb-2">{image.title}</h3>
                  <p className="text-lg lg:text-xl font-light text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {featuredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-gray-900 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
