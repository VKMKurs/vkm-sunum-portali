(function () {
  const common = {
    logoHorizontal: '../lgs/assets/logo-horizontal-transparent.png',
    logoCover: '../lgs/assets/logo-cover.png',
    promise: 'Vaditepe Kurs Merkezi olarak öğrencilerimizin yalnızca ders başarısını değil; çalışma alışkanlığını, sınav pratiğini ve veli bilgilendirmesini birlikte takip ederiz.',
    promiseBullets: [
      'Öğrencinin seviyesi düzenli ölçülür.',
      'Eksikler haftalık çalışma planına bağlanır.',
      'Veli, süreci sade ve anlaşılır biçimde görür.'
    ],
    promiseMetrics: [
      { value: 'Ders', label: 'Konu anlatımı ve soru çözümü' },
      { value: 'Deneme', label: 'Sınav pratiği ve analiz' },
      { value: 'Ödev', label: 'Kaynak ve hedef takibi' },
      { value: 'Görüşme', label: 'Düzenli veli bilgilendirmesi' }
    ],
    timelineTitle: 'Eylül → Haziran',
    timeline: [
      { title: 'Kurs Başlangıcı', copy: 'Seviye, hedef ve çalışma alışkanlığı birlikte görülür.' },
      { title: 'Sömestr Kampı', copy: 'Sömestrin ilk haftası yoğunlaştırılmış tekrar ve eksik kapatma yapılır.' },
      { title: 'Deneme Ritmi', copy: 'Denemeler analiz edilir, zayıf konular plana alınır.' },
      { title: 'Dönem Sonu', copy: 'Gelişim özeti, yeni hedef ve sonraki dönem planı netleştirilir.' }
    ],
    timelineBullets: [
      'Ara tatil yerine sömestr kampı ve düzenli tekrar ritmi kullanılır.',
      'Deneme sonuçları yalnızca puan olarak kalmaz; çalışma planına dönüşür.',
      'Program, öğrencinin okul temposu ve ihtiyacına göre dengelenir.'
    ],
    examCards: [
      { kicker: 'Gerçek prova', title: 'Sınav atmosferi', note: 'Süre yönetimi ve sınav alışkanlığı güvenli ortamda gelişir.' },
      { kicker: 'Analiz', title: 'Ders ders takip', note: 'Yanlışlar ve boşlar konu başlığına bağlanır.' },
      { kicker: 'Rehberlik', title: 'Kişiye özel yön', note: 'Bir sonraki hafta nereden başlanacağı netleşir.' },
      { kicker: 'Sonuç', title: 'Gelişim görünümü', note: 'Öğrenci ve veli ilerlemeyi aynı veriden takip eder.' }
    ],
    appBullets: [
      'Sınav sonuçları ve analizler tek yerde görünür.',
      'Ödev ve hedefler haftalık takip edilir.',
      'Duyurular, program bilgileri ve raporlar daha erişilebilir olur.'
    ],
    analysisBullets: [
      'Net, yanlış ve boşlar ders/kazanım düzeyinde okunur.',
      'Gelişim çizgisi tek sınavla değil dönem boyunca takip edilir.',
      'Zayıf başlıklar sonraki ders ve etüt planına bağlanır.'
    ],
    reportSteps: [
      { title: 'Veri Toplanır', copy: 'Deneme, ödev ve katılım bilgileri bir araya gelir.' },
      { title: 'Analiz Edilir', copy: 'Güçlü ve gelişmesi gereken alanlar ayrıştırılır.' },
      { title: 'Planlanır', copy: 'Eksikler haftalık hedefe ve kaynağa bağlanır.' },
      { title: 'Paylaşılır', copy: 'Veliye sade, anlaşılır ve uygulanabilir özet verilir.' }
    ],
    homeworkCards: [
      { kicker: 'Anlık', title: 'Ödev durumu', note: 'Tamamlanan ve eksik kalan çalışmalar görünür hale gelir.' },
      { kicker: 'Kaynak', title: 'Doğru materyal', note: 'Öğrencinin ihtiyacına uygun kitap ve test seçilir.' },
      { kicker: 'Takip', title: 'Haftalık kontrol', note: 'Eksik kalan çalışmalar sonraki programa alınır.' },
      { kicker: 'Destek', title: 'Etüt bağlantısı', note: 'Zorlanılan başlıklar birebir destek saatine taşınır.' }
    ],
    targetBullets: [
      'Hedef soru sayısı öğrencinin seviyesine göre belirlenir.',
      'Çözülen sorular ve zorlanılan konular takip edilir.',
      'Haftalık hedef, ders planı ve etüt desteğiyle birlikte yürür.'
    ],
    targetMetrics: [
      { value: 'Konu', label: 'Hangi başlık çalışılacak?' },
      { value: 'Kaynak', label: 'Hangi kitaptan ilerlenecek?' },
      { value: 'Soru', label: 'Hedef sayı kaç olacak?' },
      { value: 'Kontrol', label: 'Sonuç nasıl değerlendirilecek?' }
    ],
    evaluationSteps: [
      { title: 'Sınav', copy: 'Performans ve gelişim eğilimi okunur.' },
      { title: 'Ödev', copy: 'Tamamlama, düzen ve süreklilik kontrol edilir.' },
      { title: 'Katılım', copy: 'Derse devam, etüt ve soru çözümü birlikte değerlendirilir.' },
      { title: 'Yol Haritası', copy: 'Veli, öğrenci ve kurum aynı hedefte buluşur.' }
    ],
    resourceBullets: [
      'Konu anlatımı ve soru bankası dengeli kullanılır.',
      'Deneme kaynakları öğrencinin sınav pratiğini genişletir.',
      'Zorlanan öğrenciye farklı seviye ve destek kaynakları verilir.'
    ],
    resourceCards: [
      { kicker: 'Seviye', title: 'Uygun kaynak', note: 'Öğrenciye ağır ya da hafif gelmeyen doğru kaynak seçilir.' },
      { kicker: 'Çeşitlilik', title: 'Farklı yayınlar', note: 'Tek soru tarzına sıkışmadan geniş pratik yapılır.' },
      { kicker: 'Tekrar', title: 'Konu pekiştirme', note: 'Eksik başlıklar kısa tekrar ve hedef testlerle kapatılır.' },
      { kicker: 'Deneme', title: 'Sınav pratiği', note: 'Zaman ve strateji denemelerle güçlenir.' }
    ],
    teacherCards: [
      { kicker: 'Deneyim', title: 'Alan hakimiyeti', note: 'Dersin kritik kazanımları ve sınav dili güçlü biçimde aktarılır.' },
      { kicker: 'Yaklaşım', title: 'Öğrenci odaklılık', note: 'Aynı sınıfta farklı hızlara uygun yönlendirme yapılır.' },
      { kicker: 'Takip', title: 'Geri bildirim', note: 'Ders, ödev ve deneme sonuçları öğretmen takibine girer.' },
      { kicker: 'Motivasyon', title: 'Sürdürülebilir tempo', note: 'Öğrencinin yıl içinde kopmaması için düzenli ritim kurulur.' }
    ],
    registrationBullets: [
      'Seviye ve hedef daha erken görülür.',
      'Uygun sınıf ve program daha rahat planlanır.',
      'Öğrencinin yılına hazırlık daha sakin başlar.'
    ],
    registrationMetrics: [
      { value: 'Seviye', label: 'Başlangıç fotoğrafı' },
      { value: 'Program', label: 'Uygun ders ritmi' },
      { value: 'Takip', label: 'Ödev ve deneme planı' },
      { value: 'Veli', label: 'Net bilgilendirme' }
    ],
    thanksLine: 'Öğrencinin hedefini birlikte planlayalım, süreci birlikte takip edelim.'
  };

  const lgsSuccess = [
    { type: 'Fen Lisesi', name: 'Robert Koleji', note: 'Nitelikli hedefler için uzun vadeli takip.' },
    { type: 'Anadolu Lisesi', name: 'Kadıköy Anadolu', note: 'Planlı çalışma ve düzenli deneme ritmi.' },
    { type: 'Köklü Lise', name: 'İstanbul Erkek Lisesi', note: 'Yüksek hedefe uygun rehberlik.' },
    { type: 'Fen Lisesi', name: 'Çapa Fen Lisesi', note: 'Akademik disiplin ve doğru kaynak.' }
  ];

  const yksSuccess = [
    { type: 'Mühendislik', name: 'Boğaziçi Üniversitesi', note: 'TYT-AYT dengesi ve hedefli çalışma.' },
    { type: 'Teknik Üniversite', name: 'İTÜ', note: 'Sayısal alanlarda güçlü deneme takibi.' },
    { type: 'Üniversite', name: 'Yıldız Teknik', note: 'Alan derslerinde düzenli gelişim.' },
    { type: 'Üniversite', name: 'Marmara Üniversitesi', note: 'Tercih sürecine kadar rehberlik.' }
  ];

  const configs = {
    '6-sinif': {
      ...common,
      title: '6. Sınıf Sunumu',
      shortTitle: '6. Sınıf',
      coverTitle: '6. Sınıf',
      coverMark: '6',
      coverSmall: 'Kurs',
      programTitle: 'Kurs Sistemi',
      accent: '#2498f2',
      accentSoft: '#63b3ff',
      courseTitle: 'Temel derslerde güçlü başlangıç.',
      courseLead: '6. sınıfta amaç; okul derslerini sağlam tutmak, düzenli çalışma alışkanlığı kazandırmak ve öğrenciyi üst sınıflara güvenle hazırlamaktır.',
      courseBullets: ['Konu anlatımı ve soru çözümü birlikte ilerler.', 'Okul yazılıları ve dönem hedefleri takip edilir.', 'Mantık-muhakeme becerisi destek çalışmalarla güçlenir.'],
      courses: [
        { name: 'Matematik', icon: 'M', note: 'Temel beceri, problem ve işlem disiplini.' },
        { name: 'Türkçe', icon: 'T', note: 'Okuduğunu anlama, dil bilgisi ve ifade.' },
        { name: 'Fen Bilgisi', icon: 'F', note: 'Konu kavrama, deney mantığı ve test pratiği.' },
        { name: 'İngilizce', icon: 'İ', note: 'Dil becerisi ve okul desteği.' }
      ],
      programLead: 'Hafta içi dersler, hafta sonu destek ve deneme ritmiyle öğrencinin okul temposu dengelenir.',
      programBullets: ['Hafta içi ders günleri öğrencinin programına göre düzenlenir.', 'Bir gün etüt/soru çözümü desteği ayrılır.', 'Pazar denemesi yıllık plana göre uygulanır.'],
      programClass: '6-A · Örnek',
      programRows: [
        { day: 'Salı', time: '17:10-18:50', title: 'Matematik', note: 'Konu + soru çözümü' },
        { day: 'Perşembe', time: '17:10-18:50', title: 'Türkçe / Fen', note: 'Dönüşümlü ders planı' },
        { day: 'Cuma', time: '17:10-18:20', title: 'Etüt', note: 'Birebir destek ve eksik kapatma' },
        { day: 'Cumartesi', time: '10:00-12:20', title: 'Tekrar Dersi', note: 'Haftalık pekiştirme' },
        { day: 'Pazar', time: 'Örnek', title: 'Deneme / Analiz', note: 'Dönemsel sınav pratiği' }
      ],
      guidanceKicker: 'Süreç Rehberliği',
      guidanceTitle: 'LGS yolculuğu tek yıla sıkıştırılmaz.',
      guidanceLead: '6. sınıfta kurulan düzen, öğrencinin ilerleyen yıllarda sınav temposuna daha sağlıklı hazırlanmasını sağlar.',
      guidanceBullets: ['Çalışma alışkanlığı erken yaşta oturur.', 'Eksikler büyümeden görülür.', 'Veli, süreci panik yerine veriyle takip eder.'],
      guidanceSteps: [
        { title: 'Alışkanlık', copy: 'Düzenli ders ve ödev ritmi kurulur.' },
        { title: 'Temel', copy: 'Matematik, Türkçe ve Fen temeli güçlenir.' },
        { title: 'Takip', copy: 'Deneme ve ödev verisi birlikte okunur.' },
        { title: 'Hazırlık', copy: 'Üst sınıflar için sağlam zemin oluşur.' }
      ],
      successCards: lgsSuccess
    },
    '7-sinif': {
      ...common,
      title: '7. Sınıf Sunumu',
      shortTitle: '7. Sınıf',
      coverTitle: '7. Sınıf',
      coverMark: '7',
      coverSmall: 'Kurs',
      programTitle: 'Kurs Sistemi',
      accent: '#9c27b0',
      accentSoft: '#c46ad4',
      slides: [
        ['Kapak', 'cover'],
        ['VKM Yanınızda', 'support'],
        ['Dersler', 'courses'],
        ['Örnek Program', 'program'],
        ['Deneme Kulübü', 'examClub'],
        ['Deneme Takvimi', 'examSchedule'],
        ['Sınav Analizi', 'analysis'],
        ['Ödev Takibi', 'homework'],
        ['Öğretmen Kadrosu', 'teachers'],
        ['Kaynak Kitaplar', 'resources'],
        ['Süreç Rehberliği', 'guidance'],
        ['Başarı', 'success'],
        ['Kapanış', 'thanks']
      ],
      examSchedule: [
        { no: 1, date1: '12.Eki.25', date2: '10.Eki.25', name: 'Fenomen' },
        { no: 2, date1: '26.Eki.25', date2: '24.Eki.25', name: 'Özdebir GİS-1' },
        { no: 3, date1: '9.Kas.25', date2: '7.Kas.25', name: 'Okyanus Classmate' },
        { no: 4, date1: '30.Kas.25', date2: '28.Kas.25', name: 'Ankara (X) Yayınları' },
        { no: 5, date1: '14.Ara.25', date2: '12.Ara.25', name: 'Paraf' },
        { no: 6, date1: '28.Ara.25', date2: '26.Ara.25', name: 'Özdebir GİS-2' },
        { no: 7, date1: '11.Oca.26', date2: '9.Oca.26', name: 'Nartest' },
        { no: 8, date1: '8.Şub.26', date2: '6.Şub.26', name: 'Eksen Yayınları' },
        { no: 9, date1: '22.Şub.26', date2: '20.Şub.26', name: 'Nitelik Yayınları' },
        { no: 10, date1: '8.Mar.26', date2: '6.Mar.26', name: 'Sinan Kuzucu' },
        { no: 11, date1: '12.Nis.26', date2: '10.Nis.26', name: 'Özdebir GİS-3' },
        { no: 12, date1: '19.Nis.26', date2: '17.Nis.26', name: 'Günay Zoom' },
        { no: 13, date1: '10.May.26', date2: '8.May.26', name: 'Özdebir GİS-4' },
        { no: 14, date1: '24.May.26', date2: '22.May.26', name: 'Arı Yayıncılık' },
        { no: 15, date1: '3.Haz.26', date2: '3.Haz.26', name: 'Startfen' }
      ],
      courseTitle: '7. sınıfta tempo ve temel birlikte güçlenir.',
      courseLead: '7. sınıf, LGS öncesi en kritik hazırlık dönemlerinden biridir; ders başarısı, soru çözme alışkanlığı ve mantık-muhakeme birlikte yürür.',
      courseBullets: ['Dersler okullardan bir hafta önce başlar, son haftalardan sonra biter.', 'Okul başarısı ve sınav alışkanlığı aynı anda desteklenir.', 'Soru çözüm hızı ve dikkat çalışmaları önem kazanır.', 'Eksikler 8. sınıfa taşınmadan kapatılır.'],
      courses: [
        { name: 'Matematik', icon: 'M', note: 'Yeni nesil soru dili ve problem becerisi.' },
        { name: 'Türkçe', icon: 'T', note: 'Paragraf, anlam bilgisi ve dil çalışmaları.' },
        { name: 'Fen Bilgisi', icon: 'F', note: 'Kavram, yorum ve deney mantığı.' },
        { name: 'Sosyal Bilgiler', icon: 'S', note: 'Okuma, yorum ve kavram hakimiyeti.' },
        { name: 'Mantık Muhakeme', icon: '✓', note: 'Dikkat, akıl yürütme ve strateji.' }
      ],
      programLead: 'Hafta içi dersler, etüt desteği ve hafta sonu uygulamasıyla öğrenci 8. sınıfa daha hazır girer.',
      programBullets: ['Hafta içi iki gün ders yapılır.', 'Bir gün etüt ve soru çözümü ayrılır.', 'Hafta sonu tekrar ve deneme ritmi kurulur.'],
      programClass: '7-A · Örnek',
      programRows: [
        { day: 'Salı', time: '17:10-18:50', title: 'Matematik', note: 'Yeni nesil soru pratiği' },
        { day: 'Perşembe', time: '17:10-18:50', title: 'Türkçe / Fen', note: 'Dönüşümlü destek' },
        { day: 'Cuma', time: '17:10-18:20', title: 'Etüt', note: 'Birebir soru çözümü' },
        { day: 'Cumartesi', time: '10:00-12:20', title: 'Sosyal / Muhakeme', note: 'Haftalık pekiştirme' },
        { day: 'Pazar', time: 'Örnek', title: 'Deneme / Analiz', note: 'Dönemsel ölçme' }
      ],
      guidanceKicker: 'Süreç Rehberliği',
      guidanceTitle: '8. sınıfa hazırlık bugünden başlar.',
      guidanceLead: '7. sınıfta yapılan doğru takip, 8. sınıfın yoğun temposuna öğrenciyi daha sakin ve hazır taşır.',
      guidanceBullets: ['Soru çözüm disiplini oturur.', 'Kazanım eksikleri erken kapanır.', 'Veli, gelişimi yıl boyunca takip eder.'],
      guidanceSteps: [
        { title: 'Ölçme', copy: 'Temel derslerde başlangıç seviyesi görülür.' },
        { title: 'Pekiştirme', copy: 'Haftalık ödev ve etüt planı kurulur.' },
        { title: 'Deneme', copy: 'Sınav alışkanlığı kademeli gelişir.' },
        { title: 'Geçiş', copy: '8. sınıf temposuna hazır zemin oluşur.' }
      ],
      successCards: lgsSuccess
    },
    '10-sinif': {
      ...common,
      title: '10. Sınıf Veli Sunumu',
      shortTitle: '10. Sınıf',
      coverTitle: '10. Sınıf',
      coverMark: '10',
      coverSmall: 'Hazırlık',
      programTitle: 'Hazırlık Sistemi',
      accent: '#ff9800',
      accentSoft: '#ffc166',
      courseTitle: 'Lise temelini doğru zamanda güçlendiriyoruz.',
      courseLead: '10. sınıfta amaç; okul derslerini desteklemek, TYT temelini kaybetmemek ve öğrencinin alan derslerine hazır ilerlemesini sağlamaktır.',
      courseBullets: ['Sayısal ve sözel temel derslerde düzenli takip yapılır.', 'Okul sınavları ve dönem hedefleri plana dahil edilir.', 'TYT alışkanlığı erken dönemde kontrollü biçimde kurulur.'],
      courses: [
        { name: 'Matematik', icon: 'M', note: 'TYT temeli ve okul kazanımları.' },
        { name: 'Fizik', icon: 'F', note: 'Kavram ve problem çözme becerisi.' },
        { name: 'Kimya', icon: 'K', note: 'Konu kavrama ve test pratiği.' },
        { name: 'Biyoloji', icon: 'B', note: 'Sistematik tekrar ve yorum.' },
        { name: 'Türk Dili ve Edebiyatı', icon: 'E', note: 'Okuma, anlam ve yazılı desteği.' }
      ],
      programLead: 'Ders günleri okul çıkış saatine uyumlu planlanır; etüt ve deneme verisiyle öğrencinin haftalık ritmi korunur.',
      programBullets: ['Hafta içi iki gün ders yapılır.', 'Bir gün etüt ve soru çözümü ayrılır.', 'Cumartesi ders, pazar deneme örnek ritim olarak gösterilir.'],
      programClass: '10-A · Örnek',
      programRows: [
        { day: 'Salı', time: '17:10-20:20', title: 'Matematik / Fizik', note: 'Okul + TYT temel' },
        { day: 'Perşembe', time: '17:10-20:20', title: 'Kimya / Biyoloji', note: 'Konu + soru çözümü' },
        { day: 'Cuma', time: '17:10-18:20', title: 'Etüt', note: 'Birebir destek' },
        { day: 'Cumartesi', time: '10:00-13:00', title: 'Edebiyat / Tekrar', note: 'Haftalık pekiştirme' },
        { day: 'Pazar', time: 'Örnek', title: 'Deneme / Analiz', note: 'TYT temel takibi' }
      ],
      guidanceKicker: 'Hedef Rehberliği',
      guidanceTitle: 'TYT temeli 12. sınıfa bırakılmaz.',
      guidanceLead: '10. sınıfta kurulan düzen, öğrencinin sonraki yıllarda hem okul hem sınav temposunu daha rahat yönetmesini sağlar.',
      guidanceBullets: ['TYT temel kazanımları düzenli korunur.', 'Alan seçimi ve hedefler daha bilinçli ele alınır.', 'Öğrenci gereksiz panik yaşamadan ilerler.'],
      guidanceSteps: [
        { title: 'Temel', copy: 'TYT için kritik konular canlı tutulur.' },
        { title: 'Okul', copy: 'Yazılı ve dönem hedefleri desteklenir.' },
        { title: 'Alan', copy: 'Öğrencinin yönelimi izlenir.' },
        { title: 'Hazırlık', copy: '11 ve 12. sınıf için zemin kurulur.' }
      ],
      successCards: yksSuccess
    },
    '11-sinif': {
      ...common,
      title: '11. Sınıf Veli Sunumu',
      shortTitle: '11. Sınıf',
      coverTitle: '11. Sınıf',
      coverMark: '11',
      coverSmall: 'Hazırlık',
      programTitle: 'Hazırlık Sistemi',
      accent: '#e91e63',
      accentSoft: '#f36f9b',
      courseTitle: '11. sınıfta alan dersleri ciddileşir.',
      courseLead: '11. sınıf, AYT altyapısının kurulduğu ve TYT tekrarının ihmal edilmemesi gereken dönemdir; bu yüzden program çift yönlü ilerler.',
      courseBullets: ['Alan derslerinde konu hakimiyeti güçlendirilir.', 'TYT temel başlıkları düzenli tekrar edilir.', 'Deneme ve ödev verisiyle öğrenci yakından izlenir.'],
      courses: [
        { name: 'Matematik TYT-AYT', icon: 'M', note: 'Temel tekrar ve alan derinliği.' },
        { name: 'Fizik TYT-AYT', icon: 'F', note: 'Kavram, formül ve yorum.' },
        { name: 'Kimya', icon: 'K', note: 'Konu anlatımı ve test pratiği.' },
        { name: 'Biyoloji', icon: 'B', note: 'Sistematik konu takibi.' },
        { name: 'Türkçe TYT', icon: 'T', note: 'Paragraf ve anlam çalışmaları.' },
        { name: 'Geometri', icon: 'G', note: 'Görsel düşünme ve problem çözümü.' }
      ],
      programLead: '11. sınıf örnek programı, okul temposunu bozmadan alan dersleri ve TYT tekrarını aynı haftada tutar.',
      programBullets: ['Hafta içi iki gün ders yapılır.', 'Bir gün etüt ve soru çözümü ayrılır.', 'Cumartesi alan dersi, pazar deneme örnek ritim olarak kullanılır.'],
      programClass: '11-MF · Örnek',
      programRows: [
        { day: 'Salı', time: '17:10-20:20', title: 'Matematik / Fizik', note: 'AYT altyapı' },
        { day: 'Perşembe', time: '17:10-20:20', title: 'Kimya / Biyoloji', note: 'Konu + test' },
        { day: 'Cuma', time: '17:10-18:20', title: 'Etüt', note: 'Birebir destek' },
        { day: 'Cumartesi', time: '10:00-13:00', title: 'TYT Tekrar', note: 'Türkçe + Geometri' },
        { day: 'Pazar', time: 'Örnek', title: 'Deneme / Analiz', note: 'TYT-AYT takip' }
      ],
      guidanceKicker: 'Hedef Rehberliği',
      guidanceTitle: '12. sınıfa güçlü dosyayla geçiş.',
      guidanceLead: '11. sınıf sonunda öğrenci hangi konularda güçlü, hangi başlıklarda desteğe ihtiyaç duyuyor net biçimde görülmelidir.',
      guidanceBullets: ['AYT konuları ertelenmeden işlenir.', 'TYT eksikleri yıl içinde kapatılır.', '12. sınıf planı veriye göre hazırlanır.'],
      guidanceSteps: [
        { title: 'Alan', copy: 'Alan derslerinde derinleşme başlar.' },
        { title: 'TYT', copy: 'Temel konular düzenli canlı tutulur.' },
        { title: 'Analiz', copy: 'Deneme sonuçları hedefe göre okunur.' },
        { title: 'Geçiş', copy: '12. sınıfa hazır planla başlanır.' }
      ],
      successCards: yksSuccess
    },
    'ozel-ders': {
      ...common,
      title: 'VKM Özel Ders',
      shortTitle: 'Özel Ders',
      coverTitle: 'VKM Özel Ders',
      coverMark: 'Ö',
      coverSmall: 'Birebir',
      programTitle: 'Birebir Destek Sistemi',
      accent: '#1f6feb',
      accentSoft: '#5a9bff',
      slides: [
        ['Kapak', 'cover'],
        ['Neden Özel Ders', 'support'],
        ['Hangi Derslerde', 'courses'],
        ['Örnek Program', 'program'],
        ['Öğretmen Kadrosu', 'teachers'],
        ['Süreç', 'report'],
        ['Ödev Takibi', 'homework'],
        ['Rehberlik', 'guidance'],
        ['Nasıl Başlanır', 'registration'],
        ['Kapanış', 'thanks']
      ],
      promise: 'VKM Özel Ders, öğrencinin eksik kalan başlıklarını birebir öğretmenle, sade ve takip edilebilir biçimde kapatır.',
      promiseBullets: [
        'Öğrencinin gerçek seviyesi tek tek görülür.',
        'Eksik başlıklar haftalık plana bağlanır.',
        'Veli, süreci raporla takip eder.'
      ],
      promiseMetrics: [
        { value: 'Tanışma', label: 'Seviye ve ihtiyaç tespiti' },
        { value: 'Plan', label: 'Konu ve hedef belirleme' },
        { value: 'Ders', label: 'Birebir konu ve soru çözümü' },
        { value: 'Rapor', label: 'Veli ve öğrenci bilgilendirmesi' }
      ],
      courseTitle: 'Her seviye için birebir destek.',
      courseLead: 'İlkokuldan üniversite hazırlığına kadar her sınıf seviyesinde, öğrencinin ihtiyacına göre birebir veya küçük grup özel ders düzenlenir.',
      courseBullets: [
        'Okul dersleri ve yazılı hazırlığı desteklenir.',
        'Eksik konular kısa sürede kapatılır.',
        'Sınav öncesi yoğun program kurulur.'
      ],
      courses: [
        { name: 'Matematik', icon: 'M', note: 'Tüm seviyelerde temel ve problem desteği.' },
        { name: 'Fen / Fizik / Kimya / Biyoloji', icon: 'F', note: 'Kavram, deney ve soru pratiği.' },
        { name: 'Türkçe / Edebiyat', icon: 'T', note: 'Paragraf, anlam ve yazılı desteği.' },
        { name: 'İngilizce', icon: 'E', note: 'Seviye tespiti ve birebir konuşma pratiği.' },
        { name: 'LGS / YKS', icon: 'S', note: 'Sınav odaklı hedefli çalışma.' },
        { name: 'İhtiyaca Özel', icon: '+', note: 'Talep edilen ders için öğretmen eşleştirilir.' }
      ],
      programLead: 'Özel ders programı öğrencinin okul temposuna göre planlanır; gün ve saat veliyle birlikte belirlenir.',
      programBullets: [
        'Ders günleri öğrencinin uygun saatine göre kurulur.',
        'Haftalık 1, 2 veya 3 ders saati alternatifi sunulur.',
        'İhtiyaç değişirse program yıl içinde güncellenir.'
      ],
      programClass: 'Birebir · Örnek Hafta',
      programRows: [
        { day: 'Pazartesi', time: '17:30-18:50', title: 'Matematik', note: 'Konu + soru çözümü' },
        { day: 'Çarşamba', time: '17:30-18:50', title: 'Fen / Fizik', note: 'Eksik kapatma' },
        { day: 'Cuma', time: '17:30-18:50', title: 'Tekrar', note: 'Haftalık özet ve test' },
        { day: 'Cumartesi', time: 'Esnek', title: 'Yazılı Hazırlık', note: 'Dönemsel yoğunlaştırma' }
      ],
      reportSteps: [
        { title: 'Tanışma', copy: 'Seviye ve ihtiyaç birlikte ölçülür.' },
        { title: 'Plan', copy: 'Eksik konular ve hedefler netleştirilir.' },
        { title: 'Ders', copy: 'Birebir veya küçük grup tempo ile ilerler.' },
        { title: 'Geri Bildirim', copy: 'Veli düzenli raporla süreci görür.' }
      ],
      homeworkCards: [
        { kicker: 'Birebir', title: 'Kişisel ödev', note: 'Ders sonunda öğrenciye özel çalışma verilir.' },
        { kicker: 'Kontrol', title: 'Haftalık takip', note: 'Tamamlanan ve eksik kalan kısımlar görüşülür.' },
        { kicker: 'Kaynak', title: 'Uygun materyal', note: 'Konuya ve seviyeye göre kitap-test seçilir.' },
        { kicker: 'Esneklik', title: 'Tempo ayarı', note: 'Öğrenci zorlanırsa plan yumuşatılır.' }
      ],
      guidanceKicker: 'Veli İletişimi',
      guidanceTitle: 'Veli süreci yakından takip eder.',
      guidanceLead: 'Özel ders, sadece ders saati değildir; veli düzenli geri bildirim alır ve sürecin neresinde olduğunu görür.',
      guidanceBullets: [
        'Düzenli aralıklarla veliye geri bildirim verilir.',
        'Aylık genel değerlendirme yapılır.',
        'İhtiyaç olursa program revize edilir.'
      ],
      guidanceSteps: [
        { title: 'Haftalık', copy: 'Ödev ve devam bilgisi görüşülür.' },
        { title: 'Aylık', copy: 'Genel gelişim veliyle paylaşılır.' },
        { title: 'Dönem Ortası', copy: 'Program ve hedefler birlikte değerlendirilir.' },
        { title: 'Dönem Sonu', copy: 'Yeni dönem için plan birlikte kurulur.' }
      ],
      registrationBullets: [
        'Tanışma görüşmesi ücretsizdir.',
        'Uygun öğretmen ve gün hızlıca eşleştirilir.',
        'İlk hafta deneme dersleri ile süreç başlar.'
      ],
      registrationMetrics: [
        { value: 'Görüşme', label: 'Ücretsiz tanışma' },
        { value: 'Eşleşme', label: 'Uygun öğretmen seçimi' },
        { value: 'Başlangıç', label: 'Hızlı program kurulumu' },
        { value: 'Takip', label: 'Veli ile düzenli iletişim' }
      ],
      thanksLine: 'Öğrencinizin eksik kalan başlıklarını birlikte kapatalım.'
    },
    'deneme-kulubu': {
      ...common,
      title: 'VKM Deneme Kulübü',
      shortTitle: 'Deneme Kulübü',
      coverTitle: 'VKM Deneme Kulübü',
      coverMark: 'D',
      coverSmall: 'Sınav Pratiği',
      programTitle: 'Sınav Pratiği Sistemi',
      accent: '#16b886',
      accentSoft: '#5fd1ad',
      slides: [
        ['Kapak', 'cover'],
        ['Neden Deneme Kulübü', 'support'],
        ['Deneme Akışı', 'examClub'],
        ['Sınav Analizi', 'analysis'],
        ['Deneme Raporları', 'report'],
        ['Öğretmen Kadrosu', 'teachers'],
        ['Eksik Konu Takibi', 'homework'],
        ['Sonrası Rehberlik', 'guidance'],
        ['Kayıt', 'registration'],
        ['Kapanış', 'thanks']
      ],
      promise: 'VKM Deneme Kulübü, öğrencinin sınav pratiğini düzenli ritimle kurar; her deneme bir sonraki haftanın çalışma planına dönüşür.',
      promiseBullets: [
        'Düzenli sınav atmosferi prova edilir.',
        'Her deneme analiz raporuyla okunur.',
        'Eksik başlıklar haftalık plana bağlanır.'
      ],
      promiseMetrics: [
        { value: 'Deneme', label: 'Düzenli sınav pratiği' },
        { value: 'Analiz', label: 'Ders ve kazanım okuması' },
        { value: 'Rapor', label: 'Veliye sade özet' },
        { value: 'Plan', label: 'Bir sonraki hafta hedefi' }
      ],
      examCards: [
        { kicker: 'LGS', title: '8. Sınıf', note: 'MEB takvimine uyumlu LGS denemeleri.' },
        { kicker: 'YKS', title: '12 / Mezun', note: 'TYT ve AYT denemeleri ayrı ayrı düzenlenir.' },
        { kicker: 'Hazırlık', title: '9-10-11', note: 'Seviyeye uygun TYT temel denemeleri yapılır.' },
        { kicker: 'Ortaokul', title: '6 / 7', note: 'Erken sınav alışkanlığı kazandıran denemeler.' }
      ],
      analysisBullets: [
        'Net, yanlış ve boşlar ders/kazanım düzeyinde okunur.',
        'Gelişim çizgisi tek sınavla değil dönem boyunca takip edilir.',
        'Zayıf başlıklar sonraki haftanın çalışma planına bağlanır.'
      ],
      reportSteps: [
        { title: 'Sınav', copy: 'Deneme sınav atmosferinde uygulanır.' },
        { title: 'Analiz', copy: 'Ders ders, kazanım bazında okunur.' },
        { title: 'Rapor', copy: 'Veliye sade ve anlaşılır özet sunulur.' },
        { title: 'Plan', copy: 'Eksikler bir sonraki haftaya bağlanır.' }
      ],
      homeworkCards: [
        { kicker: 'Eksik', title: 'Konu listesi', note: 'Deneme sonrası eksik kazanımlar çıkarılır.' },
        { kicker: 'Plan', title: 'Haftalık ödev', note: 'Eksikler ödev olarak öğrenciye verilir.' },
        { kicker: 'Tekrar', title: 'Hedef test', note: 'Aynı konudan ek pratik yapılır.' },
        { kicker: 'Kontrol', title: 'Yeni deneme', note: 'Gelişim bir sonraki denemede görülür.' }
      ],
      guidanceKicker: 'Sonrası Rehberlik',
      guidanceTitle: 'Deneme sonucu yön bilgisidir.',
      guidanceLead: 'Sonuçlar puan olarak kalmaz; veli ve öğrenci, neyi nasıl çalışacağını net biçimde görür.',
      guidanceBullets: [
        'Puan değil, gelişim eğilimi takip edilir.',
        'Veli sade ve uygulanabilir özet alır.',
        'Plan her hafta güncellenir.'
      ],
      guidanceSteps: [
        { title: 'Sonuç', copy: 'Puan ve net bilgisi okunur.' },
        { title: 'Yorum', copy: 'Hangi başlıklar güçlü, hangileri zayıf görülür.' },
        { title: 'Plan', copy: 'Bir sonraki hafta hedefli açılır.' },
        { title: 'Kontrol', copy: 'Yeni denemede ilerleme izlenir.' }
      ],
      registrationBullets: [
        'Tek deneme veya paket katılım seçenekleri vardır.',
        'Öğrenci kayıt olmadan da deneme deneyebilir.',
        'Analiz ve rapor her katılımcıya sunulur.'
      ],
      registrationMetrics: [
        { value: 'Tek', label: 'Sadece deneme katılımı' },
        { value: 'Paket', label: 'Dönem boyunca ritim' },
        { value: 'Analiz', label: 'Her sınava özel rapor' },
        { value: 'Veli', label: 'Bilgilendirme görüşmeleri' }
      ],
      thanksLine: 'Sınav pratiğini birlikte düzene oturtalım.'
    },
    'yks': {
      ...common,
      title: 'YKS Veli Sunumu',
      shortTitle: 'YKS',
      coverTitle: 'YKS',
      coverMark: 'YKS',
      coverSmall: 'Hazırlık',
      programTitle: 'Hazırlık Sistemi',
      accent: '#00a5c8',
      accentSoft: '#61cfe1',
      courseTitle: 'TYT ve AYT’de çok yönlü destek.',
      courseLead: 'YKS hazırlığında ders anlatımı, deneme analizi, hedef soru ve tercih rehberliği tek bir sistemin parçalarıdır.',
      courseBullets: ['TYT ve AYT dengesi öğrencinin hedefine göre kurulur.', 'Sayısal, eşit ağırlık ve sözel alan ihtiyaçları ayrıştırılır.', 'Deneme sonuçları doğrudan haftalık plana bağlanır.'],
      courses: [
        { name: 'Matematik TYT-AYT', icon: 'M', note: 'Temel, problem ve alan derinliği.' },
        { name: 'Türkçe', icon: 'T', note: 'Paragraf, anlam ve sınav dili.' },
        { name: 'Fizik', icon: 'F', note: 'Kavram, yorum ve işlem.' },
        { name: 'Kimya', icon: 'K', note: 'Konu takibi ve test pratiği.' },
        { name: 'Biyoloji', icon: 'B', note: 'Sistematik tekrar ve yorum.' },
        { name: 'Geometri', icon: 'G', note: 'Şekil okuma ve strateji.' },
        { name: 'Edebiyat / Sosyal', icon: 'S', note: 'Alan ihtiyacına göre destek.' },
        { name: 'Rehberlik', icon: 'R', note: 'Hedef, deneme ve tercih takibi.' }
      ],
      programLead: 'YKS programı öğrencinin alanına, hedef sıralamasına ve mevcut deneme verisine göre esnek biçimde planlanır.',
      programBullets: ['TYT ve AYT dengesi haftalık olarak korunur.', 'Etüt ve soru çözümü zorlanılan başlığa göre açılır.', 'Pazar denemesi ve analiz görüşmesi ritmi güçlendirir.'],
      programClass: '12 / Mezun · Örnek',
      programRows: [
        { day: 'Pazartesi', time: '17:10-20:20', title: 'TYT Matematik', note: 'Problem + temel tekrar' },
        { day: 'Çarşamba', time: '17:10-20:20', title: 'AYT Alan Dersi', note: 'Hedefe göre branş' },
        { day: 'Cuma', time: '17:10-18:20', title: 'Etüt', note: 'Birebir soru çözümü' },
        { day: 'Cumartesi', time: '10:00-13:00', title: 'Paragraf / Geometri', note: 'Süreklilik çalışması' },
        { day: 'Pazar', time: 'Örnek', title: 'YKS Denemesi', note: 'Analiz + hedef güncelleme' }
      ],
      guidanceKicker: 'Tercih Dönemi',
      guidanceTitle: 'Sınavdan sonra tercih süreci başlar.',
      guidanceLead: 'YKS sonrasında hedef, puan, sıralama ve bölüm beklentisi birlikte değerlendirilir; öğrencinin karar süreci profesyonel rehberlikle desteklenir.',
      guidanceBullets: ['Puan ve sıralama birlikte okunur.', 'Bölüm ve üniversite seçenekleri gerçekçi biçimde değerlendirilir.', 'Tercih listesi öğrencinin hedefleriyle uyumlu hazırlanır.'],
      guidanceSteps: [
        { title: 'Sonuç', copy: 'Puan, sıralama ve alan bilgisi okunur.' },
        { title: 'Hedef', copy: 'Öğrencinin bölüm beklentisi netleştirilir.' },
        { title: 'Liste', copy: 'Güvenli ve dengeli tercih aralığı kurulur.' },
        { title: 'Karar', copy: 'Veli ve öğrenci süreci bilinçli tamamlar.' }
      ],
      successCards: yksSuccess
    }
  };

  window.VKM_DECK_CONFIG = configs[window.VKM_DECK_ID];
})();
