# Character Counter

## About
This is a Characater COunt built with React, TypeScript and tailwindCSS. You can type in the box and it will show you how many characters you typed, how many words, and about how long it would take to read it out loud.

## What I Built

### TextInput
This is the big text box you type into. It dones't save or remember anything. It's purpose is to show you what the text says now every time you type.

I built this using props called `onTextChange`. Every time you type a letter, th ebox calls that function and gives whatever is currently typed out.

### StatsDisplay
This is the part that shows the numbers: Charactersm Words, and ReadingTIme. This doesn't do any math. It gets hadned a set of numbers and shows them on screen .

The Words number turns red if you haven't typed enough words yet. 

### CharacterCounter
All the other children components are combined into the CharacterCounter component, the parent. I used `useState` to save the next text that is typed in the box, counts how many characters are in it, counts how many words are in it, and figure s out how long it would take to read, it also checks if the word count is under the minimum then hands it all down to StatsDisplay to actually show it. 

## Reflection

At first I thought I needed useState for the character count, word count, and reading time separately.