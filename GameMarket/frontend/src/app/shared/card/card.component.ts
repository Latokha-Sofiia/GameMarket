import { Component, Input } from '@angular/core';
import {IGameData} from "../../pages/shop/shop-page/shop-page.component";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() dataGame!: IGameData;

}
