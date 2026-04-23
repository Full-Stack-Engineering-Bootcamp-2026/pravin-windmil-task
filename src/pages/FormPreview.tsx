import FormElement from '@/components/forms/FormElement'
import FormValidation from '@/components/forms/FormValidationComp'
import FormWithButton from '@/components/forms/FormWithButton'
import FormWithIcon from '@/components/forms/FormWithIcon'
import React from 'react'

function FormPreview() {
  return (
    <div className='flex flex-col gap-2'>
        <FormElement/>
        <FormValidation/>
        <FormWithIcon/>
        <FormWithButton/>

    </div>
  )
}

export default FormPreview