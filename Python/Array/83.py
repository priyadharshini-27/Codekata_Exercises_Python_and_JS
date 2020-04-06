'''
Given a number N and K followed by N elements and K elements. 
Now insert the given K elements one by one into the array and print the maximum in the array after each insertion .
Input Size : K <= N <= 10000(read about priority queues and implement)
Sample Testcase :
INPUT
5 2
1 2 3 4 5
5 4
OUTPUT
5 5
'''
l1,l2=map(int,input().split())
arr1=list(map(int,input().split()[:l1]))
arr2=list(map(int,input().split()[:l2]))
new_arr=[]
for i in range(l2):
    arr1.append(arr2[i])
    maximum=arr1[0]
    for j in range(len(arr1)):
        if maximum<arr1[j]:
            maximum=arr1[j]
    new_arr.append(maximum)
print(' '.join(map(str,new_arr)))
