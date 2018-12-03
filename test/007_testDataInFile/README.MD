# Test data in file

I often see developers who put test data into test file.

It is okay as long as you have small objects or lines...

But imagine having a string with 5MB of JSON or a piece of XML inside text file!

It is bad in many ways, including test speed and IDE performance.

Just put your bug pieces of data into separate files!
