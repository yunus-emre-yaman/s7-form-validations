# Form Validations

Ekipçe geliştirdiğiniz projelerden biri epey popüler oldu.
Fakat popülerlik bazı sorunları da beraberinde getirdi. Çok sayıda bot hesap sisteme kayıt olmaya ve maliyetlerinizi arttırmaya başladı.

Bu yüzden kayıt formuna `validation` (doğrulama) eklemeye ve bazı kısıtlamalar eklemeye karar verdiniz.

Eklenecek validation listesi:

- Email geçerli bir email olmalı,
- Şifre en az 4 karakter olmalı,
- Kullanım koşulları kabul edilmeli.

## Amaç

- Yeni kullanıcı kayıt formu için validationlar eklemek ve buna bağlı yönlendirici hata mesajları göstermek.
- Kodlarını `src/LoginForm.jsx` dosyasına yazman bekleniyor. Bu dosyada bazı yönlendirmeler de var.
- Unutma, takıldığın yerlerde terminaldeki test mesajlarında ipuçları bulabilirsin.

## Proje Yönergeleri ve Kontrol Listesi

Yeni state: `errors`

- Form değerlerini saklamak için bir state, başlangıç değerleri ve handleChange fonksiyonu oluşturuldu.
- Sen de, validation hatalarını saklamak için `errors` adında bir state oluştur. Başlangıç değeri olarak `initialErrors` değişkenini kullan.

Validation işlemi

- Bir form elemanı değiştirildiğinde (içine bir şeyler yazıldığında vb) yeni değeri kontrol etmelisin, eğer istenen koşulları sağlamıyorsa `errors` stateinde ilgili bölümü güncelle. Bunu formdaki tüm elemanlar için yap.
- Email değerini kontrol etmek için `validateEmail` fonksiyonunu kullan. Password için `length` özelliğini kullanabilirsin.

Hata mesajları ve stilleri

- Bir form elemanı istenen koşulları sağlamıyorsa, bu durumu kullanıcıya mesajla ve görsel olarak göstermek gerekir.
  - Hata mesajlarını göstermen gereken yerler LoginForm.jsx dosyasında belirtildi.
  - Hata mesajları içeriği `errorMessages` objesinde.
  - Eğer bir form elemanında hata varsa, label elemanına `hasError` classı ekle. İlgili CSS'ler hazırlandı.
- Dikkat: Eğer form elemanında bir hata yoksa `error-message` classına sahip eleman hiç görünmemeli.

Yeni state: `isValid`

- Sayfa ilk açıldığında Gönder butonu disabled olmalı, yani tıklanamamalı.
- Form gönderilmeye uygun şekilde doldurulduysa, `Gönder` butonu aktif olmalı. (Yani disabled olmamalı.)
- Bunu yönetmek için `isValid` adında bir state oluştur ve başlangıç değerini `false` olarak belirle.
- `errors` stateindeki değişimlere göre `isValid` stateini güncelleyerek butonun güncel durumunu kontrol edebilirsin.

## 🚀 Projeye Başlama

### Adım 1: Projeyi Kendi Hesabınıza Kopyalayın

1. Bu sayfanın sağ üst köşesindeki **Fork** butonuna tıklayın
2. Kendi GitHub hesabınızda proje kopyası oluşacak

### Adım 2: Projeyi Bilgisayarınıza İndirin

Görseldeki adımları takip edin ya da terminali kullanabilirsiniz.

```bash
git clone [buraya-kendi-fork-linkinizi-yazın]
cd [proje-klasor-adi]
```

### Adım 3: Gerekli Kurulumları Yapın

Terminal açın ve sırasıyla şu komutları çalıştırın:

```bash
npm install
npm run c2w
```

> **💡 İpucu:** Bu komutlar gerekli paketleri yükler ve test sistemini başlatır.

### Adım 4: Projeyi Çalıştırın ve Browserda Görüntüleyin

Yeni bir terminal tabı açın ve şu komutu çalıştırın:

```bash
npm run dev
```

Bu komut projeyi çalıştıracak ve bir link verecek. Bu linki browserda açın ve yazdıklarınızın çıktısını gözlemleyin.

## 📝 Geliştirme Süreci

### 0. Öğrenci numaranızı `student_id.txt` dosyasına yazın 

### 1. Testleri Takip Edin

- Testlerin çalıştığı trminali açık tutun ve test çıktılarını izleyin
- Başarılı testler ✅, başarısız testler ❌ ile gösterilir

### 2. Adım Adım İlerleyin

- Her küçük ilerleme sonrası değişiklikleri kaydedin
- Testlerin durumunu kontrol edin
- Bir özelliği tamamen bitirdikten sonra commit yapın

### 3. Düzenli Commit Yapın

GitHub Desktop uygulamasını kullanarak ilerlemenizi sıklıkla GitHub'a gönderin.
Ya da terminali kullanabilirsiniz:

```bash
git add .
git commit -m "Anlamlı bir commit mesajı"
git push origin main
```

### Yardım İçin:

1. Terminal hatasını tam olarak okuyun
2. Dosya yollarının doğru olduğunu kontrol edin
3. Değişiklikleri kaydettiğinizden emin olun

## 📋 Çalışma Akışı Özeti

1. ✅ Projeyi fork edin ve clone edin
2. ✅ `npm install` ve `npm run c2w` çalıştırın
3. ✅ `npm run dev` ile projeyi çalıştırın ve size verdiği linki açarak yaptıklarınızı takip edin
4. ✅ Terminal'den test sonuçlarını takip edin
5. ✅ Düzenli olarak commit yapın
6. ✅ İlerleyişinizi GitHub'a push edin

**İyi çalışmalar! 🎨✨**
