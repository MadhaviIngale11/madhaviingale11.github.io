===========================================================
  MADHAVI INGALE — PORTFOLIO WEBSITE
  Simple instructions. No coding knowledge needed.
===========================================================

WHAT YOU HAVE
-------------
madhavi-portfolio/
    index.html      <- the website itself
    style.css       <- all the colours and layout
    script.js       <- the buttons, dark mode, menu
    README.txt      <- this file
    assets/         <- put your resume PDF in here


-----------------------------------------------------------
STEP 1 — OPEN THE WEBSITE
-----------------------------------------------------------
1. Keep all four files in the same folder.
2. Double-click "index.html".
3. It opens in your browser. That's it.

If it opens in the wrong browser: right-click index.html,
choose "Open with", then pick Chrome.

You do NOT need to install anything.


-----------------------------------------------------------
STEP 2 — ADD YOUR RESUME
-----------------------------------------------------------
1. Inside the madhavi-portfolio folder, there is a folder
   called "assets".
2. Put your resume PDF inside it.
3. Rename the file to exactly:

       Madhavi_Ingale_Resume.pdf

   (Capital letters and underscores must match.)

The "View resume" button will then work.
Until you add the file, that button will show a
"file not found" page. Nothing is broken.


-----------------------------------------------------------
STEP 3 — ADD YOUR LINKEDIN AND GITHUB
-----------------------------------------------------------
This is the ONE place you need to edit. Everything else
updates automatically.

1. Right-click "index.html" -> Open with -> Notepad
   (Mac: open with TextEdit)

2. Near the top you will see this block:

   const MY_LINKS = {
     linkedin: "https://www.linkedin.com/in/PASTE-YOUR-LINKEDIN-HERE",
     github:   "https://github.com/PASTE-YOUR-GITHUB-HERE",
     email:    "madhaviingale28@gmail.com",
     resume:   "assets/Madhavi_Ingale_Resume.pdf"
   };

3. Replace the text INSIDE the quote marks with your real
   links. Keep the quote marks and the commas.

   Example:
     linkedin: "https://www.linkedin.com/in/madhavi-ingale",

4. Save the file (Ctrl+S / Cmd+S).
5. Go back to your browser and press F5 to refresh.

TIP: if something breaks after editing, you almost certainly
deleted a quote mark, a comma or a curly bracket. Undo with
Ctrl+Z and try again.


-----------------------------------------------------------
STEP 4 — CHANGE YOUR NAME, EMAIL OR ANY TEXT
-----------------------------------------------------------
All the words on the site live in index.html.

1. Open index.html in Notepad.
2. Press Ctrl+F to search for the words you want to change.
   For example, search for: madhaviingale28@gmail.com
3. Type the new text over the old text.
4. Save, then refresh the browser.

Only change the words BETWEEN the angle brackets.

   Safe to edit:     <p class="tl-org">Advarisk</p>
                                       ^^^^^^^^
   Do NOT touch:     <p class="tl-org">        </p>

Your email appears in two places (the contact section and
the MY_LINKS block). Change both.


-----------------------------------------------------------
STEP 5 — ADD OR CHANGE A PROJECT
-----------------------------------------------------------
1. Open index.html and search for:  Case studies
2. Below it you will find three blocks that start with:

       <article class="case reveal">

   and end with:

       </article>

TO EDIT a project: just type over the existing words.

TO ADD a project:
1. Select one whole block from <article class="case reveal">
   down to its matching </article>.
2. Copy it (Ctrl+C).
3. Paste it (Ctrl+V) directly below, before the line
   that says </div>
4. Change the text in the copy.

TO REMOVE a project: delete the whole block, from
<article ...> to </article> including both of those lines.

The rows inside a project work in pairs:
    <dt>  = the label on the left  (e.g. Problem)
    <dd>  = the paragraph on the right
Always keep them in pairs.


-----------------------------------------------------------
STEP 6 — CHANGE THE COLOURS
-----------------------------------------------------------
1. Open style.css in Notepad.
2. The very first block at the top is:

   :root{
     --paper:    #F7F6F2;   /* page background   */
     --paper-2:  #EFEDE6;   /* alternating band  */
     --card:     #FFFFFF;   /* card background   */
     --ink:      #1A1D21;   /* main text         */
     --ink-soft: #5C6168;   /* secondary text    */
     --accent:   #10685C;   /* highlight/buttons */
     --accent-2: #C8792B;   /* second highlight  */
     --line:     #DCD9D0;   /* borders           */
   }

3. Replace any colour code (the part starting with #).
   Get colour codes from: https://htmlcolorcodes.com
4. Save and refresh.

The block just below it, [data-theme="dark"], controls
the DARK mode colours. Edit those the same way.

Change --accent first. It controls the buttons, the
highlights and the dot next to your name.


-----------------------------------------------------------
STEP 7 — PUT IT ONLINE FREE (GITHUB PAGES)
-----------------------------------------------------------
This gives you a public link you can put on your resume.

1. Go to github.com and create a free account.

2. Click the + at the top right -> "New repository".

3. Repository name:  type your username followed by
   .github.io

   Example: if your username is madhaviingale, type
            madhaviingale.github.io

4. Choose "Public". Click "Create repository".

5. On the next page click "uploading an existing file".

6. Open your madhavi-portfolio folder on your computer.
   Select index.html, style.css, script.js and the assets
   folder. Drag them into the browser window.

   IMPORTANT: upload the FILES, not the folder itself.
   index.html must sit at the top level.

7. Scroll down and click "Commit changes".

8. Wait 1-2 minutes.

9. Visit:  https://YOUR-USERNAME.github.io

   Your site is live.

TO UPDATE IT LATER:
Edit the file on your computer, then in GitHub click
"Add file" -> "Upload files" and drag the new version in.
It will replace the old one. Refresh after a minute.


-----------------------------------------------------------
QUICK FIXES
-----------------------------------------------------------
The page looks plain / unstyled
  -> style.css is not in the same folder as index.html,
     or its name was changed. All files must sit together.

Buttons and dark mode don't work
  -> script.js is missing from the folder, or renamed.

The fonts look different
  -> the fonts load from the internet. Offline, the site
     falls back to a standard font. Nothing is broken.

"View resume" shows an error
  -> the PDF is not in the assets folder, or the filename
     doesn't match exactly. See Step 2.

I broke something and can't fix it
  -> keep a backup copy of the original folder before you
     start editing. Then you can always start over.


-----------------------------------------------------------
BEFORE YOU SHARE THE LINK — CHECKLIST
-----------------------------------------------------------
[ ] LinkedIn URL replaced
[ ] GitHub URL replaced
[ ] Resume PDF added to assets folder
[ ] "View resume" button opens the PDF
[ ] Email link opens your mail app
[ ] Checked the site on your phone
[ ] Dark mode toggle works
