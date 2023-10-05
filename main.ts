/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program helps play Rock - Paper - Scissors
*/

// variables
let randomNumber: number = -1
let score: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// shake Micro:Bit
input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0 - rock
    if (randomNumber == 0) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    }

    // if randomNumber was 1 - paper
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
    }

    // if randomNumber was 2 - scissor
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    // pause and show you are ready again
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})

// press "A" button to increase score
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    score = score + 1
    basic.showIcon(IconNames.Yes)

    // pasue and show you are ready again
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})

// press "B" button to show score
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("Score: " + score.toString())

    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
