import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables for inputs and results
  const [income, setIncome] = useState('');
  const [rent, setRent] = useState('');
  const [food, setFood] = useState('');
  const [transport, setTransport] = useState('');
  const [other, setOther] = useState('');
  const [balance, setBalance] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Function to validate input fields
  const validateInputs = () => {
    const inputs = [
      { value: income, name: 'Monthly Income' },
      { value: rent, name: 'Rent/EMI' },
      { value: food, name: 'Food Expenses' },
      { value: transport, name: 'Transport Expenses' },
      { value: other, name: 'Other Expenses' }
    ];

    for (let input of inputs) {
      if (!input.value || input.value.trim() === '') {
        alert(`${input.name} cannot be empty!`);
        return false;
      }
      
      const numValue = parseFloat(input.value);
      if (isNaN(numValue) || numValue <= 0) {
        alert(`${input.name} must be a positive number!`);
        return false;
      }
    }
    
    return true;
  };

  // Function to calculate balance
  const calculateBalance = () => {
    if (!validateInputs()) {
      return;
    }

    const incomeAmount = parseFloat(income);
    const rentAmount = parseFloat(rent);
    const foodAmount = parseFloat(food);
    const transportAmount = parseFloat(transport);
    const otherAmount = parseFloat(other);

    const calculatedBalance = incomeAmount - (rentAmount + foodAmount + transportAmount + otherAmount);
    
    setBalance(calculatedBalance);
    setShowResult(true);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Budget Calculator</h1>
        <p className="subtitle">Manage your monthly income and expenses</p>
        
        <div className="form-container">
          <div className="input-group">
            <label htmlFor="income">Monthly Income *</label>
            <input
              type="number"
              id="income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Enter your monthly income"
              step="0.01"
              min="0"
            />
          </div>

          <div className="input-group">
            <label htmlFor="rent">Rent/EMI *</label>
            <input
              type="number"
              id="rent"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              placeholder="Enter rent or EMI amount"
              step="0.01"
              min="0"
            />
          </div>

          <div className="input-group">
            <label htmlFor="food">Food Expenses *</label>
            <input
              type="number"
              id="food"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              placeholder="Enter food expenses"
              step="0.01"
              min="0"
            />
          </div>

          <div className="input-group">
            <label htmlFor="transport">Transport Expenses *</label>
            <input
              type="number"
              id="transport"
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              placeholder="Enter transport expenses"
              step="0.01"
              min="0"
            />
          </div>

          <div className="input-group">
            <label htmlFor="other">Other Expenses *</label>
            <input
              type="number"
              id="other"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              placeholder="Enter other expenses"
              step="0.01"
              min="0"
            />
          </div>

          <button 
            className="calculate-btn"
            onClick={calculateBalance}
          >
            Calculate Balance
          </button>

          {showResult && (
            <div className="result-container">
              <h2>Results</h2>
              <div className={`balance-display ${balance < 0 ? 'negative' : 'positive'}`}>
                <div className="balance-amount">
                  Remaining Balance: ${balance.toFixed(2)}
                </div>
                <div className="balance-message">
                  {balance < 0 ? (
                    <span className="warning">⚠️ You are overspending!</span>
                  ) : (
                    <span className="success">✅ Good job managing your expenses!</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;