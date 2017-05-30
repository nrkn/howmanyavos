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

},{"./calculator":1,"./house-prices.json":2,"./polyfills":4,"./populate":5}],4:[function(require,module,exports){
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

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2FsY3VsYXRvci5qcyIsInNyYy9ob3VzZS1wcmljZXMuanNvbiIsInNyYy9pbmRleC5qcyIsInNyYy9wb2x5ZmlsbHMuanMiLCJzcmMvcG9wdWxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIHRha2VzIHByZWRlZmluZWQgZGF0YSBhbmQgcmV0dXJucyBhIGNhbGN1bGF0ZSBmdW5jdGlvblxuY29uc3QgQ2FsY3VsYXRvciA9ICggcHJpY2VzLCBicmVha2Zhc3RQcmljZSApID0+IHtcbiAgLypcbiAgICBNYWtlIGEgbWFwIGludG8gZGF0YSB1c2luZyBub3JtYWxpemVkICh0byBsb3dlciwgdHJpbW1lZCkga2V5c1xuXG4gICAgU28gd2UgY2FuIHJldGFpbiB0aGUgb3JpZ2luYWwgbmFtZSwgYnV0IGFsc28gZG8gbG9va3VwcyB3aXRoIHRoZSB1c2VyJ3NcbiAgICBpbnB1dCBhZnRlciB0aGF0IGlzIGFsc28gbm9ybWFsaXplZFxuXG4gICAge1xuICAgICAgXCJhdWNrbGFuZCBjZW50cmFsXCI6IHtcbiAgICAgICAgbmFtZTogJ0F1Y2tsYW5kIENlbnRyYWwnLFxuICAgICAgICAvL2V0Y1xuICAgICAgfSxcbiAgICAgIFwiYmF5IG9mIHBsZW50eVwiOiB7XG4gICAgICAgIC8vZXRjXG4gICAgICB9XG4gICAgICAvLyBldGNcbiAgICB9XG4gICovXG4gIGNvbnN0IHByaWNlTWFwID0gcHJpY2VzLnJlZHVjZSggKCBtYXAsIGRhdGEgKSA9PiB7XG4gICAgbWFwWyBkYXRhLm5hbWUudG9Mb3dlckNhc2UoKS50cmltKCkgXSA9IGRhdGFcblxuICAgIHJldHVybiBtYXBcbiAgfSwge30gKVxuXG4gIGNvbnN0IHdlZWtzUGVyWWVhciA9IDUyLjE0MjlcblxuICAvLyBlbGVjdG9yYXRlIG5hbWUgaXMgbm9ybWFsaXplZCAobG93ZXIgY2FzZSwgdHJpbW1lZClcbiAgY29uc3QgY2FsY3VsYXRlID0gKCBlbGVjdG9yYXRlTmFtZSwgYXZvY2Fkb1ByaWNlLCB5ZWFycyApID0+IHtcbiAgICAvLyBmaW5kIHRoZSBub3JtYWxpemVkIGRhdGFcbiAgICBjb25zdCBkYXRhID0gcHJpY2VNYXBbIGVsZWN0b3JhdGVOYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpIF1cblxuICAgIGNvbnN0IHsgc291cmNlLCBwcmljZSwgbmFtZSB9ID0gZGF0YVxuXG4gICAgY29uc3QgaG91c2VJbkF2b2NhZG9zID0gcHJpY2UgLyBhdm9jYWRvUHJpY2VcbiAgICBjb25zdCBob3VzZUluQnJlYWtmYXN0cyA9IHByaWNlIC8gYnJlYWtmYXN0UHJpY2VcbiAgICBjb25zdCBhdm9jYWRvc1BlclllYXIgPSBob3VzZUluQXZvY2Fkb3MgLyB5ZWFyc1xuICAgIGNvbnN0IGF2b2NhZG9zUGVyTW9udGggPSBhdm9jYWRvc1BlclllYXIgLyAxMlxuICAgIGNvbnN0IGF2b2NhZG9zUGVyV2VlayA9IGF2b2NhZG9zUGVyWWVhciAvIHdlZWtzUGVyWWVhclxuICAgIGNvbnN0IGJyZWFrZmFzdHNQZXJZZWFyID0gaG91c2VJbkJyZWFrZmFzdHMgLyB5ZWFyc1xuICAgIGNvbnN0IGJyZWFrZmFzdHNQZXJXZWVrID0gYnJlYWtmYXN0c1BlclllYXIgLyB3ZWVrc1BlclllYXJcblxuICAgIC8vIGEgbW9kZWwgc3VpdGFibGUgZm9yIHBvcHVsYXRpbmcgdGhlIHJlc3VsdFxuICAgIGNvbnN0IG1vZGVsID0ge1xuICAgICAgaG91c2VJbkF2b2NhZG9zLCBhdm9jYWRvc1Blck1vbnRoLCBhdm9jYWRvc1BlcldlZWssIGJyZWFrZmFzdHNQZXJZZWFyLFxuICAgICAgYnJlYWtmYXN0c1BlcldlZWssIG5hbWUsIHByaWNlLCB5ZWFycywgc291cmNlXG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGVsXG4gIH1cblxuICByZXR1cm4gY2FsY3VsYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FsY3VsYXRvclxuIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJuYW1lXCI6IFwiQXVja2xhbmQgQ2VudHJhbFwiLFxuICAgIFwicHJpY2VcIjogMTA3OTg3OSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJCYXkgb2YgUGxlbnR5XCIsXG4gICAgXCJwcmljZVwiOiA1MzM2MDAsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3Lm56aGVyYWxkLmNvLm56L2JheS1vZi1wbGVudHktdGltZXMvbmV3cy9hcnRpY2xlLmNmbT9jX2lkPTE1MDMzNDMmb2JqZWN0aWQ9MTE2NTY4NjFcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQm90YW55XCIsXG4gICAgXCJwcmljZVwiOiAxMTcyNjE3LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNocmlzdGNodXJjaCBDZW50cmFsXCIsXG4gICAgXCJwcmljZVwiOiA1ODUwOTksXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ2hyaXN0Y2h1cmNoIEVhc3RcIixcbiAgICBcInByaWNlXCI6IDM3MDkxMyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDbHV0aGEtU291dGhsYW5kXCIsXG4gICAgXCJwcmljZVwiOiAzMTM3MTEsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ29yb21hbmRlbFwiLFxuICAgIFwicHJpY2VcIjogNjkwNjM0LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkR1bmVkaW4gTm9ydGhcIixcbiAgICBcInByaWNlXCI6IDM0NjQ0NCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJEdW5lZGluIFNvdXRoXCIsXG4gICAgXCJwcmljZVwiOiAzNTIyMTIsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRWFzdCBDb2FzdFwiLFxuICAgIFwicHJpY2VcIjogMjg4NzQ4LFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5uemhlcmFsZC5jby5uei9iYXktb2YtcGxlbnR5LXRpbWVzL25ld3MvYXJ0aWNsZS5jZm0/Y19pZD0xNTAzMzQzJm9iamVjdGlkPTExNjU2ODYxXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkVhc3QgQ29hc3QgQmF5c1wiLFxuICAgIFwicHJpY2VcIjogMTE0ODUwNSxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cubnpoZXJhbGQuY28ubnovYnVzaW5lc3MvbmV3cy9hcnRpY2xlLmNmbT9jX2lkPTMmb2JqZWN0aWQ9MTE0OTE3MjBcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRXBzb21cIixcbiAgICBcInByaWNlXCI6IDE2NTM1MDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSGFtaWx0b24gRWFzdFwiLFxuICAgIFwicHJpY2VcIjogNTg2MjE0LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkhhbWlsdG9uIFdlc3RcIixcbiAgICBcInByaWNlXCI6IDQ4ODk1MyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJIZWxlbnN2aWxsZVwiLFxuICAgIFwicHJpY2VcIjogNTg3NTAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkh1bnVhXCIsXG4gICAgXCJwcmljZVwiOiA2Njk1MTgsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSHV0dCBTb3V0aFwiLFxuICAgIFwicHJpY2VcIjogNTAzMjg2LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIklsYW1cIixcbiAgICBcInByaWNlXCI6IDY0MTU1MCxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cuc3R1ZmYuY28ubnovYnVzaW5lc3MvbW9uZXkvNzc3NDE5MjcvSG91c2luZy1kZW1hbmQtcHVzaGVzLXByaWNlLWdyb3d0aC1lYXN0LWluLUNocmlzdGNodXJjaFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJJbnZlcmNhcmdpbGxcIixcbiAgICBcInByaWNlXCI6IDIzOTQ4NixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJLYWlrxY11cmFcIixcbiAgICBcInByaWNlXCI6IDM5OTY2MSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJLZWxzdG9uXCIsXG4gICAgXCJwcmljZVwiOiA3MDg1MDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWFuYVwiLFxuICAgIFwicHJpY2VcIjogNTAxMDI4LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hbmdlcmVcIixcbiAgICBcInByaWNlXCI6IDYzNjc1MCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYW51a2F1IEVhc3RcIixcbiAgICBcInByaWNlXCI6IDExNzI2MTcsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWFudXJld2FcIixcbiAgICBcInByaWNlXCI6IDYwNzAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYXVuZ2FraWVraWVcIixcbiAgICBcInByaWNlXCI6IDEwMjMzMDYsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwczovL3d3dy5iYXJmb290LmNvLm56L21hcmtldC1yZXBvcnRzLzIwMTYvZmVicnVhcnkvc3VidXJiLXJlcG9ydFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNdCBBbGJlcnRcIixcbiAgICBcInByaWNlXCI6IDEwOTQwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTXQgUm9za2lsbFwiLFxuICAgIFwicHJpY2VcIjogOTA5MDAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5hcGllclwiLFxuICAgIFwicHJpY2VcIjogNDI1NDg0LFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5lbHNvblwiLFxuICAgIFwicHJpY2VcIjogNTI3NDIyLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5ldyBMeW5uXCIsXG4gICAgXCJwcmljZVwiOiA3MDIwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTmV3IFBseW1vdXRoXCIsXG4gICAgXCJwcmljZVwiOiA0MTg0NDUsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTm9ydGggU2hvcmVcIixcbiAgICBcInByaWNlXCI6IDExOTUyOTIsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTm9ydGhjb3RlXCIsXG4gICAgXCJwcmljZVwiOiAxMTk4MjAwLFxuICAgIFwic291cmNlXCI6IFwiXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5vcnRobGFuZFwiLFxuICAgIFwicHJpY2VcIjogNTU0MDAwLFxuICAgIFwic291cmNlXCI6IFwiaHR0cDovL3d3dy5zY29vcC5jby5uei9zdG9yaWVzL0JVMTcwMi9TMDA4MjQvbm9ydGhsYW5kLXJlc2lkZW50aWFsLXByb3BlcnR5LXByaWNlLWluY3JlYXNlcy1hY2NlbGVyYXRlZC5odG1cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwixYxoYXJpdVwiLFxuICAgIFwicHJpY2VcIjogNTgwMDAwLFxuICAgIFwic291cmNlXCI6IFwid3d3LmxlYWRlcnN3ZWxsaW5ndG9uLmNvLm56L3MvUFUtMDYxNi1BbmRyZXdQYW5vLnBkZlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCLFjHRha2lcIixcbiAgICBcInByaWNlXCI6IDMyNTUwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQYWt1cmFuZ2FcIixcbiAgICBcInByaWNlXCI6IDg1NDAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQYWxtZXJzdG9uIE5vcnRoXCIsXG4gICAgXCJwcmljZVwiOiAzNTQ5OTksXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUGFwYWt1cmFcIixcbiAgICBcInByaWNlXCI6IDU3NTEzOSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQb3J0IEhpbGxzXCIsXG4gICAgXCJwcmljZVwiOiA2NDgwMDAsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3LnN0dWZmLmNvLm56L3RoZS1wcmVzcy9uZXdzLzY5MjI5MjQ4L2NocmlzdGNodXJjaC1ob21lLXZhbHVlcy10YWtlLWEtanVtcC1vbi10aGUtaGlsbHMtZmxhdHRlci1vbi10aGUtZmxhdFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSYW5naXRhdGFcIixcbiAgICBcInByaWNlXCI6IDM1NTU1NixcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cubGFuZGxvcmRzLmNvLm56L2hvdXNpbmctc3RhdGlzdGljcy8/Z3JhcGhzdWJtaXR0ZWQ9dHJ1ZSZmcm9tbW9udGg9MSZmcm9teWVhcj0xOTk0JnRvbW9udGg9NSZ0b3llYXI9MjAxNyZncmFwaGFyZWFzJTVCJTVEPTExOSZncmFwaHN0eWxlPXByaWNlJnN1Ym1pdD1TaG93K0dyYXBoXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlJhbmdpdMSra2VpXCIsXG4gICAgXCJwcmljZVwiOiAxNjMxMTEsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwOi8vd3d3LnN0dWZmLmNvLm56L21hbmF3YXR1LXN0YW5kYXJkL25ld3MvODg5NTc0OTgvSG91c2VzLXdvcnRoLW1vcmUtaW4tUGFsbWVyc3Rvbi1Ob3J0aC1hbmQtSG9yb3doZW51YS1RVi1maWd1cmVzLXNob3dcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUmltdXRha2FcIixcbiAgICBcInByaWNlXCI6IDQ0NTYzMixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSb2RuZXlcIixcbiAgICBcInByaWNlXCI6IDgwOTc1MixcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cubnpoZXJhbGQuY28ubnovYnVzaW5lc3MvbmV3cy9hcnRpY2xlLmNmbT9jX2lkPTMmb2JqZWN0aWQ9MTE1OTg3MDBcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUm9uZ290YWlcIixcbiAgICBcInByaWNlXCI6IDU4MzAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSb3RvcnVhXCIsXG4gICAgXCJwcmljZVwiOiAzOTY0MjMsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2Vsd3luXCIsXG4gICAgXCJwcmljZVwiOiA1NDI0OTMsXG4gICAgXCJzb3VyY2VcIjogXCJodHRwczovL2Vjb3Byb2ZpbGUuaW5mb21ldHJpY3MuY28ubnovU2Vsd3luJTJCRGlzdHJpY3QvUXVhcnRlcmx5RWNvbm9taWNNb25pdG9yL0hvdXNlUHJpY2VzXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlTEgW1ha2lcIixcbiAgICBcInByaWNlXCI6IDEwMjEyNTAsXG4gICAgXCJzb3VyY2VcIjogXCJ0YW1ha2kgZWFzdFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUYXJhbmFraS1LaW5nIENvdW50cnlcIixcbiAgICBcInByaWNlXCI6IDQxMTE2MCxcbiAgICBcInNvdXJjZVwiOiBcImh0dHA6Ly93d3cuc3R1ZmYuY28ubnovYnVzaW5lc3MvcHJvcGVydHkvODgzMDMwNDYvdGFyYW5ha2ktcmVzaWRlbnRpYWwtcHJvcGVydHktcHJpY2VzLWNvbnRpbnVlLXRvLXJpc2VcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVGF1cMWNXCIsXG4gICAgXCJwcmljZVwiOiA0Mzc5NDMsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVGF1cmFuZ2FcIixcbiAgICBcInByaWNlXCI6IDY3ODY0MyxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUZSBBdGF0dVwiLFxuICAgIFwicHJpY2VcIjogODM0NzUwLFxuICAgIFwic291cmNlXCI6IFwiVGUgQXRhdHUgUGVuaW5zdWxhICsgVGUgQXRhdHUgc291dGhcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVHVraXR1a2lcIixcbiAgICBcInByaWNlXCI6IDQwODUxMCxcbiAgICBcInNvdXJjZVwiOiBcImhhc3RpbmdzXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlVwcGVyIEhhcmJvdXJcIixcbiAgICBcInByaWNlXCI6IDkzNzMyNCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXYWlrYXRvXCIsXG4gICAgXCJwcmljZVwiOiA0NTAwNDMsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2FpbWFrYXJpcmlcIixcbiAgICBcInByaWNlXCI6IDQzNTIwMCxcbiAgICBcInNvdXJjZVwiOiBcImh0dHBzOi8vZWNvcHJvZmlsZS5pbmZvbWV0cmljcy5jby5uei9XYWltYWthcmlyaSUyQkRpc3RyaWN0L1F1YXJ0ZXJseUVjb25vbWljTW9uaXRvci9Ib3VzZVByaWNlc1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXYWlyYXJhcGFcIixcbiAgICBcInByaWNlXCI6IDM1OTIxMixcbiAgICBcInNvdXJjZVwiOiBcInNvdXRoIHdhaXJhcmFwYSArIG1hc3RlcnRvblwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXYWl0YWtpXCIsXG4gICAgXCJwcmljZVwiOiAyNjc2MzEsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2VsbGluZ3RvbiBDZW50cmFsXCIsXG4gICAgXCJwcmljZVwiOiA3MjEyNTIsXG4gICAgXCJzb3VyY2VcIjogXCJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiV2VzdCBDb2FzdC1UYXNtYW5cIixcbiAgICBcInByaWNlXCI6IDMyMDIwMCxcbiAgICBcInNvdXJjZVwiOiBcIm5vIGRhdGEgZm9yIGhhYXN0LCBoYXJpIGhhcmksIHdoYXRhcm9hLCByb3NzLCBmb3ggZ2xhY2llclwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXaGFuZ2FudWlcIixcbiAgICBcInByaWNlXCI6IDIyMDMzNixcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXaGFuZ2FyZWlcIixcbiAgICBcInByaWNlXCI6IDQ3Nzc2NSxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXaWdyYW1cIixcbiAgICBcInByaWNlXCI6IDY0MDAwMCxcbiAgICBcInNvdXJjZVwiOiBcIlwiXG4gIH1cbl1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKlxuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIGZvciBFZGdlIGV0IGFsLlxuKi9cbnJlcXVpcmUoICcuL3BvbHlmaWxscycgKVxuXG5jb25zdCBDYWxjdWxhdG9yID0gcmVxdWlyZSggJy4vY2FsY3VsYXRvcicgKVxuY29uc3QgUG9wdWxhdGUgPSByZXF1aXJlKCAnLi9wb3B1bGF0ZScgKVxuY29uc3QgcHJpY2VzID0gcmVxdWlyZSggJy4vaG91c2UtcHJpY2VzLmpzb24nIClcblxuY29uc3QgbmFtZXMgPSBwcmljZXMubWFwKCBwID0+IHAubmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSApXG5jb25zdCBicmVha2Zhc3RQcmljZSA9IDE0Ljk5XG5cbi8vIGluaXRpYWxpemUgdGhlIGNhbGN1bGF0ZSBmdW5jdGlvbiB3aXRoIHRoZSBwcmVkZWZpbmVkIGRhdGFcbmNvbnN0IGNhbGN1bGF0ZSA9IENhbGN1bGF0b3IoIHByaWNlcywgYnJlYWtmYXN0UHJpY2UgKVxuXG4vLyBub3QgYXZhaWxhYmxlIHVudGlsIGluaXQgaXMgY2FsbGVkXG5sZXQgcG9wdWxhdGUsICRyZXN1bHRcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgLypcbiAgICBzZXQgdXAgYXV0b2NvbXBsZXRlIC0gZGVncmFkZXMgdG8gb3JkaW5hcnkgdGV4dCBpbnB1dCBpbiB1bnN1cHBvcnRlZFxuICAgIGJyb3dzZXJzXG5cbiAgICBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1kYXRhbGlzdFxuICAqL1xuICBjb25zdCAkZGF0YWxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI25hbWVzJyApXG5cbiAgbmFtZXMuZm9yRWFjaCggbmFtZSA9PiB7XG4gICAgY29uc3QgJG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdvcHRpb24nIClcbiAgICAkb3B0aW9uLnZhbHVlID0gbmFtZVxuICAgICRkYXRhbGlzdC5hcHBlbmRDaGlsZCggJG9wdGlvbiApXG4gIH0pXG5cbiAgLypcbiAgICBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSByZXN1bHQgc2VjdGlvbiBvZiB0aGUgcGFnZSBhbmQgaW5pdGlhbGl6ZSB0aGVcbiAgICBwb3B1bGF0ZSBmdW5jdGlvblxuICAqL1xuICAkcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5hdm8tYXBwX19yZXN1bHQnIClcbiAgcG9wdWxhdGUgPSBQb3B1bGF0ZSggJHJlc3VsdCApXG59XG5cbi8vIGdldCB0aGUgdXNlcidzIGlucHV0XG5jb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgJG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnW25hbWU9XCJuYW1lXCJdJyApXG4gIGNvbnN0ICRwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdbbmFtZT1cInByaWNlXCJdJyApXG4gIGNvbnN0ICR5ZWFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdbbmFtZT1cInllYXJzXCJdJyApXG5cbiAgaWYoICF2YWxpZGF0ZSggJG5hbWUsICRwcmljZSwgJHllYXJzICkgKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IG5hbWUgPSAkbmFtZS52YWx1ZVxuICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQoICRwcmljZS52YWx1ZSApXG4gIGNvbnN0IHllYXJzID0gcGFyc2VGbG9hdCggJHllYXJzLnZhbHVlIClcblxuICByZXR1cm4geyBuYW1lLCBwcmljZSwgeWVhcnMgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVBvc2l0aXZlTnVtYmVyID0gJGlucHV0ID0+IHtcbiAgbGV0IHZhbHVlXG5cbiAgdHJ5e1xuICAgIHZhbHVlID0gcGFyc2VGbG9hdCggJGlucHV0LnZhbHVlIClcbiAgfSBjYXRjaCggZSApe1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlID4gMFxufVxuXG5jb25zdCBlcnJvck1lc3NhZ2UgPSAoICRlbCwgbWVzc2FnZSApID0+IHtcbiAgY29uc3QgJGVycm9yID0gJGVsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvciggJy5hdm8tYXBwX19lcnJvcicgKVxuICAkZXJyb3IudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICRlcnJvci5jbGFzc0xpc3QucmVtb3ZlKCAnYXZvLWFwcF9fZXJyb3ItLWhpZGRlbicgKVxufVxuXG5jb25zdCB2YWxpZGF0ZSA9ICggJG5hbWUsICRwcmljZSwgJHllYXJzICkgPT4ge1xuICBsZXQgc3VjY2VlZGVkID0gdHJ1ZVxuXG4gIGNvbnN0IG5hbWUgPSAkbmFtZS52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gIGlmKCAhbmFtZXMuaW5jbHVkZXMoIG5hbWUgKSApe1xuICAgIGVycm9yTWVzc2FnZSggJG5hbWUsIGBTb3JyeSwgd2UgZG9uJ3QgaGF2ZSBwcmljZSBkYXRhIGZvciB0aGF0IGVsZWN0b3JhdGVgIClcblxuICAgIHN1Y2NlZWRlZCA9IGZhbHNlXG4gIH1cblxuICBpZiggIXZhbGlkYXRlUG9zaXRpdmVOdW1iZXIoICRwcmljZSApICl7XG4gICAgZXJyb3JNZXNzYWdlKCAkcHJpY2UsIGBQbGVhc2UgZW50ZXIgYSBudW1iZXIgZ3JlYXRlciB0aGFuIHplcm9gIClcblxuICAgIHN1Y2NlZWRlZCA9IGZhbHNlXG4gIH1cblxuICBpZiggIXZhbGlkYXRlUG9zaXRpdmVOdW1iZXIoICR5ZWFycyApICl7XG4gICAgZXJyb3JNZXNzYWdlKCAkeWVhcnMsIGBQbGVhc2UgZW50ZXIgYSBudW1iZXIgZ3JlYXRlciB0aGFuIHplcm9gIClcblxuICAgIHN1Y2NlZWRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gc3VjY2VlZGVkXG59XG5cbi8vIHNob3cgdGhlIHJlc3VsdFxuY29uc3Qgb3V0cHV0ID0gaW5wdXQgPT4ge1xuICAvLyBnZXQgdGhlIGlucHV0XG4gIGNvbnN0IHsgbmFtZSwgcHJpY2UsIHllYXJzIH0gPSBpbnB1dFxuXG4gIC8vIGNhbGN1bGF0ZSBhbGwgdGhlIHRoaW5nc1xuICBjb25zdCBtb2RlbCA9IGNhbGN1bGF0ZSggbmFtZSwgcHJpY2UsIHllYXJzIClcblxuICAvLyBwb3B1bGF0ZSB0aGUgbW9kZWxcbiAgcG9wdWxhdGUoIG1vZGVsIClcblxuICAvLyBzaG93IHRoZSByZXN1bHRcbiAgJHJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKCAnYXZvLWFwcF9fcmVzdWx0LS1oaWRkZW4nIClcbn1cblxuLy8gbWFrZSBzdXJlIHRoZSB1c2VyIGNhbid0IGRvIGFueXRoaW5nIHVudGlsIHRoZSBwYWdlIGxvYWRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgaW5pdCgpXG5cbiAgLy8gd2FpdCBmb3IgdGhlIHVzZXIgdG8gY2xpY2sgdGhlIGJ1dHRvbiwgZ2V0IGlucHV0LCBzaG93IHJlc3VsdFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBlID0+IHtcbiAgICBpZiggIWUudGFyZ2V0Lm1hdGNoZXMoICdidXR0b25bbmFtZT1cInJ1blwiXScgKSApIHJldHVyblxuXG4gICAgLy8gY2xlYXIgZXJyb3JzXG4gICAgY29uc3QgJGVycm9ycyA9IEFycmF5LmZyb20oIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuYXZvLWFwcF9fZXJyb3InICkgKVxuICAgICRlcnJvcnMuZm9yRWFjaCggJGVycm9yID0+IHtcbiAgICAgICRlcnJvci5pbm5lckhUTUwgPSAnJ1xuICAgICAgJGVycm9yLmNsYXNzTGlzdC5hZGQoICdhdm8tYXBwX19lcnJvci0taGlkZGVuJyApXG4gICAgfSlcblxuICAgIGNvbnN0IGlucHV0ID0gZ2V0SW5wdXQoKVxuXG4gICAgLy8gdmFsaWRhdGlvbiBmYWlsZWRcbiAgICBpZiggIWlucHV0ICl7XG4gICAgICAvLyBoaWRlIHRoZSByZXN1bHRcbiAgICAgICRyZXN1bHQuY2xhc3NMaXN0LmFkZCggJ2F2by1hcHBfX3Jlc3VsdC0taGlkZGVuJyApXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG91dHB1dCggaW5wdXQgKVxuICB9KVxufSlcbiIsImlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gKHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHMpLFxuICAgICAgICAgICAgICAgIGkgPSBtYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCAmJiBtYXRjaGVzLml0ZW0oaSkgIT09IHRoaXMpIHt9XG4gICAgICAgICAgICByZXR1cm4gaSA+IC0xO1xuICAgICAgICB9O1xufVxuXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgdG9rZW5zID0gWyAndmFsdWUnLCAnaWYnLCAnaHJlZicgXVxuY29uc3Qgc2VsZWN0b3JzID0gdG9rZW5zLm1hcCggdG9rZW4gPT4gYFtkYXRhLSR7IHRva2VuIH1dYCApXG5cbmNvbnN0IFBvcHVsYXRlID0gJGVsID0+IHtcbiAgLypcbiAgICBmaW5kIGFsbCBlbGVtZW50cyB0aGF0IGhhdmUgW2RhdGEtdmFsdWU9XCJcIl0sIFtkYXRhLWlmPVwiXCJdIGV0Yy4gYW5kIGNvbnZlcnRcbiAgICB0aGUgcmV0dXJuZWQgbGl2ZSBub2RlIGxpc3QgdG8gYW4gYXJyYXkgc28gd2UgY2FuIGRvIGZ1bmN0aW9uYWwgc3R1ZmZcbiAgKi9cbiAgY29uc3QgJGVscyA9IEFycmF5LmZyb20oICRlbC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvcnMgKSApXG5cbiAgLypcbiAgICBtYWtlIGFuIG9iamVjdCBtYXAgZnJvbSBuYW1lIHRvIGVsZW1lbnQgbGlrZTpcbiAgICB7XG4gICAgICBwcmljZTogJHNvbWVFbCxcbiAgICAgIG5hbWU6ICRzb21lT3RoZXJFbCxcbiAgICAgIC8vLi4uZXRjXG4gICAgfVxuICAqL1xuICBjb25zdCBuYW1lTWFwID0gJGVscy5yZWR1Y2UoICggbWFwLCAkZWwgKSA9PiB7XG4gICAgdG9rZW5zLmZvckVhY2goIHRva2VuID0+IHtcbiAgICAgIGlmKCAkZWwubWF0Y2hlcyggYFtkYXRhLSR7IHRva2VuIH1dYCApKXtcbiAgICAgICAgY29uc3QgbmFtZSA9ICRlbC5kYXRhc2V0WyB0b2tlbiBdXG5cbiAgICAgICAgbWFwWyBuYW1lIF0gPSAkZWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG1hcFxuICB9LCB7fSApXG5cbiAgLy8gcG9wdWxhdGUgdGhlIG5hbWVkIGVsZW1lbnQgd2l0aCB0aGlzIHZhbHVlXG4gIGNvbnN0IHBvcHVsYXRlRWxlbWVudCA9ICggbmFtZSwgdmFsdWUgKSA9PiB7XG4gICAgLy8gZ2V0IHRoZSBlbGVtZW50IGZvciB0aGlzIG5hbWUgaW4gdGhlIG1vZGVsXG4gICAgY29uc3QgJGVsID0gbmFtZU1hcFsgbmFtZSBdXG5cbiAgICBpZiggISRlbCApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoICdObyBlbGVtZW50IGZvdW5kIGZvciAnICsgbmFtZSApXG5cbiAgICAvLyBGb3JtYXQgbnVtYmVycyBuaWNlbHlcbiAgICBpZiggdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyApXG4gICAgICB2YWx1ZSA9IE1hdGgucm91bmQoIHZhbHVlICkudG9Mb2NhbGVTdHJpbmcoKVxuXG4gICAgLy8gcG9wdWxhdGUgdGhlIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnRcbiAgICBpZiggJGVsLm1hdGNoZXMoICdbZGF0YS12YWx1ZV0nICkgKVxuICAgICAgJGVsLnRleHRDb250ZW50ID0gdmFsdWVcblxuICAgIC8vIGVtcHR5IHRoZSBlbGVtZW50IGlmIHZhbHVlIGlzIGZhbHNleVxuICAgIGlmKCAkZWwubWF0Y2hlcyggJ1tkYXRhLWlmXScgKSAmJiAhdmFsdWUgKVxuICAgICAgJGVsLmlubmVySFRNTCA9ICcnXG5cbiAgICAvLyBzZXQgYW4gaHJlZlxuICAgIGlmKCAkZWwubWF0Y2hlcyggJ1tkYXRhLWhyZWZdJyApIClcbiAgICAgICRlbC5zZXRBdHRyaWJ1dGUoICdocmVmJywgdmFsdWUgKVxuICB9XG5cbiAgLypcbiAgICBmb3IgZWFjaCBrZXkgaW4gdGhlIG1vZGVsLCBwb3B1bGF0ZSB0aGUgbWF0Y2hpbmcgZG9tIGVsZW1lbnQgd2l0aCB0aGVcbiAgICBtYXRjaGluZyB2YWx1ZVxuICAqL1xuICBjb25zdCBwb3B1bGF0ZSA9IG1vZGVsID0+IHtcbiAgICBPYmplY3Qua2V5cyggbW9kZWwgKS5mb3JFYWNoKCBuYW1lID0+IHtcbiAgICAgIHBvcHVsYXRlRWxlbWVudCggbmFtZSwgbW9kZWxbIG5hbWUgXSApXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBwb3B1bGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVsYXRlXG4iXX0=
