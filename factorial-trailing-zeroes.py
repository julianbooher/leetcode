class Solution(object):
    def trailingZeroes(n):
        """
        :type n: int
        :rtype: int
        """
        factorial = 1
        res = 0
        for i in range (1, n + 1):
            factorial = factorial * i


        while(factorial % 10 == 0):
            factorial = factorial / 10
            res = res + 1

        return res
        

print(Solution.trailingZeroes(5))