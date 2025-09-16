// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
findMatching(drivers,[0])
findMatching(drivers,[1])
findMatching(drivers)

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => 
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}
fuzzyMatch(drivers, 'Sa')
fuzzyMatch(drivers, 'y')
fuzzyMatch(drivers, 'mm')

function matchName(driver,name) {
return driver.filter(driver => driver.name === name)
    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
    }

  

  
  
     (matchName(drivers, 'Bobby')).to.eql([
        {
          name: 'Bobby',
          hometown: 'Pittsburgh'
        },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay'
        }
      ]);
  
