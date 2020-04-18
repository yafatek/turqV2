# Contributing

Welcome! Thank you for taking the time to contribute. This project relies on an active and involved community, and we really appreciate your support.

## Code of Conduct

This project is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). All participants are expected to uphold this code. Violations of the code can be reported by contacting the project team at
[tim@turq.io](mailto:tim@turq.io).

## How to contribute

Fork the repo, add or change markdown files, and create a pull request. You can make these changes via the GitHub web interface, the command line, or a git client of your choice.

Once you create a pull request, your changes will be built in a deploy preview. That way, you can see your changes without having to run a local development environment. To display the link to this preview, click "show all checks" at the bottom of a pull request.

## What to contribute

### A legislation draft _must_ follow the principles of

- **Simplicity** - Select short, familiar words and phrases that best express the intended meaning according to common and approved usage. Avoid “legalese.”The language of a statute should be dignified, not pompous.Examples: Use “after”, instead of "subsequent to;" use "before" instead of "prior to."
- **Conciseness** - Omit needless language and use the shortest sentence that conveys the intendedmeaning.
- **Consistency** - Be consistent in the use of language throughout the bill. Do not use the same word or phrase to convey different meanings. Do not use different language to convey the same meaning.
- **Directness** - If a concept can be expressed positively or negatively, express it positively.
- **Ordinary English** - Draft in ordinary English. Avoid words that might be considered slang. Also try to avoid using a complicated word when a simple word will convey the same concept.Generally do not use abbreviations and contractions.In rare instances where an abbreviation is used, insert a definition of the abbreviated term.
- **Appropriate Material for Inclusion** - It is usually best not to include material that has no legal effect in a bill.
- **Outdated Terminology** - Change or remove questionable, imprecise or outmoded words or terminology.Please check the names of state agencies as they occasionally change.
- **Novelty** - It isn't already covered by another section of the State Code.
- **Revision** - After completing the draft of a bill, revise it carefully and critically. Review each use of a defined term to make sure it is used consistently in its defined sense.

### A legislation draft _should_ be

- **Approachable** - It can be understood by someone who's not an expert.

## Gathering Feedback

As a community, we strive to provide kind and constructive feedback on your PR.

If a pull request doesn't meet the "must be" guidelines, we may ask that the draft be updated before it's merged. If a pull request doesn't meet the "should be" guidelines, we may merge the pull request and add an issue for future improvements to the practice.

Again, thank you so much for your interest and support! We look forward to enhancing the Open Practice Library.

## Style

These style guidelines apply to the Markdown files in the `/content` directory.

- Use hyphens, not underscores, to separate parts of a filename. (The filenames are turned into URLs when the site is built.)
- Where possible, avoid putting HTML in Markdown. Exception: the `<sup>` tag and anchors, which we're using for footnotes.
- When linking to external sites, place the link into an "external references" section, and use a footnote anchor to point to the link.
- Don't put the document's title into a heading (`# My Title`). Instead, just include the title in the document's front matter (`title: my title`).

## If Using Github to Contribute

New Content is created in draft status by default. To publish, set `draft: false` in the front matter or run `hugo undraft`. For example, typing `hugo undraft page/my_new_page.md` will publish the corresponding page.
