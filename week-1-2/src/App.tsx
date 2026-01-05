import "./App.css";
import { FruitList } from "./mapping";
import { CapitalizeWords } from "./mapping/CapitalizeWords";
import { ConditionalRender } from "./mapping/ConditionalRender";
import { DoubleNumbers } from "./mapping/DoubleNumbers";
import { FormatPrices } from "./mapping/FormatPrices";
import { FullNames } from "./mapping/FullNames";
import { RankedList } from "./mapping/RankedList";
import { RenderFromData } from "./mapping/RenderFromData";
import { RenderObjects } from "./mapping/RenderObjects";
import { 
  CartTotal,
  CountItems,
  CountOccurences,
  GroupUsers,
  LookUp,
  Stats,
 } from "./reduce";

function App() {
  return (
    <>
      <CapitalizeWords />
      <ConditionalRender />
      <DoubleNumbers />
      <FormatPrices />
      <FruitList />
      <FullNames />
      <RankedList />
      <RenderFromData />
      <RenderObjects />
      <CountItems />
    </>
  );
}

export default App;
