const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const mainSnailMain = $('.main__snail--main')

const menu = {
  sale: 0,
  menu: [
    {
      img: './access/images/oc_vit.jpg',
      name: 'Ốc vặn',
      price: '20000',
      donvi: "dia"
    },
    {
      img: './access/images/oc_nhoi.jpg',
      name: 'Ốc nhồi',
      price: '140000',
      donvi: ""
    },
    {
      img: 'https://media.cooky.vn/recipe/g2/16473/s800x500/recipe16473-635874953141267175.jpg',
      name: 'Trứng cút lộn (15k/10 quả)',
      price: '15000',
      donvi: "dia"
    },
    {
      img: './access/images/hoaqua.jpg',
      name: 'Hoa quả',
      price: '20000',
      donvi: "dia"
    },
    {
      img: 'https://iwater.vn/Image/Picture/Nuoc_ngot/sting%20chai%20330ml.png',
      name: 'Sting',
      price: '10000',
      donvi: "chai"
    },
    {
      img: 'https://product.hstatic.net/1000379753/product/coca_cola_b74a8f1c98e549babdac5369c20c0741_master.png',
      name: 'Cocacola',
      price: '10000',
      donvi: "lon"
    },
    {
      img: 'https://cdn-images.kiotviet.vn/kiddymart/2400061679cc4e7995bf8c3bb32ebc86.png',
      name: 'Nước cam',
      price: '10000',
      donvi: "lon"
    },
    {
      img: 'https://nuockhoangquanghanh.com/wp-content/uploads/2019/04/tranh-muoi-ngon-1.png',
      name: 'Chanh muối',
      price: '10000',
      donvi: "chai"
    },
    {
      img: 'https://product.hstatic.net/1000379753/product/bo-huc-thai_f7d670315a594d94bc3a80ff9dfec841_master.png',
      name: 'Bò Húc',
      price: '15000',
      donvi: "lon"
    },
    {
      img: 'https://cf.shopee.vn/file/212cd30e6faa03ebc68f8c78fb531911',
      name: 'Bim Bim',
      price: '10000',
      donvi: "goi"
    },
    {
      img: 'https://vinamartph.com/wp-content/uploads/2021/08/ewrdfg45.jpg',
      name: 'Thuốc lá Thăng Long',
      price: '10000',
      donvi: "bao"
    },
    {
      img: 'https://www.sieuthianhduong.com/images/product/theme-1597220177-z2021639088384_e4aa0e3b438a679614d6db8f5b79c34b.jpg',
      name: 'Thuốc lá VINA',
      price: '20000',
      donvi: "bao"
    }
  ],
  priceSale: function () {
    const _this = this
    const html = this.menu.map(trung => {
      const sale = (trung.price * _this.sale) / 100
      if (_this.sale > 0) {
        return `
      <div class="block">
            <div class="block__img">
              <img src="${trung.img}" />
            </div>
            <div class="block__name">
              <p>${trung.name}</p>
            </div>
            <div class="block__price">
              <div class="gia sale">
                <p>${trung.price}</p>
              </div>
              <div class="donvi ${trung.donvi}"></div>
              <div class="sale">
                <div class="sale__gia">
                  <p>${sale}</p>
                </div>
                <div class="donvi ${trung.donvi}"></div>
              </div>
            </div>
          </div>
      `
      } else {
        return `
          <div class="block">
                <div class="block__img">
                  <img src="${trung.img}" />
                </div>
                <div class="block__name">
                  <p>${trung.name}</p>
                </div>
                <div class="block__price">
                  <div class="gia">
                    <p>${trung.price}</p>
                  </div>
                  <div class="donvi ${trung.donvi}"></div>
                </div>
              </div>
          `
      }
    })
    mainSnailMain.innerHTML = html.join('')
  },
  start: function () {
    this.priceSale()
    console.log("Trung");
  }
}
menu.start()