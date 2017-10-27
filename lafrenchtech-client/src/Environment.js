// flow
const { ENDPOINT } = require("./constants");
const { Environment, Network, RecordSource, Store } = require("relay-runtime");

const source = new RecordSource();
const store = new Store(source);

const fetchQuery = (operation, variables) => {
  return fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
};

const network = Network.create(fetchQuery);

const environment = new Environment({
  network,
  store
});

export default environment;
