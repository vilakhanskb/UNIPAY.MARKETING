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
- ໃຊ້ພາບ UI ຈາກ UniPay Development Portal ຈິງ; ບໍ່ໃຊ້ UI mockup
- ຈັດເນື້ອຫາແບບ Pitch: ບັນຫາ, ຄຸນຄ່າ, ຄວາມສາມາດ, Workflow, ຜູ້ໃຊ້ເປົ້າໝາຍ ແລະຜົນລັບ
- ບໍ່ມີ Credential, Token, Password ຫຼືລາຍຊື່ລູກຄ້າໃນ Repo
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
│   ├── images/portal/
│   └── js/
│       ├── site.js
│       ├── modules.js
│       ├── modules-detail.js
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

ພາບ Screenshot ໃນ `assets/images/portal/` ມາຈາກ Development Portal ແລະອາດສະແດງຄ່າສະຫຼຸບ, ວັນທີ, Merchant ID ຫຼືຊື່ Service ຕາມສະຖານະໃນເວລາບັນທຶກ. ທຸກຄັ້ງກ່ອນ Deploy ຄວນກວດວ່າບໍ່ມີ Credential, Token, Password, ລາຍຊື່ລູກຄ້າ ຫຼືຂໍ້ມູນສ່ວນບຸກຄົນ.
