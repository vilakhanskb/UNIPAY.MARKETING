(() => {
  const modules = window.UNIPAY_MODULES;
  if (!modules) return;

  const details = {
    unipos: {
      proof: 'ໜ້າ UniPOS Backoffice ສະແດງຍອດຂາຍ, Order, ສິນຄ້າຂາຍດີ ແລະສະຖານະຂອງແຕ່ລະສາຂາໃນໜ້າດຽວ.',
      screenshots: [
        { src: 'unipos-overview.png', title: 'ພາບລວມຍອດຂາຍ', caption: 'ເລືອກເບິ່ງຂໍ້ມູນຕາມຮ້ານ, ສາຂາ ແລະຊ່ວງເວລາ ພ້ອມ KPI ສຳຄັນສຳລັບຜູ້ບໍລິຫານ.' },
        { src: 'unipos-stock.png', title: 'ຈັດການ Stock ຂອງສາຂາ', caption: 'ເຫັນຈຳນວນ Stock ພ້ອມຂາຍ, ລາຍການທີ່ຕ້ອງກວດ, ສິນຄ້າທີ່ກຳລັງໂອນ ແລະຜົນການນັບ Stock.' }
      ],
      problems: [
        ['ຂໍ້ມູນການຂາຍຢູ່ຫຼາຍບ່ອນ', 'ເຈົ້າຂອງຮ້ານຕ້ອງລວບລວມຍອດເງິນສົດ, QR, Order ແລະ Stock ດ້ວຍຕົນເອງ.'],
        ['ບໍ່ຮູ້ຈຳນວນ Stock ທີ່ແທ້ຈິງ', 'ສິນຄ້າອາດໝົດໂດຍບໍ່ຮູ້ລ່ວງໜ້າ ຫຼືມີສິນຄ້າຄ້າງ Stock ຫຼາຍເກີນໄປ.'],
        ['ຍິ່ງມີຫຼາຍສາຂາ ຍິ່ງຄວບຄຸມຍາກ', 'Role ຂອງພະນັກງານ, ລາຄາ, Catalog ແລະການປິດຍອດຂອງແຕ່ລະສາຂາອາດບໍ່ເປັນມາດຕະຖານດຽວກັນ.']
      ],
      capabilityGroups: [
        { title: 'ຮ້ານ, ບົດບາດ ແລະອໍເດີ', items: ['ພາບລວມ', 'ຮ້ານຄ້າ', 'ຄຳຂໍສິດບົດບາດ', 'ພະນັກງານ ແລະ ສິດເຂົ້າໃຊ້', 'ອໍເດີ POS', 'ລູກຄ້າ POS'] },
        { title: 'Catalog, ສາຂາ ແລະສະຕັອກ', items: ['ແຄັດຕາລັອກ · ຂໍ້ມູນອ້າງອີງ', 'ແຄັດຕາລັອກ · ສິນຄ້າກາງ', 'ແຄັດຕາລັອກ · ສິນຄ້າຂອງຮ້ານ', 'ຈັດການສາຂາ', 'ສະຕັອກຮ້ານ', 'ສະຕັອກສາຂາ'] },
        { title: 'ນະໂຍບາຍ, ຂໍ້ມູນ ແລະລາຍງານ', items: ['ນະໂຍບາຍ ແລະ ລິ້ງສັ້ນ', 'ຊຸດຂໍ້ມູນ ແລະ ການສົ່ງອອກ', 'ສູນລາຍງານ'] }
      ],
      audiences: [['ເຈົ້າຂອງຮ້ານ', 'ເບິ່ງຍອດຂາຍ, ກຳໄລ ແລະສິນຄ້າຂາຍດີໄດ້ທຸກເວລາ.'], ['ຜູ້ຈັດການສາຂາ', 'ຈັດການ Catalog, Stock, ສາຂາ ແລະຕິດຕາມຄຳສັ່ງຊື້.'], ['ພະນັກງານຂາຍ', 'ຂາຍສິນຄ້າ ແລະຮັບຊຳລະໄດ້ງ່າຍຜ່ານ Smartphone.']],
      outcomes: ['ຍອດຂາຍອັບເດດທັນທີຫຼັງຈາກຂາຍ', 'ຄວບຄຸມ Stock ແຍກຕາມສາຂາ', 'ຫຼຸດວຽກກວດ ແລະປິດຍອດຊ້ຳຊ້ອນ', 'ຮອງຮັບການຂະຫຍາຍຈາກ 1 ໄປຫຼາຍສາຂາ']
    },
    unimarket: {
      proof: 'ໜ້າ Overview ຂອງ UniMarket ສະແດງມູນຄ່າ Order, ສະຖານະການຈັດສົ່ງ, ຈຳນວນຮ້ານ ແລະສິນຄ້າທີ່ຕ້ອງຕິດຕາມ.',
      screenshots: [{ src: 'unimarket-overview.png', title: 'ພາບລວມຂອງ UniMarket', caption: 'Dashboard ສຳລັບຕິດຕາມ Order, ມູນຄ່າ, ການຈັດສົ່ງ, ຈຳນວນຮ້ານ ແລະສິນຄ້າທີ່ມີການເຄື່ອນໄຫວ.' }],
      problems: [
        ['ຮັບ Order ຈາກຫຼາຍຊ່ອງທາງ', 'ຂໍ້ມູນການສັ່ງຊື້, ການຢືນຢັນ ແລະການຈັດສົ່ງບໍ່ໄດ້ຢູ່ໃນ Workflow ດຽວ.'],
        ['Catalog ຂອງແຕ່ລະຮ້ານບໍ່ກົງກັນ', 'ຊື່ສິນຄ້າ, ລາຄາ ແລະ Assortment ອາດໃຊ້ຂໍ້ມູນຄົນລະຊຸດ.'],
        ['ກວດຈຳນວນສິນຄ້າທີ່ຮັບໄດ້ຍາກ', 'ຈຳນວນທີ່ສັ່ງ, ຈັດສົ່ງ, ຮັບໄດ້ ແລະເສຍຫາຍ ອາດບໍ່ມີຂໍ້ມູນຊຸດດຽວກັນໃຫ້ກວດ.']
      ],
      capabilityGroups: [
        { title: 'ຮ້ານ, Catalog ແລະສາຂາ', items: ['ພາບລວມ', 'ຮ້ານຄ້າ', 'ແຄັດຕາລັອກ · ຂໍ້ມູນອ້າງອີງ', 'ແຄັດຕາລັອກ · ສິນຄ້າກາງ', 'ແຄັດຕາລັອກ · ສິນຄ້າຂອງຮ້ານ', 'ຈັດການສາຂາ'] },
        { title: 'Order, Stock ແລະຄຸນນະພາບ', items: ['Order', 'Order Reconciliation', 'ຍົກເລີກອັດຕະໂນມັດ', 'Support Diagnostics', 'Stock ຂອງຮ້ານ', 'Stock ຂອງສາຂາ', 'ການປະເມີນ'] },
        { title: 'ການຄ້າ, ເຄືອຂ່າຍ ແລະລາຍງານ', items: ['ໜ້າຮ້ານ', 'ຄ່າທຳນຽມຕາມຄວາມດ່ວນ', 'ຕົວແທນຈຳໜ່າຍ', 'ພະນັກງານຂາຍ', 'ການຕິດຕາມລະບົບ', 'Platform Reports'] }
      ],
      audiences: [['Distributor', 'ຈັດການ Catalog, Order ແລະການຈັດສົ່ງ.'], ['Dealer / Salesman', 'ເຫັນຮ້ານ, ເຂດຮັບຜິດຊອບ ແລະວຽກທີ່ຕ້ອງຕິດຕາມ.'], ['ຮ້ານຄ້າ', 'ສັ່ງສິນຄ້າ ແລະຕິດຕາມສະຖານະໄດ້ຢ່າງຊັດເຈນ.']],
      outcomes: ['Order ທັງໝົດຢູ່ໃນ Workflow ດຽວ', 'ຫຼຸດຄວາມຄາດເຄື່ອນຂອງຂໍ້ມູນ Catalog', 'ຕິດຕາມສະຖານະ Fulfilment ແລະ Settlement ໄດ້', 'ຂະຫຍາຍເຄືອຂ່າຍ Dealer ໄດ້ຢ່າງເປັນລະບົບ']
    },
    users: {
      proof: 'ໜ້າ Overview ຊ່ວຍໃຫ້ Admin ເຫັນຈຳນວນບັນຊີ, ຂອບເຂດສິດ, ສະຖານະເນື້ອຫາ ແລະລາຍການທີ່ຕ້ອງກວດ.',
      screenshots: [{ src: 'users-overview.png', title: 'ພາບລວມຜູ້ໃຊ້, ເນື້ອຫາ ແລະສິດ', caption: 'ສະຫຼຸບ Lifecycle ຂອງເນື້ອຫາ, ຈຳນວນຜູ້ໃຊ້, ຂອບເຂດສິດ ແລະລາຍການ Access Reconciliation.' }],
      problems: [['ສິດຫຼາຍເກີນໜ້າວຽກ', 'ຜູ້ໃຊ້ອາດເຫັນ ຫຼືດຳເນີນການເກີນຂອບເຂດທີ່ຮັບຜິດຊອບ.'], ['ບັນຊີ ແລະຂອບເຂດບໍ່ກົງກັນ', 'ການປ່ຽນຕຳແໜ່ງ ຫຼືສາຂາອາດປ່ອຍສິດເກົ່າຄ້າງໄວ້.'], ['ເນື້ອຫາບໍ່ມີ Lifecycle', 'ບົດຄວາມ ແລະຄຳເຫັນຂາດຂັ້ນຕອນຮ່າງ, ກວດ ແລະເຜີຍແຜ່.']],
      capabilityGroups: [{ title: 'ສະຫຼຸບການດຳເນີນງານ', items: ['ພາບລວມ'] }, { title: 'ຈັດການເນື້ອຫາ', items: ['ບົດຄວາມ', 'ຄຳເຫັນ'] }, { title: 'ສິດ ແລະຂອບເຂດ', items: ['ຈັດການສິດເຂົ້າໃຊ້'] }],
      audiences: [['System Admin', 'ກຳນົດ Role ແລະກວດວ່າສິດກົງກັບໜ້າວຽກຫຼືບໍ່.'], ['Content Team', 'ສ້າງ, ກວດ ແລະເຜີຍແຜ່ເນື້ອຫາຕາມ Lifecycle.'], ['Auditor', 'ກວດວ່າໃຜເປັນຜູ້ດຳເນີນການ, ເຮັດໃນເວລາໃດ ແລະປ່ຽນແປງຫຍັງ.']],
      outcomes: ['ສິດກົງກັບໜ້າວຽກ', 'ເນື້ອຫາມີຂັ້ນຕອນກວດກ່ອນເຜີຍແຜ່', 'ກວດຄືນການປ່ຽນແປງໄດ້', 'ຫຼຸດຄວາມສ່ຽງຈາກບັນຊີ ແລະສິດຄ້າງ']
    },
    wallet: {
      proof: 'Wallet Overview ສະແດງຍອດຄົງເຫຼືອ, ເງິນເຂົ້າ-ອອກ, ຈຳນວນ Transaction ແລະລາຍການຜິດປົກກະຕິທີ່ຕ້ອງກວດ.',
      screenshots: [{ src: 'wallet-overview.png', title: 'ພາບລວມ Wallet', caption: 'ສະຫຼຸບ Balance, ຍອດເງິນເຂົ້າ-ອອກ, ຈຳນວນ Transaction ແລະລາຍການທີ່ຕ້ອງກວດສອບ.' }],
      problems: [['ຂໍ້ມູນ KYC ແລະ Wallet ຢູ່ຄົນລະບ່ອນ', 'ທີມງານຕ້ອງສະຫຼັບຫຼາຍໜ້າ ຫຼືຫຼາຍລະບົບ ເພື່ອກວດຕົວຕົນ ແລະສະຖານະ Wallet.'], ['ຄົ້ນຫາສາເຫດຂອງ Transaction ໄດ້ຊ້າ', 'ຖ້າ Transaction, Counterparty ແລະ Ledger ບໍ່ເຊື່ອມກັນ ທີມ Support ຈະໃຊ້ເວລາກວດຫາສາເຫດຫຼາຍ.'], ['ແຕ່ລະທີມເຫັນຂໍ້ມູນບໍ່ຄືກັນ', 'ຝ່າຍ Support, Operations ແລະ Audit ອາດໃຊ້ຂໍ້ມູນຄົນລະຊຸດ ເຮັດໃຫ້ກວດຄືນໄດ້ຍາກ.']],
      capabilityGroups: [{ title: 'ລູກຄ້າ ແລະ KYC', items: ['ພາບລວມ', 'ການກວດສອບ KYC', 'ການກວດສອບລູກຄ້າ'] }, { title: 'Transaction ແລະການຕັ້ງຄ່າ', items: ['Transaction', 'ການຕັ້ງຄ່າຜູ້ແນະນຳ'] }, { title: 'ລາຍງານ ແລະ Audit Log', items: ['ຍອດ Wallet', 'ສະຫຼຸບລາຍຈ່າຍ', 'ສະຫຼຸບລາຍຮັບ', 'ປະຫວັດກວດສອບ Wallet'] }],
      audiences: [['KYC Operations', 'ກວດເອກະສານ KYC ແລະບັນທຶກຜົນການພິຈາລະນາ.'], ['Customer Support', 'ເຫັນຂໍ້ມູນລູກຄ້າ ແລະ Transaction ໄດ້ຈາກບ່ອນດຽວ.'], ['Finance / Audit', 'ກວດ Balance, Ledger, Income ແລະ Expense.']],
      outcomes: ['ກວດ KYC ແລະສະຖານະ Wallet ໄດ້ຈາກບ່ອນດຽວ', 'ທີມ Support ຄົ້ນຫາສາເຫດໄດ້ໄວຂຶ້ນ', 'ທຸກການເຄື່ອນໄຫວຂອງເງິນກວດຄືນໄດ້', 'ທີມ Operations ແລະ Audit ໃຊ້ຂໍ້ມູນຊຸດດຽວກັນ']
    },
    payments: {
      proof: 'ໜ້າ Transaction Queue ຊ່ວຍໃຫ້ທີມ Operations ຄົ້ນຫາ, ກອງຕາມສະຖານະ ແລະຕິດຕາມ Transaction ໄດ້ຈາກໜ້າດຽວ.',
      screenshots: [{ src: 'payments-transaction-queue.jpg', title: 'Transaction Queue ຂອງລະບົບຊຳລະ', caption: 'ເຫັນຈຳນວນ Transaction, ຍອດເງິນ, ສະຖານະ Pending, Paid ແລະ Failed ພ້ອມຊ່ອງຄົ້ນຫາ ແລະຕົວກອງ.' }],
      problems: [['Transaction ແລະ Settlement ບໍ່ເຊື່ອມກັນ', 'ການຮັບເງິນສຳເລັດ ບໍ່ໄດ້ໝາຍຄວາມວ່າ Settlement ສຳເລັດແລ້ວ.'], ['ຮູ້ຊ້າເມື່ອ Webhook ສົ່ງບໍ່ສຳເລັດ', 'Partner ອາດບໍ່ໄດ້ຮັບສະຖານະ ເຖິງແມ່ນວ່າ Transaction ຖືກດຳເນີນການແລ້ວ.'], ['ຂາດໜ້າລວມສຳລັບຕິດຕາມລະບົບ', 'API, Dependency ແລະ SLA ຖືກຕິດຕາມແຍກກັນ ເຮັດໃຫ້ກວດບັນຫາໄດ້ຊ້າ.']],
      capabilityGroups: [{ title: 'Payment Operations', items: ['ທຸລະກຳການຊຳລະ', 'ຄູ່ຮ່ວມງານ', 'ການສົ່ງ Webhook', 'Payment Platform Health', 'Settlement Control Room'] }, { title: 'ສັນຍານ ແລະ SLA', items: ['SLA ຂອງ Webhook', 'ສັນຍານການດຳເນີນງານການຊຳລະ'] }, { title: 'ລາຍງານ Settlement', items: ['Settlement ຂອງ UniMarket', 'Settlement ຂອງ UniPOS', 'Settlement ຂອງ Partner'] }],
      audiences: [['Payment Operations', 'ຕິດຕາມ Transaction, Partner ແລະ Webhook.'], ['Finance', 'ກວດ Settlement ແລະລາຍການທີ່ຕ້ອງກວດຄືນ.'], ['Technical Support', 'ກວດ System Health, Dependency ແລະສັນຍານຜິດປົກກະຕິ.']],
      outcomes: ['ຮູ້ວ່າເງິນຢູ່ຂັ້ນຕອນໃດ', 'ກວດສາເຫດ Webhook Failure ຈາກ Delivery Log ໄດ້', 'ແຍກ Settlement ຕາມຜະລິດຕະພັນ ແລະ Partner', 'ທີມທຸລະກິດ ແລະທີມເຕັກນິກເຫັນຂໍ້ມູນຊຸດດຽວກັນ']
    },
    system: {
      proof: 'ໜ້າ Dependency Status ສະແດງວ່າ Service ໃດພ້ອມໃຊ້ງານ, ມີຄຳເຕືອນ ຫຼືເປັນ Critical Service ພ້ອມ Response Time.',
      screenshots: [{ src: 'system-dependencies.png', title: 'ສະຖານະ Dependency ຂອງ POS', caption: 'ເຫັນສະຖານະຂອງ Integration, Storage, Payment, Database ແລະ Cache ພ້ອມ latency.' }],
      problems: [['ຮູ້ບັນຫາຫຼັງຈາກລູກຄ້າແຈ້ງ', 'ຖ້າບໍ່ມີໜ້າຕິດຕາມ API, Dependency ແລະ Background Jobs ທີມງານອາດຮູ້ບັນຫາຊ້າ.'], ['ການແກ້ໄຂຂຶ້ນກັບປະສົບການຂອງແຕ່ລະຄົນ', 'ຖ້າສັນຍານ, Service Owner ແລະ Runbook ບໍ່ໄດ້ຢູ່ໃນ Workflow ດຽວ ການແກ້ໄຂອາດຊ້າ ຫຼືບໍ່ເປັນຂັ້ນຕອນ.'], ['ກວດຄືນ Incident ໄດ້ຍາກ', 'Event, Job Result ແລະລາຍການທີ່ທີມງານດຳເນີນການ ອາດບໍ່ມີ Timeline ດຽວກັນ.']],
      capabilityGroups: [{ title: 'Jobs ແລະການຄວບຄຸມ', items: ['ພາບລວມ', 'WebJob Schedules', 'WebJob Operations', 'Wallet Watch', 'WebJob Payments', 'WebJob Auto Cancel'] }, { title: 'Realtime ແລະ Events', items: ['ຕິດຕາມ Socket', 'ສົ່ງ Event', 'ລາຍການ Socket API'] }, { title: 'ການຕິດຕາມ ແລະຂໍ້ມູນອ້າງອີງ', items: ['ສະຖານະ Dependency ຂອງ POS', 'ການຕິດຕາມ POS', 'WebJob Monitor', 'LDB Callback Investigation', 'ປະເພດຖອນເງິນ', 'ປະເພດຝາກເງິນ', 'ປະເພດໂອນເງິນ'] }],
      audiences: [['Operations Center', 'ຕິດຕາມ System Health, Jobs ແລະ Realtime Events.'], ['Engineering Support', 'ກວດ Dependency, Latency, Log ແລະ Event ເພື່ອຫາສາເຫດ.'], ['Service Owner', 'ຮັບຮູ້ຜົນກະທົບ ແລະຢືນຢັນວ່າລະບົບກັບມາໃຊ້ງານໄດ້ປົກກະຕິ.']],
      outcomes: ['ພົບສັນຍານກ່ອນບັນຫາກະທົບວົງກວ້າງ', 'ລະບຸ Service ແລະ Owner ໄດ້ຊັດເຈນ', 'ແກ້ໄຂບັນຫາຕາມ Runbook', 'Incident ມີ Timeline, Log ແລະປະຫວັດໃຫ້ກວດຄືນ']
    }
  };

  const appEvidence = {
    unipos: {
      appScreenshots: [{ src: 'unipos-catalog.png', title: 'ໜ້າຂາຍສິນຄ້າໃນ UniPOS', caption: 'ຫຼັງຈາກເລືອກສາຂາແລ້ວ ຜູ້ໃຊ້ສາມາດຄົ້ນຫາ, ເລືອກໝວດ, ປ່ຽນຮູບແບບການສະແດງ, ກວດ Stock ແລະເພີ່ມສິນຄ້າເຂົ້າກະຕ່າ.' }],
      roleWorkflows: [
        {
          code: 'OWNER',
          label: 'ເຈົ້າຂອງຮ້ານ',
          image: 'unipos-owner-role.png',
          evidence: 'Owner ເຫັນຍອດຂາຍ, ຕົ້ນທຶນ, ກຳໄລ, ຈຳນວນ Order ແລະແນວໂນ້ມການຂາຍຕາມຊ່ວງເວລາ.',
          pitch: 'ເຈົ້າຂອງຮ້ານເຫັນຜົນການຂາຍ ແລະສະຖານະຂອງຮ້ານໄດ້ຈາກ MiniApp ດຽວ.',
          scope: 'ສາມາດເລືອກຮ້ານ ແລະສາຂາ, ຂາຍສິນຄ້າ, ກວດ Catalog, ເບິ່ງລາຍງານຫຍໍ້, ປະຫວັດການຂາຍ ແລະຕິດຕາມຄຳສັ່ງຊື້.',
          steps: ['ເລືອກຮ້ານ ແລະສາຂາ', 'ກວດຍອດຂາຍ ແລະສິນຄ້າຂາຍດີ', 'ເບິ່ງລາຍງານຫຍໍ້ ແລະປະຫວັດການຂາຍ', 'ເຂົ້າ Backoffice ເມື່ອຕ້ອງການເບິ່ງຂໍ້ມູນແບບລະອຽດ']
        },
        {
          code: 'ADMIN',
          label: 'ຜູ້ຈັດການສາຂາ',
          image: 'unipos-admin-role.png',
          evidence: 'Admin ມີເຄື່ອງມືເພີ່ມ/ແກ້ໄຂສິນຄ້າ, ກວດສະຕ໋ອກ, ຈັດການສາຂາ ແລະຕິດຕາມການສັ່ງຊື້.',
          pitch: 'Admin ຮັບຜິດຊອບ Catalog, Stock ແລະວຽກປະຈຳຂອງສາຂາທີ່ Owner ມອບໝາຍໃຫ້.',
          scope: 'UI ສຳລັບ Admin ມີເມນູ “ລາຍການສິນຄ້າ”, “ສັງລວມ” ແລະ “ຕິດຕາມການສັ່ງຊື້” ພ້ອມເຄື່ອງມືສຳລັບຈັດການສິນຄ້າ ແລະສາຂາ.',
          steps: ['ເລືອກສາຂາທີ່ມີ Role ADMIN', 'ເພີ່ມປະເພດ ແລະເພີ່ມ/ແກ້ໄຂສິນຄ້າ', 'ກວດສະຕ໋ອກ ແລະສິນຄ້າທີ່ບໍ່ມີໃນສະຕ໋ອກ', 'ເບິ່ງສັງລວມ ແລະຕິດຕາມການສັ່ງຊື້']
        },
        {
          code: 'CASHIER',
          label: 'ພະນັກງານຂາຍ',
          image: 'unipos-cashier-role.png',
          evidence: 'Cashier ເລືອກສິນຄ້າ, ກຳນົດຈຳນວນ ແລະເຫັນຈຳນວນລາຍການ/ຍອດເງິນໃນກະຕ່າກ່ອນຮັບຊຳລະ.',
          pitch: 'Cashier ເຫັນສະເພາະຟັງຊັນທີ່ໃຊ້ໃນວຽກໜ້າຮ້ານ: ເປີດກະ, ຂາຍ, ຮັບຊຳລະ ແລະເບິ່ງປະຫວັດການຂາຍ.',
          scope: 'UI ສຳລັບ Cashier ສະແດງສະເພາະເມນູ “ຂາຍ” ແລະ “ປະຫວັດຂາຍ” ເພື່ອຫຼຸດຄວາມຊັບຊ້ອນ ແລະຄວາມສ່ຽງ.',
          steps: ['ເລືອກຮ້ານ/ສາຂາທີ່ມີ Role CASHIER', 'ເປີດການຂາຍກ່ອນເລີ່ມງານ', 'ຄົ້ນຫາ/ສະແກນ ແລະເພີ່ມສິນຄ້າ', 'ຮັບຊຳລະ ແລະກວດປະຫວັດຂາຍ']
        }
      ],
      workflowMap: [
        ['ເລືອກຮ້ານ ແລະສາຂາ', 'ກວດ Merchant, ສາຂາ, Role ແລະ Shift'],
        ['ຄົ້ນຫາ/ສະແກນ ແລະເພີ່ມສິນຄ້າ', 'Catalog, Barcode, ລາຄາ ແລະ Stock ຕາມສາຂາ'],
        ['ຢືນຢັນການຂາຍ ແລະຮັບຊຳລະ', 'Order, Payment reference, Stock movement ແລະ Settlement'],
        ['ເບິ່ງປະຫວັດ/ສະຫຼຸບ', 'Sales history, Gross profit, Top products ແລະ Reports']
      ]
    },
    unimarket: {
      appScreenshots: [
        { src: 'unimarket-catalog.png', title: 'Catalog ແລະ Promotion', caption: 'ເລືອກໝວດ, ຄົ້ນຫາດ້ວຍ Barcode ຫຼືລະຫັດສິນຄ້າ, ແລ້ວກວດລາຄາ, Promotion ແລະຈຳນວນທີ່ພ້ອມຂາຍ.' },
        { src: 'unimarket-product.png', title: 'ລາຍລະອຽດ ແລະຕົວເລືອກສິນຄ້າ', caption: 'ກວດຮ້ານຜູ້ຈັດຈຳໜ່າຍ, Variant, ລາຄາ ແລະຈຳນວນທີ່ຕ້ອງການ ກ່ອນເພີ່ມເຂົ້າກະຕ່າ.' }
      ],
      workflowMap: [
        ['ຄົ້ນຫາ ແລະເລືອກໝວດ', 'Catalog Metadata, Assortment ແລະ Merchant visibility'],
        ['ເລືອກ Variant/ຈຳນວນ', 'Price rule, Promotion, Merchant stock ແລະ Branch stock'],
        ['ສ້າງອໍເດີ', 'Order operations, Payment status ແລະ Auto cancel'],
        ['ຢືນຢັນການຮັບສິນຄ້າ', 'Fulfilment, ຈຳນວນທີ່ຮັບໄດ້, ການຄືນສິນຄ້າ ແລະ Reconciliation']
      ]
    },
    users: {
      appScreenshots: [{ src: 'login-form.png', title: 'Login ດ້ວຍ Email ຫຼືເບີໂທ', caption: 'ຜູ້ໃຊ້ເລືອກ Login ດ້ວຍ Email ຫຼືເບີໂທ, ສາມາດກົດລືມລະຫັດຜ່ານ ຫຼືລົງທະບຽນບັນຊີໃໝ່.' }],
      workflowMap: [
        ['Login ດ້ວຍ Email/Phone', 'ກວດບັນຊີ, Session ແລະສະຖານະການເຂົ້າໃຊ້'],
        ['Login ດ້ວຍ Biometric', 'ຜູກກັບ Session ທີ່ອະນຸຍາດໃນອຸປະກອນ'],
        ['ເປີດ MiniApp', 'Role, Merchant scope, Branch scope ແລະ Permission'],
        ['ເຫັນບົດຄວາມ ແລະເນື້ອຫາ', 'Article lifecycle, Comment governance, Schedule, Publish ແລະ Audit']
      ]
    },
    wallet: {
      appScreenshots: [{ src: 'topup-laoqr.png', title: 'ຕື່ມເງິນຜ່ານ LaoQR', caption: 'ລະບຸຈຳນວນເງິນ, ກວດຄ່າທຳນຽມ, ໃສ່ໝາຍເຫດ ແລະກວດຂໍ້ມູນໃຫ້ຖືກຕ້ອງກ່ອນສ້າງ LaoQR.' }],
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
