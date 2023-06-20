// console.log("hello");

// // 1.Date Object:

// // a. Create a function that takes a date in the format "YYYY-MM-DD" 
// // as a parameter and returns the day of the week for that date. 
// // The function should use the Date object.

// // b. Implement the function to display the day of the week for the current date.

// function getDayOfWeek(dateString) {
//     const dateParts = dateString.split('-');
//     const year = parseInt(dateParts[0]);
//     const month = parseInt(dateParts[1]) - 1; // Month is zero-based in JavaScript
//     const day = parseInt(dateParts[2]);
  
//     const date = new Date(year, month, day);
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const dayOfWeek = daysOfWeek[date.getDay()];
  
//     return dayOfWeek;
//   }
//   const inputDate = '2023-06-18';
//   const dayOfWeek = getDayOfWeek(inputDate);
//   console.log(dayOfWeek); // Output: Sunday

function getDayOfWeek() {
    const inputDate = document.getElementById('date-input').value;
    const dayOfWeek = calculateDayOfWeek(inputDate);
    const result = document.getElementById('result');
    result.textContent = `The day of the week for ${inputDate} is ${dayOfWeek}.`;
  }
  
  function calculateDayOfWeek(dateString) {
    const dateParts = dateString ? dateString.split('-') : [];
    const year = dateString ? parseInt(dateParts[0]) : undefined;
    const month = dateString ? parseInt(dateParts[1]) - 1 : undefined; // Month is zero-based in JavaScript
    const day = dateString ? parseInt(dateParts[2]) : undefined;
  
    const date = new Date(year, month, day);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
  
    return dayOfWeek;
  }
  

  




// 2.Math Object:


// a. Write a JavaScript function that takes an array of numbers as input and returns 
//the square root of the sum of squares of all the numbers. 
//Use the Math object to perform the necessary calculations.

// b. Implement the function to display the square root of the sum of squares for an array of numbers.

// function calculateSquareRootSum(numbers) {
//     const sumOfSquares = numbers.reduce((accumulator, currentValue) => {
//       return accumulator + Math.pow(currentValue, 2);
//     }, 0);
  
//     const squareRootSum = Math.sqrt(sumOfSquares);
//     return squareRootSum;
//   }
//   const numbers = [3, 4, 5, 6, 7];
//   const result = calculateSquareRootSum(numbers);
//   console.log(result); // Output: 11.224972160321824
    

function calculateSquareRootSum(numbers) {
    const sumOfSquares = numbers.reduce((accumulator, currentValue) => {
      return accumulator + Math.pow(currentValue, 2);
    }, 0);
  
    const squareRootSum = Math.sqrt(sumOfSquares);
    return squareRootSum;
  }
  
  function calculateAndDisplay() {
    const numbersInput = document.getElementById('numbers-input');
    const userInput = numbersInput.value;
  
    const inputArray = userInput.split(",").map((number) => parseFloat(number.trim()));
    
    const result2 = calculateSquareRootSum(inputArray);
    
    const resultElement = document.getElementById('result2');
    resultElement.textContent = `The square root of the sum of squares is: ${result2}`;
  }
  
 


// 3.Numbers:


// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number,
// otherwise returns false.


// b. Implement the function to check if a given positive integer is a prime number.


function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkPrime() {
  const numberInput = document.getElementById('number-input');
  const userInput = parseInt(numberInput.value);

  const isNumberPrime = isPrime(userInput);
  
  const resultElement = document.getElementById('result3');
  if (isNumberPrime) {
    resultElement.textContent = `${userInput} is a prime number.`;
  } else {
    resultElement.textContent = `${userInput} is not a prime number.`;
  }
}






// 4.Window Object:


// a. Create a function that opens a new window with a specified URL and dimensions (width and height).

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.


 


function openNewWindow() {
  const url = 'https://www.example.com';
  const width = 800;
  const height = 600;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const options = `width=${width},height=${height},top=${top},left=${left}`;
  window.open(url, '_blank', options);
}





// 5.Navigator Object:


// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

// b. Implement the function to display the user's browser name and version.

function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName, browserVersion;

  if (userAgent.indexOf("Firefox") !== -1) {
    browserName = "Firefox";
    browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Chrome") !== -1) {
    browserName = "Chrome";
    browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Safari") !== -1) {
    browserName = "Safari";
    browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
    browserName = "Opera";
    browserVersion = userAgent.match(/(?:Opera|OPR)\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Edge") !== -1) {
    browserName = "Microsoft Edge";
    browserVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Trident") !== -1) {
    browserName = "Internet Explorer";
    const rvIndex = userAgent.indexOf("rv:");
    browserVersion = userAgent.substring(rvIndex + 3, userAgent.indexOf(".", rvIndex));
  } else {
    browserName = "Unknown";
    browserVersion = "Unknown";
  }

  return {
    name: browserName,
    version: browserVersion
  };
}



// Call the getBrowserInfo function and display the results on the web page
const browserInfo = getBrowserInfo();
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('browser-name').textContent = browserInfo.name;
  document.getElementById('browser-version').textContent = browserInfo.version;
});


 


// 6.Geolocation:

// a. Implement a JavaScript function that retrieves the user's current location 
//(latitude and longitude) using the geolocation API.

function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        document.getElementById('latitude').textContent = latitude;
        document.getElementById('longitude').textContent = longitude;
      },
      function (error) {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}



 


// 7.JS Common Events:

// Implement a webpage with the following functionality:

// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.

// b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.

// c. When the user moves the mouse over an image, change the image source to another image of your choice.




 





 





 


// 14.AJAX Get Request:


// a. Implement a JavaScript function that sends an AJAX GET request to the 
//following URL: "https://api.example.com/data".


 


// 15.AJAX Post Request:


// a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".


// b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }.