import staticServiceList from './staticData/serviceList.mjs';
import staticPriceList from './staticData/priceList.mjs';

import ua from './translates/ua.mjs';
import ru from './translates/ru.mjs';

export const uaTranslate = mapTranslate(ua);
export const ruTranslate = mapTranslate(ru);

function mapTranslate(translate) {
    const { serviceList, priceList } = translate;

    return ({
        ...translate,
        serviceList: (() => {
            const arr = [];
    
            for (let prop in staticServiceList) {
                arr.push({
                    img: staticServiceList[prop],
                    title: serviceList[prop]
                });
            }
    
            return arr;
        })(),
        priceList: (() => {
            const arr = [];

            for (let categoryProp in priceList) {
                arr.push({
                    title: priceList[categoryProp].title,
                    list: (() => {
                        const arr = [];
                        const { list } = priceList[categoryProp];
    
                        for (let itemProp in list) {
                            arr.push({
                                title: list[itemProp].title,
                                price: staticPriceList[itemProp],
                                items : list[itemProp].items
                            });
                        }
                
                        return arr;
                    })()
                });
            }
    
            return arr;
        })()
    });
}
