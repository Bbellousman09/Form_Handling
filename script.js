function validateForm() {  
    const form = document.getElementById('contactForm');  
    const fields = ['firstName', 'lastName', 'email', 'phone', 'message', 'country', 'date'];  
    let isValid = true;  

    fields.forEach(field => {  
        const input = document.getElementById(field);  
        if (!input.value) {  
            isValid = false;  
            alert(`${input.previousElementSibling.innerText} cannot be empty.`);  
        }  
    });  

    return isValid;   
}  