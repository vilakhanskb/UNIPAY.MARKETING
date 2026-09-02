(() => {
  const modules = window.UNIPAY_MODULES;
  if (!modules) return;

  const details = {
    unipos: {
      proof: 'UI ຈິງຂອງ UniPOS Backoffice ສະແດງຍອດຂາຍ, ອໍເດີ, ສິນຄ້າທີ່ຂາຍ ແລະສຸຂະພາບການດຳເນີນງານໃນພາບດຽວ.',
      screenshots: [
        { src: 'unipos-overview.png', title: 'ພາບລວມຍອດຂາຍ', caption: 'ກັ່ນຕອງຕາມຮ້ານ, ສາຂາ ແລະຊ່ວງເວລາ ພ້ອມ KPI ສຳຄັນສຳລັບຜູ້ບໍລິຫານ.' },
        { src: 'unipos-stock.png', title: 'ຄວບຄຸມສະຕ໋ອກສາຂາ', caption: 'ເຫັນສະຕ໋ອກພ້ອມຂາຍ, ຕ້ອງກວດ, ກຳລັງໂອນ ແລະການນັບສະຕ໋ອກ.' }
      ],
      problems: [
        ['ຍອດຂາຍແຍກຢູ່ຫຼາຍບ່ອນ', 'ເຈົ້າຂອງຮ້ານຕ້ອງລວບລວມເງິນສົດ, QR, ອໍເດີ ແລະສະຕ໋ອກດ້ວຍມື.'],
        ['ບໍ່ຮູ້ສະຕ໋ອກຈິງຂອງແຕ່ລະສາຂາ', 'ສິນຄ້າໝົດໂດຍບໍ່ຮູ້ຕົວ ຫຼືມີສິນຄ້າຄ້າງສະຕ໋ອກເກີນຄວາມຕ້ອງການ.'],
        ['ການຂະຫຍາຍສາຂາເຮັດໃຫ້ຄວບຄຸມຍາກ', 'ບົດບາດພະນັກງານ, ລາຄາ, Catalog ແລະການສະຫຼຸບຍອດບໍ່ເປັນມາດຕະຖານ.']
      ],
      capabilityGroups: [
        { title: 'ເປີດໃຊ້ງານ ແລະຄວບຄຸມຮ້ານ', items: ['ພາບລວມການຂາຍ', 'ຈັດການຮ້ານຄ້າ', 'ຄຳຂໍບົດບາດ', 'ພະນັກງານ ແລະສິດ', 'Activation Wizard', 'ຈັດການສາຂາ'] },
        { title: 'ຂາຍ, Catalog ແລະສະຕ໋ອກ', items: ['ອໍເດີ POS', 'ລູກຄ້າ POS', 'Catalog Metadata', 'ສິນຄ້າສູນກາງ', 'ຕົວເລືອກສິນຄ້າ', 'Merchant Assortment', 'ສະຕ໋ອກຮ້ານ', 'ສະຕ໋ອກສາຂາ'] },
        { title: 'ວິເຄາະ ແລະກຳກັບ', items: ['Reports Center', 'ການຕັ້ງຄ່າອ້າງອີງ', 'Policy Evidence', 'Short Links', 'Batch Operations', 'Exports ແລະຫຼັກຖານ'] }
      ],
      audiences: [['ເຈົ້າຂອງຮ້ານ', 'ເຫັນຍອດຂາຍ, ກຳໄລ ແລະສິນຄ້າຂາຍດີ.'], ['ຜູ້ຈັດການສາຂາ', 'ຈັດການ Catalog, ສະຕ໋ອກ, ສາຂາ ແລະຕິດຕາມຄຳສັ່ງຊື້.'], ['ພະນັກງານຂາຍ', 'ຂາຍ ແລະຮັບຊຳລະໄດ້ໄວດ້ວຍ Smartphone.']],
      outcomes: ['ການຂາຍກາຍເປັນຂໍ້ມູນທັນທີ', 'ສະຕ໋ອກຖືກຄວບຄຸມຕາມສາຂາ', 'ຫຼຸດວຽກສະຫຼຸບຍອດຊ້ຳຊ້ອນ', 'ພ້ອມຂະຫຍາຍຈາກ 1 ໄປຫຼາຍສາຂາ']
    },
    unimarket: {
      proof: 'ພາບລວມການຄ້າລວມມູນຄ່າຄຳສັ່ງຊື້, ການຈັດສົ່ງ, ສິນຄ້າ ແລະສັນຍານທີ່ຕ້ອງກວດໃນໜ້າດຽວ.',
      screenshots: [{ src: 'unimarket-overview.png', title: 'ພາບລວມການຄ້າ', caption: 'Dashboard ສຳລັບກວດອໍເດີ, ມູນຄ່າ, ການຈັດສົ່ງ, ຮ້ານ ແລະສິນຄ້າທີ່ເຄື່ອນໄຫວ.' }],
      problems: [
        ['ອໍເດີຜ່ານຫຼາຍຊ່ອງທາງ', 'ຄຳສັ່ງຊື້, ການຢືນຢັນ ແລະການຈັດສົ່ງບໍ່ໄດ້ຢູ່ໃນ workflow ດຽວ.'],
        ['Catalog ບໍ່ກົງກັນ', 'ຊື່ສິນຄ້າ, ລາຄາ ແລະ Assortment ຂອງແຕ່ລະຮ້ານບໍ່ສອດຄ່ອງ.'],
        ['ກວດການຮັບສິນຄ້າຍາກ', 'ຈຳນວນທີ່ສັ່ງ, ສົ່ງ, ຮັບຈິງ ແລະເສຍຫາຍຂາດຫຼັກຖານຮ່ວມ.']
      ],
      capabilityGroups: [
        { title: 'ເຄືອຂ່າຍຮ້ານ ແລະ Catalog', items: ['ພາບລວມ', 'ຮ້ານຄ້າ', 'Activation Wizard', 'Catalog Metadata', 'ສິນຄ້າສູນກາງ', 'Merchant Assortment', 'ສາຂາ', 'Shops ແລະ Slides'] },
        { title: 'ອໍເດີ ແລະ Fulfilment', items: ['ຈັດການອໍເດີ', 'Reconciliation', 'Auto Cancel', 'Support Diagnostics', 'Merchant Stock', 'Branch Stock', 'Reviews'] },
        { title: 'ການເຕີບໂຕ ແລະລາຍງານ', items: ['Platform Reports', 'Observability', 'Priority Fees', 'Dealers', 'Salesmen', 'ວິເຄາະຮ້ານ ແລະສິນຄ້າ'] }
      ],
      audiences: [['Distributor', 'ຄວບຄຸມ Catalog, ອໍເດີ ແລະການຈັດສົ່ງ.'], ['Dealer / Salesman', 'ເຫັນຮ້ານ, ພື້ນທີ່ ແລະວຽກທີ່ຕ້ອງຕິດຕາມ.'], ['ຮ້ານຄ້າ', 'ສັ່ງສິນຄ້າ ແລະຮັບຮູ້ສະຖານະໄດ້ຊັດເຈນ.']],
      outcomes: ['ອໍເດີທັງໝົດຢູ່ໃນ workflow ດຽວ', 'ລົດຄວາມຄາດເຄື່ອນຂອງ Catalog', 'ຮູ້ສະຖານະ Fulfilment ແລະ Settlement', 'ຂະຫຍາຍເຄືອຂ່າຍ Dealer ໄດ້ມີລະບົບ']
    },
    users: {
      proof: 'ໜ້າສະຫຼຸບສິດ ແລະເນື້ອຫາຊ່ວຍໃຫ້ Admin ເຫັນບັນຊີ, ຂອບເຂດສິດ ແລະລາຍການທີ່ຕ້ອງກວດ.',
      screenshots: [{ src: 'users-overview.png', title: 'ການດຳເນີນງານເນື້ອຫາ ແລະສິດ', caption: 'ສະຫຼຸບ Lifecycle ຂອງເນື້ອຫາ, ຜູ້ໃຊ້, ຂອບເຂດສິດ ແລະສັນຍານ Access reconciliation.' }],
      problems: [['ສິດຫຼາຍເກີນໜ້າວຽກ', 'ຜູ້ໃຊ້ອາດເຫັນ ຫຼືດຳເນີນການເກີນຂອບເຂດທີ່ຮັບຜິດຊອບ.'], ['ບັນຊີ ແລະຂອບເຂດບໍ່ກົງກັນ', 'ການປ່ຽນຕຳແໜ່ງ ຫຼືສາຂາອາດປ່ອຍສິດເກົ່າຄ້າງໄວ້.'], ['ເນື້ອຫາບໍ່ມີ Lifecycle', 'Banner, Blog ແລະ Shortcut ຂາດຂັ້ນຕອນຮ່າງ, ກວດ ແລະເຜີຍແຜ່.']],
      capabilityGroups: [{ title: 'Content Operations', items: ['Banners', 'Blog Posts', 'Comments', 'Shortcuts', 'Draft / Schedule / Publish', 'Revision tracking'] }, { title: 'Identity & Access', items: ['Access Management', 'ບົດບາດ', 'Merchant scope', 'Approval workflow', 'Access reconciliation', 'ຖອນສິດ'] }, { title: 'Governance', items: ['Audit trail', 'ລາຍການຕ້ອງກວດ', 'Least privilege', 'ຫຼັກຖານການອະນຸມັດ'] }],
      audiences: [['System Admin', 'ກຳນົດບົດບາດ ແລະກວດຄວາມສອດຄ່ອງ.'], ['Content Team', 'ຈັດການເນື້ອຫາຕາມ Lifecycle ທີ່ຊັດເຈນ.'], ['Auditor', 'ກວດຜູ້ດຳເນີນການ, ເວລາ ແລະການປ່ຽນແປງ.']],
      outcomes: ['ສິດກົງກັບໜ້າວຽກ', 'ເນື້ອຫາມີຂັ້ນຕອນກວດກ່ອນເຜີຍແຜ່', 'ກວດຄືນການປ່ຽນແປງໄດ້', 'ຫຼຸດຄວາມສ່ຽງຈາກບັນຊີ ແລະສິດຄ້າງ']
    },
    wallet: {
      proof: 'Wallet Overview ສະແດງຍອດຄົງເຫຼືອ, ການເຄື່ອນໄຫວ, ເຫດການຜິດປົກກະຕິ ແລະຮອບການກວດສອບ.',
      screenshots: [{ src: 'wallet-overview.png', title: 'ພາບລວມ Wallet', caption: 'ສະຫຼຸບ Balance, ການໄຫຼເຂົ້າ-ອອກ, ຈຳນວນທຸລະກຳ ແລະສັນຍານສຳລັບການກວດສອບ.' }],
      problems: [['ການກວດ KYC ແຍກຈາກບັນຊີ', 'ທີມງານຕ້ອງສະຫຼັບຫຼາຍລະບົບເພື່ອເຫັນຕົວຕົນ ແລະສະຖານະ Wallet.'], ['ຄົ້ນຫາສາເຫດທຸລະກຳຊ້າ', 'Transaction, Counterparty ແລະ Ledger ບໍ່ມີບໍລິບົດຮ່ວມ.'], ['ການສະຫຼຸບຍອດຂາດຫຼັກຖານ', 'ຝ່າຍ Support, Operations ແລະ Audit ເຫັນຂໍ້ມູນຄົນລະຊຸດ.']],
      capabilityGroups: [{ title: 'Customer & KYC', items: ['Wallet Overview', 'KYC Review', 'Customer Investigation', 'Profile context', 'Counterparty context'] }, { title: 'Money Movement', items: ['Transactions', 'Wallet Balance', 'Latest Transfers', 'Income Summary', 'Expense Summary'] }, { title: 'Control & Evidence', items: ['Affiliate Settings', 'Wallet Audit', 'ເຫດການຜິດປົກກະຕິ', 'Ledger evidence', 'ການກັ່ນຕອງຕາມຊ່ວງເວລາ'] }],
      audiences: [['KYC Operations', 'ກວດຫຼັກຖານ ແລະບັນທຶກຜົນການຕັດສິນໃຈ.'], ['Customer Support', 'ເຫັນບໍລິບົດລູກຄ້າ ແລະທຸລະກຳໃນຈຸດດຽວ.'], ['Finance / Audit', 'ກວດ Balance, Ledger, Income ແລະ Expense.']],
      outcomes: ['KYC ແລະ Wallet ເຊື່ອມໃນບໍລິບົດດຽວ', 'Support ຄົ້ນສາເຫດໄດ້ໄວຂຶ້ນ', 'Money movement ກວດຄືນໄດ້', 'Operations ແລະ Audit ໃຊ້ຫຼັກຖານຊຸດດຽວ']
    },
    payments: {
      proof: 'ຄິວວຽກທຸລະກຳການຊຳລະຊ່ວຍໃຫ້ທີມ Operations ຄົ້ນຫາ, ກອງຕາມສະຖານະ ແລະກວດຕິດຕາມ Transaction ໄດ້ຈາກໜ້າວຽກດຽວ.',
      screenshots: [{ src: 'payments-transaction-queue.jpg', title: 'ຄິວວຽກທຸລະກຳການຊຳລະ', caption: 'ເຫັນຈຳນວນທຸລະກຳ, ຍອດເງິນ, ສະຖານະ Pending, Paid, Failed ແລະລາຍການຜິດປົກກະຕິ ພ້ອມການຄົ້ນຫາ ແລະຕົວກອງ.' }],
      problems: [['Transaction ກັບ Settlement ຂາດຈຸດເຊື່ອມ', 'ການຮັບເງິນສຳເລັດບໍ່ໄດ້ໝາຍຄວາມວ່າການສະຫຼຸບຍອດສຳເລັດ.'], ['Webhook ລົ້ມເຫຼວແລ້ວຮູ້ຊ້າ', 'Partner ອາດບໍ່ໄດ້ຮັບສະຖານະເຖິງແມ່ນ Transaction ດຳເນີນແລ້ວ.'], ['ສຸຂະພາບລະບົບບໍ່ມີພາບລວມ', 'API, Dependency ແລະ SLA ຖືກຕິດຕາມແຍກກັນ.']],
      capabilityGroups: [{ title: 'Payment Operations', items: ['Payment Transactions', 'Partners', 'Public key lifecycle', 'Webhook Deliveries', 'Webhook SLA'] }, { title: 'Platform Assurance', items: ['Payment Platform Health', 'Operations Observability', 'Payment Operations Signals', 'Dependency status', 'Runbook context'] }, { title: 'Settlement Control', items: ['Settlement Control Room', 'UniMarket Settlements', 'UniPOS Settlements', 'Partner Settlements', 'Exception review'] }],
      audiences: [['Payment Operations', 'ຕິດຕາມ Transaction, Partner ແລະ Webhook.'], ['Finance', 'ກວດ Settlement ແລະລາຍການທີ່ຕ້ອງຄືນດີ.'], ['Technical Support', 'ເຫັນ Health, Dependency ແລະສັນຍານຜິດປົກກະຕິ.']],
      outcomes: ['ເຫັນເງິນຢູ່ຂັ້ນຕອນໃດ', 'Webhook failure ມີຫຼັກຖານຕິດຕາມ', 'Settlement ແຍກຕາມຜະລິດຕະພັນ ແລະ Partner', 'ທີມທຸລະກິດ ແລະເຕັກນິກເຫັນພາບດຽວກັນ']
    },
    system: {
      proof: 'Dependency Status ສະແດງຄວາມພ້ອມ, ຄຳເຕືອນ, Critical service ແລະເວລາຕອບສະໜອງໃນຈຸດດຽວ.',
      screenshots: [{ src: 'system-dependencies.png', title: 'ສະຖານະ Dependency ຂອງ POS', caption: 'ເຫັນສະຖານະຂອງ Integration, Storage, Payment, Database ແລະ Cache ພ້ອມ latency.' }],
      problems: [['ຮູ້ບັນຫາເມື່ອລູກຄ້າແຈ້ງ', 'ທີມງານຂາດພາບລວມຂອງ API, Dependency ແລະ Background jobs.'], ['ການແກ້ໄຂພຶ່ງພາຄົນ', 'ສັນຍານ, Owner ແລະ Runbook ບໍ່ໄດ້ຢູ່ໃນ workflow ຮ່ວມ.'], ['ກວດຄືນ Incident ຍາກ', 'Event, Job result ແລະການດຳເນີນການຂາດ timeline ດຽວ.']],
      capabilityGroups: [{ title: 'Health & Observability', items: ['System Overview', 'POS Dependency Status', 'POS Observability', 'Wallet Watch', 'Socket Monitor', 'Socket API Inventory'] }, { title: 'Jobs & Automation', items: ['WebJob Monitor', 'WebJob Schedules', 'WebJob Operations', 'WebJob Payments', 'WebJob Auto Cancel', 'Read Access'] }, { title: 'Events & Configuration', items: ['LDB Callback Investigation', 'Event Publisher', 'Activation Wizard', 'UI Guide', 'Withdraw Types', 'Deposit Types', 'Transfer Types'] }],
      audiences: [['Operations Center', 'ເຝົ້າລະວັງ Health, Jobs ແລະ Realtime.'], ['Engineering Support', 'ລະບຸ Dependency, latency ແລະຫຼັກຖານສຳລັບແກ້ໄຂ.'], ['Service Owner', 'ຮັບຮູ້ຜົນກະທົບ ແລະຢືນຢັນການຟື້ນຟູ.']],
      outcomes: ['ພົບສັນຍານກ່ອນກະທົບກວ້າງ', 'ລະບຸ Service ແລະ Owner ໄດ້ຊັດ', 'ການແກ້ໄຂອີງຕາມ Runbook', 'Incident ມີ timeline ແລະຫຼັກຖານກວດຄືນ']
    }
  };

  const appEvidence = {
    unipos: {
      appScreenshots: [{ src: 'unipos-catalog.png', title: 'ໜ້າຂາຍໃນ UniPOS', caption: 'UI ຈິງຫຼັງເລືອກສາຂາ: ຄົ້ນຫາ, ກອງໝວດ, ປ່ຽນຮູບແບບການສະແດງ, ເບິ່ງ stock ແລະເພີ່ມສິນຄ້າ.' }],
      roleWorkflows: [
        {
          code: 'OWNER',
          label: 'ເຈົ້າຂອງຮ້ານ',
          image: 'unipos-owner-role.png',
          evidence: 'Owner ເຫັນຍອດຂາຍ, ຕົ້ນທຶນ, ກຳໄລ, ຈຳນວນອໍເດີ ແລະແນວໂນ້ມການຂາຍຕາມຊ່ວງເວລາ.',
          pitch: 'ເຫັນພາບລວມ ແລະຄວບຄຸມການດຳເນີນງານຂອງຮ້ານຈາກ MiniApp ດຽວ.',
          scope: 'ເລືອກຮ້ານ/ສາຂາ, ຂາຍ, ກວດລາຍການສິນຄ້າ, ເບິ່ງສະຫຼຸບ, ປະຫວັດຂາຍ ແລະຕິດຕາມຄຳສັ່ງຊື້.',
          steps: ['ເລືອກຮ້ານ ແລະສາຂາ', 'ຕິດຕາມຍອດຂາຍ/ສິນຄ້າ', 'ກວດສະຫຼຸບ ແລະປະຫວັດ', 'ໃຊ້ Backoffice ສຳລັບການຄວບຄຸມແບບລະອຽດ']
        },
        {
          code: 'ADMIN',
          label: 'ຜູ້ຈັດການສາຂາ',
          image: 'unipos-admin-role.png',
          evidence: 'Admin ມີເຄື່ອງມືເພີ່ມ/ແກ້ໄຂສິນຄ້າ, ກວດສະຕ໋ອກ, ຈັດການສາຂາ ແລະຕິດຕາມການສັ່ງຊື້.',
          pitch: 'ຄວບຄຸມ Catalog, ສະຕ໋ອກ ແລະການດຳເນີນງານຂອງສາຂາທີ່ Owner ມອບໝາຍໃຫ້.',
          scope: 'UI ສຳລັບ Admin ມີເມນູ “ລາຍການສິນຄ້າ”, “ສັງລວມ” ແລະ “ຕິດຕາມການສັ່ງຊື້” ພ້ອມເຄື່ອງມືຈັດການສິນຄ້າ ແລະສາຂາ.',
          steps: ['ເລືອກສາຂາທີ່ມີ Role ADMIN', 'ເພີ່ມປະເພດ ແລະເພີ່ມ/ແກ້ໄຂສິນຄ້າ', 'ກວດສະຕ໋ອກ ແລະສິນຄ້າທີ່ບໍ່ມີໃນສະຕ໋ອກ', 'ເບິ່ງສັງລວມ ແລະຕິດຕາມການສັ່ງຊື້']
        },
        {
          code: 'CASHIER',
          label: 'ພະນັກງານຂາຍ',
          image: 'unipos-cashier-role.png',
          evidence: 'Cashier ເລືອກສິນຄ້າ, ກຳນົດຈຳນວນ ແລະເຫັນຈຳນວນລາຍການ/ຍອດເງິນໃນກະຕ່າກ່ອນຮັບຊຳລະ.',
          pitch: 'ໂຟກັດສະເພາະງານໜ້າຮ້ານ: ເປີດກະ, ຂາຍ, ຮັບຊຳລະ ແລະກວດປະຫວັດຂາຍ.',
          scope: 'UI ສຳລັບ Cashier ສະແດງສະເພາະເມນູ “ຂາຍ” ແລະ “ປະຫວັດຂາຍ” ເພື່ອຫຼຸດຄວາມຊັບຊ້ອນ ແລະຄວາມສ່ຽງ.',
          steps: ['ເລືອກຮ້ານ/ສາຂາທີ່ມີ Role CASHIER', 'ເປີດການຂາຍກ່ອນເລີ່ມງານ', 'ຄົ້ນຫາ/ສະແກນ ແລະເພີ່ມສິນຄ້າ', 'ຮັບຊຳລະ ແລະກວດປະຫວັດຂາຍ']
        }
      ],
      workflowMap: [
        ['ເລືອກສາຂາຂາຍ', 'ຮ້ານ, ສາຂາ, ບົດບາດ ແລະ Shift'],
        ['ຄົ້ນຫາ/ສະແກນ ແລະເພີ່ມສິນຄ້າ', 'Catalog, Barcode, ລາຄາ ແລະ Stock ຕາມສາຂາ'],
        ['ຢືນຢັນການຂາຍ ແລະຮັບຊຳລະ', 'Order, Payment reference, Stock movement ແລະ Settlement'],
        ['ເບິ່ງປະຫວັດ/ສະຫຼຸບ', 'Sales history, Gross profit, Top products ແລະ Reports']
      ]
    },
    unimarket: {
      appScreenshots: [
        { src: 'unimarket-catalog.png', title: 'Catalog ແລະ Promotion', caption: 'ເລືອກໝວດ, ຄົ້ນຫາດ້ວຍ Barcode/ລະຫັດ, ເບິ່ງລາຄາ, Promotion ແລະຈຳນວນພ້ອມຂາຍ.' },
        { src: 'unimarket-product.png', title: 'ລາຍລະອຽດ ແລະຕົວເລືອກສິນຄ້າ', caption: 'ກວດຮ້ານຜູ້ສະໜອງ, Variant, ລາຄາ ແລະຈຳນວນກ່ອນເພີ່ມເຂົ້າກະຕ່າ.' }
      ],
      workflowMap: [
        ['ຄົ້ນຫາ ແລະເລືອກໝວດ', 'Catalog Metadata, Assortment ແລະ Merchant visibility'],
        ['ເລືອກ Variant/ຈຳນວນ', 'Price rule, Promotion, Merchant stock ແລະ Branch stock'],
        ['ສ້າງອໍເດີ', 'Order operations, Payment status ແລະ Auto cancel'],
        ['ຮັບສິນຄ້າ', 'Fulfilment, ຈຳນວນຮັບຈິງ, ຄືນສິນຄ້າ ແລະ Reconciliation']
      ]
    },
    users: {
      appScreenshots: [{ src: 'login-form.png', title: 'Login ດ້ວຍອີເມວ ຫຼືເບີໂທ', caption: 'ຈຸດເລີ່ມຂອງຜູ້ໃຊ້: ເລືອກຊ່ອງທາງ Login, ກູ້ລະຫັດຜ່ານ ຫຼືລົງທະບຽນ.' }],
      workflowMap: [
        ['Login ດ້ວຍ Email/Phone', 'ກວດບັນຊີ, Session ແລະສະຖານະການເຂົ້າໃຊ້'],
        ['Login ດ້ວຍ Biometric', 'ຜູກກັບ Session ທີ່ອະນຸຍາດໃນອຸປະກອນ'],
        ['ເປີດ MiniApp', 'Role, Merchant scope, Branch scope ແລະ Permission'],
        ['ເຫັນ Banner/Shortcut/ຂ່າວ', 'Content lifecycle, Schedule, Publish ແລະ Audit']
      ]
    },
    wallet: {
      appScreenshots: [{ src: 'topup-laoqr.png', title: 'ຕື່ມເງິນຜ່ານ LaoQR', caption: 'ໜ້າຕື່ມເງິນຈິງ: ກຳນົດຈຳນວນເງິນ, ເຫັນຄ່າທຳນຽມ, ໃສ່ໝາຍເຫດ ແລະກວດຂໍ້ມູນກ່ອນສ້າງ LaoQR.' }],
      workflowMap: [
        ['ສົ່ງຂໍ້ມູນ KYC', 'KYC queue, Review, Decision ແລະ Audit evidence'],
        ['ຕື່ມເງິນຜ່ານ LaoQR', 'LaoQR payment reference, Payment callback, Wallet credit ແລະ Ledger'],
        ['ໂອນເງິນ', 'Recipient validation, Transfer status, Counterparty ແລະ Ledger'],
        ['ຖອນເງິນ', 'Withdraw type, Approval/rule, Wallet debit ແລະ Investigation']
      ]
    },
    payments: {
      workflowMap: [
        ['ສະແກນ QR ໃນແອັບ', 'ສ້າງ Payment reference ແລະກຳນົດ Partner/Merchant'],
        ['ຢືນຢັນການຊຳລະ', 'Transaction status, Callback ແລະ Webhook delivery'],
        ['ຮັບຜົນສຳເລັດ/ລົ້ມເຫຼວ', 'Operations signal, Retry, Investigation ແລະ SLA'],
        ['ປິດຮອບ', 'Settlement control, Reconciliation ແລະ Exception review']
      ]
    },
    system: {
      workflowMap: [
        ['App ເອີ້ນ API/Realtime service', 'System health, Dependency status ແລະ Socket monitor'],
        ['ການຂາຍ/ອໍເດີຖືກຊິງ', 'Background jobs, Schedule, Result ແລະ Retry'],
        ['Payment callback ເຂົ້າລະບົບ', 'Callback investigation, Event publisher ແລະ Correlation'],
        ['ເກີດບັນຫາໃນແອັບ', 'Diagnostics, Owner, Runbook ແລະ Recovery evidence']
      ]
    }
  };

  Object.entries(details).forEach(([key, value]) => Object.assign(modules[key], value, appEvidence[key] || {}));
})();
