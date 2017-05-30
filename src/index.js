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
