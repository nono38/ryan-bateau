radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 25)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 25)
    } else if (receivedNumber == 10) {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    } else if (receivedNumber == 2) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 25)
    } else if (receivedNumber == 3) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 25)
    } else if (receivedNumber == 5) {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    } else if (receivedNumber == 4) {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    } else {
    	
    }
})
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
radio.setGroup(1)
basic.forever(function () {
	
})
