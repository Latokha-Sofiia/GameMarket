import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-chips',
    templateUrl: './chips.component.html',
    styleUrl: './chips.component.scss',
})
export class ChipsComponent implements OnInit {
    @Input() genre!: string[];

    activeGenre: boolean[] = [];

    ngOnInit() {
        this.activeGenre = this.genre.map(() => false);
    }

    changeActiveGenre(index: number) {
        this.activeGenre[index] = !this.activeGenre[index];
    }
}
