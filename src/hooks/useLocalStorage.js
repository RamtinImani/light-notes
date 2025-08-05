import { useEffect } from "react";

export default function useLocalStorage(key, data) {
  //! save data in localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);
}
