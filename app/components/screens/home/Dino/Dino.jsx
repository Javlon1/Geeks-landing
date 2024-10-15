import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Dino.module.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import cloud from '../../../../../public/img/dino/cloud.png';
import ground from '../../../../../public/img/dino/ground.png';
import cactusImg from '../../../../../public/img/dino/cactus.png';
import dinoStationary from '../../../../../public/img/dino/dino-3.png';
import dinoRun0 from '../../../../../public/img/dino/dino-1.png';
import dinoRun1 from '../../../../../public/img/dino/dino-2.png';

const Dino = () => {
    const [isJumping, setIsJumping] = useState(false);
    const [dinoImage, setDinoImage] = useState(dinoStationary);
    const [runIndex, setRunIndex] = useState(0);
    const [cactusArray, setCactusArray] = useState([]);

    const jump = () => {
        setIsJumping(true);
        setTimeout(() => {
            setIsJumping(false);
        }, 400);
    };

    const generateCactus = () => {
        const randomX = Math.random() * (window.innerWidth - 50);
        return { id: Date.now(), position: window.innerWidth + randomX };
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Space') {
                jump();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        const cactusInterval = setInterval(() => {
            setCactusArray((prev) => {
                if (prev.length < 2) {
                    return [...prev, generateCactus()];
                }
                return prev;
            });
        }, 1000);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            clearInterval(cactusInterval);
        };
    }, []);

    useEffect(() => {
        const moveCacti = setInterval(() => {
            setCactusArray((prev) =>
                prev
                    .map((cactus) => ({ ...cactus, position: cactus.position - 5 }))
                    .filter((cactus) => cactus.position > -200)
            );
        }, 100);

        return () => clearInterval(moveCacti);
    }, []);

    useEffect(() => {
        setDinoImage(isJumping ? dinoStationary : runIndex === 0 ? dinoRun0 : dinoRun1);

        const runInterval = !isJumping && setInterval(() => {
            setRunIndex((prevIndex) => (prevIndex + 1) % 2);
        }, 100);

        return () => runInterval && clearInterval(runInterval);
    }, [isJumping, runIndex]);


    const code = `JSX
    const [isJumping, setIsJumping] = useState(false);
    const [dinoImage, setDinoImage] = useState(dinoStationary);
    const [runIndex, setRunIndex] = useState(0);
    const [cactusArray, setCactusArray] = useState([]);

    const jump = () => {
        setIsJumping(true);
        setTimeout(() => {
            setIsJumping(false);
        }, 400);
    };

    const generateCactus = () => {
        const randomX = Math.random() * (window.innerWidth - 50); 
        return { id: Date.now(), position: window.innerWidth + randomX }; 
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Space') {
                jump();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        const cactusInterval = setInterval(() => {
            setCactusArray((prev) => [...prev, generateCactus()]);
        }, 3000);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            clearInterval(cactusInterval);
        };
    }, []);

    useEffect(() => {
        const moveCacti = setInterval(() => {
            setCactusArray((prev) =>
                prev
                    .map((cactus) => ({ ...cactus, position: cactus.position - 5 }))
                    .filter((cactus) => cactus.position > -200)
            );
        }, 100);

        return () => clearInterval(moveCacti);
    }, []);

    useEffect(() => {
        setDinoImage(isJumping ? dinoStationary : runIndex === 0 ? dinoRun0 : dinoRun1);

        const runInterval = !isJumping && setInterval(() => {
            setRunIndex((prevIndex) => (prevIndex + 1) % 2);
        }, 100);

        return () => runInterval && clearInterval(runInterval);
    }, [isJumping, runIndex]);

SCSS
    @import '../../../../assets/variables';

    .dinoGame {
        margin-top: 2rem;

        &__content {
            display: flex;
            justify-content: space-between;
            gap: 1rem;

            &__game {
                width: 49%;
                position: relative;
                background-color: $light-black;
                border-radius: 1rem;
                overflow: hidden;
                height: 350px;

                &__elemets {
                    &__dino {
                        position: absolute;
                        bottom: 0;
                        left: 50px;
                        width: 45px;
                        height: auto;
                        transition: bottom 0.2s ease;
                        z-index: 2;
                    }

                    &__obstacle {
                        position: absolute;
                        bottom: .3rem;
                        width: 25px;
                        height: auto;
                        animation: moveObstacle 5s linear infinite;
                        z-index: 1;
                    }

                    &__marquee {
                        overflow: hidden;
                        white-space: nowrap;
                        width: 100%;
                        position: absolute;
                        bottom: 0;

                        .list {
                            position: relative;
                            display: inline-block;
                            animation: marquee 10s linear infinite;
                        }
                    }
                }


                &__btn {
                    display: none;
                }
            }

            &__code {
                width: 49%;
                height: 350px;
                overflow-y: scroll;

                &::-webkit-scrollbar {
                    width: .2rem;
                    height: .2rem;
                }
            }
        }
    }

    .top {
        top: 1rem;
        bottom: auto;
    }

    .jumping {
        animation: jump 0.5s ease forwards;
    }

    @keyframes jump {
        0% {
            bottom: 0;
        }

        50% {
            bottom: 100px;
        }

        100% {
            bottom: 0;
        }
    }

    @keyframes moveObstacle {
        0% {
            right: -50px;
        }

        100% {
            right: 100vw;
        }
    }

    @keyframes marquee {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-50%);
        }
    }
  `;

    return (
        <div className={styles.dinoGame}>
            <MyContainer>
                <div className={styles.dinoGame__content}>
                    <div className={styles.dinoGame__content__game}>
                        <div className={styles.dinoGame__content__game__elemets}>
                            <Image
                                src={dinoImage}
                                alt='dino'
                                className={`${styles.dinoGame__content__game__elemets__dino} ${isJumping ? styles.jumping : ''}`}
                            />

                            {cactusArray.map((cactus) => (
                                <Image
                                    key={cactus.id}
                                    src={cactusImg}
                                    alt='cactus'
                                    className={styles.dinoGame__content__game__elemets__obstacle}
                                    style={{ right: cactus.position }}
                                />
                            ))}

                            <div className={`${styles.dinoGame__content__game__elemets__marquee} ${styles.top}`}>
                                <div className={styles.list}>
                                    <Image src={cloud} alt='cloud' className={styles.bottom} />
                                    <Image src={cloud} alt='cloud' className={styles.bottom} />
                                </div>
                            </div>
                            <div className={styles.dinoGame__content__game__elemets__marquee}>
                                <div className={styles.list}>
                                    <Image src={ground} alt='ground' className={styles.bottom} />
                                    <Image src={ground} alt='ground' className={styles.bottom} />
                                </div>
                            </div>
                        </div>
                        <button className={styles.dinoGame__content__game__btn} onClick={() => jump()}>sakrash</button>
                    </div>
                    <div className={styles.dinoGame__content__code}>
                        <div className={styles.dinoGame__content__code__content}>
                            <SyntaxHighlighter language="jsx" style={darcula}>
                                {code}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Dino;
