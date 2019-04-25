---
title: Linux Containers LXD/LXC
lang: en-US
date: 2019-04-11
description: About LXD/LXC
---

* [Web site](https://linuxcontainers.org/), [images](http://uk.images.linuxcontainers.org/)
* [LXD](https://linuxcontainers.org/lxd/getting-started-cli/)

## Install

On Ubuntu install LXD via Ubuntu Software

## Config

* One time `sudo lxd init` (accept defaults)

**SSH**

```
ls ~/.ssh/id_*
ssh-keygen -t rsa -b 4096 -C "your_email@domain.com"
// ssh-copy-id remote_username@server_ip_address
lxc file push ~/.ssh/id_rsa.pub <container>/root/.ssh/authorized_keys/

```


## Commands

See [YouTube](https://www.youtube.com/playlist/?list=PLtK75qxsQaMLwF_uCB_CK8wIE17D-afuJ)

```bash
lxc launch ubuntu:           # create Ubuntu LTS container and start it
lxc list                     # list available machines
lxc start <name(s)>          # start container(s)
lxc stop <name>              # stop container
lxc move <oldname> <newname> # rename container
lxc exec <cnt> -- <command>  # Execute command in container
lxc exex db1 bash            # Open bash prompt on db1
exit                         # exit opened bash
```

Add SSH key: ssh-add ~/.ssh/id_rsa
chmod 600 /root/.ssh/authorized_keys && sudo chown root: /root/.ssh/authorized_keys
https://tech.aapjeisbaas.nl/push-ssh-public-key-to-lxc-container.html