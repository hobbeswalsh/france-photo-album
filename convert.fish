for f in ~/Desktop/France-Trip/*.jpeg
      set -l n (string match -r '(\d+)\.jpeg$' -- $f)[2]
      set -l out public/photos/(printf 'france-trip-%02d.webp' $n)
      magick $f -resize '2000x2000>' -strip -quality 80 -define webp:method=6 $out
  end
