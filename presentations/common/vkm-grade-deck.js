(function () {
  const deck = window.VKM_DECK_CONFIG;
  const stage = document.getElementById('deck');
  if (!deck || !stage) return;

  const logoHorizontal = deck.logoHorizontal || '../lgs/assets/logo-horizontal-transparent.png';
  const logoCover = deck.logoCover || '../lgs/assets/logo-cover.png';
  let total = 12;
  const palette = deck.palette || ['#e31e1b', '#00bcd4', '#ffca28', '#16b886', '#8e44ec', '#2498f2'];

  stage.style.setProperty('--deck-stage-bg', '#f6f7fb');

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function chip(index, label) {
    return '<div class="slide-chip">' + pad(index) + ' / ' + total + ' · ' + esc(label) + '</div>';
  }

  function chrome(index, label) {
    return [
      '<div class="chrome">',
      '<img class="brand-logo" src="' + esc(logoHorizontal) + '" alt="Vaditepe Kurs Merkezi">',
      chip(index, label),
      '</div>'
    ].join('');
  }

  function footer(index) {
    return [
      '<div class="footer">',
      '<span>VKM · ' + esc(deck.title) + '</span>',
      '<span>' + pad(index) + ' / ' + total + '</span>',
      '</div>'
    ].join('');
  }

  function makeSlide(index, label, body, extraClass) {
    const section = document.createElement('section');
    section.className = 'grade-slide' + (extraClass ? ' ' + extraClass : '');
    section.setAttribute('data-label', label);
    section.style.setProperty('--accent', deck.accent || '#e31e1b');
    section.style.setProperty('--accent-soft', deck.accentSoft || '#f06d6a');
    section.innerHTML = chrome(index, label) + '<div class="content">' + body + '</div>' + footer(index);
    return section;
  }

  function bullets(items) {
    return '<ul class="bullet-list">' + (items || []).map(function (item) {
      return '<li>' + esc(item) + '</li>';
    }).join('') + '</ul>';
  }

  function metrics(items) {
    return '<div class="metric-grid">' + (items || []).map(function (item) {
      return [
        '<div class="metric-card">',
        '<div class="metric-value">' + esc(item.value) + '</div>',
        '<div class="metric-label">' + esc(item.label) + '</div>',
        '</div>'
      ].join('');
    }).join('') + '</div>';
  }

  function infoCards(items) {
    return '<div class="card-grid">' + (items || []).map(function (item) {
      return [
        '<div class="info-card">',
        '<div class="eyebrow">' + esc(item.kicker || '') + '</div>',
        '<div class="info-label">' + esc(item.title) + '</div>',
        '<div class="info-note">' + esc(item.note || '') + '</div>',
        '</div>'
      ].join('');
    }).join('') + '</div>';
  }

  function courseCards(items) {
    return '<div class="course-grid">' + (items || []).map(function (item, index) {
      const color = item.color || palette[index % palette.length];
      return [
        '<div class="course-card">',
        '<div class="course-icon" style="--course-color:' + esc(color) + '">' + esc(item.icon || item.name.charAt(0)) + '</div>',
        '<div class="course-name">' + esc(item.name) + '</div>',
        '<div class="course-note">' + esc(item.note || '') + '</div>',
        '</div>'
      ].join('');
    }).join('') + '</div>';
  }

  function timeline(items) {
    return '<div class="timeline">' + (items || []).map(function (item, index) {
      const color = item.color || palette[index % palette.length];
      return [
        '<div class="timeline-item">',
        '<div class="timeline-index" style="--item-color:' + esc(color) + '">' + (index + 1) + '</div>',
        '<div>',
        '<div class="timeline-title">' + esc(item.title) + '</div>',
        '<div class="timeline-copy">' + esc(item.copy) + '</div>',
        '</div>',
        '</div>'
      ].join('');
    }).join('') + '</div>';
  }

  function schedule(rows) {
    return '<div class="schedule-board">' + (rows || []).map(function (row, index) {
      const color = row.color || palette[index % palette.length];
      return [
        '<div class="schedule-row">',
        '<div class="schedule-cell">' + esc(row.day) + '</div>',
        '<div class="schedule-cell">' + esc(row.time) + '</div>',
        '<div class="schedule-cell subject" style="--row-color:' + esc(color) + '">',
        '<div><strong>' + esc(row.title) + '</strong><span>' + esc(row.note || '') + '</span></div>',
        '</div>',
        '</div>'
      ].join('');
    }).join('') + '</div>';
  }

  function phoneMockup() {
    return [
      '<div class="phone-stage">',
      '<div class="phone"><div class="phone-bar"></div><div class="phone-line"></div><div class="phone-line mid"></div><div class="phone-line short"></div><div class="phone-line"></div><div class="phone-line mid"></div></div>',
      '<div class="phone second"><div class="phone-bar"></div><div class="phone-line mid"></div><div class="phone-line"></div><div class="phone-line short"></div><div class="phone-line"></div></div>',
      '</div>'
    ].join('');
  }

  function chart() {
    const values = [42, 68, 55, 82, 74, 91];
    return '<div class="chart">' + values.map(function (value) {
      return '<div class="chart-bar" style="height:' + value + '%"></div>';
    }).join('') + '</div>';
  }

  function processSteps(items) {
    return '<div class="process">' + (items || []).map(function (item, index) {
      return [
        '<div class="process-step">',
        '<div class="process-no">' + (index + 1) + '</div>',
        '<div class="process-title">' + esc(item.title) + '</div>',
        '<div class="process-copy">' + esc(item.copy) + '</div>',
        '</div>'
      ].join('');
    }).join('') + '</div>';
  }

  function successCards(items) {
    return '<div class="success-grid">' + (items || []).map(function (item) {
      return [
        '<div class="school-card">',
        '<div class="school-type">' + esc(item.type) + '</div>',
        '<div class="school-name">' + esc(item.name) + '</div>',
        '<div class="school-note">' + esc(item.note) + '</div>',
        '</div>'
      ].join('');
    }).join('') + '</div>';
  }

  function coverSlide() {
    return [
      '<div class="cover-layout">',
      '<div>',
      '<img class="cover-logo" src="' + esc(logoCover) + '" alt="Vaditepe Kurs Merkezi">',
      '<div class="kicker" style="margin-top:44px;">2013\'ten günümüze</div>',
      '<h1 class="cover-title">' + esc(deck.coverTitle || deck.shortTitle) + '<span>' + esc(deck.programTitle) + '</span></h1>',
      '<div class="cover-sub">Tecrübenin Gücü, Başarının Adresi</div>',
      '</div>',
      '<div class="cover-mark">',
      '<div class="big-number">' + esc(deck.coverMark) + '<small>' + esc(deck.coverSmall || 'Sistem') + '</small></div>',
      '</div>',
      '</div>'
    ].join('');
  }

  function supportSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">VKM Sizinle</div>',
      '<h1 class="title">Her konuda <span class="accent">yanınızdayız.</span></h1>',
      '<p class="lead">' + esc(deck.promise) + '</p>',
      bullets(deck.promiseBullets),
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Takip sistemi</div><h2 class="panel-title">Ders, deneme ve rehberlik aynı masada.</h2></div><span class="pill">Veli dili</span></div>',
      metrics(deck.promiseMetrics),
      '</div>',
      '</div>'
    ].join('');
  }

  function timelineSlide() {
    return [
      '<div class="split wide-right">',
      '<div class="stack">',
      '<div class="kicker">Çalışma Takvimi</div>',
      '<h1 class="title">Yıl boyunca <span class="accent">planlı çalışma.</span></h1>',
      '<p class="lead">Kurs başlangıcından dönem sonuna kadar öğrencinin temposu, deneme sonuçları ve eksikleri düzenli biçimde takip edilir.</p>',
      bullets(deck.timelineBullets),
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Yıllık akış</div><h2 class="panel-title">' + esc(deck.timelineTitle) + '</h2></div><span class="pill">Örnek</span></div>',
      timeline(deck.timeline),
      '</div>',
      '</div>'
    ].join('');
  }

  function coursesSlide() {
    return [
      '<div class="split wide-right">',
      '<div class="stack">',
      '<div class="kicker">Dersler</div>',
      '<h1 class="title">' + esc(deck.courseTitle) + '</h1>',
      '<p class="lead">' + esc(deck.courseLead) + '</p>',
      bullets(deck.courseBullets),
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Program blokları</div><h2 class="panel-title">Dersler ve destek alanları</h2></div><span class="pill">' + esc(deck.shortTitle) + '</span></div>',
      courseCards(deck.courses),
      '</div>',
      '</div>'
    ].join('');
  }

  function programSlide() {
    return [
      '<div class="split wide-right">',
      '<div class="stack">',
      '<div class="kicker">Örnek Program</div>',
      '<h1 class="title">Okul temposuna <span class="accent">uyumlu plan.</span></h1>',
      '<p class="lead">' + esc(deck.programLead) + '</p>',
      bullets(deck.programBullets),
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">' + esc(deck.programClass) + '</div><h2 class="panel-title">Haftalık örnek akış</h2></div><span class="pill">Örnek</span></div>',
      schedule(deck.programRows),
      '</div>',
      '</div>'
    ].join('');
  }

  function examClubSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">Deneme Kulübü</div>',
      '<h1 class="title">Sınav pratiği <span class="accent">tek başına bırakılmaz.</span></h1>',
      '<p class="lead">Denemeler sadece puan almak için değil; zamanı yönetmek, eksikleri görmek ve bir sonraki haftanın çalışma planını kurmak için kullanılır.</p>',
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Deneme sonrası</div><h2 class="panel-title">Sonuçtan aksiyona geçen takip</h2></div><span class="pill">Analiz</span></div>',
      infoCards(deck.examCards),
      '</div>',
      '</div>'
    ].join('');
  }

  function appSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">VKM Uygulaması</div>',
      '<h1 class="title">Başarı takibi <span class="accent">cepte.</span></h1>',
      '<p class="lead">VKM mobil uygulamasıyla öğrenci, veli ve kurum aynı güncel bilgiye bakar; sınav, ödev ve duyuru akışı daha görünür hale gelir.</p>',
      bullets(deck.appBullets),
      '</div>',
      '<div class="panel panel-pad">',
      phoneMockup(),
      '</div>',
      '</div>'
    ].join('');
  }

  function analysisSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">Sınav Analizi</div>',
      '<h1 class="title">Sonuçlar <span class="accent">anlaşılır veriye</span> dönüşür.</h1>',
      '<p class="lead">Veli, öğrencinin sadece kaç net yaptığını değil; hangi başlıkta güçlendiğini ve hangi konuda desteğe ihtiyaç duyduğunu görür.</p>',
      bullets(deck.analysisBullets),
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Gelişim görünümü</div><h2 class="panel-title">Ders bazlı ilerleme</h2></div><span class="pill">Örnek</span></div>',
      chart(),
      '</div>',
      '</div>'
    ].join('');
  }

  function reportSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">Deneme Raporları</div>',
      '<h1 class="title">Hedefler <span class="accent">yakından izlenir.</span></h1>',
      '<p class="lead">Kapsamlı analizler; yanlışları, gelişim eğilimini ve öğrencinin bir sonraki hafta nereden başlaması gerektiğini netleştirir.</p>',
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Rapor akışı</div><h2 class="panel-title">Puan değil, yön bilgisi</h2></div><span class="pill">Kontrol</span></div>',
      processSteps(deck.reportSteps),
      '</div>',
      '</div>'
    ].join('');
  }

  function homeworkSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">Ödev Takibi</div>',
      '<h1 class="title">Ödev, sadece verilen iş <span class="accent">değildir.</span></h1>',
      '<p class="lead">Ödevin ne kadarının tamamlandığı, hangi kaynaktan çalışıldığı ve eksik kalan nokta koçluk ritmine bağlanır.</p>',
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Haftalık kontrol</div><h2 class="panel-title">Görünür ve takip edilebilir</h2></div><span class="pill">Uygulama</span></div>',
      infoCards(deck.homeworkCards),
      '</div>',
      '</div>'
    ].join('');
  }

  function targetSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">Hedef Soru</div>',
      '<h1 class="title">Çalışma hedefi <span class="accent">sayısal netlik kazanır.</span></h1>',
      '<p class="lead">Soru hedefi, öğrencinin haftalık temposunu görünür kılar; tamamlanan ve zorlanılan alanlar sonraki plana taşınır.</p>',
      bullets(deck.targetBullets),
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Planlama</div><h2 class="panel-title">Hedef → Çözüm → Değerlendirme</h2></div><span class="pill">Ritim</span></div>',
      metrics(deck.targetMetrics),
      '</div>',
      '</div>'
    ].join('');
  }

  function evaluationSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">Genel Değerlendirme</div>',
      '<h1 class="title">Veli görüşmesi <span class="accent">veriye dayanır.</span></h1>',
      '<p class="lead">Dönem içinde yapılan görüşmelerde sınav performansı, ödev durumu, katılım ve rehberlik notları birlikte ele alınır.</p>',
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Görüşme başlıkları</div><h2 class="panel-title">Aynı öğrenciye aynı yerden bakmak</h2></div><span class="pill">Veli</span></div>',
      processSteps(deck.evaluationSteps),
      '</div>',
      '</div>'
    ].join('');
  }

  function resourcesSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">Kaynak Kitaplar</div>',
      '<h1 class="title">Kaynak seçimi <span class="accent">seviyeye göre</span> yapılır.</h1>',
      '<p class="lead">Öğrencinin ihtiyacına göre konu anlatımı, soru bankası ve deneme kaynakları dengeli biçimde kullanılır.</p>',
      bullets(deck.resourceBullets),
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Kaynak yaklaşımı</div><h2 class="panel-title">Geniş havuz, doğru seçim</h2></div><span class="pill">Seviye</span></div>',
      infoCards(deck.resourceCards),
      '</div>',
      '</div>'
    ].join('');
  }

  function teachersSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">Öğretmen Kadrosu</div>',
      '<h1 class="title">Alanında uzman <span class="accent">deneyimli kadro.</span></h1>',
      '<p class="lead">Ders anlatımı, soru çözümü ve bireysel yönlendirme aynı hedefe hizmet eder: öğrencinin sürdürülebilir ilerlemesi.</p>',
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Ekip yaklaşımı</div><h2 class="panel-title">Sadece anlatan değil, takip eden kadro</h2></div><span class="pill">VKM</span></div>',
      infoCards(deck.teacherCards),
      '</div>',
      '</div>'
    ].join('');
  }

  function guidanceSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">' + esc(deck.guidanceKicker) + '</div>',
      '<h1 class="title">' + esc(deck.guidanceTitle) + '</h1>',
      '<p class="lead">' + esc(deck.guidanceLead) + '</p>',
      bullets(deck.guidanceBullets),
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Rehberlik</div><h2 class="panel-title">Doğru karar için sakin takip</h2></div><span class="pill">Yol haritası</span></div>',
      processSteps(deck.guidanceSteps),
      '</div>',
      '</div>'
    ].join('');
  }

  function successSlide() {
    return [
      '<div class="stack" style="height:100%;">',
      '<div class="kicker">Başarı Hikayeleri</div>',
      '<h1 class="title" style="max-width:1380px;">Yüzlerce öğrencimizi <span class="accent">hedeflerine ulaştırdık.</span></h1>',
      '<p class="lead" style="max-width:1180px;">Başarıyı tek bir sınav sonucundan ibaret görmüyoruz; doğru tempo, doğru rehberlik ve düzenli takip birlikte sonuç üretiyor.</p>',
      successCards(deck.successCards),
      '<span class="pill" style="width:fit-content;">Her yıl düzenli başarı takibi</span>',
      '</div>'
    ].join('');
  }

  function registrationSlide() {
    return [
      '<div class="split">',
      '<div class="stack">',
      '<div class="kicker">Erken Kayıt</div>',
      '<h1 class="title">Planı erken kuran <span class="accent">avantajlı başlar.</span></h1>',
      '<p class="lead">Erken kayıt döneminde öğrencinin seviye bilgisi, hedefi ve uygun programı daha sakin bir takvimle planlanır.</p>',
      bullets(deck.registrationBullets),
      '</div>',
      '<div class="panel panel-pad">',
      '<div class="panel-header"><div><div class="panel-sub">Kayıt süreci</div><h2 class="panel-title">Net program, net takip</h2></div><span class="pill">Avantaj</span></div>',
      metrics(deck.registrationMetrics),
      '</div>',
      '</div>'
    ].join('');
  }

  function thanksSlide() {
    return [
      '<div class="thanks">',
      '<img class="thanks-logo" src="' + esc(logoHorizontal) + '" alt="Vaditepe Kurs Merkezi">',
      '<h1>TEŞEKKÜRLER.</h1>',
      '<p>' + esc(deck.thanksLine || 'Aynı veriye bakıp aynı hedefe yürüyelim.') + '</p>',
      '<div class="contact-line">vaditepekurs.com · +90 212 669 62 70 · Atakent / Bahçeşehir</div>',
      '</div>'
    ].join('');
  }

  const slideFns = {
    cover: coverSlide,
    support: supportSlide,
    timeline: timelineSlide,
    courses: coursesSlide,
    program: programSlide,
    examClub: examClubSlide,
    app: appSlide,
    analysis: analysisSlide,
    report: reportSlide,
    homework: homeworkSlide,
    target: targetSlide,
    evaluation: evaluationSlide,
    resources: resourcesSlide,
    teachers: teachersSlide,
    guidance: guidanceSlide,
    success: successSlide,
    registration: registrationSlide,
    thanks: thanksSlide
  };

  const defaultDeck = [
    ['Kapak', 'cover'],
    ['VKM Yanınızda', 'support'],
    ['Dersler', 'courses'],
    ['Örnek Program', 'program'],
    ['Deneme Kulübü', 'examClub'],
    ['Sınav Analizi', 'analysis'],
    ['Ödev Takibi', 'homework'],
    ['Öğretmen Kadrosu', 'teachers'],
    ['Kaynak Kitaplar', 'resources'],
    [deck.guidanceKicker || 'Rehberlik', 'guidance'],
    ['Başarı', 'success'],
    ['Kapanış', 'thanks']
  ];

  const slides = (deck.slides || defaultDeck)
    .map(function (item) { return [item[0], slideFns[item[1]]]; })
    .filter(function (item) { return typeof item[1] === 'function'; });

  total = slides.length;

  slides.forEach(function (item, index) {
    stage.appendChild(makeSlide(index + 1, item[0], item[1](), index === 0 ? 'cover' : ''));
  });
})();
