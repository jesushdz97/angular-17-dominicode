import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg [attr.width]="width" [attr.height]="height" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title>file_type_angular</title>
        <polygon points="16 2 16 2 16 2 2.966 6.648 4.954 23.882 16 30 16 30 16 30 27.046 23.882 29.034 6.648 16 2"
          style="fill:#dd0031" />
        <polygon points="16 2 16 5.108 16 5.094 16 19.276 16 19.276 16 30 16 30 27.046 23.882 29.034 6.648 16 2"
          style="fill:#c3002f" />
        <path d="M16,5.094,7.852,23.364H10.89l1.638-4.088h6.916l1.638,4.088H24.12L16,5.094Zm2.38,11.662H13.62L16,11.03Z"
          style="fill:#fff" />
    </svg>
  `
})
export class AngularLogoComponent {
  @Input() width = '200px';
  @Input() height = '200px';
}