# Bad compare

Let's say this honestly - all unit tests can fail eventually. And it is one of the reasons
why we write them - so that we can see regress and debug.

But I often see tests that have bad design and are hard to debug if they fail.

One of the most often cases is comparing data with assert and then throwing meaningless
error messages where you can't understand what exactly went wrong.

For example, if unexpected error happened here in `myTestFunction`, all you will see is:

```
1) badCompare
       should throw only my custom errors:

      AssertionError: expected false to be true
      + expected - actual

      -false
      +true
      
      at Context.it (test/011_badCompare/test.js:23:14)
```
Good luck guessing what happened!
