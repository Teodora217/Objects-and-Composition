function townPopulation(townsAsStr) {
  const town = {};
  for (let data of townsAsStr) {
    const tokens = data.split(" <-> ");
    const name = tokens[0];
    const pop = Number(tokens[1]);
    if (town[name] === undefined) {
      town[name] = pop;
    } else {
      town[name] += pop;
    }
  }
  for (const name in town) {
    console.log(`${name} : ${town[name]}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
