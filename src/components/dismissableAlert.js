import React, { useState } from 'react';
import { Alert } from "react-bootstrap"

function DismissableAlert({heading, children, variant}) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{heading}</Alert.Heading>
        {children ? children : null}
      </Alert>
    );
  } else {
    return (<></>)
  }
}

export default DismissableAlert
