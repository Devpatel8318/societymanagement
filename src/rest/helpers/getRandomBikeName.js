const bikeNames = [
    'Honda CBR 1000RR',
    'Yamaha YZF R1',
    'Suzuki GSX-R1000',
    'Kawasaki Ninja ZX-10R',
    'Ducati Panigale V4',
    'BMW S1000RR',
    'KTM RC 390',
    'Harley-Davidson Sportster Iron 883',
    'Royal Enfield Classic 350',
    'Bajaj Pulsar NS200',
    'TVS Apache RR 310',
    'Triumph Street Triple',
    'Yamaha MT-09',
    'Honda CB Hornet 160R',
    'KTM Duke 390',
    'Suzuki Hayabusa',
    'Yamaha FZ-S V3.0',
    'Harley-Davidson Fat Boy',
    'Ducati Monster 821',
    'Kawasaki Z900',
]

const getRandomBikeName = () => {
    return bikeNames[Math.floor(Math.random() * bikeNames.length)]
}

export default getRandomBikeName
