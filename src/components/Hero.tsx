import { Camera, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dtbj43yha/image/upload/v1753798709/mountain_jdi9k6.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Camera className="w-16 h-16 stroke-[1.5]" />
        </div>
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
           Kevin  <span className="font-normal">攝影</span>
        </h1>
        <p className="text-lg md:text-xl font-light mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
         隨著鏡頭的步伐，也記錄下那些攝影的瞬間。
        </p>
        <button
          onClick={scrollToGallery}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105"
        >
          查看攝影作品
        </button>
      </div>

      <button
        onClick={scrollToGallery}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
