解决linux-mysql 登录时，报异常：Access denied for user 'root'@'localhost'

第一步：停服务

/etc/init.d/mysql stop



或者

service mysqld stop


第二步：跳过密码验证
执行命令行：
\# /usr/bin/mysqld_safe --skip-grant-tables
报：
151104 09:07:56 mysqld_safe Logging to '/var/lib/mysql/iZ23dq2wm0jZ.err'.
151104 09:07:56 mysqld_safe Starting mysqld daemon with databases from /var/lib/mysql

第三步：无密码登录
执行命令行：
mysql -u root 

第四步：授权

## mysql>

grant all privileges on *.* to 'root'@'localhost' identified by 'root' with grant option;
关键词解释：
root'@'localhost:是用户
root：是密码

问题一：发现无密码条件下，没有授权的写权限

## The MySQL server is running with the --skip-grant-tables option so it cannot execute this statement 解决方法： mysql> set global read_only=0;//（关掉新主库的只读属性） mysql>flush privileges;

再次执行第四步授权语句：grant all privileges on *.* to 'root'@'localhost' identified by 'root' with grant option;

## mysql>set global read_only=1;//(读写属性) mysql>flush privileges;

## （注意刷新是必须项）  第五步：重启数据库 /etc/init.d/mysql restart

## 或者 service mysql restart