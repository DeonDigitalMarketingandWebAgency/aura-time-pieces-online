
export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

const stores: StoreLocation[] = [
  {
    id: "ny-flagship",
    name: "New York Flagship",
    address: "520 Madison Avenue",
    city: "New York",
    state: "NY",
    zip: "10022",
    country: "United States",
    phone: "+1 (212) 555-1234",
    email: "newyork@aurawatches.com",
    hours: {
      "Monday": "10:00 AM - 7:00 PM",
      "Tuesday": "10:00 AM - 7:00 PM",
      "Wednesday": "10:00 AM - 7:00 PM",
      "Thursday": "10:00 AM - 7:00 PM",
      "Friday": "10:00 AM - 8:00 PM",
      "Saturday": "10:00 AM - 6:00 PM",
      "Sunday": "12:00 PM - 5:00 PM"
    },
    coordinates: {
      lat: 40.7614,
      lng: -73.9776
    }
  },
  {
    id: "la-beverly",
    name: "Los Angeles - Beverly Hills",
    address: "9570 Wilshire Blvd",
    city: "Beverly Hills",
    state: "CA",
    zip: "90212",
    country: "United States",
    phone: "+1 (310) 555-7890",
    email: "losangeles@aurawatches.com",
    hours: {
      "Monday": "10:00 AM - 6:00 PM",
      "Tuesday": "10:00 AM - 6:00 PM",
      "Wednesday": "10:00 AM - 6:00 PM",
      "Thursday": "10:00 AM - 7:00 PM",
      "Friday": "10:00 AM - 7:00 PM",
      "Saturday": "10:00 AM - 6:00 PM",
      "Sunday": "12:00 PM - 5:00 PM"
    },
    coordinates: {
      lat: 34.0674,
      lng: -118.4016
    }
  },
  {
    id: "chi-mag",
    name: "Chicago - Magnificent Mile",
    address: "835 N Michigan Ave",
    city: "Chicago",
    state: "IL",
    zip: "60611",
    country: "United States",
    phone: "+1 (312) 555-4567",
    email: "chicago@aurawatches.com",
    hours: {
      "Monday": "10:00 AM - 7:00 PM",
      "Tuesday": "10:00 AM - 7:00 PM",
      "Wednesday": "10:00 AM - 7:00 PM",
      "Thursday": "10:00 AM - 8:00 PM",
      "Friday": "10:00 AM - 8:00 PM",
      "Saturday": "10:00 AM - 7:00 PM",
      "Sunday": "11:00 AM - 6:00 PM"
    },
    coordinates: {
      lat: 41.8984,
      lng: -87.6245
    }
  },
  {
    id: "mia-design",
    name: "Miami - Design District",
    address: "151 NE 41st St",
    city: "Miami",
    state: "FL",
    zip: "33137",
    country: "United States",
    phone: "+1 (305) 555-8901",
    email: "miami@aurawatches.com",
    hours: {
      "Monday": "11:00 AM - 7:00 PM",
      "Tuesday": "11:00 AM - 7:00 PM",
      "Wednesday": "11:00 AM - 7:00 PM",
      "Thursday": "11:00 AM - 7:00 PM",
      "Friday": "11:00 AM - 8:00 PM",
      "Saturday": "10:00 AM - 8:00 PM",
      "Sunday": "12:00 PM - 6:00 PM"
    },
    coordinates: {
      lat: 25.8102,
      lng: -80.1929
    }
  },
  {
    id: "sf-union",
    name: "San Francisco - Union Square",
    address: "340 Post St",
    city: "San Francisco",
    state: "CA",
    zip: "94108",
    country: "United States",
    phone: "+1 (415) 555-2345",
    email: "sanfrancisco@aurawatches.com",
    hours: {
      "Monday": "10:00 AM - 7:00 PM",
      "Tuesday": "10:00 AM - 7:00 PM",
      "Wednesday": "10:00 AM - 7:00 PM",
      "Thursday": "10:00 AM - 7:00 PM",
      "Friday": "10:00 AM - 8:00 PM",
      "Saturday": "10:00 AM - 7:00 PM",
      "Sunday": "11:00 AM - 6:00 PM"
    },
    coordinates: {
      lat: 37.7888,
      lng: -122.4074
    }
  }
];

export default stores;
