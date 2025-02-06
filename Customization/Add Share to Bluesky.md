1. Log into the AdminCP.
2. Go to Styles → Style Manager.
3. For you chosen style, select "Add New Template" from the Choose Action… dropdown.
4. Name your new template "display_share_bluesky"
5. Add this code to the template:

```html
		<li class="b-sharing-menu__item">
			<div>
			    <a class="b-sharing-menu__item-link b-share-bluesky" style="background-color:#56ACE7;color:white;" href="https://bsky.app/intent/compose?text=Check%20out20%-%20-%20{vb:var urlEncoded}" target="_blank">
				    <span class="b-icon-fa b-icon-fa--24 fa-brands fa-bluesky"></span> &nbsp;Bluesky
			    </a>
			</div>
		</li>

```

6. Save the template.
7. Edit your css_additional.css template.
8. Add this code:
```css
.b-share-bluesky {
  background-color:#56ACE7;color:white;
}
```

9. In the AdminCP go to Products & Hooks → Manage Template Hooks.
10. Click "Add New Hook" at the bottom of the page.
11. Give your new hook a descriptive name like "Bluesky Share Button".
12. Add in your template name `display_bluesky_share`.
13. Add the following to the Hook Arguments box: `urlEncoded=urlEncoded`