fetch('https://raw.githubusercontent.com/MrSeager/expenses-chart-component-main/main/data.json')
  .then(function(response) {
    // Convert the response to JSON
    return response.json();
  })
  .then(function(data) {
    // Loop through the data array
    for (let i = 0; i < data.length; i++) {
      // Get the current object
      let obj = data[i];
      // Get the day and amount values
      let day = obj.day;
      let amount = obj.amount;
      // Declare a variable to store the HTML element
      let element;
      // Use a switch statement to check the day value
      switch (day) {
        case "mon":
          // Select the HTML element with the class "mon"
          element = document.querySelector(".mon");
          break;
        case "tue":
          // Select the HTML element with the class "tue"
          element = document.querySelector(".tue");
          break;
        case "wed":
          // Select the HTML element with the class "wed"
          element = document.querySelector(".wed");
          break;
        case "thu":
          // Select the HTML element with the class "thu"
          element = document.querySelector(".thu");
          break;
        case "fri":
          // Select the HTML element with the class "fri"
          element = document.querySelector(".fri");
          break;
        case "sat":
          // Select the HTML element with the class "sat"
          element = document.querySelector(".sat");
          break;
        case "sun":
          // Select the HTML element with the class "sun"
          element = document.querySelector(".sun");
          break;
        default:
          // Handle any invalid day values
          console.log("Invalid day value: " + day);
      }
      // If the element is not null, update its paragraph element with the amount value
      if (element) {
        element.querySelector("p").innerHTML = "$" + amount;
        element.querySelector("button").style.height = amount + "%";
      }
    }
  })
  .catch(function(error) {
    // Handle any errors
    console.log(error);
  });