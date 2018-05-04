const tickers = [
  {
    symbol: 'ETHBTC',
    price: 0.080748,
  },
  {
    symbol: 'LTCBTC',
    price: 0.016455,
  },
  {
    symbol: 'BNBBTC',
    price: 0.0014966,
  },
  {
    symbol: 'NEOBTC',
    price: 0.00895,
  },
  {
    symbol: 'QTUMETH',
    price: 0.029498,
  },
  {
    symbol: 'EOSETH',
    price: 0.02247,
  },
  {
    symbol: 'SNTETH',
    price: 0.0002186,
  },
  {
    symbol: 'BNTETH',
    price: 0.006592,
  },
  {
    symbol: 'BCCBTC',
    price: 0.152892,
  },
  {
    symbol: 'GASBTC',
    price: 0.003677,
  },
  {
    symbol: 'BNBETH',
    price: 0.018532,
  },
  {
    symbol: 'BTCUSDT',
    price: 9625.0,
  },
  {
    symbol: 'ETHUSDT',
    price: 777.37,
  },
  {
    symbol: 'HSRBTC',
    price: 0.001432,
  },
  {
    symbol: 'OAXETH',
    price: 0.0011487,
  },
  {
    symbol: 'DNTETH',
    price: 0.00014898,
  },
  {
    symbol: 'MCOETH',
    price: 0.015398,
  },
  {
    symbol: 'ICNETH',
    price: 0.0020916,
  },
  {
    symbol: 'MCOBTC',
    price: 0.001244,
  },
  {
    symbol: 'WTCBTC',
    price: 0.0018305,
  },
  {
    symbol: 'WTCETH',
    price: 0.02259,
  },
  {
    symbol: 'LRCBTC',
    price: 0.00009324,
  },
  {
    symbol: 'LRCETH',
    price: 0.00116056,
  },
  {
    symbol: 'QTUMBTC',
    price: 0.002381,
  },
  {
    symbol: 'YOYOBTC',
    price: 0.00002096,
  },
  {
    symbol: 'OMGBTC',
    price: 0.00189,
  },
  {
    symbol: 'OMGETH',
    price: 0.023386,
  },
  {
    symbol: 'ZRXBTC',
    price: 0.00016332,
  },
  {
    symbol: 'ZRXETH',
    price: 0.00201993,
  },
  {
    symbol: 'STRATBTC',
    price: 0.0007889,
  },
  {
    symbol: 'STRATETH',
    price: 0.009744,
  },
  {
    symbol: 'SNGLSBTC',
    price: 0.0000126,
  },
  {
    symbol: 'SNGLSETH',
    price: 0.000155,
  },
  {
    symbol: 'BQXBTC',
    price: 0.00038079,
  },
  {
    symbol: 'BQXETH',
    price: 0.0047023,
  },
  {
    symbol: 'KNCBTC',
    price: 0.00026047,
  },
  {
    symbol: 'KNCETH',
    price: 0.0032363,
  },
  {
    symbol: 'FUNBTC',
    price: 0.00000539,
  },
  {
    symbol: 'FUNETH',
    price: 0.00006653,
  },
  {
    symbol: 'SNMBTC',
    price: 0.0000295,
  },
  {
    symbol: 'SNMETH',
    price: 0.00036643,
  },
  {
    symbol: 'NEOETH',
    price: 0.111023,
  },
  {
    symbol: 'IOTABTC',
    price: 0.00025335,
  },
  {
    symbol: 'IOTAETH',
    price: 0.00313528,
  },
  {
    symbol: 'LINKBTC',
    price: 0.00005855,
  },
  {
    symbol: 'LINKETH',
    price: 0.00072511,
  },
  {
    symbol: 'XVGBTC',
    price: 0.00000834,
  },
  {
    symbol: 'XVGETH',
    price: 0.00010329,
  },
  {
    symbol: 'SALTBTC',
    price: 0.0004327,
  },
  {
    symbol: 'SALTETH',
    price: 0.005336,
  },
  {
    symbol: 'MDABTC',
    price: 0.00013074,
  },
  {
    symbol: 'MDAETH',
    price: 0.0016222,
  },
  {
    symbol: 'MTLBTC',
    price: 0.0005537,
  },
  {
    symbol: 'MTLETH',
    price: 0.006813,
  },
  {
    symbol: 'SUBBTC',
    price: 0.00008519,
  },
  {
    symbol: 'SUBETH',
    price: 0.00105486,
  },
  {
    symbol: 'EOSBTC',
    price: 0.001816,
  },
  {
    symbol: 'SNTBTC',
    price: 0.00001761,
  },
  {
    symbol: 'ETCETH',
    price: 0.028783,
  },
  {
    symbol: 'ETCBTC',
    price: 0.002322,
  },
  {
    symbol: 'MTHBTC',
    price: 0.00001483,
  },
  {
    symbol: 'MTHETH',
    price: 0.000184,
  },
  {
    symbol: 'ENGBTC',
    price: 0.00030016,
  },
  {
    symbol: 'ENGETH',
    price: 0.0037233,
  },
  {
    symbol: 'DNTBTC',
    price: 0.00001201,
  },
  {
    symbol: 'ZECBTC',
    price: 0.031422,
  },
  {
    symbol: 'ZECETH',
    price: 0.38788,
  },
  {
    symbol: 'BNTBTC',
    price: 0.00053208,
  },
  {
    symbol: 'ASTBTC',
    price: 0.00005739,
  },
  {
    symbol: 'ASTETH',
    price: 0.000702,
  },
  {
    symbol: 'DASHBTC',
    price: 0.051012,
  },
  {
    symbol: 'DASHETH',
    price: 0.62943,
  },
  {
    symbol: 'OAXBTC',
    price: 0.00009307,
  },
  {
    symbol: 'ICNBTC',
    price: 0.00016854,
  },
  {
    symbol: 'BTGBTC',
    price: 0.007806,
  },
  {
    symbol: 'BTGETH',
    price: 0.096852,
  },
  {
    symbol: 'EVXBTC',
    price: 0.00018829,
  },
  {
    symbol: 'EVXETH',
    price: 0.0023351,
  },
  {
    symbol: 'REQBTC',
    price: 0.00002971,
  },
  {
    symbol: 'REQETH',
    price: 0.00036805,
  },
  {
    symbol: 'VIBBTC',
    price: 0.00002287,
  },
  {
    symbol: 'VIBETH',
    price: 0.0002846,
  },
  {
    symbol: 'HSRETH',
    price: 0.017735,
  },
  {
    symbol: 'TRXBTC',
    price: 0.00000902,
  },
  {
    symbol: 'TRXETH',
    price: 0.00011171,
  },
  {
    symbol: 'POWRBTC',
    price: 0.00005978,
  },
  {
    symbol: 'POWRETH',
    price: 0.00073918,
  },
  {
    symbol: 'ARKBTC',
    price: 0.0003808,
  },
  {
    symbol: 'ARKETH',
    price: 0.004693,
  },
  {
    symbol: 'YOYOETH',
    price: 0.00025965,
  },
  {
    symbol: 'XRPBTC',
    price: 0.00009001,
  },
  {
    symbol: 'XRPETH',
    price: 0.00111445,
  },
  {
    symbol: 'MODBTC',
    price: 0.0003341,
  },
  {
    symbol: 'MODETH',
    price: 0.004148,
  },
  {
    symbol: 'ENJBTC',
    price: 0.00001814,
  },
  {
    symbol: 'ENJETH',
    price: 0.00022469,
  },
  {
    symbol: 'STORJBTC',
    price: 0.00012754,
  },
  {
    symbol: 'STORJETH',
    price: 0.0015819,
  },
  {
    symbol: 'BNBUSDT',
    price: 14.3938,
  },
  {
    symbol: 'VENBNB',
    price: 0.3514,
  },
  {
    symbol: 'YOYOBNB',
    price: 0.01401,
  },
  {
    symbol: 'POWRBNB',
    price: 0.03994,
  },
  {
    symbol: 'VENBTC',
    price: 0.00052814,
  },
  {
    symbol: 'VENETH',
    price: 0.00653205,
  },
  {
    symbol: 'KMDBTC',
    price: 0.0004592,
  },
  {
    symbol: 'KMDETH',
    price: 0.005663,
  },
  {
    symbol: 'NULSBNB',
    price: 0.27664,
  },
  {
    symbol: 'RCNBTC',
    price: 0.00001697,
  },
  {
    symbol: 'RCNETH',
    price: 0.00021042,
  },
  {
    symbol: 'RCNBNB',
    price: 0.01132,
  },
  {
    symbol: 'NULSBTC',
    price: 0.00041641,
  },
  {
    symbol: 'NULSETH',
    price: 0.00513888,
  },
  {
    symbol: 'RDNBTC',
    price: 0.00025474,
  },
  {
    symbol: 'RDNETH',
    price: 0.0031543,
  },
  {
    symbol: 'RDNBNB',
    price: 0.16993,
  },
  {
    symbol: 'XMRBTC',
    price: 0.025157,
  },
  {
    symbol: 'XMRETH',
    price: 0.3124,
  },
  {
    symbol: 'DLTBNB',
    price: 0.02212,
  },
  {
    symbol: 'WTCBNB',
    price: 1.2249,
  },
  {
    symbol: 'DLTBTC',
    price: 0.00003314,
  },
  {
    symbol: 'DLTETH',
    price: 0.0004085,
  },
  {
    symbol: 'AMBBTC',
    price: 0.00009388,
  },
  {
    symbol: 'AMBETH',
    price: 0.00116755,
  },
  {
    symbol: 'AMBBNB',
    price: 0.06252,
  },
  {
    symbol: 'BCCETH',
    price: 1.89291,
  },
  {
    symbol: 'BCCUSDT',
    price: 1471.99,
  },
  {
    symbol: 'BCCBNB',
    price: 102.09,
  },
  {
    symbol: 'BATBTC',
    price: 0.00005169,
  },
  {
    symbol: 'BATETH',
    price: 0.00063559,
  },
  {
    symbol: 'BATBNB',
    price: 0.03461,
  },
  {
    symbol: 'BCPTBTC',
    price: 0.0000655,
  },
  {
    symbol: 'BCPTETH',
    price: 0.00081,
  },
  {
    symbol: 'BCPTBNB',
    price: 0.04365,
  },
  {
    symbol: 'ARNBTC',
    price: 0.0002122,
  },
  {
    symbol: 'ARNETH',
    price: 0.00263647,
  },
  {
    symbol: 'GVTBTC',
    price: 0.0026015,
  },
  {
    symbol: 'GVTETH',
    price: 0.032211,
  },
  {
    symbol: 'CDTBTC',
    price: 0.00000764,
  },
  {
    symbol: 'CDTETH',
    price: 0.00009491,
  },
  {
    symbol: 'GXSBTC',
    price: 0.0004521,
  },
  {
    symbol: 'GXSETH',
    price: 0.005597,
  },
  {
    symbol: 'NEOUSDT',
    price: 86.174,
  },
  {
    symbol: 'NEOBNB',
    price: 5.987,
  },
  {
    symbol: 'POEBTC',
    price: 0.00000614,
  },
  {
    symbol: 'POEETH',
    price: 0.00007626,
  },
  {
    symbol: 'QSPBTC',
    price: 0.00002203,
  },
  {
    symbol: 'QSPETH',
    price: 0.00027234,
  },
  {
    symbol: 'QSPBNB',
    price: 0.01466,
  },
  {
    symbol: 'BTSBTC',
    price: 0.00003638,
  },
  {
    symbol: 'BTSETH',
    price: 0.00045131,
  },
  {
    symbol: 'BTSBNB',
    price: 0.02427,
  },
  {
    symbol: 'XZCBTC',
    price: 0.004717,
  },
  {
    symbol: 'XZCETH',
    price: 0.05852,
  },
  {
    symbol: 'XZCBNB',
    price: 3.156,
  },
  {
    symbol: 'LSKBTC',
    price: 0.0014587,
  },
  {
    symbol: 'LSKETH',
    price: 0.018,
  },
  {
    symbol: 'LSKBNB',
    price: 0.9724,
  },
  {
    symbol: 'TNTBTC',
    price: 0.0000142,
  },
  {
    symbol: 'TNTETH',
    price: 0.00017625,
  },
  {
    symbol: 'FUELBTC',
    price: 0.00001162,
  },
  {
    symbol: 'FUELETH',
    price: 0.00014379,
  },
  {
    symbol: 'MANABTC',
    price: 0.00002,
  },
  {
    symbol: 'MANAETH',
    price: 0.00024819,
  },
  {
    symbol: 'BCDBTC',
    price: 0.003318,
  },
  {
    symbol: 'BCDETH',
    price: 0.04127,
  },
  {
    symbol: 'DGDBTC',
    price: 0.028477,
  },
  {
    symbol: 'DGDETH',
    price: 0.35242,
  },
  {
    symbol: 'IOTABNB',
    price: 0.1691,
  },
  {
    symbol: 'ADXBTC',
    price: 0.00011597,
  },
  {
    symbol: 'ADXETH',
    price: 0.001447,
  },
  {
    symbol: 'ADXBNB',
    price: 0.07748,
  },
  {
    symbol: 'ADABTC',
    price: 0.00003762,
  },
  {
    symbol: 'ADAETH',
    price: 0.00046554,
  },
  {
    symbol: 'PPTBTC',
    price: 0.0023088,
  },
  {
    symbol: 'PPTETH',
    price: 0.028577,
  },
  {
    symbol: 'CMTBTC',
    price: 0.00003195,
  },
  {
    symbol: 'CMTETH',
    price: 0.00039522,
  },
  {
    symbol: 'CMTBNB',
    price: 0.02133,
  },
  {
    symbol: 'XLMBTC',
    price: 0.0000451,
  },
  {
    symbol: 'XLMETH',
    price: 0.00055812,
  },
  {
    symbol: 'XLMBNB',
    price: 0.03014,
  },
  {
    symbol: 'CNDBTC',
    price: 0.00001209,
  },
  {
    symbol: 'CNDETH',
    price: 0.00014989,
  },
  {
    symbol: 'CNDBNB',
    price: 0.00815,
  },
  {
    symbol: 'LENDBTC',
    price: 0.00000985,
  },
  {
    symbol: 'LENDETH',
    price: 0.00012159,
  },
  {
    symbol: 'WABIBTC',
    price: 0.00014733,
  },
  {
    symbol: 'WABIETH',
    price: 0.001825,
  },
  {
    symbol: 'WABIBNB',
    price: 0.09942,
  },
  {
    symbol: 'LTCETH',
    price: 0.20396,
  },
  {
    symbol: 'LTCUSDT',
    price: 158.39,
  },
  {
    symbol: 'LTCBNB',
    price: 10.98,
  },
  {
    symbol: 'TNBBTC',
    price: 0.00000671,
  },
  {
    symbol: 'TNBETH',
    price: 0.00008294,
  },
  {
    symbol: 'WAVESBTC',
    price: 0.0007959,
  },
  {
    symbol: 'WAVESETH',
    price: 0.00986,
  },
  {
    symbol: 'WAVESBNB',
    price: 0.5298,
  },
  {
    symbol: 'GTOBTC',
    price: 0.00006053,
  },
  {
    symbol: 'GTOETH',
    price: 0.00074776,
  },
  {
    symbol: 'GTOBNB',
    price: 0.04026,
  },
  {
    symbol: 'ICXBTC',
    price: 0.0004545,
  },
  {
    symbol: 'ICXETH',
    price: 0.005622,
  },
  {
    symbol: 'ICXBNB',
    price: 0.30366,
  },
  {
    symbol: 'OSTBTC',
    price: 0.00002914,
  },
  {
    symbol: 'OSTETH',
    price: 0.00036168,
  },
  {
    symbol: 'OSTBNB',
    price: 0.01944,
  },
  {
    symbol: 'ELFBTC',
    price: 0.00018512,
  },
  {
    symbol: 'ELFETH',
    price: 0.00229357,
  },
  {
    symbol: 'AIONBTC',
    price: 0.0004001,
  },
  {
    symbol: 'AIONETH',
    price: 0.00495,
  },
  {
    symbol: 'AIONBNB',
    price: 0.26595,
  },
  {
    symbol: 'NEBLBTC',
    price: 0.0015972,
  },
  {
    symbol: 'NEBLETH',
    price: 0.019817,
  },
  {
    symbol: 'NEBLBNB',
    price: 1.06828,
  },
  {
    symbol: 'BRDBTC',
    price: 0.00009801,
  },
  {
    symbol: 'BRDETH',
    price: 0.0012142,
  },
  {
    symbol: 'BRDBNB',
    price: 0.06568,
  },
  {
    symbol: 'MCOBNB',
    price: 0.83656,
  },
  {
    symbol: 'EDOBTC',
    price: 0.0002815,
  },
  {
    symbol: 'EDOETH',
    price: 0.00349,
  },
  {
    symbol: 'WINGSBTC',
    price: 0.00006686,
  },
  {
    symbol: 'WINGSETH',
    price: 0.0008297,
  },
  {
    symbol: 'NAVBTC',
    price: 0.0001503,
  },
  {
    symbol: 'NAVETH',
    price: 0.001868,
  },
  {
    symbol: 'NAVBNB',
    price: 0.10046,
  },
  {
    symbol: 'LUNBTC',
    price: 0.0015998,
  },
  {
    symbol: 'LUNETH',
    price: 0.019749,
  },
  {
    symbol: 'TRIGBTC',
    price: 0.000172,
  },
  {
    symbol: 'TRIGETH',
    price: 0.002129,
  },
  {
    symbol: 'TRIGBNB',
    price: 0.11405,
  },
  {
    symbol: 'APPCBTC',
    price: 0.00007,
  },
  {
    symbol: 'APPCETH',
    price: 0.0008632,
  },
  {
    symbol: 'APPCBNB',
    price: 0.04651,
  },
  {
    symbol: 'VIBEBTC',
    price: 0.00003362,
  },
  {
    symbol: 'VIBEETH',
    price: 0.0004143,
  },
  {
    symbol: 'RLCBTC',
    price: 0.0001785,
  },
  {
    symbol: 'RLCETH',
    price: 0.00221,
  },
  {
    symbol: 'RLCBNB',
    price: 0.11933,
  },
  {
    symbol: 'INSBTC',
    price: 0.0002169,
  },
  {
    symbol: 'INSETH',
    price: 0.002684,
  },
  {
    symbol: 'PIVXBTC',
    price: 0.0006172,
  },
  {
    symbol: 'PIVXETH',
    price: 0.007657,
  },
  {
    symbol: 'PIVXBNB',
    price: 0.41352,
  },
  {
    symbol: 'IOSTBTC',
    price: 0.00000682,
  },
  {
    symbol: 'IOSTETH',
    price: 0.00008431,
  },
  {
    symbol: 'CHATBTC',
    price: 0.00001446,
  },
  {
    symbol: 'CHATETH',
    price: 0.00017937,
  },
  {
    symbol: 'STEEMBTC',
    price: 0.0004128,
  },
  {
    symbol: 'STEEMETH',
    price: 0.005095,
  },
  {
    symbol: 'STEEMBNB',
    price: 0.27681,
  },
  {
    symbol: 'NANOBTC',
    price: 0.0010536,
  },
  {
    symbol: 'NANOETH',
    price: 0.013038,
  },
  {
    symbol: 'NANOBNB',
    price: 0.7063,
  },
  {
    symbol: 'VIABTC',
    price: 0.0002746,
  },
  {
    symbol: 'VIAETH',
    price: 0.003398,
  },
  {
    symbol: 'VIABNB',
    price: 0.18421,
  },
  {
    symbol: 'BLZBTC',
    price: 0.00007134,
  },
  {
    symbol: 'BLZETH',
    price: 0.00088359,
  },
  {
    symbol: 'BLZBNB',
    price: 0.04758,
  },
  {
    symbol: 'AEBTC',
    price: 0.0004691,
  },
  {
    symbol: 'AEETH',
    price: 0.005814,
  },
  {
    symbol: 'AEBNB',
    price: 0.31407,
  },
  {
    symbol: 'RPXBTC',
    price: 0.0000145,
  },
  {
    symbol: 'RPXETH',
    price: 0.00017904,
  },
  {
    symbol: 'RPXBNB',
    price: 0.00965,
  },
  {
    symbol: 'NCASHBTC',
    price: 0.00000496,
  },
  {
    symbol: 'NCASHETH',
    price: 0.00006136,
  },
  {
    symbol: 'NCASHBNB',
    price: 0.00332,
  },
  {
    symbol: 'POABTC',
    price: 0.00007854,
  },
  {
    symbol: 'POAETH',
    price: 0.00097281,
  },
  {
    symbol: 'POABNB',
    price: 0.05257,
  },
  {
    symbol: 'ZILBTC',
    price: 0.00001344,
  },
  {
    symbol: 'ZILETH',
    price: 0.00016647,
  },
  {
    symbol: 'ZILBNB',
    price: 0.009,
  },
  {
    symbol: 'ONTBTC',
    price: 0.0010303,
  },
  {
    symbol: 'ONTETH',
    price: 0.012759,
  },
  {
    symbol: 'ONTBNB',
    price: 0.68947,
  },
  {
    symbol: 'STORMBTC',
    price: 0.0000067,
  },
  {
    symbol: 'STORMETH',
    price: 0.00008319,
  },
  {
    symbol: 'STORMBNB',
    price: 0.00447,
  },
  {
    symbol: 'QTUMBNB',
    price: 1.5992,
  },
  {
    symbol: 'QTUMUSDT',
    price: 22.863,
  },
  {
    symbol: 'XEMBTC',
    price: 0.00004471,
  },
  {
    symbol: 'XEMETH',
    price: 0.00055357,
  },
  {
    symbol: 'XEMBNB',
    price: 0.02994,
  },
  {
    symbol: 'WANBTC',
    price: 0.0009774,
  },
  {
    symbol: 'WANETH',
    price: 0.012095,
  },
  {
    symbol: 'WANBNB',
    price: 0.65413,
  },
  {
    symbol: 'WPRBTC',
    price: 0.00001646,
  },
  {
    symbol: 'WPRETH',
    price: 0.00020369,
  },
  {
    symbol: 'QLCBTC',
    price: 0.00002532,
  },
  {
    symbol: 'QLCETH',
    price: 0.00031429,
  },
  {
    symbol: 'SYSBTC',
    price: 0.00005749,
  },
  {
    symbol: 'SYSETH',
    price: 0.00071081,
  },
  {
    symbol: 'SYSBNB',
    price: 0.0384,
  },
  {
    symbol: 'QLCBNB',
    price: 0.01698,
  },
  {
    symbol: 'GRSBTC',
    price: 0.00015275,
  },
  {
    symbol: 'GRSETH',
    price: 0.00190104,
  },
  {
    symbol: 'ADAUSDT',
    price: 0.3621,
  },
  {
    symbol: 'ADABNB',
    price: 0.0252,
  },
  {
    symbol: 'CLOAKBTC',
    price: 0.0015249,
  },
  {
    symbol: 'CLOAKETH',
    price: 0.018901,
  },
  {
    symbol: 'GNTBTC',
    price: 0.00008566,
  },
  {
    symbol: 'GNTETH',
    price: 0.00106065,
  },
  {
    symbol: 'GNTBNB',
    price: 0.05726,
  },
  {
    symbol: 'LOOMBTC',
    price: 0.00007288,
  },
  {
    symbol: 'LOOMETH',
    price: 0.00089996,
  },
  {
    symbol: 'LOOMBNB',
    price: 0.0486,
  },
];

export default tickers;
