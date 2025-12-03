// main.js – Goreem Theme

document.addEventListener('DOMContentLoaded', function () {
  // ==========================
  // 1) مينو الموبايل
  // ==========================
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
      if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  // Helper لإنشاء سوايبر بدون ما يعمل خطأ لو مش موجود
  const createSwiper = (selector, options) => {
    if (typeof Swiper === 'undefined') return null;
    const el = document.querySelector(selector);
    if (!el) return null;
    return new Swiper(el, options);
  };

  // ==========================
  // 2) سلايدر الهيرو الرئيسي
  // ==========================
  createSwiper('.hero-swiper', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    spaceBetween: 24,
    slidesPerView: 1,
    navigation: {
      nextEl: '.hero-next',
      prevEl: '.hero-prev',
    },
    pagination: {
      el: '.hero-pagination',
      clickable: true,
    },
  });

  // ==========================
  // 3) شريط الإعلانات المتحرك (Ticker)
  // ==========================
  createSwiper('.ticker-swiper', {
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    speed: 6000, // سرعة الحركة
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  // ==========================
  // 4) سلايدر الأقسام الفرعية
  // ==========================
  createSwiper('.subcategories-swiper', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 12,
    navigation: {
      nextEl: '.subcat-next',
      prevEl: '.subcat-prev',
    },
  });

  // ==========================
  // 5) سلايدر المنتجات الأكثر مبيعًا
  // ==========================
  createSwiper('.bestseller-swiper', {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 16,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  });

  // ==========================
  // 6) سلايدر التقييمات
  // ==========================
  createSwiper('.testimonials-swiper', {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 16,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.testimonials-next',
      prevEl: '.testimonials-prev',
    },
  });

  // ==========================
  // 7) سلايدر البراندات
  // ==========================
  createSwiper('.brands-swiper', {
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 24,
    allowTouchMove: false,
  });

  // ==========================
  // 8) عدّاد تنازلي +3 أيام
  // ==========================
  const daysEl = document.getElementById('countdown-days');
  const hoursEl = document.getElementById('countdown-hours');
  const minsEl = document.getElementById('countdown-minutes');
  const secsEl = document.getElementById('countdown-seconds');

  if (daysEl && hoursEl && minsEl && secsEl) {
    const threeDaysMs = 3 * 24 * 60 * 60 * 1000;
    const endTime = Date.now() + threeDaysMs;

    const updateCountdown = () => {
      const now = Date.now();
      let diff = endTime - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= d * 24 * 60 * 60 * 1000;

      const h = Math.floor(diff / (1000 * 60 * 60));
      diff -= h * 60 * 60 * 1000;

      const m = Math.floor(diff / (1000 * 60));
      diff -= m * 60 * 1000;

      const s = Math.floor(diff / 1000);

      const pad = (n) => String(n).padStart(2, '0');

      daysEl.textContent = pad(d);
      hoursEl.textContent = pad(h);
      minsEl.textContent = pad(m);
      secsEl.textContent = pad(s);
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ==========================
  // 9) حركات بسيطة عند التحميل (اختياري)
  // ==========================
  document.body.classList.add('theme-loaded');
});
