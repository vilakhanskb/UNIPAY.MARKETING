# UniPay Marketing & Product Guide

ເວັບສຳລັບສື່ສານດ້ານການຕະຫຼາດ ແລະອະທິບາຍແຕ່ລະໂມດູນຂອງ UniPay Platform. Repo ນີ້ເປັນ static website ແລະບໍ່ມີ Source Code ຂອງລະບົບທຸລະກິດ.

## ໂມດູນທີ່ມີເນື້ອຫາ

- UniPOS
- UniMarket
- ຈັດການຜູ້ໃຊ້
- Wallet
- ລະບົບຮັບຊຳລະ
- ຈັດການລະບົບ

eCapital ແລະ ຄະແນນ/ລາງວັນ ຍັງບໍ່ຖືກນຳມາສະແດງ ຈົນກວ່າການພັດທະນາຈະພ້ອມ.

## ຈຸດເດັ່ນຂອງ Repo

- ໃຊ້ Noto Sans Lao ຜ່ານ Google Fonts
- ຮອງຮັບ Desktop, Tablet ແລະ Mobile
- UI mockup ອີງຕາມ workflow ຈິງ ແຕ່ໃຊ້ຂໍ້ມູນຕົວຢ່າງ
- ບໍ່ມີ Credential, Token, Merchant ID ຫຼືຂໍ້ມູນລູກຄ້າ
- ບໍ່ຕ້ອງ Build; GitHub Pages ສາມາດອ່ານຈາກ Repo ໄດ້ໂດຍກົງ

## ເປີດເບິ່ງໃນເຄື່ອງ

```bash
python3 -m http.server 4173
```

ແລ້ວເປີດ `http://localhost:4173`.

## GitHub Pages

Workflow ຢູ່ `.github/workflows/pages.yml`. ເມື່ອ Push ເຂົ້າ `main`, GitHub Actions ຈະ deploy static site ໃຫ້ GitHub Pages.

ໃນ GitHub Repo ໃຫ້ເຂົ້າ `Settings → Pages` ແລ້ວເລືອກ Source ເປັນ `GitHub Actions`.

## ໂຄງສ້າງ

```text
.
├── index.html
├── assets/
│   ├── css/styles.css
│   └── js/
│       ├── site.js
│       ├── modules.js
│       └── module-page.js
├── modules/
│   ├── unipos/
│   ├── unimarket/
│   ├── users/
│   ├── wallet/
│   ├── payments/
│   └── system/
└── .github/workflows/pages.yml
```

## Content safety

UI ທັງໝົດໃນ Repo ແມ່ນ mockup. ຫ້າມເພີ່ມ Screenshot ທີ່ມີຂໍ້ມູນຈິງ, Credential, Token, Merchant/Order ID ຫຼືຂໍ້ມູນລູກຄ້າເຂົ້າ Repo ສາທາລະນະ.
