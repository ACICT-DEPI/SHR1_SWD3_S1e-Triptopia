import { Component, Input } from '@angular/core';
import { IPopTourCard } from '../i-pop-tour-card';

@Component({
  selector: 'app-popular-tour-card',
  standalone: true,
  imports: [],
  templateUrl: './popular-tour-card.component.html',
  styleUrl: './popular-tour-card.component.css'
})
export class PopularTourCardComponent {
  @Input() popTourCard!: IPopTourCard;
}
