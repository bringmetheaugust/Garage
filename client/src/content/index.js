import staticServiceList from './staticData/serviceList.mjs';
import staticPriceList from './staticData/priceList.mjs';

import ua from './translates/ua.mjs';
import ru from './translates/ru.mjs';

export const uaTranslate = buildTranslate(ua);
export const ruTranslate = buildTranslate(ru);

function buildTranslate(translate) {
    const { serviceList, priceList } = translate;

    return ({
        ...translate,
        serviceList: staticServiceList.map(service => ({
            ...service,
            title: serviceList[service.title]
        })),
        priceList: staticPriceList.map(priceCategory => ({
            ...priceCategory,
            title: priceList[priceCategory.title],
            list: priceCategory.list.map(priceItem => ({
                ...priceItem,
                title: priceList[priceItem.title],
                items: priceItem.items && priceItem.items.map(subItem => priceList[subItem])
            }))
        }))
    });
}
