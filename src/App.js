import React, { useState, useRef, useEffect } from 'react';
function App() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  return (
    <div className="App" style={{ marginTop: sticky.offset }}>
      <div className="header">
        <h1>Yapay Zeka ile Sanatın Buluştuğu Nokta: Yaratıcılığın Sınırlarını Keşfedin</h1>
      </div>

      <div id="sticky-header" className={`navbar${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
        <h3>Beteligeusre</h3>
      </div>

      <div className="row">
        <div className="main">
          <h5>Sanat, insan duygularını ve düşüncelerini ifade etmenin evrensel bir yoludur. Ancak, teknoloji çağında, yapay zeka gibi yenilikçi araçlarla sanatın tanımı ve yaratım süreci dönüşüyor. Biz de bu dönüşümün merkezinde yer alıyoruz.

Beteligeusre, adını taşıyan bu platform, sanatın geleneksel sınırlarını zorlayarak, yapay zekanın gücünü keşfetmenizi sağlıyor. Burada, ünlü sanat eserlerini analiz eden ve yeni görseller oluşturan yapay zeka algoritmalarıyla tanışacaksınız. Yaratıcı bir işbirliği örneği olarak, bu algoritmaların ürettiği fotoğraflarla eşlik eden cümleler, sanatı anlamak ve yorumlamak için yeni bir bakış açısı sunuyor.

Teknolojinin derinliklerinde yatan bu yenilikçi yaklaşım, sadece sanatın değil, aynı zamanda teknolojinin ve insan yaratıcılığının da sınırlarını zorluyor. Biz, Beteligeusre olarak, sanat ve yapay zeka arasındaki etkileşimi keşfetmenize ve bu heyecan verici yolculuğa katılmanıza davet ediyoruz. Gel, yaratıcılığın sınırlarını aşalım ve yeni bir sanat deneyimine adım atalım!</h5>
          <br /><br />
          <h2>Doğanın Yankısı</h2>
          <img className="fakeimg"alt="Description of the image" src="https://pixune.com/wp-content/uploads/2023/11/DALL·E-2023-11-30-12.59.03-A-whimsical-and-colorful-illustration-of-an-artist-surrounded-by-a-whirlwind-of-various-art-styles-and-influences.-The-artist-a-middle-aged-Caucasian-1030x589.webp" />
          <p>Ormanın derinliklerinde gizlenen doğanın yankısına kulak verin. Yemyeşil yaprakların arasında kaybolurken, kuşların melodileriyle bütünleşin. Toprağın kokusu ve rüzgarın esintisiyle uyum içinde olun ve doğanın sırlarını keşfedin.</p>
          <br />
          <h2>Kozmik Dans</h2>
          <img className="fakeimg"alt="Description of the image" src="https://pixune.com/wp-content/uploads/2023/11/DALL·E-2023-11-30-12.59.03-A-whimsical-and-colorful-illustration-of-an-artist-surrounded-by-a-whirlwind-of-various-art-styles-and-influences.-The-artist-a-middle-aged-Caucasian-1030x589.webp" />
          <p>Yıldızlar arası bir serüvene çıkarken, evrenin derinliklerindeki dansın ritmiyle bütünleşin. Galaksilerin ışıltılı dokusunda kaybolurken, zaman ve mekanın ötesinde bir yolculuğa adım atın. Sonsuzluğun büyüsüyle saran bu kozmik dans, ruhunuzun en derin köşelerine dokunacak.</p>
          <br />
          <hr />
          <br />
          <h2>Rüya Yankıları</h2>
          <img className="fakeimg"alt="Description of the image" src="https://pixune.com/wp-content/uploads/2023/11/DALL·E-2023-11-30-12.59.03-A-whimsical-and-colorful-illustration-of-an-artist-surrounded-by-a-whirlwind-of-various-art-styles-and-influences.-The-artist-a-middle-aged-Caucasian-1030x589.webp"/>
          <p>Hayal ve gerçek arasındaki ince çizgide kaybolun. Rengarenk bulutların üzerinde süzülürken, rüya yankılarının şarkısı sizi saracak. Gerçeklikle imge arasında gidip gelirken, düşlerinizi keşfedin ve sonsuz bir masalsı dünyanın içinde kaybolun.</p>
          <br />
          <hr />
          <br />
          <h2>Geleceğin Sessizliği</h2>
          <img className="fakeimg"alt="Description of the image" src="https://pixune.com/wp-content/uploads/2023/11/DALL·E-2023-11-30-12.59.03-A-whimsical-and-colorful-illustration-of-an-artist-surrounded-by-a-whirlwind-of-various-art-styles-and-influences.-The-artist-a-middle-aged-Caucasian-1030x589.webp" />
          <p>Teknolojinin ilerleyen adımlarıyla sarılan bir dünyanın sessizliğine dalın. Çelik ve camın soğuk dokusunu hissederken, geleceğin sessizliği sizi kuşatacak. Makinelerin ritmiyle uyum içinde olun ve bilinmeyenin derinliklerinde yeni bir dünyanın kapılarını aralayın.</p>
        </div>
        <div className="side">
          <h3>Rengarenk Karmaşa</h3>
          <img className="fakeimg"alt="Description of the image" src="https://pixune.com/wp-content/uploads/2023/11/DALL·E-2023-11-30-12.59.03-A-whimsical-and-colorful-illustration-of-an-artist-surrounded-by-a-whirlwind-of-various-art-styles-and-influences.-The-artist-a-middle-aged-Caucasian-1030x589.webp" />
          <p>Renklerin büyüleyici dansına tanık olun. Birbirine karışan tonlar ve desenler arasında kaybolurken, renklerin karmaşası sizi saran bir büyü haline gelecek. Her fırça darbesiyle yeni bir dünya yaratın ve renklerin büyüsüne kapılın.</p>
          <h3>Duyguların Dalgası</h3>
          <img className="fakeimg"alt="Description of the image" src="https://pixune.com/wp-content/uploads/2023/11/DALL·E-2023-11-30-12.59.03-A-whimsical-and-colorful-illustration-of-an-artist-surrounded-by-a-whirlwind-of-various-art-styles-and-influences.-The-artist-a-middle-aged-Caucasian-1030x589.webp"  />
          <p>Dalgaların kıyılarına vururken, duyguların sonsuz dalgalanışına tanık olun. Denizin derinliklerinde kaybolurken, içsel yolculuğunuzun başlangıcına adım atın. Her dalga, yeni bir duygu ve düşünceyi beraberinde getirirken, kendinizi sonsuzluğun kollarına bırakın.</p>
          <h3>Gece'nin Şarkısı</h3>
          <img className="fakeimg"alt="Description of the image" src="https://pixune.com/wp-content/uploads/2023/11/DALL·E-2023-11-30-12.59.03-A-whimsical-and-colorful-illustration-of-an-artist-surrounded-by-a-whirlwind-of-various-art-styles-and-influences.-The-artist-a-middle-aged-Caucasian-1030x589.webp"  />
          <p>Gece'nin sessizliğinde yankılanan şarkıları dinleyin. Yıldızların ışıltısı altında kaybolurken, gece'nin büyüsü sizi saracak. Gölgenin gizemli dansına tanık olun ve gece'nin derinliklerinde kaybolun.</p>
        </div>
      </div>
    </div>
  );
}
export default App;
