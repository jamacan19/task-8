let CuentaManchas = 0
basic.forever(function () {
    CuentaManchas = 0
    if (maqueen.IR_read_version() == "1") {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(1000)
        CuentaManchas += 1
        basic.showNumber(CuentaManchas)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, randint(50, 150))
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, randint(50, 150))
    }
})
