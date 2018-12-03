# Dynamic requires

Any developer would like to write tests that don't depend on other tests.

And you would like to get your own library instance during tests.

So I often see developers who `require` everything in their test functions and assume
that their tests became independent.

But you have to remember that `require` just does not work like this. You will get shared
instance of library anyway. So it is better to require any library on the top of file.
It does not resolve problem with shared libraries but at least it will be less random
and your tests will run a little faster since nothing will have to be loaded in runtime.
