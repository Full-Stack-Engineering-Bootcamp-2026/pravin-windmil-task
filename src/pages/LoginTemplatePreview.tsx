import { LoginForm } from '@/components/templates/LoginTemplate'
import TemplatePage from '@/components/templates/TemplatePage'
import React from 'react'

function LoginTemplatePreview() {
  return (
    <>
    <TemplatePage  color={"bg-gradient-to-t from-orange-300 to-pink-300"} children={<LoginForm/>}/>
    
    </>
  )
}

export default LoginTemplatePreview