# How Many Avos?

## Initialize project

`npm install`

## Generate client JS

`npm run build`

## structure

### house-prices.json

Raw data for house prices as an array like:

```json
[
  {
    "name": "Auckland Central",
    "price": 1079879,
    "source": ""
  },
  {
    "name": "Bay of Plenty",
    "price": 533600,
    "source": "http://www.nzherald.co.nz/bay-of-plenty-times/news/article.cfm?c_id=1503343&objectid=11656861"
  }
]
```

### Calculator

Takes predefined data and returns a calculate function

The calculate function takes the user's input and returns a model of the
calculated results, like:

```json
{
  "houseInAvocados": 216408.61723446893,
  "avocadosPerMonth": 3606.8102872411487,
  "avocadosPerWeek": 830.0597674255514,
  "breakfastsPerYear": 14407.991994663109,
  "breakfastsPerWeek": 276.3174275819548,
  "name": "auckland central",
  "price": 1079879,
  "years": 5,
  "source": ""
}
```

### Populate

Takes the result section of the page as a DOM element, and returns a populate
function

The populate function takes a model and populates the dom by finding elements
with data attributes that match the keys in the model and then populating them
with the value from the model

### index.js

Ties everything together:
- sets up event listeners
- gets the input from the form when the button is pressed
- validates the input
- calls calculate
- displays the results
