export default {
  // general
  general: {
    button: {
      search: 'Search',
      today: 'Today',
      yesterday: 'Yesterday',
      last7Days: 'Last 7 Days',
      last14Days: 'Last 14 Days',
      thisMonth: 'This Month',
      lastMonth: 'Last Month',
    },
  },
  // menu
  menu: {
    member_management: {
      label: 'Member Management',
      children: {
        member_list: {
          label: 'Member List',
        },
        account_verification: {
          label: 'Account Verification',
        },
        in_site_mail: {
          label: 'In-Site Mail',
        },
        member_tag: {
          label: 'Member Tag',
        },
      },
    },
    financial_management: {
      label: 'Financial Management',
      children: {
        withdrawal_record: {
          label: 'Withdrawal Record',
        },
        withdrawal_audit: {
          label: 'Withdrawal Audit',
        },
        deposit_record: {
          label: 'Deposit Record',
        },
        deposit_audit: {
          label: 'Deposit Audit',
        },
        adjustment_record: {
          label: 'Adjustment Record',
        },
        adjustment_audit: {
          label: 'Adjustment Audit',
        },
        transaction_record: {
          label: 'Transaction Record',
        },
      },
    },
  },

  member_list: {
    search_section: {
      user_name: 'Username',
      account_status: 'Account Status',
      account_type: 'Account Type',
      vip_level: 'VIP Level',
      name: 'Name',
      verification_level: 'Verification Level',
      agent: 'Agent',
      tags: 'Tags',
      email: 'Email',
      mobile: 'Mobile',
      register_type: 'Registration Method',
      action_type: 'Action Type',
      start_at: 'Start Time',
      end_at: 'End Time',
      options: {
        statusOptions: ['Enabled', 'Disabled'],
        typeOptions: ['Trial Member', 'Regular Member', 'Test Account'],
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
          'Unverified',
          'Level 1 Verification',
          'Level 2 Verification',
          'Level 3 Verification',
        ],
        tagOptions: ['High Risk', 'Low Risk'],
        registerTypeOptions: [
          'Email',
          'Phone',
          'Facebook',
          'Google',
          'X',
          'Backend Addition',
        ],
        actionTypeOptions: [
          'Registration Time',
          'Last Login Time',
          'Last Game Request',
          'Last Withdrawal Request',
        ],
      },
      placeholder: {
        user_name: 'Please enter the username',
        name: 'Please enter the name',
        agent: 'Please enter the agent',
        email: 'Please enter the email',
        phone: 'Please enter the phone',
      },
    },
    table_section: {
      user_name: 'User Name',
      account_status: 'Account Status',
      account_type: 'Account Type',
      vip_level: 'VIP Level',
      agent: 'Agent',
      name: 'Name',
      mobile: 'Mobile',
      verification_level: 'Verification Level',
      principal_wallet_balance: 'Principal Wallet Balance',
      total_deposit: 'Total Deposit',
      total_withdraw: 'Total Withdraw',
      last_withdrawal_request: 'Last Withdrawal Request',
      register_type: 'Register Type',
      register_time: 'Register Time',
      last_login_time: 'Last Login Time',
      last_game_request: 'Last Game Request',
      tags: 'Tags',
    },
  },
}
