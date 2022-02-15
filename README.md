# Термокамера
## Краткое описание
Термокамера - это устройство для нагрева касеты с пчелами и поддержания температуры на определенном уровне в течении заданного времени. Основой для ее работы является микроконтроллер [ESP8266](https://ru.wikipedia.org/wiki/ESP8266). 
Данный репозиторий содержит исходные файлы для загрузки на ESP и исходные файлы приложения для телефона с которого производится управление термокамерой (исходники приложения будут добавлены чуть позже).
## Как это работает
После запуска термокамеры автоматически запускается wifi-сеть ESP8266 с паролем 123456789. Подключившись с телефона и перейдя по адресу 192.168.4.1 загрузится приложение для управления термокамерой. Интерфейс весьма прост в Меню сверху 2 кнопки для перехода на домашнюю страницу откуда производится выбор и запуск определенной программы нагрева и кнопка "Настройки".
Главная страница. Это мы видим непосредственно после загрузки приложения. </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/app-home.png" width="250px" title="Home page"></br>
Нажав на выпадающий список мы увидим окно выбора программ. По умолчанию тут 3 программы нагрева. Их можно добавлять/удалять и настраивать нажав на вкладку "Настойки" </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/app-list-of-programs.png" width="250px" title="List of programs"> </br>
В этой вкладке отображаются все текущие программы </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/app-settings-main.png" width="250px" title="Settings main page"> </br>
Для перехода к настройкам конкретной программы нужно нажать на кнопку "Настроить" напротив требуемой программы. Все прогрммы состоят из стадий нагрева. На данной странице можно добвлять/удалять стадии. Менять поддерживаемую температуру и время ее поддержания. </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/app-settings.png" width="250px" title="Settings">
<img src="https://github.com/razatr/thermal-camera/blob/main/images/app-set-time.png" width="250px" title="Set time"> </br>
На странице настроек можно добавить/удалить программу нагрева изменить количнство и длительность интервалов поддержания температуры. Сама термокамера имеет нагреватели, в нашем случае их 2, 2 датчика температуры и влажности воздуха bme280. Так же установлен сигналный звонок, на данный момент он срабатывает при окончании программы на 5 секунд и на 1 секунду после второй стадии нагрева.
## Гайд по установке и сборке рабочей термокамеры
### Сборка платы и подключение необходимых датчиков(в процессе написания)
### Подключение ESP8266 к компьютеру через программатор
Для подключения микроконтроллера и его настройки можно пропустить шаг сборки. Нужно лишь установить его на плату с пинами для подключения.
Первым делом нам нужно установить необходимые программы на компьютер:
- [ESPlorer](https://github.com/4refr0nt/ESPlorer/releases/download/v0.2.0/ESPlorer-0.2.0.zip)
- [ESP8266Flasher](https://github.com/nodemcu/nodemcu-flasher/blob/master/Win64/Release/ESP8266Flasher.exe)
- [драйвер для программатора](https://disk.yandex.ru/d/0VPe1HDiwhC1wA) (он может не понадобиться, у меня без него не работал программатор)
- [Java 8 111 update](https://disk.yandex.ru/d/vaL6PE_EacCpMA) (на новых версиях Java у меня не работал ESPlorer, нужно будет установить если у вас тоже повторится такая ошибка).
После установки программ, подключить программатор к компьютеру через usb. Для того чтобы убедиться что все подключилось нормально и компьютер правильно видит устройство нужно зайти в "Диспетчер устройств"(Панель управления\Оборудование и звук\Диспетчер устройств). Там должен появится COM-порт в списке как на картинке. </br> 
<img src="https://github.com/razatr/thermal-camera/blob/main/images/COM%20port%20example.png" width="998px" title="COM port"> </br>
### Установка прошивки
Для установки прошивки нам понадобится программа ESP8266Flasher. Для начала нам нужно собрать прошивку на сайте https://nodemcu-build.com/index.php. В поле Your email вводим свой email, далее переходим к полю "Select modules to include". Там выставляем следующий перечень модулей - bme280, bme280_math, cron, encoder, file, gpio, i2c, net, node, ow, sjson, tmr, uart, websocket, wifi. Ждем около 5 минут и на почту нам придет письмо с 2 ссылками на прошивку float и integer, нам нужна float. Либо пользуемся готовым файлом прошивки - https://disk.yandex.ru/d/upH5dopyD3_TCQ.
После чего, мы запускаем ESP8266Flasher. Нажимаем на вкладку Advanced и настраиваем все как на скриншоте(добавиь скрин).
Переходим во вкладку Config, выбираем файл прошивки и ставим напротив него галочку. После этого надо перевести ESP в режим прошивки. Для этого удерживая кнопку burn нужно нажать кнопку reset, после чего программа прошивки должна увидеть AP MAC и STA MAC адреса устройства. Оставется только запустить процесс прошивки.
### Загрузка скриптов на ESP
Далее нам нужно запустить ESPlorer нажав ESPlorer.bat в скачанной папке. После нужно открыть порт нажава кнопку "Open", предварительно выставив настройки как на скриншоте </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/ESPlorer%20settings.png" width="697px" title="Settings"> </br>
После подключения в консольном окне обычно появляется сообщение "Communication with MCU..Waiting answer from ESP - Timeout reached. Command aborted.". Далее нажмите FS Info на панели справа, и потом "Reload". После этого ESPlorer нормально вилит все файлы и можно работать без ошибок. Потом нажимаем Upload в левой, нижней части программы, выбираем все файлы из папки ESP-files и нажимаем "Open". Загрузка займет некоторое время. После чего ESP готова к использованию как написано в [Как этот работает](#как-это-работает)
