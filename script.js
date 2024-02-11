fetch('https://github.com/MrSeager/expenses-chart-component-main/blob/main/data.json')
  .then(function(response) {
    // Convert the response to JSON
    return response.json();
  })
  .then(function(data) {
    // Declare a const variable to store the amount value
    const amount;

    // Loop through the data array
    for (let i = 0; i < data.length; i++) {
      // Get the current object
      let obj = data[i];
      // Check if the day value is equal to "mon"
      if (obj.day === "mon") {
        // Assign the amount value to the const variable
        amount = obj.amount;
        // Break the loop
        break;
      }
    }

    document.querySelector(".mon p").innerHTML = '$' + amount;

    // Do something with the amount value
    console.log(amount);
  })
  .catch(function(error) {
    // Handle any errors
    console.log(error);
  });