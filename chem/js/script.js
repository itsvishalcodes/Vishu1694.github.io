document.addEventListener("DOMContentLoaded",
  function (event) {

    
    function calculate_waste (event) {      
	 document.querySelector(".answer").textContent = "";
	 var days = document.querySelector(".days-input").value;
	 var gr = document.querySelector(".gr-input").value;
	 var n = document.querySelector(".n-input").value;
	 var result = gr/(days*n);
	 document.querySelector(".answer").textContent = "The total waste generated per capita per day in your area is: "+result+" kgs.";
    }


    // Unobtrusive event binding
    document.querySelector(".calc-btn")
      .addEventListener("click", calculate_waste);

  }
);