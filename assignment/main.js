// script.js

// Fixed conversion rates
const conversionRates = {
    USD: { INR: 74.5, EUR: 0.85 },
    EUR: { INR: 90.5, USD: 1.18 },
    INR: { USD: 0.013, EUR: 0.011 },
};

// Get elements
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convert-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('result');

// Convert function
function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount.';
        return;
    }

    if (from === to) {
        resultDiv.textContent = `${amount} ${from} = ${amount} ${to}`;
        return;
    }

    const rate = conversionRates[from]?.[to];
    if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
    } else {
        resultDiv.textContent = 'Conversion rate not available.';
    }
}

// Clear function
function clearFields() {
    fromCurrency.value = 'USD';
    toCurrency.value = 'INR';
    amountInput.value = '';
    resultDiv.textContent = '';
}

// Event listeners
convertBtn.addEventListener('click', convertCurrency);
clearBtn.addEventListener('click', clearFields);
