# Vowel Counter

This console application allows you to count vowels in the given string.

**Tech Stack**:
- Node.js
- TypeScript
- Commander

## How to run it?

Firstly, clone this repo:

```bash
git clone https://github.com/fokaaas/docker-practice.git
```

Move to the desired directory:

```bash
cd ts
```

Then install **pnpm** globally:

```bash
npm install -g pnpm
```

Install dependencies in project directory:

```bash
pnpm install
```

Run application:

```bash
pnpm count <string>
```

Explore help section:

```bash
pnpm count --help
```

```bash
Usage: Vowel Counter [options] <string>

Return the number of vowels in the given string

Arguments:
  string         input string

Options:
  -v, --version  output the current version
  -h, --help     display help for command
```

## Example

Let's count the number of vowels in the phrase "Happiness is not by chance, but by choice"

```bash
pnpm count "Happiness is not by chance, but by choice"
```

Result:

```bash
13
```
