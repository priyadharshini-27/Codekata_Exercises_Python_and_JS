'''You are given a string ‘s’.
Your task is to find whether string is beautiful or not. 
A string is said to be beautiful whenever string is made up of only three characters. All the three characters must be distinct.
Print true if string is beautiful and false when it is not beautiful.
Sample Input :
Aab
Sample Output :
1'''
string=input()
length=len(string)
if len(set(string))==3:
    print(1)
else:
    print(0)
