var config_template = "\
ДДля подключения к коммутатору концентрации по оптике использовать порты TenGigabitEthernet1/0/1-1/0/4 или GigabitEthernet 1/0/23-1/0/24</br>\n\
</br>\n\
----------------НАЧАЛО КОНФИГУРАЦИИ----------------</br>\n\
enable</br>\n\
config</br>\n\
!</br>\n\
hostname ==SYSNAME==</br>\n\
!</br>\n\
vlan 1-4094</br>\n\
vlan ==VLAN== name nms</br>\n\
interface Vlan ==VLAN==</br>\n\
ip address ==IP== ==MASK==</br>\n\
exit</br>\n\
ip route 0.0.0.0 0.0.0.0 ==GATEWAY==</br>\n\
!</br>\n\
no spanning-tree</br>\n\
!</br>\n\
aaa authentication login auth default local</br>\n\
aaa authentication mode break</br>\n\
username admin password admin123 privilege 15</br>\n\
enable password level 15 admin123</br>\n\
!</br>\n\
interface range GigabitEthernet1/0/23-24</br>\n\
switchport mode trunk</br>\n\
switchport trunk allowed vlan add <VLAN></br>\n\
exit</br>\n\
interface range TengigabitEthernet1/0/1-4</br>\n\
switchport mode trunk</br>\n\
switchport trunk allowed vlan add <VLAN></br>\n\
end</br>\n\
----------------КОНЕЦ КОНФИГУРАЦИИ----------------</br>\n\
/* Сохраняем конфигурацию с подтверждением */</br>\n\
write</br>\n\
y</br>\n\
/* Перезагружаем коммутатор с подтверждением */</br>\n\
reload</br>\n\
y</br>\n\
/* После перезагрузки подключиться к коммутатору для проверки */</br>\n\
Login:		admin</br>\n\
Password:	admin123</br>\n\
</br>\n\
";
