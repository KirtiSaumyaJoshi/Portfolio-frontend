"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [path, setPath] = useState("");

  useEffect(() => {
    const updatePath = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const road1Y = 0;
      const road3Y = height * 0.2;
      const road5Y = height * 0.7;
      const road7Y = height;

      const road2X = width * 0.65;
      const road4X = width * 0.5;
      const road6X = width * 0.35;

      const newPath = `M 0 ${road1Y} L ${road2X} ${road1Y} L ${road2X} ${road3Y} L ${road4X} ${road3Y} L ${road4X} ${road5Y} L ${road6X} ${road5Y} L ${road6X} ${road7Y} L ${width} ${road7Y}`;
      setPath(newPath);
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, []);

  // Ghosts: color and animation delay (in seconds)
  const ghosts = [
    { color: "red", delay: 0.5 },      // Blinky
    { color: "pink", delay: 1 },     // Pinky
    { color: "cyan", delay: 1.5 },    // Inky
    { color: "orange", delay: 2 },  // Clyde
  ];

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {path && (
        <>
          <div
            className="absolute pacman"
            style={{
              offsetPath: `path('${path}')`,
              offsetRotate: "auto",
              animation: "moveAlongRoad 20s linear infinite",
              transform: "scale(1.3)", 
              transformOrigin: "top center", 
            }}

          >
            <div className="offset-pacman"></div>
          </div>

          {ghosts.map((ghost, idx) => (
            <div
              key={idx}
              className="absolute top-5 ghost"
              style={{
                offsetPath: `path('${path}')`,
                offsetRotate: "0deg",
                animation: `moveAlongRoad 20s linear infinite, colourSwap 0.5s linear infinite`,
                animationDelay: `${ghost.delay}s`,
              }}
            >
              <div className="ghost-body" 
              style={{
                background: ghost.color,
                transform: "scale(0.85)",
                transformOrigin: "top center", 
              }}>
                <div className="ghost-eyes">
                  <div className="ghost-eye left"></div>
                  <div className="ghost-eye right"></div>
                </div>
                <div className="ghost-pupils">
                  <div className="ghost-pupil left"></div>
                  <div className="ghost-pupil right"></div>
                </div>
                <div className="ghost-skirt">
                  <div className="skirt-point"></div>
                  <div className="skirt-point"></div>
                  <div className="skirt-point"></div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <style jsx>{`
        @keyframes moveAlongRoad {
          from {
            offset-distance: 0%;
          }
          to {
            offset-distance: 100%;
          }
        }

        .offset-pacman {
          position: absolute;
          width: 0;
          height: 0;
          border: solid 16px;
          border-right-color: transparent;
          border-bottom-color: transparent;
          border-radius: 50%;
          transform: translate(-16px, -16px);
        }

        .offset-pacman::before,
        .offset-pacman::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border: solid 16px yellow;
          border-radius: 50%;
          left: -16px;
          top: -16px;
          border-right-color: transparent;
        }

        .offset-pacman::before {
          border-bottom-color: transparent;
          animation: pacTop 0.45s infinite linear;
        }

        .offset-pacman::after {
          border-top-color: transparent;
          animation: pacBottom 0.45s infinite linear;
        }

        @keyframes pacTop {
          50% {
            transform: rotate(44deg);
          }
        }

        @keyframes pacBottom {
          50% {
            transform: rotate(-44deg);
          }
        }

        /* Ghost Styles */
        .ghost-body {
          position: relative;
          width: 50px;
          height: 60px;
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
          margin-top: -30px;
          clip-path: polygon(
            0 0, 100% 0, 100% 80%,
            0 80%, 0 100%, 25% 80%,
            50% 100%, 25% 0%, 50% 100%,
            70% 80%, 60% 100%, 70% 80%,
            100% 100%, 100% 80%,
            0 80%
          );
        }

        .ghost-eyes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .ghost-eye {
          position: absolute;
          background: white;
          height: 20px;
          width: 16px;
          border-radius: 100%;
          top: 12px;
        }

        .ghost-eye.left { left: 6px; }
        .ghost-eye.right { left: 28px; }

        .ghost-pupils .ghost-pupil {
          position: absolute;
          background: blue;
          height: 8px;
          width: 8px;
          border-radius: 100%;
          top: 20px;
        }

        .ghost-pupil.left { left: 10px; animation: peeperLeft 0.7s linear infinite; }
        .ghost-pupil.right { left: 32px; animation: peeperRight 0.7s linear infinite; }

        @keyframes peeperLeft { 0%,100% { left: 10px; } 50% { left: 14px; } }
        @keyframes peeperRight { 0%,100% { left: 32px; } 50% { left: 36px; } }
      `}</style>

      {/* Roads */}
      <div className="w-full border-4 border-dashed border-gray-400"/>
      <div className="w-full h-[20%] flex justify-between items-center">
        <div className="w-[65%] h-full bg-green-100 flex items-center justify-center text-4xl font-bold">1</div>
        <div className="h-full border-4 border-dashed border-gray-400"/>
        <div className="w-[35%] h-full bg-blue-100 flex items-center justify-center text-4xl font-bold">2</div>
      </div>
      <div className="w-full border-4 border-dashed border-gray-400"/>
      <div className="w-full h-[50%] flex justify-between items-center">
        <div className="w-[50%] h-full bg-purple-100 flex items-center justify-center text-4xl font-bold">3</div>
        <div className="h-full border-4 border-dashed border-gray-400"/>
        <div className="w-[50%] h-full bg-pink-100 flex items-center justify-center text-4xl font-bold">4</div>
      </div>
      <div className="w-full border-4 border-dashed border-gray-400"/>
      <div className="w-full h-[30%] flex justify-between items-center">
        <div className="w-[35%] h-full bg-orange-100 flex items-center justify-center text-4xl font-bold">5</div>
        <div className="h-full border-4 border-dashed border-gray-400"/>
        <div className="w-[65%] h-full bg-yellow-100 flex items-center justify-center text-4xl font-bold">6</div>
      </div>
      <div className="w-full border-4 border-dashed border-gray-400"/>
    </div>
  );
}
