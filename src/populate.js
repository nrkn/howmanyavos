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
