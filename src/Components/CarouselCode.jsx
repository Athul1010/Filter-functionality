//-----------------------Text caurosel-------------------------//

import React, { useState } from 'react';

const Carousel = () => {
  const slides = ['Slide 1', 'Slide 2', 'Slide 3'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px', fontSize: '24px' }}>
        {slides[currentIndex]}
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;

//-----------------------Text caurosel-------------------------//


//-----------------------image caurosel-------------------------//

// import React, { useState } from 'react';
// import one from '../assets/android.png';
// import second from '../assets/fireOS.png';
// import third from '../assets/armor_B3-min-min.jpg';

// const Carousel = () => {
//   const slides = [one, second, third];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <div style={{ marginBottom: '20px' }}>
//         <img 
//           src={slides[currentIndex]} 
//           alt={`Slide ${currentIndex + 1}`} 
//           style={{ width: '400px', height: '200px', objectFit: 'cover' }}  
//         />
//       </div>
//       <button onClick={prevSlide}>Previous</button>
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// };

// export default Carousel;


//-----------------------image caurosel-------------------------//


//------------------------Carousel with Names and images----------------------------//


// import React, { useState } from 'react';
// import one from '../assets/android.png';
// import second from '../assets/fireOS.png';
// import third from '../assets/armor_B3-min-min.jpg';

// const Carousel = () => {
//   const slides = [
//     { name: 'Athul', image: one },
//     { name: 'Sree', image: second },
//     { name: 'Vipin', image: third }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <div style={{ marginBottom: '20px' }}>
//         <img
//           src={slides[currentIndex].image}
//           alt={slides[currentIndex].name}
//           style={{ width: '400px', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
//         />
//         <h3 style={{ marginTop: '10px', fontSize: '20px', color: '#333' }}>
//           {slides[currentIndex].name}
//         </h3>
//       </div>
//       <button onClick={prevSlide} style={{ marginRight: '10px' }}>Previous</button>
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// };

// export default Carousel;

//------------------------Carousel with Names and images----------------------------//

//------------------------Two Carousel with Names and images----------------------------//

// import React, { useState } from 'react';
// import one from '../assets/android.png';
// import second from '../assets/fireOS.png';
// import third from '../assets/armor_B3-min-min.jpg';
// import fourth from '../assets/chris-robinson.png'

// const Carousel = () => {
//   const slides = [
//     { name: 'Athul', image: one },
//     { name: 'Sree', image: second },
//     { name: 'Maggie', image: third },
//     { name: 'under taker', image: fourth }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
//   };

//   const getNextIndex = (index) => (index + 1) % slides.length;

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
//         {/* Current Slide */}
//         <div>
//           <img
//             src={slides[currentIndex].image}
//             alt={slides[currentIndex].name}
//             style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
//           />
//           <h3 style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
//             {slides[currentIndex].name}
//           </h3>
//         </div>
//         {/* Next Slide */}
//         <div>
//           <img
//             src={slides[getNextIndex(currentIndex)].image}
//             alt={slides[getNextIndex(currentIndex)].name}
//             style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
//           />
//           <h3 style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
//             {slides[getNextIndex(currentIndex)].name}
//           </h3>
//         </div>
//       </div>
//       <button onClick={prevSlide} style={{ marginRight: '10px' }}>Previous</button>
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// };

// export default Carousel;

//------------------------Two Carousel with Names and images----------------------------//


//------------------------Automatic slider----------------------------//

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Home = () => {
//   const [datas, setDatas] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Fetching API Data
//   useEffect(() => {
//     axios.get('https://potterapi-fedeperin.vercel.app/es/characters')
//       .then(response => setDatas(response.data))
//       .catch(error => console.log('Fetching error:', error));
//   }, []);

//   // Automatic Sliding every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
//     }, 3000);
//     return () => clearInterval(interval); // Cleanup to avoid memory leaks
//   }, [datas]);

//   // Next Slide
//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % datas.length);
//   };

//   // Previous Slide
//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + datas.length) % datas.length);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       {datas.length > 0 && (
//         <div>
//           <h2>{datas[currentIndex].fullName}</h2>
//           <img
//             src={datas[currentIndex].image}
//             alt={datas[currentIndex].fullName}
//             width={200}
//             style={{ borderRadius: '10px', marginBottom: '20px' }}
//           />
//         </div>
//       )}

//       <div>
//         <button onClick={prevSlide} style={{ marginRight: '10px' }}>Previous</button>
//         <button onClick={nextSlide}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Home;
