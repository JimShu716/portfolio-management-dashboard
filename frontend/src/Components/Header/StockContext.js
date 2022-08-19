import {createContext} from "react";

const StockContext = createContext({
    StockSymbol: "",
    setStockSymbol: () => {}
});

export default StockContext;