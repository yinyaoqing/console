export default {
  // general
  general: {
    button: {
      search: '検索',
      today: '今日',
      yesterday: '昨日',
      last7Days: '過去7日間',
      last14Days: '過去14日間',
      thisMonth: '今月',
      lastMonth: '先月',
    },
  },
  // menu
  menu: {
    member_management: {
      label: '会員管理',
      children: {
        member_list: {
          label: '会員一覧',
        },
        account_verification: {
          label: 'アカウント認証',
        },
        in_site_mail: {
          label: 'サイト内メール',
        },
        member_tag: {
          label: '会員タグ',
        },
      },
    },
    financial_management: {
      label: '財務管理',
      children: {
        withdrawal_record: {
          label: '出金履歴',
        },
        withdrawal_audit: {
          label: '出金審査',
        },
        deposit_record: {
          label: '入金履歴',
        },
        deposit_audit: {
          label: '入金審査',
        },
        adjustment_record: {
          label: '調整履歴',
        },
        adjustment_audit: {
          label: '調整審査',
        },
        transaction_record: {
          label: '取引履歴',
        },
      },
    },
  },

  member_list: {
    search_section: {
      user_name: 'ユーザー名',
      account_status: 'アカウント状態',
      account_type: 'アカウント種別',
      vip_level: 'VIPレベル',
      name: '氏名',
      verification_level: '認証レベル',
      agent: '代理店',
      tags: 'タグ',
      email: 'メールアドレス',
      mobile: '携帯電話',
      register_type: '登録方法',
      action_type: 'アクション種別',
      start_at: '開始日時',
      end_at: '終了日時',
      options: {
        statusOptions: ['有効', '無効'],
        typeOptions: ['お試し会員', '正会員', 'テストアカウント'],
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
          '未認証',
          '一次認証',
          '二次認証',
          '三次認証',
        ],
        tagOptions: ['高リスク', '低リスク'],
        registerTypeOptions: [
          'メールアドレス',
          '携帯電話',
          'Facebook',
          'Google',
          'X',
          '管理画面から追加',
        ],
        actionTypeOptions: [
          '登録日時',
          '最終ログイン',
          '最終ゲームリクエスト',
          '最終出金リクエスト',
        ],
      },
      placeholder: {
        user_name: 'ユーザー名を入力してください',
        name: '氏名を入力してください',
        agent: '代理店を入力してください',
        email: 'メールアドレスを入力してください',
        phone: '携帯電話を入力してください',
      },
    },
    table_section: {
      user_name: 'ユーザー名',
      account_status: 'アカウント状態',
      account_type: 'アカウント種別',
      vip_level: 'VIPレベル',
      agent: '代理店',
      name: '氏名',
      mobile: '携帯電話',
      verification_level: '認証レベル',
      principal_wallet_balance: 'メインウォレット残高',
      total_deposit: '総入金',
      total_withdraw: '総出金',
      last_withdrawal_request: '最終出金リクエスト',
      register_type: '登録方法',
      register_time: '登録時間',
      last_login_time: '最終ログイン時間',
      last_game_request: '最終ゲームリクエスト',
      tags: 'タグ',
    },
  },
}
