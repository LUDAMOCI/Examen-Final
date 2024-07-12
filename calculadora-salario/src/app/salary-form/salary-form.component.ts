import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SalaryService } from '../services/salary.service';
import { SalaryCalculationRequest } from '../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../models/salary-calculation-response.model';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrls: ['./salary-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class SalaryFormComponent {
  result: SalaryCalculationResponse | null = null;

  constructor(private salaryService: SalaryService) { }

  onSubmit(form: NgForm): void {
    const request: SalaryCalculationRequest = form.value;
    this.result = this.salaryService.calculateSalary(request);
  }
}
