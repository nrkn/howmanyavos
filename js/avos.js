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

  // electorate name is normalized (lower case, trimmed)
  const calculate = ( electorateName, avocadoPrice, years ) => {
    // find the normalized data
    const data = priceMap[ electorateName.toLowerCase().trim() ]

    const { source, price, name } = data

    const houseInAvocados = price / avocadoPrice
    const bathtubs = houseInAvocados / 569
    const houseInBreakfasts = price / breakfastPrice
    const avocadosPerYear = houseInAvocados / years
    const avocadosPerMonth = avocadosPerYear / 12
    const avocadosPerWeek = avocadosPerYear / weeksPerYear
    const breakfastsPerYear = houseInBreakfasts / years
    const breakfastsPerWeek = breakfastsPerYear / weeksPerYear

    // a model suitable for populating the result
    const model = {
      houseInAvocados, avocadosPerMonth, avocadosPerWeek, breakfastsPerYear,
      breakfastsPerWeek, bathtubs, name, price, years, source
    }

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

/*
  Element.prototype.matches for Edge et al.
*/
require( './polyfills' )

const Calculator = require( './calculator' )
const Populate = require( './populate' )
const visualisation = require( './visualisation' )
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

  // visualisation
  const $house = document.querySelector( '.avo-app__house' )
  const $avos = document.querySelector( '.avo-app__avos' )
  visualisation( model.houseInAvocados, $house, $avos )

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

},{"./calculator":1,"./house-prices.json":2,"./polyfills":4,"./populate":5,"./visualisation":6}],4:[function(require,module,exports){
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
}


},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict'

const visualisation = ( houseInAvocados, $house, $avos ) => {
  /*
  // mass - a house is about 550m3, an avocado about 220cm3
  const avocadosPerHouse = 2500000

  let avocadoMass = houseInAvocados / avocadosPerHouse
  avocadoMass = Math.round( parseFloat( avocadoMass.toFixed( 2 ) ) * 1e2 )
  */
  const ratio = {
    house: 2500000,
    avos: houseInAvocados
  }

  $house.style.flexGrow = Math.cbrt( ratio.house )
  $avos.style.flexGrow = Math.cbrt( ratio.avos )
}

module.exports = visualisation

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2FsY3VsYXRvci5qcyIsInNyYy9ob3VzZS1wcmljZXMuanNvbiIsInNyYy9pbmRleC5qcyIsInNyYy9wb2x5ZmlsbHMuanMiLCJzcmMvcG9wdWxhdGUuanMiLCJzcmMvdmlzdWFsaXNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIHRha2VzIHByZWRlZmluZWQgZGF0YSBhbmQgcmV0dXJucyBhIGNhbGN1bGF0ZSBmdW5jdGlvblxuY29uc3QgQ2FsY3VsYXRvciA9ICggcHJpY2VzLCBicmVha2Zhc3RQcmljZSApID0+IHtcbiAgLypcbiAgICBNYWtlIGEgbWFwIGludG8gZGF0YSB1c2luZyBub3JtYWxpemVkICh0byBsb3dlciwgdHJpbW1lZCkga2V5c1xuXG4gICAgU28gd2UgY2FuIHJldGFpbiB0aGUgb3JpZ2luYWwgbmFtZSwgYnV0IGFsc28gZG8gbG9va3VwcyB3aXRoIHRoZSB1c2VyJ3NcbiAgICBpbnB1dCBhZnRlciB0aGF0IGlzIGFsc28gbm9ybWFsaXplZFxuXG4gICAge1xuICAgICAgXCJhdWNrbGFuZCBjZW50cmFsXCI6IHtcbiAgICAgICAgbmFtZTogJ0F1Y2tsYW5kIENlbnRyYWwnLFxuICAgICAgICAvL2V0Y1xuICAgICAgfSxcbiAgICAgIFwiYmF5IG9mIHBsZW50eVwiOiB7XG4gICAgICAgIC8vZXRjXG4gICAgICB9XG4gICAgICAvLyBldGNcbiAgICB9XG4gICovXG4gIGNvbnN0IHByaWNlTWFwID0gcHJpY2VzLnJlZHVjZSggKCBtYXAsIGRhdGEgKSA9PiB7XG4gICAgbWFwWyBkYXRhLm5hbWUudG9Mb3dlckNhc2UoKS50cmltKCkgXSA9IGRhdGFcblxuICAgIHJldHVybiBtYXBcbiAgfSwge30gKVxuXG4gIGNvbnN0IHdlZWtzUGVyWWVhciA9IDUyLjE0MjlcblxuICAvLyBlbGVjdG9yYXRlIG5hbWUgaXMgbm9ybWFsaXplZCAobG93ZXIgY2FzZSwgdHJpbW1lZClcbiAgY29uc3QgY2FsY3VsYXRlID0gKCBlbGVjdG9yYXRlTmFtZSwgYXZvY2Fkb1ByaWNlLCB5ZWFycyApID0+IHtcbiAgICAvLyBmaW5kIHRoZSBub3JtYWxpemVkIGRhdGFcbiAgICBjb25zdCBkYXRhID0gcHJpY2VNYXBbIGVsZWN0b3JhdGVOYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpIF1cblxuICAgIGNvbnN0IHsgc291cmNlLCBwcmljZSwgbmFtZSB9ID0gZGF0YVxuXG4gICAgY29uc3QgaG91c2VJbkF2b2NhZG9zID0gcHJpY2UgLyBhdm9jYWRvUHJpY2VcbiAgICBjb25zdCBiYXRodHVicyA9IGhvdXNlSW5Bdm9jYWRvcyAvIDU2OVxuICAgIGNvbnN0IGhvdXNlSW5CcmVha2Zhc3RzID0gcHJpY2UgLyBicmVha2Zhc3RQcmljZVxuICAgIGNvbnN0IGF2b2NhZG9zUGVyWWVhciA9IGhvdXNlSW5Bdm9jYWRvcyAvIHllYXJzXG4gICAgY29uc3QgYXZvY2Fkb3NQZXJNb250aCA9IGF2b2NhZG9zUGVyWWVhciAvIDEyXG4gICAgY29uc3QgYXZvY2Fkb3NQZXJXZWVrID0gYXZvY2Fkb3NQZXJZZWFyIC8gd2Vla3NQZXJZZWFyXG4gICAgY29uc3QgYnJlYWtmYXN0c1BlclllYXIgPSBob3VzZUluQnJlYWtmYXN0cyAvIHllYXJzXG4gICAgY29uc3QgYnJlYWtmYXN0c1BlcldlZWsgPSBicmVha2Zhc3RzUGVyWWVhciAvIHdlZWtzUGVyWWVhclxuXG4gICAgLy8gYSBtb2RlbCBzdWl0YWJsZSBmb3IgcG9wdWxhdGluZyB0aGUgcmVzdWx0XG4gICAgY29uc3QgbW9kZWwgPSB7XG4gICAgICBob3VzZUluQXZvY2Fkb3MsIGF2b2NhZG9zUGVyTW9udGgsIGF2b2NhZG9zUGVyV2VlaywgYnJlYWtmYXN0c1BlclllYXIsXG4gICAgICBicmVha2Zhc3RzUGVyV2VlaywgYmF0aHR1YnMsIG5hbWUsIHByaWNlLCB5ZWFycywgc291cmNlXG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGVsXG4gIH1cblxuICByZXR1cm4gY2FsY3VsYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FsY3VsYXRvclxuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJuYW1lXCI6IFwiQXVja2xhbmQgQ2VudHJhbFwiLFxuICAgIFwicHJpY2VcIjogMTA3OTg3OSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJCYXkgb2YgUGxlbnR5XCIsXG4gICAgXCJwcmljZVwiOiA1MzM2MDAsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3Lm56aGVyYWxkLmNvLm56L2JheS1vZi1wbGVudHktdGltZXMvbmV3cy9hcnRpY2xlLmNmbT9jX2lkPTE1MDMzNDMmb2JqZWN0aWQ9MTE2NTY4NjFcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQm90YW55XCIsXG4gICAgXCJwcmljZVwiOiAxMTcyNjE3LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNocmlzdGNodXJjaCBDZW50cmFsXCIsXG4gICAgXCJwcmljZVwiOiA1ODUwOTksXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ2hyaXN0Y2h1cmNoIEVhc3RcIixcbiAgICBcInByaWNlXCI6IDM3MDkxMyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDbHV0aGEtU291dGhsYW5kXCIsXG4gICAgXCJwcmljZVwiOiAzMTM3MTEsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ29yb21hbmRlbFwiLFxuICAgIFwicHJpY2VcIjogNjkwNjM0LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkR1bmVkaW4gTm9ydGhcIixcbiAgICBcInByaWNlXCI6IDM0NjQ0NCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJEdW5lZGluIFNvdXRoXCIsXG4gICAgXCJwcmljZVwiOiAzNTIyMTIsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRWFzdCBDb2FzdFwiLFxuICAgIFwicHJpY2VcIjogMjg4NzQ4LFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5uemhlcmFsZC5jby5uei9iYXktb2YtcGxlbnR5LXRpbWVzL25ld3MvYXJ0aWNsZS5jZm0/Y19pZD0xNTAzMzQzJm9iamVjdGlkPTExNjU2ODYxXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkVhc3QgQ29hc3QgQmF5c1wiLFxuICAgIFwicHJpY2VcIjogMTE0ODUwNSxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cubnpoZXJhbGQuY28ubnovYnVzaW5lc3MvbmV3cy9hcnRpY2xlLmNmbT9jX2lkPTMmb2JqZWN0aWQ9MTE0OTE3MjBcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRXBzb21cIixcbiAgICBcInByaWNlXCI6IDE2NTM1MDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSGFtaWx0b24gRWFzdFwiLFxuICAgIFwicHJpY2VcIjogNTg2MjE0LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkhhbWlsdG9uIFdlc3RcIixcbiAgICBcInByaWNlXCI6IDQ4ODk1MyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJIZWxlbnN2aWxsZVwiLFxuICAgIFwicHJpY2VcIjogNTg3NTAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkh1bnVhXCIsXG4gICAgXCJwcmljZVwiOiA2Njk1MTgsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSHV0dCBTb3V0aFwiLFxuICAgIFwicHJpY2VcIjogNTAzMjg2LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIklsYW1cIixcbiAgICBcInByaWNlXCI6IDY0MTU1MCxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cuc3R1ZmYuY28ubnovYnVzaW5lc3MvbW9uZXkvNzc3NDE5MjcvSG91c2luZy1kZW1hbmQtcHVzaGVzLXByaWNlLWdyb3d0aC1lYXN0LWluLUNocmlzdGNodXJjaFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJJbnZlcmNhcmdpbGxcIixcbiAgICBcInByaWNlXCI6IDIzOTQ4NixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJLYWlrxY11cmFcIixcbiAgICBcInByaWNlXCI6IDM5OTY2MSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJLZWxzdG9uXCIsXG4gICAgXCJwcmljZVwiOiA3MDg1MDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWFuYVwiLFxuICAgIFwicHJpY2VcIjogNTAxMDI4LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hbmdlcmVcIixcbiAgICBcInByaWNlXCI6IDYzNjc1MCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYW51a2F1IEVhc3RcIixcbiAgICBcInByaWNlXCI6IDExNzI2MTcsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWFudXJld2FcIixcbiAgICBcInByaWNlXCI6IDYwNzAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYXVuZ2FraWVraWVcIixcbiAgICBcInByaWNlXCI6IDEwMjMzMDYsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwczovL3d3dy5iYXJmb290LmNvLm56L21hcmtldC1yZXBvcnRzLzIwMTYvZmVicnVhcnkvc3VidXJiLXJlcG9ydFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNdCBBbGJlcnRcIixcbiAgICBcInByaWNlXCI6IDEwOTQwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTXQgUm9za2lsbFwiLFxuICAgIFwicHJpY2VcIjogOTA5MDAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5hcGllclwiLFxuICAgIFwicHJpY2VcIjogNDI1NDg0LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5lbHNvblwiLFxuICAgIFwicHJpY2VcIjogNTI3NDIyLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5ldyBMeW5uXCIsXG4gICAgXCJwcmljZVwiOiA3MDIwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTmV3IFBseW1vdXRoXCIsXG4gICAgXCJwcmljZVwiOiA0MTg0NDUsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTm9ydGggU2hvcmVcIixcbiAgICBcInByaWNlXCI6IDExOTUyOTIsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTm9ydGhjb3RlXCIsXG4gICAgXCJwcmljZVwiOiAxMTk4MjAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5vcnRobGFuZFwiLFxuICAgIFwicHJpY2VcIjogNTU0MDAwLFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5zY29vcC5jby5uei9zdG9yaWVzL0JVMTcwMi9TMDA4MjQvbm9ydGhsYW5kLXJlc2lkZW50aWFsLXByb3BlcnR5LXByaWNlLWluY3JlYXNlcy1hY2NlbGVyYXRlZC5odG1cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwixYxoYXJpdVwiLFxuICAgIFwicHJpY2VcIjogNTgwMDAwLFxuICAgIFwic291cmNlXCI6IFwid3d3LmxlYWRlcnN3ZWxsaW5ndG9uLmNvLm56L3MvUFUtMDYxNi1BbmRyZXdQYW5vLnBkZlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCLFjHRha2lcIixcbiAgICBcInByaWNlXCI6IDMyNTUwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQYWt1cmFuZ2FcIixcbiAgICBcInByaWNlXCI6IDg1NDAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQYWxtZXJzdG9uIE5vcnRoXCIsXG4gICAgXCJwcmljZVwiOiAzNTQ5OTksXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUGFwYWt1cmFcIixcbiAgICBcInByaWNlXCI6IDU3NTEzOSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQb3J0IEhpbGxzXCIsXG4gICAgXCJwcmljZVwiOiA2NDgwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3LnN0dWZmLmNvLm56L3RoZS1wcmVzcy9uZXdzLzY5MjI5MjQ4L2NocmlzdGNodXJjaC1ob21lLXZhbHVlcy10YWtlLWEtanVtcC1vbi10aGUtaGlsbHMtZmxhdHRlci1vbi10aGUtZmxhdFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSYW5naXRhdGFcIixcbiAgICBcInByaWNlXCI6IDM1NTU1NixcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cubGFuZGxvcmRzLmNvLm56L2hvdXNpbmctc3RhdGlzdGljcy8/Z3JhcGhzdWJtaXR0ZWQ9dHJ1ZSZmcm9tbW9udGg9MSZmcm9teWVhcj0xOTk0JnRvbW9udGg9NSZ0b3llYXI9MjAxNyZncmFwaGFyZWFzJTVCJTVEPTExOSZncmFwaHN0eWxlPXByaWNlJnN1Ym1pdD1TaG93K0dyYXBoXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlJhbmdpdMSra2VpXCIsXG4gICAgXCJwcmljZVwiOiAxNjMxMTEsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3LnN0dWZmLmNvLm56L21hbmF3YXR1LXN0YW5kYXJkL25ld3MvODg5NTc0OTgvSG91c2VzLXdvcnRoLW1vcmUtaW4tUGFsbWVyc3Rvbi1Ob3J0aC1hbmQtSG9yb3doZW51YS1RVi1maWd1cmVzLXNob3dcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUmltdXRha2FcIixcbiAgICBcInByaWNlXCI6IDQ0NTYzMixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSb2RuZXlcIixcbiAgICBcInByaWNlXCI6IDgwOTc1MixcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cubnpoZXJhbGQuY28ubnovYnVzaW5lc3MvbmV3cy9hcnRpY2xlLmNmbT9jX2lkPTMmb2JqZWN0aWQ9MTE1OTg3MDBcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUm9uZ290YWlcIixcbiAgICBcInByaWNlXCI6IDU4MzAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSb3RvcnVhXCIsXG4gICAgXCJwcmljZVwiOiAzOTY0MjMsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2Vsd3luXCIsXG4gICAgXCJwcmljZVwiOiA1NDI0OTMsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwczovL2Vjb3Byb2ZpbGUuaW5mb21ldHJpY3MuY28ubnovU2Vsd3luJTJCRGlzdHJpY3QvUXVhcnRlcmx5RWNvbm9taWNNb25pdG9yL0hvdXNlUHJpY2VzXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlTEgW1ha2lcIixcbiAgICBcInByaWNlXCI6IDEwMjEyNTAsXG4gICAgXCJzb3VyY2VcIjogXCJ0YW1ha2kgZWFzdFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUYXJhbmFraS1LaW5nIENvdW50cnlcIixcbiAgICBcInByaWNlXCI6IDQxMTE2MCxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cuc3R1ZmYuY28ubnovYnVzaW5lc3MvcHJvcGVydHkvODgzMDMwNDYvdGFyYW5ha2ktcmVzaWRlbnRpYWwtcHJvcGVydHktcHJpY2VzLWNvbnRpbnVlLXRvLXJpc2VcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVGF1cMWNXCIsXG4gICAgXCJwcmljZVwiOiA0Mzc5NDMsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVGF1cmFuZ2FcIixcbiAgICBcInByaWNlXCI6IDY3ODY0MyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUZSBBdGF0dVwiLFxuICAgIFwicHJpY2VcIjogODM0NzUwLFxuICAgIFwic291cmNlXCI6IFwiVGUgQXRhdHUgUGVuaW5zdWxhICsgVGUgQXRhdHUgc291dGhcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVHVraXR1a2lcIixcbiAgICBcInByaWNlXCI6IDQwODUxMCxcbiAgICBcInNvdXJjZVwiOiBcImhhc3RpbmdzXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlVwcGVyIEhhcmJvdXJcIixcbiAgICBcInByaWNlXCI6IDkzNzMyNCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXYWlrYXRvXCIsXG4gICAgXCJwcmljZVwiOiA0NTAwNDMsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2FpbWFrYXJpcmlcIixcbiAgICBcInByaWNlXCI6IDQzNTIwMCxcbiAgICBcInNvdXJjZVwiOiBcImh0dHBzOi8vZWNvcHJvZmlsZS5pbmZvbWV0cmljcy5jby5uei9XYWltYWthcmlyaSUyQkRpc3RyaWN0L1F1YXJ0ZXJseUVjb25vbWljTW9uaXRvci9Ib3VzZVByaWNlc1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXYWlyYXJhcGFcIixcbiAgICBcInByaWNlXCI6IDM1OTIxMixcbiAgICBcInNvdXJjZVwiOiBcInNvdXRoIHdhaXJhcmFwYSArIG1hc3RlcnRvblwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXYWl0YWtpXCIsXG4gICAgXCJwcmljZVwiOiAyNjc2MzEsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2VsbGluZ3RvbiBDZW50cmFsXCIsXG4gICAgXCJwcmljZVwiOiA3MjEyNTIsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2VzdCBDb2FzdC1UYXNtYW5cIixcbiAgICBcInByaWNlXCI6IDMyMDIwMCxcbiAgICBcInNvdXJjZVwiOiBcIm5vIGRhdGEgZm9yIGhhYXN0LCBoYXJpIGhhcmksIHdoYXRhcm9hLCByb3NzLCBmb3ggZ2xhY2llclwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXaGFuZ2FudWlcIixcbiAgICBcInByaWNlXCI6IDIyMDMzNixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXaGFuZ2FyZWlcIixcbiAgICBcInByaWNlXCI6IDQ3Nzc2NSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXaWdyYW1cIixcbiAgICBcInByaWNlXCI6IDY0MDAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH1cbl1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKlxuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIGZvciBFZGdlIGV0IGFsLlxuKi9cbnJlcXVpcmUoICcuL3BvbHlmaWxscycgKVxuXG5jb25zdCBDYWxjdWxhdG9yID0gcmVxdWlyZSggJy4vY2FsY3VsYXRvcicgKVxuY29uc3QgUG9wdWxhdGUgPSByZXF1aXJlKCAnLi9wb3B1bGF0ZScgKVxuY29uc3QgdmlzdWFsaXNhdGlvbiA9IHJlcXVpcmUoICcuL3Zpc3VhbGlzYXRpb24nIClcbmNvbnN0IHByaWNlcyA9IHJlcXVpcmUoICcuL2hvdXNlLXByaWNlcy5qc29uJyApXG5cbmNvbnN0IG5hbWVzID0gcHJpY2VzLm1hcCggcCA9PiBwLm5hbWUudG9Mb3dlckNhc2UoKS50cmltKCkgKVxuY29uc3QgYnJlYWtmYXN0UHJpY2UgPSAxNC45OVxuXG4vLyBpbml0aWFsaXplIHRoZSBjYWxjdWxhdGUgZnVuY3Rpb24gd2l0aCB0aGUgcHJlZGVmaW5lZCBkYXRhXG5jb25zdCBjYWxjdWxhdGUgPSBDYWxjdWxhdG9yKCBwcmljZXMsIGJyZWFrZmFzdFByaWNlIClcblxuLy8gbm90IGF2YWlsYWJsZSB1bnRpbCBpbml0IGlzIGNhbGxlZFxubGV0IHBvcHVsYXRlLCAkcmVzdWx0XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIC8qXG4gICAgc2V0IHVwIGF1dG9jb21wbGV0ZSAtIGRlZ3JhZGVzIHRvIG9yZGluYXJ5IHRleHQgaW5wdXQgaW4gdW5zdXBwb3J0ZWRcbiAgICBicm93c2Vyc1xuXG4gICAgaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9ZGF0YWxpc3RcbiAgKi9cbiAgY29uc3QgJGRhdGFsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNuYW1lcycgKVxuXG4gIG5hbWVzLmZvckVhY2goIG5hbWUgPT4ge1xuICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnb3B0aW9uJyApXG4gICAgJG9wdGlvbi52YWx1ZSA9IG5hbWVcbiAgICAkZGF0YWxpc3QuYXBwZW5kQ2hpbGQoICRvcHRpb24gKVxuICB9KVxuXG4gIC8qXG4gICAgc2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgcmVzdWx0IHNlY3Rpb24gb2YgdGhlIHBhZ2UgYW5kIGluaXRpYWxpemUgdGhlXG4gICAgcG9wdWxhdGUgZnVuY3Rpb25cbiAgKi9cbiAgJHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuYXZvLWFwcF9fcmVzdWx0JyApXG4gIHBvcHVsYXRlID0gUG9wdWxhdGUoICRyZXN1bHQgKVxufVxuXG4vLyBnZXQgdGhlIHVzZXIncyBpbnB1dFxuY29uc3QgZ2V0SW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0ICRuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ1tuYW1lPVwibmFtZVwiXScgKVxuICBjb25zdCAkcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnW25hbWU9XCJwcmljZVwiXScgKVxuICBjb25zdCAkeWVhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnW25hbWU9XCJ5ZWFyc1wiXScgKVxuXG4gIGlmKCAhdmFsaWRhdGUoICRuYW1lLCAkcHJpY2UsICR5ZWFycyApIClcbiAgICByZXR1cm4gZmFsc2VcblxuICBjb25zdCBuYW1lID0gJG5hbWUudmFsdWVcbiAgY29uc3QgcHJpY2UgPSBwYXJzZUZsb2F0KCAkcHJpY2UudmFsdWUgKVxuICBjb25zdCB5ZWFycyA9IHBhcnNlRmxvYXQoICR5ZWFycy52YWx1ZSApXG5cbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIHllYXJzIH1cbn1cblxuY29uc3QgdmFsaWRhdGVQb3NpdGl2ZU51bWJlciA9ICRpbnB1dCA9PiB7XG4gIGxldCB2YWx1ZVxuXG4gIHRyeXtcbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQoICRpbnB1dC52YWx1ZSApXG4gIH0gY2F0Y2goIGUgKXtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSA+IDBcbn1cblxuY29uc3QgZXJyb3JNZXNzYWdlID0gKCAkZWwsIG1lc3NhZ2UgKSA9PiB7XG4gIGNvbnN0ICRlcnJvciA9ICRlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoICcuYXZvLWFwcF9fZXJyb3InIClcbiAgJGVycm9yLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAkZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSggJ2F2by1hcHBfX2Vycm9yLS1oaWRkZW4nIClcbn1cblxuY29uc3QgdmFsaWRhdGUgPSAoICRuYW1lLCAkcHJpY2UsICR5ZWFycyApID0+IHtcbiAgbGV0IHN1Y2NlZWRlZCA9IHRydWVcblxuICBjb25zdCBuYW1lID0gJG5hbWUudmFsdWUudG9Mb3dlckNhc2UoKS50cmltKClcblxuICBpZiggIW5hbWVzLmluY2x1ZGVzKCBuYW1lICkgKXtcbiAgICBlcnJvck1lc3NhZ2UoICRuYW1lLCBgU29ycnksIHdlIGRvbid0IGhhdmUgcHJpY2UgZGF0YSBmb3IgdGhhdCBlbGVjdG9yYXRlYCApXG5cbiAgICBzdWNjZWVkZWQgPSBmYWxzZVxuICB9XG5cbiAgaWYoICF2YWxpZGF0ZVBvc2l0aXZlTnVtYmVyKCAkcHJpY2UgKSApe1xuICAgIGVycm9yTWVzc2FnZSggJHByaWNlLCBgUGxlYXNlIGVudGVyIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiB6ZXJvYCApXG5cbiAgICBzdWNjZWVkZWQgPSBmYWxzZVxuICB9XG5cbiAgaWYoICF2YWxpZGF0ZVBvc2l0aXZlTnVtYmVyKCAkeWVhcnMgKSApe1xuICAgIGVycm9yTWVzc2FnZSggJHllYXJzLCBgUGxlYXNlIGVudGVyIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiB6ZXJvYCApXG5cbiAgICBzdWNjZWVkZWQgPSBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHN1Y2NlZWRlZFxufVxuXG4vLyBzaG93IHRoZSByZXN1bHRcbmNvbnN0IG91dHB1dCA9IGlucHV0ID0+IHtcbiAgLy8gZ2V0IHRoZSBpbnB1dFxuICBjb25zdCB7IG5hbWUsIHByaWNlLCB5ZWFycyB9ID0gaW5wdXRcblxuICAvLyBjYWxjdWxhdGUgYWxsIHRoZSB0aGluZ3NcbiAgY29uc3QgbW9kZWwgPSBjYWxjdWxhdGUoIG5hbWUsIHByaWNlLCB5ZWFycyApXG5cbiAgLy8gcG9wdWxhdGUgdGhlIG1vZGVsXG4gIHBvcHVsYXRlKCBtb2RlbCApXG5cbiAgLy8gdmlzdWFsaXNhdGlvblxuICBjb25zdCAkaG91c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmF2by1hcHBfX2hvdXNlJyApXG4gIGNvbnN0ICRhdm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5hdm8tYXBwX19hdm9zJyApXG4gIHZpc3VhbGlzYXRpb24oIG1vZGVsLmhvdXNlSW5Bdm9jYWRvcywgJGhvdXNlLCAkYXZvcyApXG5cbiAgLy8gc2hvdyB0aGUgcmVzdWx0XG4gICRyZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSggJ2F2by1hcHBfX3Jlc3VsdC0taGlkZGVuJyApXG59XG5cbi8vIG1ha2Ugc3VyZSB0aGUgdXNlciBjYW4ndCBkbyBhbnl0aGluZyB1bnRpbCB0aGUgcGFnZSBsb2Fkc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGluaXQoKVxuXG4gIC8vIHdhaXQgZm9yIHRoZSB1c2VyIHRvIGNsaWNrIHRoZSBidXR0b24sIGdldCBpbnB1dCwgc2hvdyByZXN1bHRcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYoICFlLnRhcmdldC5tYXRjaGVzKCAnYnV0dG9uW25hbWU9XCJydW5cIl0nICkgKSByZXR1cm5cblxuICAgIC8vIGNsZWFyIGVycm9yc1xuICAgIGNvbnN0ICRlcnJvcnMgPSBBcnJheS5mcm9tKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmF2by1hcHBfX2Vycm9yJyApIClcbiAgICAkZXJyb3JzLmZvckVhY2goICRlcnJvciA9PiB7XG4gICAgICAkZXJyb3IuaW5uZXJIVE1MID0gJydcbiAgICAgICRlcnJvci5jbGFzc0xpc3QuYWRkKCAnYXZvLWFwcF9fZXJyb3ItLWhpZGRlbicgKVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnB1dCA9IGdldElucHV0KClcblxuICAgIC8vIHZhbGlkYXRpb24gZmFpbGVkXG4gICAgaWYoICFpbnB1dCApe1xuICAgICAgLy8gaGlkZSB0aGUgcmVzdWx0XG4gICAgICAkcmVzdWx0LmNsYXNzTGlzdC5hZGQoICdhdm8tYXBwX19yZXN1bHQtLWhpZGRlbicgKVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBvdXRwdXQoIGlucHV0IClcbiAgfSlcbn0pXG4iLCJpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID1cbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9ICh0aGlzLmRvY3VtZW50IHx8IHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzKSxcbiAgICAgICAgICAgICAgICBpID0gbWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSB0aGlzKSB7fVxuICAgICAgICAgICAgcmV0dXJuIGkgPiAtMTtcbiAgICAgICAgfTtcbn1cblxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHRva2VucyA9IFsgJ3ZhbHVlJywgJ2lmJywgJ2hyZWYnIF1cbmNvbnN0IHNlbGVjdG9ycyA9IHRva2Vucy5tYXAoIHRva2VuID0+IGBbZGF0YS0keyB0b2tlbiB9XWAgKVxuXG5jb25zdCBQb3B1bGF0ZSA9ICRlbCA9PiB7XG4gIC8qXG4gICAgZmluZCBhbGwgZWxlbWVudHMgdGhhdCBoYXZlIFtkYXRhLXZhbHVlPVwiXCJdLCBbZGF0YS1pZj1cIlwiXSBldGMuIGFuZCBjb252ZXJ0XG4gICAgdGhlIHJldHVybmVkIGxpdmUgbm9kZSBsaXN0IHRvIGFuIGFycmF5IHNvIHdlIGNhbiBkbyBmdW5jdGlvbmFsIHN0dWZmXG4gICovXG4gIGNvbnN0ICRlbHMgPSBBcnJheS5mcm9tKCAkZWwucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3JzICkgKVxuXG4gIC8qXG4gICAgbWFrZSBhbiBvYmplY3QgbWFwIGZyb20gbmFtZSB0byBlbGVtZW50IGxpa2U6XG4gICAge1xuICAgICAgcHJpY2U6ICRzb21lRWwsXG4gICAgICBuYW1lOiAkc29tZU90aGVyRWwsXG4gICAgICAvLy4uLmV0Y1xuICAgIH1cbiAgKi9cbiAgY29uc3QgbmFtZU1hcCA9ICRlbHMucmVkdWNlKCAoIG1hcCwgJGVsICkgPT4ge1xuICAgIHRva2Vucy5mb3JFYWNoKCB0b2tlbiA9PiB7XG4gICAgICBpZiggJGVsLm1hdGNoZXMoIGBbZGF0YS0keyB0b2tlbiB9XWAgKSl7XG4gICAgICAgIGNvbnN0IG5hbWUgPSAkZWwuZGF0YXNldFsgdG9rZW4gXVxuXG4gICAgICAgIG1hcFsgbmFtZSBdID0gJGVsXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtYXBcbiAgfSwge30gKVxuXG4gIC8vIHBvcHVsYXRlIHRoZSBuYW1lZCBlbGVtZW50IHdpdGggdGhpcyB2YWx1ZVxuICBjb25zdCBwb3B1bGF0ZUVsZW1lbnQgPSAoIG5hbWUsIHZhbHVlICkgPT4ge1xuICAgIC8vIGdldCB0aGUgZWxlbWVudCBmb3IgdGhpcyBuYW1lIGluIHRoZSBtb2RlbFxuICAgIGNvbnN0ICRlbCA9IG5hbWVNYXBbIG5hbWUgXVxuXG4gICAgaWYoICEkZWwgKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCAnTm8gZWxlbWVudCBmb3VuZCBmb3IgJyArIG5hbWUgKVxuXG4gICAgLy8gRm9ybWF0IG51bWJlcnMgbmljZWx5XG4gICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgKVxuICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKCB2YWx1ZSApLnRvTG9jYWxlU3RyaW5nKClcblxuICAgIC8vIHBvcHVsYXRlIHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50XG4gICAgaWYoICRlbC5tYXRjaGVzKCAnW2RhdGEtdmFsdWVdJyApIClcbiAgICAgICRlbC50ZXh0Q29udGVudCA9IHZhbHVlXG5cbiAgICAvLyBlbXB0eSB0aGUgZWxlbWVudCBpZiB2YWx1ZSBpcyBmYWxzZXlcbiAgICBpZiggJGVsLm1hdGNoZXMoICdbZGF0YS1pZl0nICkgJiYgIXZhbHVlIClcbiAgICAgICRlbC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgLy8gc2V0IGFuIGhyZWZcbiAgICBpZiggJGVsLm1hdGNoZXMoICdbZGF0YS1ocmVmXScgKSApXG4gICAgICAkZWwuc2V0QXR0cmlidXRlKCAnaHJlZicsIHZhbHVlIClcbiAgfVxuXG4gIC8qXG4gICAgZm9yIGVhY2gga2V5IGluIHRoZSBtb2RlbCwgcG9wdWxhdGUgdGhlIG1hdGNoaW5nIGRvbSBlbGVtZW50IHdpdGggdGhlXG4gICAgbWF0Y2hpbmcgdmFsdWVcbiAgKi9cbiAgY29uc3QgcG9wdWxhdGUgPSBtb2RlbCA9PiB7XG4gICAgT2JqZWN0LmtleXMoIG1vZGVsICkuZm9yRWFjaCggbmFtZSA9PiB7XG4gICAgICBwb3B1bGF0ZUVsZW1lbnQoIG5hbWUsIG1vZGVsWyBuYW1lIF0gKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gcG9wdWxhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1bGF0ZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHZpc3VhbGlzYXRpb24gPSAoIGhvdXNlSW5Bdm9jYWRvcywgJGhvdXNlLCAkYXZvcyApID0+IHtcbiAgLypcbiAgLy8gbWFzcyAtIGEgaG91c2UgaXMgYWJvdXQgNTUwbTMsIGFuIGF2b2NhZG8gYWJvdXQgMjIwY20zXG4gIGNvbnN0IGF2b2NhZG9zUGVySG91c2UgPSAyNTAwMDAwXG5cbiAgbGV0IGF2b2NhZG9NYXNzID0gaG91c2VJbkF2b2NhZG9zIC8gYXZvY2Fkb3NQZXJIb3VzZVxuICBhdm9jYWRvTWFzcyA9IE1hdGgucm91bmQoIHBhcnNlRmxvYXQoIGF2b2NhZG9NYXNzLnRvRml4ZWQoIDIgKSApICogMWUyIClcbiAgKi9cbiAgY29uc3QgcmF0aW8gPSB7XG4gICAgaG91c2U6IDI1MDAwMDAsXG4gICAgYXZvczogaG91c2VJbkF2b2NhZG9zXG4gIH1cblxuICAkaG91c2Uuc3R5bGUuZmxleEdyb3cgPSBNYXRoLmNicnQoIHJhdGlvLmhvdXNlIClcbiAgJGF2b3Muc3R5bGUuZmxleEdyb3cgPSBNYXRoLmNicnQoIHJhdGlvLmF2b3MgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc3VhbGlzYXRpb25cbiJdfQ==
