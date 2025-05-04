import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css'],
})
export class StaticComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  data: any;

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
      }
    });
  }
}
