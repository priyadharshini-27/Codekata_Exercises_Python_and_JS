'''Indian PAN card issuing authority have found some fake PAN cards. 
They have hired you so that you can validate PAN card for them. 
Your task is to develop a suitable algorithm which could check if pan is valid or not
1)Pan must have uppercase letters only.
2)It must be of 10 character only
3)From index 1 to 5 all must be letters(A-Z),last index must be letter
4)Rest all must be integer Starting from 1
Sample Input :
HXTPS2142R
Sample Output :
pan
'''
n=input()
alphabet_count=0
digit_count=0
for i in range(0,5):
    if (n[i].isalpha()):
        alphabet_count+=1
for i in range(5,9):
    if (n[i].isdigit()):
        digit_count+=1
if (alphabet_count==5) and (digit_count==4) and(n[9].isupper()):
    print ("pan")
else:
    print("not pan")
