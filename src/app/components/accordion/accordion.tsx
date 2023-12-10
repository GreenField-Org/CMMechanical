import { AddOutline, ChevronDownOutline } from "react-ionicons";

interface AccordionProps {
  title: string;
  data: string;
  toggleAccordion: () => void;
  isOpen: boolean;
}

export default function Accordion({
  title,
  data,
  toggleAccordion,
  isOpen,
}: AccordionProps) {
  return (
    <div className="border border-t-0 border-l-0 border-b-1 border-r-0 rounded-sm w-full">
      <button
        className="w-full p-4 text-left hover:bg-secondary transition duration-300"
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`float-right transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }  
            transition-transform duration-300`}
        >
          {isOpen ? (
            <ChevronDownOutline
              color={"#00000"}
              title={"close"}
              height="25px"
              width="25px"
            />
          ) : (
            <AddOutline
              color={"#00000"}
              title={"open"}
              height="25px"
              width="25px"
            />
          )}
        </span>
      </button>
      {isOpen && <div className="p-4">{data}</div>}
    </div>
  );
}
