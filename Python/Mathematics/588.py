'''
You are given with an array. Your task is to print the right rotated array after k operations.
Time:O(n)
Extra Space: O(1)
Input Description:
First line contains two number ‘n’ and ‘k’.Next line contains n space separated numbers.
Output Description:
Print the array as mentioned.
Sample Input :
14 117
15 26 35 98 61 1230 75 96 63 21 1654 98654 320145 987
Sample Output :
21 1654 98654 320145 987 15 26 35 98 61 1230 75 96 63 
'''
n,m=map(int,input().split())
l=list(map(int,input().split()))[:n]
for number in range(0,m):
    last=l[n-1];
    for n2 in range(n-1,0,-1):
        l[n2]=l[n2-1]
    l[0]=last
print(" ".join(map(str,l)))
