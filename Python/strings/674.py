'''
You are given with string of words,we have to arrange them in reverse saturated order.
Input Description:
You are given a string ‘s’.
Output Description:
Print the reverse saturated order
Sample Input :
I am kohli fan
Sample Output :
I ma ilhok naf
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
