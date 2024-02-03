module.exports = {
  /**
   * Validates the form data for the given form ID
   * @param {string} formId - the ID of the form to be validated
   * @param {FormData} formData - the form data to be validated
   * @returns {Object} - an object containing any errors found during validation
   */
  formValidation: (formId, formData) => {
    const validationRules = require(`./${formId}`);

    if (!validationRules) {
      return null;
    }

    const errors = {};

    Object.keys(validationRules).forEach((key) => {
      const fieldValue = formData.get(key);

      if (
        validationRules[key] &&
        validationRules[key].required &&
        validationRules[key].required.value &&
        !fieldValue
      ) {
        errors[key] = validationRules[key].required.message;
      }
    });

    if (Object.keys(errors).length === 0) {
      return null;
    }

    return errors;
  },
};
