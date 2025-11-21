"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, Trophy, Zap, Share2, RotateCcw, Play } from 'lucide-react';

export default function GamePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'gameover'>('ready');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const gameStateRef = useRef<'ready' | 'playing' | 'gameover'>('ready');
  const gameDataRef = useRef({
    score: 0,
    speed: 4,
    truck: { x: 100, y: 0, velocityY: 0, jumping: false },
    obstacles: [] as any[],
    impressions: [] as any[],
    buildings: [] as any[],
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('brightpath-highscore');
      if (saved) setHighScore(parseInt(saved));
    }
  }, []);

  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  const startNewGame = useCallback(() => {
    gameDataRef.current = {
      score: 0,
      speed: 4,
      truck: { x: 100, y: 0, velocityY: 0, jumping: false },
      obstacles: [],
      impressions: [],
      buildings: [],
    };
    setScore(0);
    setGameState('playing');
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = Math.min(800, window.innerWidth - 64);
      canvas.height = 500;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const GROUND_Y = canvas.height - 80;
    const TRUCK_WIDTH = 100;
    const TRUCK_HEIGHT = 70;

    // Initialize buildings with static window patterns
    if (gameDataRef.current.buildings.length === 0) {
      for (let i = 0; i < 10; i++) {
        const height = 100 + Math.random() * 100;
        const width = 60 + Math.random() * 30;
        const windowPattern: boolean[][] = [];
        const windowRows = Math.floor(height / 35);
        for (let row = 0; row < windowRows; row++) {
          windowPattern[row] = [];
          for (let col = 0; col < 3; col++) {
            windowPattern[row][col] = Math.random() > 0.4;
          }
        }
        gameDataRef.current.buildings.push({
          x: i * 200,
          height,
          width,
          windowPattern,
        });
      }
    }

    let obstacleTimer = 0;
    let impressionTimer = 0;
    let frameCount = 0;
    let animationId: number;

    // Input handling
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameStateRef.current === 'playing' && !gameDataRef.current.truck.jumping) {
          gameDataRef.current.truck.velocityY = -14;
          gameDataRef.current.truck.jumping = true;
        }
      }
    };

    const handleClick = () => {
      if (gameStateRef.current === 'playing' && !gameDataRef.current.truck.jumping) {
        gameDataRef.current.truck.velocityY = -14;
        gameDataRef.current.truck.jumping = true;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('click', handleClick);

    const drawTruck = () => {
      const truck = gameDataRef.current.truck;
      ctx.save();

      // Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(truck.x + 5, GROUND_Y + 5, TRUCK_WIDTH, 10);

      // Truck chassis
      ctx.fillStyle = '#1A1F27';
      ctx.fillRect(truck.x, truck.y, TRUCK_WIDTH, TRUCK_HEIGHT);

      // LED screen with gradient
      const gradient = ctx.createLinearGradient(
        truck.x + 15,
        truck.y + 10,
        truck.x + TRUCK_WIDTH - 15,
        truck.y + TRUCK_HEIGHT - 25
      );
      gradient.addColorStop(0, '#F7D382');
      gradient.addColorStop(0.5, '#E3B04B');
      gradient.addColorStop(1, '#A8741A');
      ctx.fillStyle = gradient;
      ctx.fillRect(truck.x + 15, truck.y + 10, TRUCK_WIDTH - 30, TRUCK_HEIGHT - 35);

      // LED screen border
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeRect(truck.x + 15, truck.y + 10, TRUCK_WIDTH - 30, TRUCK_HEIGHT - 35);

      // Static text on screen
      ctx.fillStyle = '#000';
      ctx.font = 'bold 8px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('ADVERTISE WITH', truck.x + TRUCK_WIDTH / 2, truck.y + 28);
      ctx.fillText('BRIGHTPATH', truck.x + TRUCK_WIDTH / 2, truck.y + 40);
      ctx.textAlign = 'left';

      // Cab
      ctx.fillStyle = '#2A2F37';
      ctx.fillRect(truck.x, truck.y, 25, 40);

      // Window
      ctx.fillStyle = '#4A5568';
      ctx.fillRect(truck.x + 3, truck.y + 5, 19, 15);

      // Wheels
      const wheel1X = truck.x + 20;
      const wheel2X = truck.x + TRUCK_WIDTH - 20;
      const wheelY = truck.y + TRUCK_HEIGHT;

      [wheel1X, wheel2X].forEach(wheelX => {
        // Tire
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(wheelX, wheelY, 10, 0, Math.PI * 2);
        ctx.fill();

        // Rim
        ctx.fillStyle = '#666';
        ctx.beginPath();
        ctx.arc(wheelX, wheelY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Hub
        ctx.fillStyle = '#888';
        ctx.beginPath();
        ctx.arc(wheelX, wheelY, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    };

    const drawBuildings = () => {
      const buildings = gameDataRef.current.buildings;
      const speed = gameDataRef.current.speed;

      buildings.forEach((building) => {
        if (gameStateRef.current === 'playing') {
          building.x -= speed * 0.3;
          if (building.x + building.width < 0) {
            building.x = canvas.width + Math.random() * 200;
            building.height = 100 + Math.random() * 100;
            building.width = 60 + Math.random() * 30;
            // Generate new window pattern
            const windowPattern: boolean[][] = [];
            const windowRows = Math.floor(building.height / 35);
            for (let row = 0; row < windowRows; row++) {
              windowPattern[row] = [];
              for (let col = 0; col < 3; col++) {
                windowPattern[row][col] = Math.random() > 0.4;
              }
            }
            building.windowPattern = windowPattern;
          }
        }

        // Building silhouette - darker and simpler
        ctx.fillStyle = '#0d0f13';
        ctx.fillRect(
          building.x,
          GROUND_Y - building.height,
          building.width,
          building.height
        );

        // Subtle window glow
        if (building.windowPattern) {
          ctx.fillStyle = 'rgba(227, 176, 75, 0.3)';
          for (let row = 0; row < building.windowPattern.length; row++) {
            for (let col = 0; col < 3; col++) {
              if (building.windowPattern[row][col]) {
                ctx.fillRect(
                  building.x + 8 + col * 18,
                  GROUND_Y - building.height + 10 + row * 35,
                  12,
                  22
                );
              }
            }
          }
        }
      });
    };

    const drawGround = () => {
      // Road
      ctx.fillStyle = '#1A1F27';
      ctx.fillRect(0, GROUND_Y, canvas.width, canvas.height - GROUND_Y);

      // Road edge
      ctx.fillStyle = '#E3B04B';
      ctx.fillRect(0, GROUND_Y, canvas.width, 3);

      // Road lines
      ctx.strokeStyle = '#d18d00';
      ctx.lineWidth = 4;
      ctx.setLineDash([30, 20]);
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y + 40);
      ctx.lineTo(canvas.width, GROUND_Y + 40);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawObstacles = () => {
      if (gameStateRef.current !== 'playing') return;

      const { obstacles, speed } = gameDataRef.current;

      obstacleTimer++;
      // Better spacing between obstacles
      if (obstacleTimer > Math.max(80, 180 - speed * 8)) {
        obstacleTimer = 0;
        const type = Math.random() > 0.5 ? 'cone' : 'barrier';
        // Small obstacles - easy to jump over with lots of clearance
        obstacles.push({
          x: canvas.width,
          y: GROUND_Y - (type === 'cone' ? 35 : 45),
          width: type === 'cone' ? 22 : 45,
          height: type === 'cone' ? 35 : 45,
          type,
        });
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obstacle = obstacles[i];
        obstacle.x -= speed;

        if (obstacle.type === 'cone') {
          // Traffic cone
          ctx.fillStyle = '#ff6b35';
          ctx.beginPath();
          ctx.moveTo(obstacle.x + obstacle.width / 2, obstacle.y);
          ctx.lineTo(obstacle.x, obstacle.y + obstacle.height);
          ctx.lineTo(obstacle.x + obstacle.width, obstacle.y + obstacle.height);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = '#fff';
          ctx.fillRect(obstacle.x + 3, obstacle.y + 18, obstacle.width - 6, 5);
        } else {
          // Barrier
          ctx.fillStyle = '#e63946';
          ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

          ctx.fillStyle = '#fff';
          const stripeHeight = 12;
          for (let j = 0; j < obstacle.height; j += stripeHeight * 2) {
            ctx.fillRect(obstacle.x + 5, obstacle.y + j, obstacle.width - 10, stripeHeight);
          }
        }

        // Collision detection - more forgiving hitbox
        const truck = gameDataRef.current.truck;
        if (
          truck.x + TRUCK_WIDTH - 15 > obstacle.x &&
          truck.x + 15 < obstacle.x + obstacle.width &&
          truck.y + TRUCK_HEIGHT - 5 > obstacle.y &&
          truck.y + 5 < obstacle.y + obstacle.height
        ) {
          setGameState('gameover');
          if (gameDataRef.current.score > highScore) {
            setHighScore(gameDataRef.current.score);
            if (typeof window !== 'undefined') {
              localStorage.setItem('brightpath-highscore', gameDataRef.current.score.toString());
            }
          }
        }

        if (obstacle.x + obstacle.width < 0) {
          obstacles.splice(i, 1);
        }
      }
    };

    const drawImpressions = () => {
      if (gameStateRef.current !== 'playing') return;

      const { impressions, speed, truck } = gameDataRef.current;

      impressionTimer++;
      // Better spacing for collectibles
      if (impressionTimer > 100) {
        impressionTimer = 0;
        // Place stars at easy-to-collect heights
        const heightOptions = [
          GROUND_Y - 35,  // Just above ground - easy running collect
          GROUND_Y - 80,  // Mid-height - small jump
          GROUND_Y - 115, // At jump peak - full jump
        ];
        impressions.push({
          x: canvas.width,
          y: heightOptions[Math.floor(Math.random() * heightOptions.length)],
          size: 20,
          collected: false,
        });
      }

      for (let i = impressions.length - 1; i >= 0; i--) {
        const impression = impressions[i];
        if (impression.collected) {
          impressions.splice(i, 1);
          continue;
        }

        impression.x -= speed;

        // Draw star
        ctx.save();
        ctx.translate(impression.x, impression.y);
        ctx.rotate((frameCount * 0.05) % (Math.PI * 2));

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, impression.size);
        gradient.addColorStop(0, '#F7D382');
        gradient.addColorStop(0.7, '#E3B04B');
        gradient.addColorStop(1, '#A8741A');
        ctx.fillStyle = gradient;

        ctx.beginPath();
        for (let j = 0; j < 5; j++) {
          const angle = (Math.PI * 2 * j) / 5 - Math.PI / 2;
          const x = Math.cos(angle) * impression.size;
          const y = Math.sin(angle) * impression.size;
          ctx.lineTo(x, y);

          const angle2 = (Math.PI * 2 * (j + 0.5)) / 5 - Math.PI / 2;
          const x2 = Math.cos(angle2) * (impression.size * 0.4);
          const y2 = Math.sin(angle2) * (impression.size * 0.4);
          ctx.lineTo(x2, y2);
        }
        ctx.closePath();
        ctx.fill();

        // Subtle glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#E3B04B';
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.restore();

        // Collection detection - generous hitbox
        const distance = Math.sqrt(
          Math.pow(truck.x + TRUCK_WIDTH / 2 - impression.x, 2) +
          Math.pow(truck.y + TRUCK_HEIGHT / 2 - impression.y, 2)
        );

        if (distance < (TRUCK_WIDTH / 2 + impression.size + 10)) {
          impression.collected = true;
          gameDataRef.current.score += 100;
          setScore(gameDataRef.current.score);
        }

        if (impression.x + impression.size < 0) {
          impressions.splice(i, 1);
        }
      }
    };

    const updateTruck = () => {
      if (gameStateRef.current !== 'playing') return;

      const truck = gameDataRef.current.truck;

      // Gravity
      truck.velocityY += 0.8;
      truck.y += truck.velocityY;

      // Ground collision
      if (truck.y + TRUCK_HEIGHT >= GROUND_Y) {
        truck.y = GROUND_Y - TRUCK_HEIGHT;
        truck.velocityY = 0;
        truck.jumping = false;
      }

      // Ceiling
      if (truck.y < 0) {
        truck.y = 0;
        truck.velocityY = 0;
      }
    };

    const drawUI = () => {
      // Score
      ctx.fillStyle = '#E3B04B';
      ctx.font = 'bold 28px Arial';
      ctx.fillText(`Impressions: ${gameDataRef.current.score}`, 20, 45);

      // Speed
      ctx.fillStyle = '#F7D382';
      ctx.font = 'bold 18px Arial';
      ctx.fillText(`Speed: ${gameDataRef.current.speed.toFixed(1)}x`, 20, 75);
    };

    const gameLoop = () => {
      // Clear
      ctx.fillStyle = '#0B0D10';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Background
      drawBuildings();
      drawGround();

      if (gameStateRef.current === 'playing') {
        updateTruck();
        gameDataRef.current.speed += 0.001;
        gameDataRef.current.score += 1;

        if (frameCount % 10 === 0) {
          setScore(gameDataRef.current.score);
        }

        drawImpressions();
        drawObstacles();
      } else {
        // Reset truck position when not playing
        gameDataRef.current.truck.y = GROUND_Y - TRUCK_HEIGHT;
      }

      drawTruck();

      if (gameStateRef.current === 'playing') {
        drawUI();
      }

      frameCount++;
      animationId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, [highScore]);

  const handleRestart = () => {
    startNewGame();
  };

  const handleShare = async () => {
    const text = `I scored ${score} impressions in BrightPath Billboards' LED Truck Runner! Can you beat my score?`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'LED Truck Runner',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text + ' ' + window.location.href);
        alert('Score copied to clipboard!');
      } catch (err) {
        alert('Could not copy to clipboard');
      }
    }
  };

  return (
    <div className="min-h-screen bg-black-hero">
      {/* Header */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gold-base hover:text-gold-highlight transition-colors mb-8">
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gold-base/10 border border-gold-base/30 text-gold-highlight px-6 py-2 rounded-full font-bold text-sm mb-6 backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            INTERACTIVE GAME
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gold-gradient shimmer">LED Truck</span>
            <br />
            <span className="text-text-light">Runner</span>
          </h1>

          <p className="text-lg text-text-mid max-w-2xl mx-auto mb-6">
            Drive the BrightPath billboard truck through the Coachella Valley, collect impressions, and avoid obstacles!
          </p>

          {highScore > 0 && (
            <div className="inline-flex items-center gap-2 text-gold-base">
              <Trophy className="h-5 w-5" />
              <span className="font-bold">High Score: {highScore}</span>
            </div>
          )}
        </div>
      </div>

      {/* Game Canvas */}
      <div className="container mx-auto px-4 pb-12">
        <div className="luxury-card relative">
          <canvas
            ref={canvasRef}
            className="w-full rounded-xl border border-gold-base/20 bg-black-hero cursor-pointer"
            style={{ touchAction: 'none', maxHeight: '500px' }}
          />

          {/* Start Overlay */}
          {gameState === 'ready' && (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <div className="text-center p-8">
                <h2 className="text-4xl font-bold text-gold-gradient mb-6">Ready to Drive?</h2>
                <p className="text-xl text-text-mid mb-8">
                  Press SPACE or CLICK to jump over obstacles and collect golden stars!
                </p>
                <button
                  onClick={startNewGame}
                  className="luxury-button text-xl inline-flex items-center gap-3 px-8 py-4"
                >
                  <Play className="h-6 w-6" />
                  Start Game
                </button>
              </div>
            </div>
          )}

          {/* Game Over Overlay */}
          {gameState === 'gameover' && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <div className="text-center p-8">
                <h2 className="text-4xl font-bold text-gold-gradient mb-4">Game Over!</h2>

                <div className="mb-6">
                  <div className="text-6xl font-bold text-text-light mb-2">{score}</div>
                  <div className="text-lg text-text-mid">Impressions Collected</div>
                </div>

                {score === highScore && score > 0 && (
                  <div className="mb-6 flex items-center justify-center gap-2 text-gold-highlight">
                    <Trophy className="h-6 w-6" />
                    <span className="font-bold">New High Score!</span>
                  </div>
                )}

                <div className="mb-6 text-text-mid">
                  High Score: <span className="text-gold-base font-bold">{highScore}</span>
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                  <button
                    onClick={handleRestart}
                    className="luxury-button inline-flex items-center gap-2"
                  >
                    <RotateCcw className="h-5 w-5" />
                    Play Again
                  </button>
                  <button
                    onClick={handleShare}
                    className="luxury-button bg-black-panel text-gold-base border-2 border-gold-base hover:bg-gold-base/10 inline-flex items-center gap-2"
                  >
                    <Share2 className="h-5 w-5" />
                    Share Score
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="luxury-card text-center">
            <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-black-hero font-bold text-xl">1</span>
            </div>
            <h3 className="font-bold text-text-light mb-2">Jump</h3>
            <p className="text-sm text-text-mid">Press SPACE or CLICK the canvas to jump over obstacles</p>
          </div>

          <div className="luxury-card text-center">
            <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-black-hero font-bold text-xl">2</span>
            </div>
            <h3 className="font-bold text-text-light mb-2">Collect</h3>
            <p className="text-sm text-text-mid">Grab golden stars to earn 100 impressions each</p>
          </div>

          <div className="luxury-card text-center">
            <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-black-hero font-bold text-xl">3</span>
            </div>
            <h3 className="font-bold text-text-light mb-2">Survive</h3>
            <p className="text-sm text-text-mid">Avoid cones and barriers - speed increases over time!</p>
          </div>
        </div>
      </div>

      <div className="gold-divider"></div>

      {/* CTA Section */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-6">
              Like what you see? Let's make your brand <span className="text-gold-gradient">impossible to miss</span>.
            </h2>
            <p className="text-lg text-text-mid mb-8">
              Just like this game, our mobile LED billboards are designed to capture attention and create memorable experiences.
            </p>
            <Link href="/quote" target="_blank" rel="noopener noreferrer" className="luxury-button text-lg inline-block">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
