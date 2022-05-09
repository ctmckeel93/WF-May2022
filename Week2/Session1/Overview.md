# Office Hours
    - Q & A
    - Advanced Selectors
        - Chaining (Parent Child)
        - Multi-selector (selector, selector)
        - Limit cascading (>)
        - attribute seector (element[arrtibute])

    - CSS Diner

# Flexbox
    - The problem with inline-block
    - What is flex?
    - grandparent -> parent -> child

*** The following are applied to the parent of the content ***

## Justify Content
    - Used to adjust the horizontal spacing the content within
        (Remember property:value;) The property is justify-content
        ** Values **
        - flex-start (aligned to left with no space)
        - fex-end (aligned to the right with no space)
        - center (aligned central with no space)
        - space-around (creates some equal space around the black of content within and spaces them apart)
        - space-between (creates equal space between the content within with no space around the content block)
        - space-evenly (creates eqaual space around the block content and in between)

## Align Items
    - Used to adjust the vertical positioniing of a block of items
    (Remember property:value;) The property is align-items
    ** Values **
    - flex-start ( aligned to top of  parent)
    - center (aligned to center of parent)
    - flex-end (aligned to bottom of parent)

## Flex Direction
    - Used to change the orientation of the content
    (Remember property:value;) The property is flex-direction
    - row
    - column
    - row-reverse
    - column-reverse

## Flex Wrap
    - Uses overflow: wrap to push the extra content to the next line when you run out of room. 
    (Remember property:value;) The property is flex-wrap
    - wrap
    - nowrap
    - wrap-reverse (reverses order of content)

## The 4 above are the most commony used, but there are more you can use for more precise adjustments. 

    - align-content (this controls the vertica spacing of wrapped content)
    - gap (more intricate control over the gap between elements) (uses margin)

*** The following are applied directly to the individual elements ***

- justify/align-self (This is to position part of the content differently than the rest.)
- flex (this is to fill the whole element and adjust how much of the content it takes up.)
- theres much more, be sure to check out [CSS-Tricks: flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)




