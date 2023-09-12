
    function storeFormData(event, formId) {
        event.preventDefault(); 

        const form = event.target;
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

        alert('Form Submitted!');
    }