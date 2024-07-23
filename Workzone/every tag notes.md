```
<vb:comment>
Note that "data" is the name I gave to the hookdata_post variable when setting up the hook
This shows an li tag after every post with extra ext on the even posts and every third post
Note that the start value is 0 based to match the index
</vb:comment>

<li>
ad postion: 
<vb:every index="data.postIndex" count=2 start=1>
	even
</vb:every>
<vb:every index="data.postIndex" count=3 start=0>
	three.
</vb:every>
</li>

<vb:comment>
If you only want a particular post, you can fake it by setting the count to an arbitrarily high number
This shows only for the seventh post.
</vb:comment>
<li>
ad postion: 
<vb:every index="data.postIndex" count=999 start=6>
	even
</vb:every>
</li>

<vb:comment>
	This can be used more generally (this requires full template access)
	Prints out the value for the first loop and then every fifth iteration after that.
</vb:comment>
<vb:each from="somevariable" index="myindex" value="value">
	<vb:every index="myindex" count=5 start=0>
		{vb:var value}
	</vb:every>
</vb:each>
```

