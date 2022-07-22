#!/bin/bash
#This is a basic bash script
a=()
b=("apple" "banna" "chery")
echo ${b[2]}
b[5]="kiwi"
b+=("mango")
echo ${b[@]}
echo ${b[@]:-1}