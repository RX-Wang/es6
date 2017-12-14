# pa="一个变量"
# echo $pa
# echo ${pa}
### 只读变量
# a_var="hello"
# readonly a_var
# a_var="world"

### 删除变量
# my_var="haha"
# unset my_var
# echo ${my_var}

### 变量的类型
# a=1234
# let "a+=1"
# echo ${a}

# b=${a/12/BB} # 将12替换为BB
# echo ${b}    # Output: BB35

# let "b+=1"
# echo ${b}    # Output:1
  
  ###空变量 +数值 = 数值
e=""
echo ${e}  # Output: 没有任何输出

let "e+=1" # 空值 + 1
echo ${e}  # Output: 1

  ###未定义的变量 +数值 = 数值
  # 变量f未定义
echo "f = $f"   # Output: f =

let "f+=1" 
echo "f = ${f}" # Output: f = 1  