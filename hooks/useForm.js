
import React, { useState } from 'react'

/**
 * @function useForm
 * @param {array} requiredInputs -> Lista dei campi del form obbligatori.
 */
export default function useForm(requiredInputs) {
  const [formValues, setFormValues] = useState({})
  const [formValid, setFormValid] = useState(false)

  const setFormValue = (name, value) => {
    const newFormValues = {...formValues}
    newFormValues[name] = value
    setFormValues(newFormValues)

    const notEmptyKeys = Object.keys(newFormValues).filter((key) => newFormValues[key] !== '')


    setFormValid(requiredInputs.every((el) => notEmptyKeys.includes(el)))
  }

  const formData = {
    values: formValues,
    valid: formValid
  }

  return [formData, setFormValue]
}