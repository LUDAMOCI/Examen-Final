import { Injectable } from '@angular/core';
import { SalaryCalculationRequest } from '../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../models/salary-calculation-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor() { }

  calculateSalary(request: SalaryCalculationRequest): SalaryCalculationResponse {
    const regularSalary = request.hourlyWage * request.hoursWorked;
    const overtimeSalary = request.hourlyWage * 1.5 * request.overtimeHours;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * 0.10;
    const netSalary = totalSalary - deductions;

    return {
      regularSalary,
      overtimeSalary,
      deductions,
      netSalary
    };
  }
}
