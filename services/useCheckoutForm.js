import React, { useState, useEffect } from "react";

function useCheckoutForm(validateForm, submitForm) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubitted] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    console.log("change: ", e.target);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = () => {
    console.log("FORM: ", formValues);
    setErrors(validateForm(formValues));
    setisSubmitting(true);
  };

  // When errors change, submit form
  useEffect(() => {
    // submitForm
    console.log("ERRORS: ", errors);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("submitting");
      setFormSubitted(true);
      submitForm();
    }
  }, [errors]);

  return {
    handleFormChange,
    handleFormSubmit,
    errors,
    formSubmitted,
    formValues,
  };
}

export default useCheckoutForm;
