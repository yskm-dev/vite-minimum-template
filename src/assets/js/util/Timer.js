/**
 * 簡易的な時間取得関数
 */
export class Timer {
  constructor() {
    this.startTime = performance.now() * 0.001;
    this.oldTime = this.startTimes;
    this.time = 0;
  }
  /**
   * start
   * タイマーをスタートする
   */
  start() {
    this.startTime = performance.now() * 0.001;
    this.oldTime = this.startTime;
  }
  /**
   * スタートからの経過時間を取得
   * @returns {number} time
   */
  getElapsedTime() {
    let time = performance.now() * 0.001;
    this.oldTime = time;
    return time - this.startTime;
  }
  /**
   * 1フレーム間の時間を取得
   * @returns {number} time
   */
  getDelta() {
    let time = performance.now() * 0.001;
    this.oldTime = time;
    return time - this.oldTime;
  }
}
