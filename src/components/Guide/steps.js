const steps = (i18n) => {
  return [
    {
      element: '#guide-start',
      popover: {
        title: i18n.t('guide.guideTitle'),
        description: i18n.t('guide.guideDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-search',
      popover: {
        title: i18n.t('guide.searchTitle'),
        description: i18n.t('guide.searchDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-screen',
      popover: {
        title: i18n.t('guide.fullTitle'),
        description: i18n.t('guide.fullDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-theme',
      popover: {
        title: i18n.t('guide.themeTitle'),
        description: i18n.t('guide.themeDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-lang',
      popover: {
        title: i18n.t('guide.langTitle'),
        description: i18n.t('guide.langDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-hambburger',
      popover: {
        title: i18n.t('guide.hamburgerTitle'),
        description: i18n.t('guide.hamburgerDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-breadcrumb',
      popover: {
        title: i18n.t('guide.breadcrumbTitle'),
        description: i18n.t('guide.breadcrumbDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-tag',
      popover: {
        title: i18n.t('guide.tagTitle'),
        description: i18n.t('guide.tagDesc'),
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-sidebar',
      popover: {
        title: i18n.t('guide.sidebarTitle'),
        description: i18n.t('guide.sidebarDesc'),
        position: 'right'
      }
    }
  ]
}

export default steps
