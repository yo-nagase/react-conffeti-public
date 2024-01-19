'use client';
import confetti from 'canvas-confetti'
import React, { useRef, useState } from 'react';
import { getCentralCoordinates } from './common';


export default function useSmallConffeti() {
    const normalConfetti = useRef<HTMLButtonElement>(null);
    const handleNormalConfetti = () => {
        // 中心座標を取得
        const { centerX, centerY } = getCentralCoordinates(normalConfetti)
        confetti({
            startVelocity: 30,
            origin: {
                x: centerX / window.innerWidth,
                y: centerY / window.innerHeight
            },
        });
    };
    const weakConfetti = useRef<HTMLButtonElement>(null);
    const handleWeakConfetti = () => {
        // 中心座標を取得
        const { centerX, centerY } = getCentralCoordinates(weakConfetti)
        confetti({
            // 発射速度 (default: 45)
            startVelocity: 15,
            // 発射範囲(デフォルト45度)
            spread: 70,
            ticks: 50,
            origin: {
                x: centerX / window.innerWidth,
                y: centerY / window.innerHeight
            },

        });
    };

    const allDirectionConfetti = useRef<HTMLButtonElement>(null);
    const handleAllDirectionConfetti = () => {
        // 中心座標を取得
        const { centerX, centerY } = getCentralCoordinates(allDirectionConfetti)
        confetti({
            // パーティクルの数（デフォルト50)
            particleCount: 100,
            // 発射角度(デフォルト90度)
            angle: 90,
            // 発射範囲(デフォルト45度)
            spread: 360,
            // 発射速度 (default: 45)
            startVelocity: 20,
            // 失速具合 デフォルト0.9
            decay: 0.8,
            //重力 (0-1)
            gravity: 0.2,
            // default:0 数値を上げると横に流れる
            drift: 0,
            // confettiが動く長さ (default: 200)
            ticks: 100,
            origin: {
                x: centerX / window.innerWidth,
                y: centerY / window.innerHeight
            },
            // z-indexを指定(default:100)
            zIndex: 100
        });
    };

    const slowConfetti = useRef<HTMLButtonElement>(null);
    const handleSlowConfetti = () => {
        // 中心座標を取得
        const { centerX, centerY } = getCentralCoordinates(slowConfetti)
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
            // z-indexを指定(default:100)
            zIndex: 100
        });
    };
    const coloredConfetti = useRef<HTMLButtonElement>(null);
    const handleColoredConfetti = () => {
        // 中心座標を取得
        const { centerX, centerY } = getCentralCoordinates(coloredConfetti)
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
            // confettiが動く長さ (default: 200)
            ticks: 100,
            origin: {
                x: centerX / window.innerWidth,
                y: centerY / window.innerHeight
            },
            // 紙吹雪の色を指定。配列でいくつも指定できる
            colors: ['#ffffff', '#e74c3c'],
            // 紙吹雪の形を指定
            // shapes: ['square', triangle],
            // 紙吹雪のサイズを指定
            // scalar: 0.8,
            // z-indexを指定(default:100)
            zIndex: 100
        });
    };
    const flashyConfetti = useRef<HTMLButtonElement>(null);
    const handleFlashyConfetti = () => {
        // 中心座標を取得
        const { centerX, centerY } = getCentralCoordinates(flashyConfetti)
        confetti({
            // パーティクルの数（デフォルト50)
            particleCount: 230,
            // 発射範囲(デフォルト45度)
            spread: 130,
            // default:0 数値を上げると横に流れる
            drift: 0,
            // confettiが動く長さ (default: 200)
            ticks: 100,
            origin: {
                x: centerX / window.innerWidth,
                y: centerY / window.innerHeight
            },
            // z-indexを指定(default:100)
            zIndex: 100
        });
    };
    return {
        normalConfetti, handleNormalConfetti,
        allDirectionConfetti, handleAllDirectionConfetti,
        weakConfetti, handleWeakConfetti,
        slowConfetti, handleSlowConfetti,
        coloredConfetti, handleColoredConfetti,
        flashyConfetti, handleFlashyConfetti
    }
}