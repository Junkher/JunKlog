---
title: Docker端口映射之谜
date: 2022-07-19T22:58:51+08:00
tags: []
description: ""
draft: "true"
---

## Port Mapping

如何正确的配置端口映射？

每个container都相当于一个host，postgres-server是在host的5432端口，因此需要将5432映射到0.0.0.0:5437或者其他端口才有效。

```
 docker run -d --name postgres-server -p 5437:5432 -e "POSTGRES_PASSWORD=hasura123" postgres
```

```
$ docker port postgres-server
5432/tcp -> 0.0.0.0:5437
5432/tcp -> :::5437
```

![](https://s2.loli.net/2022/07/14/S4KfhtRYPZ3BVWp.png)


尝试连接
```
psql -h 127.0.0.1 -p 5437 -U postgres
```


## restart 和 up&down

实践证明，如果没有改动docker-compose.yml而只是修改配置文件，则可以通过restart使其生效



##  volume

http://docker.baoshu.red/data_management/volume.html