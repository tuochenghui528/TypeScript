//定义记分牌来
class ScorePanel {
  score: number = 0;
  level: number = 1;
  //分数和等级的元素
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  //设置一格变量限制等级
  maxLevel: number;
  //设置一个变量表示多少分时升级
  upScore: number;
  constructor(maxLevel:number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  //设置加分的方法
  addScore() {
    this.score++;
    this.scoreEle.innerText = this.score + '';
    //判断分数是多少
    if(this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  //提升等级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.level++;
      this.levelEle.innerText = this.level + '';
    }
  }
}
export default ScorePanel;