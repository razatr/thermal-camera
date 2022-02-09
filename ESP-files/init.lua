status = {}
status.t = 0
status.p = 0
status.h = 0
status.currentProgramm = 1
status.stageTime = 0
status.stageNumber = 1
status.inProgress = 0
status.stageStatus = 0
stop = false
local programms = file.open("programms.json", "r")
status.programms = sjson.decode(programms.read())
programms.close()
dofile("server.lua")
gpio.mode(5, gpio.OUTPUT) -- основной нагреватель
gpio.write(5, gpio.LOW)
gpio.mode(7, gpio.OUTPUT) -- второй нагреватель
gpio.write(7, gpio.LOW)
gpio.mode(6, gpio.OUTPUT) -- сигнал
gpio.write(6, gpio.LOW)
