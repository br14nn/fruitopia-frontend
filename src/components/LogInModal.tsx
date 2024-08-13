import { forwardRef } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import Text from "./ui/Text";

const LogInModal = forwardRef<HTMLFormElement>(({}, ref) => {
  return (
    <form
      className="fixed bottom-0 left-0 right-0 top-0 z-[999] m-auto flex h-fit w-full max-w-[250px] flex-col items-center rounded-md bg-secondary-default p-4 sm:max-w-[300px]"
      ref={ref}
    >
      <Text className="text-md font-bold text-primary-default">Log In</Text>

      <div className="mt-4 flex w-full flex-col gap-1">
        <Label htmlFor="emailInput" className="text-primary-default">
          Email
        </Label>
        <Input id="emailInput" />
      </div>

      <div className="mt-2 flex w-full flex-col gap-1">
        <Label htmlFor="passwordInput" className="text-primary-default">
          Password
        </Label>
        <Input id="passwordInput" type="password" />
      </div>

      <Button className="mt-4 h-8 leading-none">Log In</Button>
    </form>
  );
});

export default LogInModal;
