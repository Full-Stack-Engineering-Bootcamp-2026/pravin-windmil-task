import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const schema = z.object({
  length: z.string().min(20, "Your password is too short."),
  strength: z
    .string()
    .min(8, "Must be at least 8 characters.")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Must contain at least one number.")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character."),
});

type FormValues = z.infer<typeof schema>;

export default function FormValidation() {
  const { control } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      length: "Jane Doe",
      strength: "Jane Doe",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <div className="p-2  bg-card rounded-md">
    <form className=" max-w-lg">
      <Controller
        control={control}
        name="length"
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Password Length Check</FieldLabel>
            <Input {...field} />
            {fieldState.error && (
              <FieldError>{fieldState.error.message}</FieldError>
            )}
          </Field>
        )}
      />
      <Controller
        control={control}
        name="strength"
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Password Strength Check</FieldLabel>
            <Input {...field} />
            {fieldState.error && (
              <FieldError  className="  text-green-500">{fieldState.error.message}</FieldError>
            )}
          </Field>
        )}
      />
    </form>
    </div>
  );
}
