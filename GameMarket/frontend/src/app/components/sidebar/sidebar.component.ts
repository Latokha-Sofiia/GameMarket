import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
    constructor(private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.cdr.detectChanges()
        }, 1000)
    }
}
