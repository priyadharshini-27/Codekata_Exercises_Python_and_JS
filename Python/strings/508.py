'''Ria is a 5 year old girl. Her mother wants to teach her how to sort words in the same order that they appear in a dictionary. 
She decides to write a program to sort a given set of strings based on their alphabetical order. 
Help Ria’s mother to complete the program.
Sample Input :
3
InfinityWar EndGame Avengers
Sample Output :
Avengers EndGame InfinityWar
'''
n=int(input())
string=list(map(str,input().split()))[:n]
string.sort()
print(' '.join(string))
