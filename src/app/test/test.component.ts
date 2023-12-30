import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  @Input('num1')num1:string="";
  @Input('num2')num2:string="";
  @Output('computed')computed=new EventEmitter<number>()
  result:number=0;

  add(){
    this.result=parseInt(this.num1)+parseInt(this.num2);
    this.computed.emit(this.result)
  }

  multiply(){
    this.result=parseInt(this.num1) * parseInt(this.num2);
    this.computed.emit(this.result)
  }

  subtract(){
    this.result=parseInt(this.num1)- parseInt(this.num2);
    this.computed.emit(this.result)
  }
}
