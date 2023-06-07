const validations = (form) => {

    let errors = {}

    if(!form.name) {
        errors.name = 'A name is needed.'
    } else if (!/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g.test(form.name)) {
        errors.name = 'The name is invalid.'
    }
    if(!form.email) {
        errors.email = 'The email is invalid.'
    }
    if (!form.issue) {
        errors.issue = 'Please enter a issue.'
    }
    if(!form.message) {
        errors.message = 'Please insert the message.'
    }
    return errors;
}

export default validations;