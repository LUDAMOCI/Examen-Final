import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryFormComponent } from './salary-form/salary-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, SalaryFormComponent]
})
export class AppComponent {
  title = 'calculadora-salario';
}
