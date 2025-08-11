#!/usr/bin/env python3
"""Lockboxes"""
def canUnlockAll(boxes):
    opened = {0}
    keys = list(boxes[0])

    while keys:
        key = keys.pop()
        if key < len(boxes) and key not in opened:
            opened.add(key)
            keys.extend(boxes[key])

    return len(opened) == len(boxes)
