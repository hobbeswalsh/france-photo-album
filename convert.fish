#!/usr/bin/env fish

# magick threads a single image internally; pin it to 1 so xargs owns the parallelism.
set -x MAGICK_THREAD_LIMIT 1

for f in ~/Desktop/france-export/*.jpeg
    # "France trip 2026 - 42 of 387.jpeg" -> 42. The trailing number is the total, not the index.
    set -l n (string match -r -- '- (\d+) of \d+\.jpeg$' $f)[2]
    printf '%s\0%s\0' $f src/photos/(printf 'france-trip-%02d.webp' $n)
end | xargs -0 -n 2 -P (sysctl -n hw.ncpu) \
    fish -c 'magick $argv[1] -resize "2000x2000>" -strip -quality 80 -define webp:method=6 $argv[2]'

# Videos get their own `france-vid-` prefix: Photos numbers a .mov export from 1
# again, so `france-trip-01.mp4` would collide with an unrelated still.
for f in ~/Desktop/france-expor/*.mov
    set -l n (string match -r -- '- (\d+) of \d+\.mov$' $f)[2]
    ffmpeg -nostdin -i $f -vf "scale='min(1280,iw)':-2" \
        -c:v libx264 -crf 24 -preset slow -pix_fmt yuv420p \
        -c:a aac -b:a 96k -movflags +faststart \
        src/photos/(printf 'france-vid-%02d.mp4' $n)
end
