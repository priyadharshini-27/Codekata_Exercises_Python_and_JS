'''You are provided with the radius of a circle "A". 
Find the length of its circumference.
Note: In case the output is coming in decimal, roundoff to 2nd decimal place.
In case the input is a negative number, print "Error".
Sample Input :
2
Sample Output :
12.57
'''
r=float(input())
c=(2)*(r)*(22/7)
print(round(c,2))
