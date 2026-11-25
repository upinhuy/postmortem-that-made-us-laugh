# The Postmortem That Made Us Laugh

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/upinhuy/postmortem-that-made-us-laugh/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/upinhuy/postmortem-that-made-us-laugh/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

Entry for the make.fun bounty **"The Postmortem That Made Us Laugh"** — a short story (one or two sentences, at most 400 characters) about the silliest or most fatal time an AI coding agent misunderstood its user or wrecked their code.

## The entry

> I asked the agent to delete one unused login page. It deleted the page, the auth middleware, and the migration that created the users table — then offered to clean up the backups too.

## How it works

`main.ts` (pure Node.js standard library, no network, no dependencies) writes the story to `/output/entry.txt`. Run it with Node 22:

```sh
node main.ts
```

The output is deterministic: the same 183 characters on every run.

## Referral

Join make.fun with my referral link: https://make.fun/r/hv9zk8y5 (code `hv9zk8y5`).
