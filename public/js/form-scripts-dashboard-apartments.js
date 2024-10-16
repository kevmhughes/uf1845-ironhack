/* Set/get local storage filter value */
window.onload = () => {
    const defaultValue = localStorage.getItem("sortByValueThree") || "newest";
  
    // Set the initial value of the select element
    const sortByElement = document.getElementById("sortByApartments");
    sortByElement.value = defaultValue;
  
    // Add event listener for change event
    sortByElement.addEventListener("change", function () {
      const sortByValueThree = this.value;
  
      // Store the new value in local storage
      localStorage.setItem("sortByValueThree", sortByValueThree);
    });

    console.log(localStorage.getItem("sortByValueThree"));
  };
  