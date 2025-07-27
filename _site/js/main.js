// JavaScript Document
// Create moon stars
function createMoonStars() {
    const moonContainer = document.querySelector('.moon-container');
    if (!moonContainer) return;
    
    const starsCount = 20;
    
    for(let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('moon-star');
        
        // Position randomly in a circle around the moon
        const radius = 70 * Math.random() + 40;
        const angle = Math.random() * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        star.style.left = `${x + 60}px`;
        star.style.top = `${y + 60}px`;
        
        // Random size
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random opacity
        star.style.opacity = Math.random() * 0.7 + 0.3;
        
        moonContainer.appendChild(star);
    }
}

// Navigation Background Change on Scroll
function handleNavScroll() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Mobile Menu Toggle - REMOVED: Now handled in default.html layout

// Hero Background Image Rotation
function setupHeroBackgrounds() {
    const heroBgs = document.querySelectorAll('#hero .hero-bg');
    if (heroBgs.length === 0) return;
    
    let currentBg = 0;
    heroBgs[0].classList.add('active');

    setInterval(function() {
        heroBgs[currentBg].classList.remove('active');
        currentBg = (currentBg + 1) % heroBgs.length;
        heroBgs[currentBg].classList.add('active');
    }, 10000);
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = '';
                }
            }
        });
    });
}

// Loading Screen Animation
function handleLoadingScreen() {
    setTimeout(function() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.visibility = 'hidden';
            }, 800);
        }
    }, 2000);
}

// Initialize everything when DOM is loaded
// ページのロード状態を管理
document.addEventListener('DOMContentLoaded', function() {
    // ローディング表示を取得
    const loader = document.getElementById('page-loader');
    
    try {
        // 既存の初期化処理
        createMoonStars();
        setupHeroBackgrounds();
        setupSmoothScrolling();
        
        // すべての初期化が完了したらローダーを非表示にする
        if (loader) {
            loader.style.display = 'none';
            // または classList を使用する場合
            // loader.classList.add('loaded');
        }
    } catch (error) {
        console.error('Initialization error:', error);
        // エラーが発生してもローダーは非表示にする
        if (loader) {
            loader.style.display = 'none';
        }
    }
});

// 画像などのリソースも含めて完全に読み込まれたときの処理（オプション）
window.addEventListener('load', function() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// Handle scroll events
window.addEventListener('scroll', function() {
    handleNavScroll();
    updateScrollIndicator();
    updateSectionIndicators();
});

// Handle window load event
window.addEventListener('load', function() {
    handleLoadingScreen();
    // checkFade(); // Initial check for fade elements - function not defined
});

// Scroll Indicator Visibility
function updateScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    }
}

// Section Navigation Indicators
function updateSectionIndicators() {
    const sectionIndicators = document.querySelectorAll('.section-indicator');
    const sections = document.querySelectorAll('section');
    
    if (sectionIndicators.length === 0 || sections.length === 0) return;
    
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight / 2;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            sectionIndicators.forEach(indicator => {
                indicator.classList.remove('active');
            });
            if (sectionIndicators[index]) {
                sectionIndicators[index].classList.add('active');
            }
        }
    });
}

// Click on indicator to navigate to section
document.querySelectorAll('.section-indicator').forEach(indicator => {
    indicator.addEventListener('click', () => {
        const targetSection = indicator.getAttribute('data-section');
        const targetElement = document.getElementById(targetSection);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Add real-time validation for all input fields
        const formFields = contactForm.querySelectorAll('input, textarea');
        
        formFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
        
        // Enhanced form submission handling
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            
            // Validate all fields
            let isValid = true;
            formFields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                showMessage('入力内容に不備があります。赤枠の項目をご確認ください。', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span style="display: inline-block; animation: spin 1s linear infinite;">⟳</span> 送信中...';
            submitBtn.disabled = true;
            
            // PHP API を使用した実際のメール送信
            sendEmailViaPHP(formData, submitBtn, originalText, formFields);
        });
    }
});

// PHP API を使用したメール送信機能
function sendEmailViaPHP(formData, submitBtn, originalText, formFields) {
    // API エンドポイント（一時的にシンプル版を使用）
    const apiEndpoint = 'send_mail_simple.php';
    
    // fetch APIでPOST送信
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        
        // まずテキストとして取得
        return response.text().then(text => {
            console.log('Raw response:', text);
            
            // JSONとしてパースを試行
            try {
                const data = JSON.parse(text);
                return { status: response.status, data: data, raw: text };
            } catch (e) {
                console.error('JSON parse error:', e);
                return { 
                    status: response.status, 
                    data: { success: false, message: 'Invalid JSON response' }, 
                    raw: text,
                    parseError: e.message
                };
            }
        });
    })
    .then(result => {
        console.log('Parsed result:', result);
        
        if (result.status === 200 && result.data.success) {
            // 成功処理
            console.log('メール送信成功:', result.data);
            
            // 成功メッセージ表示
            showMessage(result.data.message, 'success');
            
            // フォームリセット
            document.querySelector('.contact-form').reset();
            formFields.forEach(field => clearFieldError(field));
            
        } else {
            // サーバーエラー処理
            let errorMessage = result.data.message || 'メール送信に失敗しました';
            
            // デバッグ情報を追加
            if (result.raw && result.raw.includes('<')) {
                errorMessage += '<br><br><strong>デバッグ情報:</strong><br>';
                errorMessage += 'サーバーからHTMLレスポンスが返されました。<br>';
                errorMessage += '生レスポンス（最初の200文字）:<br>';
                errorMessage += '<pre style="font-size: 10px; max-height: 100px; overflow: auto;">';
                errorMessage += result.raw.substring(0, 200).replace(/</g, '&lt;').replace(/>/g, '&gt;');
                errorMessage += '</pre>';
            }
            
            showMessage(errorMessage, 'error');
        }
        
        // ボタンリセット
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    })
    .catch(error => {
        console.error('メール送信エラー:', error);
        
        // エラーメッセージ表示
        let errorMessage = 'メール送信に失敗しました。';
        
        if (error.message) {
            if (error.message.includes('fetch')) {
                errorMessage += ' サーバーとの通信に問題があります。';
            } else {
                errorMessage += ' ' + error.message;
            }
        }
        
        errorMessage += ' しばらく時間をおいて再度お試しください。';
        
        showMessage(errorMessage, 'error');
        
        // ボタンリセット
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// バックアップ用：設定が完了していない場合のフォールバック
function sendEmailFallback(formData, submitBtn, originalText, formFields) {
    setTimeout(() => {
        // 設定不備の警告と手動連絡先の案内
        showMessage(`メール送信機能の設定が完了していません。<br>
                    お急ぎの場合は直接メール（info@marslink.co.jp）またはお電話でお問い合わせください。<br>
                    <br>
                    <strong>お問い合わせ内容（コピーしてご利用ください）:</strong><br>
                    お名前: ${formData.name}<br>
                    メール: ${formData.email}<br>
                    件名: ${formData.subject}<br>
                    内容: ${formData.message}`, 'error');
        
        // フォームデータをコンソールに出力（開発用）
        console.log('送信予定データ:', formData);
        
        // ボタンリセット
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type || field.tagName.toLowerCase();
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous error
    clearFieldError(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'この項目は必須です。';
        isValid = false;
    } else if (value) {
        // Specific field validations
        switch(field.id) {
            case 'name':
                if (value.length < 2) {
                    errorMessage = 'お名前は2文字以上で入力してください。';
                    isValid = false;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errorMessage = '正しいメールアドレスを入力してください。';
                    isValid = false;
                }
                break;
            case 'subject':
                if (value.length < 5) {
                    errorMessage = '件名は5文字以上で入力してください。';
                    isValid = false;
                }
                break;
            case 'message':
                if (value.length < 10) {
                    errorMessage = 'メッセージは10文字以上で入力してください。';
                    isValid = false;
                }
                break;
        }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.style.borderColor = '#ff6b6b';
    field.style.boxShadow = '0 0 10px rgba(255, 107, 107, 0.3)';
    
    // Create or update error message
    let errorDiv = field.parentNode.querySelector('.field-error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.cssText = `
            color: #ff6b6b;
            font-size: 12px;
            margin-top: 5px;
            animation: fadeInUp 0.3s ease;
        `;
        field.parentNode.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function clearFieldError(field) {
    field.style.borderColor = '';
    field.style.boxShadow = '';
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function showMessage(text, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    
    // HTMLかテキストかを判定して適切に設定
    if (text.includes('<br>') || text.includes('<strong>')) {
        messageDiv.innerHTML = text;
    } else {
        messageDiv.textContent = text;
    }
    
    // Add styles
    messageDiv.style.cssText = `
        padding: 15px 20px;
        margin: 20px 0;
        border-radius: 8px;
        font-weight: 500;
        text-align: left;
        animation: fadeInUp 0.5s ease;
        line-height: 1.5;
        max-height: 400px;
        overflow-y: auto;
        ${type === 'success' ? 
            'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
            'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
        }
    `;
    
    // Insert message
    const contactContainer = document.querySelector('.contact-container');
    contactContainer.insertBefore(messageDiv, contactContainer.firstChild);
    
    // Remove message after 10 seconds (longer for error messages with contact info)
    const timeout = type === 'error' ? 15000 : 5000;
    setTimeout(() => {
        if (messageDiv) {
            messageDiv.style.animation = 'fadeOutDown 0.5s ease';
            setTimeout(() => messageDiv.remove(), 500);
        }
    }, timeout);
}