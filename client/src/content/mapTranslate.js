import staticServiceList from './staticData/serviceList.js';
import staticPriceList from './staticData/priceList.js';

export default function mapTranslate(translate) {
    return ({
        ...translate,
        serviceList: (() => {
            const arr = [];
    
            for (let prop in staticServiceList) {
                arr.push({
                    img: staticServiceList[prop],
                    title: translate.serviceList[prop]
                });
            }
    
            return arr;
        })(),
    });
}
