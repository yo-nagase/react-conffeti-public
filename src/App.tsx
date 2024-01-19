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
    handleYearlyTaskCompletedConfetti, yearlyTaskCompletedConfetti,
    handleGameFinithConfetti, gameFinishConfetti,
    handleGoodButtonConfetti, goodButtonConfetti
  } = useTpoConfetti()


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
              TPOにあわせた紙吹雪
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
              イベントに合わせた紙吹雪
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
              <Button variant="outlined" onClick={handleGameFinithConfetti} ref={gameFinishConfetti} >
                Gameで<br />フィニッシュ！
              </Button>
              <Button variant="outlined" onClick={handleGoodButtonConfetti} ref={goodButtonConfetti}
                sx={{ borderRadius: '40px' }} >
                いいね！
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




