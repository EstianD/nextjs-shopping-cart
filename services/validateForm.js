function validateForm(formValues) {
  console.log("validate: ", formValues);
  let errors = {};

  // Check firstName
  if (formValues.firstName === "") {
    errors.firstName = "First name cannot be empty!";
  }
  // Check last name
  if (formValues.lastName === "") {
    errors.lastName = "Last name cannot be empty!";
  }
  // Check mobile
  if (formValues.mobile === "") {
    errors.mobile = "mobile numebr cannot be empty!";
  }

  // Check email
  if (formValues.email === "") {
    errors.email = "email cannot be empty!";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      formValues.email
    )
  ) {
    errors.email = "Email address is not valid!";
  }
  return errors;
}

export default validateForm;
