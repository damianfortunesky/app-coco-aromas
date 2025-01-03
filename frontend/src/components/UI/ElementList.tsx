import React from "react";

interface ElementListProps{
    label:string;
}

const ElementList: React.FC<ElementListProps> = ({label}) => {
  return (
        <li className="hover:text-rosa cursor-pointer">
          <a href="#home">{label}</a>
        </li>
  );
};

export default ElementList;
