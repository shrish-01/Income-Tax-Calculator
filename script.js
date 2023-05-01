function calculateTax(event) {
  event.preventDefault();

  const totalIncome = document.getElementById("total-income").value;
  const deductions = document.getElementById("deductions").value;
  const exemptions = document.getElementById("exemptions").value;

  const taxableIncome = totalIncome - deductions - exemptions;
  let tax = 0;

  if (taxableIncome <= 250000) {
    tax = 0;
  } else if (taxableIncome > 250000 && taxableIncome <= 500000) {
    tax = (taxableIncome - 250000) * 0.05;
  } else if (taxableIncome > 500000 && taxableIncome <= 1000000) {
    tax = 12500 + (taxableIncome - 500000) * 0.2;
  } else {
    tax = 112500 + (taxableIncome - 1000000) * 0.3;
  }

  const surcharge = calculateSurcharge(taxableIncome, tax);
  const educationCess = (tax + surcharge) * 0.04;
  const totalTax = tax + surcharge + educationCess;

  const taxResult = document.getElementById("tax-result");
  taxResult.innerHTML = `Your total taxable income is Rs.${taxableIncome}.<br>Your tax is Rs.${tax.toFixed(
    2
  )}.<br>Your surcharge is Rs.${surcharge.toFixed(
    2
  )}.<br>Your education cess is Rs.${educationCess.toFixed(
    2
  )}.<br>Your total tax liability is Rs.${totalTax.toFixed(2)}.`;
}

function calculateSurcharge(taxableIncome, tax) {
  let surcharge = 0;
  if (taxableIncome > 10000000) {
    surcharge = tax * 0.37;
  } else if (taxableIncome > 5000000) {
    surcharge = tax * 0.25;
  } else if (taxableIncome > 3000000) {
    surcharge = tax * 0.15;
  }
  return surcharge;
}
