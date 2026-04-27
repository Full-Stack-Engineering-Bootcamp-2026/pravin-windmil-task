import { SignupForm } from '@/components/templates/SignupTemplate'
import TemplatePage from '@/components/templates/TemplatePage'
import React from 'react'

function SignupTemplatePreview() {
  return (
   <TemplatePage  color={"bg-gradient-to-t from-sky-300 to-yellow-300"} children={<SignupForm/>}/>
  )
}

export default SignupTemplatePreview