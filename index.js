// // Code your solution here
// function findMatching(names) {
//   // return names.filter()
//   const newNames = names.filter(function (name) {
//     return name == "aram"
//   })
//   return newNames
// }
// const driverName = ['aram', 'akam', 'ahmad']
// console.log(findMatching(driverName))
const drivers = [
  { name: "Alice Jones", hometown: "Seattle" },
  { name: "Bob Smith", hometown: "San Francisco" },
  { name: "Charlie Lee", hometown: "New York" },
  { name: "David Williams", hometown: "Los Angeles" },
];

// Function to find drivers with matching names (case-insensitive)
function findMatching(driversList, name) {
  const lowercaseName = name.toLowerCase();
  return driversList.filter(driver => driver.name.toLowerCase().includes(lowercaseName));
}

// Function to find drivers whose names begin with a specific string
function fuzzyMatch(driversList, nameStart) {
  const lowercaseStart = nameStart.toLowerCase();
  return driversList.filter(driver => driver.name.toLowerCase().startsWith(lowercaseStart));
}

// Function to find drivers by their exact name
function matchName(driversList, name) {
  return driversList.filter(driver => driver.name === name);
}

// Example Usage
const matchingDrivers = findMatching(drivers, "aliCE");
console.log(matchingDrivers);  // Output: [{ name: "Alice Jones", hometown: "Seattle" }]

const startingWithD = fuzzyMatch(drivers, "Da");
console.log(startingWithD);  // Output: [{ name: "David Williams", hometown: "Los Angeles" }]

const exactMatch = matchName(drivers, "Bob Smith");
console.log(exactMatch);     // Output: [{ name: "Bob Smith", hometown: "San Francisco" }]
