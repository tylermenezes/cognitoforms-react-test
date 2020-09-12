import React from 'react';
import CognitoForm from '@tylermenezes/cognitoforms-react';


export default () => (
  <>
    <h1>My Demo Page</h1>
    <CognitoForm
      formId={61}
      accountId="7hYXr3TPxk6yIpJxjqVoFQ"
      prefill={{
        Name: {
          First: 'John',
          Last: 'Peter',
        }
      }}
      css="* { color: red !important }"
    />
  </>
);
