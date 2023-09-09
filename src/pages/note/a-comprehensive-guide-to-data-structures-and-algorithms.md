---
title: A Comprehensive guide to Data Structures and Algorithms
description: ""
date: 2023-08-18T22:10:24.454Z
image: ""
draft: true
layout: ../../layouts/NotesLayout.astro
categories:
    - code
type: note
---

## Introduction

It is without a doubt, DSAs (Data Structures and Algorithms) the most important topic in computer science. It is the foundation of computer science and is the reason why computers are what they are today. During my studies on DSAs in hopes to land a better job as a software engineer, I've come across many resources that have helped me understand the topic better. I've decided to compile a comprehensive guide to DSAs to help anyone that is interested in learning more about it. In this guide, I will show my tips and tricks to learning and solving any DSA problem.

## What is DSA?

DSA stands for Data Structures and Algorithms, two different topics but are often taught together. Data Structures are a way to organize and store data in a computer so that it can be used efficiently. Algorithms are a set of steps or instructions that are used to solve a problem or a set of similar problems.

### Core concepts before learning

There a few concepts we have to cover before learning your first data structure. These concepts are important to understand before learning any data structure or algorithm. These concepts are: Time Complexity, Space Complexity, and Big O Notation.

##### Time Complexity

Time Complexity is the amount of time it takes for an algorithm to run.

##### Space Complexity

Space Complexity is the amount of extra space needed to solve the problem with the algorithm used.

##### Big O Notation

Big O Notation is a way to measure the efficiency of an algorithm. It is used to describe the worst-case scenario of an algorithm.

**_Note_**: There are two other notations called _Big Omega_ and _Big Theta_. Big Omega is used to describe the best-case scenario of an algorithm. Big Theta is used to describe the average-case scenario of an algorithm. However, Big O is the most commonly used notation. These are topics that are good to know if interested but they are not necessary to know since when creating a particular algorithm we always want to improve the worst-case scenario. Please feel free to learn more about these if you wish it is helpful and useful to know.

#### Putting it all together

Say we have an array of numbers and we want to find the largest number in the array. We can use a for loop to iterate through the array and compare each number to the largest number. If the number is larger than the largest number, we set the largest number to the current number. This is a very simple algorithm that can be used to solve this problem. Let's break down the time and space complexity of this algorithm.

To iterate over the array to find the largest number we have to go through each number in the array. This means that the time complexity of this algorithm is O(n) where n is the size of the array. The space complexity of this algorithm is O(1) because we are not creating any new variables or arrays to solve this problem.

#### Common Complexities

During your time solving DSA problems, you will come across many different complexities. Here are some of the most common complexities you will come across. They are also listed from the most efficient to the least efficient.

-   O(1) - Constant Time
-   O(log n) - Logarithmic Time
-   O(n) - Linear Time
-   O(n log n) - Linearithmic Time
-   O(n^2) - Quadratic Time
-   O(2^n) - Exponential Time
-   O(n!) - Factorial Time

In most cases we want to avoid an exponential or factorial time complexity. These complexities are very inefficient and can take a very long time to run. We want to aim for a constant or logarithmic time complexity. These complexities are very efficient and can run very quickly. However, it is not always possible to achieve these complexities. In some cases, we have to settle for a linear or quadratic time complexity. These complexities are not as efficient as constant or logarithmic time complexities but are still efficient enough to solve the problem.

## Data Structures
