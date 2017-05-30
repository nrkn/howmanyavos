'use strict'

// takes predefined data and returns a calculate function
const Calculator = ( prices, breakfastPrice ) => {
  /*
    Make a map into data using normalized (to lower, trimmed) keys

    So we can retain the original name, but also do lookups with the user's
    input after that is also normalized

    {
      "auckland central": {
        name: 'Auckland Central',
        //etc
      },
      "bay of plenty": {
        //etc
      }
      // etc
    }
  */
  const priceMap = prices.reduce( ( map, data ) => {
    map[ data.name.toLowerCase().trim() ] = data

    return map
  }, {} )

  const weeksPerYear = 52.1429

  // electorate name is normalized (lower case, trimmed)
  const calculate = ( electorateName, avocadoPrice, years ) => {
    // find the normalized data
    const data = priceMap[ electorateName.toLowerCase().trim() ]

    const { source, price, name } = data

    const houseInAvocados = price / avocadoPrice
    const houseInBreakfasts = price / breakfastPrice
    const avocadosPerYear = houseInAvocados / years
    const avocadosPerMonth = avocadosPerYear / 12
    const avocadosPerWeek = avocadosPerYear / weeksPerYear
    const breakfastsPerYear = houseInBreakfasts / years
    const breakfastsPerWeek = breakfastsPerYear / weeksPerYear

    // a model suitable for populating the result
    const model = {
      houseInAvocados, avocadosPerMonth, avocadosPerWeek, breakfastsPerYear,
      breakfastsPerWeek, name, price, years, source
    }

    return model
  }

  return calculate
}

module.exports = Calculator
