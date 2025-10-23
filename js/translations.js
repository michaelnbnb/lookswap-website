// Translation system for LookSwap.ai
// Supports 6 languages with separate files for better maintenance

class TranslationManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
        this.supportedLanguages = ['en', 'zh-cn', 'zh-tw', 'es', 'ja', 'hi'];
        this.init();
    }

    async init() {
        // Load all translation files
        await this.loadTranslations();
        
        // Set initial language from localStorage or browser preference
        const savedLanguage = localStorage.getItem('lookswap-language');
        const browserLanguage = this.getBrowserLanguage();
        
        this.currentLanguage = savedLanguage || browserLanguage || 'en';
        this.applyTranslations();
        this.updateLanguageSelector();
    }

    async loadTranslations() {
        const loadPromises = this.supportedLanguages.map(async (lang) => {
            try {
                const response = await fetch(`js/translations/${lang}.js`);
                const text = await response.text();
                // Extract the translation object from the file
                const match = text.match(/const\s+translations\s*=\s*({[\s\S]*});/);
                if (match) {
                    this.translations[lang] = eval('(' + match[1] + ')');
                }
            } catch (error) {
                console.warn(`Failed to load translation for ${lang}:`, error);
                // Fallback to English if translation file fails to load
                if (lang === 'en') {
                    this.translations[lang] = this.getEnglishTranslations();
                }
            }
        });

        await Promise.all(loadPromises);
    }

    getBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        
        // Map browser language codes to our supported languages
        const languageMap = {
            'en': 'en',
            'zh-CN': 'zh-cn',
            'zh-TW': 'zh-tw',
            'zh-HK': 'zh-tw',
            'es': 'es',
            'es-MX': 'es',
            'ja': 'ja',
            'hi': 'hi'
        };

        return languageMap[lang] || languageMap[lang.split('-')[0]] || 'en';
    }

    setLanguage(language) {
        if (this.supportedLanguages.includes(language)) {
            this.currentLanguage = language;
            localStorage.setItem('lookswap-language', language);
            this.applyTranslations();
            this.updateLanguageSelector();
        }
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-key]');
        const currentTranslations = this.translations[this.currentLanguage] || this.translations['en'];

        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = this.getNestedValue(currentTranslations, key);
            
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update document language attribute
        document.documentElement.lang = this.currentLanguage;
    }

    updateLanguageSelector() {
        const selector = document.getElementById('languageSelect');
        if (selector) {
            selector.value = this.currentLanguage;
        }
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : null;
        }, obj);
    }

    // Fallback English translations
    getEnglishTranslations() {
        return {
            nav: {
                features: "Features",
                howItWorks: "How It Works",
                download: "Download"
            },
            hero: {
                title: "Your Digital Dream Closet Awaits!",
                subtitle: "Virtually try on clothes and experiment with the latest fashion trends using AI technology",
                downloadBtn: "Download Now",
                learnMore: "Learn More"
            },
            features: {
                title: "AI Fashion Stylist Tools",
                subtitle: "Level up your look with our AI fashion stylist tools. Swipe, style, and slay.",
                virtualTryOn: {
                    title: "Virtual Try-On",
                    desc: "Try on different outfits instantly with AI-powered virtual fitting"
                },
                colorChange: {
                    title: "Color Changer",
                    desc: "Change clothing colors and experiment with different styles"
                },
                aiStylist: {
                    title: "AI Stylist",
                    desc: "Get personalized fashion recommendations from our AI stylist"
                },
                photoEditor: {
                    title: "Photo Editor",
                    desc: "Edit and enhance your photos with professional tools"
                }
            },
            howItWorks: {
                title: "How It Works",
                step1: {
                    title: "Upload Photo",
                    desc: "Take or upload a photo of yourself"
                },
                step2: {
                    title: "Choose Style",
                    desc: "Select from thousands of clothing options"
                },
                step3: {
                    title: "AI Magic",
                    desc: "Our AI instantly applies the new look"
                },
                step4: {
                    title: "Share & Save",
                    desc: "Save or share your new stylish look"
                }
            },
            download: {
                title: "Download LookSwap.ai",
                subtitle: "Available on iOS App Store"
            },
            footer: {
                description: "Your AI fashion stylist companion",
                product: "Product",
                support: "Support",
                supportPage: "Support",
                privacy: "Privacy Policy",
                terms: "Terms of Service",
                rights: "All rights reserved."
            }
        };
    }
}

// Initialize translation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.translationManager = new TranslationManager();
});