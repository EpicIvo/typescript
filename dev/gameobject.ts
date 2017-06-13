abstract class GameObject {

  public xPos:number;
  public yPos:number;
  public width:number;
  public height:number;
  public element:HTMLElement;

  constructor(width:number, height:number, element:string) {
    this.height = height;
    this.width = width;
    this.element = document.createElement(element);
    this.element.style.height = this.height.toString() + 'px';
    this.element.style.width = this.width.toString() + 'px';

    document.body.appendChild(this.element);
  }
}

export default GameObject;
