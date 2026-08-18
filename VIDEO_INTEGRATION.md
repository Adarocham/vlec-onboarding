# Video 360 Integration Guide

## Current Status

**Videos Already Integrated:**
- ✅ Welcome (Alta360/vide 360 bienvenida.mp4)
- ✅ Calibration (Baja/Calibración/T3 calibración.mp4)
- ✅ Interview Demo (Baja/Entrevista/T6 Demo 1 a 1.mp4)
- ✅ Interview Images (Alta360/Entrevista/*.jpg)

**Videos Pending:**
- ⏳ Litigant/Juicio (Alta360/Juicio/ - 11 high-res videos in download)

---

## Integration Steps for Juicio Videos

When the Juicio videos arrive:

### 1. Organize Files
```
/Users/antoniodarocha/Downloads/Videos360VLEC/Alta360/Juicio/
├── juicio_01.mp4
├── juicio_02.mp4
├── ... (up to 11 videos)
```

### 2. Update Briefing.tsx

In `src/screens/Briefing.tsx`, update video path for Litigant:

```tsx
// Line ~15, update the Panorama360 component
<Panorama360 
  videoSrc="/Users/antoniodarocha/Downloads/Videos360VLEC/Alta360/Juicio/juicio_01.mp4"
/>
```

### 3. Update Session Screen

Create Session.tsx to render the selected Juicio video during practice.

### 4. Test & Commit

```bash
npm run dev
# Test in browser
git add .
git commit -m "integrate: add high-res Juicio 360 videos"
git push
```

### 5. Deploy

```bash
vercel --prod
```

---

## Video Optimization Tips

### Compress Without Quality Loss
```bash
ffmpeg -i input.mp4 -c:v libx265 -preset medium -crf 23 output.mp4
```

### Convert to WebP (lighter)
```bash
ffmpeg -i input.mp4 -vf "scale=2048:1024" output.webp
```

### Check Video Properties
```bash
ffprobe -v error -show_entries format=duration,bit_rate -of default=noprint_wrappers=0:nokey=1:novalue=1 input.mp4
```

---

## Performance Notes

- Target: <10MB per video for web
- Format: MP4 H.265 or WebP
- Resolution: 2048×1024 or 4096×2048 (panoramic)
- Bitrate: 2-4 Mbps

---

## Camera Interactivity

All 360 videos now support:
- **Mouse**: Click + drag to rotate view
- **Touch**: Touch + swipe to rotate view
- **VR**: Compatible with VR headsets (A-Frame native)

Controlled by `look-controls` in `Panorama360.tsx`
