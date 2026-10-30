# Editing the Escape the maze React lesson

From this directory, run `npm run dev` and open the local address shown.

## Where to edit

Each folder in `src/components/` contains a React component and its own CSS file:

| Folder | Controls |
| --- | --- |
| Header | Brand and top bar |
| Hero | Title, artwork and lesson entry button |
| LessonNav | Step navigation and saved progress |
| LessonStep | Step title, completion checkbox and next button |
| LessonContent | Paragraphs, figures, lists and subheadings |
| InlineText | Inline code, bold text and links |
| CodeBlock | Code examples, terminal output and copy action |
| Challenge | Final creative challenge |
| Footer | Attribution and original source links |

- `src/data/lesson.json`: all five lesson steps and challenge content. Blocks have types `paragraph`, `heading`, `image`, `code`, or `list`. Paragraphs support inline code, bold, and Markdown links. Code examples remain Python, as in the source lesson.
- `src/index.css`: shared colors, fonts, focus indicators and automatic dark appearance. Edit the CSS variables here to recolor the whole page.
- `src/App.css`: overall page width, spacing and responsive columns.
- `src/App.jsx`: page composition, selected step and browser-local completion storage.
- `public/lesson-assets/`: original images. Figures use white backgrounds so transparent black diagram lines remain visible in dark mode.

Completion is saved on this browser and origin, when local storage is available. It is not an account or cloud sync. All lesson content is local; the starter project and attribution links open external sites. Copy has a manual selection fallback when clipboard access is blocked.

## Validation

`npm run build` creates the production build in `dist/`.
`npm run lint` checks the JavaScript and JSX.

## Design direction

A quiet lesson reader for a Python adventure: a maze-green accent, original artwork, restrained typography, and one lesson step at a time. System fonts keep controls familiar; generous line spacing and a reading column keep instructions comfortable. Native buttons, links, checkboxes and progress retain keyboard and assistive-technology behavior.

Apple Design Review informed the foundations, translated to web conventions:

- `layout.md` > Best practices: adaptable layout and visual hierarchy; the sidebar becomes a two-column step list below 800px.
- `typography.md` > Best practices: clear hierarchy; 17px base type with relative-unit headings and code.
- `buttons.md` > Best practices / Style: clearly labeled controls, at least 44px action heights, one prominent continuation action.
- `color.md` and `accessibility.md`: semantic color tokens, keyboard focus, text labels in addition to completion checkmarks, automatic light/dark palettes.

Source guidance: https://developer.apple.com/design/human-interface-guidelines/
This is a web lesson, so Apple's native navigation conventions are not imposed. No decorative animation or translucent surfaces are used. The original maze illustration is the signature element; extra dashboard tiles were omitted to keep attention on the lesson.

## Attribution

Lesson and images: Raspberry Pi Foundation, https://github.com/RaspberryPiLearning/rpg, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). This version adapts the original lesson into React, reorganizes its presentation, and adds navigation, copy actions and completion tracking. The original Markdown is retained in the parent directory.
