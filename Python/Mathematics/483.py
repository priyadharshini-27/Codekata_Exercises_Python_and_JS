'''In a firm there is an intelligent employee.
He said that he will not work on all those days which has factors more than 2.
You are given with month and year calculate the no of working days of employee.
Sample Input :
May 2016
Sample Output :
11'''
month,year=input().split()
year=int(year)
days_31=['january','march','may','july','august','october','december']
days_30=['april','june','september','november']
if (year%4==0 or year%400==0) and year%100!=0 and month.lower()=='february':
    print(10)
elif month.lower() in days_31:
    print(11)
elif month.lower() in days_30:
    print(10)
else:
    print(9)
