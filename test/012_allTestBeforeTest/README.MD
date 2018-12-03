# All tests before the tests

Many developers would like to write their tests as short as possible.

And it seems smart to put all operations inside `before` block. Or even on top
of the module. After it, all that is left is to write some asserts inside test section.

Pretty clean and clear, is not it?

No, it is not!

* Because you made tests less isolated then they were.
* Because in case of some error, you will never know where it happened.
* Because you will never know if tests ran for long time.
