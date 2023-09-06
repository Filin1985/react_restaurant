import { Button } from "../Button/component";

export const Tab = ({ title, onTabSelect, className }) => {
  return (
    <Button className={className} onClick={onTabSelect}>
      {title}
    </Button>
  );
};
