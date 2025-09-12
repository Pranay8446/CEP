import React, { useState } from "react";

import axios from "axios";
import Sidebar from "../../components/Dashboard/Sidebar";


const AddBus = () => {
  const [numberPlate, setNumberPlate] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [stops, setStops] = useState([
    { stopName: "", arrivalTime: "", departureTime: "" },
  ]);

  // handle stop change
  const handleStopChange = (index, field, value) => {
    const newStops = [...stops];
    newStops[index][field] = value;
    setStops(newStops);
  };

  // add new stop
  const addStop = () => {
    setStops([
      ...stops,
      { stopName: "", arrivalTime: "", departureTime: "" },
    ]);
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const busData = { numberPlate, startPoint, endPoint, stops };

    const res = await axios.post("http://localhost:3000/bus/create-bus", busData,{
  headers: { "Content-Type": "application/json" }
});  
    console.log("Bus data:", busData);

    setNumberPlate("");
    setStartPoint("");
    setEndPoint("");
    setStops([{ stopName: "", arrivalTime: "", departureTime: "" }]);
  };

  return (
    <div className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div>

      </div>
      <div className="max-w-full mx-auto p-7 rounded-lg shadow-md mt-6 md:w-full min-h-screen md:p-10">
        <h2 className="text-lg font-semibold mb-4 md:text-2xl">Add New Bus</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="block md:flex gap-4 md:w-full">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h2 className="block">Bus Number Plate</h2>
              <input
                type="text"
                placeholder="e.g., KBC 123X"
                value={numberPlate}
                onChange={(e) => setNumberPlate(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h2>Start Point</h2>
              <input
                type="text"
                placeholder="e.g., Nairobi CBD"
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              />

            </div>
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h2>End Point</h2>
              <input
                type="text"
                placeholder="e.g., Mombasa"
                value={endPoint}
                onChange={(e) => setEndPoint(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              />

            </div>

          </div>

          <div>
            <h2 className="md:text-2xl font-semibold">Bus Stops</h2>
            {stops.map((stop, index) => (
              <div key={index} className="mt-3 border p-3 rounded-lg bg-gray-50 md:flex gap-3">
                <div>
                  <p className="font-semibold mb-2 ">Stop {index + 1} Details</p>  
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h2>Stop Name</h2>
                  <input
                    type="text"
                    placeholder="e.g., Central Station"
                    value={stop.stopName}
                    onChange={(e) =>
                      handleStopChange(index, "stopName", e.target.value)
                    }
                    className="w-full p-2 border rounded-lg mb-2"
                    required
                  />

                </div>
                
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h2>Arrival Time</h2>
                  <input
                    type="time"
                    value={stop.arrivalTime}
                    onChange={(e) =>
                      handleStopChange(index, "arrivalTime", e.target.value)
                    }
                    className="w-full p-2 border rounded-lg mb-2"
                    required
                  />

                </div>

                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h2>Departure Time</h2>
                  <input
                    type="time"
                    value={stop.departureTime}
                    onChange={(e) =>
                      handleStopChange(index, "departureTime", e.target.value)
                    }
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
              </div>
            ))}

          </div>

          <button
            type="button"
            onClick={addStop}
            className="w-full mt-3 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50"
          >
            + Add Stop
          </button>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Save Bus
          </button>
        </form>

      </div>
    </div>
  );
};

export default AddBus;
