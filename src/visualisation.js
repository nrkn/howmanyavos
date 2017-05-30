'use strict'

const visualisation = ( houseInAvocados, $house, $avos ) => {
  const houseRatio = Math.cbrt( 2500000 )
  const avoRatio = Math.cbrt( houseInAvocados )
  const sum = houseRatio + avoRatio
  const unit = 100 / sum

  const houseWidth = unit * houseRatio
  const avoWidth = unit * avoRatio

  // a house is about 550m3, an avocado about 220cm3 - 2,500,000 avos in a house
  $house.style.width = houseWidth + '%'
  $avos.style.width = avoWidth + '%'
}

module.exports = visualisation
