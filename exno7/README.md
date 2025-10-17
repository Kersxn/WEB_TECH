# Budget Calculator - Webexno7

A React-based budget calculator application to help users manage their monthly income and expenses.

## Features

- **Input Validation**: Ensures all fields are filled with positive numbers
- **Real-time Calculation**: Calculates remaining balance instantly
- **Visual Feedback**: 
  - Green display for positive balance with success message
  - Red display for negative balance with warning message
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## Requirements Implemented

✅ React functional component with state variables  
✅ Input fields for Monthly Income, Rent/EMI, Food, Transport, and Other Expenses  
✅ Validation for positive numbers only  
✅ "Calculate Balance" button  
✅ Alert messages for empty or negative inputs  
✅ Balance calculation: `Balance = Income - (Rent + Food + Transport + Others)`  
✅ Conditional styling (red for negative, green for positive)  
✅ Warning message for overspending  
✅ Success message for good expense management  

## How to Run

### Option 1: Direct HTML File (Easiest)
1. Navigate to the `budgetcal` folder on your desktop
2. Open `index.html` in any modern web browser
3. The application will run immediately without any installation

### Option 2: React Development Server
1. Install Node.js and npm on your computer
2. Open terminal/command prompt in the `budgetcal` folder
3. Run the following commands:
   ```bash
   npm install
   npm start
   ```
4. The application will open in your browser at `http://localhost:3000`

## File Structure

```
budgetcal/
├── index.html          # Standalone HTML file (ready to run)
├── package.json        # React project configuration
├── public/
│   └── index.html      # React development server template
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # Styling for the application
│   └── index.js        # React entry point
└── README.md           # This file
```

## Usage

1. Enter your **Monthly Income** (must be positive)
2. Enter your **Rent/EMI** expenses
3. Enter your **Food Expenses**
4. Enter your **Transport Expenses**
5. Enter your **Other Expenses**
6. Click **"Calculate Balance"**
7. View your remaining balance with appropriate color coding and message

## Technology Stack

- React 18.2.0
- Modern CSS with Flexbox and Grid
- Responsive design principles
- ES6+ JavaScript features

## Browser Compatibility

Works on all modern browsers including:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

---

**Created by**: Webexno7 Budget Calculator  
**Version**: 1.0.0
