import { Component, Input, OnInit } from '@angular/core';
import { Card} from '../app.component'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // interpolation:['[[' , ']]' ]
  // template: `
  //   <div>
  //     <h4>Card component</h4>
  //   </div>
  // `,
  // styles: [
  //   ` .card {
  //       padding: 1rem 2rem;
  //       border: 1px dashed #ccc;
  //       border-radius: 3px;
  //       margin-bottom: 10px;
  //     }
  //   `
  // ],
})

export class CardComponent implements OnInit {
  @Input() card: Card = { title: '', text: '' };
    @Input() index: number = 0;
  title: string = 'Cool Card';
  text: string = 'Cool Card text'
  textColor:string=''
  // disabled = false
  imgUrl: string = '../../assets/ava.svg'
  cardDate: Date = new Date();

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://vuejs.org/images/logo.png'
      // this.disabled = true
    }, 3000)
  }
  changeTitle() {
    this.card.title = 'New title'
  }
  inputHandler(value: string) {
    this.title = value
  }
  changeHandler() {
    console.log(this.title);
  }
  //   number: number = 55
  //   array: number[] = [123, 14, 51]
  //   object: object = { name: 'Taras',   surname: 'Demchenko'}

    // inputHandler(event: any) {
    //   // console.log(event);
    //   const value = event.target.value
    //   this.title = value
    //  }

  //   getInfo():string {
  //     return 'Here is some information about me'
  //   }
}
