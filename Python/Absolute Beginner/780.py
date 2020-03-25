'''
You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. 
Find Simple Interest.
Print the output up to two decimal places (Round-off if necessary).
(S.I. = P*T*R/100)
Sample Input :
1000 2 5
Sample Output :
100.00
'''
p,t,r=map(float,input().split())
s_i=(p*t*r)/100
print(round(s_i,2))
