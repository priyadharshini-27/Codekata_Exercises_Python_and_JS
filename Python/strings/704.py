''''You are given two strings . Your task is to tell whether the pair of strings is panagram.
A pair of strings are said to be panagram if they both are palindrome and are anagram of each other.
Sample Input :
nitin intni
Sample Output :
1
'''
string=input()
new_string=string.split(" ")
first=new_string[0][::-1]
second=new_string[1][::-1]
if (second==new_string[1]) and (first==new_string[0]):
    print(1)
else:
    print(0)
