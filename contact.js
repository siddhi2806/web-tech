$('.contact-us form').submit(function(event) {
    event.preventDefault();
    // Validate form fields
    var name = $('input[placeholder="Enter Name"]').val();
    var email = $('input[placeholder="Enter Email"]').val();
    var subject = $('input[placeholder="Enter Subject"]').val();
    var message = $('textarea[placeholder="Message"]').val();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields");
    } else {
      // Add your form submission logic here
      alert('Message sent successfully');
      // Optionally, reset the form
      $(this).trigger("reset");
    }
  });
