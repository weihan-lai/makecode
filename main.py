def up():
    global y
    if (y > -1 or y < 4):
        y+=1
    led.plot(x, y)
input.on_gesture(Gesture.LOGO_UP, up)

def down():
    global y
    if (y > 0 or y < 5): 
        y-=1
    led.plot(x, y)
input.on_gesture(Gesture.LOGO_DOWN, down)

def left():
    global x
    if (x > 0 or x < 5):
        x-=1
    led.plot(x, y)
input.on_gesture(Gesture.TILT_LEFT, left)

def right():
    global x
    if (x > -1 or x < 4):
        x+=1
    led.plot(x, y)
input.on_gesture(Gesture.TILT_RIGHT, right)

x=2
y=2
brightness=255
led.plot(x, y)