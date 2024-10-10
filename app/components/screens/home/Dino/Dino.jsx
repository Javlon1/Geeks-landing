import Link from 'next/link';
import Image from 'next/image';
import styles from './Dino.module.scss';
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import { useContext, useEffect, useState } from 'react';
import cloud from '../../../../../public/img/dino/cloud.jpg';
import ground from '../../../../../public/img/dino/ground.png';
import cactus from '../../../../../public/img/dino/cactus.png';
import dinoStationary from '../../../../../public/img/dino/dino-stationary.png';
import dinoLose from '../../../../../public/img/dino/dino-lose.png';
import dinoRun0 from '../../../../../public/img/dino/dino-run-0.png';
import dinoRun1 from '../../../../../public/img/dino/dino-run-1.png';

const Dino = () => {
    const { lan } = useContext(Context);
    const [isJumping, setIsJumping] = useState(false);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [dinoImage, setDinoImage] = useState(dinoStationary);
    const [runIndex, setRunIndex] = useState(0);
    const [cactusPosition, setCactusPosition] = useState(1000); // Начальная позиция кактуса
    const [isGameActive, setIsGameActive] = useState(false); // Состояние игры

    const jump = () => {
        if (!isJumping && isGameActive && !gameOver) {
            setIsJumping(true);
            setTimeout(() => {
                setIsJumping(false);
            }, 400);
        }
    };

    const startGame = () => {
        setIsGameActive(true);
        setGameOver(false);
        setScore(0);
        setCactusPosition(1000); // Сброс позиции кактуса
    };

    const stopGame = () => {
        setIsGameActive(false);
        setGameOver(true);
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Space') {
                jump();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        const interval = setInterval(() => {
            if (isGameActive && !gameOver) {
                setScore((prev) => prev + 1);
                setCactusPosition((prev) => prev - 10);
            }
        }, 30);

        const checkCollision = () => {
            const dinoElement = document.querySelector(`.${styles.dino}`);
            const cactusElement = document.querySelector(`.${styles.obstacle}`);

            if (dinoElement && cactusElement) {
                const dinoRect = dinoElement.getBoundingClientRect();
                const cactusRect = cactusElement.getBoundingClientRect();

                if (
                    dinoRect.left < cactusRect.right &&
                    dinoRect.right > cactusRect.left &&
                    dinoRect.bottom > cactusRect.top &&
                    !isJumping
                ) {
                    setGameOver(true);
                }
            }
        };

        const collisionInterval = setInterval(checkCollision, 100);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            clearInterval(interval);
            clearInterval(collisionInterval);
        };
    }, [isJumping, gameOver, isGameActive]);

    useEffect(() => {
        if (gameOver) {
            setDinoImage(dinoLose);
        } else if (isJumping) {
            setDinoImage(dinoStationary);
        } else {
            const runInterval = setInterval(() => {
                setRunIndex((prevIndex) => (prevIndex + 1) % 2);
            }, 100);
            return () => clearInterval(runInterval);
        }
    }, [isJumping, gameOver]);

    useEffect(() => {
        if (!gameOver) {
            setDinoImage(runIndex === 0 ? dinoRun0 : dinoRun1);
        }
    }, [runIndex, gameOver]);

    return (
        <section className={styles.dinoGame}>
            <MyContainer>
                <div className={styles.container}>
                    <div className={styles.scoreBoard}>Score: {score}</div>
                    <Image
                        src={dinoImage}
                        alt='dino'
                        className={`${styles.dino} ${isJumping ? styles.jumping : ''}`}
                    />
                    <Image
                        src={cactus}
                        alt='cactus'
                        className={styles.obstacle}
                        style={{ left: `${cactusPosition}px` }} // Устанавливаем позицию кактуса
                    />

                    <div className={styles.marqueeContainer}>
                        <div className={`${styles.marquee} ${!isGameActive || gameOver ? styles.stopMarquee : ''}`}>
                            <Image
                                src={ground}
                                alt='ground'
                                className={styles.bottom}
                            />
                            <Image
                                src={ground}
                                alt='ground'
                                className={styles.bottom}
                            />
                        </div>
                    </div>
                    <div className={styles.marqueeContainerTop}>
                        <div className={`${styles.marquee} ${!isGameActive || gameOver ? styles.stopMarquee : ''}`}>
                            <Image
                                src={cloud}
                                alt='cloud'
                                className={styles.bottom}
                            />
                            <Image
                                src={cloud}
                                alt='cloud'
                                className={styles.bottom}
                            />
                        </div>
                    </div>
                    {
                        !isGameActive ? <button onClick={isGameActive ? stopGame : startGame} className={styles.controlButton}>
                            Start Game
                        </button> : null
                    }
                </div>
            </MyContainer>
        </section>
    );
};

export default Dino;
