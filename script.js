// Example: alert on form submit (you can link to your email tool later)

document.querySelector("form").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you for your message! 💌");

});