import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { KAKAO_MAP_APP_KEY } from "../../config/config";

const divBtnOpt = {
  width: "50px",
  height: "50px",
  position: "fixed",
  top: "100px",
  zIndex: "10"
};

const App = () => {
  const [map, setMap] = useState(null);
  const [markerArr, setMarkerArr] = useState([]);
  const [locationArr, setLocationArr] = useState([]);

  const getLocation = async id => {
    setLocationArr([
      { mapX: 127.053617, mapY: 37.506502 },
      { mapX: 127.053717, mapY: 37.506502 },
      { mapX: 127.053517, mapY: 37.506402 }
    ]);
  };

  const createMap = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}&autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7
        };
        const createdMap = new kakao.maps.Map(container, options);

        setMap(createdMap);
      });
    };
  };

  const createMarker = () => {
    const { kakao } = window;
    const tempArr = [];
    locationArr.forEach(e => {
      tempArr.push(
        new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(e.mapY, e.mapX)
        })
      );
    });
    setMarkerArr(tempArr);
  };

  const deleteMarker = () =>
    markerArr.forEach(e => {
      e.setMap(null);
    });

  useEffect(() => {
    getLocation(1); // location 정보 fetch
    createMap();
  }, []);

  // marker 생성 + 표시
  useEffect(() => {
    map && locationArr.length && createMarker();
  }, [map, locationArr]);

  return (
    <div className="App">
      <Button
        onClick={() => getLocation(2)}
        style={{ ...divBtnOpt, backgroundColor: "red", left: "100px" }}
      />
      <Button
        onClick={deleteMarker}
        style={{ ...divBtnOpt, backgroundColor: "blue", left: "150px" }}
      />
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  );
};

export default App;
