document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').textContent = '';

 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;


    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

 
    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; 
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }


    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

  
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Your message has been sent successfully!';

    }
});
