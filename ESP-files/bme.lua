i2c.setup(0, 4, 12, i2c.SLOW);
bme280.setup()
t, p, h = bme280.read()
status.t = t
status.p = p 
status.h = h
print(status.t)
i2c.setup(0, 2, 1, i2c.SLOW);
bme280.setup()
t, p, h = bme280.read()
status.t2 = t
status.p2 = p 
status.h2 = h
print(status.t2)
