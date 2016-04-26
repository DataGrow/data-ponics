import sys
import json
import time

from ws4py.client.threadedclient import WebSocketClient
from TSL2561 import TSL2561 #Lux Sensor




#######  Waterproof Temperature Sensor   ########
# https://github.com/timofurrer/w1thermsensor
# from w1thermsensor import W1ThermSensor

# sensor = W1ThermSensor()
# temperature_in_celsius = sensor.get_temperature()
# temperature_in_fahrenheit = sensor.get_temperature(W1ThermSensor.DEGREES_F)
# temperature_in_all_units = sensor.get_temperatures([
#     W1ThermSensor.DEGREES_C,
#     W1ThermSensor.DEGREES_F,
#     W1ThermSensor.KELVIN])
#######  Waterproof Temperature Sensor   ########


# https://github.com/seanbechhofer/raspberrypi/blob/master/python/TSL2561.py
# Lux Sensor

# https://github.com/adafruit/Adafruit_Python_DHT

class wsClient(WebSocketClient):
    def opened(self):
        self.send("I Have Connected!!!")    


if __name__ == '__main__':
    try:
        LuxSensor=TSL2561()
        print tsl.readLux()


        ws = wsClient('ws://localhost:8000/')
        ws.connect()
        ws.run_forever()
    except KeyboardInterrupt:
        ws.close()
    
    