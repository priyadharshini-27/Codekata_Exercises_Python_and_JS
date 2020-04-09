'''
Given a string S of length N, write a program that would reverse every word in the string.
Input Size : 1 <= N <= 100000
Sample Testcases :
INPUT
Hello World
OUTPUT
olleH dlroW
'''
sentence=input().split()
new_sentence=[]
for word in sentence:
    start=0
    end=len(word)-1
    word=list(word)
    while start<end:
        temp=word[start]
        word[start]=word[end]
        word[end]=temp
        start=start+1
        end=end-1
    new_sentence.append(''.join(word))
print(" ".join(map(str,new_sentence)))

