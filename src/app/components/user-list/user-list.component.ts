import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs'
import { NotFoundComponent } from '@app/components';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTabsModule,NotFoundComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

}
