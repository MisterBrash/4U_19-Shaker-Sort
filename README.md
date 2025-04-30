# 19 - Shaker Sort

###### ICS4U - Mr. Brash 🐿️

#### Table of Contents
- [Bubble Sort Explanation](#bubble-sort)
- [Your Task](./SHAKER.md) (Shaker Sort)
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
  let data = Array.from(unsortedArray); 
  let sorted = false;  // stop when the data is sorted
  let top = data.length - 1;
  let temp;
  while (top > 0 && !sorted) {
      sorted = true;  // Assume it is sorted, unless a swap happens

      // Go through the remaining items and swap when needed
      for (let i = 0; i < top; i++) {
          if (data[i] > data[i+1]) {
              sorted = false; // a swap was required
              temp = data[i];
              data[i] = data[i+1];
              data[i+1] = temp;
          }
      }
      top--;
  }
}
```

- ➡️ [Your Task](./SHAKER.md) (Shaker Sort)
- [Discussion Questions & Code Submission](https://classroom.google.com)


<br>

🐿️
