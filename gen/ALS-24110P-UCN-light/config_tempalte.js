var config_template = "\
Для подключения к коммутатору концентрации использовать порты 0/6-0/9</br>\n\
</br>\n\
----------------НАЧАЛО КОНФИГУРАЦИИ----------------</br>\n\
set prompt ==SYSNAME==</br>\n\
network parms ==IP== ==MASK== ==GATEWAY==</br>\n\
vlan database</br>\n\
vlan ==VLAN==</br>\n\
exit</br>\n\
network mgmt_vlan ==VLAN==</br>\n\
configure</br>\n\
clock timezone 3 minutes 0</br>\n\
passwords min-length 0</br>\n\
username \"admin\" password admin123 level 15</br>\n\
exit</br>\n\
interface 0/6</br>\n\
description \"UPLINK-fiber-port6\"</br>\n\
vlan participation include ==VLAN==</br>\n\
vlan tagging ==VLAN==</br>\n\
exit</br>\n\
interface 0/7</br>\n\
description \"UPLINK-fiber-port7\"</br>\n\
vlan participation include ==VLAN==</br>\n\
vlan tagging ==VLAN==</br>\n\
exit</br>\n\
interface 0/8</br>\n\
description \"UPLINK-fiber-port8\"</br>\n\
vlan participation include ==VLAN==</br>\n\
vlan tagging ==VLAN==</br>\n\
exit</br>\n\
interface 0/9</br>\n\
description \"UPLINK-fiber-port9\"</br>\n\
vlan participation include ==VLAN==</br>\n\
vlan tagging ==VLAN==</br>\n\
exit</br>\n\
exit</br>\n\
----------------КОНЕЦ КОНФИГУРАЦИИ----------------</br>\n\
/* Сохраняем конфигурацию с подтверждением */</br>\n\
write memory</br>\n\
y</br>\n\
/* Перезагружаем коммутатор с подтверждением */</br>\n\
reload</br>\n\
y</br>\n\
/* После перезагрузки подключиться к коммутатору для проверки */</br>\n\
Login:		admin</br>\n\
Password:	admin123</br>\n\
</br>\n\
/* Доступность КД на сети можно проверить, сделав пинг шлюза*/</br>\n\
ping ==GATEWAY==</br>\n\
";
