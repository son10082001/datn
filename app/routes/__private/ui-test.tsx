import Button from "@ui/Button";
import { toast } from "react-toastify";
import * as yup from "yup";
import useYupValidationResolver from "~/src/hooks/useYupValidationResolver";
import { Heart } from "~/src/icons";
import Form from "~/src/ui/Form";
import { PassWordInput, Select, TextInput } from "~/src/ui/Input";
const UiTest = () => {
  const resolver = useYupValidationResolver(
    yup.object().shape({
      username: yup
        .string()
        .trim()
        .min(3, "user name too short")
        .max(256, "user name must be less than 256 characters")
        .label("username"),
      password: yup
        .string()
        .trim()
        .min(3, "password too short")
        .max(50, "password must be less than 50 characters")
        .label("password"),
    })
  );
  const onSubmit = (data: any) => toast.success(JSON.stringify(data));
  return (
    <div className="container mx-auto">
      <div>ui-test</div>
      <div className="flex items-start gap-4">
        <Button className={"w-24"}>2</Button>
        <Button className={"w-24"} iconStart={<Heart />}>
          2
        </Button>
        <Button className={"w-24"} iconEnd={<Heart />} label="2" />
        <Button className={"w-24"} iconEnd={<Heart />} label="4" loading />
        <Button className={"w-24"}>
          <Heart />
        </Button>
      </div>
      <div>typo</div>
      <div>
        <article className="prose">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </div>
      <div>Form</div>
      <div className="mx-auto mt-5 w-1/2">
        <Form onSubmit={onSubmit} className="mx-auto w-1/2" resolver={resolver}>
          <div className="space-y-3">
            <TextInput name="username" />
            <Select name="like" options={["yes", "no"]} />
          </div>
          <PassWordInput name="password" />

          <Button className="mt-8">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default UiTest;
