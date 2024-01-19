'use client';
import confetti from 'canvas-confetti'
import React, { useRef, useState } from 'react';


export default function useEventConfetti() {

    const christmasConfetti = useRef<HTMLButtonElement>(null);
    const handleChristmasConfetti = () => {
        var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });
        let centerX: number = 0
        let centerY: number = 0
        if (christmasConfetti.current) {
            const rect = christmasConfetti.current!.getBoundingClientRect();
            centerX = rect.x + rect.width / 2;
            centerY = rect.y + rect.height / 2;
            console.log('Center X:', centerX, 'Center Y:', centerY);
        }
        confetti({
            // パーティクルの数（デフォルト50)
            particleCount: 100,
            // 発射角度(デフォルト90度)
            angle: 90,
            // 発射範囲(デフォルト45度)
            spread: 90,
            // 失速具合 デフォルト0.9
            // decay: 0.8,
            //重力 (0-1)
            // gravity: 0.2,
            // default:0 数値を上げると横に流れる
            // drift: 0,
            // default:false
            // confettiが動く長さ (default: 200)
            // ticks: 200,
            origin: {
                x: centerX / window.innerWidth,
                y: centerY / window.innerHeight
            },
            // 紙吹雪の色を指定。配列でいくつも指定できる
            colors: ['#165B33', '#BB2528', '#146B3A', '#EA4630'],
            // 紙吹雪の形を指定
            // shapes: ['square', triangle],
            // 紙吹雪のサイズを指定
            // scalar: 0.8,
            // z-indexを指定(default:100)
            zIndex: 100
        });
    };
    const hallowinConfetti = useRef<HTMLButtonElement>(null);
    const handleHallowinConfetti = () => {
        var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });
        let centerX: number = 0
        let centerY: number = 0
        if (hallowinConfetti.current) {
            const rect = hallowinConfetti.current!.getBoundingClientRect();
            centerX = rect.x + rect.width / 2;
            centerY = rect.y + rect.height / 2;
            console.log('Center X:', centerX, 'Center Y:', centerY);
        }
        confetti({
            // パーティクルの数（デフォルト50)
            particleCount: 100,
            // 発射範囲(デフォルト45度)
            spread: 90,
            // confettiが動く長さ (default: 200)
            ticks: 150,
            // 紙吹雪の色を指定。配列でいくつも指定できる
            colors: ['#f75f1c', '#ff9a00', '#000000', '#881ee4'],
            // 紙吹雪の形を指定
            // shapes: ['square', triangle],
            // 紙吹雪のサイズを指定
            // scalar: 0.8,
            // z-indexを指定(default:100)
            origin: {
                x: centerX / window.innerWidth,
                y: centerY / window.innerHeight
            },
            zIndex: 100
        });
    };
    const newYearConfetti = useRef<HTMLButtonElement>(null);
    const handleNewYearConfetti = () => {
        var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });
        let centerX: number = 0
        let centerY: number = 0
        if (christmasConfetti.current) {
            const rect = christmasConfetti.current!.getBoundingClientRect();
            centerX = rect.x + rect.width / 2;
            centerY = rect.y + rect.height / 2;
            console.log('Center X:', centerX, 'Center Y:', centerY);
        }
        confetti({
            // パーティクルの数（デフォルト50)
            particleCount: 100,
            // 発射角度(デフォルト90度)
            angle: 90,
            // 発射範囲(デフォルト45度)
            spread: 130,
            // 失速具合 デフォルト0.9
            decay: 0.8,
            //重力 (0-1)
            gravity: 0.2,
            // default:0 数値を上げると横に流れる
            drift: 0,
            // default:false
            // confettiが動く長さ (default: 200)
            ticks: 100,
            origin: {
                x: centerX / window.innerWidth,
                y: centerY / window.innerHeight
            },
            // 紙吹雪の色を指定。配列でいくつも指定できる
            // colors: ['#234343', '#993333'],
            // 紙吹雪の形を指定
            // shapes: ['square', triangle],
            // 紙吹雪のサイズを指定
            // scalar: 0.8,
            // z-indexを指定(default:100)
            zIndex: 100
        });
    };

    return {
        christmasConfetti, handleChristmasConfetti,
        hallowinConfetti, handleHallowinConfetti,
        newYearConfetti, handleNewYearConfetti,
    }
}