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

const Marker = ({ mapX, mapY, map }) => {
  const { kakao } = window;
  //FIXME: Got this Icon from https://www.iconfinder.com/icons/2710199/bath_bathroom_lady_room_map_marker_toilet_wash_wc_pointer_icon
  const imageSrc =
    "https://cdn0.iconfinder.com/data/icons/map-markers-2-1/512/xxx023-1024.png";
  const imageSize = new kakao.maps.Size(54, 59);

  const marker = new kakao.maps.Marker({
    map,
    position: new kakao.maps.LatLng(mapY, mapX),
    image: new kakao.maps.MarkerImage(imageSrc, imageSize)
  });

  const iwContent = '<div style="padding:5px;">Hello World!</div>';

  const infowindow = new kakao.maps.InfoWindow({
    content: iwContent
  });

  kakao.maps.event.addListener(marker, "mouseover", function () {
    infowindow.open(map, marker);
  });

  kakao.maps.event.addListener(marker, "mouseout", function () {
    infowindow.close();
  });

  return marker;
};

const Map = () => {
  const [map, setMap] = useState(null);
  const [markerArr, setMarkerArr] = useState([]);
  const [locationArr, setLocationArr] = useState([]);

  const getLocation = async id => {
    setLocationArr([{ mapX: 127.053617, mapY: 37.506502 }]);
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
    const tempArr = [];
    locationArr.forEach(e => {
      const marker = Marker({ mapX: e.mapX, mapY: e.mapY, map });
      tempArr.push(marker);
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
        style={{ ...divBtnOpt, left: "100px" }}
      >
        C
      </Button>
      <Button
        variant="danger"
        onClick={deleteMarker}
        style={{ ...divBtnOpt, left: "150px" }}
      >
        R
      </Button>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  );
};

export default Map;
