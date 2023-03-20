import { useFormikContext } from "formik";
import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(withSubmit = false) {
  const { submitForm } = useFormikContext();
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && ref.current.contains(event.target as Node)) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
      withSubmit && isClicked && submitForm();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isClicked, setIsClicked };
}
