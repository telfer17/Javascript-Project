use solarsystem

db.dropDatabase();

db.planet_info.insertMany( [
  {
    name: "Mercury",
    position: 1,
    orbit: "87.97 days",
    surfaceArea: "7.48×107 km2",
    volume: "6.083×1010 km3",
    mass: "3.3011×1023 kg",
    image: '/images/mercury.png'
  },

  {
    name: "Venus",
    position: 2,
    orbit: "224.7 earth days",
    surfaceArea: "4.6023×108 km2",
    volume: "9.2843×1011 km3",
    mass: "4.8675×1024 kg",
    image: '/images/venus.png'
  },

  {
    name: "Earth",
    position: 3,
    orbit: "365.26 Earth days",
    surfaceArea: "510072000 km2",
    volume: "	1.08321×1012 km3",
    mass: "5.97237×1024 kg",
    image: '/images/earth.png'
  },

  {
    name: "Mars",
    position: 4,
    orbit: "686.97 Earth days",
    surfaceArea: "144798500 km2",
    volume: "1.6318×1011 km3",
    mass: "6.4171×1023 kg",
    image: '/images/mars.png'
  },

  {
    name: "Jupiter",
    position: 5,
    orbit: "4,332.59 Earth days",
    surfaceArea: "6.1419×1010 km2",
    volume: "1.4313×1015 km3",
    mass: "1.8982×1027 kg",
    image: '/images/jupiter.png'
  },

  {
    name: "Saturn",
    position: 6,
    orbit: "10,759.22 Earth days",
    surfaceArea: "4.27×1010 km2",
    volume: "8.2713×1014 km3",
    mass: "5.6834×1026 kg ",
    image: '/images/saturn.png'
  },

  {
    name: "Uranus",
    position: 7,
    orbit: "30,688.5 Earth days",
    surfaceArea: "8.1156×109 km2",
    volume: "6.833×1013 km3",
    mass: "(8.6810±0.0013)×1025 kg",
    image: '/images/uranus.png'
  },

  {
    name: "Neptune",
    position: 8,
    orbit: "60,182 Earth days",
    surfaceArea: "7.6183×109 km2",
    volume: "6.254×1013 km3",
    mass: "1.02413×1026 kg",
    image: '/images/neptune.png'
  }
]);
