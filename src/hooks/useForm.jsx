import React, { useState } from 'react'


const validate = {
  email: {
    regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Preencha um email válido',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números'
  }
}

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validateType(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (validate[type] && !validate[type].regex.test(value)) {
      setError(validate[type].message)
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({target}) {
    if (error) validateType(target.value)
    setValue(target.value);
  }


  return {
    value,
    setValue,
    onChange,
    error,
    validateType: () => validateType(value),
    onBlur: () => validateType(value),
  }
}

export default useForm