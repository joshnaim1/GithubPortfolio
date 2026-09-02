Drop piano recordings here as .mp3 or .m4a, then reference them from
`src/app/components/Piano.tsx` as `/audio/<filename>`.

Keep them small. A 2 minute mp3 at 128kbps is about 2MB, which is fine; a
20MB wav is not. Convert with:

  ffmpeg -i input.wav -b:a 128k output.mp3
