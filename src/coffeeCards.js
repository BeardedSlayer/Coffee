import b1 from './assets/images/b1.png'
import b2 from './assets/images/b2.png'
import b3 from './assets/images/b3.jpg'
import b4 from './assets/images/b4.jpg'
import b5 from './assets/images/b5.jpg'
import b6 from './assets/images/b6.png'
import bo1 from './assets/images/bo1.png'
import bo2 from './assets/images/bo2.png'
import bo3 from './assets/images/bo3.png'
import bo4 from './assets/images/bo4.png'
import bo5 from './assets/images/bo5.png'
import bo6 from './assets/images/bo6.png'
import l1 from './assets/images/l1.png'
import l2 from './assets/images/l2.png'
import l3 from './assets/images/l3.png'
import l4 from './assets/images/l4.png'
import l5 from './assets/images/l5.png'
import l6 from './assets/images/l6.png'
import g1 from './assets/images/g1.png'
import g2 from './assets/images/g2.png'
import g3 from './assets/images/g3.png'
import g4 from './assets/images/g4.png'
import g5 from './assets/images/g5.png'
import g6 from './assets/images/g6.png'
import v1 from './assets/images/v1.png'
import v2 from './assets/images/v2.png'
import v3 from './assets/images/v3.png'
import v4 from './assets/images/v4.png'
import v5 from './assets/images/v5.png'
import v6 from './assets/images/v6.png'

export const coffeeCards = [
    {
        id: 1,
        brand: 'Blasercafe',
        name: 'BLASERCAFÉ Opera',
        description: 'Бархатистый вкус с нюансами какао и карамели, создаёт мягкий, но выразительный эспрессо.',
        price: '1 376 руб./шт',
        image: b1,
        gradient: `-webkit-linear-gradient(360deg, #000000, #383029)`
    },
    {
        id: 2,
        brand: 'Blasercafe',
        name: 'BLASERCAFÉ Marrone',
        description: 'Глубокий шоколадно‑ореховый вкус с долгим послевкусием, хорошо подходит для капучино и латте.',
        price: '1 153 руб./шт',
        image: b2,
        gradient: `-webkit-linear-gradient(90deg, #574529, #3a2818)`
    },
    {
        id: 3,
        brand: 'Blasercafe',
        name: 'BLASERCAFÉ Rosso & Nero',
        description: 'Интенсивный, тёмный вкус с нотами горького шоколада и поджаренных\n' +
            '                                зёрен, для крепкого эспрессо с характером.',
        price: '1 612 руб./шт',
        image: b3,
        gradient: `-webkit-linear-gradient(360deg, #000000, #383029)`
    },
    {
        id: 4,
        brand: 'Blasercafe',
        name: 'BLASERCAFÉ Pura Vida',
        description: 'Яркий, живой вкус с лёгкой фруктовой кислинкой и мёдовой сладостью,\n' +
            '                                отлично раскрывается в фильтр‑кофе.',
        price: '1 436 руб./шт',
        image: b4,
        gradient: `-webkit-linear-gradient(90deg, #113612, #306029)`
    },
    {
        id: 5,
        brand: 'Blasercafe',
        name: 'BLASERCAFÉ Gourmets Plaisir',
        description: 'Богатый, многогранный вкус с оттенками тёмного шоколада, ванили и\n' +
            '                                орехов, для тех, кто любит плотный, насыщенный кофе.',
        price: '1 792 руб./шт',
        image: b5,
        gradient: `-webkit-linear-gradient(90deg, #a6aba6, #595f58)`
    },
    {
        id: 6,
        brand: 'Blasercafe',
        name: 'BLASERCAFÉ Ballerina',
        description: 'Нежный сбалансированный вкус с мягкими карамельными и ореховыми\n' +
            '                                нотами, идеально для ежедневного эспрессо.',
        price: '1 569 руб./шт',
        image: b6,
        gradient: `-webkit-linear-gradient(90deg, #ad6500, #edaf02)`
    },

    {
        id: 7,
        brand: 'Boasi',
        name: 'BOASI Gran Caffe',
        description: ` Мягкий сбалансированный вкус и яркий насыщенный аромат.`,
        price: `1 276 руб./шт`,
        image: bo1,
        gradient: `linear-gradient(169.96deg, #850C1B 33.34%, rgba(186, 16, 39, 0.626923) 60.7%, rgba(204, 17, 43, 0.496154) 70.29%, rgba(247, 21, 53, 0.2) 92.01%)`
    },

    {
        id: 8,
        brand: `Boasi`,
        name: 'BOASI Gran Caffe',
        description: `Ароматный кофе, с едва ощутимой финальной кислинкой.`,
        price: `1 053 руб./шт`,
        image: bo2,
        gradient: `linear-gradient(169.96deg, #002416 33.34%, rgba(0, 145, 113, 0.2) 92.01%)`
    },

    {
        id: 9,
        brand: 'Boasi',
        name: 'BOASI Gran Riserva Speciale',
        description: `Изысканная смесь с особо выраженной полнотелостью. `,
        price: `1 082 руб./шт`,
        image: bo3,
        gradient: `linear-gradient(169.96deg, #6F6F71 33.34%, rgba(67, 65, 69, 0.2) 92.01%)`
    },

    {
        id: 10,
        brand: 'Boasi',
        name: 'BOASI Gran Caffe Professional',
        description: `Насыщенная смесь с богатым, интенсивным вкусом.`,
        price: `1 534 руб./шт`,
        image: bo4,
        gradient: `linear-gradient(169.96deg, #7E1221 33.34%, rgba(167, 58, 73, 0.2) 92.01%)`
    },

    {
        id: 11,
        brand: 'Boasi',
        name: 'BOASI Super Crema Pro',
        description: `Специальная смесь из зерен арабики и робусты. `,
        price: `992 руб./шт`,
        image: bo5,
        gradient: `linear-gradient(169.96deg, #D7D2CF 33.34%, rgba(239, 239, 239, 0.2) 92.01%)`
    },

    {
        id: 12,
        brand: 'Boasi',
        name: 'ВOASI Gran Riserva',
        description: `Деликатная, ароматная и душистая смесь.`,
        price: `1 503 руб./шт`,
        image: bo6,
        gradient: `linear-gradient(169.96deg, #023860 33.34%, rgba(16, 46, 72, 0.2) 92.01%)`
    },

    {
        id: 13,
        brand: 'Garibaldi',
        name: 'GARIBALDI Intenso',
        description: `Крепкий насыщенный эспрессо с оттенками горького шоколада и сухофруктов.`,
        price: `1 450 руб./шт`,
        image: g1,
        gradient: `-webkit-linear-gradient(90deg, #c4af73,#c82828)`
    },

    {
        id: 14,
        brand: 'Garibaldi',
        name: 'GARIBALDI Top Bar',
        description: `Изысканная 100% арабика с мягкой кислинкой и долгим послевкусием какао и сухофруктов.`,
        price: `1 650 руб./шт`,
        image: g2,
        gradient: `-webkit-linear-gradient(90deg, #c2b48e,#000000)`
    },

    {
        id: 15,
        brand: 'Garibaldi',
        name: 'GARIBALDI Gusto Dolce',
        description: `Мягкий сбалансированный вкус с нотками специй и послевкусием какао.`,
        price: `1 350 руб./шт`,
        image: g3,
        gradient: `-webkit-linear-gradient(90deg, #e0ded6,#6bd9e1)`
    },

    {
        id: 16,
        brand: 'Garibaldi',
        name: 'GARIBALDI Espresso Bar',
        description: `Плотный бодрящий кофе с ароматом поджаренного тоста и печенья.`,
        price: `1 150 руб./шт`,
        image: g4,
        gradient: `-webkit-linear-gradient(90deg, #c4af73,#513a24)`
    },

    {
        id: 17,
        brand: 'Garibaldi',
        name: 'GARIBALDI Dolce Aroma',
        description: `Деликатный мягкий вкус с приятной сладостью и нотками лесного ореха.`,
        price: `1 390 руб./шт`,
        image: g5,
        gradient: `-webkit-linear-gradient(90deg, #c4af73,#e48a0c)`
    },

    {
        id: 18,
        brand: 'Garibaldi',
        name: 'GARIBALDI Versilia',
        description: `Интенсивный аромат и выраженный вкус молочного шоколада с густой пенкой.`,
        price: `1 290 руб./шт`,
        image: g6,
        gradient: `-webkit-linear-gradient(90deg, #c4af73,#297b24)`
    },

    {
        id: 19,
        brand: 'Lavazza',
        name: 'LAVAZZA Crema e Aroma',
        description: `Сбалансированный бленд с плотной кремой, нотами арахиса и мускатного ореха.`,
        price: `1 550 руб./шт`,
        image: l1,
        gradient: `-webkit-linear-gradient(90deg, #2518d8,#b81919)`
    },

    {
        id: 20,
        brand: 'Lavazza',
        name: 'LAVAZZA Qualità Rossa',
        description: `Классический итальянский вкус. Насыщенный аромат с нотками шоколада и сухофруктов.`,
        price: `1 450 руб./шт`,
        image: l2,
        gradient: `-webkit-linear-gradient(90deg, #a9a9ad,#b81919)`
    },

    {
        id: 21,
        brand: 'Lavazza',
        name: 'LAVAZZA Caffè Espresso',
        description: `100% арабика средней обжарки. Благородный вкус с цветочными и фруктовыми оттенками.`,
        price: `1 750 руб./шт`,
        image: l3,
        gradient: `-webkit-linear-gradient(90deg, #0a0a0a,#b81919)`
    },

    {
        id: 22,
        brand: 'Lavazza',
        name: 'LAVAZZA Super Crema',
        description: `Мягкий бархатистый вкус с нотами меда, миндаля и сухофруктов. Идеален для капучино.`,
        price: `1 390 руб./шт`,
        image: l4,
        gradient: `-webkit-linear-gradient(90deg, #0f24bd,#d4c416)`
    },

    {
        id: 23,
        brand: 'Lavazza',
        name: 'LAVAZZA Crema e Gusto Classico',
        description: `Крепкий и интенсивный кофе темной обжарки с выраженным послевкусием какао и специй.`,
        price: `1 390 руб./шт`,
        image: l5,
        gradient: `-webkit-linear-gradient(90deg, #0f24bd,#d41616)`
    },

    {
        id: 24,
        brand: 'Lavazza',
        name: 'LAVAZZA Caffè Decaffeinato',
        description: `Полнотелый вкус настоящего эспрессо без кофеина. Легкие нотки сухофруктов и шоколада.`,
        price: `1 590 руб./шт`,
        image: l6,
        gradient: `-webkit-linear-gradient(90deg, #2a3bbb,#51a3e1)`
    },

    {
        id: 25,
        brand: 'Vergnano',
        name: 'VERGNANO Espresso Classico \'600',
        description: `Крепкий и интенсивный бленд с высоким содержанием робусты. Плотное тело и шоколадные ноты.`,
        price: `1 490 руб./шт`,
        image: v1,
        gradient: `-webkit-linear-gradient(90deg, #e0ded6,#000000)`
    },

    {
        id: 26,
        brand: 'Vergnano',
        name: 'VERGNANO Espresso Dolce \'900',
        description: `Ароматный бленд для ценителей мягкого вкуса. Преобладает арабика с фруктовыми оттенками.`,
        price: `1 750 руб./шт`,
        image: v2,
        gradient: `-webkit-linear-gradient(90deg, #1db927,#000000)`
    },

    {
        id: 27,
        brand: 'Vergnano',
        name: 'VERGNANO 100% Arabica',
        description: `Изысканный кофе с деликатным вкусом, легкой кислинкой и цветочным ароматом.`,
        price: `1 550 руб./шт`,
        image: v3,
        gradient: `-webkit-linear-gradient(90deg, #ccc98a,#000000)`
    },

    {
        id: 28,
        brand: 'Vergnano',
        name: 'VERGNANO Espresso Crema \'800',
        description: `Мягкий и ароматный кофе с густой кремой. Сладковатый вкус арабики с легкой нотой шоколада.`,
        price: `1 650 руб./шт`,
        image: v4,
        gradient: `-webkit-linear-gradient(90deg, #0b51c1,#000000)`
    },

    {
        id: 29,
        brand: 'Vergnano',
        name: 'VERGNANO Espresso',
        description: `Классический итальянский эспрессо. Насыщенный, полный вкус с идеально сбалансированной крепостью.`,
        price: `1 550 руб./шт`,
        image: v5,
        gradient: `-webkit-linear-gradient(90deg, #c11d0b,#000000)`
    },

    {
        id: 30,
        brand: 'Vergnano',
        name: 'VERGNANO Gran Aroma',
        description: `Богатый вкус с пряными и шоколадными нотками. Идеален для завтрака благодаря плотной пенке.`,
        price: `1 450 руб./шт`,
        image: v6,
        gradient: `-webkit-linear-gradient(90deg, #cfd095,#000000)`
    }
];