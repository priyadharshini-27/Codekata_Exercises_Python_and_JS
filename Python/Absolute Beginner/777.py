'''
You will be provided with a number. 
Print the number of days in the month corresponding to that number.
Note: In case the input is February, print 28 days. 
If the Input is not in valid range print "Error".
Sample Input :
8
Sample Output :
31
'''
n=int(input())
if n in {1,3,5,7,8,10,12}:
    print(31)
elif n in {4,6,9,11}:
    print(30)
elif n==2:
    print(28)
else:
    print("Error")
