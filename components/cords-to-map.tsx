"use client";
import Map, { Layer, Source } from "react-map-gl";


interface CordsToMapProps {
  cords: number[];
  area: number;
  name: string;
}



const CordsToMap: React.FC<CordsToMapProps> = ({ cords, area, name }) => {

  return (
    <Map
      mapboxAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      initialViewState={{
        longitude: cords[1],
        latitude: cords[0],
        zoom: area < 600 ? 9 : 4,
      }}
      style={{ width: "100%", height: "100%"}}
      mapStyle="mapbox://styles/mapbox/light-v10"
      attributionControl={false}
    >
      <Source
        name="country_boundaries"
        id="country_boundaries"
        type="vector"
        url="mapbox://mapbox.country-boundaries-v1"
      >
        <Layer
          id="country-boundary-layer"
          source={"country_boundaries"}
          type="fill"
          source-layer="country_boundaries"
          paint={{
            "fill-color": "#619cfa",
            "fill-opacity": 0.2
          }}
          filter={['==', 'iso_3166_1_alpha_3', `${name.toLocaleUpperCase()}`]}
        />
      </Source>
    </Map>
  );
};

export default CordsToMap;
