import { Checkbox } from "../ui/checkbox";

type CheckBoxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

const CheckBoxInput = ({ name, label, defaultChecked }: CheckBoxInputProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className="text-sm leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};
export default CheckBoxInput;
