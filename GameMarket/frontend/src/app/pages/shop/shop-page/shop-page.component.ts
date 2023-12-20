import { Component } from '@angular/core';

export interface IGameData {
    name: string,
    genre: string[],
    time: string,
    price: string,
    icon: string
}

@Component({
    selector: 'app-shop-page',
    templateUrl: './shop-page.component.html',
    styleUrl: './shop-page.component.scss',
})
export class ShopPageComponent {
    genre = [
        'All',
        'Simulation',
        'Strategy',
        'Logic',
        'Role-playing',
        'Action',
        'Quest',
        'VR',
    ];
    dataGames: IGameData[] = [
        {
            name: 'Baldur’s Gate III',
            genre: ['Role-playing', 'Strategy'],
            time: '30h 16m 50s',
            price: '0.05 ETH',
            icon: '/assets/temp.svg',
        },
        {
            name: 'Divinity',
            genre: ['Role-playing', 'Strategy'],
            time: '27h 11m 43s',
            price: '0.04 ETH',
            icon: '/assets/temp.svg',
        }
    ];
}
