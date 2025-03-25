radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 5) {
        vertical = receivedNumber
    }
    led.plot(horizontal, vertical)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
radio.onReceivedValue(function (name, value) {
    if (name == "derecha" && value < 5) {
        horizontal = value
    }
})
let horizontal = 0
let vertical = 0
radio.setGroup(1)
basic.forever(function () {
	
})
