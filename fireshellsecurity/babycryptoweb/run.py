#!/bin/env python

import requests
from time import sleep
import base64


#https://ctf.fireshellsecurity.team/challenges#babycryptoweb

maxP = 57;
startP = 5;


code = "e1iwZaNolJeuqWiUp6pmo2iZlKKulJqjmKeupalmnmWjVrI=";

bChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
results = []

for p in range(0, len(code)):#range(startP, maxP + 1):
    #print("moving to next char")
    for b in bChars:
        c = list(code)
        #c[p] = b
        s = ''.join(c)
        kkk = b#'5'#5
        s = base64.b64decode(s)
        res = b""
        
        for i in range(0, len(s)):
            ch = s[i:i+1]
            kch = '5'#
            ch=chr(ord(ch)+ord(kch));
            res += ch.encode('utf-8')
            results.append(res)
            
        #payload = {'p': p, 'b': b}
        #print("before request")
        #r = requests.get('https://babycryptoweb.challs.fireshellsecurity.team/', params=payload)
        #print("after request")
        #sleep(1)
        #res = r.content
        #results.append(res)
        try:
            print(res)
        except:
            print("error decoding")
    #sleep(5)

#print(results)