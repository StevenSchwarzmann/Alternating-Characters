You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

For example, given the string s = AABAAB, remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.

<strong>Function Description</strong>

Complete the alternatingCharacters function in the editor below. It must return an integer representing the minimum number of deletions to make the alternating string.

alternatingCharacters has the following parameter(s):

s: a string

<strong>Input Format</strong>

The first line contains an integer q, the number of queries. 
The next q lines each contain a string s.

<strong>Constraints</strong>

Each string  will consist only of characters A and B

<strong>Output Format</strong>

For each query, print the minimum number of deletions required on a new line.

<strong>Sample Input</strong>

5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

<strong>Sample Output</strong>

3
4
0
0
4
