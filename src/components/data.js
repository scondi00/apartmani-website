const data = [
  {
    id: 1,
    title: "Apartman Sunce",
    image:
      "https://i.croatiaimages.com/private-accommodation/1005/a-1005-a/mastrinka-apartment-living-room-1.jpg",
    capacity: 4,
    beachDistanceInMeters: 250,
    amenities: {
      airConditioning: true,
      parkingSpace: true,
      pets: false,
      pool: false,
      wifi: true,
      tv: true,
    },
    pricelistInEuros: [
      {
        intervalStart: "2024-05-01",
        intervalEnd: "2024-06-01",
        pricePerNight: 50,
      },
      {
        intervalStart: "2024-06-01",
        intervalEnd: "2024-07-01",
        pricePerNight: 60,
      },
      {
        intervalStart: "2024-07-01",
        intervalEnd: "2024-09-01",
        pricePerNight: 80,
      },
      {
        intervalStart: "2024-09-01",
        intervalEnd: "2024-10-01",
        pricePerNight: 60,
      },
    ],
    availableDates: [
      {
        intervalStart: "2024-05-01",
        intervalEnd: "2024-05-23",
      },
      {
        intervalStart: "2024-05-24",
        intervalEnd: "2024-06-07",
      },
      {
        intervalStart: "2024-06-14",
        intervalEnd: "2024-07-03",
      },
      {
        intervalStart: "2024-07-22",
        intervalEnd: "2024-07-29",
      },
      {
        intervalStart: "2024-08-12",
        intervalEnd: "2024-08-30",
      },
      {
        intervalStart: "2024-09-03",
        intervalEnd: "2024-10-01",
      },
    ],
  },
  {
    id: 2,
    title: "Villa Antonio",
    image:
      "https://i.croatiaimages.com/private-accommodation/4329/dalmatia-holiday-house-with-pool-property-1.jpg",
    capacity: 8,
    beachDistanceInMeters: 75,
    amenities: {
      airConditioning: true,
      parkingSpace: true,
      pets: true,
      pool: true,
      wifi: true,
      tv: true,
    },
    pricelistInEuros: [
      {
        intervalStart: "2024-01-01",
        intervalEnd: "2024-07-01",
        pricePerNight: 220,
      },
      {
        intervalStart: "2024-07-01",
        intervalEnd: "2024-09-01",
        pricePerNight: 300,
      },
      {
        intervalStart: "2024-09-01",
        intervalEnd: "2024-01-01",
        pricePerNight: 220,
      },
    ],
    availableDates: [
      {
        intervalStart: "2024-06-25",
        intervalEnd: "2024-07-03",
      },
      {
        intervalStart: "2024-07-16",
        intervalEnd: "2024-07-17",
      },
      {
        intervalStart: "2024-08-19",
        intervalEnd: "2024-08-26",
      },
      {
        intervalStart: "2024-09-15",
        intervalEnd: "2024-11-13",
      },
      {
        intervalStart: "2024-11-15",
        intervalEnd: "2024-01-01",
      },
    ],
  },
  {
    id: 3,
    title: "Hotel Vicario Superior Suite",
    image:
      "https://i.croatiaimages.com/private-accommodation/20604/dalmatia-rooms-with-pool-courtyard-4.jpg",
    capacity: 2,
    beachDistanceInMeters: 20,
    amenities: {
      airConditioning: true,
      parkingSpace: true,
      pets: false,
      pool: true,
      wifi: true,
      tv: true,
    },
    pricelistInEuros: [
      {
        intervalStart: "2024-01-01",
        intervalEnd: "2024-01-03",
        pricePerNight: 280,
      },
      {
        intervalStart: "2024-01-03",
        intervalEnd: "2024-05-17",
        pricePerNight: 124,
      },
      {
        intervalStart: "2024-05-17",
        intervalEnd: "2024-06-14",
        pricePerNight: 157,
      },
      {
        intervalStart: "2024-06-14",
        intervalEnd: "2024-06-28",
        pricePerNight: 198,
      },
      {
        intervalStart: "2024-06-28",
        intervalEnd: "2024-07-23",
        pricePerNight: 241,
      },
      {
        intervalStart: "2024-07-23",
        intervalEnd: "2024-08-11",
        pricePerNight: 277,
      },
      {
        intervalStart: "2024-08-11",
        intervalEnd: "2024-08-27",
        pricePerNight: 252,
      },
      {
        intervalStart: "2024-08-27",
        intervalEnd: "2024-09-29",
        pricePerNight: 187,
      },
      {
        intervalStart: "2024-09-29",
        intervalEnd: "2024-12-30",
        pricePerNight: 133,
      },
      {
        intervalStart: "2024-12-30",
        intervalEnd: "2024-01-01",
        pricePerNight: 280,
      },
    ],
    availableDates: [
      {
        intervalStart: "2024-06-26",
        intervalEnd: "2024-07-01",
      },
      {
        intervalStart: "2024-07-02",
        intervalEnd: "2024-07-04",
      },
      {
        intervalStart: "2024-07-16",
        intervalEnd: "2024-07-19",
      },
      {
        intervalStart: "2024-07-22",
        intervalEnd: "2024-07-28",
      },
      {
        intervalStart: "2024-08-12",
        intervalEnd: "2024-08-23",
      },
      {
        intervalStart: "2024-08-25",
        intervalEnd: "2024-09-03",
      },
      {
        intervalStart: "2024-09-11",
        intervalEnd: "2024-10-26",
      },
      {
        intervalStart: "2024-10-30",
        intervalEnd: "2024-12-31",
      },
    ],
  },
  {
    id: 4,
    title: "Apartman Mirko",
    image:
      "https://i.croatiaimages.com/private-accommodation/2919/a-2919-a/postira-apartment-terrace-1.jpg",
    capacity: 3,
    beachDistanceInMeters: 120,
    amenities: {
      airConditioning: false,
      parkingSpace: false,
      pets: false,
      pool: false,
      wifi: false,
      tv: false,
    },
    pricelistInEuros: [
      {
        intervalStart: "2024-06-01",
        intervalEnd: "2024-07-01",
        pricePerNight: 20,
      },
      {
        intervalStart: "2024-07-01",
        intervalEnd: "2024-09-01",
        pricePerNight: 30,
      },
      {
        intervalStart: "2024-09-01",
        intervalEnd: "2024-10-01",
        pricePerNight: 20,
      },
    ],
    availableDates: [
      {
        intervalStart: "2024-06-01",
        intervalEnd: "2024-07-04",
      },
      {
        intervalStart: "2024-07-29",
        intervalEnd: "2024-08-05",
      },
      {
        intervalStart: "2024-08-14",
        intervalEnd: "2024-08-17",
      },
      {
        intervalStart: "2024-08-31",
        intervalEnd: "2024-09-02",
      },
      {
        intervalStart: "2024-09-01",
        intervalEnd: "2024-09-30",
      },
    ],
  },
  {
    id: 5,
    title: "Cozy town center apartment with wi-fi and air conditioning",
    image:
      "https://i.croatiaimages.com/private-accommodation/21122/a-21122-a/zagreb-apartment-living-room-1.jpg",
    capacity: 2,
    beachDistanceInMeters: null,
    amenities: {
      airConditioning: true,
      parkingSpace: false,
      pets: false,
      pool: false,
      wifi: true,
      tv: true,
    },
    pricelistInEuros: [
      {
        intervalStart: "2024-01-01",
        intervalEnd: "2025-01-01",
        pricePerNight: 40,
      },
    ],
    availableDates: [
      {
        intervalStart: "2024-06-02",
        intervalEnd: "2024-06-11",
      },
      {
        intervalStart: "2024-06-12",
        intervalEnd: "2024-06-21",
      },
      {
        intervalStart: "2024-06-24",
        intervalEnd: "2024-06-25",
      },
      {
        intervalStart: "2024-06-26",
        intervalEnd: "2024-06-27",
      },
      {
        intervalStart: "2024-07-14",
        intervalEnd: "2024-07-18",
      },
      {
        intervalStart: "2024-08-01",
        intervalEnd: "2024-08-06",
      },
      {
        intervalStart: "2024-09-02",
        intervalEnd: "2024-09-13",
      },
      {
        intervalStart: "2024-09-24",
        intervalEnd: "2024-10-29",
      },
      {
        intervalStart: "2024-11-01",
        intervalEnd: "2024-11-18",
      },
      {
        intervalStart: "2024-12-06",
        intervalEnd: "2024-12-07",
      },
    ],
  },
];

export default data;
