/**
 * Andi Creative Lab - Main JavaScript
 * Handles Navigation, Gallery Filtering, and Interactive Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        mobileToggle.innerHTML = '&#9776;';
      }
    });
  }

  // --- 2. Portfolio Category Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card-detailed');

  if (filterBtns.length > 0 && portfolioItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(15px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // --- 3. Dynamic WhatsApp Direct Link for Booking ---
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('clientName')?.value || 'Klien';
      const brand = document.getElementById('clientBrand')?.value || '-';
      const packageSelected = document.getElementById('packageSelect')?.value || 'Belum dipilih';
      const date = document.getElementById('sessionDate')?.value || '-';
      const notes = document.getElementById('clientNotes')?.value || '-';

      const waText = encodeURIComponent(
        `Halo Andi Creative Lab! 👋\n\n` +
        `Saya ingin reservasi/konsultasi fotografi:\n` +
        `• *Nama:* ${name}\n` +
        `• *Usaha/Brand:* ${brand}\n` +
        `• *Pilihan Paket:* ${packageSelected}\n` +
        `• *Rencana Tanggal:* ${date}\n` +
        `• *Catatan Tambahan:* ${notes}\n\n` +
        `Mohon info ketersediaan jadwal. Terima kasih!`
      );

      const waUrl = `https://wa.me/6281234567890?text=${waText}`;
      window.open(waUrl, '_blank');
    });
  }
});
