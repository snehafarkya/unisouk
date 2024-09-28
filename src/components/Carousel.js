import { useEffect, useRef, useState } from 'react';
import juice from '../assets/juice.png';
import orange from '../assets/orange.png';
import game from '../assets/game.png';

const Carousel = () => {
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const cardCarouselRef = useRef(null);

  const rotateCards = (cards) => {
    cards.forEach((card) => {
      const classes = card.classList;
      const image = card.querySelector('img'); // Select the image within the card

      // Remove focus class from all images
      image.classList.remove('focus');

      if (classes.contains('right')) {
        classes.remove('right');
      } else if (classes.contains('left')) {
        classes.remove('left');
        classes.add('right');
      } else {
        classes.add('left');
      }
    });

    // Add the focus class to the image of the centered card (the one without left/right)
    const centeredCard = cards.find((card) => !card.classList.contains('left') && !card.classList.contains('right'));
    centeredCard.querySelector('img').classList.add('focus');
  };

  const playAnimation = () => {
    setPaused(false);
    const cards = Array.from(cardCarouselRef.current.querySelectorAll('.card'));
    rotateCards(cards);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      rotateCards(cards);
    }, 5000);
  };

  const stopAnimation = () => {
    setPaused(true);
    clearInterval(intervalRef.current);
  };

  const toggleAnimation = () => {
    if (paused) {
      playAnimation();
    } else {
      stopAnimation();
    }
  };

  useEffect(() => {
    playAnimation();
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <div
      role="button"
      tabIndex="0"
      ref={cardCarouselRef}
      className={`cardcarousel relative md:h-[600px] h-[440px] md:w-[1200px] w-[380px] mx-auto flex justify-center items-center overflow-hidden ${
        paused ? 'paused' : ''
      }`}
      onClick={toggleAnimation}
    >
      <div
        id="item1"
        className="card left absolute flex flex-col  md:w-[330px] w-[200px] h-[350px] transition-all duration-500 ease-in-out transform"
      >
        <img src={juice} alt="juice" className="bg-[#7936d4] h-[300px] md:w-[330px] w-[200px] p-6" />
        <div className="bg-[#8b5cf6] relative flex flex-col rounded-b-md gap-2 md:w-[330px] w-[200px] md:p-6 md:py-8 p-4 justify-start items-start">
          <button className="bg-white text-purple-500 p-1 rounded-full absolute -top-3 px-[6px] text-[8px] md:text-[10px]">
            Resources
          </button>
          <p className="font-bold md:text-[36px] text-lg md:leading-9 leading-6 text-left text-white">Refreshing Designs</p>
          <p className="text-gray-300 text-sm text-start">
            Quench your thirst with stunning visuals and creative juice.
          </p>
        </div>
      </div>

      <div
        id="item2"
        className="card absolute flex flex-col  md:w-[330px] w-[200px] h-[350px] transition-all duration-500 ease-in-out transform"
      >
        <img src={orange} alt="orange" className="h-[300px] bg-[#61c5f7] p-6 md:w-[330px] w-[200px]" />
        <div className="bg-[#61a5fa] relative flex flex-col rounded-b-md gap-2 md:w-[330px] w-[200px] md:p-6 md:py-8 p-4 justify-start items-start">
          <button className="bg-white text-[#61a5fa] p-1 rounded-full absolute -top-3 px-[6px] text-[8px] md:text-[10px]">
            Lifestyle
          </button>
          <p className="font-bold md:text-[36px] text-lg md:leading-9 leading-6 text-left text-white">Healthier Lifestyle</p>
          <p className="text-gray-300 text-sm text-left">
            Living a healthier lifestyle will help you with productivity and your mind-set.
          </p>
        </div>
      </div>

      <div
        id="item3"
        className="card right absolute flex flex-col md:w-[330px] w-[200px] h-[350px] transition-all duration-500 ease-in-out transform"
      >
        <img src={game} alt="game" className="h-[300px] bg-[#f3b001] p-6 md:w-[330px] w-[200px]" />
        <div className="bg-[#fbbf23] relative flex flex-col gap-2 rounded-b-md md:w-[330px] w-[200px] md:p-6 md:py-8 p-4 justify-start items-start">
          <button className="bg-white text-[#fbbf23] p-1 rounded-full absolute -top-3 px-[6px] text-[8px] md:text-[10px]">
            Entertainment
          </button>
          <p className="font-bold md:text-[36px] text-lg md:leading-9 leading-6 text-left text-white">Gaming Evolution</p>
          <p className="text-gray-300 text-sm text-left">
            Learn about the evolution of gaming and how it started a revolution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
