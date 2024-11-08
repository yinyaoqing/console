export const MENU_PERMISSIONS = [
  {
    permission: '010000',
    label: 'member_management',
    icon: 'perm_identity',
    children: [
      {
        permission: '010100',
        label: 'member_list',
        name: 'MemberList',
        permissions: {
          create: '010101',
          delete: '010102',
          edit: '010103',
          query: '010104',
        },
      },
      {
        permission: '010200',
        label: 'account_verification',
        name: 'AccountVerification',
        permissions: {
          create: '010201',
          delete: '010202',
          edit: '010203',
          query: '010204',
        },
      },
      {
        permission: '010300',
        label: 'in_site_mail',
        name: 'InSiteMail',
        permissions: {
          create: '010301',
          delete: '010302',
          edit: '010303',
          query: '010304',
        },
      },
      {
        permission: '010400',
        label: 'member_tag',
        name: 'MemberTag',
        permissions: {
          create: '010401',
          delete: '010402',
          edit: '010403',
          query: '010404',
        },
      },
    ],
  },
  {
    permission: '020000',
    label: 'financial_management',
    icon: 'monetization_on',
    children: [
      {
        permission: '020100',
        label: 'withdrawal_record',
        name: 'WithdrawalRecord',
        permissions: {
          create: '020101',
          delete: '020102',
          edit: '020103',
          query: '020104',
        },
      },
      {
        permissionId: '020200',
        label: 'withdrawal_audit',
        name: 'WithdrawalAudit',
        permissions: {
          create: '020201',
          delete: '020202',
          edit: '020203',
          query: '020204',
        },
      },
      {
        permission: '020300',
        label: 'deposit_record',
        name: 'DepositRecord',
        permissions: {
          create: '020301',
          delete: '020302',
          edit: '020303',
          query: '020304',
        },
      },
      {
        permission: '020400',
        label: 'deposit_audit',
        name: 'DepositAudit',
        permissions: {
          create: '020401',
          delete: '020402',
          edit: '020403',
          query: '020404',
        },
      },
      {
        permission: '020500',
        label: 'adjustment_record',
        name: 'AdjustmentRecord',
        permissions: {
          create: '020501',
          delete: '020502',
          edit: '020503',
          query: '020504',
        },
      },
      {
        permission: '020600',
        label: 'adjustment_audit',
        name: 'AdjustmentAudit',
        permissions: {
          create: '020601',
          delete: '020602',
          edit: '020603',
          query: '020604',
        },
      },
      {
        permission: '020700',
        label: 'transaction_record',
        name: 'TransactionRecord',
        permissions: {
          create: '020701',
          delete: '020702',
          edit: '020703',
          query: '020704',
        },
      },
    ],
  },
]
