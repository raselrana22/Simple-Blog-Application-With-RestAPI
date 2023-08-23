// formValidate.js
/**
 * Validates form data for the contact form.
 *
 * @param {Object} formData - The form data to be validated.
 * @param {string} formData.name - The name input value.
 * @param {string} formData.email - The email input value.
 * @param {string} formData.website - The website input value.
 * @param {string} formData.message - The message input value.
 * @returns {Object} - An object containing validation errors.
 */

export default function validateForm(formData) {
    const errors = {};

    if (!formData.name) {
        errors.name = 'Name is required';
    }

    if (!formData.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Invalid email format';
    }

    if (!formData.website) {
        errors.website = 'Website is required';
    } else if (!/^https?:\/\/.+/.test(formData.website)) {
        errors.website = 'Invalid website URL format';
    }

    if (!formData.message) {
        errors.message = 'Message is required';
    }

    return errors;
}