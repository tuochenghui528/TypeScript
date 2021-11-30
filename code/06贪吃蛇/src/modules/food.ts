//定义食物类
class Food {
  //定义一个属性表示食物所对应的元素
  element:HTMLElement;
  constructor() {
    //获取页面food元素 并将其赋值给element !表示这个food肯定会存在
    this.element = document.getElementById('food')!;
  }
  //定义获取食物x轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }
  //定义获取食物Y轴的方法
  get Y() {
    return this.element.offsetTop;
  }
  //修改食物的位置
  change() {
    //生成随机的位置  最小是0  最大是300-10 = 290
    //蛇一定一次就是一格就是10px  所以要求食物的坐标必须是整10 才能和蛇的坐标会用重合
    let top = Math.round(Math.random() * 29) * 10//0-290的随机数 round向上取整后就包含最小和最大值了 
    let left = Math.round(Math.random() * 29) * 10
    this.element.style.left = top + 'px';
    this.element.style.top = left + 'px';
  }
}

export default Food;