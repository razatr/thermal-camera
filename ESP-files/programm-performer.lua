status.stageStatus = 1 
local delay = 940 
print(status.currentProgramm)
local executableProgram = status.programms[status.currentProgramm] 
local numberOfStages = table.getn(executableProgram)
status.stageNumber = 1
stageTimer = tmr.create()
heatherMainPin = 5
status.stageTime = 1

local function checkTemperature()
    dofile("bme.lua")
    print("BME - ", status.t)
    print("t - ", executableProgram[status.stageNumber][1])
    print(status.stageTime)
    mem1,mem2 =node.egc.meminfo()
    print(mem1, mem2)
    if status.t > executableProgram[status.stageNumber][1] then 
        if gpio.read(heatherMainPin) == 1 then
            gpio.write(7,gpio.LOW)
            gpio.write(heatherMainPin, gpio.LOW) 
        end
        if status.stageStatus == 1 then
            gpio.write(7,gpio.LOW)
            status.stageStatus = 2
            status.stageTime = 1
            return 2
        end
    else
        if gpio.read(heatherMainPin) == 0 then
            if status.stageStatus == 1 then
                gpio.write(7,gpio.HIGH)
                gpio.write(heatherMainPin, gpio.HIGH) 
            else
                gpio.write(heatherMainPin, gpio.HIGH)
            end
        end
    end
end

local function nextStage()
    local function low()
        gpio.write(6, gpio.LOW)
    end
    if status.stageNumber == 2 then
        gpio.write(6, gpio.HIGH)
        tmr.create():alarm(1000, tmr.ALARM_SINGLE, low)
    end
    status.stageNumber = status.stageNumber + 1 
    status.stageStatus = 1
    status.stageTime = 0
end

local function loop(timer)
    if status.stageStatus == 2 and not stop then
        status.stageTime = status.stageTime + 1
    end
    if status.stageNumber <= numberOfStages and not stop then
        status.state = 1 
        if checkTemperature() == 2 then
            stageTimer:alarm(executableProgram[status.stageNumber][2] * 60000, tmr.ALARM_SINGLE, nextStage)
        end
        timer:alarm(delay, tmr.ALARM_SINGLE, loop)
    else 
        status.stageTime = 0
        status.stageNumber = 1
        status.inProgress = 0
        status.stageStatus = 0 
        stageTimer:stop()
        gpio.write(5, gpio.LOW)
        gpio.write(7, gpio.LOW)
        local function low()
            gpio.write(6, gpio.LOW)
        end
        gpio.write(6, gpio.HIGH)
        tmr.create():alarm(5000, tmr.ALARM_SINGLE, low)
        stop = false
    end
end

heatherTimer = tmr.create()
gpio.mode(heatherMainPin, gpio.OUTPUT)
status.inProgress = 1
stop = false
heatherTimer:alarm(delay, tmr.ALARM_SINGLE, loop)
