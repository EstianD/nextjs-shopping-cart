import React from "react";

function Notification({ cart, formValues }) {
  return (
    <div>
      <h2>
        Thank you for your order {formValues.firstName} {formValues.lastName}
      </h2>
    </div>
  );
}

export default Notification;
