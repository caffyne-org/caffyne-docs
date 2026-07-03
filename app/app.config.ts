export default defineAppConfig({
  ui: {
    colors: {
      primary: 'lavender',
      neutral: 'caff',
      info: 'blue',
      success: 'green',
      warning: 'yellow',
      error: 'red'
    },
    main: {
      base: 'min-h-[calc(100vh-var(--ui-header-height)*2)] dark:bg-neutral-950'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },

  seo: {
    siteName: 'caffyne'
  },

  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-discord',
        'to': 'https://discord.gg/umtB24kc8Y',
        'target': '_blank',
        'aria-label': 'Discord'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/caffyne-org/caffyne-shell',
        'target': '_blank',
        'aria-label': 'GitHub'
      }
    ]
  },

  footer: {
    credits: `caffyne.org • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        label: 'Disclaimer',
        to: '/disclaimer'
      },
      {
        'icon': 'i-simple-icons-discord',
        'to': 'https://discord.gg/umtB24kc8Y',
        'target': '_blank',
        'aria-label': 'Nuxt on Discord'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/caffyne-org/caffyne-shell',
        'target': '_blank',
        'aria-label': 'GitHub'
      }
    ]
  },

  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/caffyne-org/caffyne-docs',
      links: [
        {
          icon: 'i-lucide-star',
          label: 'Star on GitHub',
          to: 'https://github.com/caffyne-org/caffyne-shell',
          target: '_blank'
        },
        {
          icon: 'i-lucide-message-circle-question-mark',
          label: 'Chat on Discord',
          to: 'https://discord.gg/umtB24kc8Y',
          target: '_blank'
        }
      ]
    }
  }
})
