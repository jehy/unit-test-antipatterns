# Common sandbox

Long time ago, sinon had a default sandbox for running all kinds of tests.

Fortunately, it was deprecated, and for this test I had to emulate it.

If you still use `sinon.sandbox` - get rid of it as soon as possible.

It is super easy to forget to restore a sandbox - and it means that all your
other tests will receive stubbed data from previous one.

Eventually it becomes a bloody mess.

So it is best to use different (or restored) sandboxes for each test.
