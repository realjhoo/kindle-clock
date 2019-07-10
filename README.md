# kindle-clock

This work (based on the Chrome Momentum extension) is designed to display the date and time on a 1st Generation Kindle Fire that otherwise is no longer useful.
In order to make that work:

1. All JS code had to be written inline. The Silk browser would not read an external JS file.
2. The Silk browser (not updatable since 2011) did not recognize `let`. Only `var` & `const` could be used.
3. Ternary operators were not reliably recognized.
4. In CSS, although `padding-bottom` worked, `padding-top` did not. In addition, it also did not understand `display: flex;`. Thus, the clock was centered horizontally with `<br>` tags. Stone knives and bearskins.
5. The browser was able to recognize the HTML `contenteditable` attribute, but would not bring up a keyboard for it. Therefore, the bits that would nornally have been stored locally were simply hard coded.
6. UPDATE: Since #5 was annoying, I added code to determine the current moon phase and display that instead.
   (Moon phase code modified from https://gist.github.com/endel/dfe6bb2fbe679781948c)
7. I added select "holidays" and some inspirational messages for the last line.
8. AM and PM were added back in (I had taken them out during testing).
