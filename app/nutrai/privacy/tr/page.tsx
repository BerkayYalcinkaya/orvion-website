"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/ui/header"

const MotionCard = motion(Card)

export default function NutraiGizlilikSayfasi() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Gizlilik Politikası */}
        <section id="policy" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Gizlilik Politikası
                </h2>
                <p className="text-gray-600">
                  Son güncelleme: {new Date().toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              <MotionCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
                <CardHeader>
                  <CardTitle className="text-2xl">1. Topladığımız Bilgiler</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Kişisel Bilgiler</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>İsim ve iletişim bilgileri</li>
                      <li>Profil bilgileri ve tercihleri</li>
                      <li>Paylaşmayı seçtiğiniz sağlık ve beslenme verileri</li>
                      <li>Cihaz bilgileri ve kullanım istatistikleri</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Otomatik Olarak Toplanan Bilgiler</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Cihaz tanımlayıcıları ve IP adresleri</li>
                      <li>Uygulama kullanım desenleri ve etkileşimler</li>
                      <li>Çökme raporları ve performans verileri</li>
                      <li>Konum verileri (izin vermeniz halinde)</li>
                    </ul>
                  </div>
                </CardContent>
              </MotionCard>

              <MotionCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                <CardHeader>
                  <CardTitle className="text-2xl">2. Bilgilerinizi Nasıl Kullanıyoruz</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Kişiselleştirilmiş beslenme önerileri ve planları sağlamak</li>
                    <li>Uygulama işlevselliğini ve kullanıcı deneyimini geliştirmek</li>
                    <li>Önemli güncellemeleri ve bildirimleri iletmek</li>
                    <li>Hizmetlerimizi geliştirmek için kullanım desenlerini analiz etmek</li>
                    <li>Güvenliği sağlamak ve dolandırıcılığı önlemek</li>
                    <li>Yasal yükümlülüklerimize uymak</li>
                  </ul>
                </CardContent>
              </MotionCard>

              <MotionCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
                <CardHeader>
                  <CardTitle className="text-2xl">3. Bilgi Paylaşımı</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Kişisel bilgilerinizi üçüncü taraflara satmıyor, takas etmiyor veya kiralamıyoruz. Bilgilerinizi yalnızca aşağıdaki durumlarda paylaşabiliriz:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Açık rızanızla</li>
                    <li>Yasal gerekliliklere uymak için</li>
                    <li>Haklarımızı ve güvenliğimizi korumak için</li>
                    <li>Uygulama operasyonlarına yardımcı olan güvenilir hizmet sağlayıcılarla</li>
                    <li>Bir iş devri veya birleşme kapsamında</li>
                  </ul>
                </CardContent>
              </MotionCard>

              <MotionCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                <CardHeader>
                  <CardTitle className="text-2xl">4. Veri Güvenliği</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Kişisel bilgilerinizi korumak için uygun teknik ve organizasyonel önlemleri uygularız:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Hassas veriler için uçtan uca şifreleme</li>
                    <li>Düzenli güvenlik denetimleri ve güncellemeler</li>
                    <li>Güvenli veri depolama ve iletim</li>
                    <li>Erişim kontrolü ve kimlik doğrulama önlemleri</li>
                    <li>Çalışanlar için veri koruma eğitimleri</li>
                  </ul>
                </CardContent>
              </MotionCard>

              <MotionCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
                <CardHeader>
                  <CardTitle className="text-2xl">5. Haklarınız</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Erişim:</strong> Kişisel verilerinizin bir kopyasını talep etme</li>
                    <li><strong>Düzeltme:</strong> Hatalı veya eksik verileri düzeltme</li>
                    <li><strong>Silme:</strong> Kişisel verilerinizin silinmesini talep etme</li>
                    <li><strong>Taşınabilirlik:</strong> Verilerinizi yapılandırılmış bir formatta alma</li>
                    <li><strong>İtiraz:</strong> Belirli işleme faaliyetlerine itiraz etme</li>
                    <li><strong>Geri Çekme:</strong> Onayı dilediğiniz zaman geri çekme</li>
                  </ul>
                </CardContent>
              </MotionCard>

              <MotionCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}>
                <CardHeader>
                  <CardTitle className="text-2xl">6. Veri Saklama</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Kişisel bilgilerinizi yalnızca aşağıdaki amaçlar için gerekli olduğu sürece saklarız:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Hizmetlerimizi size sunmak</li>
                    <li>Yasal yükümlülüklere uymak</li>
                    <li>Anlaşmazlıkları çözmek ve sözleşmeleri uygulamak</li>
                    <li>Hizmetlerimizi geliştirmek</li>
                  </ul>
                  <p className="text-gray-600 mt-4">Bilgilerinize artık ihtiyaç duymadığımızda, verileri güvenli bir şekilde sileceğiz veya anonimleştireceğiz.</p>
                </CardContent>
              </MotionCard>

              <MotionCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.7 }}>
                <CardHeader>
                  <CardTitle className="text-2xl">7. Çocukların Gizliliği</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Nutrai, 13 yaş altındaki çocuklar için tasarlanmamıştır. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz. Bir ebeveyn veya veli iseniz ve çocuğunuzun bize kişisel bilgi verdiğini düşünüyorsanız, lütfen hemen bizimle iletişime geçin.</p>
                </CardContent>
              </MotionCard>

              <MotionCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }}>
                <CardHeader>
                  <CardTitle className="text-2xl">8. Bu Politikadaki Değişiklikler</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler hakkında sizi şu yollarla bilgilendireceğiz:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Uygulamada güncellenmiş politikayı yayımlayarak</li>
                    <li>Size e-posta bildirimi göndererek</li>
                    <li>Uygulama içinde belirgin bir duyuru göstererek</li>
                  </ul>
                  <p className="text-gray-600 mt-4">Herhangi bir değişiklikten sonra Nutrai'yi kullanmaya devam etmeniz, güncellenen politikayı kabul ettiğiniz anlamına gelir.</p>
                </CardContent>
              </MotionCard>

              <MotionCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.9 }}>
                <CardHeader>
                  <CardTitle className="text-2xl">9. Bize Ulaşın</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Bu Gizlilik Politikası veya veri işleme uygulamalarımız hakkında sorularınız varsa, bizimle iletişime geçin:</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">contact@orviondigital.co</span>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Orvion Digital</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/nutrai/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2025 Orvion Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
