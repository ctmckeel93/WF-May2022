# Intro to CSS

*** IMPORTANT ***

From this point forward you should not be using the following in your HTML
- br
- hr (Some exceptions)
- border="1"
- em and strong
- h elements purely for size of text
- width and height attributes on img

*** END ***

*** Vocabulary ***

- stylesheet -where we will write the code for all of our styling
- selector - indicator used to target a specific part of our html
- ruleset - a set of properties that pertain to the selector
- property - the different parts of an element that we can change - [Properties Reference](https://www.w3schools.com/cssref/default.asp)

*** END ***

## Introduction
    - What is CSS? - Cascading Style Sheets
    - Why is it used? 
        - Colors
            - name, Hexadecimal, RGBA, HSL
        - Positioning
        - Text
            - size
            - color
            - weight
            - style
            - decoration**
            - alignment
            - family
        - size of elements
        - spacing
        - more!
    - style.css
    - connecting your css to html <link>

## Selectors - How do we use CSS
    ## Format - CSS
    selector {property:value;} - each line in the curly brackets should end with a semicolon (;)
    
    - Targets
        - tags/element
        - classes - (container class)
        - ids

    Parent/Child relationship expanded

    - wildcard (Select all)

    - chaining Parent - Child

    - multi-select selector, otherselector, more, ...

    - more if time**

## Box Model
    - width - px, %, em, rem
    - height - px, %, em, rem
    - padding - space within (Between border and content)
    - border - self explanatory
    - margin - Space around element

    ## Format - margin, padding, border
        - all sides (20px)
        - top/bottom right/left (20px 10px)
        - top right bottom left (10px 20px 30px 40px)
        - top/bottom right left
        - any combination

    ## Resetters
        - removes default styling for these properties from all elements
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

## Inline-Block

    - Allows the size of an element to be adjusted and still be on the same line as another element
    - display: inline-block; - display property changes how an element is represented to the document
    - vertical-align


    *** DO NOT USE FLOAT ***
    *** TRY TO AVOID USING OVERFLOW FOR NOW ***




