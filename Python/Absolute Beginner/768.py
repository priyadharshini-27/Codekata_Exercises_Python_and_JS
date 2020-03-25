'''Let "A" be a year, write a program to check whether this year is a leap year or not.
Print "Y" if its a leap year and "N" if its a common year.
Sample Input :
2020
Sample Output :
Y
'''
n=int(input())
if (n%4==0 or n%400==0)and n%100!=0:
    print("Y")
else:
    print("N")
