import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  images = [{ url: 'assets/images/calendar3.png' },
  { url: 'assets/images/calendar4.png' },
  { url: 'assets/images/calendar2.png' },
  { url: 'assets/images/calendar4.png' },
  { url: 'assets/images/calendar1.png' },
  { url: 'assets/images/calendar4.png' },
  { url: 'assets/images/calendar3.png' },
  { url: 'assets/images/calendar4.png' },
  { url: 'assets/images/calendar2.png' },
  { url: 'assets/images/calendar4.png' },
  { url: 'assets/images/calendar1.png' },
  { url: 'assets/images/calendar4.png' },
  { url: 'assets/images/calendar3.png' },
  { url: 'assets/images/calendar4.png' },
  { url: 'assets/images/calendar2.png' },
  { url: 'assets/images/calendar4.png' },
  { url: 'assets/images/calendar1.png' },
  { url: 'assets/images/calendar4.png' },
  ];

  constructor() {
  }

  get rows() {
    const rows = [];
    for (let i = 0; i < this.images.length; i += 3) {
      rows.push(this.images.slice(i, i + 3));
    }
    return rows;
  }

  ngOnInit() {
    console.log('caasdasl')
  }

}
