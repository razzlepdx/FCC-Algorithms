def quicksort(array):
    #base case - arrays of size 0 or 1 don't need to be sorted
    if len(array) < 2:
        return array
    else:
        #recursive case - use divide and conquer to sort all items in array
        pivot = array[0]
        less = [i for i in array[1:] if i < pivot]
        greater = [i for i in array[1:] if i > pivot]

        return quicksort(less) + pivot + quicksort(greater)
