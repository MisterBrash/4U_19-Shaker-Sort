/**
 *  ICS4U with Mr. Brash 🐿️
 *  3.2 - Shaker Sort
 *
 *  Author:
 * 
 *  Do NOT use console.log() for debugging. Instead, use the log() function. It prints to the HTML page.
 *  Also, don't add the library using "require". Just use Library.round() or Library.randInt(), or maybe Library.arraOfInts()
 *  For an example, see the test_bubble() function near the bottom.
 **/

'use strict';

/**
 * Returns a sorted array using the Shaker Sort algorithm
 *
 * @param {Array} unsortedArray The data to be sorted
 * @param {boolean} debug Whether or not to print debug information
 * @returns {Array} A sorted copy of the given unsortedArray
 */
function shakerSort(unsortedArray, debug = false) {
  // The copy of the data to use for sorting.
  let data = Array.from(unsortedArray);

  // For timing the function. Leave this here!
  const start = performance.now();

  // ****** YOUR CODE HERE *******


  // These two lines should remain right before the return statement
  const end = performance.now() - start;
  if (debug) log("Sorting " + data.length + " items took: " + Library.round(end, 2) + " ms");
}

/**
 * Returns a sorted array using the BUBBLE Sort algorithm
 *
 * @param {Array} unsortedArray The data to be sorted
 * @returns {Array} A sorted copy of the given unsortedArray
 */
function bubbleSort(unsortedArray, debug = false) {
  let list = Array.from(unsortedArray);
  let sorted = false;
  let passes = 0;
  let swaps = 0;
  // Time the function
  const start = performance.now();

  // START!
  for (let top = list.length - 1; top > 0 && sorted == false; top--) {
    sorted = true; // Assume sorted unless a swap happens

    // Go through the remaining items and swap, if needed
    for (let i = 0; i < top; i++) {
      if (list[i] > list[i + 1]) {
        // a swap is required, so it's not sorted - perform the swap
        sorted = false; 
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
        swaps++;
      }
    }
    // A pass is finished
    passes++;
  }
  // The debug print should remain right before the return statement
  if (debug) {
    const end = performance.now() - start;
    log("Given array: " + unsortedArray);
    log("Sorted array: " + list);
    log("Passes: " + passes);
    log("Swaps: " + swaps);
    log("Sorting " + list.length + " items took: " + Library.round(end, 2) + " ms");
  }
  return list;
}

/* /////////   Helper Function(s):   ////////// */

/**
 * Test the bubbleSort function with an array of size qty
 * @param {Number} qty How many items to put in the array
 */
function test_bubble(qty) {
  let data = Library.arrayOfInts(qty,1,qty,true,true);
  // Sort it using Bubble Sort and show debug data
  bubbleSort(data, true);
}

/**
 * Log the given string to the debug div
 * @param {String} str The information to log to the debug div on the page
 * @returns undefined
 */
function log(str) {
  document.getElementById("debug").innerHTML += "<br>" + str.toString();
}
