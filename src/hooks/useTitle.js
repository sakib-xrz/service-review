import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Hamid Ali Photography`;
  }, [title]);
};
export default useTitle;
