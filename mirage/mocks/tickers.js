/* eslint-disable no-param-reassign */
const tickers = {
  tickers: [
    {
      id: 0,
      symbol: 'ETHBTC',
      price: 0.080748,
    },
    {
      id: 1,
      symbol: 'LTCBTC',
      price: 0.016455,
    },
    {
      id: 2,
      symbol: 'BNBBTC',
      price: 0.0014966,
    },
    {
      id: 3,
      symbol: 'NEOBTC',
      price: 0.00895,
    },
    {
      id: 4,
      symbol: 'QTUMETH',
      price: 0.029498,
    },
    {
      id: 5,
      symbol: 'EOSETH',
      price: 0.02247,
    },
    {
      id: 6,
      symbol: 'SNTETH',
      price: 0.0002186,
    },
    {
      id: 7,
      symbol: 'BNTETH',
      price: 0.006592,
    },
    {
      id: 8,
      symbol: 'BCCBTC',
      price: 0.152892,
    },
    {
      id: 9,
      symbol: 'GASBTC',
      price: 0.003677,
    },
    {
      id: 10,
      symbol: 'BNBETH',
      price: 0.018532,
    },
    {
      id: 11,
      symbol: 'BTCUSDT',
      price: 9625.0,
    },
    {
      id: 12,
      symbol: 'ETHUSDT',
      price: 777.37,
    },
    {
      id: 13,
      symbol: 'HSRBTC',
      price: 0.001432,
    },
    {
      id: 14,
      symbol: 'OAXETH',
      price: 0.0011487,
    },
    {
      id: 15,
      symbol: 'DNTETH',
      price: 0.00014898,
    },
    {
      id: 16,
      symbol: 'MCOETH',
      price: 0.015398,
    },
    {
      id: 17,
      symbol: 'ICNETH',
      price: 0.0020916,
    },
    {
      id: 18,
      symbol: 'MCOBTC',
      price: 0.001244,
    },
    {
      id: 19,
      symbol: 'WTCBTC',
      price: 0.0018305,
    },
    {
      id: 20,
      symbol: 'WTCETH',
      price: 0.02259,
    },
    {
      id: 21,
      symbol: 'LRCBTC',
      price: 0.00009324,
    },
    {
      id: 22,
      symbol: 'LRCETH',
      price: 0.00116056,
    },
    {
      id: 23,
      symbol: 'QTUMBTC',
      price: 0.002381,
    },
    {
      id: 24,
      symbol: 'YOYOBTC',
      price: 0.00002096,
    },
    {
      id: 25,
      symbol: 'OMGBTC',
      price: 0.00189,
    },
    {
      id: 26,
      symbol: 'OMGETH',
      price: 0.023386,
    },
    {
      id: 27,
      symbol: 'ZRXBTC',
      price: 0.00016332,
    },
    {
      id: 28,
      symbol: 'ZRXETH',
      price: 0.00201993,
    },
    {
      id: 29,
      symbol: 'STRATBTC',
      price: 0.0007889,
    },
    {
      id: 30,
      symbol: 'STRATETH',
      price: 0.009744,
    },
    {
      id: 31,
      symbol: 'SNGLSBTC',
      price: 0.0000126,
    },
    {
      id: 32,
      symbol: 'SNGLSETH',
      price: 0.000155,
    },
    {
      id: 33,
      symbol: 'BQXBTC',
      price: 0.00038079,
    },
    {
      id: 34,
      symbol: 'BQXETH',
      price: 0.0047023,
    },
    {
      id: 35,
      symbol: 'KNCBTC',
      price: 0.00026047,
    },
    {
      id: 36,
      symbol: 'KNCETH',
      price: 0.0032363,
    },
    {
      id: 37,
      symbol: 'FUNBTC',
      price: 0.00000539,
    },
    {
      id: 38,
      symbol: 'FUNETH',
      price: 0.00006653,
    },
    {
      id: 39,
      symbol: 'SNMBTC',
      price: 0.0000295,
    },
    {
      id: 40,
      symbol: 'SNMETH',
      price: 0.00036643,
    },
    {
      id: 41,
      symbol: 'NEOETH',
      price: 0.111023,
    },
    {
      id: 42,
      symbol: 'IOTABTC',
      price: 0.00025335,
    },
    {
      id: 43,
      symbol: 'IOTAETH',
      price: 0.00313528,
    },
    {
      id: 44,
      symbol: 'LINKBTC',
      price: 0.00005855,
    },
    {
      id: 45,
      symbol: 'LINKETH',
      price: 0.00072511,
    },
    {
      id: 46,
      symbol: 'XVGBTC',
      price: 0.00000834,
    },
    {
      id: 47,
      symbol: 'XVGETH',
      price: 0.00010329,
    },
    {
      id: 48,
      symbol: 'SALTBTC',
      price: 0.0004327,
    },
    {
      id: 49,
      symbol: 'SALTETH',
      price: 0.005336,
    },
    {
      id: 50,
      symbol: 'MDABTC',
      price: 0.00013074,
    },
    {
      id: 51,
      symbol: 'MDAETH',
      price: 0.0016222,
    },
    {
      id: 52,
      symbol: 'MTLBTC',
      price: 0.0005537,
    },
    {
      id: 53,
      symbol: 'MTLETH',
      price: 0.006813,
    },
    {
      id: 54,
      symbol: 'SUBBTC',
      price: 0.00008519,
    },
    {
      id: 55,
      symbol: 'SUBETH',
      price: 0.00105486,
    },
    {
      id: 56,
      symbol: 'EOSBTC',
      price: 0.001816,
    },
    {
      id: 57,
      symbol: 'SNTBTC',
      price: 0.00001761,
    },
    {
      id: 58,
      symbol: 'ETCETH',
      price: 0.028783,
    },
    {
      id: 59,
      symbol: 'ETCBTC',
      price: 0.002322,
    },
    {
      id: 60,
      symbol: 'MTHBTC',
      price: 0.00001483,
    },
    {
      id: 61,
      symbol: 'MTHETH',
      price: 0.000184,
    },
    {
      id: 62,
      symbol: 'ENGBTC',
      price: 0.00030016,
    },
    {
      id: 63,
      symbol: 'ENGETH',
      price: 0.0037233,
    },
    {
      id: 64,
      symbol: 'DNTBTC',
      price: 0.00001201,
    },
    {
      id: 65,
      symbol: 'ZECBTC',
      price: 0.031422,
    },
    {
      id: 66,
      symbol: 'ZECETH',
      price: 0.38788,
    },
    {
      id: 67,
      symbol: 'BNTBTC',
      price: 0.00053208,
    },
    {
      id: 68,
      symbol: 'ASTBTC',
      price: 0.00005739,
    },
    {
      id: 69,
      symbol: 'ASTETH',
      price: 0.000702,
    },
    {
      id: 70,
      symbol: 'DASHBTC',
      price: 0.051012,
    },
    {
      id: 71,
      symbol: 'DASHETH',
      price: 0.62943,
    },
    {
      id: 72,
      symbol: 'OAXBTC',
      price: 0.00009307,
    },
    {
      id: 73,
      symbol: 'ICNBTC',
      price: 0.00016854,
    },
    {
      id: 74,
      symbol: 'BTGBTC',
      price: 0.007806,
    },
    {
      id: 75,
      symbol: 'BTGETH',
      price: 0.096852,
    },
    {
      id: 76,
      symbol: 'EVXBTC',
      price: 0.00018829,
    },
    {
      id: 77,
      symbol: 'EVXETH',
      price: 0.0023351,
    },
    {
      id: 78,
      symbol: 'REQBTC',
      price: 0.00002971,
    },
    {
      id: 79,
      symbol: 'REQETH',
      price: 0.00036805,
    },
    {
      id: 80,
      symbol: 'VIBBTC',
      price: 0.00002287,
    },
    {
      id: 81,
      symbol: 'VIBETH',
      price: 0.0002846,
    },
    {
      id: 82,
      symbol: 'HSRETH',
      price: 0.017735,
    },
    {
      id: 83,
      symbol: 'TRXBTC',
      price: 0.00000902,
    },
    {
      id: 84,
      symbol: 'TRXETH',
      price: 0.00011171,
    },
    {
      id: 85,
      symbol: 'POWRBTC',
      price: 0.00005978,
    },
    {
      id: 86,
      symbol: 'POWRETH',
      price: 0.00073918,
    },
    {
      id: 87,
      symbol: 'ARKBTC',
      price: 0.0003808,
    },
    {
      id: 88,
      symbol: 'ARKETH',
      price: 0.004693,
    },
    {
      id: 89,
      symbol: 'YOYOETH',
      price: 0.00025965,
    },
    {
      id: 90,
      symbol: 'XRPBTC',
      price: 0.00009001,
    },
    {
      id: 91,
      symbol: 'XRPETH',
      price: 0.00111445,
    },
    {
      id: 92,
      symbol: 'MODBTC',
      price: 0.0003341,
    },
    {
      id: 93,
      symbol: 'MODETH',
      price: 0.004148,
    },
    {
      id: 94,
      symbol: 'ENJBTC',
      price: 0.00001814,
    },
    {
      id: 95,
      symbol: 'ENJETH',
      price: 0.00022469,
    },
    {
      id: 96,
      symbol: 'STORJBTC',
      price: 0.00012754,
    },
    {
      id: 97,
      symbol: 'STORJETH',
      price: 0.0015819,
    },
    {
      id: 98,
      symbol: 'BNBUSDT',
      price: 14.3938,
    },
    {
      id: 99,
      symbol: 'VENBNB',
      price: 0.3514,
    },
    {
      id: 100,
      symbol: 'YOYOBNB',
      price: 0.01401,
    },
    {
      id: 101,
      symbol: 'POWRBNB',
      price: 0.03994,
    },
    {
      id: 102,
      symbol: 'VENBTC',
      price: 0.00052814,
    },
    {
      id: 103,
      symbol: 'VENETH',
      price: 0.00653205,
    },
    {
      id: 104,
      symbol: 'KMDBTC',
      price: 0.0004592,
    },
    {
      id: 105,
      symbol: 'KMDETH',
      price: 0.005663,
    },
    {
      id: 106,
      symbol: 'NULSBNB',
      price: 0.27664,
    },
    {
      id: 107,
      symbol: 'RCNBTC',
      price: 0.00001697,
    },
    {
      id: 108,
      symbol: 'RCNETH',
      price: 0.00021042,
    },
    {
      id: 109,
      symbol: 'RCNBNB',
      price: 0.01132,
    },
    {
      id: 110,
      symbol: 'NULSBTC',
      price: 0.00041641,
    },
    {
      id: 111,
      symbol: 'NULSETH',
      price: 0.00513888,
    },
    {
      id: 112,
      symbol: 'RDNBTC',
      price: 0.00025474,
    },
    {
      id: 113,
      symbol: 'RDNETH',
      price: 0.0031543,
    },
    {
      id: 114,
      symbol: 'RDNBNB',
      price: 0.16993,
    },
    {
      id: 115,
      symbol: 'XMRBTC',
      price: 0.025157,
    },
    {
      id: 116,
      symbol: 'XMRETH',
      price: 0.3124,
    },
    {
      id: 117,
      symbol: 'DLTBNB',
      price: 0.02212,
    },
    {
      id: 118,
      symbol: 'WTCBNB',
      price: 1.2249,
    },
    {
      id: 119,
      symbol: 'DLTBTC',
      price: 0.00003314,
    },
    {
      id: 120,
      symbol: 'DLTETH',
      price: 0.0004085,
    },
    {
      id: 121,
      symbol: 'AMBBTC',
      price: 0.00009388,
    },
    {
      id: 122,
      symbol: 'AMBETH',
      price: 0.00116755,
    },
    {
      id: 123,
      symbol: 'AMBBNB',
      price: 0.06252,
    },
    {
      id: 124,
      symbol: 'BCCETH',
      price: 1.89291,
    },
    {
      id: 125,
      symbol: 'BCCUSDT',
      price: 1471.99,
    },
    {
      id: 126,
      symbol: 'BCCBNB',
      price: 102.09,
    },
    {
      id: 127,
      symbol: 'BATBTC',
      price: 0.00005169,
    },
    {
      id: 128,
      symbol: 'BATETH',
      price: 0.00063559,
    },
    {
      id: 129,
      symbol: 'BATBNB',
      price: 0.03461,
    },
    {
      id: 130,
      symbol: 'BCPTBTC',
      price: 0.0000655,
    },
    {
      id: 131,
      symbol: 'BCPTETH',
      price: 0.00081,
    },
    {
      id: 132,
      symbol: 'BCPTBNB',
      price: 0.04365,
    },
    {
      id: 133,
      symbol: 'ARNBTC',
      price: 0.0002122,
    },
    {
      id: 134,
      symbol: 'ARNETH',
      price: 0.00263647,
    },
    {
      id: 135,
      symbol: 'GVTBTC',
      price: 0.0026015,
    },
    {
      id: 136,
      symbol: 'GVTETH',
      price: 0.032211,
    },
    {
      id: 137,
      symbol: 'CDTBTC',
      price: 0.00000764,
    },
    {
      id: 138,
      symbol: 'CDTETH',
      price: 0.00009491,
    },
    {
      id: 139,
      symbol: 'GXSBTC',
      price: 0.0004521,
    },
    {
      id: 140,
      symbol: 'GXSETH',
      price: 0.005597,
    },
    {
      id: 141,
      symbol: 'NEOUSDT',
      price: 86.174,
    },
    {
      id: 142,
      symbol: 'NEOBNB',
      price: 5.987,
    },
    {
      id: 143,
      symbol: 'POEBTC',
      price: 0.00000614,
    },
    {
      id: 144,
      symbol: 'POEETH',
      price: 0.00007626,
    },
    {
      id: 145,
      symbol: 'QSPBTC',
      price: 0.00002203,
    },
    {
      id: 146,
      symbol: 'QSPETH',
      price: 0.00027234,
    },
    {
      id: 147,
      symbol: 'QSPBNB',
      price: 0.01466,
    },
    {
      id: 148,
      symbol: 'BTSBTC',
      price: 0.00003638,
    },
    {
      id: 149,
      symbol: 'BTSETH',
      price: 0.00045131,
    },
    {
      id: 150,
      symbol: 'BTSBNB',
      price: 0.02427,
    },
    {
      id: 151,
      symbol: 'XZCBTC',
      price: 0.004717,
    },
    {
      id: 152,
      symbol: 'XZCETH',
      price: 0.05852,
    },
    {
      id: 153,
      symbol: 'XZCBNB',
      price: 3.156,
    },
    {
      id: 154,
      symbol: 'LSKBTC',
      price: 0.0014587,
    },
    {
      id: 155,
      symbol: 'LSKETH',
      price: 0.018,
    },
    {
      id: 156,
      symbol: 'LSKBNB',
      price: 0.9724,
    },
    {
      id: 157,
      symbol: 'TNTBTC',
      price: 0.0000142,
    },
    {
      id: 158,
      symbol: 'TNTETH',
      price: 0.00017625,
    },
    {
      id: 159,
      symbol: 'FUELBTC',
      price: 0.00001162,
    },
    {
      id: 160,
      symbol: 'FUELETH',
      price: 0.00014379,
    },
    {
      id: 161,
      symbol: 'MANABTC',
      price: 0.00002,
    },
    {
      id: 162,
      symbol: 'MANAETH',
      price: 0.00024819,
    },
    {
      id: 163,
      symbol: 'BCDBTC',
      price: 0.003318,
    },
    {
      id: 164,
      symbol: 'BCDETH',
      price: 0.04127,
    },
    {
      id: 165,
      symbol: 'DGDBTC',
      price: 0.028477,
    },
    {
      id: 166,
      symbol: 'DGDETH',
      price: 0.35242,
    },
    {
      id: 167,
      symbol: 'IOTABNB',
      price: 0.1691,
    },
    {
      id: 168,
      symbol: 'ADXBTC',
      price: 0.00011597,
    },
    {
      id: 169,
      symbol: 'ADXETH',
      price: 0.001447,
    },
    {
      id: 170,
      symbol: 'ADXBNB',
      price: 0.07748,
    },
    {
      id: 171,
      symbol: 'ADABTC',
      price: 0.00003762,
    },
    {
      id: 172,
      symbol: 'ADAETH',
      price: 0.00046554,
    },
    {
      id: 173,
      symbol: 'PPTBTC',
      price: 0.0023088,
    },
    {
      id: 174,
      symbol: 'PPTETH',
      price: 0.028577,
    },
    {
      id: 175,
      symbol: 'CMTBTC',
      price: 0.00003195,
    },
    {
      id: 176,
      symbol: 'CMTETH',
      price: 0.00039522,
    },
    {
      id: 177,
      symbol: 'CMTBNB',
      price: 0.02133,
    },
    {
      id: 178,
      symbol: 'XLMBTC',
      price: 0.0000451,
    },
    {
      id: 179,
      symbol: 'XLMETH',
      price: 0.00055812,
    },
    {
      id: 180,
      symbol: 'XLMBNB',
      price: 0.03014,
    },
    {
      id: 181,
      symbol: 'CNDBTC',
      price: 0.00001209,
    },
    {
      id: 182,
      symbol: 'CNDETH',
      price: 0.00014989,
    },
    {
      id: 183,
      symbol: 'CNDBNB',
      price: 0.00815,
    },
    {
      id: 184,
      symbol: 'LENDBTC',
      price: 0.00000985,
    },
    {
      id: 185,
      symbol: 'LENDETH',
      price: 0.00012159,
    },
    {
      id: 186,
      symbol: 'WABIBTC',
      price: 0.00014733,
    },
    {
      id: 187,
      symbol: 'WABIETH',
      price: 0.001825,
    },
    {
      id: 188,
      symbol: 'WABIBNB',
      price: 0.09942,
    },
    {
      id: 189,
      symbol: 'LTCETH',
      price: 0.20396,
    },
    {
      id: 190,
      symbol: 'LTCUSDT',
      price: 158.39,
    },
    {
      id: 191,
      symbol: 'LTCBNB',
      price: 10.98,
    },
    {
      id: 192,
      symbol: 'TNBBTC',
      price: 0.00000671,
    },
    {
      id: 193,
      symbol: 'TNBETH',
      price: 0.00008294,
    },
    {
      id: 194,
      symbol: 'WAVESBTC',
      price: 0.0007959,
    },
    {
      id: 195,
      symbol: 'WAVESETH',
      price: 0.00986,
    },
    {
      id: 196,
      symbol: 'WAVESBNB',
      price: 0.5298,
    },
    {
      id: 197,
      symbol: 'GTOBTC',
      price: 0.00006053,
    },
    {
      id: 198,
      symbol: 'GTOETH',
      price: 0.00074776,
    },
    {
      id: 199,
      symbol: 'GTOBNB',
      price: 0.04026,
    },
    {
      id: 200,
      symbol: 'ICXBTC',
      price: 0.0004545,
    },
    {
      id: 201,
      symbol: 'ICXETH',
      price: 0.005622,
    },
    {
      id: 202,
      symbol: 'ICXBNB',
      price: 0.30366,
    },
    {
      id: 203,
      symbol: 'OSTBTC',
      price: 0.00002914,
    },
    {
      id: 204,
      symbol: 'OSTETH',
      price: 0.00036168,
    },
    {
      id: 205,
      symbol: 'OSTBNB',
      price: 0.01944,
    },
    {
      id: 206,
      symbol: 'ELFBTC',
      price: 0.00018512,
    },
    {
      id: 207,
      symbol: 'ELFETH',
      price: 0.00229357,
    },
    {
      id: 208,
      symbol: 'AIONBTC',
      price: 0.0004001,
    },
    {
      id: 209,
      symbol: 'AIONETH',
      price: 0.00495,
    },
    {
      id: 210,
      symbol: 'AIONBNB',
      price: 0.26595,
    },
    {
      id: 211,
      symbol: 'NEBLBTC',
      price: 0.0015972,
    },
    {
      id: 212,
      symbol: 'NEBLETH',
      price: 0.019817,
    },
    {
      id: 213,
      symbol: 'NEBLBNB',
      price: 1.06828,
    },
    {
      id: 214,
      symbol: 'BRDBTC',
      price: 0.00009801,
    },
    {
      id: 215,
      symbol: 'BRDETH',
      price: 0.0012142,
    },
    {
      id: 216,
      symbol: 'BRDBNB',
      price: 0.06568,
    },
    {
      id: 217,
      symbol: 'MCOBNB',
      price: 0.83656,
    },
    {
      id: 218,
      symbol: 'EDOBTC',
      price: 0.0002815,
    },
    {
      id: 219,
      symbol: 'EDOETH',
      price: 0.00349,
    },
    {
      id: 220,
      symbol: 'WINGSBTC',
      price: 0.00006686,
    },
    {
      id: 221,
      symbol: 'WINGSETH',
      price: 0.0008297,
    },
    {
      id: 222,
      symbol: 'NAVBTC',
      price: 0.0001503,
    },
    {
      id: 223,
      symbol: 'NAVETH',
      price: 0.001868,
    },
    {
      id: 224,
      symbol: 'NAVBNB',
      price: 0.10046,
    },
    {
      id: 225,
      symbol: 'LUNBTC',
      price: 0.0015998,
    },
    {
      id: 226,
      symbol: 'LUNETH',
      price: 0.019749,
    },
    {
      id: 227,
      symbol: 'TRIGBTC',
      price: 0.000172,
    },
    {
      id: 228,
      symbol: 'TRIGETH',
      price: 0.002129,
    },
    {
      id: 229,
      symbol: 'TRIGBNB',
      price: 0.11405,
    },
    {
      id: 230,
      symbol: 'APPCBTC',
      price: 0.00007,
    },
    {
      id: 231,
      symbol: 'APPCETH',
      price: 0.0008632,
    },
    {
      id: 232,
      symbol: 'APPCBNB',
      price: 0.04651,
    },
    {
      id: 233,
      symbol: 'VIBEBTC',
      price: 0.00003362,
    },
    {
      id: 234,
      symbol: 'VIBEETH',
      price: 0.0004143,
    },
    {
      id: 235,
      symbol: 'RLCBTC',
      price: 0.0001785,
    },
    {
      id: 236,
      symbol: 'RLCETH',
      price: 0.00221,
    },
    {
      id: 237,
      symbol: 'RLCBNB',
      price: 0.11933,
    },
    {
      id: 238,
      symbol: 'INSBTC',
      price: 0.0002169,
    },
    {
      id: 239,
      symbol: 'INSETH',
      price: 0.002684,
    },
    {
      id: 240,
      symbol: 'PIVXBTC',
      price: 0.0006172,
    },
    {
      id: 241,
      symbol: 'PIVXETH',
      price: 0.007657,
    },
    {
      id: 242,
      symbol: 'PIVXBNB',
      price: 0.41352,
    },
    {
      id: 243,
      symbol: 'IOSTBTC',
      price: 0.00000682,
    },
    {
      id: 244,
      symbol: 'IOSTETH',
      price: 0.00008431,
    },
    {
      id: 245,
      symbol: 'CHATBTC',
      price: 0.00001446,
    },
    {
      id: 246,
      symbol: 'CHATETH',
      price: 0.00017937,
    },
    {
      id: 247,
      symbol: 'STEEMBTC',
      price: 0.0004128,
    },
    {
      id: 248,
      symbol: 'STEEMETH',
      price: 0.005095,
    },
    {
      id: 249,
      symbol: 'STEEMBNB',
      price: 0.27681,
    },
    {
      id: 250,
      symbol: 'NANOBTC',
      price: 0.0010536,
    },
    {
      id: 251,
      symbol: 'NANOETH',
      price: 0.013038,
    },
    {
      id: 252,
      symbol: 'NANOBNB',
      price: 0.7063,
    },
    {
      id: 253,
      symbol: 'VIABTC',
      price: 0.0002746,
    },
    {
      id: 254,
      symbol: 'VIAETH',
      price: 0.003398,
    },
    {
      id: 255,
      symbol: 'VIABNB',
      price: 0.18421,
    },
    {
      id: 256,
      symbol: 'BLZBTC',
      price: 0.00007134,
    },
    {
      id: 257,
      symbol: 'BLZETH',
      price: 0.00088359,
    },
    {
      id: 258,
      symbol: 'BLZBNB',
      price: 0.04758,
    },
    {
      id: 259,
      symbol: 'AEBTC',
      price: 0.0004691,
    },
    {
      id: 260,
      symbol: 'AEETH',
      price: 0.005814,
    },
    {
      id: 261,
      symbol: 'AEBNB',
      price: 0.31407,
    },
    {
      id: 262,
      symbol: 'RPXBTC',
      price: 0.0000145,
    },
    {
      id: 263,
      symbol: 'RPXETH',
      price: 0.00017904,
    },
    {
      id: 264,
      symbol: 'RPXBNB',
      price: 0.00965,
    },
    {
      id: 265,
      symbol: 'NCASHBTC',
      price: 0.00000496,
    },
    {
      id: 266,
      symbol: 'NCASHETH',
      price: 0.00006136,
    },
    {
      id: 267,
      symbol: 'NCASHBNB',
      price: 0.00332,
    },
    {
      id: 268,
      symbol: 'POABTC',
      price: 0.00007854,
    },
    {
      id: 269,
      symbol: 'POAETH',
      price: 0.00097281,
    },
    {
      id: 270,
      symbol: 'POABNB',
      price: 0.05257,
    },
    {
      id: 271,
      symbol: 'ZILBTC',
      price: 0.00001344,
    },
    {
      id: 272,
      symbol: 'ZILETH',
      price: 0.00016647,
    },
    {
      id: 273,
      symbol: 'ZILBNB',
      price: 0.009,
    },
    {
      id: 274,
      symbol: 'ONTBTC',
      price: 0.0010303,
    },
    {
      id: 275,
      symbol: 'ONTETH',
      price: 0.012759,
    },
    {
      id: 276,
      symbol: 'ONTBNB',
      price: 0.68947,
    },
    {
      id: 277,
      symbol: 'STORMBTC',
      price: 0.0000067,
    },
    {
      id: 278,
      symbol: 'STORMETH',
      price: 0.00008319,
    },
    {
      id: 279,
      symbol: 'STORMBNB',
      price: 0.00447,
    },
    {
      id: 280,
      symbol: 'QTUMBNB',
      price: 1.5992,
    },
    {
      id: 281,
      symbol: 'QTUMUSDT',
      price: 22.863,
    },
    {
      id: 282,
      symbol: 'XEMBTC',
      price: 0.00004471,
    },
    {
      id: 283,
      symbol: 'XEMETH',
      price: 0.00055357,
    },
    {
      id: 284,
      symbol: 'XEMBNB',
      price: 0.02994,
    },
    {
      id: 285,
      symbol: 'WANBTC',
      price: 0.0009774,
    },
    {
      id: 286,
      symbol: 'WANETH',
      price: 0.012095,
    },
    {
      id: 287,
      symbol: 'WANBNB',
      price: 0.65413,
    },
    {
      id: 288,
      symbol: 'WPRBTC',
      price: 0.00001646,
    },
    {
      id: 289,
      symbol: 'WPRETH',
      price: 0.00020369,
    },
    {
      id: 290,
      symbol: 'QLCBTC',
      price: 0.00002532,
    },
    {
      id: 291,
      symbol: 'QLCETH',
      price: 0.00031429,
    },
    {
      id: 292,
      symbol: 'SYSBTC',
      price: 0.00005749,
    },
    {
      id: 293,
      symbol: 'SYSETH',
      price: 0.00071081,
    },
    {
      id: 294,
      symbol: 'SYSBNB',
      price: 0.0384,
    },
    {
      id: 295,
      symbol: 'QLCBNB',
      price: 0.01698,
    },
    {
      id: 296,
      symbol: 'GRSBTC',
      price: 0.00015275,
    },
    {
      id: 297,
      symbol: 'GRSETH',
      price: 0.00190104,
    },
    {
      id: 298,
      symbol: 'ADAUSDT',
      price: 0.3621,
    },
    {
      id: 299,
      symbol: 'ADABNB',
      price: 0.0252,
    },
    {
      id: 300,
      symbol: 'CLOAKBTC',
      price: 0.0015249,
    },
    {
      id: 301,
      symbol: 'CLOAKETH',
      price: 0.018901,
    },
    {
      id: 302,
      symbol: 'GNTBTC',
      price: 0.00008566,
    },
    {
      id: 303,
      symbol: 'GNTETH',
      price: 0.00106065,
    },
    {
      id: 304,
      symbol: 'GNTBNB',
      price: 0.05726,
    },
    {
      id: 305,
      symbol: 'LOOMBTC',
      price: 0.00007288,
    },
    {
      id: 306,
      symbol: 'LOOMETH',
      price: 0.00089996,
    },
    {
      id: 307,
      symbol: 'LOOMBNB',
      price: 0.0486,
    },
  ].map((ticker) => {
    if (Math.random() > 0.5) {
      ticker.price *= 0.099;
    } else {
      ticker.price *= 1.001;
    }
    return ticker;
  }),
};

export default tickers;
