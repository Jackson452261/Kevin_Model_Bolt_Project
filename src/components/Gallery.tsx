import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const imageUrls = [
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946769/samples/IMG_5639_nsm0fm.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946769/samples/IMG_5651_qrfplg.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946769/samples/IMG_5650_mn7atp.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946769/samples/IMG_5638_klnrak.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946769/samples/IMG_5637_w0pcb7.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946769/samples/IMG_5640_rd3pvb.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946770/samples/IMG_5652_otmtuy.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946771/samples/IMG_5642_lldrux.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946771/samples/IMG_5653_hkvcwg.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946771/samples/IMG_5641_jnks7p.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946771/samples/IMG_5643_fjl2dj.jpg',
  'https://res.cloudinary.com/dtbj43yha/image/upload/v1736946771/samples/IMG_5644_t21rj1.jpg',
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946771/samples/IMG_5645_cxyb1g.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946772/samples/IMG_5654_qvyuhe.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946772/samples/IMG_5646_d3bccz.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946772/samples/IMG_5655_oqnrv1.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946772/samples/IMG_5647_jxfvel.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946772/samples/IMG_5656_hgeucd.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946772/samples/IMG_5648_toygel.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946773/samples/IMG_5649_nhesxu.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946773/samples/IMG_5657_vpmssp.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946773/samples/IMG_5658_hl1sni.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946774/samples/IMG_5662_h1kq6l.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736946774/samples/IMG_5663_z2twpf.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948202/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1800_u9hag4.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948202/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1803_eydds6.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948203/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1804_ominyy.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948203/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1805_wsq1db.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948203/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1806_f9jd69.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948203/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1808_izlwow.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948204/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1807_gu9xbc.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948204/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1811_blsrxr.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948204/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1810_s916qv.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948204/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1812_zt3x7s.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948204/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1814_lbdmrd.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948204/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1809_k3k14y.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948204/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1815_y3ktdm.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948205/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1816_ovtjtk.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948205/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1817_zdfqfr.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948205/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1818_gcc3sm.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948211/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1819_xfhjis.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948211/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1820_uj0ldc.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948211/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1821_vw6f00.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948214/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1826_pxuuzi.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948215/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1827_vbdgwl.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948215/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1832_ybw1o5.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948215/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1833_jgtgvz.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948215/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1834_gm4b7g.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948216/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1835_nsuq1s.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948216/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1836_btbgg7.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948216/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1837_ai6jzk.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948217/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1839_wxeog5.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948218/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1859_zwvw6n.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948219/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1860_yla4wg.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948219/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1861_vj0k2b.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948219/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1862_lhwrlx.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948220/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1863_vjuowc.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948221/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1864_bnepsh.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948221/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1865_hnyc56.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948222/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1866_obynai.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948223/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1869_vqqryg.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948223/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1871_eklrni.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948224/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1876_mswmr4.jpg",
  "https://res.cloudinary.com/dtbj43yha/image/upload/v1736948224/2024%E6%97%A5%E6%9C%ACmotogp/IMG_1877_gzudw1.jpg"
];

// Transform URLs to photo album format
const photos = imageUrls.map((src, index) => ({
  src,
  width: 800,
  height: 600,
  alt: `Gallery image ${index + 1}`
}));

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="model" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
            人像 <span className="font-normal">攝影</span>
          </h2>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
         捕捉攝影的瞬間之美。
          </p>
        </div>

        <PhotoAlbum
          photos={photos}
          layout="masonry"
          targetRowHeight={300}
          onClick={({ index }) => setIndex(index)}
        />
        
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos}
        />
      </div>
    </section>
  );
}
