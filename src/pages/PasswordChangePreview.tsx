import { PasswordChangeForm } from "@/components/templates/PasswordChange";
import { SignupForm } from "@/components/templates/SignupTemplate";
import TemplatePage from "@/components/templates/TemplatePage";
import React from "react";

function PasswordChangePreview() {
  return (
    <TemplatePage
      color={"bg-gradient-to-br from-teal-300 to-sky-300"}
      children={<PasswordChangeForm />}
    />
  );
}

export default PasswordChangePreview;
