
    // function storeFormData(event, formId) {
    //     event.preventDefault(); 

    //     const form = event.target;
    //     const formData = new FormData(form);

        
    //     const formDataObject = {};
    //     formData.forEach((value, key) => {
    //         formDataObject[key] = value;
    //     });

       
    //     let existingData = localStorage.getItem('formData');

    //     if (existingData) {
    //         existingData = JSON.parse(existingData);
    //     } else {
    //         existingData = [];
    //     }

        
    //     existingData.push({ formId, data: formDataObject });

    //     localStorage.setItem('formData', JSON.stringify(existingData));

        
    //     form.reset();

    //     alert('Form Submitted!');
    // }



    // function validateLoginForm(event) {
    //     event.preventDefault();
    
    //     const email = document.getElementById('loginEmail').value.trim();
    //     const password = document.getElementById('loginPassword').value.trim();
    
    //     if (!email || !password) {
    //         alert('Please fill in all fields.');
    //         return;
    //     }
    
    // }
    
    // function validateSignupForm(event) {
    //     event.preventDefault();
    
    //     const firstName = document.getElementById('signupFirstName').value.trim();
    //     const lastName = document.getElementById('signupLastName').value.trim();
    //     const email = document.getElementById('signupEmail').value.trim();
    //     const password = document.getElementById('signupPassword').value.trim();
    //     const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();
    
    //     if (!firstName || !lastName || !email || !password || !confirmPassword) {
    //         alert('Please fill in all fields.');
    //         return;
    //     }
    
    //     if (password !== confirmPassword) {
    //         alert('Passwords do not match. Please try again.');
    //         return;
    //     }
    
    //     // Continue with form submission or other actions
    //     // ...
    
    //     alert('Form Submitted!');
    // }
    
    // // Other JavaScript code you may have
    
  
    

    function validateLoginForm(event) {
        event.preventDefault();
    
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
    
        if (!email || !password) {
            alert('Please fill in all fields.');
            return false; // Return false to indicate validation failure
        }
    
        // Continue with form submission or other actions
        // ...
    
        alert('Form Submitted Successfully!');
        return true; // Return true to indicate validation success
    }
    
    function validateSignupForm(event) {
        event.preventDefault();
    
        const firstName = document.getElementById('signupFirstName').value.trim();
        const lastName = document.getElementById('signupLastName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value.trim();
        const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();
    
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return false; // Return false to indicate validation failure
        }
    
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return false; // Return false to indicate validation failure
        }
    
        // Continue with form submission or other actions
        // ...
    
        alert('Form Submitted Successfully!');
        return true; // Return true to indicate validation success
    }
    
    function storeFormData(event, formId) {
        event.preventDefault(); 
    
        const form = event.target;
    
        // Check the formId to determine which form is being submitted
        if (formId === 'loginForm') {
            if (!validateLoginForm(event)) {
                return; // Stop processing if login form validation fails
            }
        } else if (formId === 'signupForm') {
            if (!validateSignupForm(event)) {
                return; // Stop processing if signup form validation fails
            }
        }
    
        const formData = new FormData(form);
        
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
    
        let existingData = localStorage.getItem('formData');
    
        if (existingData) {
            existingData = JSON.parse(existingData);
        } else {
            existingData = [];
        }
    
        existingData.push({ formId, data: formDataObject });
    
        localStorage.setItem('formData', JSON.stringify(existingData));
    
        form.reset();
    
    }
    