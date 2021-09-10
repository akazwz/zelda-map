import L from 'leaflet';
import '../style/zelda-map.css';
import { useEffect } from 'react';
import { linkIcon, towerIcon } from '../data/icons/index';
import tower from '../data/locations/tower';

const ZeldaMap = () => {
    let myMap;
    const handleBtnTowerOnClick = () => {
        // eslint-disable-next-line array-callback-return
        tower.map((data) => {
            const marker = L.marker(data.coordinates, {
                icon: towerIcon,
                draggable: false,
            });
            marker.addTo(myMap).bindTooltip(data.name);
        });
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        myMap = null;
        let timer;
        const maxBounds = [
            [0, -176.59],
            [85.455, 38]
        ];
        const position = [70.505, -75.09];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        myMap = L.map('map', {
            renderer: L.canvas(),
            preferCanvas: true,
            attributionControl: false,
            center: position,
            zoom: 3,
            layers: [
                L.tileLayer('/images/tiles/{z}/{x}/{y}.png')
            ],
            maxBounds: maxBounds,
            doubleClickZoom: false,
        });
        myMap.setMaxZoom(6);
        myMap.setMinZoom(3);
        const handleMapOnClick = (e) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const latLng = e.latlng;
                const marker = L.marker([latLng.lat, latLng.lng], {
                    icon: linkIcon,
                    draggable: true,
                });
                marker.addTo(myMap);
                const handleMarkerDbClick = (e) => {
                    clearTimeout(timer);
                    console.log(e);
                    marker.addTo(myMap).bindTooltip('this is tooltip').openTooltip();
                };
                marker.on('dblclick', handleMarkerDbClick);
            }, 250);
        };
        myMap.on('click', handleMapOnClick);
    }, []);

    return (
        <>
            <div id='map' className='leaflet-container'>
            </div>
            <div>
                <button onClick={handleBtnTowerOnClick}>tower</button>
            </div>
        </>
    );
}

export default ZeldaMap;
