import cv2


def process(img):
    ret = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return ret
