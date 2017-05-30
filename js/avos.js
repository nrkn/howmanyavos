(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

  const calculate = ( name, avocadoPrice, years ) => {
    // find the normalized data
    const data = priceMap[ name.toLowerCase().trim() ]

    const { source, price } = data

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

    console.log( JSON.stringify( model, null, 2 ) )

    return model
  }

  return calculate
}

module.exports = Calculator

},{}],2:[function(require,module,exports){
module.exports=[
  {
    "name": "Auckland Central",
    "price": 1079879,
    "source": ""
  },
  {
    "name": "Bay of Plenty",
    "price": 533600,
    "source": "http://www.nzherald.co.nz/bay-of-plenty-times/news/article.cfm?c_id=1503343&objectid=11656861"
  },
  {
    "name": "Botany",
    "price": 1172617,
    "source": ""
  },
  {
    "name": "Christchurch Central",
    "price": 585099,
    "source": ""
  },
  {
    "name": "Christchurch East",
    "price": 370913,
    "source": ""
  },
  {
    "name": "Clutha-Southland",
    "price": 313711,
    "source": ""
  },
  {
    "name": "Coromandel",
    "price": 690634,
    "source": ""
  },
  {
    "name": "Dunedin North",
    "price": 346444,
    "source": ""
  },
  {
    "name": "Dunedin South",
    "price": 352212,
    "source": ""
  },
  {
    "name": "East Coast",
    "price": 288748,
    "source": "http://www.nzherald.co.nz/bay-of-plenty-times/news/article.cfm?c_id=1503343&objectid=11656861"
  },
  {
    "name": "East Coast Bays",
    "price": 1148505,
    "source": "http://www.nzherald.co.nz/business/news/article.cfm?c_id=3&objectid=11491720"
  },
  {
    "name": "Epsom",
    "price": 1653500,
    "source": ""
  },
  {
    "name": "Hamilton East",
    "price": 586214,
    "source": ""
  },
  {
    "name": "Hamilton West",
    "price": 488953,
    "source": ""
  },
  {
    "name": "Helensville",
    "price": 587500,
    "source": ""
  },
  {
    "name": "Hunua",
    "price": 669518,
    "source": ""
  },
  {
    "name": "Hutt South",
    "price": 503286,
    "source": ""
  },
  {
    "name": "Ilam",
    "price": 641550,
    "source": "http://www.stuff.co.nz/business/money/77741927/Housing-demand-pushes-price-growth-east-in-Christchurch"
  },
  {
    "name": "Invercargill",
    "price": 239486,
    "source": ""
  },
  {
    "name": "Kaikōura",
    "price": 399661,
    "source": ""
  },
  {
    "name": "Kelston",
    "price": 708500,
    "source": ""
  },
  {
    "name": "Mana",
    "price": 501028,
    "source": ""
  },
  {
    "name": "Mangere",
    "price": 636750,
    "source": ""
  },
  {
    "name": "Manukau East",
    "price": 1172617,
    "source": ""
  },
  {
    "name": "Manurewa",
    "price": 607000,
    "source": ""
  },
  {
    "name": "Maungakiekie",
    "price": 1023306,
    "source": "https://www.barfoot.co.nz/market-reports/2016/february/suburb-report"
  },
  {
    "name": "Mt Albert",
    "price": 1094000,
    "source": ""
  },
  {
    "name": "Mt Roskill",
    "price": 909000,
    "source": ""
  },
  {
    "name": "Napier",
    "price": 425484,
    "source": ""
  },
  {
    "name": "Nelson",
    "price": 527422,
    "source": ""
  },
  {
    "name": "New Lynn",
    "price": 702000,
    "source": ""
  },
  {
    "name": "New Plymouth",
    "price": 418445,
    "source": ""
  },
  {
    "name": "North Shore",
    "price": 1195292,
    "source": ""
  },
  {
    "name": "Northcote",
    "price": 1198200,
    "source": ""
  },
  {
    "name": "Northland",
    "price": 554000,
    "source": "http://www.scoop.co.nz/stories/BU1702/S00824/northland-residential-property-price-increases-accelerated.htm"
  },
  {
    "name": "Ōhariu",
    "price": 580000,
    "source": "www.leaderswellington.co.nz/s/PU-0616-AndrewPano.pdf"
  },
  {
    "name": "Ōtaki",
    "price": 325500,
    "source": ""
  },
  {
    "name": "Pakuranga",
    "price": 854000,
    "source": ""
  },
  {
    "name": "Palmerston North",
    "price": 354999,
    "source": ""
  },
  {
    "name": "Papakura",
    "price": 575139,
    "source": ""
  },
  {
    "name": "Port Hills",
    "price": 648000,
    "source": "http://www.stuff.co.nz/the-press/news/69229248/christchurch-home-values-take-a-jump-on-the-hills-flatter-on-the-flat"
  },
  {
    "name": "Rangitata",
    "price": 355556,
    "source": "http://www.landlords.co.nz/housing-statistics/?graphsubmitted=true&frommonth=1&fromyear=1994&tomonth=5&toyear=2017&graphareas%5B%5D=119&graphstyle=price&submit=Show+Graph"
  },
  {
    "name": "Rangitīkei",
    "price": 163111,
    "source": "http://www.stuff.co.nz/manawatu-standard/news/88957498/Houses-worth-more-in-Palmerston-North-and-Horowhenua-QV-figures-show"
  },
  {
    "name": "Rimutaka",
    "price": 445632,
    "source": ""
  },
  {
    "name": "Rodney",
    "price": 809752,
    "source": "http://www.nzherald.co.nz/business/news/article.cfm?c_id=3&objectid=11598700"
  },
  {
    "name": "Rongotai",
    "price": 583000,
    "source": ""
  },
  {
    "name": "Rotorua",
    "price": 396423,
    "source": ""
  },
  {
    "name": "Selwyn",
    "price": 542493,
    "source": "https://ecoprofile.infometrics.co.nz/Selwyn%2BDistrict/QuarterlyEconomicMonitor/HousePrices"
  },
  {
    "name": "Tāmaki",
    "price": 1021250,
    "source": "tamaki east"
  },
  {
    "name": "Taranaki-King Country",
    "price": 411160,
    "source": "http://www.stuff.co.nz/business/property/88303046/taranaki-residential-property-prices-continue-to-rise"
  },
  {
    "name": "Taupō",
    "price": 437943,
    "source": ""
  },
  {
    "name": "Tauranga",
    "price": 678643,
    "source": ""
  },
  {
    "name": "Te Atatu",
    "price": 834750,
    "source": "Te Atatu Peninsula + Te Atatu south"
  },
  {
    "name": "Tukituki",
    "price": 408510,
    "source": "hastings"
  },
  {
    "name": "Upper Harbour",
    "price": 937324,
    "source": ""
  },
  {
    "name": "Waikato",
    "price": 450043,
    "source": ""
  },
  {
    "name": "Waimakariri",
    "price": 435200,
    "source": "https://ecoprofile.infometrics.co.nz/Waimakariri%2BDistrict/QuarterlyEconomicMonitor/HousePrices"
  },
  {
    "name": "Wairarapa",
    "price": 359212,
    "source": "south wairarapa + masterton"
  },
  {
    "name": "Waitaki",
    "price": 267631,
    "source": ""
  },
  {
    "name": "Wellington Central",
    "price": 721252,
    "source": ""
  },
  {
    "name": "West Coast-Tasman",
    "price": 320200,
    "source": "no data for haast, hari hari, whataroa, ross, fox glacier"
  },
  {
    "name": "Whanganui",
    "price": 220336,
    "source": ""
  },
  {
    "name": "Whangarei",
    "price": 477765,
    "source": ""
  },
  {
    "name": "Wigram",
    "price": 640000,
    "source": ""
  }
]

},{}],3:[function(require,module,exports){
'use strict'

const Calculator = require( './calculator' )
const Populate = require( './populate' )
const prices = require( './house-prices.json' )

const names = prices.map( p => p.name.toLowerCase().trim() )
const breakfastPrice = 14.99

// initialize the calculate function with the predefined data
const calculate = Calculator( prices, breakfastPrice )

// not available until init is called
let populate, $result

const init = () => {
  /*
    set up autocomplete - degrades to ordinary text input in unsupported
    browsers

    http://caniuse.com/#search=datalist
  */
  const $datalist = document.querySelector( '#names' )

  names.forEach( name => {
    const $option = document.createElement( 'option' )
    $option.value = name
    $datalist.appendChild( $option )
  })

  /*
    save a reference to the result section of the page and initialize the
    populate function
  */
  $result = document.querySelector( '.avo-app__result' )
  populate = Populate( $result )
}

// get the user's input
const getInput = () => {
  const $name = document.querySelector( '[name="name"]' )
  const $price = document.querySelector( '[name="price"]' )
  const $years = document.querySelector( '[name="years"]' )

  if( !validate( $name, $price, $years ) )
    return false

  const name = $name.value
  const price = parseFloat( $price.value )
  const years = parseFloat( $years.value )

  return { name, price, years }
}

const validatePositiveNumber = $input => {
  let value

  try{
    value = parseFloat( $input.value )
  } catch( e ){
    return false
  }

  return value > 0
}

const errorMessage = ( $el, message ) => {
  const $error = $el.parentNode.querySelector( '.avo-app__error' )
  $error.textContent = message
  $error.classList.remove( 'avo-app__error--hidden' )
}

const validate = ( $name, $price, $years ) => {
  let succeeded = true

  const name = $name.value.toLowerCase().trim()

  if( !names.includes( name ) ){
    errorMessage( $name, `Sorry, we don't have price data for that electorate` )

    succeeded = false
  }

  if( !validatePositiveNumber( $price ) ){
    errorMessage( $price, `Please enter a number greater than zero` )

    succeeded = false
  }

  if( !validatePositiveNumber( $years ) ){
    errorMessage( $years, `Please enter a number greater than zero` )

    succeeded = false
  }

  return succeeded
}

// show the result
const output = input => {
  // get the input
  const { name, price, years } = input

  // calculate all the things
  const model = calculate( name, price, years )

  // populate the model
  populate( model )

  // show the result
  $result.classList.remove( 'avo-app__result--hidden' )
}

// make sure the user can't do anything until the page loads
document.addEventListener( 'DOMContentLoaded', () => {
  init()

  // wait for the user to click the button, get input, show result
  document.addEventListener( 'click', e => {
    if( !e.target.matches( 'button[name="run"]' ) ) return

    // clear errors
    const $errors = Array.from( document.querySelectorAll( '.avo-app__error' ) )
    $errors.forEach( $error => {
      $error.innerHTML = ''
      $error.classList.add( 'avo-app__error--hidden' )
    })

    const input = getInput()

    // validation failed
    if( !input ){
      // hide the result
      $result.classList.add( 'avo-app__result--hidden' )

      return
    }

    output( input )
  })
})

},{"./calculator":1,"./house-prices.json":2,"./populate":4}],4:[function(require,module,exports){
'use strict'

const tokens = [ 'value', 'if', 'href' ]
const selectors = tokens.map( token => `[data-${ token }]` )

const Populate = $el => {
  /*
    find all elements that have [data-value=""], [data-if=""] etc. and convert
    the returned live node list to an array so we can do functional stuff
  */
  const $els = Array.from( $el.querySelectorAll( selectors ) )

  /*
    make an object map from name to element like:
    {
      price: $someEl,
      name: $someOtherEl,
      //...etc
    }
  */
  const nameMap = $els.reduce( ( map, $el ) => {
    tokens.forEach( token => {
      if( $el.matches( `[data-${ token }]` )){
        const name = $el.dataset[ token ]

        map[ name ] = $el
      }
    })

    return map
  }, {} )

  // populate the named element with this value
  const populateElement = ( name, value ) => {
    // get the element for this name in the model
    const $el = nameMap[ name ]

    if( !$el )
      throw new Error( 'No element found for ' + name )

    // Format numbers nicely
    if( typeof value === 'number' )
      value = Math.round( value ).toLocaleString()

    // populate the element's text content
    if( $el.matches( '[data-value]' ) )
      $el.textContent = value

    // empty the element if value is falsey
    if( $el.matches( '[data-if]' ) && !value )
      $el.innerHTML = ''

    // set an href
    if( $el.matches( '[data-href]' ) )
      $el.setAttribute( 'href', value )
  }

  /*
    for each key in the model, populate the matching dom element with the
    matching value
  */
  const populate = model => {
    Object.keys( model ).forEach( name => {
      populateElement( name, model[ name ] )
    })
  }

  return populate
}

module.exports = Populate

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2FsY3VsYXRvci5qcyIsInNyYy9ob3VzZS1wcmljZXMuanNvbiIsInNyYy9pbmRleC5qcyIsInNyYy9wb3B1bGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIHRha2VzIHByZWRlZmluZWQgZGF0YSBhbmQgcmV0dXJucyBhIGNhbGN1bGF0ZSBmdW5jdGlvblxuY29uc3QgQ2FsY3VsYXRvciA9ICggcHJpY2VzLCBicmVha2Zhc3RQcmljZSApID0+IHtcbiAgLypcbiAgICBNYWtlIGEgbWFwIGludG8gZGF0YSB1c2luZyBub3JtYWxpemVkICh0byBsb3dlciwgdHJpbW1lZCkga2V5c1xuXG4gICAgU28gd2UgY2FuIHJldGFpbiB0aGUgb3JpZ2luYWwgbmFtZSwgYnV0IGFsc28gZG8gbG9va3VwcyB3aXRoIHRoZSB1c2VyJ3NcbiAgICBpbnB1dCBhZnRlciB0aGF0IGlzIGFsc28gbm9ybWFsaXplZFxuXG4gICAge1xuICAgICAgXCJhdWNrbGFuZCBjZW50cmFsXCI6IHtcbiAgICAgICAgbmFtZTogJ0F1Y2tsYW5kIENlbnRyYWwnLFxuICAgICAgICAvL2V0Y1xuICAgICAgfSxcbiAgICAgIFwiYmF5IG9mIHBsZW50eVwiOiB7XG4gICAgICAgIC8vZXRjXG4gICAgICB9XG4gICAgICAvLyBldGNcbiAgICB9XG4gICovXG4gIGNvbnN0IHByaWNlTWFwID0gcHJpY2VzLnJlZHVjZSggKCBtYXAsIGRhdGEgKSA9PiB7XG4gICAgbWFwWyBkYXRhLm5hbWUudG9Mb3dlckNhc2UoKS50cmltKCkgXSA9IGRhdGFcblxuICAgIHJldHVybiBtYXBcbiAgfSwge30gKVxuXG4gIGNvbnN0IHdlZWtzUGVyWWVhciA9IDUyLjE0MjlcblxuICBjb25zdCBjYWxjdWxhdGUgPSAoIG5hbWUsIGF2b2NhZG9QcmljZSwgeWVhcnMgKSA9PiB7XG4gICAgLy8gZmluZCB0aGUgbm9ybWFsaXplZCBkYXRhXG4gICAgY29uc3QgZGF0YSA9IHByaWNlTWFwWyBuYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpIF1cblxuICAgIGNvbnN0IHsgc291cmNlLCBwcmljZSB9ID0gZGF0YVxuXG4gICAgY29uc3QgaG91c2VJbkF2b2NhZG9zID0gcHJpY2UgLyBhdm9jYWRvUHJpY2VcbiAgICBjb25zdCBob3VzZUluQnJlYWtmYXN0cyA9IHByaWNlIC8gYnJlYWtmYXN0UHJpY2VcbiAgICBjb25zdCBhdm9jYWRvc1BlclllYXIgPSBob3VzZUluQXZvY2Fkb3MgLyB5ZWFyc1xuICAgIGNvbnN0IGF2b2NhZG9zUGVyTW9udGggPSBhdm9jYWRvc1BlclllYXIgLyAxMlxuICAgIGNvbnN0IGF2b2NhZG9zUGVyV2VlayA9IGF2b2NhZG9zUGVyWWVhciAvIHdlZWtzUGVyWWVhclxuICAgIGNvbnN0IGJyZWFrZmFzdHNQZXJZZWFyID0gaG91c2VJbkJyZWFrZmFzdHMgLyB5ZWFyc1xuICAgIGNvbnN0IGJyZWFrZmFzdHNQZXJXZWVrID0gYnJlYWtmYXN0c1BlclllYXIgLyB3ZWVrc1BlclllYXJcblxuICAgIC8vIGEgbW9kZWwgc3VpdGFibGUgZm9yIHBvcHVsYXRpbmcgdGhlIHJlc3VsdFxuICAgIGNvbnN0IG1vZGVsID0ge1xuICAgICAgaG91c2VJbkF2b2NhZG9zLCBhdm9jYWRvc1Blck1vbnRoLCBhdm9jYWRvc1BlcldlZWssIGJyZWFrZmFzdHNQZXJZZWFyLFxuICAgICAgYnJlYWtmYXN0c1BlcldlZWssIG5hbWUsIHByaWNlLCB5ZWFycywgc291cmNlXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCBtb2RlbCwgbnVsbCwgMiApIClcblxuICAgIHJldHVybiBtb2RlbFxuICB9XG5cbiAgcmV0dXJuIGNhbGN1bGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbGN1bGF0b3JcbiIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwibmFtZVwiOiBcIkF1Y2tsYW5kIENlbnRyYWxcIixcbiAgICBcInByaWNlXCI6IDEwNzk4NzksXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQmF5IG9mIFBsZW50eVwiLFxuICAgIFwicHJpY2VcIjogNTMzNjAwLFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5uemhlcmFsZC5jby5uei9iYXktb2YtcGxlbnR5LXRpbWVzL25ld3MvYXJ0aWNsZS5jZm0/Y19pZD0xNTAzMzQzJm9iamVjdGlkPTExNjU2ODYxXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkJvdGFueVwiLFxuICAgIFwicHJpY2VcIjogMTE3MjYxNyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDaHJpc3RjaHVyY2ggQ2VudHJhbFwiLFxuICAgIFwicHJpY2VcIjogNTg1MDk5LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNocmlzdGNodXJjaCBFYXN0XCIsXG4gICAgXCJwcmljZVwiOiAzNzA5MTMsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ2x1dGhhLVNvdXRobGFuZFwiLFxuICAgIFwicHJpY2VcIjogMzEzNzExLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNvcm9tYW5kZWxcIixcbiAgICBcInByaWNlXCI6IDY5MDYzNCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJEdW5lZGluIE5vcnRoXCIsXG4gICAgXCJwcmljZVwiOiAzNDY0NDQsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRHVuZWRpbiBTb3V0aFwiLFxuICAgIFwicHJpY2VcIjogMzUyMjEyLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkVhc3QgQ29hc3RcIixcbiAgICBcInByaWNlXCI6IDI4ODc0OCxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cubnpoZXJhbGQuY28ubnovYmF5LW9mLXBsZW50eS10aW1lcy9uZXdzL2FydGljbGUuY2ZtP2NfaWQ9MTUwMzM0MyZvYmplY3RpZD0xMTY1Njg2MVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJFYXN0IENvYXN0IEJheXNcIixcbiAgICBcInByaWNlXCI6IDExNDg1MDUsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3Lm56aGVyYWxkLmNvLm56L2J1c2luZXNzL25ld3MvYXJ0aWNsZS5jZm0/Y19pZD0zJm9iamVjdGlkPTExNDkxNzIwXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkVwc29tXCIsXG4gICAgXCJwcmljZVwiOiAxNjUzNTAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkhhbWlsdG9uIEVhc3RcIixcbiAgICBcInByaWNlXCI6IDU4NjIxNCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJIYW1pbHRvbiBXZXN0XCIsXG4gICAgXCJwcmljZVwiOiA0ODg5NTMsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSGVsZW5zdmlsbGVcIixcbiAgICBcInByaWNlXCI6IDU4NzUwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJIdW51YVwiLFxuICAgIFwicHJpY2VcIjogNjY5NTE4LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkh1dHQgU291dGhcIixcbiAgICBcInByaWNlXCI6IDUwMzI4NixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJJbGFtXCIsXG4gICAgXCJwcmljZVwiOiA2NDE1NTAsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3LnN0dWZmLmNvLm56L2J1c2luZXNzL21vbmV5Lzc3NzQxOTI3L0hvdXNpbmctZGVtYW5kLXB1c2hlcy1wcmljZS1ncm93dGgtZWFzdC1pbi1DaHJpc3RjaHVyY2hcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSW52ZXJjYXJnaWxsXCIsXG4gICAgXCJwcmljZVwiOiAyMzk0ODYsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiS2Fpa8WNdXJhXCIsXG4gICAgXCJwcmljZVwiOiAzOTk2NjEsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiS2Vsc3RvblwiLFxuICAgIFwicHJpY2VcIjogNzA4NTAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hbmFcIixcbiAgICBcInByaWNlXCI6IDUwMTAyOCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYW5nZXJlXCIsXG4gICAgXCJwcmljZVwiOiA2MzY3NTAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWFudWthdSBFYXN0XCIsXG4gICAgXCJwcmljZVwiOiAxMTcyNjE3LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hbnVyZXdhXCIsXG4gICAgXCJwcmljZVwiOiA2MDcwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWF1bmdha2lla2llXCIsXG4gICAgXCJwcmljZVwiOiAxMDIzMzA2LFxuICAgIFwic291cmNlXCI6IFwiaHR0cHM6Ly93d3cuYmFyZm9vdC5jby5uei9tYXJrZXQtcmVwb3J0cy8yMDE2L2ZlYnJ1YXJ5L3N1YnVyYi1yZXBvcnRcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTXQgQWxiZXJ0XCIsXG4gICAgXCJwcmljZVwiOiAxMDk0MDAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk10IFJvc2tpbGxcIixcbiAgICBcInByaWNlXCI6IDkwOTAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOYXBpZXJcIixcbiAgICBcInByaWNlXCI6IDQyNTQ4NCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOZWxzb25cIixcbiAgICBcInByaWNlXCI6IDUyNzQyMixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOZXcgTHlublwiLFxuICAgIFwicHJpY2VcIjogNzAyMDAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5ldyBQbHltb3V0aFwiLFxuICAgIFwicHJpY2VcIjogNDE4NDQ1LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5vcnRoIFNob3JlXCIsXG4gICAgXCJwcmljZVwiOiAxMTk1MjkyLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5vcnRoY290ZVwiLFxuICAgIFwicHJpY2VcIjogMTE5ODIwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOb3J0aGxhbmRcIixcbiAgICBcInByaWNlXCI6IDU1NDAwMCxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cuc2Nvb3AuY28ubnovc3Rvcmllcy9CVTE3MDIvUzAwODI0L25vcnRobGFuZC1yZXNpZGVudGlhbC1wcm9wZXJ0eS1wcmljZS1pbmNyZWFzZXMtYWNjZWxlcmF0ZWQuaHRtXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIsWMaGFyaXVcIixcbiAgICBcInByaWNlXCI6IDU4MDAwMCxcbiAgICBcInNvdXJjZVwiOiBcInd3dy5sZWFkZXJzd2VsbGluZ3Rvbi5jby5uei9zL1BVLTA2MTYtQW5kcmV3UGFuby5wZGZcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwixYx0YWtpXCIsXG4gICAgXCJwcmljZVwiOiAzMjU1MDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUGFrdXJhbmdhXCIsXG4gICAgXCJwcmljZVwiOiA4NTQwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUGFsbWVyc3RvbiBOb3J0aFwiLFxuICAgIFwicHJpY2VcIjogMzU0OTk5LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlBhcGFrdXJhXCIsXG4gICAgXCJwcmljZVwiOiA1NzUxMzksXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUG9ydCBIaWxsc1wiLFxuICAgIFwicHJpY2VcIjogNjQ4MDAwLFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5zdHVmZi5jby5uei90aGUtcHJlc3MvbmV3cy82OTIyOTI0OC9jaHJpc3RjaHVyY2gtaG9tZS12YWx1ZXMtdGFrZS1hLWp1bXAtb24tdGhlLWhpbGxzLWZsYXR0ZXItb24tdGhlLWZsYXRcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUmFuZ2l0YXRhXCIsXG4gICAgXCJwcmljZVwiOiAzNTU1NTYsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3LmxhbmRsb3Jkcy5jby5uei9ob3VzaW5nLXN0YXRpc3RpY3MvP2dyYXBoc3VibWl0dGVkPXRydWUmZnJvbW1vbnRoPTEmZnJvbXllYXI9MTk5NCZ0b21vbnRoPTUmdG95ZWFyPTIwMTcmZ3JhcGhhcmVhcyU1QiU1RD0xMTkmZ3JhcGhzdHlsZT1wcmljZSZzdWJtaXQ9U2hvdytHcmFwaFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSYW5naXTEq2tlaVwiLFxuICAgIFwicHJpY2VcIjogMTYzMTExLFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5zdHVmZi5jby5uei9tYW5hd2F0dS1zdGFuZGFyZC9uZXdzLzg4OTU3NDk4L0hvdXNlcy13b3J0aC1tb3JlLWluLVBhbG1lcnN0b24tTm9ydGgtYW5kLUhvcm93aGVudWEtUVYtZmlndXJlcy1zaG93XCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlJpbXV0YWthXCIsXG4gICAgXCJwcmljZVwiOiA0NDU2MzIsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUm9kbmV5XCIsXG4gICAgXCJwcmljZVwiOiA4MDk3NTIsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3Lm56aGVyYWxkLmNvLm56L2J1c2luZXNzL25ld3MvYXJ0aWNsZS5jZm0/Y19pZD0zJm9iamVjdGlkPTExNTk4NzAwXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlJvbmdvdGFpXCIsXG4gICAgXCJwcmljZVwiOiA1ODMwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUm90b3J1YVwiLFxuICAgIFwicHJpY2VcIjogMzk2NDIzLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlNlbHd5blwiLFxuICAgIFwicHJpY2VcIjogNTQyNDkzLFxuICAgIFwic291cmNlXCI6IFwiaHR0cHM6Ly9lY29wcm9maWxlLmluZm9tZXRyaWNzLmNvLm56L1NlbHd5biUyQkRpc3RyaWN0L1F1YXJ0ZXJseUVjb25vbWljTW9uaXRvci9Ib3VzZVByaWNlc1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUxIFtYWtpXCIsXG4gICAgXCJwcmljZVwiOiAxMDIxMjUwLFxuICAgIFwic291cmNlXCI6IFwidGFtYWtpIGVhc3RcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVGFyYW5ha2ktS2luZyBDb3VudHJ5XCIsXG4gICAgXCJwcmljZVwiOiA0MTExNjAsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3LnN0dWZmLmNvLm56L2J1c2luZXNzL3Byb3BlcnR5Lzg4MzAzMDQ2L3RhcmFuYWtpLXJlc2lkZW50aWFsLXByb3BlcnR5LXByaWNlcy1jb250aW51ZS10by1yaXNlXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlRhdXDFjVwiLFxuICAgIFwicHJpY2VcIjogNDM3OTQzLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlRhdXJhbmdhXCIsXG4gICAgXCJwcmljZVwiOiA2Nzg2NDMsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVGUgQXRhdHVcIixcbiAgICBcInByaWNlXCI6IDgzNDc1MCxcbiAgICBcInNvdXJjZVwiOiBcIlRlIEF0YXR1IFBlbmluc3VsYSArIFRlIEF0YXR1IHNvdXRoXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlR1a2l0dWtpXCIsXG4gICAgXCJwcmljZVwiOiA0MDg1MTAsXG4gICAgXCJzb3VyY2VcIjogXCJoYXN0aW5nc1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJVcHBlciBIYXJib3VyXCIsXG4gICAgXCJwcmljZVwiOiA5MzczMjQsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2Fpa2F0b1wiLFxuICAgIFwicHJpY2VcIjogNDUwMDQzLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIldhaW1ha2FyaXJpXCIsXG4gICAgXCJwcmljZVwiOiA0MzUyMDAsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwczovL2Vjb3Byb2ZpbGUuaW5mb21ldHJpY3MuY28ubnovV2FpbWFrYXJpcmklMkJEaXN0cmljdC9RdWFydGVybHlFY29ub21pY01vbml0b3IvSG91c2VQcmljZXNcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2FpcmFyYXBhXCIsXG4gICAgXCJwcmljZVwiOiAzNTkyMTIsXG4gICAgXCJzb3VyY2VcIjogXCJzb3V0aCB3YWlyYXJhcGEgKyBtYXN0ZXJ0b25cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2FpdGFraVwiLFxuICAgIFwicHJpY2VcIjogMjY3NjMxLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIldlbGxpbmd0b24gQ2VudHJhbFwiLFxuICAgIFwicHJpY2VcIjogNzIxMjUyLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIldlc3QgQ29hc3QtVGFzbWFuXCIsXG4gICAgXCJwcmljZVwiOiAzMjAyMDAsXG4gICAgXCJzb3VyY2VcIjogXCJubyBkYXRhIGZvciBoYWFzdCwgaGFyaSBoYXJpLCB3aGF0YXJvYSwgcm9zcywgZm94IGdsYWNpZXJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2hhbmdhbnVpXCIsXG4gICAgXCJwcmljZVwiOiAyMjAzMzYsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2hhbmdhcmVpXCIsXG4gICAgXCJwcmljZVwiOiA0Nzc3NjUsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2lncmFtXCIsXG4gICAgXCJwcmljZVwiOiA2NDAwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9XG5dXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgQ2FsY3VsYXRvciA9IHJlcXVpcmUoICcuL2NhbGN1bGF0b3InIClcbmNvbnN0IFBvcHVsYXRlID0gcmVxdWlyZSggJy4vcG9wdWxhdGUnIClcbmNvbnN0IHByaWNlcyA9IHJlcXVpcmUoICcuL2hvdXNlLXByaWNlcy5qc29uJyApXG5cbmNvbnN0IG5hbWVzID0gcHJpY2VzLm1hcCggcCA9PiBwLm5hbWUudG9Mb3dlckNhc2UoKS50cmltKCkgKVxuY29uc3QgYnJlYWtmYXN0UHJpY2UgPSAxNC45OVxuXG4vLyBpbml0aWFsaXplIHRoZSBjYWxjdWxhdGUgZnVuY3Rpb24gd2l0aCB0aGUgcHJlZGVmaW5lZCBkYXRhXG5jb25zdCBjYWxjdWxhdGUgPSBDYWxjdWxhdG9yKCBwcmljZXMsIGJyZWFrZmFzdFByaWNlIClcblxuLy8gbm90IGF2YWlsYWJsZSB1bnRpbCBpbml0IGlzIGNhbGxlZFxubGV0IHBvcHVsYXRlLCAkcmVzdWx0XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIC8qXG4gICAgc2V0IHVwIGF1dG9jb21wbGV0ZSAtIGRlZ3JhZGVzIHRvIG9yZGluYXJ5IHRleHQgaW5wdXQgaW4gdW5zdXBwb3J0ZWRcbiAgICBicm93c2Vyc1xuXG4gICAgaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9ZGF0YWxpc3RcbiAgKi9cbiAgY29uc3QgJGRhdGFsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNuYW1lcycgKVxuXG4gIG5hbWVzLmZvckVhY2goIG5hbWUgPT4ge1xuICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnb3B0aW9uJyApXG4gICAgJG9wdGlvbi52YWx1ZSA9IG5hbWVcbiAgICAkZGF0YWxpc3QuYXBwZW5kQ2hpbGQoICRvcHRpb24gKVxuICB9KVxuXG4gIC8qXG4gICAgc2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcmVzdWx0IHNlY3Rpb24gb2YgdGhlIHBhZ2UgYW5kIGluaXRpYWxpemUgdGhlXG4gICAgcG9wdWxhdGUgZnVuY3Rpb25cbiAgKi9cbiAgJHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuYXZvLWFwcF9fcmVzdWx0JyApXG4gIHBvcHVsYXRlID0gUG9wdWxhdGUoICRyZXN1bHQgKVxufVxuXG4vLyBnZXQgdGhlIHVzZXIncyBpbnB1dFxuY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0ICRuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ1tuYW1lPVwibmFtZVwiXScgKVxuICBjb25zdCAkcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnW25hbWU9XCJwcmljZVwiXScgKVxuICBjb25zdCAkeWVhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnW25hbWU9XCJ5ZWFyc1wiXScgKVxuXG4gIGlmKCAhdmFsaWRhdGUoICRuYW1lLCAkcHJpY2UsICR5ZWFycyApIClcbiAgICByZXR1cm4gZmFsc2VcblxuICBjb25zdCBuYW1lID0gJG5hbWUudmFsdWVcbiAgY29uc3QgcHJpY2UgPSBwYXJzZUZsb2F0KCAkcHJpY2UudmFsdWUgKVxuICBjb25zdCB5ZWFycyA9IHBhcnNlRmxvYXQoICR5ZWFycy52YWx1ZSApXG5cbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIHllYXJzIH1cbn1cblxuY29uc3QgdmFsaWRhdGVQb3NpdGl2ZU51bWJlciA9ICRpbnB1dCA9PiB7XG4gIGxldCB2YWx1ZVxuXG4gIHRyeXtcbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQoICRpbnB1dC52YWx1ZSApXG4gIH0gY2F0Y2goIGUgKXtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSA+IDBcbn1cblxuY29uc3QgZXJyb3JNZXNzYWdlID0gKCAkZWwsIG1lc3NhZ2UgKSA9PiB7XG4gIGNvbnN0ICRlcnJvciA9ICRlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoICcuYXZvLWFwcF9fZXJyb3InIClcbiAgJGVycm9yLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAkZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSggJ2F2by1hcHBfX2Vycm9yLS1oaWRkZW4nIClcbn1cblxuY29uc3QgdmFsaWRhdGUgPSAoICRuYW1lLCAkcHJpY2UsICR5ZWFycyApID0+IHtcbiAgbGV0IHN1Y2NlZWRlZCA9IHRydWVcblxuICBjb25zdCBuYW1lID0gJG5hbWUudmFsdWUudG9Mb3dlckNhc2UoKS50cmltKClcblxuICBpZiggIW5hbWVzLmluY2x1ZGVzKCBuYW1lICkgKXtcbiAgICBlcnJvck1lc3NhZ2UoICRuYW1lLCBgU29ycnksIHdlIGRvbid0IGhhdmUgcHJpY2UgZGF0YSBmb3IgdGhhdCBlbGVjdG9yYXRlYCApXG5cbiAgICBzdWNjZWVkZWQgPSBmYWxzZVxuICB9XG5cbiAgaWYoICF2YWxpZGF0ZVBvc2l0aXZlTnVtYmVyKCAkcHJpY2UgKSApe1xuICAgIGVycm9yTWVzc2FnZSggJHByaWNlLCBgUGxlYXNlIGVudGVyIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiB6ZXJvYCApXG5cbiAgICBzdWNjZWVkZWQgPSBmYWxzZVxuICB9XG5cbiAgaWYoICF2YWxpZGF0ZVBvc2l0aXZlTnVtYmVyKCAkeWVhcnMgKSApe1xuICAgIGVycm9yTWVzc2FnZSggJHllYXJzLCBgUGxlYXNlIGVudGVyIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiB6ZXJvYCApXG5cbiAgICBzdWNjZWVkZWQgPSBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHN1Y2NlZWRlZFxufVxuXG4vLyBzaG93IHRoZSByZXN1bHRcbmNvbnN0IG91dHB1dCA9IGlucHV0ID0+IHtcbiAgLy8gZ2V0IHRoZSBpbnB1dFxuICBjb25zdCB7IG5hbWUsIHByaWNlLCB5ZWFycyB9ID0gaW5wdXRcblxuICAvLyBjYWxjdWxhdGUgYWxsIHRoZSB0aGluZ3NcbiAgY29uc3QgbW9kZWwgPSBjYWxjdWxhdGUoIG5hbWUsIHByaWNlLCB5ZWFycyApXG5cbiAgLy8gcG9wdWxhdGUgdGhlIG1vZGVsXG4gIHBvcHVsYXRlKCBtb2RlbCApXG5cbiAgLy8gc2hvdyB0aGUgcmVzdWx0XG4gICRyZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSggJ2F2by1hcHBfX3Jlc3VsdC0taGlkZGVuJyApXG59XG5cbi8vIG1ha2Ugc3VyZSB0aGUgdXNlciBjYW4ndCBkbyBhbnl0aGluZyB1bnRpbCB0aGUgcGFnZSBsb2Fkc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGluaXQoKVxuXG4gIC8vIHdhaXQgZm9yIHRoZSB1c2VyIHRvIGNsaWNrIHRoZSBidXR0b24sIGdldCBpbnB1dCwgc2hvdyByZXN1bHRcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYoICFlLnRhcmdldC5tYXRjaGVzKCAnYnV0dG9uW25hbWU9XCJydW5cIl0nICkgKSByZXR1cm5cblxuICAgIC8vIGNsZWFyIGVycm9yc1xuICAgIGNvbnN0ICRlcnJvcnMgPSBBcnJheS5mcm9tKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmF2by1hcHBfX2Vycm9yJyApIClcbiAgICAkZXJyb3JzLmZvckVhY2goICRlcnJvciA9PiB7XG4gICAgICAkZXJyb3IuaW5uZXJIVE1MID0gJydcbiAgICAgICRlcnJvci5jbGFzc0xpc3QuYWRkKCAnYXZvLWFwcF9fZXJyb3ItLWhpZGRlbicgKVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnB1dCA9IGdldElucHV0KClcblxuICAgIC8vIHZhbGlkYXRpb24gZmFpbGVkXG4gICAgaWYoICFpbnB1dCApe1xuICAgICAgLy8gaGlkZSB0aGUgcmVzdWx0XG4gICAgICAkcmVzdWx0LmNsYXNzTGlzdC5hZGQoICdhdm8tYXBwX19yZXN1bHQtLWhpZGRlbicgKVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBvdXRwdXQoIGlucHV0IClcbiAgfSlcbn0pXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgdG9rZW5zID0gWyAndmFsdWUnLCAnaWYnLCAnaHJlZicgXVxuY29uc3Qgc2VsZWN0b3JzID0gdG9rZW5zLm1hcCggdG9rZW4gPT4gYFtkYXRhLSR7IHRva2VuIH1dYCApXG5cbmNvbnN0IFBvcHVsYXRlID0gJGVsID0+IHtcbiAgLypcbiAgICBmaW5kIGFsbCBlbGVtZW50cyB0aGF0IGhhdmUgW2RhdGEtdmFsdWU9XCJcIl0sIFtkYXRhLWlmPVwiXCJdIGV0Yy4gYW5kIGNvbnZlcnRcbiAgICB0aGUgcmV0dXJuZWQgbGl2ZSBub2RlIGxpc3QgdG8gYW4gYXJyYXkgc28gd2UgY2FuIGRvIGZ1bmN0aW9uYWwgc3R1ZmZcbiAgKi9cbiAgY29uc3QgJGVscyA9IEFycmF5LmZyb20oICRlbC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvcnMgKSApXG5cbiAgLypcbiAgICBtYWtlIGFuIG9iamVjdCBtYXAgZnJvbSBuYW1lIHRvIGVsZW1lbnQgbGlrZTpcbiAgICB7XG4gICAgICBwcmljZTogJHNvbWVFbCxcbiAgICAgIG5hbWU6ICRzb21lT3RoZXJFbCxcbiAgICAgIC8vLi4uZXRjXG4gICAgfVxuICAqL1xuICBjb25zdCBuYW1lTWFwID0gJGVscy5yZWR1Y2UoICggbWFwLCAkZWwgKSA9PiB7XG4gICAgdG9rZW5zLmZvckVhY2goIHRva2VuID0+IHtcbiAgICAgIGlmKCAkZWwubWF0Y2hlcyggYFtkYXRhLSR7IHRva2VuIH1dYCApKXtcbiAgICAgICAgY29uc3QgbmFtZSA9ICRlbC5kYXRhc2V0WyB0b2tlbiBdXG5cbiAgICAgICAgbWFwWyBuYW1lIF0gPSAkZWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG1hcFxuICB9LCB7fSApXG5cbiAgLy8gcG9wdWxhdGUgdGhlIG5hbWVkIGVsZW1lbnQgd2l0aCB0aGlzIHZhbHVlXG4gIGNvbnN0IHBvcHVsYXRlRWxlbWVudCA9ICggbmFtZSwgdmFsdWUgKSA9PiB7XG4gICAgLy8gZ2V0IHRoZSBlbGVtZW50IGZvciB0aGlzIG5hbWUgaW4gdGhlIG1vZGVsXG4gICAgY29uc3QgJGVsID0gbmFtZU1hcFsgbmFtZSBdXG5cbiAgICBpZiggISRlbCApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoICdObyBlbGVtZW50IGZvdW5kIGZvciAnICsgbmFtZSApXG5cbiAgICAvLyBGb3JtYXQgbnVtYmVycyBuaWNlbHlcbiAgICBpZiggdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyApXG4gICAgICB2YWx1ZSA9IE1hdGgucm91bmQoIHZhbHVlICkudG9Mb2NhbGVTdHJpbmcoKVxuXG4gICAgLy8gcG9wdWxhdGUgdGhlIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnRcbiAgICBpZiggJGVsLm1hdGNoZXMoICdbZGF0YS12YWx1ZV0nICkgKVxuICAgICAgJGVsLnRleHRDb250ZW50ID0gdmFsdWVcblxuICAgIC8vIGVtcHR5IHRoZSBlbGVtZW50IGlmIHZhbHVlIGlzIGZhbHNleVxuICAgIGlmKCAkZWwubWF0Y2hlcyggJ1tkYXRhLWlmXScgKSAmJiAhdmFsdWUgKVxuICAgICAgJGVsLmlubmVySFRNTCA9ICcnXG5cbiAgICAvLyBzZXQgYW4gaHJlZlxuICAgIGlmKCAkZWwubWF0Y2hlcyggJ1tkYXRhLWhyZWZdJyApIClcbiAgICAgICRlbC5zZXRBdHRyaWJ1dGUoICdocmVmJywgdmFsdWUgKVxuICB9XG5cbiAgLypcbiAgICBmb3IgZWFjaCBrZXkgaW4gdGhlIG1vZGVsLCBwb3B1bGF0ZSB0aGUgbWF0Y2hpbmcgZG9tIGVsZW1lbnQgd2l0aCB0aGVcbiAgICBtYXRjaGluZyB2YWx1ZVxuICAqL1xuICBjb25zdCBwb3B1bGF0ZSA9IG1vZGVsID0+IHtcbiAgICBPYmplY3Qua2V5cyggbW9kZWwgKS5mb3JFYWNoKCBuYW1lID0+IHtcbiAgICAgIHBvcHVsYXRlRWxlbWVudCggbmFtZSwgbW9kZWxbIG5hbWUgXSApXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBwb3B1bGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVsYXRlXG4iXX0=
