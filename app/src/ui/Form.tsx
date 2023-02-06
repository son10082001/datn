import type { FC } from "react";
import type { SubmitHandler, UseFormProps } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";

interface IFormProps extends UseFormProps {
  children: any;
  onSubmit: SubmitHandler<any>;
  className?: string;
  resolver?: any;
}

const Form: FC<IFormProps> = ({
  defaultValues,
  children,
  onSubmit,
  className,
  resolver,
}) => {
  const methods = useForm({ defaultValues, resolver });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
