export default {
  // general
  general: {
    button: {
      search: '查詢',
      today: '今日',
      yesterday: '昨日',
      last7Days: '最近7天',
      last14Days: '最近14天',
      thisMonth: '本月',
      lastMonth: '上月',
    },
  },

  // menu
  menu: {
    member_management: {
      label: '會員管理',
      children: {
        member_list: {
          label: '會員列表',
        },
        account_verification: {
          label: '帳戶驗證',
        },
        in_site_mail: {
          label: '站內信',
        },
        member_tag: {
          label: '會員標籤',
        },
      },
    },
    financial_management: {
      label: '財務管理',
      children: {
        withdrawal_record: {
          label: '出金紀錄',
        },
        withdrawal_audit: {
          label: '出金審核',
        },
        deposit_record: {
          label: '入金紀錄',
        },
        deposit_audit: {
          label: '入金審核',
        },
        adjustment_record: {
          label: '調帳紀錄',
        },
        adjustment_audit: {
          label: '調帳審核',
        },
        transaction_record: {
          label: '交易紀錄',
        },
      },
    },
  },

  member_list: {
    search_section: {
      user_name: '用戶名',
      account_status: '帳號狀態',
      account_type: '帳號類別',
      vip_level: 'VIP等級',
      name: '姓名',
      verification_level: '驗證等級',
      agent: '代理',
      tags: '標籤',
      email: '電子郵件',
      mobile: '手機',
      register_type: '註冊方式',
      action_type: '使用行為',
      start_at: '開始時間',
      end_at: '結束時間',
      options: {
        statusOptions: ['啟用', '禁用'],
        typeOptions: ['試玩會員', '正式會員', '測試帳號'],
        vipLevelOptions: [
          'VIP1',
          'VIP2',
          'VIP3',
          'VIP4',
          'VIP5',
          'VIP6',
          'VIP7',
          'VIP8',
          'VIP9',
          'VIP10',
        ],
        verificationLevelOptions: [
          '未驗證',
          '一階驗證',
          '二階驗證',
          '三階驗證',
        ],
        tagOptions: ['高風險', '低風險'],
        registerTypeOptions: [
          '電子郵件',
          '手機',
          'Facebook',
          'Google',
          'X',
          '後台新增',
        ],
        actionTypeOptions: [
          '註冊時間',
          '最後登入時間',
          '最後遊戲請求',
          '最後出金請求',
        ],
      },
      placeholder: {
        user_name: '請輸入用戶名',
        name: '請輸入姓名',
        agent: '請輸入代理',
        email: '請輸入電子郵件',
        phone: '請輸入手機',
      },
    },
    table_section: {
      user_name: '用戶名',
      account_status: '帳號狀態',
      account_type: '帳號類別',
      vip_level: 'VIP等級',
      agent: '代理',
      name: '姓名',
      mobile: '手機',
      verification_level: '驗證等級',
      principal_wallet_balance: '主錢包餘額',
      total_deposit: '總入金',
      total_withdraw: '總出金',
      last_withdrawal_request: '最後出金請求',
      register_type: '註冊方式',
      register_time: '註冊時間',
      last_login_time: '最後登入時間',
      last_game_request: '最後遊戲請求',
      tags: '標籤',
    },
  },
}
