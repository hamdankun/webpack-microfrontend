import React, { useContext } from "react";

const HistoryContext = React.createContext(null);

export const useHistoryContext = () => useContext(HistoryContext);

export default HistoryContext;
