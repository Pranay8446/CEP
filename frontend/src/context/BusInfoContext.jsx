import { useState } from "react"

const { createContext } = require("react")

const tempInfo = [
  {
    "_id": "64f8a1c2e4a1d7b100000001",
    "numberPlate": "Bus 25",
    "startPoint": "Badnera",
    "endPoint": "Kathora",
    "stopes": [
      { "stopName": "Badnera", "arrivalTime": "07:00", "despatureTime": "07:00" },
      { "stopName": "City Market", "arrivalTime": "07:20", "despatureTime": "07:22" },
      { "stopName": "Shegao Na", "arrivalTime": "07:40", "despatureTime": "07:42" },
      { "stopName": "Kathora", "arrivalTime": "08:00", "despatureTime": "08:00" }
    ]
  },
  {
    "_id": "64f8a1c2e4a1d7b100000002",
    "numberPlate": "Bus 12A",
    "startPoint": "Badnera",
    "endPoint": "Navsari",
    "stopes": [
      { "stopName": "Badnera", "arrivalTime": "07:00", "despatureTime": "07:00" },
      { "stopName": "City Market", "arrivalTime": "07:20", "despatureTime": "07:22" },
      { "stopName": "Shegao Na", "arrivalTime": "07:40", "despatureTime": "07:42" },
      { "stopName": "Kathora", "arrivalTime": "08:00", "despatureTime": "08:00" }
    ]
  },
  {
    "_id": "64f8a1c2e4a1d7b100000003",
    "numberPlate": "Bus 42",
    "startPoint": "Amravati University",
    "endPoint": "Old Cotton Market",
    "stopes": [
      { "stopName": "Badnera", "arrivalTime": "07:00", "despatureTime": "07:00" },
      { "stopName": "City Market", "arrivalTime": "07:20", "despatureTime": "07:22" },
      { "stopName": "Shegao Na", "arrivalTime": "07:40", "despatureTime": "07:42" },
      { "stopName": "Kathora", "arrivalTime": "08:00", "despatureTime": "08:00" }
    ]
  },
  {
    "_id": "64f8a1c2e4a1d7b100000004",
    "numberPlate": "Bus 77",
    "startPoint": "Badnera",
    "endPoint": "Kathora",
    "stopes": [
      { "stopName": "Badnera", "arrivalTime": "07:00", "despatureTime": "07:00" },
      { "stopName": "City Market", "arrivalTime": "07:20", "despatureTime": "07:22" },
      { "stopName": "Shegao Na", "arrivalTime": "07:40", "despatureTime": "07:42" },
      { "stopName": "Kathora", "arrivalTime": "08:00", "despatureTime": "08:00" }
    ]
  },
  {
    "_id": "64f8a1c2e4a1d7b100000005",
    "numberPlate": "Bus 08",
    "startPoint": "Sai Nagar",
    "endPoint": "Walgaon Road",
    "stopes": [
      { "stopName": "Badnera", "arrivalTime": "07:00", "despatureTime": "07:00" },
      { "stopName": "City Market", "arrivalTime": "07:20", "despatureTime": "07:22" },
      { "stopName": "Shegao Na", "arrivalTime": "07:40", "despatureTime": "07:42" },
      { "stopName": "Kathora", "arrivalTime": "08:00", "despatureTime": "08:00" }
    ]
  },
  {
    "_id": "64f8a1c2e4a1d7b100000006",
    "numberPlate": "Bus 33B",
    "startPoint": "Murtizapur Road",
    "endPoint": "New Bus Stand",
    "stopes": [
      { "stopName": "Badnera", "arrivalTime": "07:00", "despatureTime": "07:00" },
      { "stopName": "City Market", "arrivalTime": "07:20", "despatureTime": "07:22" },
      { "stopName": "Shegao Na", "arrivalTime": "07:40", "despatureTime": "07:42" },
      { "stopName": "Kathora", "arrivalTime": "08:00", "despatureTime": "08:00" }
    ]
  }
]



const BusInfoContext = createContext()

export const BusInfoProvider = ({children}) => {

  const [busInfo, setBusInfo] = useState(null)

  setBusInfo(tempInfo)

  console.log(busInfo);
  
    return (
        <BusInfoContext.Provider >
          <children />
        </BusInfoContext.Provider>
    )
}