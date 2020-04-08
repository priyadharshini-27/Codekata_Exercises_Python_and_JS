'''Given a number N and an array of N strings, 
sort the strings based on the number of vowels in each of the strings in descending order.
Input Size : N <= 1000
Sample Testcase :
INPUT
3
Vishal
Aaae
Awqr
OUTPUT
Aaae
Vishal
Awqr
'''
n=int(input())
arr=[]
vowels=['a','e','i','o','u']
count_arr=[]
vowel_arr=[]
def vowel(word):
    count=0
    for letter in word:
        if letter.lower() in vowels:
            count+=1
    return count
for i in range(n):
    arr.append(input())
for word in arr:
    count_arr.append(vowel(word))
    vowel_arr.append(word)
l=0
while l!=n:
    maximum=max(count_arr)
    index_arr=count_arr.index(maximum)
    print(vowel_arr[index_arr])
    count_arr[index_arr]=0
    l+=1
