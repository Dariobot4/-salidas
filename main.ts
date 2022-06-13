basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.clearScreen()
    }
})
