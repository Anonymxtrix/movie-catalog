import { useEffect, useRef, useState } from "react";
import FilterIcon from "@/components/FilterIcon.js";

const Multiselect = (props) => {
  const { className, buttonLabel, options, onChange } = props;
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(options.map(() => true));

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    const selectedOptions = options.filter((_, index) => isChecked[index]);
    onChange(selectedOptions);
  }, [isChecked]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleCheckbox = (index) => {
    setIsChecked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className={`relative ${className}`}>
      <button
        className="flex bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded"
        onClick={handleToggleMenu}
      >
        <FilterIcon className="mr-2" />
        {buttonLabel}
      </button>
      {isOpen && (
        <div
          className="absolute left-0 w-40 mt-2 py-2 bg-white border border-gray-200 rounded-lg shadow-md"
          ref={menuRef}
        >
          {options.map((option, index) => {
            return (
              <div
                className="block px-4 py-2 z-50 content-center cursor-pointer hover:bg-gray-100"
                key={index}
                onClick={() => handleToggleCheckbox(index)}
              >
                <input
                  className="w-4 h-4 translate-y-0.5 rounded-lg cursor-pointer"
                  type="checkbox"
                  checked={isChecked[index]}
                  onChange={() => handleToggleCheckbox(index)}
                  onClick={() => handleToggleCheckbox(index)}
                  onKeyUp={(event) => {
                    if (event.key == "Enter") handleToggleCheckbox(index);
                  }}
                />
                <label className="ml-2 cursor-pointer">{option}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Multiselect;
