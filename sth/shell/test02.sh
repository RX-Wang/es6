#!/bin/bash

###类型一：
#for((i=1;i<30;i++))
#  do
#    echo $i
#done

### 类型二：
#for i in `seq 10`
#  do
#    echo $i
#done

### 类型三：
i=10
while(($i>0))
  do
    echo $i
    let "i-=1"
done
