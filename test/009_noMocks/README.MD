# No mocks

It is much easier and simpler to use local live database or APIs in unit tests.

If you mock them, you will have to remember about it, to change them when data is
changed and so on...

But it is absolutely damn necessary.

* Because your CI server does not have database.
* Because any external API can be down.
* Because you may check removing or changing data in your tests and you
don't want to accidentally make it on production database.
* And for a thousand of other reasons.

Just remember - you should never use another service inside unit tests.
