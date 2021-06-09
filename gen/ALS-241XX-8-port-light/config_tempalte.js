var config_template = "\
Для подключения к коммутатору концентрации использовать порты 0/9-0/10</br>\n\
</br>\n\
----------------НАЧАЛО КОНФИГУРАЦИИ----------------</br>\n\
set prompt \"==SYSNAME==\"</br>\n\
network parms ==IP== ==MASK== ==GATEWAY==</br>\n\
vlan database</br>\n\
vlan ==VLAN==</br>\n\
vlan name ==VLAN== \"nms\"</br>\n\
exit</br>\n\
network mgmt_vlan ==VLAN==</br>\n\
configure</br>\n\
passwords min-length 0</br>\n\
username \"admin\" password admin123 level 15</br>\n\
interface 0/9</br>\n\
no shutdown</br>\n\
vlan participation include ==VLAN==</br>\n\
vlan tagging ==VLAN==</br>\n\
exit</br>\n\
interface 0/10</br>\n\
no shutdown</br>\n\
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
";
