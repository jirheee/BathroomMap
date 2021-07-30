import Map from "./components/MapContainer/Map";
import SearchBox from "./components/Searchbox/Searchbox";

const App = () => {
  return (
    <>
      <SearchBox maxWidth="600px">Search</SearchBox>
      <Map />
    </>
  );
};

export default App;
