import { useState } from "react"

export default function useGlobalProvider() {
  const [sobre, setSobre] = useState();

  return {
    sobre,
    setSobre,
  };
}