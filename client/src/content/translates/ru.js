import mapTranslate from '../mapTranslate.js';

export default mapTranslate({
    lang: 'ru',
    head : {
        title: 'СТО Позняки',
        description: 'СТО На Позняках. Замена Масла. Замена Ремня ГРМ. Диагностика Двигателя. Ремонт Двигателя. Диагностика ходовой'
    },
    serviceList: {
        diagnostics: "Комплексная диагностика автомобилей",
        clutch: "Система сцепления",
        brake: "Ремонт и обслуживание тормозных систем",
        grm: "ГРМ двигатель",
        undercarriage: "Ремонт и обслуживание ходовой части",
        steering: "Ремонт и бслуживание рулевого управления",
        liquids: "Замена технических жидкостей и фильтров",
        cooling: "Ремонт и обслуживание системы охлаждения",
        others: "Другие виды работ"
    },
    priceList: {
        diagnostic: {
            title: 'Диагностика',
            list: {
                id_0001: {
                    title: 'Комплексная диагностика',
                    items: [
                        "Ходовая часть / Амортизация",
                        "Тормозная система",
                        "Навесное оборудование",
                        "Жидкости",
                        "Подтекания"
                    ]
                },
                id_0002: { title: 'Предпрожная диагностика' },
                id_0003: { title: "Диагностика лакокрасочного покрытия" }
            }
        },
        liquids: {
            title: 'Замена жидкостей и фильтров',
            list: {
                id_0004: { "title": "Замена масла ДВС" },
                id_0005: { "title": "Замена масла МКПП" },
                id_0006: { "title": "Замена масла АКПП" },
                id_0007: { "title": "Замена воздушного фильтра" },
                id_0008: { "title": "Замена фильтра салона" },
                id_0009: { "title": "Замена бензинового топливного фильтра" },
                id_0010: { "title": "Замена топливного фильтра дизель" },
                id_0011: { "title": "Замена масла в роздаточной коробке" },
                id_0012: { "title": "Замена масла в мостах" },
                id_0013: { "title": "Замена жидкости системы охлаждения" },
                id_0014: { "title": "Смазка 1 крестовины кардана" },
            }
        },
        brake: {
            title: "Тормозная система",
            list: {
                id_0015: { "title": "Замена тормозного шланга" },
                id_0016: { "title": "Замена тормозных колодок дисковых с чисткой и смазкой направляющих ось" },
                id_0017: { "title": "Замена тормозных колодок барабанных (комплект)" },
                id_0018: { "title": "Регулировка ручного тормоза" },
                id_0019: { "title": "Замена троса ручника 1шт." },
                id_0020: { "title": "Замена ремкомплкта суппорта 1 поршень" },
                id_0021: { "title": "Замена главного тормозного цилиндра" },
                id_0022: { "title": "Замена тормозных дисков ось" },
                id_0023: { "title": "Замена тормозной жидкости" }
            }
        },
        steering: {
            title: "Рулевое управление",
            list: {
                id_0024: { "title": "Замена рулевого наконечника" },
                id_0025: { "title": "Замена рулевых тяг и наконечников (комплект)" }
            }
        },
        chassis: {
            title: "Ходовая часть",
            list: {
                id_0026: { "title": "Замена стойки стабилизатора" },
                id_0027: { "title": "Замена втулки стабилизатора 1шт." },
                id_0028: { "title": "Снятие и установка рычага" },
                id_0029: { "title": "Точка переприсовки сайлентблока 1шт." },
                id_0030: { "title": "Замена шаровой опоры" },
                id_0031: { "title": "Замена ступичного подшибника" },
                id_0032: { "title": "Замена переднего амортизатора" },
                id_0033: { "title": "Замена заднего амортизатора" },
                id_0034: { "title": "Замена ШРУСа" },
                id_0035: { "title":  "Замена пыльника ШРУСа" }
            }
        }
    },
    header: {
        nav: {
            services: 'услуги',
            pricelist: 'цены',
            contacts: 'контакты'
        }
    },
    workflow: [
        "Вы оставляете заявку на сайте. Менеджер свяжется с Вами чтобы договориться о дате бесплатной диагностики",
        "Проводим осмотр на подъемнике. Выявляем точный \"диапазон\" и подготавливаем список необходимых для ремонта запчастей",
        "Подбор и поиск запчастей. При необходимости замены запчастей, согласовываем с Вами список и приступаем к их подбору и поиску",
        "Подготавливаем и согласовываем смету. Никаких дополнительных платежей и навязанных услуг. Всё чётко фиксируем"
    ],
    consultation: {
        title: 'Запросить консультацию',
        request: 'запросить',
        form: {
            tel: 'телефон',
            name: 'имя'
        }
    },
    footer: {
        address: 'Дарницкий район, ул. Полеская 7, ГБК Захисник',
        lookOnGmap: 'посмотреть нас на карте',
        floor: {
            geo: 'Киев • Украина',
            since: 'работаем с 2018'
        }
    }
});
