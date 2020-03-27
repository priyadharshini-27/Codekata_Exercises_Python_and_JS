'''Given a day, print 'yes' if it is a holiday otherwise print'no'.Assume that weekend days are holidays
Sample Testcase :
INPUT
saturday
OUTPUT
yes
INPUT
monday
OUTPUT
no
'''
holidays=['saturday','sunday']
day=input()
if day.lower() in holidays:
    print("yes")
else:
    print("no")
