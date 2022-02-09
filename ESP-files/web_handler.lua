return function(conn, req)
    local request = req.file
    if request == "status" then
        dofile("bme.lua")
        conn:send(sjson.encode(status))
    elseif string.match(request, "edit") and string.match(request, "program") then
        local progNum = tonumber(string.sub(request, 14))
        status.programms[progNum] = req.args
        local programms = file.open("programms.json", "w")
        programms.write(sjson.encode(status.programms))
        programms.close()
        conn:send("successful")
    elseif string.match(request, "start") then
        status.currentProgramm = tonumber(string.sub(request, 7))
        dofile("programm-performer.lua")
        conn:send("successful")
    elseif string.match(request, "execution") then
        local answer = {}
        answer.stageTime = status.stageTime
        answer.currentStage = status.stageNumber - 1
        answer.inProgress = status.inProgress
        answer.stageStatus = status.stageStatus
        answer.t = status.t
        answer.h = status.h
        answer.t2 = status.t2
        answer.h2 = status.h2
        conn:send(sjson.encode(answer))
    elseif string.match(request, "stop") then
        stop = true
    end
end
