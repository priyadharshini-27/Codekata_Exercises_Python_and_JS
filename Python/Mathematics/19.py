'''Write a program to calculate the total surface area and volume of cuboid. 
Input contains three space separated positive integers L, B, H denoting the length, width and height of cuboid respectively.
Sample Testcase :
INPUT
1 2 3
OUTPUT
22 6
'''
l,b,h=map(int,input().split())
a=[]
a.append(2*((l*b)+(b*h)+(h*l)))
a.append(l*b*h)
print(" ".join(map(str,(a))))
