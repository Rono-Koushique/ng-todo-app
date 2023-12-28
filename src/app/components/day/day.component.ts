import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-day',
    standalone: true,
    imports: [DatePipe],
    templateUrl: './day.component.html',
    styles: ``,
})
export class DayComponent {
    dateNow = new Date();
}
