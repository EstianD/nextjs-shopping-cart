import React, { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import useCheckoutForm from "../../services/useCheckoutForm";
import validateForm from "../../services/validateForm";
import Notification from "./Notification";

function index() {
  const { state, dispatch } = useContext(DataContext);

  const { cart } = state;

  const submitForm = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const {
    handleFormChange,
    handleFormSubmit,
    errors,
    formSubmitted,
    formValues,
  } = useCheckoutForm(validateForm, submitForm);

  console.log("CHECKOUT: ", state);
  console.log("SUBMITTED: ", formSubmitted);

  const renderCheckoutForm = () => {
    if (!formSubmitted) {
      return (
        <>
          <form>
            <label>First Name:</label>
            <input onChange={handleFormChange} type="text" name="firstName" />
            <label>Last Name:</label>
            <input onChange={handleFormChange} type="text" name="lastName" />
            <label>Mobile:</label>
            <input onChange={handleFormChange} type="text" name="mobile" />
            <label>Email</label>
            <input onChange={handleFormChange} type="text" name="email" />
          </form>
          <button onClick={handleFormSubmit}>Submit</button>
        </>
      );
    }
  };

  const renderNotification = () => {
    if (formSubmitted) {
      return <Notification cart={cart} formValues={formValues} />;
    }
  };

  const renderErrors = () => {
    if (Object.keys(errors).length !== 0) {
      return (
        <div>
          <p>{errors.firstName}</p>
          <p>{errors.lastName}</p>
          <p>{errors.mobile}</p>
          <p>{errors.email}</p>
        </div>
      );
    }
  };

  return (
    <div>
      {renderCheckoutForm()}
      {renderNotification()}
      {renderErrors()}
    </div>
  );
}

export default index;
