#!/usr/bin/expect -f

# Устанавливаем таймаут
set timeout -1

# Запускаем билд
spawn npm run build

# Ждем завершения билда
expect eof

# Запускаем копирование
spawn scp -r build/* root@rassvetamethyst.ru:/var/www/rassvet/

# Ждем запрос пароля и отправляем его
expect "password:"
send "gL7HxcR-VcA#sV\n"

# Ждем завершения копирования
expect eof 