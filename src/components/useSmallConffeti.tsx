'use client';
import confetti from 'canvas-confetti'
import React, { useRef, useState } from 'react';


export default function useSmallConffeti() {

    const normalConfetti = useRef<HTMLButtonElement>(null);
    const handleNormalConfetti = () => {
        var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });
        let centerX: number = 0
        let centerY: number = 0
        if (normalConfetti.current) {
            const rect = normalConfetti.current!.getBoundingClientRect();
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
            spread: 60,
            // 発射速度 (default: 45)
            startVelocity: 20,
            // 失速具合 デフォルト0.9
            decay: 0.9,
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
            colors: ['#234343',  '#993333'],
            // 紙吹雪の形を指定
            shapes: ['square',  triangle],
            // 紙吹雪のサイズを指定
            scalar: 0.8,
            // z-indexを指定(default:100)
            zIndex: 100
        });
    };
    return {  normalConfetti, handleNormalConfetti }
}