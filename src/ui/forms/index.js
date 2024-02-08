module.exports = {
  /**
   * Defines a form by its ID
   * @param {string} formId - the ID of the form to be defined
   * @returns {Object} - the defined form object
   */
  defineForm: (formId) => {
    const form = require(`./${formId}`);

    if (!form) {
      return null;
    }

    return form;
  },

  /**
   * Validates the given form data against the specified form
   * @param {string} formId - the id of the form to validate against
   * @param {dw.web.FormGroup} formData - the form data to validate
   * @returns {Object} an object containing any validation errors, or null if there are none
   */
  validateForm: (formId, formData) => {
    const form = require(`./${formId}`);

    if (!form) {
      return null;
    }

    const errors = {};

    Object.keys(form).forEach((formField) => {
      const fieldValue = formData.get(formField);

      if (
        form[formField] &&
        form[formField].validation &&
        form[formField].validation.required &&
        form[formField].validation.required.value &&
        !fieldValue
      ) {
        errors[formField] = {
          invalid: true,
          helperText: form[formField].validation.required.message,
        };
      }
    });

    if (Object.keys(errors).length === 0) {
      return null;
    }

    return errors;
  },

  /**
   * Retrieves form values from the specified form and form data
   * @param {string} formId - the ID of the form to retrieve values from
   * @param {dw.web.FormGroup} formData - the form data to retrieve values from
   * @returns {Object} an object containing the form values
   */
  retrieveFormValues: (formId, formData) => {
    const form = require(`./${formId}`);

    if (!form) {
      return null;
    }

    const formValues = {};

    Object.keys(form).forEach((formField) => {
      const fieldValue = formData.get(formField);
      formValues[formField] = fieldValue;
    });

    return formValues;
  },
};
