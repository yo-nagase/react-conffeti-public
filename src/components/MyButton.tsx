'use client';

import confetti from 'canvas-confetti'

// クライアントコンポーネントを作成
export const MyButton = () => {
    const handleClick = () => {
       console.log("xxxx")
      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: Math.random() - 0.2
        }
      });
    };
  
    return (
      <button onClick={handleClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Click me!
      </button>
    );
  };

  