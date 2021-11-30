import Food from "./food";
import Snake from "./snake";
import ScorePanel from "./scorePanel";

//游戏的控制器  控制其他所有的类
class GameControl {
  //定义三个属性
  snake: Snake;//蛇
  food: Food;//食物
  scorePanel: ScorePanel;//记分牌
  //存储蛇的移动方向（按键方向）
  direction: string = '';
  //创建一个属性用来记录游戏是否结束
  isLive: boolean = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
  }
  //游戏的初始化方法 调用后游戏开始
  init() {
    //绑定键盘事件
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    //调用run()方法使蛇移动
    this.run();
  }
  //创建键盘按下的响应函数
  keyDownHandler(event: KeyboardEvent) {
    // console.log(event.key);
    //检查event.key是否合法  只有上下左右键才合法
    //存按键的方向
    this.direction = event.key;
  }
  //创建控制蛇移动的方法
  run() {
    //利用方向direction来使蛇移动
    //获取蛇现在的坐标
    let x = this.snake.X;
    let y = this.snake.Y;
    //根据按键方向修改x值和y值
    switch(this.direction) {
      case "ArrowUp" || "Up":
        //向上移动
        y -= 10;
        break;
      case "ArrowDown" || "Down":
        y += 10;
        break;
      case "ArrowLeft" || "Left":
        x -= 10;
        break;
      case "ArrowRight" || "Right":
        x += 10;
        break;
    }
    //检查蛇是否吃到食物
    this.checkEat(x, y);
    try{
      //修改蛇的X和Y值
      this.snake.X = x;
      this.snake.Y = y;
    }catch{
      //进入catch，说明蛇撞墙了  抛出异常了
      alert('蛇撞墙了，Game Over！');
      //终止蛇
      this.isLive = false;
    }
    
    //开启定时调用
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
  //定义一个方法检测蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if(X === this.food.X && Y === this.food.Y) {
      //食物的位置要改变
      this.food.change();
      //分数增加
      this.scorePanel.addScore();
      //蛇身体增加一节
      this.snake.addBody();
    }
  }
}
export default GameControl;