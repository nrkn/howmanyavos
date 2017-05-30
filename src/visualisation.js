'use strict'

const visualisation = ( houseInAvocados, $house, $avos ) => {
  // a house is about 550m3, an avocado about 220cm3 - 2,500,000 avos in a house
  $house.style.flexGrow = Math.cbrt( 2500000 )
  $avos.style.flexGrow = Math.cbrt( houseInAvocados )
}

module.exports = visualisation
