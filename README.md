# LookSwap.ai - AI Fashion Stylist Website

A modern, responsive website for LookSwap.ai - an AI-powered fashion styling iOS app. The website features a clean design inspired by modern fashion apps and supports 6 languages with optimized translation management.

## 🌟 Features

- **Modern Design**: Clean, professional design inspired by leading fashion apps
- **Multi-language Support**: 6 languages (English, 简体中文, 繁體中文, Español, 日本語, हिन्दी)
- **Optimized Translation System**: Separate translation files for better maintenance
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging user experience with scroll-based animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🗂️ Project Structure

```
LookSwap.ai-v3/
├── index.html              # Main homepage
├── support.html            # Support/FAQ page
├── privacy.html            # Privacy policy page
├── terms.html              # Terms of service page
├── styles.css              # Main stylesheet
├── js/
│   ├── main.js            # Main JavaScript functionality
│   ├── translations.js    # Translation management system
│   └── translations/      # Language-specific translation files
│       ├── en.js          # English translations
│       ├── zh-cn.js       # Simplified Chinese translations
│       ├── zh-tw.js       # Traditional Chinese translations
│       ├── es.js          # Spanish (Mexico) translations
│       ├── ja.js          # Japanese translations
│       └── hi.js          # Hindi translations
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A web server (for local development) or hosting service

### Local Development

1. **Clone or download** the project files to your local machine

2. **Serve the files** using a local web server:
   
   **Option 1: Using Python (if installed)**
   ```bash
   # Navigate to project directory
   cd LookSwap.ai-v3
   
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option 2: Using Node.js (if installed)**
   ```bash
   # Install a simple server
   npm install -g http-server
   
   # Navigate to project directory and serve
   cd LookSwap.ai-v3
   http-server
   ```
   
   **Option 3: Using VS Code Live Server extension**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open your browser** and navigate to `http://localhost:8000` (or the port shown in your terminal)

## 🌐 Deployment

### GitHub Pages

1. **Create a GitHub repository** and upload all files
2. **Go to repository Settings** → Pages
3. **Select source**: Deploy from a branch
4. **Choose branch**: main (or master)
5. **Select folder**: / (root)
6. **Save** and wait for deployment

Your site will be available at: `https://yourusername.github.io/repository-name`

### Other Hosting Options

- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Traditional Web Hosting**: Upload files via FTP

## 🔧 Customization

### Adding New Languages

1. **Create a new translation file** in `js/translations/`:
   ```javascript
   // js/translations/your-language.js
   const translations = {
       nav: {
           features: "Your Translation",
           // ... other translations
       }
   };
   ```

2. **Add the language to the selector** in HTML files:
   ```html
   <option value="your-lang-code">Your Language Name</option>
   ```

3. **Update the translation manager** in `js/translations.js`:
   ```javascript
   this.supportedLanguages = ['en', 'zh-cn', 'zh-tw', 'es', 'ja', 'hi', 'your-lang-code'];
   ```

### Modifying Styles

- **Colors**: Update CSS custom properties in `styles.css`
- **Fonts**: Change the Google Fonts import and font-family declarations
- **Layout**: Modify the CSS Grid and Flexbox properties
- **Animations**: Adjust transition and transform properties

### Adding Content

- **New Sections**: Add HTML sections and corresponding CSS
- **Images**: Add images to an `images/` folder and update paths
- **Features**: Modify the features grid in `index.html`

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-first CSS approach
- Touch-friendly navigation
- Optimized images and fonts
- Fast loading times

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## 🛠️ Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for LookSwap.ai. All rights reserved.

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: support@lookswap.ai
- Website: [LookSwap.ai](https://lookswap.ai)

---

**Built with ❤️ for LookSwap.ai**