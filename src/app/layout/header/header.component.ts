import { Component } from '@angular/core';
import { SvgModule } from '@shared/svgs/svg.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SvgModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
