'''Given a string S, print 'yes' if it has a vowel in it else print 'no'.
Sample Testcase :
INPUT
codekata
OUTPUT
yes
'''
word=str(input())
p=0
vowels=['a','e','o','u','A','E','O','U','i','I']
for i in range(len(word)):
    if word[i] in vowels:
    	p=p+1
if p!=0:
    print("yes")
else:
    print("no")
