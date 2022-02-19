# Термокамера
## Краткое описание
Термокамера - это устройство для нагрева касеты с пчелами и поддержания температуры на определенном уровне в течении заданного времени. Основой для ее работы является микроконтроллер [ESP8266](https://ru.wikipedia.org/wiki/ESP8266). 
Данный репозиторий содержит исходные файлы для загрузки на ESP и исходные файлы приложения для телефона с которого производится управление термокамерой (исходники приложения будут добавлены чуть позже).
## Описание
### Мобильное приложение
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
На странице настроек можно добавить/удалить программу нагрева изменить количнство и длительность интервалов поддержания температуры.
### Термокамера
Термокамера собрана из того, что было под рукой. 
Специально были куплены только два бытовых тепловентилятора, три подшипника 6001 (101), два симистора BTA41 600, клиновой ремень привода 530 мм, полметра резиновой трубки Ф32мм, электрический звонок на 220 В. Всего на сумму не более 1500 руб. 
Основа - корпус нерабочего холодильника. Наличие теплоизолированных стенок позволяет быстрее выходить на рабочий режим и не греть улицу. Для нагрева используются два бытовых тепловентилятора.
<img src="https://github.com/razatr/thermal-camera/blob/main/images/fridge1.jpg" width="626px" title="Fridge"> </br>
Горячий воздух от тепловентиляторов не напрямую направляется на кассету с пчелами, а циркулирует по кругу. Сначала проходит вдоль дна термокамеры, заодно нагревая алюминиевый поддон под кассетой, затем обдувает кассету. 
<img src="https://github.com/razatr/thermal-camera/blob/main/images/fridge2.jpg" width="626px" title="Fridge"> </br>
Температура с точностью до 0,1 градуса и влажность с точностью до 1% контролируется при помощи двух модулей BME280. Первый из этих модулей размещен на входе горячего воздуха к кассете с пчелами, второй после кассеты, на выходе. На фото второй модуль: </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/bme.jpg" width="626px" title="BME"> </br>
Для регулировки температуры используются данные с первого модуля ВМЕ280. Данные с обоих модулей отображаются на экране управления </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/app-running.jpg" width="230px" title="App"> </br>
Вращение кассеты с пчелами осуществляется двигателем с редуктором.</br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/fans.jpg" width="626px" title="Fans"> </br>
Скорость вращения валов 17 об/мин. Первый вал соединен непосредственно с редуктором, второй соединен с первым посредством ремня. Валы представляют собой трубу с внешним диаметром 34 мм. В свободных концах труб сделаны проточки диаметром 27 мм, куда вставлены подшипники 6001 (101). В местах опоры кассет (кассеты цилиндрические) на валы надеты куски резиновой трубки. От смещения кассеты вдоль вала, удерживают две твист крышки от обычных стеклянных банок. Твист крышки фиксируются вторым куском резиновой трубки. Канавку для ремня образуют еще пара кусков трубки, надетых с промежутком в ширину ремня. Натягивается ремень болтом М12, толкающим профтрубу 25х25 мм, вставленную в профтрубу 30х30 мм.</br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/heaters.jpg" width="715px" title="Heaters"> </br>
На этом же фото виден первый модуль ВМЕ280 (на конце белого кабеля). 
Обвязка для ESP8266 была в наличии. Лет 5 назад собирал Wi-Fi контрольные весы для пчел. Осталось некоторое количество готовых плат. Питание 5В сделал от обычного зарядника для телефона.
## Гайд по установке и сборке рабочей термокамеры
### Сборка платы и подключение необходимых датчиков
<img src="https://github.com/razatr/thermal-camera/blob/main/images/scheme.png" title="Scheme"> </br>
Еще немного пояснений к схеме. Резисторы R16 и R17 мощностью 1 Вт. Можно взять любой номинал в пределах 330-510 Ом.
Нагревательные элементы тепловентиляторов. В каждом тепловентиляторе их два сопротивлением 55 Ом, соответственно мощность их по 880 Вт каждый. R20 и R21 от одного тепловентилятора, R22 и R23 от другого. 
Как они сгруппированы в термокамере? Постоянно регулировка осуществляется парой основных нагревательных элементов R20 и R22, включенных последовательно. При таком включении они выделяют мощность 440 Вт. Этого достаточно, чтоб поддерживать температуру на нужном уровне.
Для начального быстрого прогрева до требуемой температуры, кроме основных нагревательных элементов, используются ускоряющие нагревательные элементы R21 и R23, включенные параллельно. При таком включении они выделяют мощность 1760 Вт. 
Напряжение на нагревательные элементы подается при помощи симисторов BTA41 600. Корпус у симисторов электрически изолирован, что позволило прикрепить их к общему алюминиевому радиатору.
Еще одна деталь в схеме – Подключатель. Это переключатель режимов, взятый от одного из тепловентиляторов. Не получилось корректно изобразить его. На схеме DIP1. Это не совсем переключатель. Назвал его подключатель 😊 Он в каждом следующем положении подключает дополнительно очередной контакт. 
- в первом положении ничего не подключено.
- во втором положении подключены вентиляторы
- в третьем положении дополнительно к вентиляторам подключен основной нагреватель
-  в четвертом положении дополнительно к вентилятору и основному нагревателю подключен еще ускоряющий нагреватель
Сделано это для того, чтоб нагреватели невозможно было включить, пока выключены вентиляторы.
Индикация работы. 
- при включении термокамеры в сеть, светится светодиод LED4 (красного цвета) </br>
- <img src="https://github.com/razatr/thermal-camera/blob/main/images/box-red.jpg" width="715px" title="Red ligth"> </br>
- при включении основного нагревателя светится светодиод LED3 (зеленого цвета)
- при включении ускоряющего нагревателя светится светодиод LED2 (зеленого цвета)</br>
- <img src="https://github.com/razatr/thermal-camera/blob/main/images/box-all.jpg" width="626px" title="All ligth"> </br>
- при включении звукового сигнала светится светодиод LED1 (синего цвета)</br>
- <img src="https://github.com/razatr/thermal-camera/blob/main/images/box.jpg" width="626px" title="Box"> </br>
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
Для установки прошивки нам понадобится программа ESP8266Flasher. Для начала нам нужно собрать прошивку на сайте https://nodemcu-build.com/index.php. В поле Your email вводим свой email </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/email.png" width="726px" title="Email">, </br> далее переходим к полю "Select modules to include". Там выставляем следующий перечень модулей - bme280, bme280_math, cron, encoder, file, gpio, i2c, net, node, ow, sjson, tmr, uart, websocket, wifi. Ждем около 5 минут и на почту нам придет письмо с 2 ссылками на прошивку float и integer, нам нужна float. Либо пользуемся готовым файлом прошивки - https://disk.yandex.ru/d/upH5dopyD3_TCQ.
После чего, мы запускаем ESP8266Flasher. Нажимаем на вкладку Advanced и настраиваем все как на скриншоте </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/flasher-advanced.png" width="394px" title="Flasher advanced settings"> </br>
Переходим во вкладку Config, выбираем файл прошивки и ставим напротив него галочку. После этого надо перевести ESP в режим прошивки. Для этого удерживая кнопку burn нужно нажать кнопку reset, после чего программа прошивки должна увидеть AP MAC и STA MAC адреса устройства, на картинке обозначено где они находятся в программе, но самих адресов там нет </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/mac-adresses.png" width="537px" title="Mac addresses"> </br> Остается только запустить процесс прошивки.
### Загрузка скриптов на ESP
Далее нам нужно запустить ESPlorer нажав ESPlorer.bat в скачанной папке. После нужно открыть порт нажава кнопку "Open", предварительно выставив настройки как на скриншоте </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/ESPlorer%20settings.png" width="697px" title="Settings"> </br>
После подключения в консольном окне обычно появляется сообщение "Communication with MCU..Waiting answer from ESP - Timeout reached. Command aborted.". Далее нажмите FS Info на панели справа, и потом "Reload". После этого ESPlorer нормально видит все файлы и можно работать без ошибок. Потом нажимаем Upload в левой, нижней части программы, выбираем все файлы из папки ESP-files и нажимаем "Open" </br>
<img src="https://github.com/razatr/thermal-camera/blob/main/images/ESPlorer.png" width="1430px" title="ESPlorer"> </br> Загрузка займет некоторое время. После чего ESP готова к использованию как написано в [Как этот работает](#как-это-работает)
