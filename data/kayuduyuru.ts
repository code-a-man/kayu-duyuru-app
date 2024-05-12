import {load} from 'cheerio';

type News = {
  title: string;
  date: string;
  description: string;
  link: string;
};

const getNews = async (prefix: string) => {
  const url = `https://${prefix}.kayseri.edu.tr`;
  const site = await fetch(`${url}/tr/duyurular`);
  if (site.status !== 200) {
    console.log(`Kayseri Üni. ${prefix} sayfası ulaşılamadı.`);
    return null;
  }
  const siteText = await site.text();
  const $ = load(siteText);
  const news: any = [];

  $('#newsList > a').each((i, el) => {
    const data = {
      title: $(el).find('div.mt-3.text-dark.fw7.fs15').text().trim(),
      date: $(el)
        .find('div.fw1.fs14.border-bottom.pb-2.badge.badge-info.p-2')
        .text()
        .trim(),
      description: $(el)
        .find('div.fs13.mt-2')
        .text()
        .trim()
        .replaceAll('\n', ''),
      link: url + $(el).attr('href'),
    };
    news.unshift(data);
  });

  return news as News[];
};

export default getNews;
export type {News};
