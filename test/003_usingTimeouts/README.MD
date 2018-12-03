# Using timeouts

Be careful when using timeouts and time based functions in your code.

Timeout in five seconds will mean that every time you launch your unit tests, those
will run five seconds longer.

Every time you launch your CI. Every time any other developer does it...

It means, that after 10.000 launches, you wasted ten hours of your team's time.
And that's just because of one test.
