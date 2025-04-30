# 19 - Shaker Sort

###### ICS4U - Mr. Brash 🐿️

#### Table of Contents
- [Bubble Sort Code](#bubble-sort)
- [Your Task](./SHAKER.md)
- [Discussion Questions & Code Submission](https://classroom.google.com)

Don't forget you can use `library.js` to help generate large arrays of various types of data. If you notice any errors or have suggestions for it - let me know!

### Bubble Sort

Here is an animation of _Bubble Sort_. 

|![Bubble Sort Animation](assets/Bubble-sort-example-300px.gif)|
|:---:|
|<div style="font-size:smaller">Bubble Sort Animation [Swfung8](https://commons.wikimedia.org/w/index.php?curid=14953478) / [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0)</div>|


It is a "sliding window algorithm" that is typically _not_ used due to the number of passes, array accesses and value swaps.

After each _pass_ of the algorithm, the largest item has “bubbled” its way to the top (right), allowing us to ignore that item on subsequent passes.

**Details**:
- Start at the first two items, compare them
- If necessary, swap them
- Move the window one to the right
- Repeat
- After each complete pass, start one further to the right and end of less than before

The following is an implementation in JavaScript (you can also find one in your [script.js](script.js) file). It will run until `sorted` is `true` _or_ the sort window was reduced to a length of zero (variable `top`).
```JS
function bubbleSort(unsortedArray) {
  let list = Array.from(unsortedArray); 
  let sorted = false;  // stop when the list is sorted
  for (let top = list.length - 1; top > 0 && sorted == false; top--) {
    sorted = true;  // Assume it is sorted, unless a swap happens

    // Go through the remaining items and swap when needed
    for (let i = 0; i < top; i++) {
      if (list[i] > list[i+1]) {
        sorted = false; // a swap was required
        let temp = list[i];
        list[i] = list[i+1];
        list[i+1] = temp;
      }
    }
  }
}
```

### Discussion Questions:
Answer the following discussion questions.

1. Show the swaps that would take place in using a bubble sort algorithm to organize the following data alphabetically. Decide how to organize your answer using HTML. Alternatively, you could insert an image to your HTML page that displays the answer.

		D	H	D	A	G	F


2. What change(s) would need to be made to the provided `bubbleSort()` code to make it sort values in descending order?

3. Are bubble sort and shaker sort “stable”? Explain your reasoning.

4. Which algorithm, `insertSort()` or `shakerSort()`, would be more efficient to sort the array below:

		[7, 9, 6, 8, 3, 5]

    Explain your reasoning.
<br><br>

<hr>

**Remember to push your work back to GitHub when you are done!**