class Solution(object):
    def trailingZeroes(n):
        """
        :type n: int
        :rtype: int
        """
        returnValue = 1
        for i in range (1, n + 1):
            returnValue = returnValue * i
        return returnValue
        

print(Solution.trailingZeroes(5))