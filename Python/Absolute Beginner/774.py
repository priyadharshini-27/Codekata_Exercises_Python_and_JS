'''Print the First 3 multiples of the given number "N". 
(N is a positive integer)
Sample Input :
2
Sample Output :
2 4 6'''
N = int(input())
if N>0:
  for i in range(1,4):
    if i!=3:
    	print(i*N, end = " ")
    else:
        print(i*N)
