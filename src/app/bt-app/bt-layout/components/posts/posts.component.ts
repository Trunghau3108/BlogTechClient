import { Component } from '@angular/core';
import { IconsModule } from '@progress/kendo-angular-icons';
import { chevronRightIcon} from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
 icons = {right: chevronRightIcon};
}
