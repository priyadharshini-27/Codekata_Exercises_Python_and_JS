'''The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. 
You are provided with the side "a". 
Find the area of the equilateral triangle.
Sample Input :
20
Sample Output :
173.21
'''
import math
n=float(input())
print(round((0.25*(n**2)*math.sqrt(3)),2))
