import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  imports: [CommonModule],
  templateUrl: './view.html',
  styleUrl: './view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View {}
