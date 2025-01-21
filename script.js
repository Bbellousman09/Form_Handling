function validateForm() {  
    const form = document.getElementById('RegistrationForm');  
    const fields = ['firstName', 'lastName', 'email', 'phone', 'country', 'date', 'message'];  
    let isValid = true;  
    let errorMessages = [];  
    
    fields.forEach(field => {  
        const input = document.getElementById(field);  
        const errorElement = document.getElementById(`${field}Error`);  
        if (errorElement) {  
            errorElement.innerText = ''; 
        }  
        input.classList.remove('error');  
    });  

    fields.forEach(field => {  
        const input = document.getElementById(field);    
        if (!input.value.trim()) {  
            isValid = false;  
            errorMessages.push(`${input.previousElementSibling.innerText} cannot be empty.`);  
            input.classList.add('error');  
            displayError(input, `${input.previousElementSibling.innerText} cannot be empty.`);  
        } else {  
            input.classList.remove('error');  
        }  
    });  
  
    const emailInput = document.getElementById('email');  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (emailInput.value && !emailPattern.test(emailInput.value)) {  
        isValid = false;  
        errorMessages.push("Please enter a valid email address.");  
        emailInput.classList.add('error');  
        displayError(emailInput, "Please enter a valid email address.");  
    }  

    const phoneInput = document.getElementById('phone');  
    const phonePattern = /^\d{10,15}$/;  
    if (phoneInput.value && !phonePattern.test(phoneInput.value)) {  
        isValid = false;  
        errorMessages.push("Please enter a valid phone number.");  
        phoneInput.classList.add('error');  
        displayError(phoneInput, "Please enter a valid phone number.");  
    }  

    return isValid;  
}  

 
function displayError(input, message) {  
    const errorElementId = `${input.id}Error`;  
    let errorElement = document.getElementById(errorElementId);  

    if (!errorElement) {  
        errorElement = document.createElement('div');  
        errorElement.id = errorElementId;  
        errorElement.className = 'error-message';    
        errorElement.style.color = '#dc3545'; 
        input.parentElement.insertBefore(errorElement, input.nextSibling);   
    }  
    
    errorElement.innerText = message;  
    
    
    
}