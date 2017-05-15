export default class GameObject {

  protected x:number;
  protected y:number;
  protected width:number;
  protected heigth:number;
  protected element:HTMLElement;

  constructor(width:number, heigth:number, element:string) {
    this.heigth = heigth;
    this.width = width;
    this.element = document.createElement(element);
    this.element.style.height = this.heigth.toString() + 'px';
    this.element.style.width = this.width.toString() + 'px';

    document.body.appendChild(this.element);
  }
}
