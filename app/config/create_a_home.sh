#!/usr/bin/env bash
useradd -u ${HOSTUSERID} ${HOSTUSER} 
mkdir /home/${HOSTUSER}
chown ${HOSTUSER} /home/${HOSTUSER}