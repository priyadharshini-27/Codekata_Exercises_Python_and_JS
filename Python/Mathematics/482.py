'''A person saves his monthly saving according to given schema.
He saves same amount of money which is equal to the money saved in immediate previous two months.
Assume, initially he saved 1000 rupees and in first month he saved another 1000.
Your task is to tell how much he had totally saved at the end of ‘n’ months
Sample Input :
1
Sample Output :
2000'''
n=int(input())
initial=1000
next_m=1000
total=2000
if n==1:
    print(total)
else:
    for i in range(2,n+1):
        savings=initial+next_m
        total=total+savings
        initial=next_m
        next_m=savings
    print(total)
