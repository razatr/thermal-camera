station_cfg={}
station_cfg.ssid="ESP8266"
station_cfg.pwd="123456789"
wifi.ap.config(station_cfg)
wifi.setmode(wifi.SOFTAP, true)
print(wifi.ap.getip())
dofile('web.lua')
