import Leaflet from 'leaflet';

export const shrineIcon = Leaflet.icon({
    className: 'pulsing-icon',
    iconSize: [27, 26],
    iconUrl: '/images/icons/shrine.png'
});

export const stableIcon = Leaflet.icon({
    iconSize: [30, 30],
    iconUrl: '/images/icons/stable.png'
});

export const towerIcon = Leaflet.icon({
    className: 'blue-glow',
    iconSize: [28, 38],
    iconUrl: '/images/icons/tower.png'
});

export const townIcon = Leaflet.icon({
    iconSize: [30, 30],
    iconUrl: '/images/icons/town.png'
});

export const korokIcon = Leaflet.icon({
    iconSize: [24, 24],
    iconUrl: '/images/icons/korok.png'
});

export const memoryIcon = Leaflet.icon({
    iconSize: [30, 30],
    iconUrl: '/images/icons/memory.png'
});

export const positionIcon = Leaflet.icon({
    iconSize: [30, 30],
    iconUrl: '/images/icons/position.png'
});

export const cuccoIcon = Leaflet.icon({
    iconSize: [30, 30],
    iconUrl: '/images/icons/cucco.png'
});

export const linkIcon = Leaflet.icon({
    iconSize: [32, 32],
    iconUrl: '/images/icons/link.png'
});

export const sword = Leaflet.icon({
    iconSize: [30, 30],
    iconUrl: '/images/icons/sword.png'
});

export const mifa = Leaflet.icon({
    iconSize: [30, 30],
    iconUrl: '/images/icons/mifa.png'
});

export const mifaHd = Leaflet.icon({
    iconSize: [30, 30],
    iconUrl: '/images/icons/mifa-hd.png'
});

export const swordWife = Leaflet.icon({
    iconSize: [30, 30],
    iconUrl: '/images/icons/sword-wife.png'
});

export const swordWifeHD = Leaflet.icon({
    iconSize: [30, 30],
    iconUrl: '/images/icons/sword-wife-hd.png'
});

export const instructions = [
    /*  0 */  "Yahaha",
    /*  1 */ "Hiding Spot (usually under a rock but sometimes you need to burn leaves, melt ice or move a large object first)",
    /*  2 */ "Target Circles (throw rock through circle, magnesis ball on chain into stump, dive through a ring of flowers, etc.)",
    /*  3 */ "Yellow Flowers (follow a trail of disappearing flowers, touch flowers in the proper order, etc.)",
    /*  4 */ "Cube Pattern (find a cube nearby and use it to make the block patterns match)",
    /*  5 */ "Examine Sparkles (usually a stationary cloud of leaves and fairy dust but sometimes it is moving and sometimes it is high at the top of a building)",
    /*  6 */ "Timed Race (step on a stump to start the clock then make it to the ring of dots before time runs out)",
    /*  7 */ "Rock Pattern (a large geometric shape made out of rocks is missing at least one rock and needs you to complete it)",
    /*  8 */ "Tree Pattern (a series of fruit trees needs you to remove the extra fruit off one until they all match)",
    /*  9 */ "Fruit Offering (a series of fruit plates is waiting for you to place matching fruit on any of the empty plates)",
    /* 10 */ "Boulders (a large boulder must be moved to a certain position)",
    /* 11 */ "Horse Hurdles (a fence which must be jumped over while riding a horse)",
    /* 12 */ "Archery (a series of targets you must hit with arrows while standing next to a pinwheel)"
];
