import { openRepository } from 'es-git';

const repo = await openRepository('.');

const revwalk = repo.revwalk().pushHead();

// Iterate over Revwalk and read commit hashes.
// The code below produces results identical to the `git log` command shown above.
for (const sha of revwalk) {
  const commit = repo.getCommit(sha);
  const summary = commit.summary();
  const id = commit.id();
  const author = commit.author();
  console.log(`${summary} ${id} ${author.name} <${author.email}>`);
}
