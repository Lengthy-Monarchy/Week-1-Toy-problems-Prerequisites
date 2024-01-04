// Constants for tax rates (KRA), NHIF, and NSSF
const KRA_TAX_RATE = 0.3; // 30%
const NHIF_RATE = 0.05;   // 5%
const NSSF_RATE = 0.06;   // 6%

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  // Calculate gross salary
    const grossSalary = basicSalary + benefits;

  // Calculate payee (tax)
    const payee = grossSalary * KRA_TAX_RATE;

  // Calculate NHIF Deductions
    const nhifDeductions = grossSalary * NHIF_RATE;

  // Calculate NSSF Deductions
  const nssfDeductions = grossSalary * NSSF_RATE;

  // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  // Return the results
    return {
    grossSalary: grossSalary,
    payee: payee,
    nhifDeductions: nhifDeductions,
    nssfDeductions: nssfDeductions,
    netSalary: netSalary
};
}

const basicSalary = 500000; 
const benefits = 70000;   

const result = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary: " + result.grossSalary);
console.log("Payee (Tax): " + result.payee);
console.log("NHIF Deductions: " + result.nhifDeductions);
console.log("NSSF Deductions: " + result.nssfDeductions);
console.log("Net Salary: " + result.netSalary);
