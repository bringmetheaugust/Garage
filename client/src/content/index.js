import staticServiceList from './staticData/serviceList.mjs';
import staticPriceList from './staticData/priceList.mjs';

import ua from './translates/ua.mjs';
import ru from './translates/ru.mjs';

export const uaTranslate = buildTranslate(ua);
export const ruTranslate = buildTranslate(ru);

function buildTranslate(translate) {
    const { service, price } = translate;

    return ({
        ...translate,
        service: {
            ...service,
            list: staticServiceList.map(staticService => ({
                ...staticService,
                title: service.list[staticService.title]
            })),
        },
        price: {
            ...price,
            list: staticPriceList.map(priceCategory => ({
                ...priceCategory,
                title: price.list[priceCategory.title],
                list: priceCategory.list.map(priceItem => ({
                    ...priceItem,
                    title: price.list[priceItem.title],
                    items: priceItem.items && priceItem.items.map(subItem => price.list[subItem])
                }))
            }))
        }
    });
}
