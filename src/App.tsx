import { FC } from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";

import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import confetti from 'canvas-confetti'
import { useRef, useState } from 'react';
import useSmallConffeti from "./components/useSmallConffeti";

import './style.css';
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
        sx={{ paddingBottom: "30px" }}
        justifyContent="center" // ボタンを水平方向に真ん中に寄せます
        alignItems="center" // ボタンを垂直方向に真ん中に寄せます
      >
        <Stack
          //direction="row"
          spacing={3}
          justifyContent="center" // ボタンを水平方向に真ん中に寄せます
          alignItems="left" // ボタンを垂直方向に真ん中に寄せます
        >

          <Box sx={{ width: "600px", padding: '0px' }}>
            <Typography sx={{ fontSize: "23px", fontWeight: "700" }}>
              ボタンの中央を起点とした紙吹雪
            </Typography>
          </Box>

          <Item>
            あああああっs
            <Button onClick={handleButton1} variant="outlined" sx={{}}>
              1-1.絵文字をパーン
            </Button>
          </Item>
          <Item>
            <Button variant="outlined" onClick={handleButton2} ref={buttonRef2}>
              1-2.大きくパーン
            </Button>
          </Item>
          <Item>
            <Typography sx={{ paddingBottom: "5px" }}>
              あああ
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={handleButton3} ref={buttonRef3} >
                1-4.小さめのパーン(1)
              </Button>
            </Stack>
          </Item>
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
            <Typography sx={{ paddingBottom: "5px" }}>
              TPOにあわせた紙吹雪
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={handleButton3} ref={buttonRef3} >
                会計ツールで<br />月次作業が完了
              </Button>
              <Button variant="outlined" onClick={handleButton3} ref={buttonRef3} >
                会計ツールで<br />年次作業が完了
              </Button>
              <Button variant="outlined" onClick={handleButton3} ref={buttonRef3} >
                勤怠入力アプリで退勤処理
              </Button>
              <Button variant="outlined" onClick={handleButton3} ref={buttonRef3} >
                社内連携アプリで<br />
                繋がりができた
              </Button>
              <Button variant="outlined" onClick={handleButton3} ref={buttonRef3} >
                バッチが異常終了
              </Button>
            </Stack>
            <Typography sx={{ padding: "5px" }}>
              TPOにあわせた紙吹雪
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={handleChristmasConfetti} ref={christmasConfetti} >
                クリスマス
              </Button>
              <Button variant="outlined" onClick={handleHallowinConfetti} ref={hallowinConfetti} >
                ハロウィン
              </Button>
              {/* <Button variant="outlined" onClick={handleNewYearConfetti} ref={newYearConfetti} >
                お正月
              </Button> */}
            </Stack>
          </Item>
          <Item>
            <Button variant="outlined" ref={buttonRef3}  >
              1-5.ド派手なパーン
            </Button>
          </Item>
          <Item>
            <Button variant="outlined" ref={buttonRef3}  >
              1-6.大量の紙吹雪！
            </Button>
          </Item>
          <Item>
            <Button variant="outlined" ref={buttonRef3}  >
              1-7.すべてのオプションを指定
            </Button>
          </Item>

        </Stack>
      </Stack>




      <Stack
        //direction="row"
        spacing={5}
        justifyContent="center" // ボタンを水平方向に真ん中に寄せます
        alignItems="center" // ボタンを垂直方向に真ん中に寄せます
      >
        <Box sx={{ width: "600px", padding: '10px', background: "#444444" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            画面上の様々な場所を起点とした紙吹雪
          </Typography>
        </Box>
        <Stack
          //direction="row"
          spacing={3}
          justifyContent="center" // ボタンを水平方向に真ん中に寄せます
          alignItems="center" // ボタンを垂直方向に真ん中に寄せます
        >
          <Item>
            <Button variant="outlined" onClick={randomConfetti} >
              2-1.ランダムにパーン
            </Button>
            <Button variant="outlined" onClick={randomConfetti} >
              2-2.画面両サイドから紙吹雪
            </Button>
            <Button variant="outlined" onClick={randomConfetti} >
              2-3.
            </Button>
          </Item>

        </Stack>

      </Stack>

    </main >

  );
};




