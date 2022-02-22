const up_code= "UP-63277310-1";

const cid = "1032216105.1607125609";


const payload = {
  order: {
    travelers: [
      {
        id: 0,
      },
    ],
    air_reservations: [
      {
        trip_type: "roundtrip",
        itinerary: [
          {
            arrival_apc: "LAS",
            departure_apc: "JFK",
            departure_time: "20221218",
          },
          {
            arrival_apc: "JFK",
            departure_apc: "LAS",
            departure_time: "20221224",
          },
        ],
      },
    ],
    localization: { currency: "USD", language: "en", country: "US" },
    order_amount: 50000,
    up_code: `${up_code}`,
    customer_id: `${cid}`,
  }
};

const form = document.querySelector("#form");


const cors = 'https://mybrowseraddon.com/access-control-allow-origin.html';
const getData = async () => {
  const result = await fetch(
    `https://pm-mrkt.prodgw.uplift-platform.com/marketing/v6/from`,
    {
      method: 'POST',
      body: JSON.stringify(
        payload
      ),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
  const json = await result.json();
  console.log(json);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#input").value;
  payload["order_amount"] = input;
  getData();
});
