document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    
    // 绉诲姩绔彍鍗曞垏鎹�
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('open');
        mobileNavMenu.classList.toggle('open');
        mobileNavOverlay.style.display = mobileNavMenu.classList.contains('open') ? 'block' : 'none';
    });
    
    // 鐐瑰嚮閬僵鍏抽棴鑿滃崟
    mobileNavOverlay.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('open');
        mobileNavMenu.classList.remove('open');
        this.style.display = 'none';
    });
    
    // 瀵艰埅鏍忔粴鍔ㄦ晥鏋�
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 瀵艰埅鑿滃崟骞虫粦婊氬姩
    document.querySelectorAll('.nav-menu a, .mobile-nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // 鍏抽棴绉诲姩鑿滃崟
                mobileMenuBtn.classList.remove('open');
                mobileNavMenu.classList.remove('open');
                mobileNavOverlay.style.display = 'none';
                
                // 骞虫粦婊氬姩
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 绉诲姩绔鑸彍鍗曠偣鍑诲悗闅愯棌鑿滃崟
    document.querySelectorAll('.mobile-nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(() => {
                mobileMenuBtn.classList.remove('open');
                mobileNavMenu.classList.remove('open');
                mobileNavOverlay.style.display = 'none';
            }, 300);
        });
    });
});