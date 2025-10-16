import { Award, Camera, Heart, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Camera, value: '', label: ' ' },
    { icon: Users, value: '', label: ' ' },
    { icon: Award, value: '', label: ' ' },
    { icon: Heart, value: '', label: ' ' },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
               Kevin<span className="font-normal">攝影</span>
            </h2>
            <div className="space-y-4 text-gray-700 font-light leading-relaxed text-lg">
              <p>
               捕捉攝影的瞬間之美。
              </p>
              <p>
                
              </p>
              <p>
               
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-gray-900" />
                  <div className="text-4xl font-light mb-2 text-gray-900">{stat.value}</div>
                  <div className="text-sm font-light text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
