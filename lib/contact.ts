export const contact = {
  phones: [
    { display: '97774 66601', tel: '+919777466601' },
    { display: '83691 20373', tel: '+918369120373' },
    { display: '84528 23542', tel: '+918452823542' },
  ],
  phonesDisplay: '97774 66601 / 83691 20373 / 84528 23542',
  phonesDisplayIntl: '+91 97774 66601 / +91 83691 20373 / +91 84528 23542',
  primaryPhone: { display: '97774 66601', tel: '+919777466601' },
  email: 'anshika.ccl@gmail.com',
  address: {
    full: 'H. No. 1222, Flat 07, Bldg. No. A/5, Shree Dattanagari Complex, Pipeline Road, Purna, Bhiwandi – 421302',
    short: 'Shree Dattanagari Complex, Pipeline Road, Purna, Bhiwandi – 421302',
    city: 'Bhiwandi, Maharashtra',
    pincode: '421302',
  },
  location: {
    lat: 19.24368,
    lng: 73.01838,
  },
  mapEmbedUrl:
    'https://maps.google.com/maps?q=19.24368,73.01838+(Anshika+Logistics+-+Shree+Dattanagari+Complex,+Purna,+Bhiwandi)&z=16&hl=en&output=embed',
  mapDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Shree+Dattanagari+Complex,+Pipeline+Road,+Purna,+Bhiwandi,+Maharashtra+421302',
  hours: '24/7 Available',
  whatsapp: {
    number: '919777466601',
    url: 'https://wa.me/919777466601?text=Hi%20Anshika%20Logistics%2C%20I%27d%20like%20a%20quote%20for%20cold-chain%20transport.',
  },
} as const;
