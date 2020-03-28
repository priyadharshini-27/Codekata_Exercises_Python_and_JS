''' You are given a string ‘s’.Your task is to print the string in alternate lowercase and uppercase order.
Sample Input :
abcd efgh ijkl
Sample Output :
ABCD efgh IJKL
'''
n=input()
n=n.split(" ")
for i in range(len(n)):
    if (i%2==0):
        n[i]=n[i].upper()
    else:
        n[i]=n[i].lower()
print(" ".join(n))
