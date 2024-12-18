#!/usr/bin/python3
"""
Minimum Operations
"""

def minOperations(n):
    """
    Computes the fewest number of operations needed to result
    in exactly n H characters.
    """
    if not isinstance(n, int):
        return 0

    ops_count = 0
    clipboard = 0
    done = 1
    # print('H', end='')
    while done  < n:
        if clipboard == 0:
            clipboard = done
            done += clipboard
            ops_count += 2
            # print('-(11)->{}'.format('H' * done), end='')
        elif n - done > 0 and (n - done) % done == 0:
            clipboard = done
            done += clipboard
            ops_count + 2
            # print('-(11)->{}'.format('H' * done), end='')
        elif clipboard > 0:
            clipboard = done
            done += clipboard
            ops_count += 1
            # print('-(01)->{}'.format('H' * done), end='')
    # print('')

    return ops_count
