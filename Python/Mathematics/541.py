'''you are given with ‘arasu’ series(shown in example).
You have to understand it and you will be given a number ‘n’ ,you have to print the series till n numbers.
Sample Input :
4
Sample Output :
2 5 10 17
'''
nth_term=int(input())
last_term=nth_term+1
for number in range(1,last_term):
    if nth_term!=number:
        print((number**2)+1,end=' ')
    else:
        print((number**2)+1)
