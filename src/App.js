import newBathroomBtn from "./components/NewBathroomButton/NewBathroomButton";
import { LoginModal } from "./components/LoginModal/LoginModal";
import Map from "./components/MapContainer/Map";
import SearchBox from "./components/Searchbox/Searchbox";

const App = () => {
  return (
    <>
      <newBathroomBtn />
      <LoginModal />
      <SearchBox maxWidth="600px">Search</SearchBox>
      <Map />
    </>
  );
};

export default App;
