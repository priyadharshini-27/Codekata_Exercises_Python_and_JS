'''Find the minimum among 10 numbers.
Sample Testcase :
INPUT
5 4 3 2 1 7 6 10 8 9
OUTPUT
1
'''
limit=10
list1=list(map(float,input().split()))[:limit]
print(min(list1))
