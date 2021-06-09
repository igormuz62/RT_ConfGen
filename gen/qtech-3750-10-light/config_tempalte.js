var config_template = "\
Для подключения к коммутатору концентрации по оптике использовать порт Ethernet1/0/10</br>\n\
Для подключения по меди использовать порт Ethernet1/0/9</br>\n\
</br>\n\
----------------НАЧАЛО КОНФИГУРАЦИИ----------------</br>\n\
enable</br>\n\
config</br>\n\
!</br>\n\
username admin privilege 15 password 0 admin123</br>\n\
!</br>\n\
hostname ==SYSNAME==</br>\n\
!</br>\n\
vlan ==VLAN==</br>\n\
 name nms</br>\n\
!</br>\n\
Interface Ethernet1/0/9</br>\n\
 media-type copper </br>\n\
 switchport mode trunk</br>\n\
 switchport trunk allowed vlan <VLAN></br>\n\
!</br>\n\
Interface Ethernet1/0/10</br>\n\
 switchport mode trunk</br>\n\
 switchport trunk allowed vlan <VLAN></br>\n\
!</br>\n\
interface Vlan==VLAN==</br>\n\
 ip address <IP> ==MASK==</br>\n\
!</br>\n\
ip route 0.0.0.0/0 ==GATEWAY==</br>\n\
!</br>\n\
authentication line console login local</br>\n\
!</br>\n\
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
";
