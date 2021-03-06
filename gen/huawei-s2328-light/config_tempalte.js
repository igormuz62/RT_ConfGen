var config_template = "\
Для подключения к коммутатору концентрации использовать порты GigabitEthernet0/0/1-GigabitEthernet0/0/4</br>\n\
</br>\n\
----------------НАЧАЛО КОНФИГУРАЦИИ----------------</br>\n\
undo terminal debugging</br>\n\
undo terminal monitor</br>\n\
system</br>\n\
#</br>\n\
sysname ==SYSNAME==</br>\n\
vlan ==VLAN==</br>\n\
interface Vlanif==VLAN==</br>\n\
ip address ==IP== ==MASK==</br>\n\
#</br>\n\
aaa</br>\n\
authentication-scheme default</br>\n\
authorization-scheme default</br>\n\
accounting-scheme default</br>\n\
domain default</br>\n\
domain default_admin</br>\n\
local-user admin password cipher admin123</br>\n\
local-user admin privilege level 15</br>\n\
local-user admin ftp-directory flash:</br>\n\
local-user admin service-type telnet terminal ftp http</br>\n\
local-user anklav password cipher ==PASS==</br>\n\
local-user anklav privilege level 15</br>\n\
local-user anklav ftp-directory flash:</br>\n\
local-user anklav service-type telnet terminal ftp</br>\n\
# </br>\n\
ip route-static 0.0.0.0 0.0.0.0 ==GATEWAY==</br>\n\
# </br>\n\
interface GigabitEthernet0/0/1</br>\n\
undo port hybrid vlan 1</br>\n\
port hybrid tagged vlan ==VLAN==</br>\n\
# </br>\n\
interface GigabitEthernet0/0/2</br>\n\
undo port hybrid vlan 1</br>\n\
port hybrid tagged vlan ==VLAN==</br>\n\
# </br>\n\
interface GigabitEthernet0/0/3</br>\n\
undo port hybrid vlan 1</br>\n\
port hybrid tagged vlan ==VLAN==</br>\n\
# </br>\n\
interface GigabitEthernet0/0/4</br>\n\
undo port hybrid vlan 1</br>\n\
port hybrid tagged vlan ==VLAN==</br>\n\
# </br>\n\
user-interface maximum-vty 4</br>\n\
user-interface con 0</br>\n\
authentication-mode aaa</br>\n\
idle-timeout 0 0</br>\n\
user-interface vty 0 3</br>\n\
authentication-mode aaa</br>\n\
idle-timeout 10 1</br>\n\
q</br>\n\
q</br>\n\
----------------КОНЕЦ КОНФИГУРАЦИИ----------------</br>\n\
/* Сохраняем конфигурацию с подтверждением */</br>\n\
save</br>\n\
y</br>\n\
y</br>\n\
/* Перезагружаем коммутатор с подтверждением */</br>\n\
reboot</br>\n\
y</br>\n\
/* После перезагрузки подключиться к коммутатору для проверки */</br>\n\
Login:		admin</br>\n\
Password:	admin123</br>\n\
";
