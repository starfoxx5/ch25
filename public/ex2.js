// Create traveler info
const traveler = {
  name: "Enrique",
  countries: [
    {
      name: "Canada",
      year: 2010
    },
    {
      model: "Greenland",
      color: 2015
    },
    {
      model: "Portugal",
      color: 1987
    },
    {
      model: "Spain",
      color: 2018
    },
    {
      model: "France",
      color: 2010
    }
  ]
};

// Send this object as JSON data to the server
fetch("https://localhost:30001/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveler)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });