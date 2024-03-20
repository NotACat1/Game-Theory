const navigateLinks = [
  {
    text: 'Поиск максимина/минимакса',
    link: '/',
    release: true,
  },
  {
    text: 'Удаление строго доминируемых стратегий',
    link: 'removing-dominated-strategies',
    release: true,
  },
  {
    text: 'Удаление слабо доминируемых стратегий',
    link: 'removing-weak-dominated-strategies',
    release: true,
  },
  {
    text: 'Удаление НЛО стратегий',
    link: '',
    release: false,
  },
  {
    text: 'Поиск равновесий по Нэшу в чистых стратегиях',
    link: '',
    release: false,
  },
  {
    text: 'Поиск равновесия по Нэшу в смешанных стратегиях в матрице 2х2',
    link: '',
    release: false,
  },
  {
    text: 'Поиск наилучшего ответа на смешанную стратегию соперника',
    link: '',
    release: false,
  },
];

const portalRoot = document.getElementById('portal-root');

export { navigateLinks, portalRoot };
