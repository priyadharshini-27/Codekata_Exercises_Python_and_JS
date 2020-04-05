'''
Given a string S consisting of a sentence, 
the task is to reverse every word of the sentence except the first and last character of the words.
Sample Testcase :
INPUT
guvi coding platform
OUTPUT
gvui cnidog proftalm.
'''
sentence=input().split()
new_sentence=[]
for word in sentence:
    start=1
    end=len(word)-2
    word=list(word)
    while start<end:
        temp=word[start]
        word[start]=word[end]
        word[end]=temp
        start=start+1
        end=end-1
    new_sentence.append(''.join(word))
print(" ".join(map(str,new_sentence)))
