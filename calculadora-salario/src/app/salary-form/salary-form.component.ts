import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalaryService } from '../services/salary.service';
import { SalaryCalculationRequest } from '../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../models/salary-calculation-response.model';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrls: ['./salary-form.component.css']
})
export class SalaryFormComponent {
  result: SalaryCalculationResponse | null = null;

  constructor(private salaryService: SalaryService) { }

  onSubmit(form: NgForm): void {
    const request: SalaryCalculationRequest = form.value;
    this.result = this.salaryService.calculateSalary(request);
  }
}
