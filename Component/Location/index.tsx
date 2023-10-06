"use client";
import React, { useState, useEffect, useMemo } from "react";
import styles from "./styles.module.css";
import LocationSvg from "../SVGS/locationSvg";
import {
  Autocomplete,
  GoogleMap,
  Marker,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

const Location = ({ onchange }: { onchange: any }) => {
  const [showMap, setShowMap] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<any>();
  const [longitude, setLongitude] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const [autocomplete, setAutocomplete] = useState<any>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBX2nIf0JcfYqlq3ZZ-C3sDG5g9zZ-p0Lk",
    libraries: ["places"],
  });
  useEffect(() => {
    if (navigator) {
      navigator?.geolocation?.getCurrentPosition(
        (position) => {
          setLatitude(position?.coords?.latitude);
          setLongitude(position?.coords?.longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
    // console.log(latitude);
  }, []);
  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place) {
        if (place.geometry && place.geometry.location) {
          const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          console.log(location);
          setLatitude(location.lat);
          setLongitude(location.lng);
          setMarker(location);
        }
      }
    }
  };

  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);

  const containerStyle = {
    width: "557px",
    height: "607px",
    borderRadius: "10px",
  };

  return (
    <>
      {showMap ? (
        <div>
          <div>
            <div className={styles.App}>
              j
              {!isLoaded ? (
                <h1>Loading...</h1>
              ) : (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  mapContainerClassName={styles.mapContainer}
                  center={center}
                  zoom={18}
                >
                  {marker && <Marker position={marker} />}
                  <Autocomplete
                    onPlaceChanged={onPlaceChanged}
                    onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                  >
                    <input
                      className={styles.googleMaps}
                      onChange={onchange}
                      type="text"
                      placeholder="Enter a location"
                    />
                  </Autocomplete>
                </GoogleMap>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.loca} onClick={() => setShowMap(true)}>
          <p>Farm Location</p>
          <div>
            <input placeholder="Choose...." type="text" />
            <LocationSvg />
          </div>
        </div>
      )}
    </>
  );
};

export default Location;
