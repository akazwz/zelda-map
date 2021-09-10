import L from 'leaflet';
import '../style/zelda-map.css';
import { useEffect } from 'react';
import { linkIcon, towerIcon, townIcon, korokIcon, instructions } from '../data/icons/index';
import tower from '../data/locations/tower';
import town from '../data/locations/town';
import korok from '../data/locations/korok';

const ZeldaMap = () => {
    let myMap;
    let timer;
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

    const handleBtnTownOnClick = () => {
        // eslint-disable-next-line array-callback-return
        town.map((data) => {
            const marker = L.marker(data.coordinates, {
                icon: townIcon,
                draggable: false,
            });
            marker.addTo(myMap).bindTooltip(data.name);
        });
    };

    const handleBtnKorokOnClick = () => {
        // eslint-disable-next-line array-callback-return
        korok.map((data) => {
            const marker = L.marker(data.coordinates, {
                icon: korokIcon,
                draggable: false,
            });
            marker.addTo(myMap).bindTooltip(instructions[data.instructionType]);
        });
    };

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

    useEffect(() => {
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
        myMap.on('click', handleMapOnClick);
    }, []);

    return (
        <>
            <div id='map' className='leaflet-container'>
            </div>
            <div>
                <button onClick={handleBtnTowerOnClick}>tower</button>
                <button onClick={handleBtnTownOnClick}>town</button>
                <button onClick={handleBtnKorokOnClick}>korok</button>
            </div>
        </>
    );
}

export default ZeldaMap;
