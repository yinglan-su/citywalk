export interface WorldCity {
  id: string;
  nameZh: string;
  nameEn: string;
  countryZh: string;
  countryEn: string;
  region:
    | "china"
    | "east_asia"
    | "southeast_asia"
    | "europe"
    | "americas"
    | "oceania"
    | "middle_east_africa";
  pinyin?: string;
  alias?: string[];
}

export const WORLD_CITIES: WorldCity[] = [
  // 中国 (核心旅游与主要城市)
  { id: "cn_beijing", nameZh: "北京", nameEn: "Beijing", countryZh: "中国", countryEn: "China", region: "china", pinyin: "beijing", alias: ["京", "PEK"] },
  { id: "cn_shanghai", nameZh: "上海", nameEn: "Shanghai", countryZh: "中国", countryEn: "China", region: "china", pinyin: "shanghai", alias: ["沪", "SHA"] },
  { id: "cn_chengdu", nameZh: "成都", nameEn: "Chengdu", countryZh: "中国", countryEn: "China", region: "china", pinyin: "chengdu", alias: ["蓉", "CTU"] },
  { id: "cn_xian", nameZh: "西安", nameEn: "Xi'an", countryZh: "中国", countryEn: "China", region: "china", pinyin: "xian", alias: ["长安", "XIY"] },
  { id: "cn_hangzhou", nameZh: "杭州", nameEn: "Hangzhou", countryZh: "中国", countryEn: "China", region: "china", pinyin: "hangzhou", alias: ["杭", "HGH"] },
  { id: "cn_suzhou", nameZh: "苏州", nameEn: "Suzhou", countryZh: "中国", countryEn: "China", region: "china", pinyin: "suzhou", alias: ["姑苏"] },
  { id: "cn_nanjing", nameZh: "南京", nameEn: "Nanjing", countryZh: "中国", countryEn: "China", region: "china", pinyin: "nanjing", alias: ["金陵", "NKG"] },
  { id: "cn_guangzhou", nameZh: "广州", nameEn: "Guangzhou", countryZh: "中国", countryEn: "China", region: "china", pinyin: "guangzhou", alias: ["羊城", "CAN"] },
  { id: "cn_shenzhen", nameZh: "深圳", nameEn: "Shenzhen", countryZh: "中国", countryEn: "China", region: "china", pinyin: "shenzhen", alias: ["SZX"] },
  { id: "cn_chongqing", nameZh: "重庆", nameEn: "Chongqing", countryZh: "中国", countryEn: "China", region: "china", pinyin: "chongqing", alias: ["山城", "CKG"] },
  { id: "cn_wuhan", nameZh: "武汉", nameEn: "Wuhan", countryZh: "中国", countryEn: "China", region: "china", pinyin: "wuhan", alias: ["江城", "WUH"] },
  { id: "cn_changsha", nameZh: "长沙", nameEn: "Changsha", countryZh: "中国", countryEn: "China", region: "china", pinyin: "changsha", alias: ["星城", "CSX"] },
  { id: "cn_xiamen", nameZh: "厦门", nameEn: "Xiamen", countryZh: "中国", countryEn: "China", region: "china", pinyin: "xiamen", alias: ["鹭岛", "XMN"] },
  { id: "cn_quanzhou", nameZh: "泉州", nameEn: "Quanzhou", countryZh: "中国", countryEn: "China", region: "china", pinyin: "quanzhou", alias: ["刺桐", "JJN"] },
  { id: "cn_fuzhou", nameZh: "福州", nameEn: "Fuzhou", countryZh: "中国", countryEn: "China", region: "china", pinyin: "fuzhou", alias: ["榕城", "FOC"] },
  { id: "cn_qingdao", nameZh: "青岛", nameEn: "Qingdao", countryZh: "中国", countryEn: "China", region: "china", pinyin: "qingdao", alias: ["琴岛", "TAO"] },
  { id: "cn_weihai", nameZh: "威海", nameEn: "Weihai", countryZh: "中国", countryEn: "China", region: "china", pinyin: "weihai", alias: ["WEH"] },
  { id: "cn_yantai", nameZh: "烟台", nameEn: "Yantai", countryZh: "中国", countryEn: "China", region: "china", pinyin: "yantai", alias: ["YNT"] },
  { id: "cn_jinan", nameZh: "济南", nameEn: "Jinan", countryZh: "中国", countryEn: "China", region: "china", pinyin: "jinan", alias: ["泉城", "TNA"] },
  { id: "cn_dalian", nameZh: "大连", nameEn: "Dalian", countryZh: "中国", countryEn: "China", region: "china", pinyin: "dalian", alias: ["DLC"] },
  { id: "cn_harbin", nameZh: "哈尔滨", nameEn: "Harbin", countryZh: "中国", countryEn: "China", region: "china", pinyin: "harbin", alias: ["冰城", "HRB"] },
  { id: "cn_shenyang", nameZh: "沈阳", nameEn: "Shenyang", countryZh: "中国", countryEn: "China", region: "china", pinyin: "shenyang", alias: ["SHE"] },
  { id: "cn_yanji", nameZh: "延吉", nameEn: "Yanji", countryZh: "中国", countryEn: "China", region: "china", pinyin: "yanji", alias: ["YNJ"] },
  { id: "cn_hunchun", nameZh: "珲春", nameEn: "Hunchun", countryZh: "中国", countryEn: "China", region: "china", pinyin: "hunchun", alias: [] },
  { id: "cn_changbaishan", nameZh: "长白山", nameEn: "Changbai Mountain", countryZh: "中国", countryEn: "China", region: "china", pinyin: "changbaishan", alias: ["NBS"] },
  { id: "cn_sanya", nameZh: "三亚", nameEn: "Sanya", countryZh: "中国", countryEn: "China", region: "china", pinyin: "sanya", alias: ["SYX"] },
  { id: "cn_haikou", nameZh: "海口", nameEn: "Haikou", countryZh: "中国", countryEn: "China", region: "china", pinyin: "haikou", alias: ["HAK"] },
  { id: "cn_kunming", nameZh: "昆明", nameEn: "Kunming", countryZh: "中国", countryEn: "China", region: "china", pinyin: "kunming", alias: ["春城", "KMG"] },
  { id: "cn_lijiang", nameZh: "丽江", nameEn: "Lijiang", countryZh: "中国", countryEn: "China", region: "china", pinyin: "lijiang", alias: ["LJG"] },
  { id: "cn_dali", nameZh: "大理", nameEn: "Dali", countryZh: "中国", countryEn: "China", region: "china", pinyin: "dali", alias: ["DLU"] },
  { id: "cn_xishuangbanna", nameZh: "西双版纳", nameEn: "Xishuangbanna", countryZh: "中国", countryEn: "China", region: "china", pinyin: "xishuangbanna", alias: ["景洪", "JHG"] },
  { id: "cn_guilin", nameZh: "桂林", nameEn: "Guilin", countryZh: "中国", countryEn: "China", region: "china", pinyin: "guilin", alias: ["KWL"] },
  { id: "cn_guiyang", nameZh: "贵阳", nameEn: "Guiyang", countryZh: "中国", countryEn: "China", region: "china", pinyin: "guiyang", alias: ["KWE"] },
  { id: "cn_zhangjiajie", nameZh: "张家界", nameEn: "Zhangjiajie", countryZh: "中国", countryEn: "China", region: "china", pinyin: "zhangjiajie", alias: ["DYG"] },
  { id: "cn_huangshan", nameZh: "黄山", nameEn: "Huangshan", countryZh: "中国", countryEn: "China", region: "china", pinyin: "huangshan", alias: ["TXN"] },
  { id: "cn_dunhuang", nameZh: "敦煌", nameEn: "Dunhuang", countryZh: "中国", countryEn: "China", region: "china", pinyin: "dunhuang", alias: ["DNH"] },
  { id: "cn_lanzhou", nameZh: "兰州", nameEn: "Lanzhou", countryZh: "中国", countryEn: "China", region: "china", pinyin: "lanzhou", alias: ["LHW"] },
  { id: "cn_urumqi", nameZh: "乌鲁木齐", nameEn: "Urumqi", countryZh: "中国", countryEn: "China", region: "china", pinyin: "wulumuqi", alias: ["URC"] },
  { id: "cn_lhasa", nameZh: "拉萨", nameEn: "Lhasa", countryZh: "中国", countryEn: "China", region: "china", pinyin: "lasa", alias: ["LXA"] },
  { id: "cn_hongkong", nameZh: "香港", nameEn: "Hong Kong", countryZh: "中国香港", countryEn: "Hong Kong", region: "china", pinyin: "xianggang", alias: ["HKG", "HK"] },
  { id: "cn_macau", nameZh: "澳门", nameEn: "Macau", countryZh: "中国澳门", countryEn: "Macau", region: "china", pinyin: "aomen", alias: ["MFM"] },
  { id: "cn_taipei", nameZh: "台北", nameEn: "Taipei", countryZh: "中国台湾", countryEn: "Taiwan", region: "china", pinyin: "taibei", alias: ["TPE", "TSA"] },
  { id: "cn_kaohsiung", nameZh: "高雄", nameEn: "Kaohsiung", countryZh: "中国台湾", countryEn: "Taiwan", region: "china", pinyin: "gaoxiong", alias: ["KHH"] },
  { id: "cn_taichung", nameZh: "台中", nameEn: "Taichung", countryZh: "中国台湾", countryEn: "Taiwan", region: "china", pinyin: "taizhong", alias: ["RMQ"] },
  { id: "cn_tainan", nameZh: "台南", nameEn: "Tainan", countryZh: "中国台湾", countryEn: "Taiwan", region: "china", pinyin: "tainan", alias: [] },
  { id: "cn_hualien", nameZh: "花莲", nameEn: "Hualien", countryZh: "中国台湾", countryEn: "Taiwan", region: "china", pinyin: "hualian", alias: ["HUN"] },

  // 日本
  { id: "jp_tokyo", nameZh: "东京", nameEn: "Tokyo", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "dongjing", alias: ["TYO", "NRT", "HND"] },
  { id: "jp_kyoto", nameZh: "京都", nameEn: "Kyoto", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "jingdu", alias: ["UKY"] },
  { id: "jp_osaka", nameZh: "大阪", nameEn: "Osaka", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "daban", alias: ["OSA", "KIX", "ITM"] },
  { id: "jp_nara", nameZh: "奈良", nameEn: "Nara", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "nailiang", alias: [] },
  { id: "jp_kobe", nameZh: "神户", nameEn: "Kobe", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "shenhu", alias: ["UKB"] },
  { id: "jp_sapporo", nameZh: "札幌", nameEn: "Sapporo", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "zhahuang", alias: ["CTS", "北海道", "Hokkaido"] },
  { id: "jp_fukuoka", nameZh: "福冈", nameEn: "Fukuoka", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "fuguang", alias: ["FUK", "九州", "Kyushu"] },
  { id: "jp_nagoya", nameZh: "名古屋", nameEn: "Nagoya", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "mingguwu", alias: ["NGO"] },
  { id: "jp_okinawa", nameZh: "冲绳", nameEn: "Okinawa", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "chongsheng", alias: ["那霸", "Naha", "OKA"] },
  { id: "jp_hakone", nameZh: "箱根", nameEn: "Hakone", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "xianggen", alias: [] },
  { id: "jp_kamakura", nameZh: "镰仓", nameEn: "Kamakura", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "liancang", alias: [] },
  { id: "jp_karuizawa", nameZh: "轻井泽", nameEn: "Karuizawa", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "qingjingze", alias: [] },
  { id: "jp_kanazawa", nameZh: "金泽", nameEn: "Kanazawa", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "jinze", alias: ["KMQ"] },
  { id: "jp_takayama", nameZh: "高山", nameEn: "Takayama", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "gaoshan", alias: ["飞騨高山"] },
  { id: "jp_otaru", nameZh: "小樽", nameEn: "Otaru", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "xiaozun", alias: [] },
  { id: "jp_hakodate", nameZh: "函馆", nameEn: "Hakodate", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "hanguan", alias: ["HKD"] },
  { id: "jp_hiroshima", nameZh: "广岛", nameEn: "Hiroshima", countryZh: "日本", countryEn: "Japan", region: "east_asia", pinyin: "guangdao", alias: ["HIJ"] },

  // 韩国
  { id: "kr_seoul", nameZh: "首尔", nameEn: "Seoul", countryZh: "韩国", countryEn: "South Korea", region: "east_asia", pinyin: "shouer", alias: ["汉城", "SEL", "ICN", "GMP"] },
  { id: "kr_busan", nameZh: "釜山", nameEn: "Busan", countryZh: "韩国", countryEn: "South Korea", region: "east_asia", pinyin: "fushan", alias: ["PUS"] },
  { id: "kr_jeju", nameZh: "济州岛", nameEn: "Jeju", countryZh: "韩国", countryEn: "South Korea", region: "east_asia", pinyin: "jizhou", alias: ["CJU"] },
  { id: "kr_incheon", nameZh: "仁川", nameEn: "Incheon", countryZh: "韩国", countryEn: "South Korea", region: "east_asia", pinyin: "renchuan", alias: [] },
  { id: "kr_gyeongju", nameZh: "庆州", nameEn: "Gyeongju", countryZh: "韩国", countryEn: "South Korea", region: "east_asia", pinyin: "qingzhou", alias: [] },

  // 东南亚
  { id: "sg_singapore", nameZh: "新加坡", nameEn: "Singapore", countryZh: "新加坡", countryEn: "Singapore", region: "southeast_asia", pinyin: "xinjiapo", alias: ["SIN", "狮城"] },
  { id: "th_bangkok", nameZh: "曼谷", nameEn: "Bangkok", countryZh: "泰国", countryEn: "Thailand", region: "southeast_asia", pinyin: "mangu", alias: ["BKK", "DMK"] },
  { id: "th_chiangmai", nameZh: "清迈", nameEn: "Chiang Mai", countryZh: "泰国", countryEn: "Thailand", region: "southeast_asia", pinyin: "qingmai", alias: ["CNX"] },
  { id: "th_phuket", nameZh: "普吉岛", nameEn: "Phuket", countryZh: "泰国", countryEn: "Thailand", region: "southeast_asia", pinyin: "pujidao", alias: ["HKT"] },
  { id: "th_samui", nameZh: "苏梅岛", nameEn: "Koh Samui", countryZh: "泰国", countryEn: "Thailand", region: "southeast_asia", pinyin: "sumeidao", alias: ["USM"] },
  { id: "th_pattaya", nameZh: "芭提雅", nameEn: "Pattaya", countryZh: "泰国", countryEn: "Thailand", region: "southeast_asia", pinyin: "batiya", alias: ["PYX"] },
  { id: "my_kualalumpur", nameZh: "吉隆坡", nameEn: "Kuala Lumpur", countryZh: "马来西亚", countryEn: "Malaysia", region: "southeast_asia", pinyin: "jilongpo", alias: ["KUL"] },
  { id: "my_penang", nameZh: "槟城", nameEn: "Penang", countryZh: "马来西亚", countryEn: "Malaysia", region: "southeast_asia", pinyin: "bincheng", alias: ["PEN"] },
  { id: "my_kotakinabalu", nameZh: "亚庇", nameEn: "Kota Kinabalu", countryZh: "马来西亚", countryEn: "Malaysia", region: "southeast_asia", pinyin: "yabi", alias: ["BKI", "沙巴", "Sabah"] },
  { id: "my_semporna", nameZh: "仙本那", nameEn: "Semporna", countryZh: "马来西亚", countryEn: "Malaysia", region: "southeast_asia", pinyin: "xianbenna", alias: [] },
  { id: "id_bali", nameZh: "巴厘岛", nameEn: "Bali", countryZh: "印度尼西亚", countryEn: "Indonesia", region: "southeast_asia", pinyin: "balidao", alias: ["DPS"] },
  { id: "id_jakarta", nameZh: "雅加达", nameEn: "Jakarta", countryZh: "印度尼西亚", countryEn: "Indonesia", region: "southeast_asia", pinyin: "yajiada", alias: ["CGK"] },
  { id: "vn_hanoi", nameZh: "河内", nameEn: "Hanoi", countryZh: "越南", countryEn: "Vietnam", region: "southeast_asia", pinyin: "henei", alias: ["HAN"] },
  { id: "vn_danang", nameZh: "岘港", nameEn: "Da Nang", countryZh: "越南", countryEn: "Vietnam", region: "southeast_asia", pinyin: "xiangang", alias: ["DAD"] },
  { id: "vn_hochiminh", nameZh: "胡志明市", nameEn: "Ho Chi Minh City", countryZh: "越南", countryEn: "Vietnam", region: "southeast_asia", pinyin: "huzhimingshi", alias: ["西贡", "Saigon", "SGN"] },
  { id: "vn_phuquoc", nameZh: "富国岛", nameEn: "Phu Quoc", countryZh: "越南", countryEn: "Vietnam", region: "southeast_asia", pinyin: "fuguodao", alias: ["PQC"] },
  { id: "ph_manila", nameZh: "马尼拉", nameEn: "Manila", countryZh: "菲律宾", countryEn: "Philippines", region: "southeast_asia", pinyin: "manila", alias: ["MNL"] },
  { id: "ph_boracay", nameZh: "长滩岛", nameEn: "Boracay", countryZh: "菲律宾", countryEn: "Philippines", region: "southeast_asia", pinyin: "changtandao", alias: ["MPH"] },
  { id: "ph_cebu", nameZh: "宿务", nameEn: "Cebu", countryZh: "菲律宾", countryEn: "Philippines", region: "southeast_asia", pinyin: "suwu", alias: ["CEB"] },
  { id: "kh_siemreap", nameZh: "暹粒", nameEn: "Siem Reap", countryZh: "柬埔寨", countryEn: "Cambodia", region: "southeast_asia", pinyin: "xianli", alias: ["吴哥窟", "Angkor", "SAI"] },
  { id: "la_luangprabang", nameZh: "琅勃拉邦", nameEn: "Luang Prabang", countryZh: "老挝", countryEn: "Laos", region: "southeast_asia", pinyin: "langbolabang", alias: ["LPQ"] },

  // 欧洲
  { id: "fr_paris", nameZh: "巴黎", nameEn: "Paris", countryZh: "法国", countryEn: "France", region: "europe", pinyin: "bali", alias: ["PAR", "CDG", "ORY"] },
  { id: "fr_nice", nameZh: "尼斯", nameEn: "Nice", countryZh: "法国", countryEn: "France", region: "europe", pinyin: "nisi", alias: ["NCE"] },
  { id: "gb_london", nameZh: "伦敦", nameEn: "London", countryZh: "英国", countryEn: "United Kingdom", region: "europe", pinyin: "lundun", alias: ["LON", "LHR", "LGW"] },
  { id: "gb_edinburgh", nameZh: "爱丁堡", nameEn: "Edinburgh", countryZh: "英国", countryEn: "United Kingdom", region: "europe", pinyin: "aidingbao", alias: ["EDI"] },
  { id: "it_rome", nameZh: "罗马", nameEn: "Rome", countryZh: "意大利", countryEn: "Italy", region: "europe", pinyin: "luoma", alias: ["ROM", "FCO"] },
  { id: "it_florence", nameZh: "佛罗伦萨", nameEn: "Florence", countryZh: "意大利", countryEn: "Italy", region: "europe", pinyin: "foluolunsa", alias: ["翡冷翠", "FLR"] },
  { id: "it_venice", nameZh: "威尼斯", nameEn: "Venice", countryZh: "意大利", countryEn: "Italy", region: "europe", pinyin: "weinisi", alias: ["VCE"] },
  { id: "it_milan", nameZh: "米兰", nameEn: "Milan", countryZh: "意大利", countryEn: "Italy", region: "europe", pinyin: "milan", alias: ["MIL", "MXP"] },
  { id: "es_barcelona", nameZh: "巴塞罗那", nameEn: "Barcelona", countryZh: "西班牙", countryEn: "Spain", region: "europe", pinyin: "basailuona", alias: ["BCN"] },
  { id: "es_madrid", nameZh: "马德里", nameEn: "Madrid", countryZh: "西班牙", countryEn: "Spain", region: "europe", pinyin: "madeli", alias: ["MAD"] },
  { id: "nl_amsterdam", nameZh: "阿姆斯特丹", nameEn: "Amsterdam", countryZh: "荷兰", countryEn: "Netherlands", region: "europe", pinyin: "amusitedan", alias: ["AMS"] },
  { id: "de_berlin", nameZh: "柏林", nameEn: "Berlin", countryZh: "德国", countryEn: "Germany", region: "europe", pinyin: "bolin", alias: ["BER"] },
  { id: "de_munich", nameZh: "慕尼黑", nameEn: "Munich", countryZh: "德国", countryEn: "Germany", region: "europe", pinyin: "munihei", alias: ["MUC"] },
  { id: "at_vienna", nameZh: "维也纳", nameEn: "Vienna", countryZh: "奥地利", countryEn: "Austria", region: "europe", pinyin: "weiyena", alias: ["VIE"] },
  { id: "at_salzburg", nameZh: "萨尔茨堡", nameEn: "Salzburg", countryZh: "奥地利", countryEn: "Austria", region: "europe", pinyin: "saercibao", alias: ["SZG"] },
  { id: "cz_prague", nameZh: "布拉格", nameEn: "Prague", countryZh: "捷克", countryEn: "Czech Republic", region: "europe", pinyin: "bulage", alias: ["PRG"] },
  { id: "hu_budapest", nameZh: "布达佩斯", nameEn: "Budapest", countryZh: "匈牙利", countryEn: "Hungary", region: "europe", pinyin: "budapeisi", alias: ["BUD"] },
  { id: "ch_zurich", nameZh: "苏黎世", nameEn: "Zurich", countryZh: "瑞士", countryEn: "Switzerland", region: "europe", pinyin: "sulishi", alias: ["ZRH"] },
  { id: "ch_geneva", nameZh: "日内瓦", nameEn: "Geneva", countryZh: "瑞士", countryEn: "Switzerland", region: "europe", pinyin: "rineiwa", alias: ["GVA"] },
  { id: "ch_interlaken", nameZh: "因特拉肯", nameEn: "Interlaken", countryZh: "瑞士", countryEn: "Switzerland", region: "europe", pinyin: "yintelaken", alias: ["少女峰"] },
  { id: "ch_lucerne", nameZh: "卢塞恩", nameEn: "Lucerne", countryZh: "瑞士", countryEn: "Switzerland", region: "europe", pinyin: "lusaian", alias: ["琉森"] },
  { id: "pt_lisbon", nameZh: "里斯本", nameEn: "Lisbon", countryZh: "葡萄牙", countryEn: "Portugal", region: "europe", pinyin: "lisiben", alias: ["LIS"] },
  { id: "pt_porto", nameZh: "波尔图", nameEn: "Porto", countryZh: "葡萄牙", countryEn: "Portugal", region: "europe", pinyin: "boertu", alias: ["OPO"] },
  { id: "gr_athens", nameZh: "雅典", nameEn: "Athens", countryZh: "希腊", countryEn: "Greece", region: "europe", pinyin: "yadian", alias: ["ATH"] },
  { id: "gr_santorini", nameZh: "圣托里尼", nameEn: "Santorini", countryZh: "希腊", countryEn: "Greece", region: "europe", pinyin: "shengtuolini", alias: ["JTR"] },
  { id: "is_reykjavik", nameZh: "雷克雅未克", nameEn: "Reykjavik", countryZh: "冰岛", countryEn: "Iceland", region: "europe", pinyin: "leikeyajieke", alias: ["KEF"] },
  { id: "dk_copenhagen", nameZh: "哥本哈根", nameEn: "Copenhagen", countryZh: "丹麦", countryEn: "Denmark", region: "europe", pinyin: "gebenhagen", alias: ["CPH"] },
  { id: "se_stockholm", nameZh: "斯德哥尔摩", nameEn: "Stockholm", countryZh: "瑞典", countryEn: "Sweden", region: "europe", pinyin: "sidegeermo", alias: ["ARN"] },
  { id: "no_oslo", nameZh: "奥斯陆", nameEn: "Oslo", countryZh: "挪威", countryEn: "Norway", region: "europe", pinyin: "aosilu", alias: ["OSL"] },
  { id: "fi_helsinki", nameZh: "赫尔辛基", nameEn: "Helsinki", countryZh: "芬兰", countryEn: "Finland", region: "europe", pinyin: "heerxinji", alias: ["HEL"] },
  { id: "hr_dubrovnik", nameZh: "杜布罗夫尼克", nameEn: "Dubrovnik", countryZh: "克罗地亚", countryEn: "Croatia", region: "europe", pinyin: "dubuluofunike", alias: ["DBV"] },
  { id: "ie_dublin", nameZh: "都柏林", nameEn: "Dublin", countryZh: "爱尔兰", countryEn: "Ireland", region: "europe", pinyin: "doubolin", alias: ["DUB"] },

  // 美洲
  { id: "us_newyork", nameZh: "纽约", nameEn: "New York", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "niuyue", alias: ["NYC", "JFK", "EWR"] },
  { id: "us_losangeles", nameZh: "洛杉矶", nameEn: "Los Angeles", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "luoshanji", alias: ["LAX"] },
  { id: "us_sanfrancisco", nameZh: "旧金山", nameEn: "San Francisco", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "jiujinshan", alias: ["三藩市", "SFO"] },
  { id: "us_lasvegas", nameZh: "拉斯维加斯", nameEn: "Las Vegas", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "lasiweijiasi", alias: ["LAS"] },
  { id: "us_seattle", nameZh: "西雅图", nameEn: "Seattle", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "xiyatu", alias: ["SEA"] },
  { id: "us_chicago", nameZh: "芝加哥", nameEn: "Chicago", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "zhijiage", alias: ["ORD"] },
  { id: "us_boston", nameZh: "波士顿", nameEn: "Boston", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "boshidun", alias: ["BOS"] },
  { id: "us_washington", nameZh: "华盛顿", nameEn: "Washington D.C.", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "huashengdun", alias: ["IAD", "DCA"] },
  { id: "us_miami", nameZh: "迈阿密", nameEn: "Miami", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "maiami", alias: ["MIA"] },
  { id: "us_orlando", nameZh: "奥兰多", nameEn: "Orlando", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "aolanduo", alias: ["MCO"] },
  { id: "us_honolulu", nameZh: "火奴鲁鲁", nameEn: "Honolulu", countryZh: "美国", countryEn: "United States", region: "americas", pinyin: "huonululu", alias: ["檀香山", "夏威夷", "Hawaii", "HNL"] },
  { id: "ca_vancouver", nameZh: "温哥华", nameEn: "Vancouver", countryZh: "加拿大", countryEn: "Canada", region: "americas", pinyin: "wengehua", alias: ["YVR"] },
  { id: "ca_toronto", nameZh: "多伦多", nameEn: "Toronto", countryZh: "加拿大", countryEn: "Canada", region: "americas", pinyin: "duolunduo", alias: ["YYZ"] },
  { id: "ca_montreal", nameZh: "蒙特利尔", nameEn: "Montreal", countryZh: "加拿大", countryEn: "Canada", region: "americas", pinyin: "mengtelier", alias: ["YUL"] },
  { id: "ca_banff", nameZh: "班夫", nameEn: "Banff", countryZh: "加拿大", countryEn: "Canada", region: "americas", pinyin: "banfu", alias: ["落基山"] },
  { id: "mx_cancun", nameZh: "坎昆", nameEn: "Cancun", countryZh: "墨西哥", countryEn: "Mexico", region: "americas", pinyin: "kankun", alias: ["CUN"] },
  { id: "mx_mexicocity", nameZh: "墨西哥城", nameEn: "Mexico City", countryZh: "墨西哥", countryEn: "Mexico", region: "americas", pinyin: "moxigecheng", alias: ["MEX"] },
  { id: "br_riodejaneiro", nameZh: "里约热内卢", nameEn: "Rio de Janeiro", countryZh: "巴西", countryEn: "Brazil", region: "americas", pinyin: "liyuereneilu", alias: ["GIG"] },
  { id: "ar_buenosaires", nameZh: "布宜诺斯艾利斯", nameEn: "Buenos Aires", countryZh: "阿根廷", countryEn: "Argentina", region: "americas", pinyin: "buyinuosiailisi", alias: ["EZE"] },

  // 大洋洲
  { id: "au_sydney", nameZh: "悉尼", nameEn: "Sydney", countryZh: "澳大利亚", countryEn: "Australia", region: "oceania", pinyin: "xini", alias: ["SYD"] },
  { id: "au_melbourne", nameZh: "墨尔本", nameEn: "Melbourne", countryZh: "澳大利亚", countryEn: "Australia", region: "oceania", pinyin: "moerben", alias: ["MEL"] },
  { id: "au_brisbane", nameZh: "布里斯班", nameEn: "Brisbane", countryZh: "澳大利亚", countryEn: "Australia", region: "oceania", pinyin: "bulisiban", alias: ["BNE"] },
  { id: "au_goldcoast", nameZh: "黄金海岸", nameEn: "Gold Coast", countryZh: "澳大利亚", countryEn: "Australia", region: "oceania", pinyin: "huangjinhai'an", alias: ["OOL"] },
  { id: "au_cairns", nameZh: "凯恩斯", nameEn: "Cairns", countryZh: "澳大利亚", countryEn: "Australia", region: "oceania", pinyin: "kaiensi", alias: ["CNS", "大堡礁"] },
  { id: "nz_auckland", nameZh: "奥克兰", nameEn: "Auckland", countryZh: "新西兰", countryEn: "New Zealand", region: "oceania", pinyin: "aokelan", alias: ["AKL"] },
  { id: "nz_queenstown", nameZh: "皇后镇", nameEn: "Queenstown", countryZh: "新西兰", countryEn: "New Zealand", region: "oceania", pinyin: "huanghouzhen", alias: ["ZQN"] },
  { id: "nz_christchurch", nameZh: "基督城", nameEn: "Christchurch", countryZh: "新西兰", countryEn: "New Zealand", region: "oceania", pinyin: "jiducheng", alias: ["CHC"] },

  // 中东与非洲
  { id: "ae_dubai", nameZh: "迪拜", nameEn: "Dubai", countryZh: "阿联酋", countryEn: "United Arab Emirates", region: "middle_east_africa", pinyin: "dibai", alias: ["DXB"] },
  { id: "ae_abudhabi", nameZh: "阿布扎比", nameEn: "Abu Dhabi", countryZh: "阿联酋", countryEn: "United Arab Emirates", region: "middle_east_africa", pinyin: "abuzhabi", alias: ["AUH"] },
  { id: "qa_doha", nameZh: "多哈", nameEn: "Doha", countryZh: "卡塔尔", countryEn: "Qatar", region: "middle_east_africa", pinyin: "duoha", alias: ["DOH"] },
  { id: "tr_istanbul", nameZh: "伊斯坦布尔", nameEn: "Istanbul", countryZh: "土耳其", countryEn: "Turkey", region: "middle_east_africa", pinyin: "yisitanbuer", alias: ["IST"] },
  { id: "eg_cairo", nameZh: "开罗", nameEn: "Cairo", countryZh: "埃及", countryEn: "Egypt", region: "middle_east_africa", pinyin: "kailuo", alias: ["CAI"] },
  { id: "za_capetown", nameZh: "开普敦", nameEn: "Cape Town", countryZh: "南非", countryEn: "South Africa", region: "middle_east_africa", pinyin: "kaipudun", alias: ["CPT"] },
  { id: "ma_marrakech", nameZh: "马拉喀什", nameEn: "Marrakech", countryZh: "摩洛哥", countryEn: "Morocco", region: "middle_east_africa", pinyin: "malakashen", alias: ["RAK"] },
];

/**
 * Searches world cities by query in Chinese, English, pinyin, or alias.
 */
export function searchWorldCities(
  query: string,
  locale: "zh" | "en" = "zh",
  limit = 8
): WorldCity[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: { city: WorldCity; score: number }[] = [];

  for (const city of WORLD_CITIES) {
    const nameZh = city.nameZh.toLowerCase();
    const nameEn = city.nameEn.toLowerCase();
    const countryZh = city.countryZh.toLowerCase();
    const countryEn = city.countryEn.toLowerCase();
    const pinyin = (city.pinyin || "").toLowerCase();
    const aliases = (city.alias || []).map((a) => a.toLowerCase());

    let score = 0;

    // Exact matches
    if (nameZh === q || nameEn === q) score += 100;
    else if (nameZh.startsWith(q) || nameEn.startsWith(q)) score += 50;
    else if (pinyin.startsWith(q)) score += 40;
    else if (aliases.some((a) => a === q)) score += 60;
    else if (nameZh.includes(q) || nameEn.includes(q)) score += 25;
    else if (aliases.some((a) => a.includes(q))) score += 20;
    else if (countryZh.includes(q) || countryEn.includes(q)) score += 10;

    if (score > 0) {
      results.push({ city, score });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map((r) => r.city);
}

/**
 * Checks if a city name is a recognized world city in the database.
 */
export function isRecognizedCity(query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return false;

  return WORLD_CITIES.some(
    (c) =>
      c.nameZh.toLowerCase() === q ||
      c.nameEn.toLowerCase() === q ||
      (c.alias || []).some((a) => a.toLowerCase() === q)
  );
}

/**
 * Formats city display string based on locale.
 */
export function getCityDisplayName(city: WorldCity, locale: "zh" | "en" = "zh"): string {
  if (locale === "en") {
    return `${city.nameEn}, ${city.countryEn}`;
  }
  return `${city.nameZh} · ${city.nameEn} (${city.countryZh})`;
}

/**
 * Returns primary name for adding as chip.
 */
export function getCityPrimaryName(city: WorldCity, locale: "zh" | "en" = "zh"): string {
  return locale === "en" ? city.nameEn : city.nameZh;
}
