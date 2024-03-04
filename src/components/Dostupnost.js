import { useState, useEffect } from "react";

function Dostupnost(props) {
  const [choice, setChoice] = useState(false);
  const [price, setPrice] = useState(0);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  const availables = props.availability;
  const priceListEuro = props.priceList;

  const getPrice = (dateStart, dateEnd) => {
    setChoice(true);
    const arrivalDate = new Date(dateStart);
    setArrival(arrivalDate);
    const departureDate = new Date(dateEnd);
    setDeparture(departureDate);
    let totalPrice = 0;

    for (const priceInterval of priceListEuro) {
      const intervalStartDate = new Date(priceInterval.intervalStart);
      const intervalEndDate = new Date(priceInterval.intervalEnd);

      // Check if the interval overlaps with the specified date range
      if (arrivalDate < intervalEndDate && departureDate > intervalStartDate) {
        // Calculate the number of nights within the specified date range
        const nightsInInterval =
          Math.min(departureDate, intervalEndDate) -
          Math.max(arrivalDate, intervalStartDate);
        const numberOfNights = nightsInInterval / (24 * 60 * 60 * 1000);

        // Calculate the total price for the overlapping interval
        totalPrice += numberOfNights * priceInterval.pricePerNight;
      }
    }

    if (totalPrice != 0) {
      setPrice(totalPrice);
    } else {
      setPrice("Nema podatka");
    }
  };

  const setInfo = () => {
    let info_price = price;
    let info_arrival = arrival;
    let info_departure = departure;
  };

  return (
    <>
      <div>
        <h4>Odaberite datume:</h4>
        <ul>
          {availables.map((data, index) => (
            <div className="interval-date">
              <input
                type="radio"
                id="interval"
                name="interval"
                value="interval"
                checked
                onInput={() => getPrice(data.intervalStart, data.intervalEnd)}
              />
              <label for="interval">
                {new Date(data.intervalStart).toLocaleDateString("en-GB")} -{" "}
                {new Date(data.intervalEnd).toLocaleDateString("en-GB")}
              </label>
            </div>
          ))}
        </ul>

        {choice && (
          <>
            <hr style={{ width: "90%" }} />
            <p>Ukupna cijena: {price} </p>

            <button style={{ marginLeft: 450 }} onClick={setInfo}>
              {" "}
              Rezerviraj
            </button>
          </>
        )}
      </div>
    </>
  );
}
export default Dostupnost;
