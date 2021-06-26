import staticServiceList from './staticData/serviceList.js';
import staticPriceList from './staticData/priceList.js';

export default function mapTranslate(translate) {
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
