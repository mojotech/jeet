# How to Contribute

We welcome all contribution from the community, but we have a few guidelines to make the process as smooth and easy as possible for everyone.

### First

1. Find an [issue](issues) that tickles your fancy, or create one.

### Getting Jeet set up locally

1. [Fork Jeet](https://github.com/mojotech/jeet/fork).
1. `git clone` YOUR fork of Jeet to get a local copy.
1. Run `git remote add upstream https://github.com/mojotech/jeet`. This will add another remote, named upstream, that points to the official Jeet repository. This will help with keeping your forks up to date with Jeet's master branch.

### Making changes

1. Create a new branch using `git checkout -b my-new-branch`.
1. Do some work, commit some changes. Separate edits into [clean](https://github.com/erlang/otp/wiki/Writing-good-commit-messages), non-breaking, commits, if possible. At the very least, *try* to separate out your work into logical chunks. Removing trailing whitespace throughout the project? Good commit. Removing whitespace **and** changing indentation? Bad commit. Typically if you can say "and" it can be broken out into separate commits.
1. Try not to submit a HUGE PR. Small PRs are best for everyone. Good for maintainers because they don't have to dig through 50-million lines of code to ensure everything is proper. Good for you so you don't do a ton of work just to get it rejected. :(

### Tests

1. Making big changes or adding a new feature entirely? Make sure you add tests for new mixins/functions. If you're not good at writing tests, a maintainer can work with you.
1. Run the tests with `npm test` and make sure they all pass.

### Opening a pull request

1. Push your changes to your fork by running `git push origin your-branch-name`.
1. Open a [pull request](https://help.github.com/articles/creating-a-pull-request), give it a clear title and explain what your changes do.
1. Be prepared to update your PR based on feedback. If you make updates, run `git push origin your-branch-name -f` on your branch branch to update the same PR you received feedback on.
1. Bask in the warm glow of being an amazing person.

### Keeping unmerged forks up to date with master

If your fork is taking a while to get merged, you might end up getting behind Jeet's master branch as other changes get added. Stay up to date in the following way:

1. `git fetch upstream master` This will give you all the latest updates from Jeet's master branch.
1. Run `git rebase upstream/master` while inside your feature branch. This will add all the new commits **before** yours, so it's as if you made the changes to the latest codebase.
1. There might be merge conflicts. In which case, open them in an editor then pick and choose what changes to keep.

## Notes

- New to Git? Read this great/free [book](http://git-scm.com/documentation).
