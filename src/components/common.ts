/**
 * 中心座標を取得する
 * @param ref 
 * @returns 
 */
export function getCentralCoordinates(ref: React.MutableRefObject<HTMLButtonElement>): { centerX: number, centerY: number } {
  let x: number = 0
  let y: number = 0
  if (ref.current) {
    const rect = ref.current!.getBoundingClientRect();
    x = rect.x + rect.width / 2;
    y = rect.y + rect.height / 2;
    console.log('Center X:', x, 'Center Y:', y);
  }
  return { centerX: x, centerY: y }
}