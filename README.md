# Character Counter

## About
This is a Characater Count built with React, TypeScript and TailwindCSS. You can type in the box and it will show you how many characters you typed, how many words, and about how long it would take to read it out loud.

## What I Built

### TextInput
This is the big text box you type into. It dones't save or remember anything. It's purpose is to show you what the text says now every time you type.

I built this using props called `onTextChange`. Every time you type a letter, th ebox calls that function and gives whatever is currently typed out.

### StatsDisplay
This is the part that shows the numbers: Charactersm Words, and ReadingTIme. This doesn't do any math. It gets hadned a set of numbers and shows them on screen .

The Words number turns red if you haven't typed enough words yet. 

### CharacterCounter
All the other children components are combined into the CharacterCounter component, the parent. I used `useState` to save the next text that is typed in the box, counts how many characters are in it, counts how many words are in it, and figure s out how long it would take to read, it also checks if the word count is under the minimum then passes it all down to StatsDisplay to actually show it. 

## Reflection

At first I thought I needed useState for the character count, word count, and reading time separately.

**1. How did you handle state updates when the text changed?** 

I kept one piece of state, the text itself, using `useState` in `CharacterCounter`. Every time someone types in the box, `TextInput` calls a function it was handed (`onTextChange`), and that function just saves the new text with `setText`. I didn't create separate state for character count, word count, or reading time, since all three of those can be figured out fresh every time, just by looking at whatever text is currently saved. 

**2. What considerations did you make when calculating reading time?** 

I used a simple average: about 200 words per minute, since that's a commonly used estimate for casual reading speed. At first I rounded the result up to a whole number of minutes, but that meant anything under 200 words always just showed "1 min," which wasn't very useful or accurate. I changed it to keep the number as a decimal (like 0.25 minutes) and then formatted that into a clock-style time like `0:15`, so short pieces of text show a more honest, specific time instead of always rounding up.

 **3. How did you ensure the UI remained responsive during rapid text input?** 

 Since all the math here (character count, splitting words, one division for reading time) is really lightweight, I didn't need to add any extra techniques like debouncing or delaying updates. The stats just recalculate on every keystroke, and it stays fast because the calculations themselves are simple, nothing here loops through huge amounts of data or does anything slow. If this app needed to handle something heavier, like analyzing a massive document, that's a case where I'd look into slowing down how often it recalculates, but for regular typing speed, it wasn't necessary here. 
 
 **4. What challenges did you face when implementing the statistics calculations?**
  Counting words correctly was trickier than I expected. Just counting spaces doesn't work well, because typing extra spaces by accident, or having an empty box, would throw off the count. I had to trim extra space off the start and end of the text, split it apart on any run of whitespace, and then filter out any leftover empty pieces before counting what was left. Getting the empty-box case right (making sure it shows 0 words, not 1) took a little trial and error too. 
 
 The other real challenge was deciding where responsibility should live. I wanted `StatsDisplay` to turn the word count red when someone was under the minimum, but I didn't want that component doing its own comparison math, since its whole job was supposed to be just showing numbers it's handed. I ended up doing the actual `wordCount < minWords` comparison inside `CharacterCounter`, and just passing a plain true-or-false answer down to `StatsDisplay`. That kept each piece doing only the one job it was supposed to do.  