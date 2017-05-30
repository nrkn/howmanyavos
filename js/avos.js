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

// a house is about 550m3, an avocado about 220cm3 - 2,500,000 avos in a house
const visualisation = ( houseInAvocados, $house, $avos ) => {
  const houseRatio = Math.cbrt( 2500000 )
  const avoRatio = Math.cbrt( houseInAvocados )
  const sum = houseRatio + avoRatio
  const unit = 100 / sum

  const houseWidth = unit * houseRatio
  const avoWidth = unit * avoRatio

  $house.style.width = houseWidth + '%'
  $avos.style.width = avoWidth + '%'
}

module.exports = visualisation

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2FsY3VsYXRvci5qcyIsInNyYy9ob3VzZS1wcmljZXMuanNvbiIsInNyYy9pbmRleC5qcyIsInNyYy9wb2x5ZmlsbHMuanMiLCJzcmMvcG9wdWxhdGUuanMiLCJzcmMvdmlzdWFsaXNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCdcblxuLy8gdGFrZXMgcHJlZGVmaW5lZCBkYXRhIGFuZCByZXR1cm5zIGEgY2FsY3VsYXRlIGZ1bmN0aW9uXG5jb25zdCBDYWxjdWxhdG9yID0gKCBwcmljZXMsIGJyZWFrZmFzdFByaWNlICkgPT4ge1xuICAvKlxuICAgIE1ha2UgYSBtYXAgaW50byBkYXRhIHVzaW5nIG5vcm1hbGl6ZWQgKHRvIGxvd2VyLCB0cmltbWVkKSBrZXlzXG5cbiAgICBTbyB3ZSBjYW4gcmV0YWluIHRoZSBvcmlnaW5hbCBuYW1lLCBidXQgYWxzbyBkbyBsb29rdXBzIHdpdGggdGhlIHVzZXInc1xuICAgIGlucHV0IGFmdGVyIHRoYXQgaXMgYWxzbyBub3JtYWxpemVkXG5cbiAgICB7XG4gICAgICBcImF1Y2tsYW5kIGNlbnRyYWxcIjoge1xuICAgICAgICBuYW1lOiAnQXVja2xhbmQgQ2VudHJhbCcsXG4gICAgICAgIC8vZXRjXG4gICAgICB9LFxuICAgICAgXCJiYXkgb2YgcGxlbnR5XCI6IHtcbiAgICAgICAgLy9ldGNcbiAgICAgIH1cbiAgICAgIC8vIGV0Y1xuICAgIH1cbiAgKi9cbiAgY29uc3QgcHJpY2VNYXAgPSBwcmljZXMucmVkdWNlKCAoIG1hcCwgZGF0YSApID0+IHtcbiAgICBtYXBbIGRhdGEubmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSBdID0gZGF0YVxuXG4gICAgcmV0dXJuIG1hcFxuICB9LCB7fSApXG5cbiAgY29uc3Qgd2Vla3NQZXJZZWFyID0gNTIuMTQyOVxuXG4gIC8vIGVsZWN0b3JhdGUgbmFtZSBpcyBub3JtYWxpemVkIChsb3dlciBjYXNlLCB0cmltbWVkKVxuICBjb25zdCBjYWxjdWxhdGUgPSAoIGVsZWN0b3JhdGVOYW1lLCBhdm9jYWRvUHJpY2UsIHllYXJzICkgPT4ge1xuICAgIC8vIGZpbmQgdGhlIG5vcm1hbGl6ZWQgZGF0YVxuICAgIGNvbnN0IGRhdGEgPSBwcmljZU1hcFsgZWxlY3RvcmF0ZU5hbWUudG9Mb3dlckNhc2UoKS50cmltKCkgXVxuXG4gICAgY29uc3QgeyBzb3VyY2UsIHByaWNlLCBuYW1lIH0gPSBkYXRhXG5cbiAgICBjb25zdCBob3VzZUluQXZvY2Fkb3MgPSBwcmljZSAvIGF2b2NhZG9QcmljZVxuICAgIGNvbnN0IGJhdGh0dWJzID0gaG91c2VJbkF2b2NhZG9zIC8gNTY5XG4gICAgY29uc3QgaG91c2VJbkJyZWFrZmFzdHMgPSBwcmljZSAvIGJyZWFrZmFzdFByaWNlXG4gICAgY29uc3QgYXZvY2Fkb3NQZXJZZWFyID0gaG91c2VJbkF2b2NhZG9zIC8geWVhcnNcbiAgICBjb25zdCBhdm9jYWRvc1Blck1vbnRoID0gYXZvY2Fkb3NQZXJZZWFyIC8gMTJcbiAgICBjb25zdCBhdm9jYWRvc1BlcldlZWsgPSBhdm9jYWRvc1BlclllYXIgLyB3ZWVrc1BlclllYXJcbiAgICBjb25zdCBicmVha2Zhc3RzUGVyWWVhciA9IGhvdXNlSW5CcmVha2Zhc3RzIC8geWVhcnNcbiAgICBjb25zdCBicmVha2Zhc3RzUGVyV2VlayA9IGJyZWFrZmFzdHNQZXJZZWFyIC8gd2Vla3NQZXJZZWFyXG5cbiAgICAvLyBhIG1vZGVsIHN1aXRhYmxlIGZvciBwb3B1bGF0aW5nIHRoZSByZXN1bHRcbiAgICBjb25zdCBtb2RlbCA9IHtcbiAgICAgIGhvdXNlSW5Bdm9jYWRvcywgYXZvY2Fkb3NQZXJNb250aCwgYXZvY2Fkb3NQZXJXZWVrLCBicmVha2Zhc3RzUGVyWWVhcixcbiAgICAgIGJyZWFrZmFzdHNQZXJXZWVrLCBiYXRodHVicywgbmFtZSwgcHJpY2UsIHllYXJzLCBzb3VyY2VcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kZWxcbiAgfVxuXG4gIHJldHVybiBjYWxjdWxhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYWxjdWxhdG9yXG4iLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcIm5hbWVcIjogXCJBdWNrbGFuZCBDZW50cmFsXCIsXG4gICAgXCJwcmljZVwiOiAxMDc5ODc5LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkJheSBvZiBQbGVudHlcIixcbiAgICBcInByaWNlXCI6IDUzMzYwMCxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cubnpoZXJhbGQuY28ubnovYmF5LW9mLXBsZW50eS10aW1lcy9uZXdzL2FydGljbGUuY2ZtP2NfaWQ9MTUwMzM0MyZvYmplY3RpZD0xMTY1Njg2MVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJCb3RhbnlcIixcbiAgICBcInByaWNlXCI6IDExNzI2MTcsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ2hyaXN0Y2h1cmNoIENlbnRyYWxcIixcbiAgICBcInByaWNlXCI6IDU4NTA5OSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDaHJpc3RjaHVyY2ggRWFzdFwiLFxuICAgIFwicHJpY2VcIjogMzcwOTEzLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNsdXRoYS1Tb3V0aGxhbmRcIixcbiAgICBcInByaWNlXCI6IDMxMzcxMSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDb3JvbWFuZGVsXCIsXG4gICAgXCJwcmljZVwiOiA2OTA2MzQsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRHVuZWRpbiBOb3J0aFwiLFxuICAgIFwicHJpY2VcIjogMzQ2NDQ0LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkR1bmVkaW4gU291dGhcIixcbiAgICBcInByaWNlXCI6IDM1MjIxMixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJFYXN0IENvYXN0XCIsXG4gICAgXCJwcmljZVwiOiAyODg3NDgsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3Lm56aGVyYWxkLmNvLm56L2JheS1vZi1wbGVudHktdGltZXMvbmV3cy9hcnRpY2xlLmNmbT9jX2lkPTE1MDMzNDMmb2JqZWN0aWQ9MTE2NTY4NjFcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRWFzdCBDb2FzdCBCYXlzXCIsXG4gICAgXCJwcmljZVwiOiAxMTQ4NTA1LFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5uemhlcmFsZC5jby5uei9idXNpbmVzcy9uZXdzL2FydGljbGUuY2ZtP2NfaWQ9MyZvYmplY3RpZD0xMTQ5MTcyMFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJFcHNvbVwiLFxuICAgIFwicHJpY2VcIjogMTY1MzUwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJIYW1pbHRvbiBFYXN0XCIsXG4gICAgXCJwcmljZVwiOiA1ODYyMTQsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSGFtaWx0b24gV2VzdFwiLFxuICAgIFwicHJpY2VcIjogNDg4OTUzLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkhlbGVuc3ZpbGxlXCIsXG4gICAgXCJwcmljZVwiOiA1ODc1MDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSHVudWFcIixcbiAgICBcInByaWNlXCI6IDY2OTUxOCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJIdXR0IFNvdXRoXCIsXG4gICAgXCJwcmljZVwiOiA1MDMyODYsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSWxhbVwiLFxuICAgIFwicHJpY2VcIjogNjQxNTUwLFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5zdHVmZi5jby5uei9idXNpbmVzcy9tb25leS83Nzc0MTkyNy9Ib3VzaW5nLWRlbWFuZC1wdXNoZXMtcHJpY2UtZ3Jvd3RoLWVhc3QtaW4tQ2hyaXN0Y2h1cmNoXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkludmVyY2FyZ2lsbFwiLFxuICAgIFwicHJpY2VcIjogMjM5NDg2LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkthaWvFjXVyYVwiLFxuICAgIFwicHJpY2VcIjogMzk5NjYxLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIktlbHN0b25cIixcbiAgICBcInByaWNlXCI6IDcwODUwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYW5hXCIsXG4gICAgXCJwcmljZVwiOiA1MDEwMjgsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWFuZ2VyZVwiLFxuICAgIFwicHJpY2VcIjogNjM2NzUwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hbnVrYXUgRWFzdFwiLFxuICAgIFwicHJpY2VcIjogMTE3MjYxNyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYW51cmV3YVwiLFxuICAgIFwicHJpY2VcIjogNjA3MDAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hdW5nYWtpZWtpZVwiLFxuICAgIFwicHJpY2VcIjogMTAyMzMwNixcbiAgICBcInNvdXJjZVwiOiBcImh0dHBzOi8vd3d3LmJhcmZvb3QuY28ubnovbWFya2V0LXJlcG9ydHMvMjAxNi9mZWJydWFyeS9zdWJ1cmItcmVwb3J0XCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk10IEFsYmVydFwiLFxuICAgIFwicHJpY2VcIjogMTA5NDAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNdCBSb3NraWxsXCIsXG4gICAgXCJwcmljZVwiOiA5MDkwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTmFwaWVyXCIsXG4gICAgXCJwcmljZVwiOiA0MjU0ODQsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTmVsc29uXCIsXG4gICAgXCJwcmljZVwiOiA1Mjc0MjIsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTmV3IEx5bm5cIixcbiAgICBcInByaWNlXCI6IDcwMjAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOZXcgUGx5bW91dGhcIixcbiAgICBcInByaWNlXCI6IDQxODQ0NSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOb3J0aCBTaG9yZVwiLFxuICAgIFwicHJpY2VcIjogMTE5NTI5MixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOb3J0aGNvdGVcIixcbiAgICBcInByaWNlXCI6IDExOTgyMDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTm9ydGhsYW5kXCIsXG4gICAgXCJwcmljZVwiOiA1NTQwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3LnNjb29wLmNvLm56L3N0b3JpZXMvQlUxNzAyL1MwMDgyNC9ub3J0aGxhbmQtcmVzaWRlbnRpYWwtcHJvcGVydHktcHJpY2UtaW5jcmVhc2VzLWFjY2VsZXJhdGVkLmh0bVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCLFjGhhcml1XCIsXG4gICAgXCJwcmljZVwiOiA1ODAwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJ3d3cubGVhZGVyc3dlbGxpbmd0b24uY28ubnovcy9QVS0wNjE2LUFuZHJld1Bhbm8ucGRmXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIsWMdGFraVwiLFxuICAgIFwicHJpY2VcIjogMzI1NTAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlBha3VyYW5nYVwiLFxuICAgIFwicHJpY2VcIjogODU0MDAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlBhbG1lcnN0b24gTm9ydGhcIixcbiAgICBcInByaWNlXCI6IDM1NDk5OSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQYXBha3VyYVwiLFxuICAgIFwicHJpY2VcIjogNTc1MTM5LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlBvcnQgSGlsbHNcIixcbiAgICBcInByaWNlXCI6IDY0ODAwMCxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cuc3R1ZmYuY28ubnovdGhlLXByZXNzL25ld3MvNjkyMjkyNDgvY2hyaXN0Y2h1cmNoLWhvbWUtdmFsdWVzLXRha2UtYS1qdW1wLW9uLXRoZS1oaWxscy1mbGF0dGVyLW9uLXRoZS1mbGF0XCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlJhbmdpdGF0YVwiLFxuICAgIFwicHJpY2VcIjogMzU1NTU2LFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5sYW5kbG9yZHMuY28ubnovaG91c2luZy1zdGF0aXN0aWNzLz9ncmFwaHN1Ym1pdHRlZD10cnVlJmZyb21tb250aD0xJmZyb215ZWFyPTE5OTQmdG9tb250aD01JnRveWVhcj0yMDE3JmdyYXBoYXJlYXMlNUIlNUQ9MTE5JmdyYXBoc3R5bGU9cHJpY2Umc3VibWl0PVNob3crR3JhcGhcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUmFuZ2l0xKtrZWlcIixcbiAgICBcInByaWNlXCI6IDE2MzExMSxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cuc3R1ZmYuY28ubnovbWFuYXdhdHUtc3RhbmRhcmQvbmV3cy84ODk1NzQ5OC9Ib3VzZXMtd29ydGgtbW9yZS1pbi1QYWxtZXJzdG9uLU5vcnRoLWFuZC1Ib3Jvd2hlbnVhLVFWLWZpZ3VyZXMtc2hvd1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSaW11dGFrYVwiLFxuICAgIFwicHJpY2VcIjogNDQ1NjMyLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlJvZG5leVwiLFxuICAgIFwicHJpY2VcIjogODA5NzUyLFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5uemhlcmFsZC5jby5uei9idXNpbmVzcy9uZXdzL2FydGljbGUuY2ZtP2NfaWQ9MyZvYmplY3RpZD0xMTU5ODcwMFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSb25nb3RhaVwiLFxuICAgIFwicHJpY2VcIjogNTgzMDAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlJvdG9ydWFcIixcbiAgICBcInByaWNlXCI6IDM5NjQyMyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTZWx3eW5cIixcbiAgICBcInByaWNlXCI6IDU0MjQ5MyxcbiAgICBcInNvdXJjZVwiOiBcImh0dHBzOi8vZWNvcHJvZmlsZS5pbmZvbWV0cmljcy5jby5uei9TZWx3eW4lMkJEaXN0cmljdC9RdWFydGVybHlFY29ub21pY01vbml0b3IvSG91c2VQcmljZXNcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVMSBbWFraVwiLFxuICAgIFwicHJpY2VcIjogMTAyMTI1MCxcbiAgICBcInNvdXJjZVwiOiBcInRhbWFraSBlYXN0XCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlRhcmFuYWtpLUtpbmcgQ291bnRyeVwiLFxuICAgIFwicHJpY2VcIjogNDExMTYwLFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5zdHVmZi5jby5uei9idXNpbmVzcy9wcm9wZXJ0eS84ODMwMzA0Ni90YXJhbmFraS1yZXNpZGVudGlhbC1wcm9wZXJ0eS1wcmljZXMtY29udGludWUtdG8tcmlzZVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUYXVwxY1cIixcbiAgICBcInByaWNlXCI6IDQzNzk0MyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUYXVyYW5nYVwiLFxuICAgIFwicHJpY2VcIjogNjc4NjQzLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlRlIEF0YXR1XCIsXG4gICAgXCJwcmljZVwiOiA4MzQ3NTAsXG4gICAgXCJzb3VyY2VcIjogXCJUZSBBdGF0dSBQZW5pbnN1bGEgKyBUZSBBdGF0dSBzb3V0aFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUdWtpdHVraVwiLFxuICAgIFwicHJpY2VcIjogNDA4NTEwLFxuICAgIFwic291cmNlXCI6IFwiaGFzdGluZ3NcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVXBwZXIgSGFyYm91clwiLFxuICAgIFwicHJpY2VcIjogOTM3MzI0LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIldhaWthdG9cIixcbiAgICBcInByaWNlXCI6IDQ1MDA0MyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXYWltYWthcmlyaVwiLFxuICAgIFwicHJpY2VcIjogNDM1MjAwLFxuICAgIFwic291cmNlXCI6IFwiaHR0cHM6Ly9lY29wcm9maWxlLmluZm9tZXRyaWNzLmNvLm56L1dhaW1ha2FyaXJpJTJCRGlzdHJpY3QvUXVhcnRlcmx5RWNvbm9taWNNb25pdG9yL0hvdXNlUHJpY2VzXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIldhaXJhcmFwYVwiLFxuICAgIFwicHJpY2VcIjogMzU5MjEyLFxuICAgIFwic291cmNlXCI6IFwic291dGggd2FpcmFyYXBhICsgbWFzdGVydG9uXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIldhaXRha2lcIixcbiAgICBcInByaWNlXCI6IDI2NzYzMSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXZWxsaW5ndG9uIENlbnRyYWxcIixcbiAgICBcInByaWNlXCI6IDcyMTI1MixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXZXN0IENvYXN0LVRhc21hblwiLFxuICAgIFwicHJpY2VcIjogMzIwMjAwLFxuICAgIFwic291cmNlXCI6IFwibm8gZGF0YSBmb3IgaGFhc3QsIGhhcmkgaGFyaSwgd2hhdGFyb2EsIHJvc3MsIGZveCBnbGFjaWVyXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIldoYW5nYW51aVwiLFxuICAgIFwicHJpY2VcIjogMjIwMzM2LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIldoYW5nYXJlaVwiLFxuICAgIFwicHJpY2VcIjogNDc3NzY1LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIldpZ3JhbVwiLFxuICAgIFwicHJpY2VcIjogNjQwMDAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfVxuXVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qXG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgZm9yIEVkZ2UgZXQgYWwuXG4qL1xucmVxdWlyZSggJy4vcG9seWZpbGxzJyApXG5cbmNvbnN0IENhbGN1bGF0b3IgPSByZXF1aXJlKCAnLi9jYWxjdWxhdG9yJyApXG5jb25zdCBQb3B1bGF0ZSA9IHJlcXVpcmUoICcuL3BvcHVsYXRlJyApXG5jb25zdCB2aXN1YWxpc2F0aW9uID0gcmVxdWlyZSggJy4vdmlzdWFsaXNhdGlvbicgKVxuY29uc3QgcHJpY2VzID0gcmVxdWlyZSggJy4vaG91c2UtcHJpY2VzLmpzb24nIClcblxuY29uc3QgbmFtZXMgPSBwcmljZXMubWFwKCBwID0+IHAubmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSApXG5jb25zdCBicmVha2Zhc3RQcmljZSA9IDE0Ljk5XG5cbi8vIGluaXRpYWxpemUgdGhlIGNhbGN1bGF0ZSBmdW5jdGlvbiB3aXRoIHRoZSBwcmVkZWZpbmVkIGRhdGFcbmNvbnN0IGNhbGN1bGF0ZSA9IENhbGN1bGF0b3IoIHByaWNlcywgYnJlYWtmYXN0UHJpY2UgKVxuXG4vLyBub3QgYXZhaWxhYmxlIHVudGlsIGluaXQgaXMgY2FsbGVkXG5sZXQgcG9wdWxhdGUsICRyZXN1bHRcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgLypcbiAgICBzZXQgdXAgYXV0b2NvbXBsZXRlIC0gZGVncmFkZXMgdG8gb3JkaW5hcnkgdGV4dCBpbnB1dCBpbiB1bnN1cHBvcnRlZFxuICAgIGJyb3dzZXJzXG5cbiAgICBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1kYXRhbGlzdFxuICAqL1xuICBjb25zdCAkZGF0YWxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI25hbWVzJyApXG5cbiAgbmFtZXMuZm9yRWFjaCggbmFtZSA9PiB7XG4gICAgY29uc3QgJG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdvcHRpb24nIClcbiAgICAkb3B0aW9uLnZhbHVlID0gbmFtZVxuICAgICRkYXRhbGlzdC5hcHBlbmRDaGlsZCggJG9wdGlvbiApXG4gIH0pXG5cbiAgLypcbiAgICBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSByZXN1bHQgc2VjdGlvbiBvZiB0aGUgcGFnZSBhbmQgaW5pdGlhbGl6ZSB0aGVcbiAgICBwb3B1bGF0ZSBmdW5jdGlvblxuICAqL1xuICAkcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5hdm8tYXBwX19yZXN1bHQnIClcbiAgcG9wdWxhdGUgPSBQb3B1bGF0ZSggJHJlc3VsdCApXG59XG5cbi8vIGdldCB0aGUgdXNlcidzIGlucHV0XG5jb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgJG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnW25hbWU9XCJuYW1lXCJdJyApXG4gIGNvbnN0ICRwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdbbmFtZT1cInByaWNlXCJdJyApXG4gIGNvbnN0ICR5ZWFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdbbmFtZT1cInllYXJzXCJdJyApXG5cbiAgaWYoICF2YWxpZGF0ZSggJG5hbWUsICRwcmljZSwgJHllYXJzICkgKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IG5hbWUgPSAkbmFtZS52YWx1ZVxuICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQoICRwcmljZS52YWx1ZSApXG4gIGNvbnN0IHllYXJzID0gcGFyc2VGbG9hdCggJHllYXJzLnZhbHVlIClcblxuICByZXR1cm4geyBuYW1lLCBwcmljZSwgeWVhcnMgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVBvc2l0aXZlTnVtYmVyID0gJGlucHV0ID0+IHtcbiAgbGV0IHZhbHVlXG5cbiAgdHJ5e1xuICAgIHZhbHVlID0gcGFyc2VGbG9hdCggJGlucHV0LnZhbHVlIClcbiAgfSBjYXRjaCggZSApe1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlID4gMFxufVxuXG5jb25zdCBlcnJvck1lc3NhZ2UgPSAoICRlbCwgbWVzc2FnZSApID0+IHtcbiAgY29uc3QgJGVycm9yID0gJGVsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvciggJy5hdm8tYXBwX19lcnJvcicgKVxuICAkZXJyb3IudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICRlcnJvci5jbGFzc0xpc3QucmVtb3ZlKCAnYXZvLWFwcF9fZXJyb3ItLWhpZGRlbicgKVxufVxuXG5jb25zdCB2YWxpZGF0ZSA9ICggJG5hbWUsICRwcmljZSwgJHllYXJzICkgPT4ge1xuICBsZXQgc3VjY2VlZGVkID0gdHJ1ZVxuXG4gIGNvbnN0IG5hbWUgPSAkbmFtZS52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gIGlmKCAhbmFtZXMuaW5jbHVkZXMoIG5hbWUgKSApe1xuICAgIGVycm9yTWVzc2FnZSggJG5hbWUsIGBTb3JyeSwgd2UgZG9uJ3QgaGF2ZSBwcmljZSBkYXRhIGZvciB0aGF0IGVsZWN0b3JhdGVgIClcblxuICAgIHN1Y2NlZWRlZCA9IGZhbHNlXG4gIH1cblxuICBpZiggIXZhbGlkYXRlUG9zaXRpdmVOdW1iZXIoICRwcmljZSApICl7XG4gICAgZXJyb3JNZXNzYWdlKCAkcHJpY2UsIGBQbGVhc2UgZW50ZXIgYSBudW1iZXIgZ3JlYXRlciB0aGFuIHplcm9gIClcblxuICAgIHN1Y2NlZWRlZCA9IGZhbHNlXG4gIH1cblxuICBpZiggIXZhbGlkYXRlUG9zaXRpdmVOdW1iZXIoICR5ZWFycyApICl7XG4gICAgZXJyb3JNZXNzYWdlKCAkeWVhcnMsIGBQbGVhc2UgZW50ZXIgYSBudW1iZXIgZ3JlYXRlciB0aGFuIHplcm9gIClcblxuICAgIHN1Y2NlZWRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gc3VjY2VlZGVkXG59XG5cbi8vIHNob3cgdGhlIHJlc3VsdFxuY29uc3Qgb3V0cHV0ID0gaW5wdXQgPT4ge1xuICAvLyBnZXQgdGhlIGlucHV0XG4gIGNvbnN0IHsgbmFtZSwgcHJpY2UsIHllYXJzIH0gPSBpbnB1dFxuXG4gIC8vIGNhbGN1bGF0ZSBhbGwgdGhlIHRoaW5nc1xuICBjb25zdCBtb2RlbCA9IGNhbGN1bGF0ZSggbmFtZSwgcHJpY2UsIHllYXJzIClcblxuICAvLyBwb3B1bGF0ZSB0aGUgbW9kZWxcbiAgcG9wdWxhdGUoIG1vZGVsIClcblxuICAvLyB2aXN1YWxpc2F0aW9uXG4gIGNvbnN0ICRob3VzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuYXZvLWFwcF9faG91c2UnIClcbiAgY29uc3QgJGF2b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmF2by1hcHBfX2F2b3MnIClcblxuICB2aXN1YWxpc2F0aW9uKCBtb2RlbC5ob3VzZUluQXZvY2Fkb3MsICRob3VzZSwgJGF2b3MgKVxuXG4gIC8vIHNob3cgdGhlIHJlc3VsdFxuICAkcmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoICdhdm8tYXBwX19yZXN1bHQtLWhpZGRlbicgKVxufVxuXG4vLyBtYWtlIHN1cmUgdGhlIHVzZXIgY2FuJ3QgZG8gYW55dGhpbmcgdW50aWwgdGhlIHBhZ2UgbG9hZHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBpbml0KClcblxuICAvLyB3YWl0IGZvciB0aGUgdXNlciB0byBjbGljayB0aGUgYnV0dG9uLCBnZXQgaW5wdXQsIHNob3cgcmVzdWx0XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGUgPT4ge1xuICAgIGlmKCAhZS50YXJnZXQubWF0Y2hlcyggJ2J1dHRvbltuYW1lPVwicnVuXCJdJyApICkgcmV0dXJuXG5cbiAgICAvLyBjbGVhciBlcnJvcnNcbiAgICBjb25zdCAkZXJyb3JzID0gQXJyYXkuZnJvbSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5hdm8tYXBwX19lcnJvcicgKSApXG4gICAgJGVycm9ycy5mb3JFYWNoKCAkZXJyb3IgPT4ge1xuICAgICAgJGVycm9yLmlubmVySFRNTCA9ICcnXG4gICAgICAkZXJyb3IuY2xhc3NMaXN0LmFkZCggJ2F2by1hcHBfX2Vycm9yLS1oaWRkZW4nIClcbiAgICB9KVxuXG4gICAgY29uc3QgaW5wdXQgPSBnZXRJbnB1dCgpXG5cbiAgICAvLyB2YWxpZGF0aW9uIGZhaWxlZFxuICAgIGlmKCAhaW5wdXQgKXtcbiAgICAgIC8vIGhpZGUgdGhlIHJlc3VsdFxuICAgICAgJHJlc3VsdC5jbGFzc0xpc3QuYWRkKCAnYXZvLWFwcF9fcmVzdWx0LS1oaWRkZW4nIClcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgb3V0cHV0KCBpbnB1dCApXG4gIH0pXG59KVxuIiwiaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAodGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocyksXG4gICAgICAgICAgICAgICAgaSA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gdGhpcykge31cbiAgICAgICAgICAgIHJldHVybiBpID4gLTE7XG4gICAgICAgIH07XG59XG5cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB0b2tlbnMgPSBbICd2YWx1ZScsICdpZicsICdocmVmJyBdXG5jb25zdCBzZWxlY3RvcnMgPSB0b2tlbnMubWFwKCB0b2tlbiA9PiBgW2RhdGEtJHsgdG9rZW4gfV1gIClcblxuY29uc3QgUG9wdWxhdGUgPSAkZWwgPT4ge1xuICAvKlxuICAgIGZpbmQgYWxsIGVsZW1lbnRzIHRoYXQgaGF2ZSBbZGF0YS12YWx1ZT1cIlwiXSwgW2RhdGEtaWY9XCJcIl0gZXRjLiBhbmQgY29udmVydFxuICAgIHRoZSByZXR1cm5lZCBsaXZlIG5vZGUgbGlzdCB0byBhbiBhcnJheSBzbyB3ZSBjYW4gZG8gZnVuY3Rpb25hbCBzdHVmZlxuICAqL1xuICBjb25zdCAkZWxzID0gQXJyYXkuZnJvbSggJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9ycyApIClcblxuICAvKlxuICAgIG1ha2UgYW4gb2JqZWN0IG1hcCBmcm9tIG5hbWUgdG8gZWxlbWVudCBsaWtlOlxuICAgIHtcbiAgICAgIHByaWNlOiAkc29tZUVsLFxuICAgICAgbmFtZTogJHNvbWVPdGhlckVsLFxuICAgICAgLy8uLi5ldGNcbiAgICB9XG4gICovXG4gIGNvbnN0IG5hbWVNYXAgPSAkZWxzLnJlZHVjZSggKCBtYXAsICRlbCApID0+IHtcbiAgICB0b2tlbnMuZm9yRWFjaCggdG9rZW4gPT4ge1xuICAgICAgaWYoICRlbC5tYXRjaGVzKCBgW2RhdGEtJHsgdG9rZW4gfV1gICkpe1xuICAgICAgICBjb25zdCBuYW1lID0gJGVsLmRhdGFzZXRbIHRva2VuIF1cblxuICAgICAgICBtYXBbIG5hbWUgXSA9ICRlbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gbWFwXG4gIH0sIHt9IClcblxuICAvLyBwb3B1bGF0ZSB0aGUgbmFtZWQgZWxlbWVudCB3aXRoIHRoaXMgdmFsdWVcbiAgY29uc3QgcG9wdWxhdGVFbGVtZW50ID0gKCBuYW1lLCB2YWx1ZSApID0+IHtcbiAgICAvLyBnZXQgdGhlIGVsZW1lbnQgZm9yIHRoaXMgbmFtZSBpbiB0aGUgbW9kZWxcbiAgICBjb25zdCAkZWwgPSBuYW1lTWFwWyBuYW1lIF1cblxuICAgIGlmKCAhJGVsIClcbiAgICAgIHRocm93IG5ldyBFcnJvciggJ05vIGVsZW1lbnQgZm91bmQgZm9yICcgKyBuYW1lIClcblxuICAgIC8vIEZvcm1hdCBudW1iZXJzIG5pY2VseVxuICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIClcbiAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCggdmFsdWUgKS50b0xvY2FsZVN0cmluZygpXG5cbiAgICAvLyBwb3B1bGF0ZSB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudFxuICAgIGlmKCAkZWwubWF0Y2hlcyggJ1tkYXRhLXZhbHVlXScgKSApXG4gICAgICAkZWwudGV4dENvbnRlbnQgPSB2YWx1ZVxuXG4gICAgLy8gZW1wdHkgdGhlIGVsZW1lbnQgaWYgdmFsdWUgaXMgZmFsc2V5XG4gICAgaWYoICRlbC5tYXRjaGVzKCAnW2RhdGEtaWZdJyApICYmICF2YWx1ZSApXG4gICAgICAkZWwuaW5uZXJIVE1MID0gJydcblxuICAgIC8vIHNldCBhbiBocmVmXG4gICAgaWYoICRlbC5tYXRjaGVzKCAnW2RhdGEtaHJlZl0nICkgKVxuICAgICAgJGVsLnNldEF0dHJpYnV0ZSggJ2hyZWYnLCB2YWx1ZSApXG4gIH1cblxuICAvKlxuICAgIGZvciBlYWNoIGtleSBpbiB0aGUgbW9kZWwsIHBvcHVsYXRlIHRoZSBtYXRjaGluZyBkb20gZWxlbWVudCB3aXRoIHRoZVxuICAgIG1hdGNoaW5nIHZhbHVlXG4gICovXG4gIGNvbnN0IHBvcHVsYXRlID0gbW9kZWwgPT4ge1xuICAgIE9iamVjdC5rZXlzKCBtb2RlbCApLmZvckVhY2goIG5hbWUgPT4ge1xuICAgICAgcG9wdWxhdGVFbGVtZW50KCBuYW1lLCBtb2RlbFsgbmFtZSBdIClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHBvcHVsYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wdWxhdGVcbiIsIid1c2Ugc3RyaWN0J1xuXG4vLyBhIGhvdXNlIGlzIGFib3V0IDU1MG0zLCBhbiBhdm9jYWRvIGFib3V0IDIyMGNtMyAtIDIsNTAwLDAwMCBhdm9zIGluIGEgaG91c2VcbmNvbnN0IHZpc3VhbGlzYXRpb24gPSAoIGhvdXNlSW5Bdm9jYWRvcywgJGhvdXNlLCAkYXZvcyApID0+IHtcbiAgY29uc3QgaG91c2VSYXRpbyA9IE1hdGguY2JydCggMjUwMDAwMCApXG4gIGNvbnN0IGF2b1JhdGlvID0gTWF0aC5jYnJ0KCBob3VzZUluQXZvY2Fkb3MgKVxuICBjb25zdCBzdW0gPSBob3VzZVJhdGlvICsgYXZvUmF0aW9cbiAgY29uc3QgdW5pdCA9IDEwMCAvIHN1bVxuXG4gIGNvbnN0IGhvdXNlV2lkdGggPSB1bml0ICogaG91c2VSYXRpb1xuICBjb25zdCBhdm9XaWR0aCA9IHVuaXQgKiBhdm9SYXRpb1xuXG4gICRob3VzZS5zdHlsZS53aWR0aCA9IGhvdXNlV2lkdGggKyAnJSdcbiAgJGF2b3Muc3R5bGUud2lkdGggPSBhdm9XaWR0aCArICclJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc3VhbGlzYXRpb25cbiJdfQ==
