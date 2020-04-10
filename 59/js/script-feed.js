document.addEventListener("DOMContentLoaded",
  function (event) {	
	function feedbackSubmission (event) {
    	alert("Feedback Submitted Successfully");
    	window.location = "feedback.html";
    }

    // Unobtrusive event binding

    document.querySelector(".submit-btn")
    	.addEventListener("click", feedbackSubmission);
});