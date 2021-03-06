var config_template = "\
Для подключения к коммутатору концентрации использовать порты 27-28</br>\n\
</br>\n\
----------------НАЧАЛО КОНФИГУРАЦИИ----------------</br>\n\
create account admin admin</br>\n\
admin123</br>\n\
admin123</br>\n\
enable password encryption</br>\n\
# Basic</br>\n\
config command_prompt ==SYSNAME==</br>\n\
# Vlan</br>\n\
disable asymmetric_vlan</br>\n\
config vlan vlanid 1 delete 1-28</br>\n\
config vlan vlanid 1 advertisement disable</br>\n\
create vlan \"==VLAN==\" tag ==VLAN==</br>\n\
config vlan vlanid ==VLAN== delete 1-28</br>\n\
config vlan vlanid ==VLAN== add tagged 27-28</br>\n\
config vlan vlanid ==VLAN== advertisement disable</br>\n\
# IP</br>\n\
config ipif System ipaddress ==IP==/==MASK== vlan \"==VLAN==\"</br>\n\
create iproute default ==GATEWAY==</br>\n\
----------------КОНЕЦ КОНФИГУРАЦИИ----------------</br>\n\
/* сохраняем конфигурацию */</br>\n\
save</br>\n\
/* Перезагружаем коммутатор с подтверждением*/</br>\n\
reboot</br>\n\
y</br>\n\
/* После перезагрузки подключиться к коммутатору для проверки */</br>\n\
Login:		admin</br>\n\
Password:	admin123</br>\n\
";
