basic.showIcon(IconNames.Giraffe)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
basic.forever(function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    basic.pause(500)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    basic.pause(500)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
    basic.pause(500)
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
    basic.pause(500)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
    basic.pause(500)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Pinkish)
    basic.pause(500)
    Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
    basic.pause(500)
})
basic.forever(function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 0)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 99)
    basic.pause(5000)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
})
basic.forever(function () {
    music.playMelody("G D G D G D G D ", 120)
    music.setVolume(120)
})
basic.forever(function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
    Tinybit.RGB_Car_Program().show()
})
