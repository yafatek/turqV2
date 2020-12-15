# Developing

## Contributing

Welcome! Thank you for taking the time to contribute. This project thrives with an active and involved community, and we really appreciate your support.

## Code of Conduct

This project is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). All participants are expected to uphold this code. Violations of the code can be reported by contacting the project team at [tim@turq.io](mailto:tim@turq.io).

## How we work together

We're using the "optimistic merging" strategy to make contributing simple and enjoyable.

1. To propose a change, log an issue.
2. Seek consensus on the value of that change.
  - Give the community a day or two to provide feedback on your issue.
  - If the feedback is mostly positive, move forward.
  - If you don't get any feedback after a day or two, move forward.
3. Create a pull request to make the change described in the issue.
4. The maintainer review the PR to determine whether it is a "correct patch". That means the PR:
  - Solves one "identified and agreed problem"
  - Clearly explains the problem and the proposed solution
  - Builds without errors, warnings, or test failures
  - Does not break our Code of Conduct  
5. If the PR is a "correct patch", the maintainer merges the PR. If not, the maintainer provides feedback.

If the person reviewing the PR has feedback on a change that is a "correct patch", he or she will merge the PR and include that feedback in a new issue.

To learn more, see [Why Optimistic Merging Works Better](http://hintjens.com/blog:106) and [Collective Code Construction Contract (C4)](https://rfc.zeromq.org/spec:42/C4/) from Pieter Hintjens, who coined the term "optimistic merging".

This workflow is still being refined and improved. If you have feedback, feel free to [get in touch via email](mailto:tim@turq.io).

## How to contribute

Fork the repo, add or change files, and create a pull request. You can make these changes via the GitHub web interface, the command line, or a git client of your choice.

Once you create a pull request, your changes will be built in a deploy preview. That way, you can see your changes without having to run a local development environment. To display the link to this preview, click "show all checks" at the bottom of a pull request.

## Running the site locally

Turq.io was built using React and ...

## Quick start

The first steps are ...

## Full build

These steps build the whole site ...

## Gathering Feedback

As a community, we strive to provide kind and constructive feedback on your PR.

If a pull request doesn't meet the "must be" guidelines, we may ask that the draft be updated before it's merged. If a pull request doesn't meet the "should be" guidelines, we may merge the pull request and add an issue for future improvements to the practice.

Again, thank you so much for your interest and support! We look forward to enhancing Turq.

## Deploying

When changes are merged to master, the `build.sh` script will run, and the site will be deployed to https://turq.io. The [build log](https://app.netlify.com/sites/openpracticelibrary/deploys?filter=master) shows the status of each build.
