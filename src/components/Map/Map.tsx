import clsx from "clsx";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  type MapContainerProps,
} from "react-leaflet";

import PopupComponent, { type PopUpContent } from "./PopupComponent";

import css from "./styles.module.css";
import "leaflet/dist/leaflet.css";

export interface MarkerProps extends PopUpContent {
  coords: [number, number];
}

interface Props extends MapContainerProps {
  markers: MarkerProps[];
  wrapperStyle?: React.CSSProperties;
  wrapperClassName?: string;
}

export default function Map({
  wrapperStyle,
  wrapperClassName,
  zoom = 11,
  markers,
  ...props
}: Props) {
  return (
    <div style={wrapperStyle} className={clsx(css.wrapper, wrapperClassName)}>
      <MapContainer
        zoom={zoom}
        {...props}
        style={{ height: "100%", width: "100%", ...props.style }}
      >
        <TileLayer
          attribution="Yuliia project Booksy."
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(({ coords, ...marker }) => {
          return (
            <Marker key={coords.join("-")} position={coords}>
              <Popup>
                <PopupComponent {...marker} />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
