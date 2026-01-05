# Baseline Workflows

## Batch Processing References

Use this workflow when you have multiple screenshots to add to the reference library.

### Setup

1. Create a staging folder: `staging/{sectionType}/`
2. Drop all your screenshots into that folder (any filename is fine)

### Process with Claude Code

Tell Claude: "Process the images in staging/{sectionType}"

Claude will:
1. Read each image sequentially
2. Analyze and propose taxonomy tags
3. Show you the proposed JSON entry
4. Wait for your approval (or edits)
5. On approval:
   - Move the file to `references/{sectionType}/`
   - Rename to `{sectionType}-ref-{number}.{ext}`
   - Add entry to `references/{sectionType}/{sectionType}.json`
   - Create the JSON file if it doesn't exist
6. Move to next image

### Commands

- `yes` / `y` / `good` — Approve and file
- Provide corrections — Claude will update tags and re-show
- `skip` — Skip this image
- `stop` — End batch processing

### Example

```
You: Process the images in staging/cta

Claude: [Shows image 1]
        Proposed tags: clean, minimal, centered, light, sans...
        Good?

You: yes

Claude: Filed. [Shows image 2]
        Proposed tags: ...
```

### Tips

- If you know the source URL, mention it when approving
- Correct Claude on typography (serif vs sans) — it learns from feedback
- You can process any section type: heroes, features, cta, navs, etc.
