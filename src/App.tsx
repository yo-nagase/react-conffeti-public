import { FC } from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";

import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import confetti from 'canvas-confetti'
import { useRef, useState } from 'react';
import useSmallConffeti from "./components/useSmallConffeti";

import './style.css';
import useEventConfetti from './components/useEventConfetti';
import useTpoConfetti from './components/useTpoConfetti';

export const App: FC<{ name: string }> = ({ name }) => {

  const { handleNormalConfetti, normalConfetti,
    handleAllDirectionConfetti, allDirectionConfetti,
    handleWeakConfetti, weakConfetti,
    handleSlowConfetti, slowConfetti,
    handleColoredConfetti, coloredConfetti,
    handleFlashyConfetti, flashyConfetti
  } = useSmallConffeti()

  const {
    handleChristmasConfetti, christmasConfetti,
    handleHallowinConfetti, hallowinConfetti,
    handleNewYearConfetti, newYearConfetti
  } = useEventConfetti()

  const {
    handleBatchErrorConfetti, batchErrorConfetti,
    handleMonthlyTaskCompletedConfetti, monthlyTaskCompletedConfetti,
    handleYearlyTaskCompletedConfetti, yearlyTaskCompletedConfetti
  } = useTpoConfetti()

  const randomConfetti = () => {
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
  /**
   * パイナップル
   */
  const handleButton1 = () => {
    var scalar = 3;
    var pineapple = confetti.shapeFromText({ text: '🍍', scalar });
    confetti({
      particleCount: 100,
      startVelocity: 30,
      scalar: scalar,
      shapes: [pineapple, 'circle'],
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
      }
    });

  };
  /**
   * 座標を指定
   */
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  const handleButton2 = () => {
    let centerX: number = 0
    let centerY: number = 0
    if (buttonRef2.current) {
      const rect = buttonRef2.current!.getBoundingClientRect();
      centerX = rect.x + rect.width / 2;
      centerY = rect.y + rect.height / 2;
      console.log('Center X:', centerX, 'Center Y:', centerY);
    }
    // console.log("横幅:", windowWidth, " ", window.innerWidth)
    // console.log("エックス：", centerX, " ", Math.random())
    // console.log("ワイ", centerY)
    confetti({
      particleCount: 100,
      startVelocity: 30,
      //scalar: scalar,
      spread: 180,
      origin: {
        x: centerX / window.innerWidth,
        y: centerY / window.innerHeight
      }
    });
  };
  const buttonRef3 = useRef<HTMLButtonElement>(null);
  const handleButton3 = () => {
    var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });

    let centerX: number = 0
    let centerY: number = 0
    if (buttonRef3.current) {
      const rect = buttonRef3.current!.getBoundingClientRect();
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
      colors: ['#234343', '#ffffff', '#990000'],
      // 紙吹雪の形を指定
      shapes: ['square', 'circle', triangle],
      // 紙吹雪のサイズを指定
      scalar: 0.8,
      // z-indexを指定(default:100)
      zIndex: 100
    });
  };

  return (
    <main >
      <Stack
        //direction="row"
        spacing={5}
        sx={{ paddingBottom: "80px", paddingTop: "80px" }}
        justifyContent="center" // ボタンを水平方向に真ん中に寄せます
        alignItems="center" // ボタンを垂直方向に真ん中に寄せます
      >
        <h1>🎉紙吹雪サンプル🎉</h1>
        <Stack
          //direction="row"
          spacing={3}
          justifyContent="center" // ボタンを水平方向に真ん中に寄せます
          alignItems="left" // ボタンを垂直方向に真ん中に寄せます
        >
          <Box sx={{ width: "800px", paddingTop: '150px' }}>
            <Typography sx={{ fontSize: "23px", fontWeight: "700" }}>
              ボタンの中央を起点とした紙吹雪
            </Typography>
          </Box>
          <Item>
            <Typography sx={{ paddingBottom: "5px" }}>
              小さめの紙吹雪
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={handleNormalConfetti} ref={normalConfetti} >
                ノーマルなパーン
              </Button>
              <Button variant="outlined" onClick={handleWeakConfetti} ref={weakConfetti} >
                控えめなパーン
              </Button>
              <Button variant="outlined" onClick={handleFlashyConfetti} ref={flashyConfetti} >
                ド派手なパーン
              </Button>
              <Button variant="outlined" onClick={handleAllDirectionConfetti} ref={allDirectionConfetti} >
                全方向に発射
              </Button>
              <Button variant="outlined" onClick={handleSlowConfetti} ref={slowConfetti} >
                落下速度を調整
              </Button>
              {/* <Button variant="outlined" onClick={handleColoredConfetti} ref={coloredConfetti} >
                赤、白、黒
              </Button> */}
            </Stack>
          </Item>

          <Item>
            <Typography sx={{ padding: "5px" }}>
              イベントに合わせた紙吹雪
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={handleChristmasConfetti} ref={christmasConfetti} >
                クリスマス
              </Button>
              <Button variant="outlined" onClick={handleHallowinConfetti} ref={hallowinConfetti} >
                ハロウィン
              </Button>
            </Stack>
          </Item>

          <Item>
            <Typography sx={{ paddingBottom: "5px" }}>
              TPOにあわせた紙吹雪
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={handleBatchErrorConfetti} ref={batchErrorConfetti} >
                バッチが異常終了
              </Button>
              <Button variant="outlined" onClick={handleMonthlyTaskCompletedConfetti} ref={monthlyTaskCompletedConfetti} >
                会計ツールで<br />月次作業が完了
              </Button>
              <Button variant="outlined" onClick={handleYearlyTaskCompletedConfetti} ref={yearlyTaskCompletedConfetti} >
                会計ツールで<br />年次作業が完了
              </Button>
            </Stack>
          </Item>
        </Stack>

        <Stack
          spacing={3}
          justifyContent="center" // ボタンを水平方向に真ん中に寄せます
          alignItems="left" // ボタンを垂直方向に真ん中に寄せます
        >
          <Box sx={{ width: "800px", padding: '0px' }}>
            <Typography sx={{ fontSize: "23px", fontWeight: "700" }}>
              画面上の様々な場所を起点とした紙吹雪
            </Typography>
          </Box>


          <Item>
            <Typography sx={{ padding: "5px" }}>
              工事中
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" >
                工事中1
              </Button>
              <Button variant="outlined"  >
                工事中2
              </Button>
            </Stack>
          </Item>



        </Stack>


      </Stack>

    </main >

  );
};




