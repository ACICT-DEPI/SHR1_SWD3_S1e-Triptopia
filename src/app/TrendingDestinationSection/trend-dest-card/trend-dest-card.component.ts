import { Component, Input } from '@angular/core';
import { ITrendDestCard } from '../i-trend-dest-card';

@Component({
  selector: 'app-trend-dest-card',
  standalone: true,
  imports: [],
  templateUrl: './trend-dest-card.component.html',
  styleUrl: './trend-dest-card.component.css'
})
export class TrendDestCardComponent {
  @Input() trendDestCard!: ITrendDestCard;
}
