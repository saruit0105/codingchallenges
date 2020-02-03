import React, { useState } from 'react';
import axios from 'axios';

function FormContainer() {
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const updateFN = (event) => {
    setFirst(event.target.value);
  }

  const updateLN = (event) => {
    setLast(event.target.value);
  }

  const validate = () => {
    let isValid = true;
    if (!address || address.length > 50 || address.length < 5) {
      isValid = false;
    } else {
      isValid = true;
    }

    if (lastName.length > 20 || lastName === '') {
      isValid = false;
    } else {
      isValid = true;
    }

    if (firstName.length > 20 || firstName === '') {
      isValid = false;
    } else {
      isValid = true;
    }

    if (isValid === false) {
      setError("Error submitting the form. Please check your fields and try again");
    } else {
      submit();
    }
  }

  const submit = () => {
    const response = await axios.post('https://fakeApi.com', { firstName: firstName, lastName: lastName, address: address })
    // expected response is {
    //   data: {
    //      success: boolean
    //   }
    // }
    if (response['data']['success'] === true) {
      setSuccess(true);
    } else if (response.data.success === false) {
      setError('Looks like there was an issue submitting the form. Please check your fields and try again')
    }
  }

  return (
    <form>
      {!!error && <p style={color: 'red'}>{error}</p>}
{ !!success && <p style={{ color: 'green' }}>{"The form has been successfully submitted!"}</p> }
<input
  type="text"
  value={firstName}
  onChange={updateFN}
/>
  <input
    type="text"
    value={lastName}
  />
  <input
    type="text"
    value={address}
    onChange={setAddress}
  />
  <button type="submit" onChange={validate}>
    Submit
      </button>
    </form >
  )
}