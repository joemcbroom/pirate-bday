import './App.css';
import Lottie from 'lottie-react';
import TreasureChest from './assets/treasure-chest.json';
import PirateShip from './assets/pirate-ship.json';
import { useEffect, useRef, useState } from 'react';
import Invitation from './Invitation';

function App() {
  const treasureChest = useRef(null);
  const pirateShip = useRef(null);

  const [showHint, setShowHint] = useState(false); //
  const [showContent, setShowContent] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // show hint after 5 seconds
      setShowHint(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (showContent) {
      // @ts-expect-error - derp
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      pirateShip.current?.goToAndPlay(30, true);
    }
  }, [showContent]);

  return (
    <>
      <div className='w-screen h-screen max-w-sm mx-auto flex items-center justify-center'>
        <div className='w-1/2 h-48 relative'>
          <div
            className={`text-center transition-opacity absolute inset-0 ${
              showContent ? 'opacity-0' : 'opacity-1'
            }`}
          >
            <Lottie
              animationData={TreasureChest}
              loop={false}
              autoplay={false}
              lottieRef={treasureChest}
              onClick={() => {
                // @ts-expect-error - derp
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                treasureChest.current?.play();

                console.log('clicked');
              }}
              className='pr-10'
              onComplete={() => {
                setShowContent(true);
              }}
            />

            <img
              src='/touch-icon.svg'
              alt='touch icon'
              className={`w-12 h-12 mx-auto animate-bounce transition-opacity ${
                showHint ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
          <div
            className={`text-center transition-all fixed inset-0 pointer-events-none bg-sky-400 h-screen w-screen ${
              showContent ? 'opacity-1 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              background: 'url(/cloud-background.svg) no-repeat center',
            }}
          >
            <Lottie
              animationData={PirateShip}
              loop={false}
              autoplay={false}
              lottieRef={pirateShip}
              className='absolute bottom-16 left-0 z-40'
              onComplete={() => {
                setShowText(true);
              }}
            />
            <span
              className={`transition-all fixed top-0 left-0 h-screen w-screen z-40 text-center text-2xl  ${
                showText ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            >
              <Invitation />
            </span>
            <div className='ocean'>
              <div className='wave z-10'></div>
              <div className='wave z-30'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
