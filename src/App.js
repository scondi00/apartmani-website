import "./App.css";
import Data from "./components/data";
import Cijena from "./components/Cijena";
import Dostupnost from "./components/Dostupnost";

function App() {
  return (
    <>
      <div>
        <ul>
          {Data.map((data, index) => (
            <div className="card">
              <ul key={index}>
                <p className="name">{data.title}</p>
                <div className="card-details">
                  <img
                    className="apartment-img"
                    src={data.image}
                    alt="apartment-image"
                  />
                  {/* ako postoji kapacitet, prikazi u suprotnom nemoj  */}
                  {data.capacity && <p>Kapacitet: {data.capacity} </p>}

                  {/* ako postoji udaljenost od plaze, prikazi u suprotnom nemoj  */}
                  {data.beachDistanceInMeters && (
                    <p>Udaljenost do plaže: {data.beachDistanceInMeters}m</p>
                  )}

                  <details>
                    <summary>Detalji</summary>
                    <h4>Dodatna ponuda:</h4>
                    <ul>
                      {Object.entries(data.amenities).map(
                        ([amenity, value]) =>
                          value && <li key={amenity}>{amenity}</li>
                      )}
                    </ul>
                    <hr style={{ width: "95%" }} />
                    <Cijena price={data.pricelistInEuros}></Cijena>
                    <hr style={{ width: "95%" }} />
                    <Dostupnost
                      availability={data.availableDates}
                      priceList={data.pricelistInEuros}
                    ></Dostupnost>
                  </details>
                </div>
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
