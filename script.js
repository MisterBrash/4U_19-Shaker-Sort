/**
 *  ICS4U with Mr. Brash 🐿️
 * 
 *  19 - Shaker Sort
 *
 *  Author:
 * 
 **/

'use strict';

import { arrayOfInts, round } from "./library.js";
import { performance } from "perf_hooks";

/**
 * Returns a sorted array using the Shaker Sort algorithm
 *
 * @param {Array} unsortedArray The data to be sorted
 * @param {boolean} debug Whether or not to print debug information
 * @returns {Array} A sorted copy of the given unsortedArray
 */
function shakerSort(unsortedArray, debug = false) {
  // The copy of the array and get timing
  let data = Array.from(unsortedArray);
  const start = performance.now();
  console.log(`Sorting ${data.length} items...`);

  /*** Start of student code ***/



  /*** End of student code ***/

  // Performance and return
  if (debug) console.log(`Sorting took: ${round(performance.now() - start, 2)} ms`);
  return data;
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

  // Time the function
  const start = performance.now();
  let passes = 0;
  let swaps = 0;

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
    console.log("Given array: " + unsortedArray);
    console.log("Sorted array: " + list);
    console.log("Passes: " + passes);
    console.log("Swaps: " + swaps);
    console.log("Sorting " + list.length + " items took: " + round(end, 2) + " ms");
  }
  return list;
}

/**
 * Test the bubbleSort function with an array of size qty
 * @param {Number} qty How many items to put in the array
 */
function test_bubble(qty) {
  // Sort it using Bubble Sort and show debug data
  bubbleSort(arrayOfInts(qty,1,qty,true,true), true);
}