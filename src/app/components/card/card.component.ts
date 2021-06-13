import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() heading : string = "";
  @Input() description : string = "";
  @Input() imageSrc : string = "";
  imagePath : string = "";

  constructor() {
    this.imagePath = this.imageSrc;
   }

  ngOnInit(): void {
    console.log(this.imageSrc,this.description, 'ss')

  }

}
