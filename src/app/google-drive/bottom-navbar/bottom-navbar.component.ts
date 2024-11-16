import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatIconModule, RouterModule],
  selector: 'app-bottom-navbar',
  templateUrl: 'bottom-navbar.component.html',
  styleUrl: 'bottom-navbar.component.scss',
})
export class BottomNavbarComponent {}
