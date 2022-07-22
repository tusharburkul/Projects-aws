#!/bin/bash

src_dir=/home/silk/Docker/scripts-linux
tgt_dir=/home/silk/Docker/backups

curr_timestamp=$(date "+%Y-%m-%d-%H-%M-%S")
backup_file=$tgt_dir/$curr_timestamp.tgz

echo " Taking backup on $curr_timestamp"
#echo "$backup_file"

tar czf $backup_file $src_dir

echo "backup complete"