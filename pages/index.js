import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox';

import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../styles/KitDigital.module.css';

export default function Home() {
  const [campuses, setCampuses] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState(null);
  const [places, setPlaces] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    fetch('/data/campuses.json')
      .then((res) => res.json())
      .then((data) => setCampuses(data))
      .catch((err) => console.error('Failed to load campuses', err));
  }, []);

  useEffect(() => {
    if (!selectedCampus) return;
    fetch(`/data/places/${selectedCampus.id}.json`)
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .catch((err) => console.error('Failed to load places', err));
  }, [selectedCampus]);

  useEffect(() => {
    if (!selectedCampus || !mapRef.current) return;
    const map = mapRef.current.getMap();
    if (selectedCampus.bbox) {
      map.fitBounds(selectedCampus.bbox, { padding: 40 });
    } else if (selectedCampus.center) {
      map.flyTo({ center: selectedCampus.center, zoom: 16 });
    }
  }, [selectedCampus]);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        {campuses.map((c) => (
          <div
            key={c.id}
            className={styles.card}
            onClick={() => setSelectedCampus(c)}
          >
            <img src={c.imageUrl} alt={c.name} className={styles.thumb} />
            <span>{c.name}</span>
          </div>
        ))}
      </aside>
      <div className={styles.mapWrapper}>
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{ longitude: -70.651, latitude: -33.441, zoom: 13 }}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          <NavigationControl position="top-left" />
          {places.map((p) => (
            <Marker
              key={p.id}
              longitude={p.coordinates[0]}
              latitude={p.coordinates[1]}
            >
              <div className={styles.marker} />
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}
