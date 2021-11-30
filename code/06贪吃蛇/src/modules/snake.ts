//定义蛇类
class Snake {
  //表示蛇头的元素
  head: HTMLElement;
  //蛇的身体（包括蛇头）
  bodies: HTMLCollection;
  //获取蛇的容器
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }
  //获取蛇的坐标（蛇头坐标）
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  set X(value: number) {
    //如果新值和旧值相同就直接返回
    if (this.X == value) {
      return;
    }
    //判断X的合法值0-290之间
    if (value < 0 || value > 290) {
      //蛇撞墙了 抛出异常
      throw new Error('蛇撞墙了');
    }
    this.head.style.left = value + 'px';
  }
  set Y(value: number) {
    //判断Y的合法值0-290之间
    if (value < 0 || value > 290) {
      //蛇撞墙了 抛出异常
      throw new Error('蛇撞墙了');
    }
    this.head.style.top = value +'px';
  }
  //蛇增加身体的方法
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }
}
export default Snake;