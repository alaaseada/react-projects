import Values from './values'

function componentToHex(c) {
  var hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export function hexToRgb(c) {
  const colorVals = c.toUpperCase().split('').slice(1)
  const red = Values[colorVals[0]] * 16 + Values[colorVals[1]]
  const green = Values[colorVals[2]] * 16 + Values[colorVals[3]]
  const blue = Values[colorVals[4]] * 16 + Values[colorVals[5]]
  return { red, green, blue }
}

export function getColorShades(color) {
  const { red, green, blue } = hexToRgb(color)
  let myColors = [{ red: 255, green: 255, blue: 255 }]
  for (let i = 1; i < 10; i++) {
    const steps = [
      Math.floor((255 - red) / 10),
      Math.floor((255 - green) / 10),
      Math.floor((255 - blue) / 10),
    ]
    myColors = [
      ...myColors,
      {
        red: myColors[i - 1]['red'] - steps[0],
        green: myColors[i - 1]['green'] - steps[1],
        blue: myColors[i - 1]['blue'] - steps[2],
      },
    ]
  }
  myColors = [...myColors, { red, green, blue }]
  for (let i = 11; i < 20; i++) {
    const steps = [
      Math.floor(red / 10),
      Math.floor(green / 10),
      Math.floor(blue / 10),
    ]
    myColors = [
      ...myColors,
      {
        red: myColors[i - 1]['red'] - steps[0],
        green: myColors[i - 1]['green'] - steps[1],
        blue: myColors[i - 1]['blue'] - steps[2],
      },
    ]
  }
  myColors = [...myColors, { red: 0, green: 0, blue: 0 }]
  return myColors
}

export default rgbToHex
