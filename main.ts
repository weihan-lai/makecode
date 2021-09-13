input.onGesture(Gesture.LogoUp, function up() {
    
    if (y > -1 || y < 4) {
        y += 1
    }
    
    led.plot(x, y)
})
input.onGesture(Gesture.LogoDown, function down() {
    
    if (y > 0 || y < 5) {
        y -= 1
    }
    
    led.plot(x, y)
})
input.onGesture(Gesture.TiltLeft, function left() {
    
    if (x > 0 || x < 5) {
        x -= 1
    }
    
    led.plot(x, y)
})
input.onGesture(Gesture.TiltRight, function right() {
    
    if (x > -1 || x < 4) {
        x += 1
    }
    
    led.plot(x, y)
})
let x = 2
let y = 2
let brightness = 255
led.plot(x, y)
