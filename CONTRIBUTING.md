# How to Contribute

We welcome all contribution from the community, but we have a few guidelines to make the process as smooth and easy as possible for everyone.

### First

1. Find an [issue](issues) that tickles your fancy, or create one.

### Getting Jeet set up locally

1. Fork jeet (use the button in the top right of the repo's page).
1. `git clone https://github.com/YOUR-USERNAME/jeet` to get a local copy of your fork.
1. Run `git remote add upstream https://github.com/mojotech/jeet`. This will add another remote, named upstream, that points to the official Jeet repository. This will help with keeping your forks up to date with Jeet's master branch.

### Making changes

1. `git checkout -b YourInitials/feature-branch-name` (e.g. `cs/improve-this-feature`, `ma/add-this-feature`). Make all your changes for the specific feature inside this branch.
1. Separate edits into [clean](https://github.com/erlang/otp/wiki/Writing-good-commit-messages), non-breaking, commits.

### Tests

1. Making big changes or adding a new feature entirely? Make sure you add tests for new mixins/functions. Simply follow the structure found in `/tests`.
1. Run the tests with `npm run test` and make sure they all pass.
1. Fork the [Scss](http://codepen.io/corysimmons/pen/EkcDm) and [Stylus](http://codepen.io/corysimmons/pen/ArLdm) CodePens and make sure the changes behave as expected.

### Opening a pull request

1. Push your changes to your fork by running `git push origin your-branch-name`.
1. Open a [pull request](https://help.github.com/articles/creating-a-pull-request), give it a clear title and explain what your changes do. Provide a link to your CodePen so we can check out the changes.
1. Be prepared to update your PR based on feedback. If you make updates, run `git push origin your-branch-name -f` on your branch branch to update the PR on Github.
1. Bask in the warm glow of being an amazing person.

### Keeping unmerged forks up to date with master

If your fork is taking a while to get merged, you might end up getting behind Jeet's master branch as other changes get added. Stay up to date in the following way:

1. `git fetch upstream master` This will give you all the latest updates from Jeet's master branch.
1. Run `git rebase upstream/master` while inside your feature branch. This will add all the new commits **before** yours, so it's as if you made the changes to the latest codebase.

## Notes
- New to Git? Read this great/free [book](http://git-scm.com/documentation).
