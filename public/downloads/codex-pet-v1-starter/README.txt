CODEX PET V1 STARTER

This folder targets the publicly documented V1 package format.
V1 remains supported by the Codex Pets installer.

FILES

pet.json
  Edit id, displayName, description, and kind.
  Keep spritesheetPath set to spritesheet.webp.
  Valid kind values are object, animal, person, and creature.
  The id must use lowercase letters, numbers, and hyphens.

spritesheet.webp
  Replace the transparent starter sheet with your artwork.
  Keep the exact size: 1536 x 1872 pixels.
  The grid is 8 columns x 9 rows.
  Every cell is 192 x 208 pixels.

ROW ORDER

0  idle           6 frames
1  running-right  8 frames
2  running-left   8 frames
3  waving         4 frames
4  jumping        5 frames
5  failed         8 frames
6  waiting        6 frames
7  running        6 frames
8  review         6 frames

Keep unused cells transparent. Export the finished sheet as lossless WebP.
Do not rename pet.json or spritesheet.webp.

PUBLISH AND INSTALL

1. Open https://codex-pets.net/#/upload and sign in.
2. Choose pet.json and spritesheet.webp.
3. Fix every validation error before publishing.
4. After the pet receives a slug, install it with:

   npx codex-pets add your-pet-slug

Only upload artwork you created or have permission to distribute.
