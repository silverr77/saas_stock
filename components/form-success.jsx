import { CheckCircledIcon } from "@radix-ui/react-icons";

export const FormSuccess = ({ message }) => {
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald mt-2">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
