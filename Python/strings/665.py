'''You are given a string.
Your task is to print only the consonants present in the string without affecting the sentence spacings if present. 
If no consonants are present print -1
Sample Input :
I am shrey 
Sample Output :
 m shry'''
 def anti_vowel(c):
    newstr = c
    vowels = ('a', 'e', 'i', 'o', 'u','A','E','I','O','U')
    for x in c:
        if x in vowels:
            newstr = newstr.replace(x,"")

    return newstr
h=input()
result=anti_vowel(h)
if len(result)==0:
    print(-1)
else:
    print(result)
