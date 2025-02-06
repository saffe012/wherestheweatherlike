import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

interface WeatherOptionProps {
  selection?: string;
  choices: string[];
  onChange: (event: any) => void;
  classname: string;
}

function WeatherOption({
  selection = "",
  choices,
  onChange,
  classname,
}: WeatherOptionProps) {
  const [selectedSelection, setSelectedSelection] = useState(selection);

  return (
    <DropdownButton
      className={classname}
      key={"ddbutton"}
      variant="secondary"
      size={window.innerWidth > 768 ? "lg" : "sm"}
      title={selectedSelection}
    >
      {choices.map((item, index) => [
        <Dropdown.Item
          key={`item-${index}`}
          onClick={() => {
            onChange(item);
            setSelectedSelection(item);
          }}
        >
          {item}
        </Dropdown.Item>,
        // Add a divider after Doesn't Matter item before months
        index === 0 && <Dropdown.Divider key={`divider-${index}`} />,
      ])}
    </DropdownButton>
  );
}

export default WeatherOption;
