# currency-converter-app
Currency Converter App
A simple and responsive currency converter web application using HTML, CSS, and JavaScript, powered by an exchange rate API.

Features
Convert between different currencies.
Real-time exchange rates from a free API.
Responsive design for various screen sizes.
Technologies Used
HTML
CSS
JavaScript
Exchange rate API
Demo
(https://currency-converter-app-tau.vercel.app)

Getting Started
Clone the repository to your local machine:

bash
Copy code
git clone (https://github.com/ZwellyTheKidd/currency-converter-app)
Navigate to the project directory:

bash
Copy code
cd currency-converter-app
Open the index.html file in your web browser to run the app.

Usage
Select the base currency from the dropdown.
Enter the amount you want to convert.
Choose the target currency from the second dropdown.
The converted amount will be displayed.
API Integration
The app uses a free exchange rate API for real-time currency conversion. You can find more information about the API here.

To integrate your own API, you can modify the fetchExchangeRates function in the app.js file.

javascript
Copy code
const fetchExchangeRates = async () => {
  const response = await fetch(`YOUR_API_ENDPOINT`);
  const data = await response.json();
  // Process the data and update the UI.
};
Screenshots
Screenshot 1

Screenshot 2

Contributing
Feel free to contribute to the project by creating issues, submitting pull requests, or suggesting new features and improvements.

License
This project is open-source and available under the MIT License.

Acknowledgments
Thanks to (https://www.exchangerate-api.com/) for providing the exchange rate data.





