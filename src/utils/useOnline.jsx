import { useState, useEffect } from "react";

function useOnline() {
  let [isOnline, SetisOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      SetisOnline(true);
    });
    window.addEventListener("offline", () => {
      SetisOnline(false);
    });
  }, []);
  return isOnline;
}

export default useOnline;
