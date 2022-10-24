class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
#         [6,3,4,5,6]
#           p1     p2
        totalSum = sum(nums)
        leftsum = 0
        for i, x in enumerate(nums):
             rightSum=totalSum - leftsum - x
             if leftsum == rightSum:
                return i
             leftsum += x
        return -1