import { useState, useMemo } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/024f2079-2374-422f-91e7-ed1b2b80da65/files/65c8a97b-069e-4e40-a8d9-51e3a790d297.jpg";
const SMALL_APPLIANCES_IMG =
  "https://cdn.poehali.dev/projects/024f2079-2374-422f-91e7-ed1b2b80da65/files/99eff082-b770-4994-b957-d4ca091e8f43.jpg";

const NAV_LINKS = [
  { label: "Адрес магазина", icon: "MapPin", href: "#address" },
  { label: "Доставка", icon: "Truck", href: "#delivery" },
  { label: "Сервисные центры", icon: "Wrench", href: "#service" },
  { label: "Оплата", icon: "CreditCard", href: "#payment" },
];

const CATEGORIES = [
  { name: "Холодильники", icon: "Thermometer", count: 124 },
  { name: "Стиральные машины", icon: "Wind", count: 98 },
  { name: "Телевизоры", icon: "Monitor", count: 210 },
  { name: "Пылесосы", icon: "Zap", count: 76 },
  { name: "Кухонная техника", icon: "UtensilsCrossed", count: 189 },
  { name: "Климат", icon: "Waves", count: 55 },
  { name: "Мелкая техника", icon: "Coffee", count: 312 },
  { name: "Встраиваемая", icon: "LayoutGrid", count: 143 },
];

const PRODUCTS = [
  { id: "RF-2240", name: "Холодильник Samsung RB38T", category: "Холодильники", price: 45990, rating: 4.8, specs: "No Frost, 385 л, А++" },
  { id: "WM-1190", name: "Стиральная машина LG F4V5RG0W", category: "Стиральные машины", price: 52490, rating: 4.9, specs: "AI DD, 9 кг, 1400 об/мин" },
  { id: "TV-8850", name: "Телевизор Sony 55X90L", category: "Телевизоры", price: 79900, rating: 4.7, specs: "55\", 4K, Google TV" },
  { id: "VC-3310", name: "Пылесос Dyson V15 Detect", category: "Пылесосы", price: 54900, rating: 4.9, specs: "Беспроводной, 60 мин, лазер" },
  { id: "MV-5510", name: "Микроволновка Bosch BFL523MW3", category: "Кухонная техника", price: 12490, rating: 4.6, specs: "800 Вт, 20 л, Solo" },
  { id: "AC-2270", name: "Кондиционер Mitsubishi MSZ-LN25VG", category: "Климат", price: 68900, rating: 4.8, specs: "9000 BTU, инвертор, Wi-Fi" },
  { id: "CF-1120", name: "Кофемашина DeLonghi Magnifica", category: "Мелкая техника", price: 38900, rating: 4.7, specs: "Зерновая, 1450 Вт, авто" },
  { id: "DW-4490", name: "Посудомоечная машина Bosch SMS46II10E", category: "Встраиваемая", price: 34900, rating: 4.6, specs: "12 комплектов, A++, 60 см" },
  { id: "RF-1150", name: "Холодильник Bosch KGN39IJ22R", category: "Холодильники", price: 62990, rating: 4.7, specs: "No Frost, 366 л, А+, белый" },
  { id: "KT-7730", name: "Чайник SMEG KLF04PBEU", category: "Мелкая техника", price: 9490, rating: 4.5, specs: "2400 Вт, 1.7 л, ретро" },
  { id: "WM-2250", name: "Стиральная машина Bosch WAN28271BY", category: "Стиральные машины", price: 39990, rating: 4.6, specs: "А+++, 8 кг, 1400 об/мин" },
  { id: "TV-4420", name: "Телевизор LG OLED55C3RLA", category: "Телевизоры", price: 99990, rating: 5.0, specs: "55\", OLED, 4K, 120 Гц" },
];

const FEATURES = [
  { icon: "Truck", title: "Доставка по городу", desc: "Бесплатно от 15 000 ₽, за 1–2 дня" },
  { icon: "Wrench", title: "Сервисные центры", desc: "3 центра в городе, гарантийный ремонт" },
  { icon: "CreditCard", title: "Рассрочка 0%", desc: "До 24 месяцев без переплат" },
  { icon: "ShieldCheck", title: "Гарантия", desc: "Официальная гарантия производителя" },
];

export default function Index() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return PRODUCTS.filter((p) => {
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.specs.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      const matchCat = !activeCategory || p.category === activeCategory;
      return matchQuery && matchCat;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-[#f7faf7] font-golos">
      {/* TOP INFO BAR */}
      <div className="bg-lime-700 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Icon name="MapPin" size={14} />
            <span>ул. Кирова, 45 — Пн–Вс 9:00–21:00</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+79991234567" className="flex items-center gap-1.5 hover:text-lime-200 transition-colors">
              <Icon name="Phone" size={14} />
              <span>+7 (999) 123-45-67</span>
            </a>
            <span className="text-lime-300">|</span>
            <a href="mailto:info@ofeliamag.ru" className="hover:text-lime-200 transition-colors">
              info@ofeliamag.ru
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-lime-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4 gap-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-lime-600 rounded-xl flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-lime-700 leading-tight">Офелия</div>
                <div className="text-xs text-lime-500 leading-tight font-medium">на Кирова</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-lime-700 hover:bg-lime-50 transition-all"
                >
                  <Icon name={link.icon} size={15} />
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button className="hidden md:flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
                <Icon name="ShoppingCart" size={16} />
                Корзина
              </button>
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-lime-50 text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-lime-100 py-3 animate-fade-in">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-2 py-2.5 text-sm font-medium text-gray-700 hover:text-lime-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon name={link.icon} size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="h-[420px] md:h-[500px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-lime-900/85 via-lime-800/55 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-lime-400/25 border border-lime-400/40 text-lime-100 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
                <Icon name="Star" size={12} />
                Официальный дилер 25+ брендов
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                Бытовая техника<br />
                <span className="text-lime-300">для вашего дома</span>
              </h1>
              <p className="text-lime-100 text-lg mb-6">
                Более 800 позиций в наличии. Доставка по городу, рассрочка 0%, гарантийный сервис.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button className="bg-lime-400 hover:bg-lime-300 text-lime-900 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105">
                  Смотреть каталог
                </button>
                <button className="border-2 border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-all backdrop-blur-sm">
                  Узнать о доставке
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES BAR */}
      <section className="bg-lime-600 text-white py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-lime-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={f.icon} size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold">{f.title}</div>
                  <div className="text-xs text-lime-200">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Найти технику</h2>
          <p className="text-gray-500 text-sm">Поиск по названию, артикулу или характеристикам</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Например: Samsung, RF-2240, No Frost, 55 дюймов..."
              className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-lime-200 focus:border-lime-500 focus:outline-none text-gray-800 bg-white shadow-sm text-base transition-colors placeholder:text-gray-400"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Icon name="X" size={18} />
              </button>
            )}
          </div>
          {search && (
            <div className="mt-2 text-sm text-gray-500 text-center animate-fade-in">
              Найдено: <span className="font-semibold text-lime-700">{filtered.length}</span> товаров
            </div>
          )}
        </div>
      </section>

      {/* CATEGORIES */}
      {!search && (
        <section className="max-w-7xl mx-auto px-4 pb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Категории</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all hover:scale-105 text-center ${
                  activeCategory === cat.name
                    ? "border-lime-500 bg-lime-600 text-white shadow-md"
                    : "border-lime-200 bg-white hover:border-lime-400 hover:bg-lime-50 text-gray-700"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activeCategory === cat.name ? "bg-lime-500" : "bg-lime-100"
                }`}>
                  <Icon name={cat.icon} size={20} className={activeCategory === cat.name ? "text-white" : "text-lime-600"} />
                </div>
                <span className="text-xs font-semibold leading-tight">{cat.name}</span>
                <span className={`text-xs ${activeCategory === cat.name ? "text-lime-200" : "text-gray-400"}`}>
                  {cat.count} шт.
                </span>
              </button>
            ))}
          </div>
          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              className="mt-3 text-sm text-lime-600 hover:text-lime-700 flex items-center gap-1"
            >
              <Icon name="X" size={14} />
              Сбросить фильтр
            </button>
          )}
        </section>
      )}

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-800">
            {activeCategory || (search ? "Результаты поиска" : "Популярные товары")}
          </h2>
          <span className="text-sm text-gray-400">{filtered.length} товаров</span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 animate-fade-in">
            <Icon name="SearchX" size={48} className="mx-auto mb-3 text-lime-200" />
            <p className="text-lg font-medium">Ничего не найдено</p>
            <p className="text-sm mt-1">Попробуйте изменить запрос или сбросить фильтры</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory(null); }}
              className="mt-4 text-lime-600 hover:text-lime-700 font-semibold text-sm"
            >
              Сбросить всё
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-lime-100 shadow-sm hover:shadow-lg hover:border-lime-300 transition-all group cursor-pointer"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="h-44 bg-gradient-to-br from-lime-50 to-lime-100 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                  <img
                    src={SMALL_APPLIANCES_IMG}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-lime-700 text-xs font-bold px-2 py-1 rounded-lg border border-lime-200">
                      {product.id}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center hover:bg-lime-50 transition-colors">
                      <Icon name="Heart" size={15} className="text-gray-400" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-lime-600 font-medium mb-1">{product.category}</div>
                  <h3 className="font-bold text-gray-800 text-sm leading-tight mb-2 group-hover:text-lime-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">{product.specs}</p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Icon
                        key={j}
                        name="Star"
                        size={12}
                        className={j < Math.floor(product.rating) ? "text-amber-400" : "text-gray-200"}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-lime-700">
                      {product.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <button className="bg-lime-600 hover:bg-lime-700 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all hover:scale-105 flex items-center gap-1">
                      <Icon name="ShoppingCart" size={13} />
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* INFO SECTIONS */}
      <section className="bg-white border-t border-lime-100 py-14">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div id="address" className="flex flex-col gap-3">
            <div className="w-11 h-11 bg-lime-100 rounded-xl flex items-center justify-center">
              <Icon name="MapPin" size={22} className="text-lime-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Адрес магазина</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              г. Ваш город, ул. Кирова, 45<br />
              Рядом с ТЦ «Центральный»<br />
              <span className="font-semibold text-lime-600">Пн–Вс: 9:00 — 21:00</span>
            </p>
            <a href="#" className="inline-flex items-center gap-1.5 text-lime-600 hover:text-lime-700 text-sm font-semibold mt-1">
              <Icon name="Map" size={15} />
              Посмотреть на карте
            </a>
          </div>

          <div id="delivery" className="flex flex-col gap-3">
            <div className="w-11 h-11 bg-lime-100 rounded-xl flex items-center justify-center">
              <Icon name="Truck" size={22} className="text-lime-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Доставка</h3>
            <ul className="text-gray-600 text-sm space-y-1.5">
              {[
                "Бесплатно при заказе от 15 000 ₽",
                "Доставка в день заказа (до 18:00)",
                "Подъём на этаж и подключение",
                "Самовывоз бесплатно",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={15} className="text-lime-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="service" className="flex flex-col gap-3">
            <div className="w-11 h-11 bg-lime-100 rounded-xl flex items-center justify-center">
              <Icon name="Wrench" size={22} className="text-lime-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Сервисные центры</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              {[
                { name: "Центральный", addr: "ул. Кирова, 45 (в магазине)" },
                { name: "Северный", addr: "пр. Ленина, 112" },
                { name: "Южный", addr: "ул. Садовая, 78" },
              ].map((sc) => (
                <li key={sc.name} className="flex items-start gap-2">
                  <Icon name="Building2" size={14} className="text-lime-500 mt-0.5 flex-shrink-0" />
                  <span><span className="font-semibold">{sc.name}:</span> {sc.addr}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section id="payment" className="bg-lime-50 border-t border-lime-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Способы оплаты</h2>
          <p className="text-gray-500 text-sm mb-8">Выбирайте удобный для вас способ</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: "CreditCard", label: "Банковская карта", desc: "Visa, MasterCard, МИР" },
              { icon: "Smartphone", label: "СБП", desc: "Оплата по QR-коду" },
              { icon: "Landmark", label: "Рассрочка 0%", desc: "До 24 месяцев" },
              { icon: "Banknote", label: "Наличные", desc: "В магазине и при доставке" },
            ].map((p) => (
              <div key={p.label} className="bg-white rounded-2xl border border-lime-200 p-5 flex flex-col items-center gap-2 hover:border-lime-400 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center">
                  <Icon name={p.icon} size={22} className="text-lime-600" />
                </div>
                <span className="font-bold text-gray-800 text-sm">{p.label}</span>
                <span className="text-xs text-gray-500">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-lime-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-lime-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={16} />
            </div>
            <div>
              <div className="font-bold text-lime-300">Офелия на Кирова</div>
              <div className="text-xs text-lime-500">Бытовая техника</div>
            </div>
          </div>
          <div className="text-sm text-lime-400 text-center">
            © 2024 Офелия на Кирова. Все права защищены.
          </div>
          <a href="tel:+79991234567" className="text-lime-300 hover:text-white text-sm transition-colors">
            +7 (999) 123-45-67
          </a>
        </div>
      </footer>
    </div>
  );
}
