import { Camera, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-8 h-8" />
              <span className="text-2xl font-light">
                Kevin<span className="font-normal">攝影</span>
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
             攝影
            </p>
          </div>

          <div>
            <h3 className="font-normal text-lg mb-4">連結</h3>
            <ul className="space-y-2 text-gray-400 font-light">
              <li><a href="#home" className="hover:text-white transition-colors">首頁</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">人像攝影</a></li>
              <li><a href="#featured" className="hover:text-white transition-colors">風景拍攝</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">關於我</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">聯絡我</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-normal text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/a411757"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 font-light text-sm">
          <p>&copy; {new Date().getFullYear()} StudioLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
