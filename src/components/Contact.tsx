import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
            聯絡 <span className="font-normal">我</span>
          </h2>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
            
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <h3 className="font-normal text-xl mb-1 text-gray-900"></h3>
                <p className="text-gray-600 font-light"> </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <h3 className="font-normal text-xl mb-1 text-gray-900"> </h3>
                <p className="text-gray-600 font-light"> </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <h3 className="font-normal text-xl mb-1 text-gray-900"> </h3>
                <p className="text-gray-600 font-light">
                   <br />
                  
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                名字
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                輸入信箱
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder=" "
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                留下訊息
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                placeholder="訊息留言"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gray-900 text-white font-light rounded-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              發送訊息
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
