var config_template = "\
Для подключения к коммутатору концентрации использовать порты Ethernet1/1/1-Ethernet1/1/2</br>\n\
----------------НАЧАЛО КОНФИГУРАЦИИ----------------</br>\n\
configure</br>\n\
vlan database</br>\n\
vlan ==VLAN==</br>\n\
exit</br>\n\
hostname ==SYSNAME==</br>\n\
username admin privilege 15 password admin123</br>\n\
!</br>\n\
interface vlan 1</br>\n\
no ip address dhcp</br>\n\
!</br>\n\
interface vlan ==VLAN==</br>\n\
ip address ==IP== ==MASK==</br>\n\
!</br>\n\
interface gigabitethernet1/1/1</br>\n\
description UPLINK</br>\n\
switchport mode trunk</br>\n\
switchport trunk allowed vlan add ==VLAN==</br>\n\
no shutdown</br>\n\
!</br>\n\
interface gigabitethernet1/1/2</br>\n\
description UPLINK</br>\n\
switchport mode trunk</br>\n\
switchport trunk allowed vlan add ==VLAN==</br>\n\
no shutdown</br>\n\
!</br>\n\
exit</br>\n\
ip default-gateway ==GATEWAY==</br>\n\
exit</br>\n\
----------------КОНЕЦ КОНФИГУРАЦИИ----------------</br>\n\
/* Сохраняем конфигурацию с подтверждением */</br>\n\
write mem</br>\n\
y</br>\n\
/* Перезагружаем коммутатор с подтверждением */</br>\n\
reload</br>\n\
y</br>\n\
y</br>\n\
/* После перезагрузки подключиться к коммутатору для проверки */</br>\n\
Login:		admin</br>\n\
Password:	admin123</br>\n\
";
