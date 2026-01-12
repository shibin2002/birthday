# 🎂 Happy Birthday Asna - Romantic Birthday Website ❤️

A beautiful, romantic, and emotional birthday website created with love for Asna's special day (January 15th).

## ✨ Features

- **Hero Section**: Fullscreen romantic background with fade-in animations
- **Our Story Timeline**: Beautiful journey of your relationship
- **Memory Gallery**: Polaroid-style photo gallery with your beautiful photos
- **Video Memories**: Interactive video gallery with hover previews
- **Love Letter**: Heartfelt message with typewriter animation
- **Reasons Why I Love You**: Interactive cards with hover animations
- **Surprise Section**: Interactive surprise button with confetti
- **Final Message**: Emotional closing with floating elements
- **Floating Hearts**: Continuous romantic atmosphere

## 🎨 Design Elements

- Soft romantic colors (blush pink, cream, light gold, pastel red)
- Beautiful cursive and elegant fonts (Dancing Script, Great Vibes, Playfair Display)
- Smooth animations and transitions using Framer Motion
- Floating hearts, sparkles, and magical elements
- Mobile and desktop responsive design
- Premium, emotional, and memorable experience

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## 📸 Customization

## 📸 Image Integration

The website now automatically uses your beautiful photos from:
- **`/public/look/`** - Beautiful portrait and elegant photos of Asna
- **`/public/funny/`** - Fun, playful, and joyful moments together
- **`/public/video/`** - Moving memories in video format

### Current Photo Setup
- **Memory Gallery**: Displays 16 photos (8 from each folder) with romantic captions
- **Video Memories**: Interactive video gallery with hover previews and modal playback
- **Automatic Fallbacks**: If any image fails to load, elegant placeholders appear
- **Categories**: Photos are tagged as "Beautiful" or "Fun" with color-coded badges

### Photo Features
- **Polaroid Style**: Each photo has a realistic polaroid frame effect
- **Hover Animations**: Photos rotate and scale on hover for interactive feel
- **Romantic Captions**: Each photo has a loving title and description
- **Responsive Grid**: Adapts beautifully to all screen sizes
- **Loading Protection**: Graceful fallbacks if images don't load

### Personalizing Content
- **Love Letter**: Edit the message in `src/components/LoveLetter.js`
- **Our Story**: Update milestones in `src/components/OurStorySection.js`
- **Reasons**: Modify the reasons array in `src/components/ReasonsSection.js`
- **Surprise Message**: Change the surprise content in `src/components/SurpriseSection.js`

## 💝 Special Notes

This website was created with love and attention to detail to make Asna's birthday truly special and memorable. Every animation, color, and word was chosen to express deep love and appreciation.

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Intersection Observer** - Scroll-triggered animations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🎁 Deployment

You can deploy this website to various platforms:

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Your romantic website is live!

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

---

**Made with endless love for Asna's special day** 💖

*"You make my world more beautiful just by being in it"* ✨