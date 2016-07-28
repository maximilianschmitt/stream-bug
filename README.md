Running `node test.js` will not work for node versions `>= 5.11`:

```
$ node -v
v5.10.1
$ node test.js
worked
{ height: 2880, width: 3840, type: 'jpg' }
$ echo $?
0
$ n 5.11
$ node -v
v5.11.1
$ node test.js
didn't work
$ echo $?
1
```
