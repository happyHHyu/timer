input.onButtonPressed(Button.A, function () {
    set_time += -1
    basic.showNumber(set_time)
})
input.onButtonPressed(Button.B, function () {
    set_time += 1
    basic.showNumber(set_time)
    if (set_time > 9) {
        set_time = 1
    }
})
let set_time = 0
set_time = 5
basic.forever(function () {
	
})
