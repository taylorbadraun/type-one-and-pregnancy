$(document).ready(function (){
    $('#contact').validate({
        debug: true,
        errorClass: 'alert alert-danger',
        ErrorLabelContainer: '#output-area',
        errorElement: 'div',
        //rules
        rules: {
            name: {
                required: true
            },
            emailInput: {
                email: true,
                required: true
            },
            messageInput: {
                required: true,
                maxlength: 2000
            }
        },
        messages: {
            name: {
                required: 'Name is required.'
            },
            emailInput: {
                email: 'Please provide a valid email.',
                required: 'Email is required.'
            },
            messageInput: {
                required: 'A message is required.',
                maxlength: 'Message is too long.'
            }
        }
    })
})