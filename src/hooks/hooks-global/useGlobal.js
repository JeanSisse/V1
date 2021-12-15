import { useContext } from "react";
import GlobalContext from "./useGlobalProvider";

export default function useGlobal() {
  return useContext(GlobalContext);
}

