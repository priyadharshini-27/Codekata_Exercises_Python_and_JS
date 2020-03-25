'''You are provided with a number, "N". 
Find its factorial.
Sample Input :
2
Sample Output :
2'''
N=int(input())
m=1
for i in range(1,N+1):
    m=m*i
print(m)
