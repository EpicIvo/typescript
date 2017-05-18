export default class GameObject {

  public xPos:number;
  public yPos:number;
  protected width:number;
  protected heigth:number;
  public element:HTMLElement;

  constructor(width:number, heigth:number, element:string) {
    this.heigth = heigth;
    this.width = width;
    this.element = document.createElement(element);
    this.element.style.height = this.heigth.toString() + 'px';
    this.element.style.width = this.width.toString() + 'px';

    document.body.appendChild(this.element);
  }
}
