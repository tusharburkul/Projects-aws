#!/bin/bash

a=1100
b=500
c=200

if [[ $a -gt $b && $a -gt $c ]]
then
echo "A is biggest"
elif [[ $b -gt $a && $b -gt $c ]]
then
echo "B is bigest"
else
echo "C is biggest"
fi