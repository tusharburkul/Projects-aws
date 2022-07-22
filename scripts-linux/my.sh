#!/bin/bash
declare -A myarry
myarry[color]=blue
myarry["office building"]="HQ West"

echo ${myarry["office building "]} is ${myarry[color]} 