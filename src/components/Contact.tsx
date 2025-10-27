import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setIsSuccess(false);

    try {
      // Get EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Debug logging (remove in production)
      console.log('Environment variables check:');
      console.log('Service ID:', serviceId ? 'Set' : 'Missing');
      console.log('Template ID:', templateId ? 'Set' : 'Missing');
      console.log('Public Key:', publicKey ? 'Set' : 'Missing');

      // Check if all required environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS error details:', err);
      
      // More specific error messages
      if (err.message?.includes('configuration is missing')) {
        setError('EmailJS 設定遺失，請檢查環境變數。');
      } else if (err.status === 400) {
        setError('請求格式錯誤，請檢查表單資料。');
      } else if (err.status === 401) {
        setError('EmailJS 認證失敗，請檢查 Service ID 和 Public Key。');
      } else if (err.status === 404) {
        setError('找不到 EmailJS 模板，請檢查 Template ID。');
      } else if (err.status === 412) {
        setError('Gmail 認證已過期，請到 EmailJS 控制台重新連接 Gmail 服務。');
      } else {
        setError(`發送訊息時發生錯誤：${err.message || '請稍後再試。'}`);
      }
    } finally {
      setIsLoading(false);
    }
  };
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

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSuccess && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-sm">
                <p className="text-green-800 font-light">訊息已成功發送！我會盡快回覆您。</p>
              </div>
            )}
            
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-sm">
                <p className="text-red-800 font-light">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                名字 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="請輸入您的姓名"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                輸入信箱 *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="請輸入您的電子郵件"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-2">
                電話號碼 (選填)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="請輸入您的電話號碼"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                留下訊息 *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                placeholder="請輸入您的訊息"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-4 bg-gray-900 text-white font-light rounded-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? '發送中...' : '發送訊息'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
