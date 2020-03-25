'''Using the method of looping, write a program to print the table of 9 till N in the format as follows:
(N is input by the user)
9 18 27...
Sample Input :
3
Sample Output :
9 18 27
'''
n= int(input())
if n!=0:
    for i in range(1,n+1):
        if i!=n:
            print((i*9),end=" ")
        else:
            print(i*9)
else:
    print("NULL")
