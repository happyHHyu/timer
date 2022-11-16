input.onButtonPressed(Button.A, function () {
    set_time += -1
    if (set_time < 1) {
        set_time = 9
    }
    basic.showNumber(set_time)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < set_time; index++) {
        start_time = input.runningTime()
        set_time += -1
        basic.showNumber(set_time)
        end_time = input.runningTime()
        basic.pause(1000 - (end_time - start_time))
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showString("TIME'S UP")
})
input.onButtonPressed(Button.B, function () {
    set_time += 1
    if (set_time > 9) {
        set_time = 1
    }
    basic.showNumber(set_time)
})
let end_time = 0
let start_time = 0
let set_time = 0
set_time = 5
basic.showNumber(set_time)
basic.forever(function () {
	
})
