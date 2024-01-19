'use client';
import confetti from 'canvas-confetti'
import React, { useRef, useState } from 'react';
import { getCentralCoordinates } from './common';



export default function useTpoConfetti() {

    const batchErrorConfetti = useRef<HTMLButtonElement>(null);
    const handleBatchErrorConfetti = () => {
        // 中心座標を取得
        const { centerX, centerY } = getCentralCoordinates(batchErrorConfetti)
        function shoot() {
            confetti({
                // パーティクルの数（デフォルト50)
                particleCount: 200,
                // 発射角度(デフォルト90度)
                angle: 90,
                // 発射範囲(デフォルト45度)
                spread: 360,
                // 失速具合 デフォルト0.9
                decay: 0.9,
                //重力 (0-1)
                gravity: 0.0,
                // default:0 数値を上げると横に流れる
                // drift: 0,
                // default:false
                // confettiが動く長さ (default: 200)
                ticks: 200,
                origin: {
                    x: centerX / window.innerWidth,
                    y: centerY / window.innerHeight
                },
                // 紙吹雪の色を指定。配列でいくつも指定できる
                colors: ['#a70000', '#ff0000', '#ff5252', '#ffbaba'],
                // 紙吹雪の形を指定
                //shapes: ['square', triangle],
                // 紙吹雪のサイズを指定
                scalar: 0.6,
                // z-indexを指定(default:100)
                zIndex: 100
            });
        }
        shoot();
        setTimeout(shoot, 200);
    };

    const monthlyTaskCompletedConfetti = useRef<HTMLButtonElement>(null);
    const handleMonthlyTaskCompletedConfetti = () => {
        var scalar = 2;
        var star1 = confetti.shapeFromText({ text: '⭐️', scalar });
        var star2 = confetti.shapeFromText({ text: '✨', scalar });
        // 中心座標を取得
        const { centerX, centerY } = getCentralCoordinates(monthlyTaskCompletedConfetti)
        function shoot() {
            confetti({
                // パーティクルの数（デフォルト50)
                particleCount: 200,
                // 発射角度(デフォルト90度)
                angle: 90,
                // 発射範囲(デフォルト45度)
                spread: 360,
                // 失速具合 デフォルト0.9
                decay: 0.85,
                //重力 (0-1)
                gravity: 0.1,
                // default:0 数値を上げると横に流れる
                // drift: 0,
                // default:false
                // confettiが動く長さ (default: 200)
                ticks: 200,
                origin: {
                    x: centerX / window.innerWidth,
                    y: centerY / window.innerHeight
                },
                // 紙吹雪の色を指定。配列でいくつも指定できる
                colors: ['#a70000', '#ff0000', '#ff5252', '#ffbaba'],
                // 紙吹雪の形を指定
                shapes: [star1, star2],
                // 紙吹雪のサイズを指定
                scalar: scalar,
                // z-indexを指定(default:100)
                zIndex: 100
            });
        }
        shoot();
        // setTimeout(shoot, 200);
    };

    const yearlyTaskCompletedConfetti = useRef<HTMLButtonElement>(null);
    const handleYearlyTaskCompletedConfetti = () => {
        var scalar = 2;
        var star1 = confetti.shapeFromText({ text: '⭐️', scalar });
        var star2 = confetti.shapeFromText({ text: '✨', scalar });
        // 中心座標を取得
        const { centerX, centerY } = getCentralCoordinates(yearlyTaskCompletedConfetti)
        function shoot() {
            confetti({
                // パーティクルの数（デフォルト50)
                particleCount: 50,
                // 発射角度(デフォルト90度)
                angle: 90,
                // 発射範囲(デフォルト45度)
                spread: 90,
                // 失速具合 デフォルト0.9
                decay: 0.85,
                //重力 (0-1)
                gravity: 0.5,
                // default:0 数値を上げると横に流れる
                // drift: 0,
                // default:false
                // confettiが動く長さ (default: 200)
                ticks: 200,
                origin: {
                    x: centerX / window.innerWidth,
                    y: centerY / window.innerHeight
                },
                // 紙吹雪の色を指定。配列でいくつも指定できる
                colors: ['#b78700', '#eeb600', '#fff71', '#f8da45'],
                // 紙吹雪の形を指定
                // shapes: [star1, star2],
                // 紙吹雪のサイズを指定
                //scalar: scalar,
                // z-indexを指定(default:100)
                zIndex: 100
            });
        }
        shoot();
        setTimeout(shoot, 900);
        setTimeout(shoot, 1800);
    };

    return {
        batchErrorConfetti, handleBatchErrorConfetti,
        monthlyTaskCompletedConfetti, handleMonthlyTaskCompletedConfetti,
        yearlyTaskCompletedConfetti, handleYearlyTaskCompletedConfetti

    }
}