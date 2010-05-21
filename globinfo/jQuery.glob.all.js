(function($) {
    var culture, cultures = $.cultures,
    invariant = cultures.invariant,
    standard = invariant.calendars.standard;

    culture = cultures["ar"] = $.extend(true, {}, invariant, {
        name: "ar",
        englishName: "Arabic",
        nativeName: "العربية",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "ر.س.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bg"] = $.extend(true, {}, invariant, {
        name: "bg",
        englishName: "Bulgarian",
        nativeName: "български",
        language: "bg",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "лв."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"],["нед","пон","вт","ср","четв","пет","съб"],["н","п","в","с","ч","п","с"]],
                months: [["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември",""],["ян","февр","март","апр","май","юни","юли","авг","септ","окт","ноември","дек",""]],
                AM: null,
                PM: null,
                eras: [{"name":"след новата ера","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy \u0027г.\u0027",
                    D: "dd MMMM yyyy \u0027г.\u0027",
                    t: "HH:mm \u0027ч.\u0027",
                    T: "HH:mm:ss \u0027ч.\u0027",
                    f: "dd MMMM yyyy \u0027г.\u0027 HH:mm \u0027ч.\u0027",
                    F: "dd MMMM yyyy \u0027г.\u0027 HH:mm:ss \u0027ч.\u0027",
                    M: "dd MMMM",
                    Y: "MMMM yyyy \u0027г.\u0027"
                }
            })
        }
    }, cultures["bg"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ca"] = $.extend(true, {}, invariant, {
        name: "ca",
        englishName: "Catalan",
        nativeName: "català",
        language: "ca",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],["dg.","dl.","dt.","dc.","dj.","dv.","ds."],["dg","dl","dt","dc","dj","dv","ds"]],
                months: [["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre",""],["gen","feb","març","abr","maig","juny","jul","ag","set","oct","nov","des",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d\u0027 / \u0027MMMM\u0027 / \u0027yyyy",
                    f: "dddd, d\u0027 / \u0027MMMM\u0027 / \u0027yyyy HH:mm",
                    F: "dddd, d\u0027 / \u0027MMMM\u0027 / \u0027yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 / \u0027yyyy"
                }
            })
        }
    }, cultures["ca"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh-Hans"] = $.extend(true, {}, invariant, {
        name: "zh-Hans",
        englishName: "Chinese (Simplified)",
        nativeName: "中文(简体)",
        language: "zh-Hans",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$n"],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["周日","周一","周二","周三","周四","周五","周六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"公元","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["zh-Hans"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["cs"] = $.extend(true, {}, invariant, {
        name: "cs",
        englishName: "Czech",
        nativeName: "čeština",
        language: "cs",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "Kč"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],["ne","po","út","st","čt","pá","so"],["ne","po","út","st","čt","pá","so"]],
                months: [["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                monthsGenitive: [["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["dop.","dop.","DOP."],
                PM: ["odp.","odp.","ODP."],
                eras: [{"name":"n. l.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["cs"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["da"] = $.extend(true, {}, invariant, {
        name: "da",
        englishName: "Danish",
        nativeName: "dansk",
        language: "da",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "kr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],["sø","ma","ti","on","to","fr","lø"],["sø","ma","ti","on","to","fr","lø"]],
                months: [["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december",""],["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["da"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["de"] = $.extend(true, {}, invariant, {
        name: "de",
        englishName: "German",
        nativeName: "Deutsch",
        language: "de",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So","Mo","Di","Mi","Do","Fr","Sa"],["So","Mo","Di","Mi","Do","Fr","Sa"]],
                months: [["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n. Chr.","start":null,"offset":0}],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, d. MMMM yyyy",
                    f: "dddd, d. MMMM yyyy HH:mm",
                    F: "dddd, d. MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["de"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["el"] = $.extend(true, {}, invariant, {
        name: "el",
        englishName: "Greek",
        nativeName: "Ελληνικά",
        language: "el",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],["Κυ","Δε","Τρ","Τε","Πε","Πα","Σά"]],
                months: [["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος",""],["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ",""]],
                monthsGenitive: [["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου",""],["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ",""]],
                AM: ["πμ","πμ","ΠΜ"],
                PM: ["μμ","μμ","ΜΜ"],
                eras: [{"name":"μ.Χ.","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, d MMMM yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, d MMMM yyyy h:mm tt",
                    F: "dddd, d MMMM yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["el"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en"] = $.extend(true, {}, invariant, {
        name: "en",
        englishName: "English",
        nativeName: "English",
        language: "en",
        numberFormat: {
            currency: {
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["en"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es"] = $.extend(true, {}, invariant, {
        name: "es",
        englishName: "Spanish",
        nativeName: "español",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fi"] = $.extend(true, {}, invariant, {
        name: "fi",
        englishName: "Finnish",
        nativeName: "suomi",
        language: "fi",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],["su","ma","ti","ke","to","pe","la"],["su","ma","ti","ke","to","pe","la"]],
                months: [["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu",""],["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM\u0027ta \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM\u0027ta \u0027yyyy H:mm",
                    F: "d. MMMM\u0027ta \u0027yyyy H:mm:ss",
                    M: "d. MMMM\u0027ta\u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fi"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fr"] = $.extend(true, {}, invariant, {
        name: "fr",
        englishName: "French",
        nativeName: "français",
        language: "fr",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fr"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["he"] = $.extend(true, {}, invariant, {
        name: "he",
        englishName: "Hebrew",
        nativeName: "עברית",
        language: "he",
        isRTL: true,
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "₪"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","שבת"],["יום א","יום ב","יום ג","יום ד","יום ה","יום ו","שבת"],["א","ב","ג","ד","ה","ו","ש"]],
                months: [["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר",""],["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ",""]],
                eras: [{"name":"לספירה","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd dd MMMM yyyy",
                    f: "dddd dd MMMM yyyy HH:mm",
                    F: "dddd dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            }),
            Hebrew: $.extend(true, {}, standard, {
                name: "Hebrew",
                '/': " ",
                days: [["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","שבת"],["א","ב","ג","ד","ה","ו","ש"],["א","ב","ג","ד","ה","ו","ש"]],
                months: [["תשרי","חשון","כסלו","טבת","שבט","אדר","אדר ב","ניסן","אייר","סיון","תמוז","אב","אלול"],["תשרי","חשון","כסלו","טבת","שבט","אדר","אדר ב","ניסן","אייר","סיון","תמוז","אב","אלול"]],
                eras: [{"name":"C.E.","start":null,"offset":0}],
                twoDigitYearMax: 5790,
                patterns: {
                    d: "dd MMMM yyyy",
                    D: "dddd dd MMMM yyyy",
                    f: "dddd dd MMMM yyyy HH:mm",
                    F: "dddd dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["he"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hu"] = $.extend(true, {}, invariant, {
        name: "hu",
        englishName: "Hungarian",
        nativeName: "magyar",
        language: "hu",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "Ft"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],["V","H","K","Sze","Cs","P","Szo"],["V","H","K","Sze","Cs","P","Szo"]],
                months: [["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december",""],["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec.",""]],
                AM: ["de.","de.","DE."],
                PM: ["du.","du.","DU."],
                eras: [{"name":"i.sz.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy.MM.dd.",
                    D: "yyyy. MMMM d.",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy. MMMM d. H:mm",
                    F: "yyyy. MMMM d. H:mm:ss",
                    M: "MMMM d.",
                    Y: "yyyy. MMMM"
                }
            })
        }
    }, cultures["hu"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["is"] = $.extend(true, {}, invariant, {
        name: "is",
        englishName: "Icelandic",
        nativeName: "íslenska",
        language: "is",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                decimals: 0,
                ',': ".",
                '.': ",",
                symbol: "kr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],["sun.","mán.","þri.","mið.","fim.","fös.","lau."],["su","má","þr","mi","fi","fö","la"]],
                months: [["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember",""],["jan.","feb.","mar.","apr.","maí","jún.","júl.","ágú.","sep.","okt.","nóv.","des.",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["is"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["it"] = $.extend(true, {}, invariant, {
        name: "it",
        englishName: "Italian",
        nativeName: "italiano",
        language: "it",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-$ n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],["dom","lun","mar","mer","gio","ven","sab"],["do","lu","ma","me","gi","ve","sa"]],
                months: [["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre",""],["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["it"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ja"] = $.extend(true, {}, invariant, {
        name: "ja",
        englishName: "Japanese",
        nativeName: "日本語",
        language: "ja",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["-$n","$n"],
                decimals: 0,
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],["日","月","火","水","木","金","土"],["日","月","火","水","木","金","土"]],
                months: [["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["午前","午前","午前"],
                PM: ["午後","午後","午後"],
                eras: [{"name":"西暦","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            }),
            Japanese: $.extend(true, {}, standard, {
                name: "Japanese",
                days: [["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],["日","月","火","水","木","金","土"],["日","月","火","水","木","金","土"]],
                months: [["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["午前","午前","午前"],
                PM: ["午後","午後","午後"],
                eras: [{"name":"平成","start":null,"offset":1867},{"name":"昭和","start":-1812153600000,"offset":1911},{"name":"大正","start":-1357603200000,"offset":1925},{"name":"明治","start":60022080000,"offset":1988}],
                twoDigitYearMax: 99,
                patterns: {
                    d: "gg y/M/d",
                    D: "gg y\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "gg y\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "gg y\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "gg y\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["ja"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ko"] = $.extend(true, {}, invariant, {
        name: "ko",
        englishName: "Korean",
        nativeName: "한국어",
        language: "ko",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                decimals: 0,
                symbol: "₩"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],["일","월","화","수","목","금","토"],["일","월","화","수","목","금","토"]],
                months: [["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["오전","오전","오전"],
                PM: ["오후","오후","오후"],
                eras: [{"name":"서기","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd",
                    t: "tt h:mm",
                    T: "tt h:mm:ss",
                    f: "yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd tt h:mm",
                    F: "yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd tt h:mm:ss",
                    M: "M\u0027월\u0027 d\u0027일\u0027",
                    Y: "yyyy\u0027년\u0027 M\u0027월\u0027"
                }
            }),
            Korean: $.extend(true, {}, standard, {
                name: "Korean",
                '/': "-",
                days: [["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],["일","월","화","수","목","금","토"],["일","월","화","수","목","금","토"]],
                months: [["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["오전","오전","오전"],
                PM: ["오후","오후","오후"],
                eras: [{"name":"단기","start":null,"offset":-2333}],
                twoDigitYearMax: 4362,
                patterns: {
                    d: "gg yyyy-MM-dd",
                    D: "gg yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd",
                    t: "tt h:mm",
                    T: "tt h:mm:ss",
                    f: "gg yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd tt h:mm",
                    F: "gg yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd tt h:mm:ss",
                    M: "M\u0027월\u0027 d\u0027일\u0027",
                    Y: "gg yyyy\u0027년\u0027 M\u0027월\u0027"
                }
            })
        }
    }, cultures["ko"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["nl"] = $.extend(true, {}, invariant, {
        name: "nl",
        englishName: "Dutch",
        nativeName: "Nederlands",
        language: "nl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],["zo","ma","di","wo","do","vr","za"],["zo","ma","di","wo","do","vr","za"]],
                months: [["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december",""],["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d-M-yyyy",
                    D: "dddd d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd d MMMM yyyy H:mm",
                    F: "dddd d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["nl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["no"] = $.extend(true, {}, invariant, {
        name: "no",
        englishName: "Norwegian",
        nativeName: "norsk",
        language: "no",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],["sø","ma","ti","on","to","fr","lø"],["sø","ma","ti","on","to","fr","lø"]],
                months: [["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["no"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["pl"] = $.extend(true, {}, invariant, {
        name: "pl",
        englishName: "Polish",
        nativeName: "polski",
        language: "pl",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "zł"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],["N","Pn","Wt","Śr","Cz","Pt","So"],["N","Pn","Wt","Śr","Cz","Pt","So"]],
                months: [["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień",""],["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]],
                monthsGenitive: [["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia",""],["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "d MMMM yyyy",
                    f: "d MMMM yyyy HH:mm",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["pl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["pt"] = $.extend(true, {}, invariant, {
        name: "pt",
        englishName: "Portuguese",
        nativeName: "Português",
        language: "pt",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-$ n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "R$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],["dom","seg","ter","qua","qui","sex","sáb"],["D","S","T","Q","Q","S","S"]],
                months: [["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro",""],["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    f: "dddd, d\u0027 de \u0027MMMM\u0027 de \u0027yyyy HH:mm",
                    F: "dddd, d\u0027 de \u0027MMMM\u0027 de \u0027yyyy HH:mm:ss",
                    M: "dd\u0027 de \u0027MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["pt"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["rm"] = $.extend(true, {}, invariant, {
        name: "rm",
        englishName: "Romansh",
        nativeName: "Rumantsch",
        language: "rm",
        numberFormat: {
            ',': "\u0027",
            percent: {
                pattern: ["-n%","n%"],
                ',': "\u0027"
            },
            currency: {
                pattern: ["$-n","$ n"],
                ',': "\u0027",
                symbol: "fr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dumengia","glindesdi","mardi","mesemna","gievgia","venderdi","sonda"],["du","gli","ma","me","gie","ve","so"],["du","gli","ma","me","gie","ve","so"]],
                months: [["schaner","favrer","mars","avrigl","matg","zercladur","fanadur","avust","settember","october","november","december",""],["schan","favr","mars","avr","matg","zercl","fan","avust","sett","oct","nov","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"s. Cr.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d MMMM yyyy",
                    f: "dddd, d MMMM yyyy HH:mm",
                    F: "dddd, d MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["rm"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ro"] = $.extend(true, {}, invariant, {
        name: "ro",
        englishName: "Romanian",
        nativeName: "română",
        language: "ro",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "lei"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["duminică","luni","marţi","miercuri","joi","vineri","sâmbătă"],["D","L","Ma","Mi","J","V","S"],["D","L","Ma","Mi","J","V","S"]],
                months: [["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie",""],["ian.","feb.","mar.","apr.","mai.","iun.","iul.","aug.","sep.","oct.","nov.","dec.",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    f: "d MMMM yyyy HH:mm",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ro"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ru"] = $.extend(true, {}, invariant, {
        name: "ru",
        englishName: "Russian",
        nativeName: "русский",
        language: "ru",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]],
                months: [["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]],
                monthsGenitive: [["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря",""],["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy \u0027г.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy \u0027г.\u0027 H:mm",
                    F: "d MMMM yyyy \u0027г.\u0027 H:mm:ss",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ru"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hr"] = $.extend(true, {}, invariant, {
        name: "hr",
        englishName: "Croatian",
        nativeName: "hrvatski",
        language: "hr",
        numberFormat: {
            pattern: ["- n"],
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "kn"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],["ned","pon","uto","sri","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac",""],["sij","vlj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro",""]],
                monthsGenitive: [["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca",""],["sij","vlj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy.",
                    D: "d. MMMM yyyy.",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy. H:mm",
                    F: "d. MMMM yyyy. H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["hr"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sk"] = $.extend(true, {}, invariant, {
        name: "sk",
        englishName: "Slovak",
        nativeName: "slovenčina",
        language: "sk",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ". ",
                firstDay: 1,
                days: [["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],["ne","po","ut","st","št","pi","so"],["ne","po","ut","st","št","pi","so"]],
                months: [["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                monthsGenitive: [["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n. l.","start":null,"offset":0}],
                patterns: {
                    d: "d. M. yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sk"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sq"] = $.extend(true, {}, invariant, {
        name: "sq",
        englishName: "Albanian",
        nativeName: "shqipe",
        language: "sq",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': ".",
                '.': ",",
                symbol: "Lek"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["e diel","e hënë","e martë","e mërkurë","e enjte","e premte","e shtunë"],["Die","Hën","Mar","Mër","Enj","Pre","Sht"],["Di","Hë","Ma","Më","En","Pr","Sh"]],
                months: [["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor",""],["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gsh","Sht","Tet","Nën","Dhj",""]],
                AM: ["PD","pd","PD"],
                PM: ["MD","md","MD"],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy-MM-dd",
                    t: "h:mm.tt",
                    T: "h:mm:ss.tt",
                    f: "yyyy-MM-dd h:mm.tt",
                    F: "yyyy-MM-dd h:mm:ss.tt",
                    Y: "yyyy-MM"
                }
            })
        }
    }, cultures["sq"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sv"] = $.extend(true, {}, invariant, {
        name: "sv",
        englishName: "Swedish",
        nativeName: "svenska",
        language: "sv",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],["sö","må","ti","on","to","fr","lö"],["sö","må","ti","on","to","fr","lö"]],
                months: [["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december",""],["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "\u0027den \u0027d MMMM yyyy",
                    f: "\u0027den \u0027d MMMM yyyy HH:mm",
                    F: "\u0027den \u0027d MMMM yyyy HH:mm:ss",
                    M: "\u0027den \u0027d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sv"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["th"] = $.extend(true, {}, invariant, {
        name: "th",
        englishName: "Thai",
        nativeName: "ไทย",
        language: "th",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "฿"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "ThaiBuddhist",
                firstDay: 1,
                days: [["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],["อ","จ","อ","พ","พ","ศ","ส"]],
                months: [["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม",""],["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.",""]],
                eras: [{"name":"พ.ศ.","start":null,"offset":-543}],
                twoDigitYearMax: 2572,
                patterns: {
                    d: "d/M/yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],["อ","จ","อ","พ","พ","ศ","ส"]],
                months: [["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม",""],["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.",""]],
                patterns: {
                    d: "d/M/yyyy",
                    D: "\u0027วัน\u0027dddd\u0027ที่\u0027 d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "\u0027วัน\u0027dddd\u0027ที่\u0027 d MMMM yyyy H:mm",
                    F: "\u0027วัน\u0027dddd\u0027ที่\u0027 d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["th"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tr"] = $.extend(true, {}, invariant, {
        name: "tr",
        englishName: "Turkish",
        nativeName: "Türkçe",
        language: "tr",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-%n","%n"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "TL"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],["Pz","Pt","Sa","Ça","Pe","Cu","Ct"]],
                months: [["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık",""],["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dd MMMM yyyy dddd",
                    f: "dd MMMM yyyy dddd HH:mm",
                    F: "dd MMMM yyyy dddd HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["tr"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ur"] = $.extend(true, {}, invariant, {
        name: "ur",
        englishName: "Urdu",
        nativeName: "اُردو",
        language: "ur",
        isRTL: true,
        numberFormat: {
            currency: {
                pattern: ["$n-","$n"],
                symbol: "Rs"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["اتوار","پير","منگل","بدھ","جمعرات","جمعه","هفته"],["اتوار","پير","منگل","بدھ","جمعرات","جمعه","هفته"],["ا","پ","م","ب","ج","ج","ه"]],
                months: [["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر",""],["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر",""]],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dd MMMM, yyyy h:mm tt",
                    F: "dd MMMM, yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dd/MM/yyyy h:mm tt",
                    F: "dd/MM/yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            })
        }
    }, cultures["ur"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["id"] = $.extend(true, {}, invariant, {
        name: "id",
        englishName: "Indonesian",
        nativeName: "Bahasa Indonesia",
        language: "id",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                decimals: 0,
                ',': ".",
                '.': ",",
                symbol: "Rp"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],["Minggu","Sen","Sel","Rabu","Kamis","Jumat","Sabtu"],["M","S","S","R","K","J","S"]],
                months: [["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember",""],["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agust","Sep","Okt","Nop","Des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM yyyy H:mm",
                    F: "dd MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["id"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["uk"] = $.extend(true, {}, invariant, {
        name: "uk",
        englishName: "Ukrainian",
        nativeName: "українська",
        language: "uk",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "₴"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["неділя","понеділок","вівторок","середа","четвер","п\u0027ятниця","субота"],["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]],
                months: [["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень",""],["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру",""]],
                monthsGenitive: [["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня",""],["січ","лют","бер","кві","тра","чер","лип","сер","вер","жов","лис","гру",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy\u0027 р.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy\u0027 р.\u0027 H:mm",
                    F: "d MMMM yyyy\u0027 р.\u0027 H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy\u0027 р.\u0027"
                }
            })
        }
    }, cultures["uk"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["be"] = $.extend(true, {}, invariant, {
        name: "be",
        englishName: "Belarusian",
        nativeName: "Беларускі",
        language: "be",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["нядзеля","панядзелак","аўторак","серада","чацвер","пятніца","субота"],["нд","пн","аў","ср","чц","пт","сб"],["нд","пн","аў","ср","чц","пт","сб"]],
                months: [["Студзень","Люты","Сакавік","Красавік","Май","Чэрвень","Ліпень","Жнівень","Верасень","Кастрычнік","Лістапад","Снежань",""],["Сту","Лют","Сак","Кра","Май","Чэр","Ліп","Жні","Вер","Кас","Ліс","Сне",""]],
                monthsGenitive: [["студзеня","лютага","сакавіка","красавіка","мая","чэрвеня","ліпеня","жніўня","верасня","кастрычніка","лістапада","снежня",""],["Сту","Лют","Сак","Кра","Май","Чэр","Ліп","Жні","Вер","Кас","Ліс","Сне",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["be"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sl"] = $.extend(true, {}, invariant, {
        name: "sl",
        englishName: "Slovenian",
        nativeName: "slovenski",
        language: "sl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"],["ned","pon","tor","sre","čet","pet","sob"],["ne","po","to","sr","če","pe","so"]],
                months: [["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["et"] = $.extend(true, {}, invariant, {
        name: "et",
        englishName: "Estonian",
        nativeName: "eesti",
        language: "et",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"],["P","E","T","K","N","R","L"],["P","E","T","K","N","R","L"]],
                months: [["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember",""],["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets",""]],
                AM: ["EL","el","EL"],
                PM: ["PL","pl","PL"],
                patterns: {
                    d: "d.MM.yyyy",
                    D: "d. MMMM yyyy\u0027. a.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy\u0027. a.\u0027 H:mm",
                    F: "d. MMMM yyyy\u0027. a.\u0027 H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy\u0027. a.\u0027"
                }
            })
        }
    }, cultures["et"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["lv"] = $.extend(true, {}, invariant, {
        name: "lv",
        englishName: "Latvian",
        nativeName: "latviešu",
        language: "lv",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-$ n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "Ls"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],["sv","pr","ot","tr","ce","pk","se"],["sv","pr","ot","tr","ce","pk","se"]],
                months: [["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris",""],["jan","feb","mar","apr","mai","jūn","jūl","aug","sep","okt","nov","dec",""]],
                monthsGenitive: [["janvārī","februārī","martā","aprīlī","maijā","jūnijā","jūlijā","augustā","septembrī","oktobrī","novembrī","decembrī",""],["jan","feb","mar","apr","mai","jūn","jūl","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy.MM.dd.",
                    D: "dddd, yyyy\u0027. gada \u0027d. MMMM",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, yyyy\u0027. gada \u0027d. MMMM H:mm",
                    F: "dddd, yyyy\u0027. gada \u0027d. MMMM H:mm:ss",
                    M: "d. MMMM",
                    Y: "yyyy. MMMM"
                }
            })
        }
    }, cultures["lv"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["lt"] = $.extend(true, {}, invariant, {
        name: "lt",
        englishName: "Lithuanian",
        nativeName: "lietuvių",
        language: "lt",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "Lt"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],["Sk","Pr","An","Tr","Kt","Pn","Št"],["S","P","A","T","K","Pn","Š"]],
                months: [["sausis","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis",""],["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rgp","Rgs","Spl","Lap","Grd",""]],
                monthsGenitive: [["sausio","vasario","kovo","balandžio","gegužės","birželio","liepos","rugpjūčio","rugsėjo","spalio","lapkričio","gruodžio",""],["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rgp","Rgs","Spl","Lap","Grd",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy.MM.dd",
                    D: "yyyy \u0027m.\u0027 MMMM d \u0027d.\u0027",
                    f: "yyyy \u0027m.\u0027 MMMM d \u0027d.\u0027 HH:mm",
                    F: "yyyy \u0027m.\u0027 MMMM d \u0027d.\u0027 HH:mm:ss",
                    M: "MMMM d \u0027d.\u0027",
                    Y: "yyyy \u0027m.\u0027 MMMM"
                }
            })
        }
    }, cultures["lt"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tg"] = $.extend(true, {}, invariant, {
        name: "tg",
        englishName: "Tajik",
        nativeName: "Тоҷикӣ",
        language: "tg",
        numberFormat: {
            ',': " ",
            '.': ",",
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                groupSizes: [3,0],
                ',': " ",
                '.': ";",
                symbol: "т.р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                days: [["Яш","Душанбе","Сешанбе","Чоршанбе","Панҷшанбе","Ҷумъа","Шанбе"],["Яш","Дш","Сш","Чш","Пш","Ҷм","Шн"],["Яш","Дш","Сш","Чш","Пш","Ҷм","Шн"]],
                months: [["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                monthsGenitive: [["январи","феврали","марти","апрели","маи","июни","июли","августи","сентябри","октябри","ноябри","декабри",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["tg"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fa"] = $.extend(true, {}, invariant, {
        name: "fa",
        englishName: "Persian",
        nativeName: "فارسى",
        language: "fa",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                '.': "/",
                symbol: "ريال"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ق.ظ","ق.ظ","ق.ظ"],
                PM: ["ب.ظ","ب.ظ","ب.ظ"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],["ی","د","س","چ","پ","ج","ش"]],
                months: [["ژانويه","فوريه","مارس","آوريل","مى","ژوئن","ژوئيه","اوت","سپتامبر","اُكتبر","نوامبر","دسامبر",""],["ژانويه","فوريه","مارس","آوريل","مى","ژوئن","ژوئيه","اوت","سپتامبر","اُكتبر","نوامبر","دسامبر",""]],
                AM: ["ق.ظ","ق.ظ","ق.ظ"],
                PM: ["ب.ظ","ب.ظ","ب.ظ"],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "yyyy/MM/dd",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "yyyy/MM/dd hh:mm tt",
                    F: "yyyy/MM/dd hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ق.ظ","ق.ظ","ق.ظ"],
                PM: ["ب.ظ","ب.ظ","ب.ظ"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ق.ظ","ق.ظ","ق.ظ"],
                PM: ["ب.ظ","ب.ظ","ب.ظ"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["fa"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["vi"] = $.extend(true, {}, invariant, {
        name: "vi",
        englishName: "Vietnamese",
        nativeName: "Tiếng Việt",
        language: "vi",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "₫"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],["CN","Hai","Ba","Tư","Năm","Sáu","Bảy"],["C","H","B","T","N","S","B"]],
                months: [["Tháng Giêng","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai",""],["Thg1","Thg2","Thg3","Thg4","Thg5","Thg6","Thg7","Thg8","Thg9","Thg10","Thg11","Thg12",""]],
                AM: ["SA","sa","SA"],
                PM: ["CH","ch","CH"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dd MMMM yyyy h:mm tt",
                    F: "dd MMMM yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["vi"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hy"] = $.extend(true, {}, invariant, {
        name: "hy",
        englishName: "Armenian",
        nativeName: "Հայերեն",
        language: "hy",
        numberFormat: {
            currency: {
                pattern: ["-n $","n $"],
                symbol: "դր."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Կիրակի","Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","ՈՒրբաթ","Շաբաթ"],["Կիր","Երկ","Երք","Չրք","Հնգ","ՈՒր","Շբթ"],["Կ","Ե","Ե","Չ","Հ","Ո","Շ"]],
                months: [["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր",""],["ՀՆՎ","ՓՏՎ","ՄՐՏ","ԱՊՐ","ՄՅՍ","ՀՆՍ","ՀԼՍ","ՕԳՍ","ՍԵՊ","ՀՈԿ","ՆՈՅ","ԴԵԿ",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM, yyyy H:mm",
                    F: "d MMMM, yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["hy"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["az"] = $.extend(true, {}, invariant, {
        name: "az",
        englishName: "Azeri",
        nativeName: "Azərbaycan­ılı",
        language: "az",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "man."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"],["B","Be","Ça","Ç","Ca","C","Ş"],["B","Be","Ça","Ç","Ca","C","Ş"]],
                months: [["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr",""],["Yan","Fev","Mar","Apr","May","İyun","İyul","Avg","Sen","Okt","Noy","Dek",""]],
                monthsGenitive: [["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""],["Yan","Fev","Mar","Apr","May","İyun","İyul","Avg","Sen","Okt","Noy","Dek",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["az"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["eu"] = $.extend(true, {}, invariant, {
        name: "eu",
        englishName: "Basque",
        nativeName: "euskara",
        language: "eu",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"],["ig.","al.","as.","az.","og.","or.","lr."],["ig","al","as","az","og","or","lr"]],
                months: [["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua",""],["urt.","ots.","mar.","api.","mai.","eka.","uzt.","abu.","ira.","urr.","aza.","abe.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dddd, yyyy.\u0027eko\u0027 MMMM\u0027k \u0027d",
                    T: "H:mm:ss",
                    f: "dddd, yyyy.\u0027eko\u0027 MMMM\u0027k \u0027d HH:mm",
                    F: "dddd, yyyy.\u0027eko\u0027 MMMM\u0027k \u0027d H:mm:ss",
                    Y: "yyyy.\u0027eko\u0027 MMMM"
                }
            })
        }
    }, cultures["eu"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hsb"] = $.extend(true, {}, invariant, {
        name: "hsb",
        englishName: "Upper Sorbian",
        nativeName: "hornjoserbšćina",
        language: "hsb",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ". ",
                firstDay: 1,
                days: [["njedźela","póndźela","wutora","srjeda","štwórtk","pjatk","sobota"],["nje","pón","wut","srj","štw","pja","sob"],["n","p","w","s","š","p","s"]],
                months: [["januar","februar","měrc","apryl","meja","junij","julij","awgust","september","oktober","nowember","december",""],["jan","feb","měr","apr","mej","jun","jul","awg","sep","okt","now","dec",""]],
                monthsGenitive: [["januara","februara","měrca","apryla","meje","junija","julija","awgusta","septembra","oktobra","nowembra","decembra",""],["jan","feb","měr","apr","mej","jun","jul","awg","sep","okt","now","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"po Chr.","start":null,"offset":0}],
                patterns: {
                    d: "d. M. yyyy",
                    D: "dddd, \u0027dnja\u0027 d. MMMM yyyy",
                    t: "H.mm \u0027hodź.\u0027",
                    T: "H:mm:ss",
                    f: "dddd, \u0027dnja\u0027 d. MMMM yyyy H.mm \u0027hodź.\u0027",
                    F: "dddd, \u0027dnja\u0027 d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["hsb"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mk"] = $.extend(true, {}, invariant, {
        name: "mk",
        englishName: "Macedonian (FYROM)",
        nativeName: "македонски јазик",
        language: "mk",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "ден."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["недела","понеделник","вторник","среда","четврток","петок","сабота"],["нед","пон","втр","срд","чет","пет","саб"],["не","по","вт","ср","че","пе","са"]],
                months: [["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември",""],["јан","фев","мар","апр","мај","јун","јул","авг","сеп","окт","ное","дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["mk"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tn"] = $.extend(true, {}, invariant, {
        name: "tn",
        englishName: "Setswana",
        nativeName: "Setswana",
        language: "tn",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Latshipi","Mosupologo","Labobedi","Laboraro","Labone","Labotlhano","Lamatlhatso"],["Ltp.","Mos.","Lbd.","Lbr.","Lbn.","Lbt.","Lmt."],["Lp","Ms","Lb","Lr","Ln","Lt","Lm"]],
                months: [["Ferikgong","Tlhakole","Mopitloe","Moranang","Motsheganong","Seetebosigo","Phukwi","Phatwe","Lwetse","Diphalane","Ngwanatsele","Sedimothole",""],["Fer.","Tlhak.","Mop.","Mor.","Motsh.","Seet.","Phukw.","Phatw.","Lwets.","Diph.","Ngwan.","Sed.",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["tn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["xh"] = $.extend(true, {}, invariant, {
        name: "xh",
        englishName: "isiXhosa",
        nativeName: "isiXhosa",
        language: "xh",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["iCawa","uMvulo","uLwesibini","uLwesithathu","uLwesine","uLwesihlanu","uMgqibelo"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Ca","Mv","Lb","Lt","Ln","Lh","Mg"]],
                months: [["Mqungu","Mdumba","Kwindla","Tshazimpuzi","Canzibe","Silimela","Khala","Thupha","Msintsi","Dwarha","Nkanga","Mnga",""],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["xh"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zu"] = $.extend(true, {}, invariant, {
        name: "zu",
        englishName: "isiZulu",
        nativeName: "isiZulu",
        language: "zu",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["iSonto","uMsombuluko","uLwesibili","uLwesithathu","uLwesine","uLwesihlanu","uMgqibelo"],["Son.","Mso.","Bi.","Tha.","Ne.","Hla.","Mgq."],["Su","Mo","Tu","We","Th","Fr","Sa"]],
                months: [["uMasingana","uNhlolanja","uNdasa","uMbaso","uNhlaba","uNhlangulana","uNtulikazi","uNcwaba","uMandulo","uMfumfu","uLwezi","uZibandlela",""],["Mas.","Nhlo.","Nda.","Mba.","Nhla.","Nhlang.","Ntu.","Ncwa.","Man.","Mfu.","Lwe.","Zib.",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["zu"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["af"] = $.extend(true, {}, invariant, {
        name: "af",
        englishName: "Afrikaans",
        nativeName: "Afrikaans",
        language: "af",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],["Son","Maan","Dins","Woen","Dond","Vry","Sat"],["So","Ma","Di","Wo","Do","Vr","Sa"]],
                months: [["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember",""],["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["af"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ka"] = $.extend(true, {}, invariant, {
        name: "ka",
        englishName: "Georgian",
        nativeName: "ქართული",
        language: "ka",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "Lari"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],["კ","ო","ს","ო","ხ","პ","შ"]],
                months: [["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი",""],["იან","თებ","მარ","აპრ","მაის","ივნ","ივლ","აგვ","სექ","ოქტ","ნოემ","დეკ",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "yyyy \u0027წლის\u0027 dd MM, dddd",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy \u0027წლის\u0027 dd MM, dddd H:mm",
                    F: "yyyy \u0027წლის\u0027 dd MM, dddd H:mm:ss",
                    M: "dd MM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ka"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fo"] = $.extend(true, {}, invariant, {
        name: "fo",
        englishName: "Faroese",
        nativeName: "føroyskt",
        language: "fo",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "kr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["sunnudagur","mánadagur","týsdagur","mikudagur","hósdagur","fríggjadagur","leygardagur"],["sun","mán","týs","mik","hós","frí","leyg"],["su","má","tý","mi","hó","fr","ley"]],
                months: [["januar","februar","mars","apríl","mai","juni","juli","august","september","oktober","november","desember",""],["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fo"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hi"] = $.extend(true, {}, invariant, {
        name: "hi",
        englishName: "Hindi",
        nativeName: "हिंदी",
        language: "hi",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],["रवि.","सोम.","मंगल.","बुध.","गुरु.","शुक्र.","शनि."],["र","स","म","ब","ग","श","श"]],
                months: [["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""],["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""]],
                AM: ["पूर्वाह्न","पूर्वाह्न","पूर्वाह्न"],
                PM: ["अपराह्न","अपराह्न","अपराह्न"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["hi"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mt"] = $.extend(true, {}, invariant, {
        name: "mt",
        englishName: "Maltese",
        nativeName: "Malti",
        language: "mt",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["-$n","$n"],
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Il-Ħadd","It-Tnejn","It-Tlieta","L-Erbgħa","Il-Ħamis","Il-Ġimgħa","Is-Sibt"],["Ħad","Tne","Tli","Erb","Ħam","Ġim","Sib"],["I","I","I","L","I","I","I"]],
                months: [["Jannar","Frar","Marzu","April","Mejju","Ġunju","Lulju","Awissu","Settembru","Ottubru","Novembru","Diċembru",""],["Jan","Fra","Mar","Apr","Mej","Ġun","Lul","Awi","Set","Ott","Nov","Diċ",""]],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d\u0027 ta\\\u0027 \u0027MMMM yyyy",
                    f: "dddd, d\u0027 ta\\\u0027 \u0027MMMM yyyy HH:mm",
                    F: "dddd, d\u0027 ta\\\u0027 \u0027MMMM yyyy HH:mm:ss",
                    M: "d\u0027 ta\\\u0027 \u0027MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["mt"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["se"] = $.extend(true, {}, invariant, {
        name: "se",
        englishName: "Sami (Northern)",
        nativeName: "davvisámegiella",
        language: "se",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-%n","%n"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sotnabeaivi","vuossárga","maŋŋebárga","gaskavahkku","duorastat","bearjadat","lávvardat"],["sotn","vuos","maŋ","gask","duor","bear","láv"],["s","m","d","g","d","b","l"]],
                months: [["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu",""],["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]],
                monthsGenitive: [["ođđajagimánu","guovvamánu","njukčamánu","cuoŋománu","miessemánu","geassemánu","suoidnemánu","borgemánu","čakčamánu","golggotmánu","skábmamánu","juovlamánu",""],["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "MMMM d\u0027. b. \u0027yyyy",
                    f: "MMMM d\u0027. b. \u0027yyyy HH:mm",
                    F: "MMMM d\u0027. b. \u0027yyyy HH:mm:ss",
                    M: "MMMM d\u0027. b. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["se"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ga"] = $.extend(true, {}, invariant, {
        name: "ga",
        englishName: "Irish",
        nativeName: "Gaeilge",
        language: "ga",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Dé Domhnaigh","Dé Luain","Dé Máirt","Dé Céadaoin","Déardaoin","Dé hAoine","Dé Sathairn"],["Domh","Luan","Máir","Céad","Déar","Aoi","Sath"],["Do","Lu","Má","Cé","De","Ao","Sa"]],
                months: [["Eanáir","Feabhra","Márta","Aibreán","Bealtaine","Meitheamh","Iúil","Lúnasa","Meán Fómhair","Deireadh Fómhair","Samhain","Nollaig",""],["Ean","Feabh","Már","Aib","Bealt","Meith","Iúil","Lún","M.Fómh","D.Fómh","Samh","Noll",""]],
                AM: ["r.n.","r.n.","R.N."],
                PM: ["i.n.","i.n.","I.N."],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "d MMMM yyyy",
                    f: "d MMMM yyyy HH:mm",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ga"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ms"] = $.extend(true, {}, invariant, {
        name: "ms",
        englishName: "Malay",
        nativeName: "Bahasa Melayu",
        language: "ms",
        numberFormat: {
            currency: {
                decimals: 0,
                symbol: "RM"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],["Ahad","Isnin","Sel","Rabu","Khamis","Jumaat","Sabtu"],["A","I","S","R","K","J","S"]],
                months: [["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember",""],["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogos","Sept","Okt","Nov","Dis",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM yyyy H:mm",
                    F: "dd MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ms"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["kk"] = $.extend(true, {}, invariant, {
        name: "kk",
        englishName: "Kazakh",
        nativeName: "Қазақ",
        language: "kk",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-$n","$n"],
                ',': " ",
                '.': "-",
                symbol: "Т"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Жексенбі","Дүйсенбі","Сейсенбі","Сәрсенбі","Бейсенбі","Жұма","Сенбі"],["Жк","Дс","Сс","Ср","Бс","Жм","Сн"],["Жк","Дс","Сс","Ср","Бс","Жм","Сн"]],
                months: [["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан",""],["Қаң","Ақп","Нау","Сәу","Мам","Мау","Шіл","Там","Қыр","Қаз","Қар","Жел",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy \u0027ж.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy \u0027ж.\u0027 H:mm",
                    F: "d MMMM yyyy \u0027ж.\u0027 H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["kk"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ky"] = $.extend(true, {}, invariant, {
        name: "ky",
        englishName: "Kyrgyz",
        nativeName: "Кыргыз",
        language: "ky",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': "-",
                symbol: "сом"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Жекшемби","Дүйшөмбү","Шейшемби","Шаршемби","Бейшемби","Жума","Ишемби"],["Жш","Дш","Шш","Шр","Бш","Жм","Иш"],["Жш","Дш","Шш","Шр","Бш","Жм","Иш"]],
                months: [["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "d\u0027-\u0027MMMM yyyy\u0027-ж.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d\u0027-\u0027MMMM yyyy\u0027-ж.\u0027 H:mm",
                    F: "d\u0027-\u0027MMMM yyyy\u0027-ж.\u0027 H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy\u0027-ж.\u0027"
                }
            })
        }
    }, cultures["ky"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sw"] = $.extend(true, {}, invariant, {
        name: "sw",
        englishName: "Kiswahili",
        nativeName: "Kiswahili",
        language: "sw",
        numberFormat: {
            currency: {
                symbol: "S"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Jumapili","Jumatatu","Jumanne","Jumatano","Alhamisi","Ijumaa","Jumamosi"],["Jumap.","Jumat.","Juman.","Jumat.","Alh.","Iju.","Jumam."],["P","T","N","T","A","I","M"]],
                months: [["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Decemba",""],["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Dec",""]],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["sw"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tk"] = $.extend(true, {}, invariant, {
        name: "tk",
        englishName: "Turkmen",
        nativeName: "türkmençe",
        language: "tk",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "m."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Duşenbe","Sişenbe","Çarşenbe","Penşenbe","Anna","Şenbe","Ýekşenbe"],["Db","Sb","Çb","Pb","An","Şb","Ýb"],["D","S","Ç","P","A","Ş","Ý"]],
                months: [["Ýanwar","Fewral","Mart","Aprel","Maý","lýun","lýul","Awgust","Sentýabr","Oktýabr","Noýabr","Dekabr",""],["Ýan","Few","Mart","Apr","Maý","lýun","lýul","Awg","Sen","Okt","Not","Dek",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "yyyy \u0027ý.\u0027 MMMM d",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy \u0027ý.\u0027 MMMM d H:mm",
                    F: "yyyy \u0027ý.\u0027 MMMM d H:mm:ss",
                    Y: "yyyy \u0027ý.\u0027 MMMM"
                }
            })
        }
    }, cultures["tk"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["uz"] = $.extend(true, {}, invariant, {
        name: "uz",
        englishName: "Uzbek",
        nativeName: "U\u0027zbek",
        language: "uz",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                decimals: 0,
                ',': " ",
                '.': ",",
                symbol: "so\u0027m"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"],["yak.","dsh.","sesh.","chr.","psh.","jm.","sh."],["ya","d","s","ch","p","j","sh"]],
                months: [["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""],["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd/MM yyyy",
                    D: "yyyy \u0027yil\u0027 d-MMMM",
                    f: "yyyy \u0027yil\u0027 d-MMMM HH:mm",
                    F: "yyyy \u0027yil\u0027 d-MMMM HH:mm:ss",
                    M: "d-MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["uz"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tt"] = $.extend(true, {}, invariant, {
        name: "tt",
        englishName: "Tatar",
        nativeName: "Татар",
        language: "tt",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Якшәмбе","Дүшәмбе","Сишәмбе","Чәршәмбе","Пәнҗешәмбе","Җомга","Шимбә"],["Якш","Дүш","Сиш","Чәрш","Пәнҗ","Җом","Шим"],["Я","Д","С","Ч","П","Җ","Ш"]],
                months: [["Гыйнвар","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],["Гыйн.","Фев.","Мар.","Апр.","Май","Июнь","Июль","Авг.","Сен.","Окт.","Нояб.","Дек.",""]],
                monthsGenitive: [["Гыйнварның","Февральнең","Мартның","Апрельнең","Майның","Июньнең","Июльнең","Августның","Сентябрьның","Октябрьның","Ноябрьның","Декабрьның",""],["Гыйн.-ның","Фев.-нең","Мар.-ның","Апр.-нең","Майның","Июньнең","Июльнең","Авг.-ның","Сен.-ның","Окт.-ның","Нояб.-ның","Дек.-ның",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["tt"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bn"] = $.extend(true, {}, invariant, {
        name: "bn",
        englishName: "Bengali",
        nativeName: "বাংলা",
        language: "bn",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-%n","%n"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "টা"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                ':': ".",
                firstDay: 1,
                days: [["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"],["রবি.","সোম.","মঙ্গল.","বুধ.","বৃহস্পতি.","শুক্র.","শনি."],["র","স","ম","ব","ব","শ","শ"]],
                months: [["জানুয়ারী","ফেব্রুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর",""],["জানু.","ফেব্রু.","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগ.","সেপ্টে.","অক্টো.","নভে.","ডিসে.",""]],
                AM: ["পুর্বাহ্ন","পুর্বাহ্ন","পুর্বাহ্ন"],
                PM: ["অপরাহ্ন","অপরাহ্ন","অপরাহ্ন"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    t: "HH.mm",
                    T: "HH.mm.ss",
                    f: "dd MMMM yyyy HH.mm",
                    F: "dd MMMM yyyy HH.mm.ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["bn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["pa"] = $.extend(true, {}, invariant, {
        name: "pa",
        englishName: "Punjabi",
        nativeName: "ਪੰਜਾਬੀ",
        language: "pa",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "ਰੁ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ਐਤਵਾਰ","ਸੋਮਵਾਰ","ਮੰਗਲਵਾਰ","ਬੁੱਧਵਾਰ","ਵੀਰਵਾਰ","ਸ਼ੁੱਕਰਵਾਰ","ਸ਼ਨਿੱਚਰਵਾਰ"],["ਐਤ.","ਸੋਮ.","ਮੰਗਲ.","ਬੁੱਧ.","ਵੀਰ.","ਸ਼ੁਕਰ.","ਸ਼ਨਿੱਚਰ."],["ਐ","ਸ","ਮ","ਬ","ਵ","ਸ਼","ਸ਼"]],
                months: [["ਜਨਵਰੀ","ਫ਼ਰਵਰੀ","ਮਾਰਚ","ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ","ਜੁਲਾਈ","ਅਗਸਤ","ਸਤੰਬਰ","ਅਕਤੂਬਰ","ਨਵੰਬਰ","ਦਸੰਬਰ",""],["ਜਨਵਰੀ","ਫ਼ਰਵਰੀ","ਮਾਰਚ","ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ","ਜੁਲਾਈ","ਅਗਸਤ","ਸਤੰਬਰ","ਅਕਤੂਬਰ","ਨਵੰਬਰ","ਦਸੰਬਰ",""]],
                AM: ["ਸਵੇਰ","ਸਵੇਰ","ਸਵੇਰ"],
                PM: ["ਸ਼ਾਮ","ਸ਼ਾਮ","ਸ਼ਾਮ"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy dddd",
                    t: "tt hh:mm",
                    T: "tt hh:mm:ss",
                    f: "dd MMMM yyyy dddd tt hh:mm",
                    F: "dd MMMM yyyy dddd tt hh:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["pa"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["gu"] = $.extend(true, {}, invariant, {
        name: "gu",
        englishName: "Gujarati",
        nativeName: "ગુજરાતી",
        language: "gu",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "રૂ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["રવિવાર","સોમવાર","મંગળવાર","બુધવાર","ગુરુવાર","શુક્રવાર","શનિવાર"],["રવિ","સોમ","મંગળ","બુધ","ગુરુ","શુક્ર","શનિ"],["ર","સ","મ","બ","ગ","શ","શ"]],
                months: [["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટેમ્બર","ઑક્ટ્બર","નવેમ્બર","ડિસેમ્બર",""],["જાન્યુ","ફેબ્રુ","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટે","ઑક્ટો","નવે","ડિસે",""]],
                AM: ["પૂર્વ મધ્યાહ્ન","પૂર્વ મધ્યાહ્ન","પૂર્વ મધ્યાહ્ન"],
                PM: ["ઉત્તર મધ્યાહ્ન","ઉત્તર મધ્યાહ્ન","ઉત્તર મધ્યાહ્ન"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["gu"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["or"] = $.extend(true, {}, invariant, {
        name: "or",
        englishName: "Oriya",
        nativeName: "ଓଡ଼ିଆ",
        language: "or",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "ଟ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["ରବିବାର","ସୋମବାର","ମଙ୍ଗଳବାର","ବୁଧବାର","ଗୁରୁବାର","ଶୁକ୍ରବାର","ଶନିବାର"],["ରବି.","ସୋମ.","ମଙ୍ଗଳ.","ବୁଧ.","ଗୁରୁ.","ଶୁକ୍ର.","ଶନି."],["ର","ସୋ","ମ","ବୁ","ଗୁ","ଶୁ","ଶ"]],
                months: [["ଜାନୁୟାରୀ","ଫ୍ରେବୃୟାରୀ","ମାର୍ଚ୍ଚ","ଏପ୍ରିଲ୍‌","ମେ","ଜୁନ୍‌","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","(ଡିସେମ୍ବର",""],["ଜାନୁୟାରୀ","ଫ୍ରେବୃୟାରୀ","ମାର୍ଚ୍ଚ","ଏପ୍ରିଲ୍‌","ମେ","ଜୁନ୍‌","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","(ଡିସେମ୍ବର",""]],
                eras: [{"name":"ଖ୍ରୀଷ୍ଟାବ୍ଦ","start":null,"offset":0}],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["or"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ta"] = $.extend(true, {}, invariant, {
        name: "ta",
        englishName: "Tamil",
        nativeName: "தமிழ்",
        language: "ta",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "ரூ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ஞாயிற்றுக்கிழமை","திங்கள்கிழமை","செவ்வாய்கிழமை","புதன்கிழமை","வியாழக்கிழமை","வெள்ளிக்கிழமை","சனிக்கிழமை"],["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"],["ஞா","தி","செ","பு","வி","வெ","ச"]],
                months: [["ஜனவரி","பிப்ரவரி","மார்ச்","ஏப்ரல்","மே","ஜூன்","ஜூலை","ஆகஸ்ட்","செப்டம்பர்","அக்டோபர்","நவம்பர்","டிசம்பர்",""],["ஜனவரி","பிப்ரவரி","மார்ச்","ஏப்ரல்","மே","ஜூன்","ஜூலை","ஆகஸ்ட்","செப்டம்பர்","அக்டோபர்","நவம்பர்","டிசம்பர்",""]],
                AM: ["காலை","காலை","காலை"],
                PM: ["மாலை","மாலை","மாலை"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ta"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["te"] = $.extend(true, {}, invariant, {
        name: "te",
        englishName: "Telugu",
        nativeName: "తెలుగు",
        language: "te",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "రూ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"],["ఆది.","సోమ.","మంగళ.","బుధ.","గురు.","శుక్ర.","శని."],["ఆ","సో","మం","బు","గు","శు","శ"]],
                months: [["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జూలై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్",""],["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జూలై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్",""]],
                AM: ["పూర్వాహ్న","పూర్వాహ్న","పూర్వాహ్న"],
                PM: ["అపరాహ్న","అపరాహ్న","అపరాహ్న"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["te"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["kn"] = $.extend(true, {}, invariant, {
        name: "kn",
        englishName: "Kannada",
        nativeName: "ಕನ್ನಡ",
        language: "kn",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "ರೂ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ಭಾನುವಾರ","ಸೋಮವಾರ","ಮಂಗಳವಾರ","ಬುಧವಾರ","ಗುರುವಾರ","ಶುಕ್ರವಾರ","ಶನಿವಾರ"],["ಭಾನು.","ಸೋಮ.","ಮಂಗಳ.","ಬುಧ.","ಗುರು.","ಶುಕ್ರ.","ಶನಿ."],["ರ","ಸ","ಮ","ಬ","ಗ","ಶ","ಶ"]],
                months: [["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಎಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್",""],["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಎಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್",""]],
                AM: ["ಪೂರ್ವಾಹ್ನ","ಪೂರ್ವಾಹ್ನ","ಪೂರ್ವಾಹ್ನ"],
                PM: ["ಅಪರಾಹ್ನ","ಅಪರಾಹ್ನ","ಅಪರಾಹ್ನ"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["kn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ml"] = $.extend(true, {}, invariant, {
        name: "ml",
        englishName: "Malayalam",
        nativeName: "മലയാളം",
        language: "ml",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-%n","%n"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "ക"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                ':': ".",
                firstDay: 1,
                days: [["ഞായറാഴ്ച","തിങ്കളാഴ്ച","ചൊവ്വാഴ്ച","ബുധനാഴ്ച","വ്യാഴാഴ്ച","വെള്ളിയാഴ്ച","ശനിയാഴ്ച"],["ഞായർ.","തിങ്കൾ.","ചൊവ്വ.","ബുധൻ.","വ്യാഴം.","വെള്ളി.","ശനി."],["ഞ","ത","ച","ബ","വ","വെ","ശ"]],
                months: [["ജനുവരി","ഫെബ്റുവരി","മാറ്ച്ച്","ഏപ്റില്","മെയ്","ജൂണ്","ജൂലൈ","ഓഗസ്ററ്","സെപ്ററംബറ്","ഒക്ടോബറ്","നവംബറ്","ഡിസംബറ്",""],["ജനുവരി","ഫെബ്റുവരി","മാറ്ച്ച്","ഏപ്റില്","മെയ്","ജൂണ്","ജൂലൈ","ഓഗസ്ററ്","സെപ്ററംബറ്","ഒക്ടോബറ്","നവംബറ്","ഡിസംബറ്",""]],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    t: "HH.mm",
                    T: "HH.mm.ss",
                    f: "dd MMMM yyyy HH.mm",
                    F: "dd MMMM yyyy HH.mm.ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ml"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["as"] = $.extend(true, {}, invariant, {
        name: "as",
        englishName: "Assamese",
        nativeName: "অসমীয়া",
        language: "as",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","n$"],
                groupSizes: [3,2],
                symbol: "ট"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["সোমবাৰ","মঙ্গলবাৰ","বুধবাৰ","বৃহস্পতিবাৰ","শুক্রবাৰ","শনিবাৰ","ৰবিবাৰ"],["সোম.","মঙ্গল.","বুধ.","বৃহ.","শুক্র.","শনি.","ৰবি."],["সো","ম","বু","বৃ","শু","শ","র"]],
                months: [["জানুৱাৰী","ফেব্রুৱাৰী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগষ্ট","চেপ্টেম্বর","অক্টোবর","নবেম্বর","ডিচেম্বর",""],["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগষ্ট","চেপ্টে","অক্টো","নবে","ডিচে",""]],
                AM: ["ৰাতিপু","ৰাতিপু","ৰাতিপু"],
                PM: ["আবেলি","আবেলি","আবেলি"],
                eras: [{"name":"খ্রীষ্টাব্দ","start":null,"offset":0}],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "yyyy,MMMM dd, dddd",
                    t: "tt h:mm",
                    T: "tt h:mm:ss",
                    f: "yyyy,MMMM dd, dddd tt h:mm",
                    F: "yyyy,MMMM dd, dddd tt h:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM,yy"
                }
            })
        }
    }, cultures["as"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mr"] = $.extend(true, {}, invariant, {
        name: "mr",
        englishName: "Marathi",
        nativeName: "मराठी",
        language: "mr",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["रविवार","सोमवार","मंगळवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],["रवि.","सोम.","मंगळ.","बुध.","गुरु.","शुक्र.","शनि."],["र","स","म","ब","ग","श","श"]],
                months: [["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर",""],["जाने.","फेब्रु.","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टें.","ऑक्टो.","नोव्हें.","डिसें.",""]],
                AM: ["म.पू.","म.पू.","म.पू."],
                PM: ["म.नं.","म.नं.","म.नं."],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["mr"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sa"] = $.extend(true, {}, invariant, {
        name: "sa",
        englishName: "Sanskrit",
        nativeName: "संस्कृत",
        language: "sa",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["रविवासरः","सोमवासरः","मङ्गलवासरः","बुधवासरः","गुरुवासरः","शुक्रवासरः","शनिवासरः"],["रविवासरः","सोमवासरः","मङ्गलवासरः","बुधवासरः","गुरुवासरः","शुक्रवासरः","शनिवासरः"],["र","स","म","ब","ग","श","श"]],
                months: [["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""],["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""]],
                AM: ["पूर्वाह्न","पूर्वाह्न","पूर्वाह्न"],
                PM: ["अपराह्न","अपराह्न","अपराह्न"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy dddd",
                    f: "dd MMMM yyyy dddd HH:mm",
                    F: "dd MMMM yyyy dddd HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["sa"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mn"] = $.extend(true, {}, invariant, {
        name: "mn",
        englishName: "Mongolian",
        nativeName: "Монгол хэл",
        language: "mn",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "₮"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"],["Ня","Да","Мя","Лх","Пү","Ба","Бя"],["Ня","Да","Мя","Лх","Пү","Ба","Бя"]],
                months: [["1 дүгээр сар","2 дугаар сар","3 дугаар сар","4 дүгээр сар","5 дугаар сар","6 дугаар сар","7 дугаар сар","8 дугаар сар","9 дүгээр сар","10 дугаар сар","11 дүгээр сар","12 дугаар сар",""],["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII",""]],
                monthsGenitive: [["1 дүгээр сарын","2 дугаар сарын","3 дугаар сарын","4 дүгээр сарын","5 дугаар сарын","6 дугаар сарын","7 дугаар сарын","8 дугаар сарын","9 дүгээр сарын","10 дугаар сарын","11 дүгээр сарын","12 дугаар сарын",""],["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yy.MM.dd",
                    D: "yyyy \u0027оны\u0027 MMMM d",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy \u0027оны\u0027 MMMM d H:mm",
                    F: "yyyy \u0027оны\u0027 MMMM d H:mm:ss",
                    M: "d MMMM",
                    Y: "yyyy \u0027он\u0027 MMMM"
                }
            })
        }
    }, cultures["mn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bo"] = $.extend(true, {}, invariant, {
        name: "bo",
        englishName: "Tibetan",
        nativeName: "བོད་ཡིག",
        language: "bo",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["$-n","$n"],
                groupSizes: [3,0],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["གཟའ་ཉི་མ།","གཟའ་ཟླ་བ།","གཟའ་མིག་དམར།","གཟའ་ལྷག་པ།","གཟའ་ཕུར་བུ།","གཟའ་པ་སངས།","གཟའ་སྤེན་པ།"],["ཉི་མ།","ཟླ་བ།","མིག་དམར།","ལྷག་པ།","ཕུར་བུ།","པ་སངས།","སྤེན་པ།"],["༧","༡","༢","༣","༤","༥","༦"]],
                months: [["སྤྱི་ཟླ་དང་པོ།","སྤྱི་ཟླ་གཉིས་པ།","སྤྱི་ཟླ་གསུམ་པ།","སྤྱི་ཟླ་བཞི་པ།","སྤྱི་ཟླ་ལྔ་པ།","སྤྱི་ཟླ་དྲུག་པ།","སྤྱི་ཟླ་བདུན་པ།","སྤྱི་ཟླ་བརྒྱད་པ།","སྤྱི་ཟླ་དགུ་པ།","སྤྱི་ཟླ་བཅུ་པོ།","སྤྱི་ཟླ་བཅུ་གཅིག་པ།","སྤྱི་ཟླ་བཅུ་གཉིས་པ།",""],["ཟླ་ ༡","ཟླ་ ༢","ཟླ་ ༣","ཟླ་ ༤","ཟླ་ ༥","ཟླ་ ༦","ཟླ་ ༧","ཟླ་ ༨","ཟླ་ ༩","ཟླ་ ༡༠","ཟླ་ ༡༡","ཟླ་ ༡༢",""]],
                AM: ["སྔ་དྲོ","སྔ་དྲོ","སྔ་དྲོ"],
                PM: ["ཕྱི་དྲོ","ཕྱི་དྲོ","ཕྱི་དྲོ"],
                eras: [{"name":"སྤྱི་ལོ","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027ལོའི་ཟླ\u0027 M\u0027ཚེས\u0027 d",
                    f: "yyyy\u0027ལོའི་ཟླ\u0027 M\u0027ཚེས\u0027 d HH:mm",
                    F: "yyyy\u0027ལོའི་ཟླ\u0027 M\u0027ཚེས\u0027 d HH:mm:ss",
                    M: "\u0027ཟླ་\u0027 M\u0027ཚེས\u0027d",
                    Y: "yyyy.M"
                }
            })
        }
    }, cultures["bo"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["cy"] = $.extend(true, {}, invariant, {
        name: "cy",
        englishName: "Welsh",
        nativeName: "Cymraeg",
        language: "cy",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["-$n","$n"],
                symbol: "£"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Dydd Sul","Dydd Llun","Dydd Mawrth","Dydd Mercher","Dydd Iau","Dydd Gwener","Dydd Sadwrn"],["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],["Su","Ll","Ma","Me","Ia","Gw","Sa"]],
                months: [["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr",""],["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["cy"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["km"] = $.extend(true, {}, invariant, {
        name: "km",
        englishName: "Khmer",
        nativeName: "ខ្មែរ",
        language: "km",
        numberFormat: {
            pattern: ["- n"],
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["-n$","n$"],
                symbol: "៛"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["ថ្ងៃអាទិត្យ","ថ្ងៃច័ន្ទ","ថ្ងៃអង្គារ","ថ្ងៃពុធ","ថ្ងៃព្រហស្បតិ៍","ថ្ងៃសុក្រ","ថ្ងៃសៅរ៍"],["អាទិ.","ច.","អ.","ពុ","ព្រហ.","សុ.","ស."],["អា","ច","អ","ពុ","ព្","សុ","ស"]],
                months: [["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ",""],["១","២","៣","៤","៥","៦","៧","៨","៩","១០","១១","១២",""]],
                AM: ["ព្រឹក","ព្រឹក","ព្រឹក"],
                PM: ["ល្ងាច","ល្ងាច","ល្ងាច"],
                eras: [{"name":"មុនគ.ស.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "d MMMM yyyy",
                    t: "H:mm tt",
                    f: "d MMMM yyyy H:mm tt",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "\u0027ថ្ងៃទី\u0027 dd \u0027ខែ\u0027 MM",
                    Y: "\u0027ខែ\u0027 MM \u0027ឆ្នាំ\u0027 yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ព្រឹក","ព្រឹក","ព្រឹក"],
                PM: ["ល្ងាច","ល្ងាច","ល្ងាច"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm tt",
                    f: "dddd, MMMM dd, yyyy H:mm tt",
                    F: "dddd, MMMM dd, yyyy HH:mm:ss",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["km"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["lo"] = $.extend(true, {}, invariant, {
        name: "lo",
        englishName: "Lao",
        nativeName: "ລາວ",
        language: "lo",
        numberFormat: {
            pattern: ["(n)"],
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["(n$)","n$"],
                groupSizes: [3,0],
                symbol: "₭"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["ວັນອາທິດ","ວັນຈັນ","ວັນອັງຄານ","ວັນພຸດ","ວັນພະຫັດ","ວັນສຸກ","ວັນເສົາ"],["ອາທິດ","ຈັນ","ອັງຄານ","ພຸດ","ພະຫັດ","ສຸກ","ເສົາ"],["ອ","ຈ","ອ","ພ","ພ","ສ","ເ"]],
                months: [["ມັງກອນ","ກຸມພາ","ມີນາ","ເມສາ","ພຶດສະພາ","ມິຖຸນາ","ກໍລະກົດ","ສິງຫາ","ກັນຍາ","ຕຸລາ","ພະຈິກ","ທັນວາ",""],["ມັງກອນ","ກຸມພາ","ມີນາ","ເມສາ","ພຶດສະພາ","ມິຖຸນາ","ກໍລະກົດ","ສິງຫາ","ກັນຍາ","ຕຸລາ","ພະຈິກ","ທັນວາ",""]],
                AM: ["ເຊົ້າ","ເຊົ້າ","ເຊົ້າ"],
                PM: ["ແລງ","ແລງ","ແລງ"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    t: "H:mm tt",
                    f: "dd MMMM yyyy H:mm tt",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["lo"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["gl"] = $.extend(true, {}, invariant, {
        name: "gl",
        englishName: "Galician",
        nativeName: "galego",
        language: "gl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["domingo","luns","martes","mércores","xoves","venres","sábado"],["dom","luns","mar","mér","xov","ven","sáb"],["do","lu","ma","mé","xo","ve","sá"]],
                months: [["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro",""],["xan","feb","mar","abr","maio","xuñ","xull","ago","set","out","nov","dec",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["gl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["kok"] = $.extend(true, {}, invariant, {
        name: "kok",
        englishName: "Konkani",
        nativeName: "कोंकणी",
        language: "kok",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["आयतार","सोमार","मंगळार","बुधवार","बिरेस्तार","सुक्रार","शेनवार"],["आय.","सोम.","मंगळ.","बुध.","बिरे.","सुक्र.","शेन."],["आ","स","म","ब","ब","स","श"]],
                months: [["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोवेम्बर","डिसेंबर",""],["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोवेम्बर","डिसेंबर",""]],
                AM: ["म.पू.","म.पू.","म.पू."],
                PM: ["म.नं.","म.नं.","म.नं."],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["kok"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["syr"] = $.extend(true, {}, invariant, {
        name: "syr",
        englishName: "Syriac",
        nativeName: "ܣܘܪܝܝܐ",
        language: "syr",
        isRTL: true,
        numberFormat: {
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "ل.س.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["ܚܕ ܒܫܒܐ","ܬܪܝܢ ܒܫܒܐ","ܬܠܬܐ ܒܫܒܐ","ܐܪܒܥܐ ܒܫܒܐ","ܚܡܫܐ ܒܫܒܐ","ܥܪܘܒܬܐ","ܫܒܬܐ"],["܏ܐ ܏ܒܫ","܏ܒ ܏ܒܫ","܏ܓ ܏ܒܫ","܏ܕ ܏ܒܫ","܏ܗ ܏ܒܫ","܏ܥܪܘܒ","܏ܫܒ"],["ܐ","ܒ","ܓ","ܕ","ܗ","ܥ","ܫ"]],
                months: [["ܟܢܘܢ ܐܚܪܝ","ܫܒܛ","ܐܕܪ","ܢܝܣܢ","ܐܝܪ","ܚܙܝܪܢ","ܬܡܘܙ","ܐܒ","ܐܝܠܘܠ","ܬܫܪܝ ܩܕܝܡ","ܬܫܪܝ ܐܚܪܝ","ܟܢܘܢ ܩܕܝܡ",""],["܏ܟܢ ܏ܒ","ܫܒܛ","ܐܕܪ","ܢܝܣܢ","ܐܝܪ","ܚܙܝܪܢ","ܬܡܘܙ","ܐܒ","ܐܝܠܘܠ","܏ܬܫ ܏ܐ","܏ܬܫ ܏ܒ","܏ܟܢ ܏ܐ",""]],
                AM: ["ܩ.ܛ","ܩ.ܛ","ܩ.ܛ"],
                PM: ["ܒ.ܛ","ܒ.ܛ","ܒ.ܛ"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["syr"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["si"] = $.extend(true, {}, invariant, {
        name: "si",
        englishName: "Sinhala",
        nativeName: "සිංහල",
        language: "si",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["($ n)","$ n"],
                symbol: "රු."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ඉරිදා","සඳුදා","අඟහරුවාදා","බදාදා","බ්‍රහස්පතින්දා","සිකුරාදා","සෙනසුරාදා"],["ඉරිදා","සඳුදා","කුජදා","බුදදා","ගුරුදා","කිවිදා","ශනිදා"],["ඉ","ස","අ","බ","බ්‍ර","සි","සෙ"]],
                months: [["ජනවාරි","පෙබරවාරි","මාර්තු","අ‌ප්‍රේල්","මැයි","ජූනි","ජූලි","අ‌ගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්",""],["ජන.","පෙබ.","මාර්තු.","අප්‍රේල්.","මැයි.","ජූනි.","ජූලි.","අගෝ.","සැප්.","ඔක්.","නොවැ.","දෙසැ.",""]],
                AM: ["පෙ.ව.","පෙ.ව.","පෙ.ව."],
                PM: ["ප.ව.","ප.ව.","ප.ව."],
                eras: [{"name":"ක්‍රි.ව.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy MMMM\u0027 මස \u0027dd\u0027 වැනිදා \u0027dddd",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "yyyy MMMM\u0027 මස \u0027dd\u0027 වැනිදා \u0027dddd h:mm tt",
                    F: "yyyy MMMM\u0027 මස \u0027dd\u0027 වැනිදා \u0027dddd h:mm:ss tt"
                }
            })
        }
    }, cultures["si"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["iu"] = $.extend(true, {}, invariant, {
        name: "iu",
        englishName: "Inuktitut",
        nativeName: "Inuktitut",
        language: "iu",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0]
            },
            currency: {
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Naattiinguja","Naggajjau","Aippiq","Pingatsiq","Sitammiq","Tallirmiq","Sivataarvik"],["Nat","Nag","Aip","Pi","Sit","Tal","Siv"],["N","N","A","P","S","T","S"]],
                months: [["Jaannuari","Viivvuari","Maatsi","Iipuri","Mai","Juuni","Julai","Aaggiisi","Sitipiri","Utupiri","Nuvipiri","Tisipiri",""],["Jan","Viv","Mas","Ipu","Mai","Jun","Jul","Agi","Sii","Uut","Nuv","Tis",""]],
                patterns: {
                    d: "d/MM/yyyy",
                    D: "ddd, MMMM dd,yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "ddd, MMMM dd,yyyy h:mm tt",
                    F: "ddd, MMMM dd,yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["iu"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["am"] = $.extend(true, {}, invariant, {
        name: "am",
        englishName: "Amharic",
        nativeName: "አማርኛ",
        language: "am",
        numberFormat: {
            decimals: 1,
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 1,
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["-$n","$n"],
                groupSizes: [3,0],
                symbol: "ETB"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["እሑድ","ሰኞ","ማክሰኞ","ረቡዕ","ሐሙስ","ዓርብ","ቅዳሜ"],["እሑድ","ሰኞ","ማክሰ","ረቡዕ","ሐሙስ","ዓርብ","ቅዳሜ"],["እ","ሰ","ማ","ረ","ሐ","ዓ","ቅ"]],
                months: [["ጃንዩወሪ","ፌብሩወሪ","ማርች","ኤፕረል","ሜይ","ጁን","ጁላይ","ኦገስት","ሴፕቴምበር","ኦክተውበር","ኖቬምበር","ዲሴምበር",""],["ጃንዩ","ፌብሩ","ማርች","ኤፕረ","ሜይ","ጁን","ጁላይ","ኦገስ","ሴፕቴ","ኦክተ","ኖቬም","ዲሴም",""]],
                AM: ["ጡዋት","ጡዋት","ጡዋት"],
                PM: ["ከሰዓት","ከሰዓት","ከሰዓት"],
                eras: [{"name":"ዓመተ  ምሕረት","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd \u0027፣\u0027 MMMM d \u0027ቀን\u0027 yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd \u0027፣\u0027 MMMM d \u0027ቀን\u0027 yyyy h:mm tt",
                    F: "dddd \u0027፣\u0027 MMMM d \u0027ቀን\u0027 yyyy h:mm:ss tt",
                    M: "MMMM d ቀን",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["am"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tzm"] = $.extend(true, {}, invariant, {
        name: "tzm",
        englishName: "Tamazight",
        nativeName: "Tamazight",
        language: "tzm",
        numberFormat: {
            pattern: ["n-"],
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                symbol: "DZD"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 6,
                days: [["Acer","Arime","Aram","Ahad","Amhadh","Sem","Sedh"],["Ace","Ari","Ara","Aha","Amh","Sem","Sed"],["Ac","Ar","Ar","Ah","Am","Se","Se"]],
                months: [["Yenayer","Furar","Maghres","Yebrir","Mayu","Yunyu","Yulyu","Ghuct","Cutenber","Ktuber","Wambir","Dujanbir",""],["Yen","Fur","Mag","Yeb","May","Yun","Yul","Ghu","Cut","Ktu","Wam","Duj",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM, yyyy H:mm",
                    F: "dd MMMM, yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["tzm"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ne"] = $.extend(true, {}, invariant, {
        name: "ne",
        englishName: "Nepali",
        nativeName: "नेपाली",
        language: "ne",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["-$n","$n"],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["आइतवार","सोमवार","मङ्गलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],["आ","सो","म","बु","बि","शु","श"]],
                months: [["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जून","जुलाई","अगस्त","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर",""],["जन","फेब","मार्च","अप्रिल","मे","जून","जुलाई","अग","सेप्ट","अक्ट","नोभ","डिस",""]],
                AM: ["विहानी","विहानी","विहानी"],
                PM: ["बेलुकी","बेलुकी","बेलुकी"],
                eras: [{"name":"a.d.","start":null,"offset":0}],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM,yyyy"
                }
            })
        }
    }, cultures["ne"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fy"] = $.extend(true, {}, invariant, {
        name: "fy",
        englishName: "Frisian",
        nativeName: "Frysk",
        language: "fy",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["Snein","Moandei","Tiisdei","Woansdei","Tongersdei","Freed","Sneon"],["Sn","Mo","Ti","Wo","To","Fr","Sn"],["S","M","T","W","T","F","S"]],
                months: [["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber",""],["jann","febr","mrt","apr","maaie","jun","jul","aug","sept","okt","nov","des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d-M-yyyy",
                    D: "dddd d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd d MMMM yyyy H:mm",
                    F: "dddd d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fy"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ps"] = $.extend(true, {}, invariant, {
        name: "ps",
        englishName: "Pashto",
        nativeName: "پښتو",
        language: "ps",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            ',': "،",
            '.': ",",
            percent: {
                pattern: ["%n-","%n"],
                ',': "،",
                '.': ","
            },
            currency: {
                pattern: ["$n-","$n"],
                ',': "٬",
                '.': "٫",
                symbol: "؋"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["غ.م","غ.م","غ.م"],
                PM: ["غ.و","غ.و","غ.و"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dd/MM/yyyy h:mm tt",
                    F: "dd/MM/yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["یکشنبه","دوشنبه","سه‌شنبه","چارشنبه","پنجشنبه","جمعه","شنبه"],["یکشنبه","دوشنبه","سه‌شنبه","چارشنبه","پنجشنبه","جمعه","شنبه"],["ی","د","س","چ","پ","ج","ش"]],
                months: [["سلواغه","كب","ورى","غويى","غبرګولى","چنګا ښزمرى","زمرى","وږى","تله","لړم","لنڈ ۍ","مرغومى",""],["سلواغه","كب","ورى","غويى","غبرګولى","چنګا ښ","زمرى","وږى","تله","لړم","لنڈ ۍ","مرغومى",""]],
                AM: ["غ.م","غ.م","غ.م"],
                PM: ["غ.و","غ.و","غ.و"],
                eras: [{"name":"ل.ه","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy, dd, MMMM, dddd",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "yyyy, dd, MMMM, dddd h:mm tt",
                    F: "yyyy, dd, MMMM, dddd h:mm:ss tt",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ps"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fil"] = $.extend(true, {}, invariant, {
        name: "fil",
        englishName: "Filipino",
        nativeName: "Filipino",
        language: "fil",
        numberFormat: {
            currency: {
                symbol: "PhP"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Linggo","Lunes","Martes","Mierkoles","Huebes","Biernes","Sabado"],["Lin","Lun","Mar","Mier","Hueb","Bier","Saba"],["L","L","M","M","H","B","S"]],
                months: [["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Septyembre","Oktubre","Nobyembre","Disyembre",""],["En","Peb","Mar","Abr","Mayo","Hun","Hul","Agos","Sept","Okt","Nob","Dis",""]],
                eras: [{"name":"Anno Domini","start":null,"offset":0}],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["fil"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["dv"] = $.extend(true, {}, invariant, {
        name: "dv",
        englishName: "Divehi",
        nativeName: "ދިވެހިބަސް",
        language: "dv",
        isRTL: true,
        numberFormat: {
            currency: {
                pattern: ["n $-","n $"],
                symbol: "ރ."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Hijri",
                days: [["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],["އާ","ހޯ","އަ","ބު","ބު","ހު","ހޮ"]],
                months: [["މުޙައްރަމް","ޞަފަރު","ރަބީޢުލްއައްވަލް","ރަބީޢުލްއާޚިރު","ޖުމާދަލްއޫލާ","ޖުމާދަލްއާޚިރާ","ރަޖަބް","ޝަޢްބާން","ރަމަޟާން","ޝައްވާލް","ޛުލްޤަޢިދާ","ޛުލްޙިއްޖާ",""],["މުޙައްރަމް","ޞަފަރު","ރަބީޢުލްއައްވަލް","ރަބީޢުލްއާޚިރު","ޖުމާދަލްއޫލާ","ޖުމާދަލްއާޚިރާ","ރަޖަބް","ޝަޢްބާން","ރަމަޟާން","ޝައްވާލް","ޛުލްޤަޢިދާ","ޛުލްޙިއްޖާ",""]],
                AM: ["މކ","މކ","މކ"],
                PM: ["މފ","މފ","މފ"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    f: "dd/MM/yyyy HH:mm",
                    F: "dd/MM/yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],["އާ","ހޯ","އަ","ބު","ބު","ހު","ހޮ"]],
                months: [["ޖަނަވަރީ","ފެބްރުއަރީ","މާޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޯގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ",""],["ޖަނަވަރީ","ފެބްރުއަރީ","މާޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޯގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ",""]],
                AM: ["މކ","މކ","މކ"],
                PM: ["މފ","މފ","މފ"],
                eras: [{"name":"މީލާދީ","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yy",
                    D: "ddd, yyyy MMMM dd",
                    f: "ddd, yyyy MMMM dd HH:mm",
                    F: "ddd, yyyy MMMM dd HH:mm:ss",
                    Y: "yyyy, MMMM"
                }
            })
        }
    }, cultures["dv"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ha"] = $.extend(true, {}, invariant, {
        name: "ha",
        englishName: "Hausa",
        nativeName: "Hausa",
        language: "ha",
        numberFormat: {
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "N"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Lahadi","Litinin","Talata","Laraba","Alhamis","Juma\u0027a","Asabar"],["Lah","Lit","Tal","Lar","Alh","Jum","Asa"],["L","L","T","L","A","J","A"]],
                months: [["Januwaru","Febreru","Maris","Afrilu","Mayu","Yuni","Yuli","Agusta","Satumba","Oktocba","Nuwamba","Disamba",""],["Jan","Feb","Mar","Afr","May","Yun","Yul","Agu","Sat","Okt","Nuw","Dis",""]],
                AM: ["Safe","safe","SAFE"],
                PM: ["Yamma","yamma","YAMMA"],
                eras: [{"name":"AD","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ha"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["yo"] = $.extend(true, {}, invariant, {
        name: "yo",
        englishName: "Yoruba",
        nativeName: "Yoruba",
        language: "yo",
        numberFormat: {
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "N"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Aiku","Aje","Isegun","Ojo\u0027ru","Ojo\u0027bo","Eti","Abameta"],["Aik","Aje","Ise","Ojo","Ojo","Eti","Aba"],["A","A","I","O","O","E","A"]],
                months: [["Osu kinni","Osu keji","Osu keta","Osu kerin","Osu karun","Osu kefa","Osu keje","Osu kejo","Osu kesan","Osu kewa","Osu kokanla","Osu keresi",""],["kin.","kej.","ket.","ker.","kar.","kef.","kej.","kej.","kes.","kew.","kok.","ker.",""]],
                AM: ["Owuro","owuro","OWURO"],
                PM: ["Ale","ale","ALE"],
                eras: [{"name":"AD","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["yo"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["quz"] = $.extend(true, {}, invariant, {
        name: "quz",
        englishName: "Quechua",
        nativeName: "runasimi",
        language: "quz",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-%n","%n"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["($ n)","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$b"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["intichaw","killachaw","atipachaw","quyllurchaw","Ch\u0027 askachaw","Illapachaw","k\u0027uychichaw"],["int","kil","ati","quy","Ch\u0027","Ill","k\u0027u"],["d","k","a","m","h","b","k"]],
                months: [["Qulla puquy","Hatun puquy","Pauqar waray","ayriwa","Aymuray","Inti raymi","Anta Sitwa","Qhapaq Sitwa","Uma raymi","Kantaray","Ayamarq\u0027a","Kapaq Raymi",""],["Qul","Hat","Pau","ayr","Aym","Int","Ant","Qha","Uma","Kan","Aya","Kap",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["quz"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["nso"] = $.extend(true, {}, invariant, {
        name: "nso",
        englishName: "Sesotho sa Leboa",
        nativeName: "Sesotho sa Leboa",
        language: "nso",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Lamorena","Mošupologo","Labobedi","Laboraro","Labone","Labohlano","Mokibelo"],["Lam","Moš","Lbb","Lbr","Lbn","Lbh","Mok"],["L","M","L","L","L","L","M"]],
                months: [["Pherekgong","Hlakola","Mopitlo","Moranang","Mosegamanye","Ngoatobošego","Phuphu","Phato","Lewedi","Diphalana","Dibatsela","Manthole",""],["Pher","Hlak","Mop","Mor","Mos","Ngwat","Phup","Phat","Lew","Dip","Dib","Man",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["nso"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ba"] = $.extend(true, {}, invariant, {
        name: "ba",
        englishName: "Bashkir",
        nativeName: "Башҡорт",
        language: "ba",
        numberFormat: {
            ',': " ",
            '.': ",",
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                groupSizes: [3,0],
                ',': " ",
                '.': ",",
                symbol: "һ."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Йәкшәмбе","Дүшәмбе","Шишәмбе","Шаршамбы","Кесаҙна","Йома","Шәмбе"],["Йш","Дш","Шш","Шр","Кс","Йм","Шб"],["Йш","Дш","Шш","Шр","Кс","Йм","Шб"]],
                months: [["ғинуар","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь",""],["ғин","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "d MMMM yyyy \u0027й\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy \u0027й\u0027 H:mm",
                    F: "d MMMM yyyy \u0027й\u0027 H:mm:ss",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ba"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["lb"] = $.extend(true, {}, invariant, {
        name: "lb",
        englishName: "Luxembourgish",
        nativeName: "Lëtzebuergesch",
        language: "lb",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"],["Son","Méi","Dën","Mët","Don","Fre","Sam"],["So","Mé","Dë","Më","Do","Fr","Sa"]],
                months: [["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember",""],["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n. Chr","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["lb"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["kl"] = $.extend(true, {}, invariant, {
        name: "kl",
        englishName: "Greenlandic",
        nativeName: "kalaallisut",
        language: "kl",
        numberFormat: {
            ',': ".",
            '.': ",",
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,0],
                ',': ".",
                '.': ",",
                symbol: "kr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["sapaat","ataasinngorneq","marlunngorneq","pingasunngorneq","sisamanngorneq","tallimanngorneq","arfininngorneq"],["sap","ata","mar","ping","sis","tal","arf"],["sa","at","ma","pi","si","ta","ar"]],
                months: [["januari","februari","martsi","apriili","maaji","juni","juli","aggusti","septembari","oktobari","novembari","decembari",""],["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["kl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ig"] = $.extend(true, {}, invariant, {
        name: "ig",
        englishName: "Igbo",
        nativeName: "Igbo",
        language: "ig",
        numberFormat: {
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "N"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Aiku","Aje","Isegun","Ojo\u0027ru","Ojo\u0027bo","Eti","Abameta"],["Aik","Aje","Ise","Ojo","Ojo","Eti","Aba"],["A","A","I","O","O","E","A"]],
                months: [["Onwa mbu","Onwa ibua","Onwa ato","Onwa ano","Onwa ise","Onwa isi","Onwa asa","Onwa asato","Onwa itolu","Onwa iri","Onwa iri n\u0027ofu","Onwa iri n\u0027ibua",""],["mbu.","ibu.","ato.","ano.","ise","isi","asa","asa.","ito.","iri.","n\u0027of.","n\u0027ib.",""]],
                AM: ["Ututu","ututu","UTUTU"],
                PM: ["Efifie","efifie","EFIFIE"],
                eras: [{"name":"AD","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ig"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ii"] = $.extend(true, {}, invariant, {
        name: "ii",
        englishName: "Yi",
        nativeName: "ꆈꌠꁱꂷ",
        language: "ii",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["$-n","$n"],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["ꑭꆏꑍ","ꆏꊂ꒔","ꆏꊂꑍ","ꆏꊂꌕ","ꆏꊂꇖ","ꆏꊂꉬ","ꆏꊂꃘ"],["ꑭꆏ","ꆏ꒔","ꆏꑍ","ꆏꌕ","ꆏꇖ","ꆏꉬ","ꆏꃘ"],["ꆏ","꒔","ꑍ","ꌕ","ꇖ","ꉬ","ꃘ"]],
                months: [["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊯꊪꆪ","ꊰꑋꆪ",""],["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊯꊪꆪ","ꊰꑋꆪ",""]],
                AM: ["ꂵꆪꈌꈐ","ꂵꆪꈌꈐ","ꂵꆪꈌꈐ"],
                PM: ["ꂵꆪꈌꉈ","ꂵꆪꈌꉈ","ꂵꆪꈌꉈ"],
                eras: [{"name":"ꇬꑼ","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027ꈎ\u0027 M\u0027ꆪ\u0027 d\u0027ꑍ\u0027",
                    t: "tt h:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027ꈎ\u0027 M\u0027ꆪ\u0027 d\u0027ꑍ\u0027 tt h:mm",
                    F: "yyyy\u0027ꈎ\u0027 M\u0027ꆪ\u0027 d\u0027ꑍ\u0027 H:mm:ss",
                    M: "M\u0027ꆪ\u0027 d\u0027ꑍ\u0027",
                    Y: "yyyy\u0027ꈎ\u0027 M\u0027ꆪ\u0027"
                }
            })
        }
    }, cultures["ii"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["arn"] = $.extend(true, {}, invariant, {
        name: "arn",
        englishName: "Mapudungun",
        nativeName: "Mapudungun",
        language: "arn",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-$ n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["arn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["moh"] = $.extend(true, {}, invariant, {
        name: "moh",
        englishName: "Mohawk",
        nativeName: "Kanien\u0027kéha",
        language: "moh",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0]
            },
            currency: {
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Awentatokentì:ke","Awentataón\u0027ke","Ratironhia\u0027kehronòn:ke","Soséhne","Okaristiiáhne","Ronwaia\u0027tanentaktonhne","Entákta"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["S","M","T","W","T","F","S"]],
                months: [["Tsothohrkó:Wa","Enniska","Enniskó:Wa","Onerahtókha","Onerahtohkó:Wa","Ohiari:Ha","Ohiarihkó:Wa","Seskéha","Seskehkó:Wa","Kenténha","Kentenhkó:Wa","Tsothóhrha",""],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["moh"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["br"] = $.extend(true, {}, invariant, {
        name: "br",
        englishName: "Breton",
        nativeName: "brezhoneg",
        language: "br",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Sul","Lun","Meurzh","Merc\u0027her","Yaou","Gwener","Sadorn"],["Sul","Lun","Meu.","Mer.","Yaou","Gwe.","Sad."],["Su","Lu","Mz","Mc","Ya","Gw","Sa"]],
                months: [["Genver","C\u0027hwevrer","Meurzh","Ebrel","Mae","Mezheven","Gouere","Eost","Gwengolo","Here","Du","Kerzu",""],["Gen.","C\u0027hwe.","Meur.","Ebr.","Mae","Mezh.","Goue.","Eost","Gwen.","Here","Du","Kzu",""]],
                AM: null,
                PM: null,
                eras: [{"name":"g. J.-K.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["br"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ug"] = $.extend(true, {}, invariant, {
        name: "ug",
        englishName: "Uyghur",
        nativeName: "ئۇيغۇرچە",
        language: "ug",
        isRTL: true,
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$n"],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"],["يە","دۈ","سە","چا","پە","جۈ","شە"],["ي","د","س","چ","پ","ج","ش"]],
                months: [["1-ئاي","2-ئاي","3-ئاي","4-ئاي","5-ئاي","6-ئاي","7-ئاي","8-ئاي","9-ئاي","10-ئاي","11-ئاي","12-ئاي",""],["1-ئاي","2-ئاي","3-ئاي","4-ئاي","5-ئاي","6-ئاي","7-ئاي","8-ئاي","9-ئاي","10-ئاي","11-ئاي","12-ئاي",""]],
                AM: ["چۈشتىن بۇرۇن","چۈشتىن بۇرۇن","چۈشتىن بۇرۇن"],
                PM: ["چۈشتىن كېيىن","چۈشتىن كېيىن","چۈشتىن كېيىن"],
                eras: [{"name":"مىلادى","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-M-d",
                    D: "yyyy-\u0027يىلى\u0027 MMMM d-\u0027كۈنى،\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy-\u0027يىلى\u0027 MMMM d-\u0027كۈنى،\u0027 H:mm",
                    F: "yyyy-\u0027يىلى\u0027 MMMM d-\u0027كۈنى،\u0027 H:mm:ss",
                    M: "MMMM d\u0027-كۈنى\u0027",
                    Y: "yyyy-\u0027يىلى\u0027 MMMM"
                }
            })
        }
    }, cultures["ug"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mi"] = $.extend(true, {}, invariant, {
        name: "mi",
        englishName: "Maori",
        nativeName: "Reo Māori",
        language: "mi",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["-$n","$n"],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Rātapu","Rāhina","Rātū","Rāapa","Rāpare","Rāmere","Rāhoroi"],["Ta","Hi","Tū","Apa","Pa","Me","Ho"],["Ta","Hi","Tū","Aa","Pa","Me","Ho"]],
                months: [["Kohi-tātea","Hui-tanguru","Poutū-te-rangi","Paenga-whāwhā","Haratua","Pipiri","Hōngongoi","Here-turi-kōkā","Mahuru","Whiringa-ā-nuku","Whiringa-ā-rangi","Hakihea",""],["Kohi","Hui","Pou","Pae","Hara","Pipi","Hōngo","Here","Mahu","Nuku","Rangi","Haki",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd MMMM, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, dd MMMM, yyyy h:mm tt",
                    F: "dddd, dd MMMM, yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yy"
                }
            })
        }
    }, cultures["mi"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["oc"] = $.extend(true, {}, invariant, {
        name: "oc",
        englishName: "Occitan",
        nativeName: "Occitan",
        language: "oc",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dimenge","diluns","dimars","dimècres","dijòus","divendres","dissabte"],["dim.","lun.","mar.","mèc.","jòu.","ven.","sab."],["di","lu","ma","mè","jò","ve","sa"]],
                months: [["genier","febrier","març","abril","mai","junh","julh","agost","setembre","octobre","novembre","desembre",""],["gen.","feb.","mar.","abr.","mai.","jun.","jul.","ag.","set.","oct.","nov.","des.",""]],
                monthsGenitive: [["de genier","de febrier","de març","d\u0027abril","de mai","de junh","de julh","d\u0027agost","de setembre","d\u0027octobre","de novembre","de desembre",""],["gen.","feb.","mar.","abr.","mai.","jun.","jul.","ag.","set.","oct.","nov.","des.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"après Jèsus-Crist","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd,\u0027 lo \u0027d MMMM\u0027 de \u0027yyyy",
                    f: "dddd,\u0027 lo \u0027d MMMM\u0027 de \u0027yyyy HH:mm",
                    F: "dddd,\u0027 lo \u0027d MMMM\u0027 de \u0027yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["oc"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["co"] = $.extend(true, {}, invariant, {
        name: "co",
        englishName: "Corsican",
        nativeName: "Corsu",
        language: "co",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dumenica","luni","marti","mercuri","ghjovi","venderi","sabbatu"],["dum.","lun.","mar.","mer.","ghj.","ven.","sab."],["du","lu","ma","me","gh","ve","sa"]],
                months: [["ghjennaghju","ferraghju","marzu","aprile","maghju","ghjunghju","lugliu","aostu","settembre","ottobre","nuvembre","dicembre",""],["ghje","ferr","marz","apri","magh","ghju","lugl","aost","sett","otto","nuve","dice",""]],
                AM: null,
                PM: null,
                eras: [{"name":"dopu J-C","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["co"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["gsw"] = $.extend(true, {}, invariant, {
        name: "gsw",
        englishName: "Alsatian",
        nativeName: "Elsässisch",
        language: "gsw",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Sundàà","Mondàà","Dienschdàà","Mittwuch","Dunnerschdàà","Fridàà","Sàmschdàà"],["Su.","Mo.","Di.","Mi.","Du.","Fr.","Sà."],["Su","Mo","Di","Mi","Du","Fr","Sà"]],
                months: [["Jänner","Feverje","März","Àpril","Mai","Jüni","Jüli","Augscht","September","Oktower","Nowember","Dezember",""],["Jän.","Fev.","März","Apr.","Mai","Jüni","Jüli","Aug.","Sept.","Okt.","Now.","Dez.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"Vor J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["gsw"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sah"] = $.extend(true, {}, invariant, {
        name: "sah",
        englishName: "Yakut",
        nativeName: "саха",
        language: "sah",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "с."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["баскыһыанньа","бэнидиэнньик","оптуорунньук","сэрэдэ","чэппиэр","бээтинсэ","субуота"],["Бс","Бн","Оп","Ср","Чп","Бт","Сб"],["Бс","Бн","Оп","Ср","Чп","Бт","Сб"]],
                months: [["Тохсунньу","Олунньу","Кулун тутар","Муус устар","Ыам ыйа","Бэс ыйа","От ыйа","Атырдьах ыйа","Балаҕан ыйа","Алтынньы","Сэтинньи","Ахсынньы",""],["тхс","олн","кул","мст","ыам","бэс","отй","атр","блҕ","алт","стн","ахс",""]],
                monthsGenitive: [["тохсунньу","олунньу","кулун тутар","муус устар","ыам ыйын","бэс ыйын","от ыйын","атырдьах ыйын","балаҕан ыйын","алтынньы","сэтинньи","ахсынньы",""],["тхс","олн","кул","мст","ыам","бэс","отй","атр","блҕ","алт","стн","ахс",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "MM.dd.yyyy",
                    D: "MMMM d yyyy \u0027с.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "MMMM d yyyy \u0027с.\u0027 H:mm",
                    F: "MMMM d yyyy \u0027с.\u0027 H:mm:ss",
                    Y: "MMMM yyyy \u0027с.\u0027"
                }
            })
        }
    }, cultures["sah"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["qut"] = $.extend(true, {}, invariant, {
        name: "qut",
        englishName: "K\u0027iche",
        nativeName: "K\u0027iche",
        language: "qut",
        numberFormat: {
            currency: {
                symbol: "Q"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["juq\u0027ij","kaq\u0027ij","oxq\u0027ij","kajq\u0027ij","joq\u0027ij","waqq\u0027ij","wuqq\u0027ij"],["juq","kaq","oxq","kajq","joq","waqq","wuqq"],["ju","ka","ox","ka","jo","wa","wu"]],
                months: [["nab\u0027e ik\u0027","ukab\u0027 ik\u0027","rox ik\u0027","ukaj ik\u0027","uro\u0027 ik\u0027","uwaq ik\u0027","uwuq ik\u0027","uwajxaq ik\u0027","ub\u0027elej ik\u0027","ulaj ik\u0027","ujulaj ik\u0027","ukab\u0027laj ik\u0027",""],["nab\u0027e","ukab","rox","ukaj","uro","uwaq","uwuq","uwajxaq","ub\u0027elej","ulaj","ujulaj","ukab\u0027laj",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["qut"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["rw"] = $.extend(true, {}, invariant, {
        name: "rw",
        englishName: "Kinyarwanda",
        nativeName: "Kinyarwanda",
        language: "rw",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$-n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "RWF"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Ku wa mbere","Ku wa kabiri","Ku wa gatatu","Ku wa kane","Ku wa gatanu","Ku wa gatandatu","Ku cyumweru"],["mbe.","kab.","gat.","kan.","gat.","gat.","cyu."],["mb","ka","ga","ka","ga","ga","cy"]],
                months: [["Mutarama","Gashyantare","Werurwe","Mata","Gicurasi","Kamena","Nyakanga","Kanama","Nzeli","Ukwakira","Ugushyingo","Ukuboza",""],["Mut","Gas","Wer","Mat","Gic","Kam","Nya","Kan","Nze","Ukwa","Ugu","Uku",""]],
                AM: ["saa moya z.m.","saa moya z.m.","SAA MOYA Z.M."],
                PM: ["saa moya z.n.","saa moya z.n.","SAA MOYA Z.N."],
                eras: [{"name":"AD","start":null,"offset":0}],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["rw"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["wo"] = $.extend(true, {}, invariant, {
        name: "wo",
        englishName: "Wolof",
        nativeName: "Wolof",
        language: "wo",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "XOF"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["wo"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["prs"] = $.extend(true, {}, invariant, {
        name: "prs",
        englishName: "Dari",
        nativeName: "درى",
        language: "prs",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["%n-","%n"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$n-","$n"],
                symbol: "؋"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 5,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["غ.م","غ.م","غ.م"],
                PM: ["غ.و","غ.و","غ.و"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dd/MM/yyyy h:mm tt",
                    F: "dd/MM/yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 5,
                days: [["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],["ی","د","س","چ","پ","ج","ش"]],
                months: [["سلواغه","كب","ورى","غويى","غبرګولى","چنګاښ","زمرى","وږى","تله","لړم","ليندۍ","مرغومى",""],["سلواغه","كب","ورى","غويى","غبرګولى","چنګاښ","زمرى","وږى","تله","لړم","ليندۍ","مرغومى",""]],
                AM: ["غ.م","غ.م","غ.م"],
                PM: ["غ.و","غ.و","غ.و"],
                eras: [{"name":"ل.ه","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy, dd, MMMM, dddd",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "yyyy, dd, MMMM, dddd h:mm tt",
                    F: "yyyy, dd, MMMM, dddd h:mm:ss tt",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["prs"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["gd"] = $.extend(true, {}, invariant, {
        name: "gd",
        englishName: "Scottish Gaelic",
        nativeName: "Gàidhlig",
        language: "gd",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "£"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],["Dòm","Lua","Mài","Cia","Ard","Hao","Sat"],["D","L","M","C","A","H","S"]],
                months: [["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd",""],["Fao","Gea","Màr","Gib","Cèi","Ògm","Iuc","Lùn","Sul","Dàm","Sam","Dùb",""]],
                AM: ["m","m","M"],
                PM: ["f","f","F"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["gd"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-SA"] = $.extend(true, {}, invariant, {
        name: "ar-SA",
        englishName: "Arabic (Saudi Arabia)",
        nativeName: "العربية (المملكة العربية السعودية)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "ر.س.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-SA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bg-BG"] = $.extend(true, {}, invariant, {
        name: "bg-BG",
        englishName: "Bulgarian (Bulgaria)",
        nativeName: "български (България)",
        language: "bg",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "лв."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"],["нед","пон","вт","ср","четв","пет","съб"],["н","п","в","с","ч","п","с"]],
                months: [["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември",""],["ян","февр","март","апр","май","юни","юли","авг","септ","окт","ноември","дек",""]],
                AM: null,
                PM: null,
                eras: [{"name":"след новата ера","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy \u0027г.\u0027",
                    D: "dd MMMM yyyy \u0027г.\u0027",
                    t: "HH:mm \u0027ч.\u0027",
                    T: "HH:mm:ss \u0027ч.\u0027",
                    f: "dd MMMM yyyy \u0027г.\u0027 HH:mm \u0027ч.\u0027",
                    F: "dd MMMM yyyy \u0027г.\u0027 HH:mm:ss \u0027ч.\u0027",
                    M: "dd MMMM",
                    Y: "MMMM yyyy \u0027г.\u0027"
                }
            })
        }
    }, cultures["bg-BG"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ca-ES"] = $.extend(true, {}, invariant, {
        name: "ca-ES",
        englishName: "Catalan (Catalan)",
        nativeName: "català (català)",
        language: "ca",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],["dg.","dl.","dt.","dc.","dj.","dv.","ds."],["dg","dl","dt","dc","dj","dv","ds"]],
                months: [["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre",""],["gen","feb","març","abr","maig","juny","jul","ag","set","oct","nov","des",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d\u0027 / \u0027MMMM\u0027 / \u0027yyyy",
                    f: "dddd, d\u0027 / \u0027MMMM\u0027 / \u0027yyyy HH:mm",
                    F: "dddd, d\u0027 / \u0027MMMM\u0027 / \u0027yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 / \u0027yyyy"
                }
            })
        }
    }, cultures["ca-ES"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh-TW"] = $.extend(true, {}, invariant, {
        name: "zh-TW",
        englishName: "Chinese (Traditional, Taiwan)",
        nativeName: "中文(台灣)",
        language: "zh-CHT",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["-$n","$n"],
                symbol: "NT$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["週日","週一","週二","週三","週四","週五","週六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"西元","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "tt hh:mm",
                    T: "tt hh:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 tt hh:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 tt hh:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            }),
            Taiwan: $.extend(true, {}, standard, {
                name: "Taiwan",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["週日","週一","週二","週三","週四","週五","週六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"","start":null,"offset":1911}],
                twoDigitYearMax: 99,
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "tt hh:mm",
                    T: "tt hh:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 tt hh:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 tt hh:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["zh-TW"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["cs-CZ"] = $.extend(true, {}, invariant, {
        name: "cs-CZ",
        englishName: "Czech (Czech Republic)",
        nativeName: "čeština (Česká republika)",
        language: "cs",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "Kč"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],["ne","po","út","st","čt","pá","so"],["ne","po","út","st","čt","pá","so"]],
                months: [["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                monthsGenitive: [["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["dop.","dop.","DOP."],
                PM: ["odp.","odp.","ODP."],
                eras: [{"name":"n. l.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["cs-CZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["da-DK"] = $.extend(true, {}, invariant, {
        name: "da-DK",
        englishName: "Danish (Denmark)",
        nativeName: "dansk (Danmark)",
        language: "da",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "kr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],["sø","ma","ti","on","to","fr","lø"],["sø","ma","ti","on","to","fr","lø"]],
                months: [["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december",""],["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["da-DK"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["de-DE"] = $.extend(true, {}, invariant, {
        name: "de-DE",
        englishName: "German (Germany)",
        nativeName: "Deutsch (Deutschland)",
        language: "de",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So","Mo","Di","Mi","Do","Fr","Sa"],["So","Mo","Di","Mi","Do","Fr","Sa"]],
                months: [["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n. Chr.","start":null,"offset":0}],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, d. MMMM yyyy",
                    f: "dddd, d. MMMM yyyy HH:mm",
                    F: "dddd, d. MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["de-DE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["el-GR"] = $.extend(true, {}, invariant, {
        name: "el-GR",
        englishName: "Greek (Greece)",
        nativeName: "Ελληνικά (Ελλάδα)",
        language: "el",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],["Κυ","Δε","Τρ","Τε","Πε","Πα","Σά"]],
                months: [["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος",""],["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ",""]],
                monthsGenitive: [["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου",""],["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ",""]],
                AM: ["πμ","πμ","ΠΜ"],
                PM: ["μμ","μμ","ΜΜ"],
                eras: [{"name":"μ.Χ.","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, d MMMM yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, d MMMM yyyy h:mm tt",
                    F: "dddd, d MMMM yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["el-GR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-US"] = $.extend(true, {}, invariant, {
        name: "en-US",
        englishName: "English (United States)",
        nativeName: "English (United States)",
        language: "en",
        numberFormat: {
            currency: {
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["en-US"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fi-FI"] = $.extend(true, {}, invariant, {
        name: "fi-FI",
        englishName: "Finnish (Finland)",
        nativeName: "suomi (Suomi)",
        language: "fi",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],["su","ma","ti","ke","to","pe","la"],["su","ma","ti","ke","to","pe","la"]],
                months: [["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu",""],["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM\u0027ta \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM\u0027ta \u0027yyyy H:mm",
                    F: "d. MMMM\u0027ta \u0027yyyy H:mm:ss",
                    M: "d. MMMM\u0027ta\u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fi-FI"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fr-FR"] = $.extend(true, {}, invariant, {
        name: "fr-FR",
        englishName: "French (France)",
        nativeName: "français (France)",
        language: "fr",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fr-FR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["he-IL"] = $.extend(true, {}, invariant, {
        name: "he-IL",
        englishName: "Hebrew (Israel)",
        nativeName: "עברית (ישראל)",
        language: "he",
        isRTL: true,
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "₪"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","שבת"],["יום א","יום ב","יום ג","יום ד","יום ה","יום ו","שבת"],["א","ב","ג","ד","ה","ו","ש"]],
                months: [["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר",""],["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ",""]],
                eras: [{"name":"לספירה","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd dd MMMM yyyy",
                    f: "dddd dd MMMM yyyy HH:mm",
                    F: "dddd dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            }),
            Hebrew: $.extend(true, {}, standard, {
                name: "Hebrew",
                '/': " ",
                days: [["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","שבת"],["א","ב","ג","ד","ה","ו","ש"],["א","ב","ג","ד","ה","ו","ש"]],
                months: [["תשרי","חשון","כסלו","טבת","שבט","אדר","אדר ב","ניסן","אייר","סיון","תמוז","אב","אלול"],["תשרי","חשון","כסלו","טבת","שבט","אדר","אדר ב","ניסן","אייר","סיון","תמוז","אב","אלול"]],
                eras: [{"name":"C.E.","start":null,"offset":0}],
                twoDigitYearMax: 5790,
                patterns: {
                    d: "dd MMMM yyyy",
                    D: "dddd dd MMMM yyyy",
                    f: "dddd dd MMMM yyyy HH:mm",
                    F: "dddd dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["he-IL"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hu-HU"] = $.extend(true, {}, invariant, {
        name: "hu-HU",
        englishName: "Hungarian (Hungary)",
        nativeName: "magyar (Magyarország)",
        language: "hu",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "Ft"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],["V","H","K","Sze","Cs","P","Szo"],["V","H","K","Sze","Cs","P","Szo"]],
                months: [["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december",""],["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec.",""]],
                AM: ["de.","de.","DE."],
                PM: ["du.","du.","DU."],
                eras: [{"name":"i.sz.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy.MM.dd.",
                    D: "yyyy. MMMM d.",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy. MMMM d. H:mm",
                    F: "yyyy. MMMM d. H:mm:ss",
                    M: "MMMM d.",
                    Y: "yyyy. MMMM"
                }
            })
        }
    }, cultures["hu-HU"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["is-IS"] = $.extend(true, {}, invariant, {
        name: "is-IS",
        englishName: "Icelandic (Iceland)",
        nativeName: "íslenska (Ísland)",
        language: "is",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                decimals: 0,
                ',': ".",
                '.': ",",
                symbol: "kr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],["sun.","mán.","þri.","mið.","fim.","fös.","lau."],["su","má","þr","mi","fi","fö","la"]],
                months: [["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember",""],["jan.","feb.","mar.","apr.","maí","jún.","júl.","ágú.","sep.","okt.","nóv.","des.",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["is-IS"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["it-IT"] = $.extend(true, {}, invariant, {
        name: "it-IT",
        englishName: "Italian (Italy)",
        nativeName: "italiano (Italia)",
        language: "it",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-$ n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],["dom","lun","mar","mer","gio","ven","sab"],["do","lu","ma","me","gi","ve","sa"]],
                months: [["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre",""],["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["it-IT"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ja-JP"] = $.extend(true, {}, invariant, {
        name: "ja-JP",
        englishName: "Japanese (Japan)",
        nativeName: "日本語 (日本)",
        language: "ja",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["-$n","$n"],
                decimals: 0,
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],["日","月","火","水","木","金","土"],["日","月","火","水","木","金","土"]],
                months: [["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["午前","午前","午前"],
                PM: ["午後","午後","午後"],
                eras: [{"name":"西暦","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            }),
            Japanese: $.extend(true, {}, standard, {
                name: "Japanese",
                days: [["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],["日","月","火","水","木","金","土"],["日","月","火","水","木","金","土"]],
                months: [["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["午前","午前","午前"],
                PM: ["午後","午後","午後"],
                eras: [{"name":"平成","start":null,"offset":1867},{"name":"昭和","start":-1812153600000,"offset":1911},{"name":"大正","start":-1357603200000,"offset":1925},{"name":"明治","start":60022080000,"offset":1988}],
                twoDigitYearMax: 99,
                patterns: {
                    d: "gg y/M/d",
                    D: "gg y\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "gg y\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "gg y\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "gg y\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["ja-JP"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ko-KR"] = $.extend(true, {}, invariant, {
        name: "ko-KR",
        englishName: "Korean (Korea)",
        nativeName: "한국어 (대한민국)",
        language: "ko",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                decimals: 0,
                symbol: "₩"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],["일","월","화","수","목","금","토"],["일","월","화","수","목","금","토"]],
                months: [["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["오전","오전","오전"],
                PM: ["오후","오후","오후"],
                eras: [{"name":"서기","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd",
                    t: "tt h:mm",
                    T: "tt h:mm:ss",
                    f: "yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd tt h:mm",
                    F: "yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd tt h:mm:ss",
                    M: "M\u0027월\u0027 d\u0027일\u0027",
                    Y: "yyyy\u0027년\u0027 M\u0027월\u0027"
                }
            }),
            Korean: $.extend(true, {}, standard, {
                name: "Korean",
                '/': "-",
                days: [["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],["일","월","화","수","목","금","토"],["일","월","화","수","목","금","토"]],
                months: [["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["오전","오전","오전"],
                PM: ["오후","오후","오후"],
                eras: [{"name":"단기","start":null,"offset":-2333}],
                twoDigitYearMax: 4362,
                patterns: {
                    d: "gg yyyy-MM-dd",
                    D: "gg yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd",
                    t: "tt h:mm",
                    T: "tt h:mm:ss",
                    f: "gg yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd tt h:mm",
                    F: "gg yyyy\u0027년\u0027 M\u0027월\u0027 d\u0027일\u0027 dddd tt h:mm:ss",
                    M: "M\u0027월\u0027 d\u0027일\u0027",
                    Y: "gg yyyy\u0027년\u0027 M\u0027월\u0027"
                }
            })
        }
    }, cultures["ko-KR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["nl-NL"] = $.extend(true, {}, invariant, {
        name: "nl-NL",
        englishName: "Dutch (Netherlands)",
        nativeName: "Nederlands (Nederland)",
        language: "nl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],["zo","ma","di","wo","do","vr","za"],["zo","ma","di","wo","do","vr","za"]],
                months: [["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december",""],["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d-M-yyyy",
                    D: "dddd d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd d MMMM yyyy H:mm",
                    F: "dddd d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["nl-NL"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["nb-NO"] = $.extend(true, {}, invariant, {
        name: "nb-NO",
        englishName: "Norwegian, Bokmål (Norway)",
        nativeName: "norsk, bokmål (Norge)",
        language: "nb",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],["sø","ma","ti","on","to","fr","lø"],["sø","ma","ti","on","to","fr","lø"]],
                months: [["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["nb-NO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["pl-PL"] = $.extend(true, {}, invariant, {
        name: "pl-PL",
        englishName: "Polish (Poland)",
        nativeName: "polski (Polska)",
        language: "pl",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "zł"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],["N","Pn","Wt","Śr","Cz","Pt","So"],["N","Pn","Wt","Śr","Cz","Pt","So"]],
                months: [["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień",""],["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]],
                monthsGenitive: [["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia",""],["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "d MMMM yyyy",
                    f: "d MMMM yyyy HH:mm",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["pl-PL"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["pt-BR"] = $.extend(true, {}, invariant, {
        name: "pt-BR",
        englishName: "Portuguese (Brazil)",
        nativeName: "Português (Brasil)",
        language: "pt",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-$ n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "R$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],["dom","seg","ter","qua","qui","sex","sáb"],["D","S","T","Q","Q","S","S"]],
                months: [["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro",""],["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    f: "dddd, d\u0027 de \u0027MMMM\u0027 de \u0027yyyy HH:mm",
                    F: "dddd, d\u0027 de \u0027MMMM\u0027 de \u0027yyyy HH:mm:ss",
                    M: "dd\u0027 de \u0027MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["pt-BR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["rm-CH"] = $.extend(true, {}, invariant, {
        name: "rm-CH",
        englishName: "Romansh (Switzerland)",
        nativeName: "Rumantsch (Svizra)",
        language: "rm",
        numberFormat: {
            ',': "\u0027",
            percent: {
                pattern: ["-n%","n%"],
                ',': "\u0027"
            },
            currency: {
                pattern: ["$-n","$ n"],
                ',': "\u0027",
                symbol: "fr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dumengia","glindesdi","mardi","mesemna","gievgia","venderdi","sonda"],["du","gli","ma","me","gie","ve","so"],["du","gli","ma","me","gie","ve","so"]],
                months: [["schaner","favrer","mars","avrigl","matg","zercladur","fanadur","avust","settember","october","november","december",""],["schan","favr","mars","avr","matg","zercl","fan","avust","sett","oct","nov","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"s. Cr.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d MMMM yyyy",
                    f: "dddd, d MMMM yyyy HH:mm",
                    F: "dddd, d MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["rm-CH"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ro-RO"] = $.extend(true, {}, invariant, {
        name: "ro-RO",
        englishName: "Romanian (Romania)",
        nativeName: "română (România)",
        language: "ro",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "lei"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["duminică","luni","marţi","miercuri","joi","vineri","sâmbătă"],["D","L","Ma","Mi","J","V","S"],["D","L","Ma","Mi","J","V","S"]],
                months: [["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie",""],["ian.","feb.","mar.","apr.","mai.","iun.","iul.","aug.","sep.","oct.","nov.","dec.",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    f: "d MMMM yyyy HH:mm",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ro-RO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ru-RU"] = $.extend(true, {}, invariant, {
        name: "ru-RU",
        englishName: "Russian (Russia)",
        nativeName: "русский (Россия)",
        language: "ru",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]],
                months: [["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]],
                monthsGenitive: [["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря",""],["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy \u0027г.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy \u0027г.\u0027 H:mm",
                    F: "d MMMM yyyy \u0027г.\u0027 H:mm:ss",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ru-RU"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hr-HR"] = $.extend(true, {}, invariant, {
        name: "hr-HR",
        englishName: "Croatian (Croatia)",
        nativeName: "hrvatski (Hrvatska)",
        language: "hr",
        numberFormat: {
            pattern: ["- n"],
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "kn"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],["ned","pon","uto","sri","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac",""],["sij","vlj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro",""]],
                monthsGenitive: [["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca",""],["sij","vlj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy.",
                    D: "d. MMMM yyyy.",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy. H:mm",
                    F: "d. MMMM yyyy. H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["hr-HR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sk-SK"] = $.extend(true, {}, invariant, {
        name: "sk-SK",
        englishName: "Slovak (Slovakia)",
        nativeName: "slovenčina (Slovenská republika)",
        language: "sk",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ". ",
                firstDay: 1,
                days: [["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],["ne","po","ut","st","št","pi","so"],["ne","po","ut","st","št","pi","so"]],
                months: [["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                monthsGenitive: [["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n. l.","start":null,"offset":0}],
                patterns: {
                    d: "d. M. yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sk-SK"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sq-AL"] = $.extend(true, {}, invariant, {
        name: "sq-AL",
        englishName: "Albanian (Albania)",
        nativeName: "shqipe (Shqipëria)",
        language: "sq",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': ".",
                '.': ",",
                symbol: "Lek"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["e diel","e hënë","e martë","e mërkurë","e enjte","e premte","e shtunë"],["Die","Hën","Mar","Mër","Enj","Pre","Sht"],["Di","Hë","Ma","Më","En","Pr","Sh"]],
                months: [["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor",""],["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gsh","Sht","Tet","Nën","Dhj",""]],
                AM: ["PD","pd","PD"],
                PM: ["MD","md","MD"],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy-MM-dd",
                    t: "h:mm.tt",
                    T: "h:mm:ss.tt",
                    f: "yyyy-MM-dd h:mm.tt",
                    F: "yyyy-MM-dd h:mm:ss.tt",
                    Y: "yyyy-MM"
                }
            })
        }
    }, cultures["sq-AL"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sv-SE"] = $.extend(true, {}, invariant, {
        name: "sv-SE",
        englishName: "Swedish (Sweden)",
        nativeName: "svenska (Sverige)",
        language: "sv",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],["sö","må","ti","on","to","fr","lö"],["sö","må","ti","on","to","fr","lö"]],
                months: [["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december",""],["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "\u0027den \u0027d MMMM yyyy",
                    f: "\u0027den \u0027d MMMM yyyy HH:mm",
                    F: "\u0027den \u0027d MMMM yyyy HH:mm:ss",
                    M: "\u0027den \u0027d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sv-SE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["th-TH"] = $.extend(true, {}, invariant, {
        name: "th-TH",
        englishName: "Thai (Thailand)",
        nativeName: "ไทย (ไทย)",
        language: "th",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "฿"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "ThaiBuddhist",
                firstDay: 1,
                days: [["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],["อ","จ","อ","พ","พ","ศ","ส"]],
                months: [["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม",""],["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.",""]],
                eras: [{"name":"พ.ศ.","start":null,"offset":-543}],
                twoDigitYearMax: 2572,
                patterns: {
                    d: "d/M/yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],["อ","จ","อ","พ","พ","ศ","ส"]],
                months: [["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม",""],["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.",""]],
                patterns: {
                    d: "d/M/yyyy",
                    D: "\u0027วัน\u0027dddd\u0027ที่\u0027 d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "\u0027วัน\u0027dddd\u0027ที่\u0027 d MMMM yyyy H:mm",
                    F: "\u0027วัน\u0027dddd\u0027ที่\u0027 d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["th-TH"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tr-TR"] = $.extend(true, {}, invariant, {
        name: "tr-TR",
        englishName: "Turkish (Turkey)",
        nativeName: "Türkçe (Türkiye)",
        language: "tr",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-%n","%n"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "TL"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],["Pz","Pt","Sa","Ça","Pe","Cu","Ct"]],
                months: [["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık",""],["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dd MMMM yyyy dddd",
                    f: "dd MMMM yyyy dddd HH:mm",
                    F: "dd MMMM yyyy dddd HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["tr-TR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ur-PK"] = $.extend(true, {}, invariant, {
        name: "ur-PK",
        englishName: "Urdu (Islamic Republic of Pakistan)",
        nativeName: "اُردو (پاکستان)",
        language: "ur",
        isRTL: true,
        numberFormat: {
            currency: {
                pattern: ["$n-","$n"],
                symbol: "Rs"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["اتوار","پير","منگل","بدھ","جمعرات","جمعه","هفته"],["اتوار","پير","منگل","بدھ","جمعرات","جمعه","هفته"],["ا","پ","م","ب","ج","ج","ه"]],
                months: [["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر",""],["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر",""]],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dd MMMM, yyyy h:mm tt",
                    F: "dd MMMM, yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dd/MM/yyyy h:mm tt",
                    F: "dd/MM/yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            })
        }
    }, cultures["ur-PK"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["id-ID"] = $.extend(true, {}, invariant, {
        name: "id-ID",
        englishName: "Indonesian (Indonesia)",
        nativeName: "Bahasa Indonesia (Indonesia)",
        language: "id",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                decimals: 0,
                ',': ".",
                '.': ",",
                symbol: "Rp"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],["Minggu","Sen","Sel","Rabu","Kamis","Jumat","Sabtu"],["M","S","S","R","K","J","S"]],
                months: [["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember",""],["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agust","Sep","Okt","Nop","Des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM yyyy H:mm",
                    F: "dd MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["id-ID"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["uk-UA"] = $.extend(true, {}, invariant, {
        name: "uk-UA",
        englishName: "Ukrainian (Ukraine)",
        nativeName: "українська (Україна)",
        language: "uk",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "₴"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["неділя","понеділок","вівторок","середа","четвер","п\u0027ятниця","субота"],["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]],
                months: [["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень",""],["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру",""]],
                monthsGenitive: [["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня",""],["січ","лют","бер","кві","тра","чер","лип","сер","вер","жов","лис","гру",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy\u0027 р.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy\u0027 р.\u0027 H:mm",
                    F: "d MMMM yyyy\u0027 р.\u0027 H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy\u0027 р.\u0027"
                }
            })
        }
    }, cultures["uk-UA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["be-BY"] = $.extend(true, {}, invariant, {
        name: "be-BY",
        englishName: "Belarusian (Belarus)",
        nativeName: "Беларускі (Беларусь)",
        language: "be",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["нядзеля","панядзелак","аўторак","серада","чацвер","пятніца","субота"],["нд","пн","аў","ср","чц","пт","сб"],["нд","пн","аў","ср","чц","пт","сб"]],
                months: [["Студзень","Люты","Сакавік","Красавік","Май","Чэрвень","Ліпень","Жнівень","Верасень","Кастрычнік","Лістапад","Снежань",""],["Сту","Лют","Сак","Кра","Май","Чэр","Ліп","Жні","Вер","Кас","Ліс","Сне",""]],
                monthsGenitive: [["студзеня","лютага","сакавіка","красавіка","мая","чэрвеня","ліпеня","жніўня","верасня","кастрычніка","лістапада","снежня",""],["Сту","Лют","Сак","Кра","Май","Чэр","Ліп","Жні","Вер","Кас","Ліс","Сне",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["be-BY"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sl-SI"] = $.extend(true, {}, invariant, {
        name: "sl-SI",
        englishName: "Slovenian (Slovenia)",
        nativeName: "slovenski (Slovenija)",
        language: "sl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"],["ned","pon","tor","sre","čet","pet","sob"],["ne","po","to","sr","če","pe","so"]],
                months: [["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sl-SI"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["et-EE"] = $.extend(true, {}, invariant, {
        name: "et-EE",
        englishName: "Estonian (Estonia)",
        nativeName: "eesti (Eesti)",
        language: "et",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"],["P","E","T","K","N","R","L"],["P","E","T","K","N","R","L"]],
                months: [["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember",""],["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets",""]],
                AM: ["EL","el","EL"],
                PM: ["PL","pl","PL"],
                patterns: {
                    d: "d.MM.yyyy",
                    D: "d. MMMM yyyy\u0027. a.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy\u0027. a.\u0027 H:mm",
                    F: "d. MMMM yyyy\u0027. a.\u0027 H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy\u0027. a.\u0027"
                }
            })
        }
    }, cultures["et-EE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["lv-LV"] = $.extend(true, {}, invariant, {
        name: "lv-LV",
        englishName: "Latvian (Latvia)",
        nativeName: "latviešu (Latvija)",
        language: "lv",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-$ n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "Ls"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],["sv","pr","ot","tr","ce","pk","se"],["sv","pr","ot","tr","ce","pk","se"]],
                months: [["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris",""],["jan","feb","mar","apr","mai","jūn","jūl","aug","sep","okt","nov","dec",""]],
                monthsGenitive: [["janvārī","februārī","martā","aprīlī","maijā","jūnijā","jūlijā","augustā","septembrī","oktobrī","novembrī","decembrī",""],["jan","feb","mar","apr","mai","jūn","jūl","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy.MM.dd.",
                    D: "dddd, yyyy\u0027. gada \u0027d. MMMM",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, yyyy\u0027. gada \u0027d. MMMM H:mm",
                    F: "dddd, yyyy\u0027. gada \u0027d. MMMM H:mm:ss",
                    M: "d. MMMM",
                    Y: "yyyy. MMMM"
                }
            })
        }
    }, cultures["lv-LV"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["lt-LT"] = $.extend(true, {}, invariant, {
        name: "lt-LT",
        englishName: "Lithuanian (Lithuania)",
        nativeName: "lietuvių (Lietuva)",
        language: "lt",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "Lt"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],["Sk","Pr","An","Tr","Kt","Pn","Št"],["S","P","A","T","K","Pn","Š"]],
                months: [["sausis","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis",""],["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rgp","Rgs","Spl","Lap","Grd",""]],
                monthsGenitive: [["sausio","vasario","kovo","balandžio","gegužės","birželio","liepos","rugpjūčio","rugsėjo","spalio","lapkričio","gruodžio",""],["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rgp","Rgs","Spl","Lap","Grd",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy.MM.dd",
                    D: "yyyy \u0027m.\u0027 MMMM d \u0027d.\u0027",
                    f: "yyyy \u0027m.\u0027 MMMM d \u0027d.\u0027 HH:mm",
                    F: "yyyy \u0027m.\u0027 MMMM d \u0027d.\u0027 HH:mm:ss",
                    M: "MMMM d \u0027d.\u0027",
                    Y: "yyyy \u0027m.\u0027 MMMM"
                }
            })
        }
    }, cultures["lt-LT"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tg-Cyrl-TJ"] = $.extend(true, {}, invariant, {
        name: "tg-Cyrl-TJ",
        englishName: "Tajik (Cyrillic, Tajikistan)",
        nativeName: "Тоҷикӣ (Тоҷикистон)",
        language: "tg-Cyrl",
        numberFormat: {
            ',': " ",
            '.': ",",
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                groupSizes: [3,0],
                ',': " ",
                '.': ";",
                symbol: "т.р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                days: [["Яш","Душанбе","Сешанбе","Чоршанбе","Панҷшанбе","Ҷумъа","Шанбе"],["Яш","Дш","Сш","Чш","Пш","Ҷм","Шн"],["Яш","Дш","Сш","Чш","Пш","Ҷм","Шн"]],
                months: [["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                monthsGenitive: [["январи","феврали","марти","апрели","маи","июни","июли","августи","сентябри","октябри","ноябри","декабри",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["tg-Cyrl-TJ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fa-IR"] = $.extend(true, {}, invariant, {
        name: "fa-IR",
        englishName: "Persian",
        nativeName: "فارسى (ایران)",
        language: "fa",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                '.': "/",
                symbol: "ريال"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ق.ظ","ق.ظ","ق.ظ"],
                PM: ["ب.ظ","ب.ظ","ب.ظ"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],["ی","د","س","چ","پ","ج","ش"]],
                months: [["ژانويه","فوريه","مارس","آوريل","مى","ژوئن","ژوئيه","اوت","سپتامبر","اُكتبر","نوامبر","دسامبر",""],["ژانويه","فوريه","مارس","آوريل","مى","ژوئن","ژوئيه","اوت","سپتامبر","اُكتبر","نوامبر","دسامبر",""]],
                AM: ["ق.ظ","ق.ظ","ق.ظ"],
                PM: ["ب.ظ","ب.ظ","ب.ظ"],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "yyyy/MM/dd",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "yyyy/MM/dd hh:mm tt",
                    F: "yyyy/MM/dd hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ق.ظ","ق.ظ","ق.ظ"],
                PM: ["ب.ظ","ب.ظ","ب.ظ"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ق.ظ","ق.ظ","ق.ظ"],
                PM: ["ب.ظ","ب.ظ","ب.ظ"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["fa-IR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["vi-VN"] = $.extend(true, {}, invariant, {
        name: "vi-VN",
        englishName: "Vietnamese (Vietnam)",
        nativeName: "Tiếng Việt (Việt Nam)",
        language: "vi",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "₫"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],["CN","Hai","Ba","Tư","Năm","Sáu","Bảy"],["C","H","B","T","N","S","B"]],
                months: [["Tháng Giêng","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai",""],["Thg1","Thg2","Thg3","Thg4","Thg5","Thg6","Thg7","Thg8","Thg9","Thg10","Thg11","Thg12",""]],
                AM: ["SA","sa","SA"],
                PM: ["CH","ch","CH"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dd MMMM yyyy h:mm tt",
                    F: "dd MMMM yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["vi-VN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hy-AM"] = $.extend(true, {}, invariant, {
        name: "hy-AM",
        englishName: "Armenian (Armenia)",
        nativeName: "Հայերեն (Հայաստան)",
        language: "hy",
        numberFormat: {
            currency: {
                pattern: ["-n $","n $"],
                symbol: "դր."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Կիրակի","Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","ՈՒրբաթ","Շաբաթ"],["Կիր","Երկ","Երք","Չրք","Հնգ","ՈՒր","Շբթ"],["Կ","Ե","Ե","Չ","Հ","Ո","Շ"]],
                months: [["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր",""],["ՀՆՎ","ՓՏՎ","ՄՐՏ","ԱՊՐ","ՄՅՍ","ՀՆՍ","ՀԼՍ","ՕԳՍ","ՍԵՊ","ՀՈԿ","ՆՈՅ","ԴԵԿ",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM, yyyy H:mm",
                    F: "d MMMM, yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["hy-AM"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["az-Latn-AZ"] = $.extend(true, {}, invariant, {
        name: "az-Latn-AZ",
        englishName: "Azeri (Latin, Azerbaijan)",
        nativeName: "Azərbaycan­ılı (Azərbaycan)",
        language: "az-Latn",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "man."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"],["B","Be","Ça","Ç","Ca","C","Ş"],["B","Be","Ça","Ç","Ca","C","Ş"]],
                months: [["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr",""],["Yan","Fev","Mar","Apr","May","İyun","İyul","Avg","Sen","Okt","Noy","Dek",""]],
                monthsGenitive: [["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""],["Yan","Fev","Mar","Apr","May","İyun","İyul","Avg","Sen","Okt","Noy","Dek",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["az-Latn-AZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["eu-ES"] = $.extend(true, {}, invariant, {
        name: "eu-ES",
        englishName: "Basque (Basque)",
        nativeName: "euskara (euskara)",
        language: "eu",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"],["ig.","al.","as.","az.","og.","or.","lr."],["ig","al","as","az","og","or","lr"]],
                months: [["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua",""],["urt.","ots.","mar.","api.","mai.","eka.","uzt.","abu.","ira.","urr.","aza.","abe.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dddd, yyyy.\u0027eko\u0027 MMMM\u0027k \u0027d",
                    T: "H:mm:ss",
                    f: "dddd, yyyy.\u0027eko\u0027 MMMM\u0027k \u0027d HH:mm",
                    F: "dddd, yyyy.\u0027eko\u0027 MMMM\u0027k \u0027d H:mm:ss",
                    Y: "yyyy.\u0027eko\u0027 MMMM"
                }
            })
        }
    }, cultures["eu-ES"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hsb-DE"] = $.extend(true, {}, invariant, {
        name: "hsb-DE",
        englishName: "Upper Sorbian (Germany)",
        nativeName: "hornjoserbšćina (Němska)",
        language: "hsb",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ". ",
                firstDay: 1,
                days: [["njedźela","póndźela","wutora","srjeda","štwórtk","pjatk","sobota"],["nje","pón","wut","srj","štw","pja","sob"],["n","p","w","s","š","p","s"]],
                months: [["januar","februar","měrc","apryl","meja","junij","julij","awgust","september","oktober","nowember","december",""],["jan","feb","měr","apr","mej","jun","jul","awg","sep","okt","now","dec",""]],
                monthsGenitive: [["januara","februara","měrca","apryla","meje","junija","julija","awgusta","septembra","oktobra","nowembra","decembra",""],["jan","feb","měr","apr","mej","jun","jul","awg","sep","okt","now","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"po Chr.","start":null,"offset":0}],
                patterns: {
                    d: "d. M. yyyy",
                    D: "dddd, \u0027dnja\u0027 d. MMMM yyyy",
                    t: "H.mm \u0027hodź.\u0027",
                    T: "H:mm:ss",
                    f: "dddd, \u0027dnja\u0027 d. MMMM yyyy H.mm \u0027hodź.\u0027",
                    F: "dddd, \u0027dnja\u0027 d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["hsb-DE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mk-MK"] = $.extend(true, {}, invariant, {
        name: "mk-MK",
        englishName: "Macedonian (Former Yugoslav Republic of Macedonia)",
        nativeName: "македонски јазик (Македонија)",
        language: "mk",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "ден."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["недела","понеделник","вторник","среда","четврток","петок","сабота"],["нед","пон","втр","срд","чет","пет","саб"],["не","по","вт","ср","че","пе","са"]],
                months: [["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември",""],["јан","фев","мар","апр","мај","јун","јул","авг","сеп","окт","ное","дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["mk-MK"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tn-ZA"] = $.extend(true, {}, invariant, {
        name: "tn-ZA",
        englishName: "Setswana (South Africa)",
        nativeName: "Setswana (Aforika Borwa)",
        language: "tn",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Latshipi","Mosupologo","Labobedi","Laboraro","Labone","Labotlhano","Lamatlhatso"],["Ltp.","Mos.","Lbd.","Lbr.","Lbn.","Lbt.","Lmt."],["Lp","Ms","Lb","Lr","Ln","Lt","Lm"]],
                months: [["Ferikgong","Tlhakole","Mopitloe","Moranang","Motsheganong","Seetebosigo","Phukwi","Phatwe","Lwetse","Diphalane","Ngwanatsele","Sedimothole",""],["Fer.","Tlhak.","Mop.","Mor.","Motsh.","Seet.","Phukw.","Phatw.","Lwets.","Diph.","Ngwan.","Sed.",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["tn-ZA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["xh-ZA"] = $.extend(true, {}, invariant, {
        name: "xh-ZA",
        englishName: "isiXhosa (South Africa)",
        nativeName: "isiXhosa (uMzantsi Afrika)",
        language: "xh",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["iCawa","uMvulo","uLwesibini","uLwesithathu","uLwesine","uLwesihlanu","uMgqibelo"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Ca","Mv","Lb","Lt","Ln","Lh","Mg"]],
                months: [["Mqungu","Mdumba","Kwindla","Tshazimpuzi","Canzibe","Silimela","Khala","Thupha","Msintsi","Dwarha","Nkanga","Mnga",""],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["xh-ZA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zu-ZA"] = $.extend(true, {}, invariant, {
        name: "zu-ZA",
        englishName: "isiZulu (South Africa)",
        nativeName: "isiZulu (iNingizimu Afrika)",
        language: "zu",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["iSonto","uMsombuluko","uLwesibili","uLwesithathu","uLwesine","uLwesihlanu","uMgqibelo"],["Son.","Mso.","Bi.","Tha.","Ne.","Hla.","Mgq."],["Su","Mo","Tu","We","Th","Fr","Sa"]],
                months: [["uMasingana","uNhlolanja","uNdasa","uMbaso","uNhlaba","uNhlangulana","uNtulikazi","uNcwaba","uMandulo","uMfumfu","uLwezi","uZibandlela",""],["Mas.","Nhlo.","Nda.","Mba.","Nhla.","Nhlang.","Ntu.","Ncwa.","Man.","Mfu.","Lwe.","Zib.",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["zu-ZA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["af-ZA"] = $.extend(true, {}, invariant, {
        name: "af-ZA",
        englishName: "Afrikaans (South Africa)",
        nativeName: "Afrikaans (Suid Afrika)",
        language: "af",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],["Son","Maan","Dins","Woen","Dond","Vry","Sat"],["So","Ma","Di","Wo","Do","Vr","Sa"]],
                months: [["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember",""],["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["af-ZA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ka-GE"] = $.extend(true, {}, invariant, {
        name: "ka-GE",
        englishName: "Georgian (Georgia)",
        nativeName: "ქართული (საქართველო)",
        language: "ka",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "Lari"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],["კ","ო","ს","ო","ხ","პ","შ"]],
                months: [["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი",""],["იან","თებ","მარ","აპრ","მაის","ივნ","ივლ","აგვ","სექ","ოქტ","ნოემ","დეკ",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "yyyy \u0027წლის\u0027 dd MM, dddd",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy \u0027წლის\u0027 dd MM, dddd H:mm",
                    F: "yyyy \u0027წლის\u0027 dd MM, dddd H:mm:ss",
                    M: "dd MM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ka-GE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fo-FO"] = $.extend(true, {}, invariant, {
        name: "fo-FO",
        englishName: "Faroese (Faroe Islands)",
        nativeName: "føroyskt (Føroyar)",
        language: "fo",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "kr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["sunnudagur","mánadagur","týsdagur","mikudagur","hósdagur","fríggjadagur","leygardagur"],["sun","mán","týs","mik","hós","frí","leyg"],["su","má","tý","mi","hó","fr","ley"]],
                months: [["januar","februar","mars","apríl","mai","juni","juli","august","september","oktober","november","desember",""],["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fo-FO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hi-IN"] = $.extend(true, {}, invariant, {
        name: "hi-IN",
        englishName: "Hindi (India)",
        nativeName: "हिंदी (भारत)",
        language: "hi",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],["रवि.","सोम.","मंगल.","बुध.","गुरु.","शुक्र.","शनि."],["र","स","म","ब","ग","श","श"]],
                months: [["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""],["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""]],
                AM: ["पूर्वाह्न","पूर्वाह्न","पूर्वाह्न"],
                PM: ["अपराह्न","अपराह्न","अपराह्न"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["hi-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mt-MT"] = $.extend(true, {}, invariant, {
        name: "mt-MT",
        englishName: "Maltese (Malta)",
        nativeName: "Malti (Malta)",
        language: "mt",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["-$n","$n"],
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Il-Ħadd","It-Tnejn","It-Tlieta","L-Erbgħa","Il-Ħamis","Il-Ġimgħa","Is-Sibt"],["Ħad","Tne","Tli","Erb","Ħam","Ġim","Sib"],["I","I","I","L","I","I","I"]],
                months: [["Jannar","Frar","Marzu","April","Mejju","Ġunju","Lulju","Awissu","Settembru","Ottubru","Novembru","Diċembru",""],["Jan","Fra","Mar","Apr","Mej","Ġun","Lul","Awi","Set","Ott","Nov","Diċ",""]],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d\u0027 ta\\\u0027 \u0027MMMM yyyy",
                    f: "dddd, d\u0027 ta\\\u0027 \u0027MMMM yyyy HH:mm",
                    F: "dddd, d\u0027 ta\\\u0027 \u0027MMMM yyyy HH:mm:ss",
                    M: "d\u0027 ta\\\u0027 \u0027MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["mt-MT"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["se-NO"] = $.extend(true, {}, invariant, {
        name: "se-NO",
        englishName: "Sami, Northern (Norway)",
        nativeName: "davvisámegiella (Norga)",
        language: "se",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-%n","%n"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sotnabeaivi","vuossárga","maŋŋebárga","gaskavahkku","duorastat","bearjadat","lávvardat"],["sotn","vuos","maŋ","gask","duor","bear","láv"],["s","m","d","g","d","b","l"]],
                months: [["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu",""],["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]],
                monthsGenitive: [["ođđajagimánu","guovvamánu","njukčamánu","cuoŋománu","miessemánu","geassemánu","suoidnemánu","borgemánu","čakčamánu","golggotmánu","skábmamánu","juovlamánu",""],["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "MMMM d\u0027. b. \u0027yyyy",
                    f: "MMMM d\u0027. b. \u0027yyyy HH:mm",
                    F: "MMMM d\u0027. b. \u0027yyyy HH:mm:ss",
                    M: "MMMM d\u0027. b. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["se-NO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ms-MY"] = $.extend(true, {}, invariant, {
        name: "ms-MY",
        englishName: "Malay (Malaysia)",
        nativeName: "Bahasa Melayu (Malaysia)",
        language: "ms",
        numberFormat: {
            currency: {
                decimals: 0,
                symbol: "RM"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],["Ahad","Isnin","Sel","Rabu","Khamis","Jumaat","Sabtu"],["A","I","S","R","K","J","S"]],
                months: [["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember",""],["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogos","Sept","Okt","Nov","Dis",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM yyyy H:mm",
                    F: "dd MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ms-MY"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["kk-KZ"] = $.extend(true, {}, invariant, {
        name: "kk-KZ",
        englishName: "Kazakh (Kazakhstan)",
        nativeName: "Қазақ (Қазақстан)",
        language: "kk",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-$n","$n"],
                ',': " ",
                '.': "-",
                symbol: "Т"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Жексенбі","Дүйсенбі","Сейсенбі","Сәрсенбі","Бейсенбі","Жұма","Сенбі"],["Жк","Дс","Сс","Ср","Бс","Жм","Сн"],["Жк","Дс","Сс","Ср","Бс","Жм","Сн"]],
                months: [["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан",""],["Қаң","Ақп","Нау","Сәу","Мам","Мау","Шіл","Там","Қыр","Қаз","Қар","Жел",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy \u0027ж.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy \u0027ж.\u0027 H:mm",
                    F: "d MMMM yyyy \u0027ж.\u0027 H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["kk-KZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ky-KG"] = $.extend(true, {}, invariant, {
        name: "ky-KG",
        englishName: "Kyrgyz (Kyrgyzstan)",
        nativeName: "Кыргыз (Кыргызстан)",
        language: "ky",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': "-",
                symbol: "сом"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Жекшемби","Дүйшөмбү","Шейшемби","Шаршемби","Бейшемби","Жума","Ишемби"],["Жш","Дш","Шш","Шр","Бш","Жм","Иш"],["Жш","Дш","Шш","Шр","Бш","Жм","Иш"]],
                months: [["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "d\u0027-\u0027MMMM yyyy\u0027-ж.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d\u0027-\u0027MMMM yyyy\u0027-ж.\u0027 H:mm",
                    F: "d\u0027-\u0027MMMM yyyy\u0027-ж.\u0027 H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy\u0027-ж.\u0027"
                }
            })
        }
    }, cultures["ky-KG"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sw-KE"] = $.extend(true, {}, invariant, {
        name: "sw-KE",
        englishName: "Kiswahili (Kenya)",
        nativeName: "Kiswahili (Kenya)",
        language: "sw",
        numberFormat: {
            currency: {
                symbol: "S"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Jumapili","Jumatatu","Jumanne","Jumatano","Alhamisi","Ijumaa","Jumamosi"],["Jumap.","Jumat.","Juman.","Jumat.","Alh.","Iju.","Jumam."],["P","T","N","T","A","I","M"]],
                months: [["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Decemba",""],["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Dec",""]],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["sw-KE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tk-TM"] = $.extend(true, {}, invariant, {
        name: "tk-TM",
        englishName: "Turkmen (Turkmenistan)",
        nativeName: "türkmençe (Türkmenistan)",
        language: "tk",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "m."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Duşenbe","Sişenbe","Çarşenbe","Penşenbe","Anna","Şenbe","Ýekşenbe"],["Db","Sb","Çb","Pb","An","Şb","Ýb"],["D","S","Ç","P","A","Ş","Ý"]],
                months: [["Ýanwar","Fewral","Mart","Aprel","Maý","lýun","lýul","Awgust","Sentýabr","Oktýabr","Noýabr","Dekabr",""],["Ýan","Few","Mart","Apr","Maý","lýun","lýul","Awg","Sen","Okt","Not","Dek",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "yyyy \u0027ý.\u0027 MMMM d",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy \u0027ý.\u0027 MMMM d H:mm",
                    F: "yyyy \u0027ý.\u0027 MMMM d H:mm:ss",
                    Y: "yyyy \u0027ý.\u0027 MMMM"
                }
            })
        }
    }, cultures["tk-TM"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["uz-Latn-UZ"] = $.extend(true, {}, invariant, {
        name: "uz-Latn-UZ",
        englishName: "Uzbek (Latin, Uzbekistan)",
        nativeName: "U\u0027zbek (U\u0027zbekiston Respublikasi)",
        language: "uz-Latn",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                decimals: 0,
                ',': " ",
                '.': ",",
                symbol: "so\u0027m"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"],["yak.","dsh.","sesh.","chr.","psh.","jm.","sh."],["ya","d","s","ch","p","j","sh"]],
                months: [["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""],["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd/MM yyyy",
                    D: "yyyy \u0027yil\u0027 d-MMMM",
                    f: "yyyy \u0027yil\u0027 d-MMMM HH:mm",
                    F: "yyyy \u0027yil\u0027 d-MMMM HH:mm:ss",
                    M: "d-MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["uz-Latn-UZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tt-RU"] = $.extend(true, {}, invariant, {
        name: "tt-RU",
        englishName: "Tatar (Russia)",
        nativeName: "Татар (Россия)",
        language: "tt",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Якшәмбе","Дүшәмбе","Сишәмбе","Чәршәмбе","Пәнҗешәмбе","Җомга","Шимбә"],["Якш","Дүш","Сиш","Чәрш","Пәнҗ","Җом","Шим"],["Я","Д","С","Ч","П","Җ","Ш"]],
                months: [["Гыйнвар","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],["Гыйн.","Фев.","Мар.","Апр.","Май","Июнь","Июль","Авг.","Сен.","Окт.","Нояб.","Дек.",""]],
                monthsGenitive: [["Гыйнварның","Февральнең","Мартның","Апрельнең","Майның","Июньнең","Июльнең","Августның","Сентябрьның","Октябрьның","Ноябрьның","Декабрьның",""],["Гыйн.-ның","Фев.-нең","Мар.-ның","Апр.-нең","Майның","Июньнең","Июльнең","Авг.-ның","Сен.-ның","Окт.-ның","Нояб.-ның","Дек.-ның",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["tt-RU"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bn-IN"] = $.extend(true, {}, invariant, {
        name: "bn-IN",
        englishName: "Bengali (India)",
        nativeName: "বাংলা (ভারত)",
        language: "bn",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-%n","%n"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "টা"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                ':': ".",
                firstDay: 1,
                days: [["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"],["রবি.","সোম.","মঙ্গল.","বুধ.","বৃহস্পতি.","শুক্র.","শনি."],["র","স","ম","ব","ব","শ","শ"]],
                months: [["জানুয়ারী","ফেব্রুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর",""],["জানু.","ফেব্রু.","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগ.","সেপ্টে.","অক্টো.","নভে.","ডিসে.",""]],
                AM: ["পুর্বাহ্ন","পুর্বাহ্ন","পুর্বাহ্ন"],
                PM: ["অপরাহ্ন","অপরাহ্ন","অপরাহ্ন"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    t: "HH.mm",
                    T: "HH.mm.ss",
                    f: "dd MMMM yyyy HH.mm",
                    F: "dd MMMM yyyy HH.mm.ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["bn-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["pa-IN"] = $.extend(true, {}, invariant, {
        name: "pa-IN",
        englishName: "Punjabi (India)",
        nativeName: "ਪੰਜਾਬੀ (ਭਾਰਤ)",
        language: "pa",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "ਰੁ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ਐਤਵਾਰ","ਸੋਮਵਾਰ","ਮੰਗਲਵਾਰ","ਬੁੱਧਵਾਰ","ਵੀਰਵਾਰ","ਸ਼ੁੱਕਰਵਾਰ","ਸ਼ਨਿੱਚਰਵਾਰ"],["ਐਤ.","ਸੋਮ.","ਮੰਗਲ.","ਬੁੱਧ.","ਵੀਰ.","ਸ਼ੁਕਰ.","ਸ਼ਨਿੱਚਰ."],["ਐ","ਸ","ਮ","ਬ","ਵ","ਸ਼","ਸ਼"]],
                months: [["ਜਨਵਰੀ","ਫ਼ਰਵਰੀ","ਮਾਰਚ","ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ","ਜੁਲਾਈ","ਅਗਸਤ","ਸਤੰਬਰ","ਅਕਤੂਬਰ","ਨਵੰਬਰ","ਦਸੰਬਰ",""],["ਜਨਵਰੀ","ਫ਼ਰਵਰੀ","ਮਾਰਚ","ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ","ਜੁਲਾਈ","ਅਗਸਤ","ਸਤੰਬਰ","ਅਕਤੂਬਰ","ਨਵੰਬਰ","ਦਸੰਬਰ",""]],
                AM: ["ਸਵੇਰ","ਸਵੇਰ","ਸਵੇਰ"],
                PM: ["ਸ਼ਾਮ","ਸ਼ਾਮ","ਸ਼ਾਮ"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy dddd",
                    t: "tt hh:mm",
                    T: "tt hh:mm:ss",
                    f: "dd MMMM yyyy dddd tt hh:mm",
                    F: "dd MMMM yyyy dddd tt hh:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["pa-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["gu-IN"] = $.extend(true, {}, invariant, {
        name: "gu-IN",
        englishName: "Gujarati (India)",
        nativeName: "ગુજરાતી (ભારત)",
        language: "gu",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "રૂ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["રવિવાર","સોમવાર","મંગળવાર","બુધવાર","ગુરુવાર","શુક્રવાર","શનિવાર"],["રવિ","સોમ","મંગળ","બુધ","ગુરુ","શુક્ર","શનિ"],["ર","સ","મ","બ","ગ","શ","શ"]],
                months: [["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટેમ્બર","ઑક્ટ્બર","નવેમ્બર","ડિસેમ્બર",""],["જાન્યુ","ફેબ્રુ","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટે","ઑક્ટો","નવે","ડિસે",""]],
                AM: ["પૂર્વ મધ્યાહ્ન","પૂર્વ મધ્યાહ્ન","પૂર્વ મધ્યાહ્ન"],
                PM: ["ઉત્તર મધ્યાહ્ન","ઉત્તર મધ્યાહ્ન","ઉત્તર મધ્યાહ્ન"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["gu-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["or-IN"] = $.extend(true, {}, invariant, {
        name: "or-IN",
        englishName: "Oriya (India)",
        nativeName: "ଓଡ଼ିଆ (ଭାରତ)",
        language: "or",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "ଟ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["ରବିବାର","ସୋମବାର","ମଙ୍ଗଳବାର","ବୁଧବାର","ଗୁରୁବାର","ଶୁକ୍ରବାର","ଶନିବାର"],["ରବି.","ସୋମ.","ମଙ୍ଗଳ.","ବୁଧ.","ଗୁରୁ.","ଶୁକ୍ର.","ଶନି."],["ର","ସୋ","ମ","ବୁ","ଗୁ","ଶୁ","ଶ"]],
                months: [["ଜାନୁୟାରୀ","ଫ୍ରେବୃୟାରୀ","ମାର୍ଚ୍ଚ","ଏପ୍ରିଲ୍‌","ମେ","ଜୁନ୍‌","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","(ଡିସେମ୍ବର",""],["ଜାନୁୟାରୀ","ଫ୍ରେବୃୟାରୀ","ମାର୍ଚ୍ଚ","ଏପ୍ରିଲ୍‌","ମେ","ଜୁନ୍‌","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","(ଡିସେମ୍ବର",""]],
                eras: [{"name":"ଖ୍ରୀଷ୍ଟାବ୍ଦ","start":null,"offset":0}],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["or-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ta-IN"] = $.extend(true, {}, invariant, {
        name: "ta-IN",
        englishName: "Tamil (India)",
        nativeName: "தமிழ் (இந்தியா)",
        language: "ta",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "ரூ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ஞாயிற்றுக்கிழமை","திங்கள்கிழமை","செவ்வாய்கிழமை","புதன்கிழமை","வியாழக்கிழமை","வெள்ளிக்கிழமை","சனிக்கிழமை"],["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"],["ஞா","தி","செ","பு","வி","வெ","ச"]],
                months: [["ஜனவரி","பிப்ரவரி","மார்ச்","ஏப்ரல்","மே","ஜூன்","ஜூலை","ஆகஸ்ட்","செப்டம்பர்","அக்டோபர்","நவம்பர்","டிசம்பர்",""],["ஜனவரி","பிப்ரவரி","மார்ச்","ஏப்ரல்","மே","ஜூன்","ஜூலை","ஆகஸ்ட்","செப்டம்பர்","அக்டோபர்","நவம்பர்","டிசம்பர்",""]],
                AM: ["காலை","காலை","காலை"],
                PM: ["மாலை","மாலை","மாலை"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ta-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["te-IN"] = $.extend(true, {}, invariant, {
        name: "te-IN",
        englishName: "Telugu (India)",
        nativeName: "తెలుగు (భారత దేశం)",
        language: "te",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "రూ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"],["ఆది.","సోమ.","మంగళ.","బుధ.","గురు.","శుక్ర.","శని."],["ఆ","సో","మం","బు","గు","శు","శ"]],
                months: [["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జూలై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్",""],["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జూలై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్",""]],
                AM: ["పూర్వాహ్న","పూర్వాహ్న","పూర్వాహ్న"],
                PM: ["అపరాహ్న","అపరాహ్న","అపరాహ్న"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["te-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["kn-IN"] = $.extend(true, {}, invariant, {
        name: "kn-IN",
        englishName: "Kannada (India)",
        nativeName: "ಕನ್ನಡ (ಭಾರತ)",
        language: "kn",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "ರೂ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ಭಾನುವಾರ","ಸೋಮವಾರ","ಮಂಗಳವಾರ","ಬುಧವಾರ","ಗುರುವಾರ","ಶುಕ್ರವಾರ","ಶನಿವಾರ"],["ಭಾನು.","ಸೋಮ.","ಮಂಗಳ.","ಬುಧ.","ಗುರು.","ಶುಕ್ರ.","ಶನಿ."],["ರ","ಸ","ಮ","ಬ","ಗ","ಶ","ಶ"]],
                months: [["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಎಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್",""],["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಎಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್",""]],
                AM: ["ಪೂರ್ವಾಹ್ನ","ಪೂರ್ವಾಹ್ನ","ಪೂರ್ವಾಹ್ನ"],
                PM: ["ಅಪರಾಹ್ನ","ಅಪರಾಹ್ನ","ಅಪರಾಹ್ನ"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["kn-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ml-IN"] = $.extend(true, {}, invariant, {
        name: "ml-IN",
        englishName: "Malayalam (India)",
        nativeName: "മലയാളം (ഭാരതം)",
        language: "ml",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-%n","%n"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "ക"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                ':': ".",
                firstDay: 1,
                days: [["ഞായറാഴ്ച","തിങ്കളാഴ്ച","ചൊവ്വാഴ്ച","ബുധനാഴ്ച","വ്യാഴാഴ്ച","വെള്ളിയാഴ്ച","ശനിയാഴ്ച"],["ഞായർ.","തിങ്കൾ.","ചൊവ്വ.","ബുധൻ.","വ്യാഴം.","വെള്ളി.","ശനി."],["ഞ","ത","ച","ബ","വ","വെ","ശ"]],
                months: [["ജനുവരി","ഫെബ്റുവരി","മാറ്ച്ച്","ഏപ്റില്","മെയ്","ജൂണ്","ജൂലൈ","ഓഗസ്ററ്","സെപ്ററംബറ്","ഒക്ടോബറ്","നവംബറ്","ഡിസംബറ്",""],["ജനുവരി","ഫെബ്റുവരി","മാറ്ച്ച്","ഏപ്റില്","മെയ്","ജൂണ്","ജൂലൈ","ഓഗസ്ററ്","സെപ്ററംബറ്","ഒക്ടോബറ്","നവംബറ്","ഡിസംബറ്",""]],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    t: "HH.mm",
                    T: "HH.mm.ss",
                    f: "dd MMMM yyyy HH.mm",
                    F: "dd MMMM yyyy HH.mm.ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ml-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["as-IN"] = $.extend(true, {}, invariant, {
        name: "as-IN",
        englishName: "Assamese (India)",
        nativeName: "অসমীয়া (ভাৰত)",
        language: "as",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","n$"],
                groupSizes: [3,2],
                symbol: "ট"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["সোমবাৰ","মঙ্গলবাৰ","বুধবাৰ","বৃহস্পতিবাৰ","শুক্রবাৰ","শনিবাৰ","ৰবিবাৰ"],["সোম.","মঙ্গল.","বুধ.","বৃহ.","শুক্র.","শনি.","ৰবি."],["সো","ম","বু","বৃ","শু","শ","র"]],
                months: [["জানুৱাৰী","ফেব্রুৱাৰী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগষ্ট","চেপ্টেম্বর","অক্টোবর","নবেম্বর","ডিচেম্বর",""],["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগষ্ট","চেপ্টে","অক্টো","নবে","ডিচে",""]],
                AM: ["ৰাতিপু","ৰাতিপু","ৰাতিপু"],
                PM: ["আবেলি","আবেলি","আবেলি"],
                eras: [{"name":"খ্রীষ্টাব্দ","start":null,"offset":0}],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "yyyy,MMMM dd, dddd",
                    t: "tt h:mm",
                    T: "tt h:mm:ss",
                    f: "yyyy,MMMM dd, dddd tt h:mm",
                    F: "yyyy,MMMM dd, dddd tt h:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM,yy"
                }
            })
        }
    }, cultures["as-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mr-IN"] = $.extend(true, {}, invariant, {
        name: "mr-IN",
        englishName: "Marathi (India)",
        nativeName: "मराठी (भारत)",
        language: "mr",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["रविवार","सोमवार","मंगळवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],["रवि.","सोम.","मंगळ.","बुध.","गुरु.","शुक्र.","शनि."],["र","स","म","ब","ग","श","श"]],
                months: [["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर",""],["जाने.","फेब्रु.","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टें.","ऑक्टो.","नोव्हें.","डिसें.",""]],
                AM: ["म.पू.","म.पू.","म.पू."],
                PM: ["म.नं.","म.नं.","म.नं."],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["mr-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sa-IN"] = $.extend(true, {}, invariant, {
        name: "sa-IN",
        englishName: "Sanskrit (India)",
        nativeName: "संस्कृत (भारतम्)",
        language: "sa",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["रविवासरः","सोमवासरः","मङ्गलवासरः","बुधवासरः","गुरुवासरः","शुक्रवासरः","शनिवासरः"],["रविवासरः","सोमवासरः","मङ्गलवासरः","बुधवासरः","गुरुवासरः","शुक्रवासरः","शनिवासरः"],["र","स","म","ब","ग","श","श"]],
                months: [["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""],["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर",""]],
                AM: ["पूर्वाह्न","पूर्वाह्न","पूर्वाह्न"],
                PM: ["अपराह्न","अपराह्न","अपराह्न"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy dddd",
                    f: "dd MMMM yyyy dddd HH:mm",
                    F: "dd MMMM yyyy dddd HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["sa-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mn-MN"] = $.extend(true, {}, invariant, {
        name: "mn-MN",
        englishName: "Mongolian (Cyrillic, Mongolia)",
        nativeName: "Монгол хэл (Монгол улс)",
        language: "mn-Cyrl",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "₮"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"],["Ня","Да","Мя","Лх","Пү","Ба","Бя"],["Ня","Да","Мя","Лх","Пү","Ба","Бя"]],
                months: [["1 дүгээр сар","2 дугаар сар","3 дугаар сар","4 дүгээр сар","5 дугаар сар","6 дугаар сар","7 дугаар сар","8 дугаар сар","9 дүгээр сар","10 дугаар сар","11 дүгээр сар","12 дугаар сар",""],["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII",""]],
                monthsGenitive: [["1 дүгээр сарын","2 дугаар сарын","3 дугаар сарын","4 дүгээр сарын","5 дугаар сарын","6 дугаар сарын","7 дугаар сарын","8 дугаар сарын","9 дүгээр сарын","10 дугаар сарын","11 дүгээр сарын","12 дугаар сарын",""],["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yy.MM.dd",
                    D: "yyyy \u0027оны\u0027 MMMM d",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy \u0027оны\u0027 MMMM d H:mm",
                    F: "yyyy \u0027оны\u0027 MMMM d H:mm:ss",
                    M: "d MMMM",
                    Y: "yyyy \u0027он\u0027 MMMM"
                }
            })
        }
    }, cultures["mn-MN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bo-CN"] = $.extend(true, {}, invariant, {
        name: "bo-CN",
        englishName: "Tibetan (PRC)",
        nativeName: "བོད་ཡིག (ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།)",
        language: "bo",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["$-n","$n"],
                groupSizes: [3,0],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["གཟའ་ཉི་མ།","གཟའ་ཟླ་བ།","གཟའ་མིག་དམར།","གཟའ་ལྷག་པ།","གཟའ་ཕུར་བུ།","གཟའ་པ་སངས།","གཟའ་སྤེན་པ།"],["ཉི་མ།","ཟླ་བ།","མིག་དམར།","ལྷག་པ།","ཕུར་བུ།","པ་སངས།","སྤེན་པ།"],["༧","༡","༢","༣","༤","༥","༦"]],
                months: [["སྤྱི་ཟླ་དང་པོ།","སྤྱི་ཟླ་གཉིས་པ།","སྤྱི་ཟླ་གསུམ་པ།","སྤྱི་ཟླ་བཞི་པ།","སྤྱི་ཟླ་ལྔ་པ།","སྤྱི་ཟླ་དྲུག་པ།","སྤྱི་ཟླ་བདུན་པ།","སྤྱི་ཟླ་བརྒྱད་པ།","སྤྱི་ཟླ་དགུ་པ།","སྤྱི་ཟླ་བཅུ་པོ།","སྤྱི་ཟླ་བཅུ་གཅིག་པ།","སྤྱི་ཟླ་བཅུ་གཉིས་པ།",""],["ཟླ་ ༡","ཟླ་ ༢","ཟླ་ ༣","ཟླ་ ༤","ཟླ་ ༥","ཟླ་ ༦","ཟླ་ ༧","ཟླ་ ༨","ཟླ་ ༩","ཟླ་ ༡༠","ཟླ་ ༡༡","ཟླ་ ༡༢",""]],
                AM: ["སྔ་དྲོ","སྔ་དྲོ","སྔ་དྲོ"],
                PM: ["ཕྱི་དྲོ","ཕྱི་དྲོ","ཕྱི་དྲོ"],
                eras: [{"name":"སྤྱི་ལོ","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027ལོའི་ཟླ\u0027 M\u0027ཚེས\u0027 d",
                    f: "yyyy\u0027ལོའི་ཟླ\u0027 M\u0027ཚེས\u0027 d HH:mm",
                    F: "yyyy\u0027ལོའི་ཟླ\u0027 M\u0027ཚེས\u0027 d HH:mm:ss",
                    M: "\u0027ཟླ་\u0027 M\u0027ཚེས\u0027d",
                    Y: "yyyy.M"
                }
            })
        }
    }, cultures["bo-CN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["cy-GB"] = $.extend(true, {}, invariant, {
        name: "cy-GB",
        englishName: "Welsh (United Kingdom)",
        nativeName: "Cymraeg (y Deyrnas Unedig)",
        language: "cy",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["-$n","$n"],
                symbol: "£"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Dydd Sul","Dydd Llun","Dydd Mawrth","Dydd Mercher","Dydd Iau","Dydd Gwener","Dydd Sadwrn"],["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],["Su","Ll","Ma","Me","Ia","Gw","Sa"]],
                months: [["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr",""],["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["cy-GB"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["km-KH"] = $.extend(true, {}, invariant, {
        name: "km-KH",
        englishName: "Khmer (Cambodia)",
        nativeName: "ខ្មែរ (កម្ពុជា)",
        language: "km",
        numberFormat: {
            pattern: ["- n"],
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["-n$","n$"],
                symbol: "៛"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["ថ្ងៃអាទិត្យ","ថ្ងៃច័ន្ទ","ថ្ងៃអង្គារ","ថ្ងៃពុធ","ថ្ងៃព្រហស្បតិ៍","ថ្ងៃសុក្រ","ថ្ងៃសៅរ៍"],["អាទិ.","ច.","អ.","ពុ","ព្រហ.","សុ.","ស."],["អា","ច","អ","ពុ","ព្","សុ","ស"]],
                months: [["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ",""],["១","២","៣","៤","៥","៦","៧","៨","៩","១០","១១","១២",""]],
                AM: ["ព្រឹក","ព្រឹក","ព្រឹក"],
                PM: ["ល្ងាច","ល្ងាច","ល្ងាច"],
                eras: [{"name":"មុនគ.ស.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "d MMMM yyyy",
                    t: "H:mm tt",
                    f: "d MMMM yyyy H:mm tt",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "\u0027ថ្ងៃទី\u0027 dd \u0027ខែ\u0027 MM",
                    Y: "\u0027ខែ\u0027 MM \u0027ឆ្នាំ\u0027 yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ព្រឹក","ព្រឹក","ព្រឹក"],
                PM: ["ល្ងាច","ល្ងាច","ល្ងាច"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm tt",
                    f: "dddd, MMMM dd, yyyy H:mm tt",
                    F: "dddd, MMMM dd, yyyy HH:mm:ss",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["km-KH"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["lo-LA"] = $.extend(true, {}, invariant, {
        name: "lo-LA",
        englishName: "Lao (Lao P.D.R.)",
        nativeName: "ລາວ (ສ.ປ.ປ. ລາວ)",
        language: "lo",
        numberFormat: {
            pattern: ["(n)"],
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["(n$)","n$"],
                groupSizes: [3,0],
                symbol: "₭"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["ວັນອາທິດ","ວັນຈັນ","ວັນອັງຄານ","ວັນພຸດ","ວັນພະຫັດ","ວັນສຸກ","ວັນເສົາ"],["ອາທິດ","ຈັນ","ອັງຄານ","ພຸດ","ພະຫັດ","ສຸກ","ເສົາ"],["ອ","ຈ","ອ","ພ","ພ","ສ","ເ"]],
                months: [["ມັງກອນ","ກຸມພາ","ມີນາ","ເມສາ","ພຶດສະພາ","ມິຖຸນາ","ກໍລະກົດ","ສິງຫາ","ກັນຍາ","ຕຸລາ","ພະຈິກ","ທັນວາ",""],["ມັງກອນ","ກຸມພາ","ມີນາ","ເມສາ","ພຶດສະພາ","ມິຖຸນາ","ກໍລະກົດ","ສິງຫາ","ກັນຍາ","ຕຸລາ","ພະຈິກ","ທັນວາ",""]],
                AM: ["ເຊົ້າ","ເຊົ້າ","ເຊົ້າ"],
                PM: ["ແລງ","ແລງ","ແລງ"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    t: "H:mm tt",
                    f: "dd MMMM yyyy H:mm tt",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["lo-LA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["gl-ES"] = $.extend(true, {}, invariant, {
        name: "gl-ES",
        englishName: "Galician (Galician)",
        nativeName: "galego (galego)",
        language: "gl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["domingo","luns","martes","mércores","xoves","venres","sábado"],["dom","luns","mar","mér","xov","ven","sáb"],["do","lu","ma","mé","xo","ve","sá"]],
                months: [["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro",""],["xan","feb","mar","abr","maio","xuñ","xull","ago","set","out","nov","dec",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["gl-ES"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["kok-IN"] = $.extend(true, {}, invariant, {
        name: "kok-IN",
        englishName: "Konkani (India)",
        nativeName: "कोंकणी (भारत)",
        language: "kok",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["आयतार","सोमार","मंगळार","बुधवार","बिरेस्तार","सुक्रार","शेनवार"],["आय.","सोम.","मंगळ.","बुध.","बिरे.","सुक्र.","शेन."],["आ","स","म","ब","ब","स","श"]],
                months: [["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोवेम्बर","डिसेंबर",""],["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोवेम्बर","डिसेंबर",""]],
                AM: ["म.पू.","म.पू.","म.पू."],
                PM: ["म.नं.","म.नं.","म.नं."],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["kok-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["syr-SY"] = $.extend(true, {}, invariant, {
        name: "syr-SY",
        englishName: "Syriac (Syria)",
        nativeName: "ܣܘܪܝܝܐ (سوريا)",
        language: "syr",
        isRTL: true,
        numberFormat: {
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "ل.س.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["ܚܕ ܒܫܒܐ","ܬܪܝܢ ܒܫܒܐ","ܬܠܬܐ ܒܫܒܐ","ܐܪܒܥܐ ܒܫܒܐ","ܚܡܫܐ ܒܫܒܐ","ܥܪܘܒܬܐ","ܫܒܬܐ"],["܏ܐ ܏ܒܫ","܏ܒ ܏ܒܫ","܏ܓ ܏ܒܫ","܏ܕ ܏ܒܫ","܏ܗ ܏ܒܫ","܏ܥܪܘܒ","܏ܫܒ"],["ܐ","ܒ","ܓ","ܕ","ܗ","ܥ","ܫ"]],
                months: [["ܟܢܘܢ ܐܚܪܝ","ܫܒܛ","ܐܕܪ","ܢܝܣܢ","ܐܝܪ","ܚܙܝܪܢ","ܬܡܘܙ","ܐܒ","ܐܝܠܘܠ","ܬܫܪܝ ܩܕܝܡ","ܬܫܪܝ ܐܚܪܝ","ܟܢܘܢ ܩܕܝܡ",""],["܏ܟܢ ܏ܒ","ܫܒܛ","ܐܕܪ","ܢܝܣܢ","ܐܝܪ","ܚܙܝܪܢ","ܬܡܘܙ","ܐܒ","ܐܝܠܘܠ","܏ܬܫ ܏ܐ","܏ܬܫ ܏ܒ","܏ܟܢ ܏ܐ",""]],
                AM: ["ܩ.ܛ","ܩ.ܛ","ܩ.ܛ"],
                PM: ["ܒ.ܛ","ܒ.ܛ","ܒ.ܛ"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["syr-SY"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["si-LK"] = $.extend(true, {}, invariant, {
        name: "si-LK",
        englishName: "Sinhala (Sri Lanka)",
        nativeName: "සිංහල (ශ්‍රී ලංකා)",
        language: "si",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["($ n)","$ n"],
                symbol: "රු."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ඉරිදා","සඳුදා","අඟහරුවාදා","බදාදා","බ්‍රහස්පතින්දා","සිකුරාදා","සෙනසුරාදා"],["ඉරිදා","සඳුදා","කුජදා","බුදදා","ගුරුදා","කිවිදා","ශනිදා"],["ඉ","ස","අ","බ","බ්‍ර","සි","සෙ"]],
                months: [["ජනවාරි","පෙබරවාරි","මාර්තු","අ‌ප්‍රේල්","මැයි","ජූනි","ජූලි","අ‌ගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්",""],["ජන.","පෙබ.","මාර්තු.","අප්‍රේල්.","මැයි.","ජූනි.","ජූලි.","අගෝ.","සැප්.","ඔක්.","නොවැ.","දෙසැ.",""]],
                AM: ["පෙ.ව.","පෙ.ව.","පෙ.ව."],
                PM: ["ප.ව.","ප.ව.","ප.ව."],
                eras: [{"name":"ක්‍රි.ව.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "yyyy MMMM\u0027 මස \u0027dd\u0027 වැනිදා \u0027dddd",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "yyyy MMMM\u0027 මස \u0027dd\u0027 වැනිදා \u0027dddd h:mm tt",
                    F: "yyyy MMMM\u0027 මස \u0027dd\u0027 වැනිදා \u0027dddd h:mm:ss tt"
                }
            })
        }
    }, cultures["si-LK"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["iu-Cans-CA"] = $.extend(true, {}, invariant, {
        name: "iu-Cans-CA",
        englishName: "Inuktitut (Syllabics, Canada)",
        nativeName: "ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕᒥ)",
        language: "iu-Cans",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                groupSizes: [3,0],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["ᓈᑦᑏᖑᔭ","ᓇᒡᒐᔾᔭᐅ","ᐊᐃᑉᐱᖅ","ᐱᖓᑦᓯᖅ","ᓯᑕᒻᒥᖅ","ᑕᓪᓕᕐᒥᖅ","ᓯᕙᑖᕐᕕᒃ"],["ᓈᑦᑏ","ᓇᒡᒐ","ᐊᐃᑉᐱ","ᐱᖓᑦᓯ","ᓯᑕ","ᑕᓪᓕ","ᓯᕙᑖᕐᕕᒃ"],["ᓈ","ᓇ","ᐊ","ᐱ","ᓯ","ᑕ","ᓯ"]],
                months: [["ᔮᓐᓄᐊᕆ","ᕖᕝᕗᐊᕆ","ᒫᑦᓯ","ᐄᐳᕆ","ᒪᐃ","ᔫᓂ","ᔪᓚᐃ","ᐋᒡᒌᓯ","ᓯᑎᐱᕆ","ᐅᑐᐱᕆ","ᓄᕕᐱᕆ","ᑎᓯᐱᕆ",""],["ᔮᓐᓄ","ᕖᕝᕗ","ᒫᑦᓯ","ᐄᐳᕆ","ᒪᐃ","ᔫᓂ","ᔪᓚᐃ","ᐋᒡᒌ","ᓯᑎᐱ","ᐅᑐᐱ","ᓄᕕᐱ","ᑎᓯᐱ",""]],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd,MMMM dd,yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd,MMMM dd,yyyy h:mm tt",
                    F: "dddd,MMMM dd,yyyy h:mm:ss tt",
                    Y: "MMMM,yyyy"
                }
            })
        }
    }, cultures["iu-Cans-CA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["am-ET"] = $.extend(true, {}, invariant, {
        name: "am-ET",
        englishName: "Amharic (Ethiopia)",
        nativeName: "አማርኛ (ኢትዮጵያ)",
        language: "am",
        numberFormat: {
            decimals: 1,
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 1,
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["-$n","$n"],
                groupSizes: [3,0],
                symbol: "ETB"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["እሑድ","ሰኞ","ማክሰኞ","ረቡዕ","ሐሙስ","ዓርብ","ቅዳሜ"],["እሑድ","ሰኞ","ማክሰ","ረቡዕ","ሐሙስ","ዓርብ","ቅዳሜ"],["እ","ሰ","ማ","ረ","ሐ","ዓ","ቅ"]],
                months: [["ጃንዩወሪ","ፌብሩወሪ","ማርች","ኤፕረል","ሜይ","ጁን","ጁላይ","ኦገስት","ሴፕቴምበር","ኦክተውበር","ኖቬምበር","ዲሴምበር",""],["ጃንዩ","ፌብሩ","ማርች","ኤፕረ","ሜይ","ጁን","ጁላይ","ኦገስ","ሴፕቴ","ኦክተ","ኖቬም","ዲሴም",""]],
                AM: ["ጡዋት","ጡዋት","ጡዋት"],
                PM: ["ከሰዓት","ከሰዓት","ከሰዓት"],
                eras: [{"name":"ዓመተ  ምሕረት","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd \u0027፣\u0027 MMMM d \u0027ቀን\u0027 yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd \u0027፣\u0027 MMMM d \u0027ቀን\u0027 yyyy h:mm tt",
                    F: "dddd \u0027፣\u0027 MMMM d \u0027ቀን\u0027 yyyy h:mm:ss tt",
                    M: "MMMM d ቀን",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["am-ET"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ne-NP"] = $.extend(true, {}, invariant, {
        name: "ne-NP",
        englishName: "Nepali (Nepal)",
        nativeName: "नेपाली (नेपाल)",
        language: "ne",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["-$n","$n"],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["आइतवार","सोमवार","मङ्गलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],["आ","सो","म","बु","बि","शु","श"]],
                months: [["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जून","जुलाई","अगस्त","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर",""],["जन","फेब","मार्च","अप्रिल","मे","जून","जुलाई","अग","सेप्ट","अक्ट","नोभ","डिस",""]],
                AM: ["विहानी","विहानी","विहानी"],
                PM: ["बेलुकी","बेलुकी","बेलुकी"],
                eras: [{"name":"a.d.","start":null,"offset":0}],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM,yyyy"
                }
            })
        }
    }, cultures["ne-NP"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fy-NL"] = $.extend(true, {}, invariant, {
        name: "fy-NL",
        englishName: "Frisian (Netherlands)",
        nativeName: "Frysk (Nederlân)",
        language: "fy",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["Snein","Moandei","Tiisdei","Woansdei","Tongersdei","Freed","Sneon"],["Sn","Mo","Ti","Wo","To","Fr","Sn"],["S","M","T","W","T","F","S"]],
                months: [["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber",""],["jann","febr","mrt","apr","maaie","jun","jul","aug","sept","okt","nov","des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d-M-yyyy",
                    D: "dddd d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd d MMMM yyyy H:mm",
                    F: "dddd d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fy-NL"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ps-AF"] = $.extend(true, {}, invariant, {
        name: "ps-AF",
        englishName: "Pashto (Afghanistan)",
        nativeName: "پښتو (افغانستان)",
        language: "ps",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            ',': "،",
            '.': ",",
            percent: {
                pattern: ["%n-","%n"],
                ',': "،",
                '.': ","
            },
            currency: {
                pattern: ["$n-","$n"],
                ',': "٬",
                '.': "٫",
                symbol: "؋"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["غ.م","غ.م","غ.م"],
                PM: ["غ.و","غ.و","غ.و"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dd/MM/yyyy h:mm tt",
                    F: "dd/MM/yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["یکشنبه","دوشنبه","سه‌شنبه","چارشنبه","پنجشنبه","جمعه","شنبه"],["یکشنبه","دوشنبه","سه‌شنبه","چارشنبه","پنجشنبه","جمعه","شنبه"],["ی","د","س","چ","پ","ج","ش"]],
                months: [["سلواغه","كب","ورى","غويى","غبرګولى","چنګا ښزمرى","زمرى","وږى","تله","لړم","لنڈ ۍ","مرغومى",""],["سلواغه","كب","ورى","غويى","غبرګولى","چنګا ښ","زمرى","وږى","تله","لړم","لنڈ ۍ","مرغومى",""]],
                AM: ["غ.م","غ.م","غ.م"],
                PM: ["غ.و","غ.و","غ.و"],
                eras: [{"name":"ل.ه","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy, dd, MMMM, dddd",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "yyyy, dd, MMMM, dddd h:mm tt",
                    F: "yyyy, dd, MMMM, dddd h:mm:ss tt",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ps-AF"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fil-PH"] = $.extend(true, {}, invariant, {
        name: "fil-PH",
        englishName: "Filipino (Philippines)",
        nativeName: "Filipino (Pilipinas)",
        language: "fil",
        numberFormat: {
            currency: {
                symbol: "PhP"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Linggo","Lunes","Martes","Mierkoles","Huebes","Biernes","Sabado"],["Lin","Lun","Mar","Mier","Hueb","Bier","Saba"],["L","L","M","M","H","B","S"]],
                months: [["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Septyembre","Oktubre","Nobyembre","Disyembre",""],["En","Peb","Mar","Abr","Mayo","Hun","Hul","Agos","Sept","Okt","Nob","Dis",""]],
                eras: [{"name":"Anno Domini","start":null,"offset":0}],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["fil-PH"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["dv-MV"] = $.extend(true, {}, invariant, {
        name: "dv-MV",
        englishName: "Divehi (Maldives)",
        nativeName: "ދިވެހިބަސް (ދިވެހި ރާއްޖެ)",
        language: "dv",
        isRTL: true,
        numberFormat: {
            currency: {
                pattern: ["n $-","n $"],
                symbol: "ރ."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Hijri",
                days: [["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],["އާ","ހޯ","އަ","ބު","ބު","ހު","ހޮ"]],
                months: [["މުޙައްރަމް","ޞަފަރު","ރަބީޢުލްއައްވަލް","ރަބީޢުލްއާޚިރު","ޖުމާދަލްއޫލާ","ޖުމާދަލްއާޚިރާ","ރަޖަބް","ޝަޢްބާން","ރަމަޟާން","ޝައްވާލް","ޛުލްޤަޢިދާ","ޛުލްޙިއްޖާ",""],["މުޙައްރަމް","ޞަފަރު","ރަބީޢުލްއައްވަލް","ރަބީޢުލްއާޚިރު","ޖުމާދަލްއޫލާ","ޖުމާދަލްއާޚިރާ","ރަޖަބް","ޝަޢްބާން","ރަމަޟާން","ޝައްވާލް","ޛުލްޤަޢިދާ","ޛުލްޙިއްޖާ",""]],
                AM: ["މކ","މކ","މކ"],
                PM: ["މފ","މފ","މފ"],
                eras: [{"name":"ހިޖްރީ","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    f: "dd/MM/yyyy HH:mm",
                    F: "dd/MM/yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],["އާ","ހޯ","އަ","ބު","ބު","ހު","ހޮ"]],
                months: [["ޖަނަވަރީ","ފެބްރުއަރީ","މާޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޯގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ",""],["ޖަނަވަރީ","ފެބްރުއަރީ","މާޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޯގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ",""]],
                AM: ["މކ","މކ","މކ"],
                PM: ["މފ","މފ","މފ"],
                eras: [{"name":"މީލާދީ","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yy",
                    D: "ddd, yyyy MMMM dd",
                    f: "ddd, yyyy MMMM dd HH:mm",
                    F: "ddd, yyyy MMMM dd HH:mm:ss",
                    Y: "yyyy, MMMM"
                }
            })
        }
    }, cultures["dv-MV"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ha-Latn-NG"] = $.extend(true, {}, invariant, {
        name: "ha-Latn-NG",
        englishName: "Hausa (Latin, Nigeria)",
        nativeName: "Hausa (Nigeria)",
        language: "ha-Latn",
        numberFormat: {
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "N"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Lahadi","Litinin","Talata","Laraba","Alhamis","Juma\u0027a","Asabar"],["Lah","Lit","Tal","Lar","Alh","Jum","Asa"],["L","L","T","L","A","J","A"]],
                months: [["Januwaru","Febreru","Maris","Afrilu","Mayu","Yuni","Yuli","Agusta","Satumba","Oktocba","Nuwamba","Disamba",""],["Jan","Feb","Mar","Afr","May","Yun","Yul","Agu","Sat","Okt","Nuw","Dis",""]],
                AM: ["Safe","safe","SAFE"],
                PM: ["Yamma","yamma","YAMMA"],
                eras: [{"name":"AD","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ha-Latn-NG"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["yo-NG"] = $.extend(true, {}, invariant, {
        name: "yo-NG",
        englishName: "Yoruba (Nigeria)",
        nativeName: "Yoruba (Nigeria)",
        language: "yo",
        numberFormat: {
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "N"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Aiku","Aje","Isegun","Ojo\u0027ru","Ojo\u0027bo","Eti","Abameta"],["Aik","Aje","Ise","Ojo","Ojo","Eti","Aba"],["A","A","I","O","O","E","A"]],
                months: [["Osu kinni","Osu keji","Osu keta","Osu kerin","Osu karun","Osu kefa","Osu keje","Osu kejo","Osu kesan","Osu kewa","Osu kokanla","Osu keresi",""],["kin.","kej.","ket.","ker.","kar.","kef.","kej.","kej.","kes.","kew.","kok.","ker.",""]],
                AM: ["Owuro","owuro","OWURO"],
                PM: ["Ale","ale","ALE"],
                eras: [{"name":"AD","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["yo-NG"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["quz-BO"] = $.extend(true, {}, invariant, {
        name: "quz-BO",
        englishName: "Quechua (Bolivia)",
        nativeName: "runasimi (Qullasuyu)",
        language: "quz",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-%n","%n"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["($ n)","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$b"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["intichaw","killachaw","atipachaw","quyllurchaw","Ch\u0027 askachaw","Illapachaw","k\u0027uychichaw"],["int","kil","ati","quy","Ch\u0027","Ill","k\u0027u"],["d","k","a","m","h","b","k"]],
                months: [["Qulla puquy","Hatun puquy","Pauqar waray","ayriwa","Aymuray","Inti raymi","Anta Sitwa","Qhapaq Sitwa","Uma raymi","Kantaray","Ayamarq\u0027a","Kapaq Raymi",""],["Qul","Hat","Pau","ayr","Aym","Int","Ant","Qha","Uma","Kan","Aya","Kap",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["quz-BO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["nso-ZA"] = $.extend(true, {}, invariant, {
        name: "nso-ZA",
        englishName: "Sesotho sa Leboa (South Africa)",
        nativeName: "Sesotho sa Leboa (Afrika Borwa)",
        language: "nso",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Lamorena","Mošupologo","Labobedi","Laboraro","Labone","Labohlano","Mokibelo"],["Lam","Moš","Lbb","Lbr","Lbn","Lbh","Mok"],["L","M","L","L","L","L","M"]],
                months: [["Pherekgong","Hlakola","Mopitlo","Moranang","Mosegamanye","Ngoatobošego","Phuphu","Phato","Lewedi","Diphalana","Dibatsela","Manthole",""],["Pher","Hlak","Mop","Mor","Mos","Ngwat","Phup","Phat","Lew","Dip","Dib","Man",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["nso-ZA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ba-RU"] = $.extend(true, {}, invariant, {
        name: "ba-RU",
        englishName: "Bashkir (Russia)",
        nativeName: "Башҡорт (Россия)",
        language: "ba",
        numberFormat: {
            ',': " ",
            '.': ",",
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                groupSizes: [3,0],
                ',': " ",
                '.': ",",
                symbol: "һ."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Йәкшәмбе","Дүшәмбе","Шишәмбе","Шаршамбы","Кесаҙна","Йома","Шәмбе"],["Йш","Дш","Шш","Шр","Кс","Йм","Шб"],["Йш","Дш","Шш","Шр","Кс","Йм","Шб"]],
                months: [["ғинуар","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь",""],["ғин","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "d MMMM yyyy \u0027й\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy \u0027й\u0027 H:mm",
                    F: "d MMMM yyyy \u0027й\u0027 H:mm:ss",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ba-RU"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["lb-LU"] = $.extend(true, {}, invariant, {
        name: "lb-LU",
        englishName: "Luxembourgish (Luxembourg)",
        nativeName: "Lëtzebuergesch (Luxembourg)",
        language: "lb",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"],["Son","Méi","Dën","Mët","Don","Fre","Sam"],["So","Mé","Dë","Më","Do","Fr","Sa"]],
                months: [["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember",""],["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n. Chr","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["lb-LU"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["kl-GL"] = $.extend(true, {}, invariant, {
        name: "kl-GL",
        englishName: "Greenlandic (Greenland)",
        nativeName: "kalaallisut (Kalaallit Nunaat)",
        language: "kl",
        numberFormat: {
            ',': ".",
            '.': ",",
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,0],
                ',': ".",
                '.': ",",
                symbol: "kr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["sapaat","ataasinngorneq","marlunngorneq","pingasunngorneq","sisamanngorneq","tallimanngorneq","arfininngorneq"],["sap","ata","mar","ping","sis","tal","arf"],["sa","at","ma","pi","si","ta","ar"]],
                months: [["januari","februari","martsi","apriili","maaji","juni","juli","aggusti","septembari","oktobari","novembari","decembari",""],["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["kl-GL"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ig-NG"] = $.extend(true, {}, invariant, {
        name: "ig-NG",
        englishName: "Igbo (Nigeria)",
        nativeName: "Igbo (Nigeria)",
        language: "ig",
        numberFormat: {
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "N"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Aiku","Aje","Isegun","Ojo\u0027ru","Ojo\u0027bo","Eti","Abameta"],["Aik","Aje","Ise","Ojo","Ojo","Eti","Aba"],["A","A","I","O","O","E","A"]],
                months: [["Onwa mbu","Onwa ibua","Onwa ato","Onwa ano","Onwa ise","Onwa isi","Onwa asa","Onwa asato","Onwa itolu","Onwa iri","Onwa iri n\u0027ofu","Onwa iri n\u0027ibua",""],["mbu.","ibu.","ato.","ano.","ise","isi","asa","asa.","ito.","iri.","n\u0027of.","n\u0027ib.",""]],
                AM: ["Ututu","ututu","UTUTU"],
                PM: ["Efifie","efifie","EFIFIE"],
                eras: [{"name":"AD","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ig-NG"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ii-CN"] = $.extend(true, {}, invariant, {
        name: "ii-CN",
        englishName: "Yi (PRC)",
        nativeName: "ꆈꌠꁱꂷ (ꍏꉸꏓꂱꇭꉼꇩ)",
        language: "ii",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["$-n","$n"],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["ꑭꆏꑍ","ꆏꊂ꒔","ꆏꊂꑍ","ꆏꊂꌕ","ꆏꊂꇖ","ꆏꊂꉬ","ꆏꊂꃘ"],["ꑭꆏ","ꆏ꒔","ꆏꑍ","ꆏꌕ","ꆏꇖ","ꆏꉬ","ꆏꃘ"],["ꆏ","꒔","ꑍ","ꌕ","ꇖ","ꉬ","ꃘ"]],
                months: [["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊯꊪꆪ","ꊰꑋꆪ",""],["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊯꊪꆪ","ꊰꑋꆪ",""]],
                AM: ["ꂵꆪꈌꈐ","ꂵꆪꈌꈐ","ꂵꆪꈌꈐ"],
                PM: ["ꂵꆪꈌꉈ","ꂵꆪꈌꉈ","ꂵꆪꈌꉈ"],
                eras: [{"name":"ꇬꑼ","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027ꈎ\u0027 M\u0027ꆪ\u0027 d\u0027ꑍ\u0027",
                    t: "tt h:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027ꈎ\u0027 M\u0027ꆪ\u0027 d\u0027ꑍ\u0027 tt h:mm",
                    F: "yyyy\u0027ꈎ\u0027 M\u0027ꆪ\u0027 d\u0027ꑍ\u0027 H:mm:ss",
                    M: "M\u0027ꆪ\u0027 d\u0027ꑍ\u0027",
                    Y: "yyyy\u0027ꈎ\u0027 M\u0027ꆪ\u0027"
                }
            })
        }
    }, cultures["ii-CN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["arn-CL"] = $.extend(true, {}, invariant, {
        name: "arn-CL",
        englishName: "Mapudungun (Chile)",
        nativeName: "Mapudungun (Chile)",
        language: "arn",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-$ n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["arn-CL"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["moh-CA"] = $.extend(true, {}, invariant, {
        name: "moh-CA",
        englishName: "Mohawk (Mohawk)",
        nativeName: "Kanien\u0027kéha",
        language: "moh",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0]
            },
            currency: {
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Awentatokentì:ke","Awentataón\u0027ke","Ratironhia\u0027kehronòn:ke","Soséhne","Okaristiiáhne","Ronwaia\u0027tanentaktonhne","Entákta"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["S","M","T","W","T","F","S"]],
                months: [["Tsothohrkó:Wa","Enniska","Enniskó:Wa","Onerahtókha","Onerahtohkó:Wa","Ohiari:Ha","Ohiarihkó:Wa","Seskéha","Seskehkó:Wa","Kenténha","Kentenhkó:Wa","Tsothóhrha",""],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["moh-CA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["br-FR"] = $.extend(true, {}, invariant, {
        name: "br-FR",
        englishName: "Breton (France)",
        nativeName: "brezhoneg (Frañs)",
        language: "br",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Sul","Lun","Meurzh","Merc\u0027her","Yaou","Gwener","Sadorn"],["Sul","Lun","Meu.","Mer.","Yaou","Gwe.","Sad."],["Su","Lu","Mz","Mc","Ya","Gw","Sa"]],
                months: [["Genver","C\u0027hwevrer","Meurzh","Ebrel","Mae","Mezheven","Gouere","Eost","Gwengolo","Here","Du","Kerzu",""],["Gen.","C\u0027hwe.","Meur.","Ebr.","Mae","Mezh.","Goue.","Eost","Gwen.","Here","Du","Kzu",""]],
                AM: null,
                PM: null,
                eras: [{"name":"g. J.-K.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["br-FR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ug-CN"] = $.extend(true, {}, invariant, {
        name: "ug-CN",
        englishName: "Uyghur (PRC)",
        nativeName: "ئۇيغۇرچە (جۇڭخۇا خەلق جۇمھۇرىيىتى)",
        language: "ug",
        isRTL: true,
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$n"],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"],["يە","دۈ","سە","چا","پە","جۈ","شە"],["ي","د","س","چ","پ","ج","ش"]],
                months: [["1-ئاي","2-ئاي","3-ئاي","4-ئاي","5-ئاي","6-ئاي","7-ئاي","8-ئاي","9-ئاي","10-ئاي","11-ئاي","12-ئاي",""],["1-ئاي","2-ئاي","3-ئاي","4-ئاي","5-ئاي","6-ئاي","7-ئاي","8-ئاي","9-ئاي","10-ئاي","11-ئاي","12-ئاي",""]],
                AM: ["چۈشتىن بۇرۇن","چۈشتىن بۇرۇن","چۈشتىن بۇرۇن"],
                PM: ["چۈشتىن كېيىن","چۈشتىن كېيىن","چۈشتىن كېيىن"],
                eras: [{"name":"مىلادى","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-M-d",
                    D: "yyyy-\u0027يىلى\u0027 MMMM d-\u0027كۈنى،\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy-\u0027يىلى\u0027 MMMM d-\u0027كۈنى،\u0027 H:mm",
                    F: "yyyy-\u0027يىلى\u0027 MMMM d-\u0027كۈنى،\u0027 H:mm:ss",
                    M: "MMMM d\u0027-كۈنى\u0027",
                    Y: "yyyy-\u0027يىلى\u0027 MMMM"
                }
            })
        }
    }, cultures["ug-CN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mi-NZ"] = $.extend(true, {}, invariant, {
        name: "mi-NZ",
        englishName: "Maori (New Zealand)",
        nativeName: "Reo Māori (Aotearoa)",
        language: "mi",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["-$n","$n"],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Rātapu","Rāhina","Rātū","Rāapa","Rāpare","Rāmere","Rāhoroi"],["Ta","Hi","Tū","Apa","Pa","Me","Ho"],["Ta","Hi","Tū","Aa","Pa","Me","Ho"]],
                months: [["Kohi-tātea","Hui-tanguru","Poutū-te-rangi","Paenga-whāwhā","Haratua","Pipiri","Hōngongoi","Here-turi-kōkā","Mahuru","Whiringa-ā-nuku","Whiringa-ā-rangi","Hakihea",""],["Kohi","Hui","Pou","Pae","Hara","Pipi","Hōngo","Here","Mahu","Nuku","Rangi","Haki",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd MMMM, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, dd MMMM, yyyy h:mm tt",
                    F: "dddd, dd MMMM, yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yy"
                }
            })
        }
    }, cultures["mi-NZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["oc-FR"] = $.extend(true, {}, invariant, {
        name: "oc-FR",
        englishName: "Occitan (France)",
        nativeName: "Occitan (França)",
        language: "oc",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dimenge","diluns","dimars","dimècres","dijòus","divendres","dissabte"],["dim.","lun.","mar.","mèc.","jòu.","ven.","sab."],["di","lu","ma","mè","jò","ve","sa"]],
                months: [["genier","febrier","març","abril","mai","junh","julh","agost","setembre","octobre","novembre","desembre",""],["gen.","feb.","mar.","abr.","mai.","jun.","jul.","ag.","set.","oct.","nov.","des.",""]],
                monthsGenitive: [["de genier","de febrier","de març","d\u0027abril","de mai","de junh","de julh","d\u0027agost","de setembre","d\u0027octobre","de novembre","de desembre",""],["gen.","feb.","mar.","abr.","mai.","jun.","jul.","ag.","set.","oct.","nov.","des.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"après Jèsus-Crist","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd,\u0027 lo \u0027d MMMM\u0027 de \u0027yyyy",
                    f: "dddd,\u0027 lo \u0027d MMMM\u0027 de \u0027yyyy HH:mm",
                    F: "dddd,\u0027 lo \u0027d MMMM\u0027 de \u0027yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["oc-FR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["co-FR"] = $.extend(true, {}, invariant, {
        name: "co-FR",
        englishName: "Corsican (France)",
        nativeName: "Corsu (France)",
        language: "co",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dumenica","luni","marti","mercuri","ghjovi","venderi","sabbatu"],["dum.","lun.","mar.","mer.","ghj.","ven.","sab."],["du","lu","ma","me","gh","ve","sa"]],
                months: [["ghjennaghju","ferraghju","marzu","aprile","maghju","ghjunghju","lugliu","aostu","settembre","ottobre","nuvembre","dicembre",""],["ghje","ferr","marz","apri","magh","ghju","lugl","aost","sett","otto","nuve","dice",""]],
                AM: null,
                PM: null,
                eras: [{"name":"dopu J-C","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["co-FR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["gsw-FR"] = $.extend(true, {}, invariant, {
        name: "gsw-FR",
        englishName: "Alsatian (France)",
        nativeName: "Elsässisch (Frànkrisch)",
        language: "gsw",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Sundàà","Mondàà","Dienschdàà","Mittwuch","Dunnerschdàà","Fridàà","Sàmschdàà"],["Su.","Mo.","Di.","Mi.","Du.","Fr.","Sà."],["Su","Mo","Di","Mi","Du","Fr","Sà"]],
                months: [["Jänner","Feverje","März","Àpril","Mai","Jüni","Jüli","Augscht","September","Oktower","Nowember","Dezember",""],["Jän.","Fev.","März","Apr.","Mai","Jüni","Jüli","Aug.","Sept.","Okt.","Now.","Dez.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"Vor J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["gsw-FR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sah-RU"] = $.extend(true, {}, invariant, {
        name: "sah-RU",
        englishName: "Yakut (Russia)",
        nativeName: "саха (Россия)",
        language: "sah",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "с."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["баскыһыанньа","бэнидиэнньик","оптуорунньук","сэрэдэ","чэппиэр","бээтинсэ","субуота"],["Бс","Бн","Оп","Ср","Чп","Бт","Сб"],["Бс","Бн","Оп","Ср","Чп","Бт","Сб"]],
                months: [["Тохсунньу","Олунньу","Кулун тутар","Муус устар","Ыам ыйа","Бэс ыйа","От ыйа","Атырдьах ыйа","Балаҕан ыйа","Алтынньы","Сэтинньи","Ахсынньы",""],["тхс","олн","кул","мст","ыам","бэс","отй","атр","блҕ","алт","стн","ахс",""]],
                monthsGenitive: [["тохсунньу","олунньу","кулун тутар","муус устар","ыам ыйын","бэс ыйын","от ыйын","атырдьах ыйын","балаҕан ыйын","алтынньы","сэтинньи","ахсынньы",""],["тхс","олн","кул","мст","ыам","бэс","отй","атр","блҕ","алт","стн","ахс",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "MM.dd.yyyy",
                    D: "MMMM d yyyy \u0027с.\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "MMMM d yyyy \u0027с.\u0027 H:mm",
                    F: "MMMM d yyyy \u0027с.\u0027 H:mm:ss",
                    Y: "MMMM yyyy \u0027с.\u0027"
                }
            })
        }
    }, cultures["sah-RU"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["qut-GT"] = $.extend(true, {}, invariant, {
        name: "qut-GT",
        englishName: "K\u0027iche (Guatemala)",
        nativeName: "K\u0027iche (Guatemala)",
        language: "qut",
        numberFormat: {
            currency: {
                symbol: "Q"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["juq\u0027ij","kaq\u0027ij","oxq\u0027ij","kajq\u0027ij","joq\u0027ij","waqq\u0027ij","wuqq\u0027ij"],["juq","kaq","oxq","kajq","joq","waqq","wuqq"],["ju","ka","ox","ka","jo","wa","wu"]],
                months: [["nab\u0027e ik\u0027","ukab\u0027 ik\u0027","rox ik\u0027","ukaj ik\u0027","uro\u0027 ik\u0027","uwaq ik\u0027","uwuq ik\u0027","uwajxaq ik\u0027","ub\u0027elej ik\u0027","ulaj ik\u0027","ujulaj ik\u0027","ukab\u0027laj ik\u0027",""],["nab\u0027e","ukab","rox","ukaj","uro","uwaq","uwuq","uwajxaq","ub\u0027elej","ulaj","ujulaj","ukab\u0027laj",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["qut-GT"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["rw-RW"] = $.extend(true, {}, invariant, {
        name: "rw-RW",
        englishName: "Kinyarwanda (Rwanda)",
        nativeName: "Kinyarwanda (Rwanda)",
        language: "rw",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$-n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "RWF"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Ku wa mbere","Ku wa kabiri","Ku wa gatatu","Ku wa kane","Ku wa gatanu","Ku wa gatandatu","Ku cyumweru"],["mbe.","kab.","gat.","kan.","gat.","gat.","cyu."],["mb","ka","ga","ka","ga","ga","cy"]],
                months: [["Mutarama","Gashyantare","Werurwe","Mata","Gicurasi","Kamena","Nyakanga","Kanama","Nzeli","Ukwakira","Ugushyingo","Ukuboza",""],["Mut","Gas","Wer","Mat","Gic","Kam","Nya","Kan","Nze","Ukwa","Ugu","Uku",""]],
                AM: ["saa moya z.m.","saa moya z.m.","SAA MOYA Z.M."],
                PM: ["saa moya z.n.","saa moya z.n.","SAA MOYA Z.N."],
                eras: [{"name":"AD","start":null,"offset":0}],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["rw-RW"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["wo-SN"] = $.extend(true, {}, invariant, {
        name: "wo-SN",
        englishName: "Wolof (Senegal)",
        nativeName: "Wolof (Sénégal)",
        language: "wo",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "XOF"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["wo-SN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["prs-AF"] = $.extend(true, {}, invariant, {
        name: "prs-AF",
        englishName: "Dari (Afghanistan)",
        nativeName: "درى (افغانستان)",
        language: "prs",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["%n-","%n"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$n-","$n"],
                symbol: "؋"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 5,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["غ.م","غ.م","غ.م"],
                PM: ["غ.و","غ.و","غ.و"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dd/MM/yyyy h:mm tt",
                    F: "dd/MM/yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_Localized: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 5,
                days: [["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],["ی","د","س","چ","پ","ج","ش"]],
                months: [["سلواغه","كب","ورى","غويى","غبرګولى","چنګاښ","زمرى","وږى","تله","لړم","ليندۍ","مرغومى",""],["سلواغه","كب","ورى","غويى","غبرګولى","چنګاښ","زمرى","وږى","تله","لړم","ليندۍ","مرغومى",""]],
                AM: ["غ.م","غ.م","غ.م"],
                PM: ["غ.و","غ.و","غ.و"],
                eras: [{"name":"ل.ه","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy, dd, MMMM, dddd",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "yyyy, dd, MMMM, dddd h:mm tt",
                    F: "yyyy, dd, MMMM, dddd h:mm:ss tt",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["prs-AF"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["gd-GB"] = $.extend(true, {}, invariant, {
        name: "gd-GB",
        englishName: "Scottish Gaelic (United Kingdom)",
        nativeName: "Gàidhlig (An Rìoghachd Aonaichte)",
        language: "gd",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "£"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],["Dòm","Lua","Mài","Cia","Ard","Hao","Sat"],["D","L","M","C","A","H","S"]],
                months: [["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd",""],["Fao","Gea","Màr","Gib","Cèi","Ògm","Iuc","Lùn","Sul","Dàm","Sam","Dùb",""]],
                AM: ["m","m","M"],
                PM: ["f","f","F"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["gd-GB"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-IQ"] = $.extend(true, {}, invariant, {
        name: "ar-IQ",
        englishName: "Arabic (Iraq)",
        nativeName: "العربية (العراق)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "د.ع.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-IQ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh-CN"] = $.extend(true, {}, invariant, {
        name: "zh-CN",
        englishName: "Chinese (Simplified, PRC)",
        nativeName: "中文(中华人民共和国)",
        language: "zh-CHS",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$n"],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["周日","周一","周二","周三","周四","周五","周六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"公元","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["zh-CN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["de-CH"] = $.extend(true, {}, invariant, {
        name: "de-CH",
        englishName: "German (Switzerland)",
        nativeName: "Deutsch (Schweiz)",
        language: "de",
        numberFormat: {
            ',': "\u0027",
            percent: {
                pattern: ["-n%","n%"],
                ',': "\u0027"
            },
            currency: {
                pattern: ["$-n","$ n"],
                ',': "\u0027",
                symbol: "Fr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So","Mo","Di","Mi","Do","Fr","Sa"],["So","Mo","Di","Mi","Do","Fr","Sa"]],
                months: [["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n. Chr.","start":null,"offset":0}],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, d. MMMM yyyy",
                    f: "dddd, d. MMMM yyyy HH:mm",
                    F: "dddd, d. MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["de-CH"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-GB"] = $.extend(true, {}, invariant, {
        name: "en-GB",
        englishName: "English (United Kingdom)",
        nativeName: "English (United Kingdom)",
        language: "en",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "£"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["en-GB"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-MX"] = $.extend(true, {}, invariant, {
        name: "es-MX",
        englishName: "Spanish (Mexico)",
        nativeName: "Español (México)",
        language: "es",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-MX"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fr-BE"] = $.extend(true, {}, invariant, {
        name: "fr-BE",
        englishName: "French (Belgium)",
        nativeName: "français (Belgique)",
        language: "fr",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "d/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fr-BE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["it-CH"] = $.extend(true, {}, invariant, {
        name: "it-CH",
        englishName: "Italian (Switzerland)",
        nativeName: "italiano (Svizzera)",
        language: "it",
        numberFormat: {
            ',': "\u0027",
            percent: {
                pattern: ["-n%","n%"],
                ',': "\u0027"
            },
            currency: {
                pattern: ["$-n","$ n"],
                ',': "\u0027",
                symbol: "fr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],["dom","lun","mar","mer","gio","ven","sab"],["do","lu","ma","me","gi","ve","sa"]],
                months: [["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre",""],["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, d. MMMM yyyy",
                    f: "dddd, d. MMMM yyyy HH:mm",
                    F: "dddd, d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["it-CH"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["nl-BE"] = $.extend(true, {}, invariant, {
        name: "nl-BE",
        englishName: "Dutch (Belgium)",
        nativeName: "Nederlands (België)",
        language: "nl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],["zo","ma","di","wo","do","vr","za"],["zo","ma","di","wo","do","vr","za"]],
                months: [["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december",""],["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd d MMMM yyyy H:mm",
                    F: "dddd d MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["nl-BE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["nn-NO"] = $.extend(true, {}, invariant, {
        name: "nn-NO",
        englishName: "Norwegian, Nynorsk (Norway)",
        nativeName: "norsk, nynorsk (Noreg)",
        language: "nn",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["søndag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],["sø","må","ty","on","to","fr","la"],["sø","må","ty","on","to","fr","la"]],
                months: [["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["nn-NO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["pt-PT"] = $.extend(true, {}, invariant, {
        name: "pt-PT",
        englishName: "Portuguese (Portugal)",
        nativeName: "português (Portugal)",
        language: "pt",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],["dom","seg","ter","qua","qui","sex","sáb"],["D","S","T","Q","Q","S","S"]],
                months: [["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",""],["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dddd, d\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    f: "dddd, d\u0027 de \u0027MMMM\u0027 de \u0027yyyy HH:mm",
                    F: "dddd, d\u0027 de \u0027MMMM\u0027 de \u0027yyyy HH:mm:ss",
                    M: "d/M",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["pt-PT"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr-Latn-CS"] = $.extend(true, {}, invariant, {
        name: "sr-Latn-CS",
        englishName: "Serbian (Latin, Serbia and Montenegro (Former))",
        nativeName: "srpski (Srbija i Crna Gora (Prethodno))",
        language: "sr-Latn",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "Din."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],["ned","pon","uto","sre","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n.e.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr-Latn-CS"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sv-FI"] = $.extend(true, {}, invariant, {
        name: "sv-FI",
        englishName: "Swedish (Finland)",
        nativeName: "svenska (Finland)",
        language: "sv",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],["sö","må","ti","on","to","fr","lö"],["sö","må","ti","on","to","fr","lö"]],
                months: [["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december",""],["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "\u0027den \u0027d MMMM yyyy",
                    f: "\u0027den \u0027d MMMM yyyy HH:mm",
                    F: "\u0027den \u0027d MMMM yyyy HH:mm:ss",
                    M: "\u0027den \u0027d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sv-FI"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["az-Cyrl-AZ"] = $.extend(true, {}, invariant, {
        name: "az-Cyrl-AZ",
        englishName: "Azeri (Cyrillic, Azerbaijan)",
        nativeName: "Азәрбајҹан (Азәрбајҹан)",
        language: "az-Cyrl",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "ман."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Базар","Базар ертәси","Чәршәнбә ахшамы","Чәршәнбә","Ҹүмә ахшамы","Ҹүмә","Шәнбә"],["Б","Бе","Ча","Ч","Ҹа","Ҹ","Ш"],["Б","Бе","Ча","Ч","Ҹа","Ҹ","Ш"]],
                months: [["Јанвар","Феврал","Март","Апрел","Мај","Ијун","Ијул","Август","Сентјабр","Октјабр","Нојабр","Декабр",""],["Јан","Фев","Мар","Апр","Мај","Ијун","Ијул","Авг","Сен","Окт","Ноя","Дек",""]],
                monthsGenitive: [["јанвар","феврал","март","апрел","мај","ијун","ијул","август","сентјабр","октјабр","нојабр","декабр",""],["Јан","Фев","Мар","Апр","мая","ијун","ијул","Авг","Сен","Окт","Ноя","Дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["az-Cyrl-AZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["dsb-DE"] = $.extend(true, {}, invariant, {
        name: "dsb-DE",
        englishName: "Lower Sorbian (Germany)",
        nativeName: "dolnoserbšćina (Nimska)",
        language: "dsb",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ". ",
                firstDay: 1,
                days: [["njeźela","ponjeźele","wałtora","srjoda","stwortk","pětk","sobota"],["nje","pon","wał","srj","stw","pět","sob"],["n","p","w","s","s","p","s"]],
                months: [["januar","februar","měrc","apryl","maj","junij","julij","awgust","september","oktober","nowember","december",""],["jan","feb","měr","apr","maj","jun","jul","awg","sep","okt","now","dec",""]],
                monthsGenitive: [["januara","februara","měrca","apryla","maja","junija","julija","awgusta","septembra","oktobra","nowembra","decembra",""],["jan","feb","měr","apr","maj","jun","jul","awg","sep","okt","now","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"po Chr.","start":null,"offset":0}],
                patterns: {
                    d: "d. M. yyyy",
                    D: "dddd, \u0027dnja\u0027 d. MMMM yyyy",
                    t: "H.mm \u0027goź.\u0027",
                    T: "H:mm:ss",
                    f: "dddd, \u0027dnja\u0027 d. MMMM yyyy H.mm \u0027goź.\u0027",
                    F: "dddd, \u0027dnja\u0027 d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["dsb-DE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["se-SE"] = $.extend(true, {}, invariant, {
        name: "se-SE",
        englishName: "Sami, Northern (Sweden)",
        nativeName: "davvisámegiella (Ruoŧŧa)",
        language: "se",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["sotnabeaivi","mánnodat","disdat","gaskavahkku","duorastat","bearjadat","lávvardat"],["sotn","mán","dis","gask","duor","bear","láv"],["s","m","d","g","d","b","l"]],
                months: [["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu",""],["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]],
                monthsGenitive: [["ođđajagimánu","guovvamánu","njukčamánu","cuoŋománu","miessemánu","geassemánu","suoidnemánu","borgemánu","čakčamánu","golggotmánu","skábmamánu","juovlamánu",""],["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "MMMM d\u0027. b. \u0027yyyy",
                    f: "MMMM d\u0027. b. \u0027yyyy HH:mm",
                    F: "MMMM d\u0027. b. \u0027yyyy HH:mm:ss",
                    M: "MMMM d\u0027. b. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["se-SE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ga-IE"] = $.extend(true, {}, invariant, {
        name: "ga-IE",
        englishName: "Irish (Ireland)",
        nativeName: "Gaeilge (Éire)",
        language: "ga",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Dé Domhnaigh","Dé Luain","Dé Máirt","Dé Céadaoin","Déardaoin","Dé hAoine","Dé Sathairn"],["Domh","Luan","Máir","Céad","Déar","Aoi","Sath"],["Do","Lu","Má","Cé","De","Ao","Sa"]],
                months: [["Eanáir","Feabhra","Márta","Aibreán","Bealtaine","Meitheamh","Iúil","Lúnasa","Meán Fómhair","Deireadh Fómhair","Samhain","Nollaig",""],["Ean","Feabh","Már","Aib","Bealt","Meith","Iúil","Lún","M.Fómh","D.Fómh","Samh","Noll",""]],
                AM: ["r.n.","r.n.","R.N."],
                PM: ["i.n.","i.n.","I.N."],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "d MMMM yyyy",
                    f: "d MMMM yyyy HH:mm",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ga-IE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ms-BN"] = $.extend(true, {}, invariant, {
        name: "ms-BN",
        englishName: "Malay (Brunei Darussalam)",
        nativeName: "Bahasa Melayu (Brunei Darussalam)",
        language: "ms",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                decimals: 0,
                ',': ".",
                '.': ",",
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],["Ahad","Isnin","Sel","Rabu","Khamis","Jumaat","Sabtu"],["A","I","S","R","K","J","S"]],
                months: [["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember",""],["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogos","Sept","Okt","Nov","Dis",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM yyyy H:mm",
                    F: "dd MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["ms-BN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["uz-Cyrl-UZ"] = $.extend(true, {}, invariant, {
        name: "uz-Cyrl-UZ",
        englishName: "Uzbek (Cyrillic, Uzbekistan)",
        nativeName: "Ўзбек (Ўзбекистон)",
        language: "uz-Cyrl",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "сўм"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["якшанба","душанба","сешанба","чоршанба","пайшанба","жума","шанба"],["якш","дш","сш","чш","пш","ж","ш"],["я","д","с","ч","п","ж","ш"]],
                months: [["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                monthsGenitive: [["январ","феврал","март","апрел","май","июн","июл","август","сентябр","октябр","ноябр","декабр",""],["Янв","Фев","Мар","Апр","мая","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "yyyy \u0027йил\u0027 d-MMMM",
                    f: "yyyy \u0027йил\u0027 d-MMMM HH:mm",
                    F: "yyyy \u0027йил\u0027 d-MMMM HH:mm:ss",
                    M: "d-MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["uz-Cyrl-UZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bn-BD"] = $.extend(true, {}, invariant, {
        name: "bn-BD",
        englishName: "Bengali (Bangladesh)",
        nativeName: "বাংলা (বাংলাদেশ)",
        language: "bn",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-%n","%n"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "৳"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                ':': ".",
                firstDay: 1,
                days: [["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"],["রবি.","সোম.","মঙ্গল.","বুধ.","বৃহস্পতি.","শুক্র.","শনি."],["র","স","ম","ব","ব","শ","শ"]],
                months: [["জানুয়ারী","ফেব্রুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর",""],["জানু.","ফেব্রু.","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগ.","সেপ্টে.","অক্টো.","নভে.","ডিসে.",""]],
                AM: ["পুর্বাহ্ন","পুর্বাহ্ন","পুর্বাহ্ন"],
                PM: ["অপরাহ্ন","অপরাহ্ন","অপরাহ্ন"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    t: "HH.mm",
                    T: "HH.mm.ss",
                    f: "dd MMMM yyyy HH.mm",
                    F: "dd MMMM yyyy HH.mm.ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["bn-BD"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mn-Mong-CN"] = $.extend(true, {}, invariant, {
        name: "mn-Mong-CN",
        englishName: "Mongolian (Traditional Mongolian, PRC)",
        nativeName: "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ (ᠪᠦᠭᠦᠳᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠬᠤ ᠳᠤᠮᠳᠠᠳᠤ ᠠᠷᠠᠳ ᠣᠯᠣᠰ)",
        language: "mn-Mong",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["$-n","$n"],
                groupSizes: [3,0],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["ᠭᠠᠷᠠᠭ ᠤᠨ ᠡᠳᠦᠷ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠨᠢᠭᠡᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠬᠣᠶᠠᠷ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠭᠤᠷᠪᠠᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠳᠥᠷᠪᠡᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠲᠠᠪᠤᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ"],["ᠭᠠᠷᠠᠭ ᠤᠨ ᠡᠳᠦᠷ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠨᠢᠭᠡᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠬᠣᠶᠠᠷ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠭᠤᠷᠪᠠᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠳᠥᠷᠪᠡᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠲᠠᠪᠤᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ"],["ᠡ‍","ᠨᠢ‍","ᠬᠣ‍","ᠭᠤ‍","ᠳᠥ‍","ᠲᠠ‍","ᠵᠢ‍"]],
                months: [["ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠦᠷᠪᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠵᠢᠷᠭᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠤᠯᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠨᠠᠢᠮᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠶᠢᠰᠦᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",""],["ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠦᠷᠪᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠵᠢᠷᠭᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠤᠯᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠨᠠᠢᠮᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠶᠢᠰᠦᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ᠣᠨ ᠲᠣᠭᠠᠯᠠᠯ ᠤᠨ","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027ᠣᠨ ᠤ᠋\u0027 M\u0027ᠰᠠᠷ᠎ᠠ  ᠢᠢᠨ \u0027d\u0027 ᠤ᠋ ᠡᠳᠦᠷ\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027ᠣᠨ ᠤ᠋\u0027 M\u0027ᠰᠠᠷ᠎ᠠ  ᠢᠢᠨ \u0027d\u0027 ᠤ᠋ ᠡᠳᠦᠷ\u0027 H:mm",
                    F: "yyyy\u0027ᠣᠨ ᠤ᠋\u0027 M\u0027ᠰᠠᠷ᠎ᠠ  ᠢᠢᠨ \u0027d\u0027 ᠤ᠋ ᠡᠳᠦᠷ\u0027 H:mm:ss",
                    M: "M\u0027ᠰᠠᠷ᠎ᠠ\u0027 d\u0027ᠡᠳᠦᠷ\u0027",
                    Y: "yyyy\u0027ᠣᠨ\u0027 M\u0027ᠰᠠᠷ᠎ᠠ\u0027"
                }
            })
        }
    }, cultures["mn-Mong-CN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["iu-Latn-CA"] = $.extend(true, {}, invariant, {
        name: "iu-Latn-CA",
        englishName: "Inuktitut (Latin, Canada)",
        nativeName: "Inuktitut (Kanatami)",
        language: "iu-Latn",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0]
            },
            currency: {
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Naattiinguja","Naggajjau","Aippiq","Pingatsiq","Sitammiq","Tallirmiq","Sivataarvik"],["Nat","Nag","Aip","Pi","Sit","Tal","Siv"],["N","N","A","P","S","T","S"]],
                months: [["Jaannuari","Viivvuari","Maatsi","Iipuri","Mai","Juuni","Julai","Aaggiisi","Sitipiri","Utupiri","Nuvipiri","Tisipiri",""],["Jan","Viv","Mas","Ipu","Mai","Jun","Jul","Agi","Sii","Uut","Nuv","Tis",""]],
                patterns: {
                    d: "d/MM/yyyy",
                    D: "ddd, MMMM dd,yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "ddd, MMMM dd,yyyy h:mm tt",
                    F: "ddd, MMMM dd,yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["iu-Latn-CA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tzm-Latn-DZ"] = $.extend(true, {}, invariant, {
        name: "tzm-Latn-DZ",
        englishName: "Tamazight (Latin, Algeria)",
        nativeName: "Tamazight (Djazaïr)",
        language: "tzm-Latn",
        numberFormat: {
            pattern: ["n-"],
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                symbol: "DZD"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 6,
                days: [["Acer","Arime","Aram","Ahad","Amhadh","Sem","Sedh"],["Ace","Ari","Ara","Aha","Amh","Sem","Sed"],["Ac","Ar","Ar","Ah","Am","Se","Se"]],
                months: [["Yenayer","Furar","Maghres","Yebrir","Mayu","Yunyu","Yulyu","Ghuct","Cutenber","Ktuber","Wambir","Dujanbir",""],["Yen","Fur","Mag","Yeb","May","Yun","Yul","Ghu","Cut","Ktu","Wam","Duj",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM, yyyy H:mm",
                    F: "dd MMMM, yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["tzm-Latn-DZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["quz-EC"] = $.extend(true, {}, invariant, {
        name: "quz-EC",
        englishName: "Quechua (Ecuador)",
        nativeName: "runasimi (Ecuador)",
        language: "quz",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-%n","%n"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["($ n)","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["intichaw","killachaw","atipachaw","quyllurchaw","Ch\u0027 askachaw","Illapachaw","k\u0027uychichaw"],["int","kil","ati","quy","Ch\u0027","Ill","k\u0027u"],["d","k","a","m","h","b","k"]],
                months: [["Qulla puquy","Hatun puquy","Pauqar waray","ayriwa","Aymuray","Inti raymi","Anta Sitwa","Qhapaq Sitwa","Uma raymi","Kantaray","Ayamarq\u0027a","Kapaq Raymi",""],["Qul","Hat","Pau","ayr","Aym","Int","Ant","Qha","Uma","Kan","Aya","Kap",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm:ss",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["quz-EC"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-EG"] = $.extend(true, {}, invariant, {
        name: "ar-EG",
        englishName: "Arabic (Egypt)",
        nativeName: "العربية (مصر)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "ج.م.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-EG"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh-HK"] = $.extend(true, {}, invariant, {
        name: "zh-HK",
        englishName: "Chinese (Traditional, Hong Kong S.A.R.)",
        nativeName: "中文(香港特別行政區)",
        language: "zh-CHT",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                symbol: "HK$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["週日","週一","週二","週三","週四","週五","週六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"公元","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["zh-HK"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["de-AT"] = $.extend(true, {}, invariant, {
        name: "de-AT",
        englishName: "German (Austria)",
        nativeName: "Deutsch (Österreich)",
        language: "de",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-$ n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So","Mo","Di","Mi","Do","Fr","Sa"],["So","Mo","Di","Mi","Do","Fr","Sa"]],
                months: [["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n. Chr.","start":null,"offset":0}],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, dd. MMMM yyyy",
                    f: "dddd, dd. MMMM yyyy HH:mm",
                    F: "dddd, dd. MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["de-AT"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-AU"] = $.extend(true, {}, invariant, {
        name: "en-AU",
        englishName: "English (Australia)",
        nativeName: "English (Australia)",
        language: "en",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                patterns: {
                    d: "d/MM/yyyy",
                    D: "dddd, d MMMM yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, d MMMM yyyy h:mm tt",
                    F: "dddd, d MMMM yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["en-AU"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-ES"] = $.extend(true, {}, invariant, {
        name: "es-ES",
        englishName: "Spanish (Spain, International Sort)",
        nativeName: "Español (España, alfabetización internacional)",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-ES"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fr-CA"] = $.extend(true, {}, invariant, {
        name: "fr-CA",
        englishName: "French (Canada)",
        nativeName: "français (Canada)",
        language: "fr",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["(n $)","n $"],
                ',': " ",
                '.': ",",
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "d MMMM yyyy",
                    f: "d MMMM yyyy HH:mm",
                    F: "d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["fr-CA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr-Cyrl-CS"] = $.extend(true, {}, invariant, {
        name: "sr-Cyrl-CS",
        englishName: "Serbian (Cyrillic, Serbia and Montenegro (Former))",
        nativeName: "српски (Србија и Црна Гора (Претходно))",
        language: "sr-Cyrl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "Дин."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["недеља","понедељак","уторак","среда","четвртак","петак","субота"],["нед","пон","уто","сре","чет","пет","суб"],["не","по","ут","ср","че","пе","су"]],
                months: [["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""]],
                AM: null,
                PM: null,
                eras: [{"name":"н.е.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr-Cyrl-CS"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["se-FI"] = $.extend(true, {}, invariant, {
        name: "se-FI",
        englishName: "Sami, Northern (Finland)",
        nativeName: "davvisámegiella (Suopma)",
        language: "se",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sotnabeaivi","vuossárga","maŋŋebárga","gaskavahkku","duorastat","bearjadat","lávvardat"],["sotn","vuos","maŋ","gask","duor","bear","láv"],["s","m","d","g","d","b","l"]],
                months: [["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu",""],["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]],
                monthsGenitive: [["ođđajagimánu","guovvamánu","njukčamánu","cuoŋománu","miessemánu","geassemánu","suoidnemánu","borgemánu","čakčamánu","golggotmánu","skábmamánu","juovlamánu",""],["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "MMMM d\u0027. b. \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "MMMM d\u0027. b. \u0027yyyy H:mm",
                    F: "MMMM d\u0027. b. \u0027yyyy H:mm:ss",
                    M: "MMMM d\u0027. b. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["se-FI"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["quz-PE"] = $.extend(true, {}, invariant, {
        name: "quz-PE",
        englishName: "Quechua (Peru)",
        nativeName: "runasimi (Piruw)",
        language: "quz",
        numberFormat: {
            percent: {
                pattern: ["-%n","%n"]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                symbol: "S/."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["intichaw","killachaw","atipachaw","quyllurchaw","Ch\u0027 askachaw","Illapachaw","k\u0027uychichaw"],["int","kil","ati","quy","Ch\u0027","Ill","k\u0027u"],["d","k","a","m","h","b","k"]],
                months: [["Qulla puquy","Hatun puquy","Pauqar waray","ayriwa","Aymuray","Inti raymi","Anta Sitwa","Qhapaq Sitwa","Uma raymi","Kantaray","Ayamarq\u0027a","Kapaq Raymi",""],["Qul","Hat","Pau","ayr","Aym","Int","Ant","Qha","Uma","Kan","Aya","Kap",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["quz-PE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-LY"] = $.extend(true, {}, invariant, {
        name: "ar-LY",
        englishName: "Arabic (Libya)",
        nativeName: "العربية (ليبيا)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: ["$n-","$n"],
                decimals: 3,
                symbol: "د.ل.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-LY"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh-SG"] = $.extend(true, {}, invariant, {
        name: "zh-SG",
        englishName: "Chinese (Simplified, Singapore)",
        nativeName: "中文(新加坡)",
        language: "zh-CHS",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["周日","周一","周二","周三","周四","周五","周六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                patterns: {
                    d: "d/M/yyyy",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "tt h:mm",
                    T: "tt h:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 tt h:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 tt h:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["zh-SG"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["de-LU"] = $.extend(true, {}, invariant, {
        name: "de-LU",
        englishName: "German (Luxembourg)",
        nativeName: "Deutsch (Luxemburg)",
        language: "de",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So","Mo","Di","Mi","Do","Fr","Sa"],["So","Mo","Di","Mi","Do","Fr","Sa"]],
                months: [["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n. Chr.","start":null,"offset":0}],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, d. MMMM yyyy",
                    f: "dddd, d. MMMM yyyy HH:mm",
                    F: "dddd, d. MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["de-LU"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-CA"] = $.extend(true, {}, invariant, {
        name: "en-CA",
        englishName: "English (Canada)",
        nativeName: "English (Canada)",
        language: "en",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "MMMM-dd-yy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "MMMM-dd-yy h:mm tt",
                    F: "MMMM-dd-yy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["en-CA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-GT"] = $.extend(true, {}, invariant, {
        name: "es-GT",
        englishName: "Spanish (Guatemala)",
        nativeName: "Español (Guatemala)",
        language: "es",
        numberFormat: {
            currency: {
                symbol: "Q"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-GT"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fr-CH"] = $.extend(true, {}, invariant, {
        name: "fr-CH",
        englishName: "French (Switzerland)",
        nativeName: "français (Suisse)",
        language: "fr",
        numberFormat: {
            ',': "\u0027",
            percent: {
                ',': "\u0027"
            },
            currency: {
                pattern: ["$-n","$ n"],
                ',': "\u0027",
                symbol: "fr."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fr-CH"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["hr-BA"] = $.extend(true, {}, invariant, {
        name: "hr-BA",
        englishName: "Croatian (Latin, Bosnia and Herzegovina)",
        nativeName: "hrvatski (Bosna i Hercegovina)",
        language: "hr",
        numberFormat: {
            pattern: ["- n"],
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "KM"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],["ned","pon","uto","sri","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac",""],["sij","vlj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro",""]],
                monthsGenitive: [["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca",""],["sij","vlj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy.",
                    D: "d. MMMM yyyy.",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy. H:mm",
                    F: "d. MMMM yyyy. H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["hr-BA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["smj-NO"] = $.extend(true, {}, invariant, {
        name: "smj-NO",
        englishName: "Sami, Lule (Norway)",
        nativeName: "julevusámegiella (Vuodna)",
        language: "smj",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-%n","%n"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sådnåbiejvve","mánnodahka","dijstahka","gasskavahkko","duorastahka","bierjjedahka","lávvodahka"],["såd","mán","dis","gas","duor","bier","láv"],["s","m","d","g","d","b","l"]],
                months: [["ådåjakmánno","guovvamánno","sjnjuktjamánno","vuoratjismánno","moarmesmánno","biehtsemánno","sjnjilltjamánno","bårggemánno","ragátmánno","gålgådismánno","basádismánno","javllamánno",""],["ådåj","guov","snju","vuor","moar","bieh","snji","bårg","ragá","gålg","basá","javl",""]],
                monthsGenitive: [["ådåjakmáno","guovvamáno","sjnjuktjamáno","vuoratjismáno","moarmesmáno","biehtsemáno","sjnjilltjamáno","bårggemáno","ragátmáno","gålgådismáno","basádismáno","javllamáno",""],["ådåj","guov","snju","vuor","moar","bieh","snji","bårg","ragá","gålg","basá","javl",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "MMMM d\u0027. b. \u0027yyyy",
                    f: "MMMM d\u0027. b. \u0027yyyy HH:mm",
                    F: "MMMM d\u0027. b. \u0027yyyy HH:mm:ss",
                    M: "MMMM d\u0027. b. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["smj-NO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-DZ"] = $.extend(true, {}, invariant, {
        name: "ar-DZ",
        englishName: "Arabic (Algeria)",
        nativeName: "العربية (الجزائر)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "د.ج.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM, yyyy H:mm",
                    F: "dd MMMM, yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd/MM/yyyy H:mm",
                    F: "dd/MM/yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd/MMMM/yyyy H:mm",
                    F: "dd/MMMM/yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, MMMM dd, yyyy H:mm",
                    F: "dddd, MMMM dd, yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, MMMM dd, yyyy H:mm",
                    F: "dddd, MMMM dd, yyyy H:mm:ss",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, MMMM dd, yyyy H:mm",
                    F: "dddd, MMMM dd, yyyy H:mm:ss",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-DZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh-MO"] = $.extend(true, {}, invariant, {
        name: "zh-MO",
        englishName: "Chinese (Traditional, Macao S.A.R.)",
        nativeName: "中文(澳門特別行政區)",
        language: "zh-CHT",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                symbol: "MOP"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["週日","週一","週二","週三","週四","週五","週六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"公元","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["zh-MO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["de-LI"] = $.extend(true, {}, invariant, {
        name: "de-LI",
        englishName: "German (Liechtenstein)",
        nativeName: "Deutsch (Liechtenstein)",
        language: "de",
        numberFormat: {
            ',': "\u0027",
            percent: {
                pattern: ["-n%","n%"],
                ',': "\u0027"
            },
            currency: {
                pattern: ["$-n","$ n"],
                ',': "\u0027",
                symbol: "CHF"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So","Mo","Di","Mi","Do","Fr","Sa"],["So","Mo","Di","Mi","Do","Fr","Sa"]],
                months: [["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n. Chr.","start":null,"offset":0}],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, d. MMMM yyyy",
                    f: "dddd, d. MMMM yyyy HH:mm",
                    F: "dddd, d. MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["de-LI"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-NZ"] = $.extend(true, {}, invariant, {
        name: "en-NZ",
        englishName: "English (New Zealand)",
        nativeName: "English (New Zealand)",
        language: "en",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                patterns: {
                    d: "d/MM/yyyy",
                    D: "dddd, d MMMM yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, d MMMM yyyy h:mm tt",
                    F: "dddd, d MMMM yyyy h:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["en-NZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-CR"] = $.extend(true, {}, invariant, {
        name: "es-CR",
        englishName: "Spanish (Costa Rica)",
        nativeName: "Español (Costa Rica)",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                ',': ".",
                '.': ",",
                symbol: "₡"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-CR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fr-LU"] = $.extend(true, {}, invariant, {
        name: "fr-LU",
        englishName: "French (Luxembourg)",
        nativeName: "français (Luxembourg)",
        language: "fr",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fr-LU"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bs-Latn-BA"] = $.extend(true, {}, invariant, {
        name: "bs-Latn-BA",
        englishName: "Bosnian (Latin, Bosnia and Herzegovina)",
        nativeName: "bosanski (Bosna i Hercegovina)",
        language: "bs-Latn",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "KM"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],["ned","pon","uto","sri","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["bs-Latn-BA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["smj-SE"] = $.extend(true, {}, invariant, {
        name: "smj-SE",
        englishName: "Sami, Lule (Sweden)",
        nativeName: "julevusámegiella (Svierik)",
        language: "smj",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ájllek","mánnodahka","dijstahka","gasskavahkko","duorastahka","bierjjedahka","lávvodahka"],["ájl","mán","dis","gas","duor","bier","láv"],["á","m","d","g","d","b","l"]],
                months: [["ådåjakmánno","guovvamánno","sjnjuktjamánno","vuoratjismánno","moarmesmánno","biehtsemánno","sjnjilltjamánno","bårggemánno","ragátmánno","gålgådismánno","basádismánno","javllamánno",""],["ådåj","guov","snju","vuor","moar","bieh","snji","bårg","ragá","gålg","basá","javl",""]],
                monthsGenitive: [["ådåjakmáno","guovvamáno","sjnjuktjamáno","vuoratjismáno","moarmesmáno","biehtsemáno","sjnjilltjamáno","bårggemáno","ragátmáno","gålgådismáno","basádismáno","javllamáno",""],["ådåj","guov","snju","vuor","moar","bieh","snji","bårg","ragá","gålg","basá","javl",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "MMMM d\u0027. b. \u0027yyyy",
                    f: "MMMM d\u0027. b. \u0027yyyy HH:mm",
                    F: "MMMM d\u0027. b. \u0027yyyy HH:mm:ss",
                    M: "MMMM d\u0027. b. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["smj-SE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-MA"] = $.extend(true, {}, invariant, {
        name: "ar-MA",
        englishName: "Arabic (Morocco)",
        nativeName: "العربية (المملكة المغربية)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "د.م.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","ماي","يونيو","يوليوز","غشت","شتنبر","أكتوبر","نونبر","دجنبر",""],["يناير","فبراير","مارس","أبريل","ماي","يونيو","يوليوز","غشت","شتنبر","أكتوبر","نونبر","دجنبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM, yyyy H:mm",
                    F: "dd MMMM, yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd/MM/yyyy H:mm",
                    F: "dd/MM/yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd/MMMM/yyyy H:mm",
                    F: "dd/MMMM/yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, MMMM dd, yyyy H:mm",
                    F: "dddd, MMMM dd, yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, MMMM dd, yyyy H:mm",
                    F: "dddd, MMMM dd, yyyy H:mm:ss",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, MMMM dd, yyyy H:mm",
                    F: "dddd, MMMM dd, yyyy H:mm:ss",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-MA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-IE"] = $.extend(true, {}, invariant, {
        name: "en-IE",
        englishName: "English (Ireland)",
        nativeName: "English (Ireland)",
        language: "en",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                AM: null,
                PM: null,
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["en-IE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-PA"] = $.extend(true, {}, invariant, {
        name: "es-PA",
        englishName: "Spanish (Panama)",
        nativeName: "Español (Panamá)",
        language: "es",
        numberFormat: {
            currency: {
                pattern: ["($ n)","$ n"],
                symbol: "B/."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-PA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["fr-MC"] = $.extend(true, {}, invariant, {
        name: "fr-MC",
        englishName: "French (Monaco)",
        nativeName: "français (Principauté de Monaco)",
        language: "fr",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fr-MC"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr-Latn-BA"] = $.extend(true, {}, invariant, {
        name: "sr-Latn-BA",
        englishName: "Serbian (Latin, Bosnia and Herzegovina)",
        nativeName: "srpski (Bosna i Hercegovina)",
        language: "sr-Latn",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "KM"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],["ned","pon","uto","sre","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n.e.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr-Latn-BA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sma-NO"] = $.extend(true, {}, invariant, {
        name: "sma-NO",
        englishName: "Sami, Southern (Norway)",
        nativeName: "åarjelsaemiengiele (Nöörje)",
        language: "sma",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-%n","%n"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["aejlege","måanta","dæjsta","gaskevåhkoe","duarsta","bearjadahke","laavvardahke"],["aej","måa","dæj","gask","duar","bearj","laav"],["a","m","d","g","d","b","l"]],
                months: [["tsïengele","goevte","njoktje","voerhtje","suehpede","ruffie","snjaltje","mïetske","skïerede","golke","rahka","goeve",""],["tsïen","goevt","njok","voer","sueh","ruff","snja","mïet","skïer","golk","rahk","goev",""]],
                monthsGenitive: [["tsïengelen","goevten","njoktjen","voerhtjen","suehpeden","ruffien","snjaltjen","mïetsken","skïereden","golken","rahkan","goeven",""],["tsïen","goevt","njok","voer","sueh","ruff","snja","mïet","skïer","golk","rahk","goev",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "MMMM d\u0027. b. \u0027yyyy",
                    f: "MMMM d\u0027. b. \u0027yyyy HH:mm",
                    F: "MMMM d\u0027. b. \u0027yyyy HH:mm:ss",
                    M: "MMMM d\u0027. b. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sma-NO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-TN"] = $.extend(true, {}, invariant, {
        name: "ar-TN",
        englishName: "Arabic (Tunisia)",
        nativeName: "العربية (تونس)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: ["$n-","$ n"],
                decimals: 3,
                symbol: "د.ت.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM, yyyy H:mm",
                    F: "dd MMMM, yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd/MM/yyyy H:mm",
                    F: "dd/MM/yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd/MMMM/yyyy H:mm",
                    F: "dd/MMMM/yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, MMMM dd, yyyy H:mm",
                    F: "dddd, MMMM dd, yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, MMMM dd, yyyy H:mm",
                    F: "dddd, MMMM dd, yyyy H:mm:ss",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, MMMM dd, yyyy H:mm",
                    F: "dddd, MMMM dd, yyyy H:mm:ss",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-TN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-ZA"] = $.extend(true, {}, invariant, {
        name: "en-ZA",
        englishName: "English (South Africa)",
        nativeName: "English (South Africa)",
        language: "en",
        numberFormat: {
            ',': " ",
            percent: {
                pattern: ["-n%","n%"],
                ',': " "
            },
            currency: {
                pattern: ["$-n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["en-ZA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-DO"] = $.extend(true, {}, invariant, {
        name: "es-DO",
        englishName: "Spanish (Dominican Republic)",
        nativeName: "Español (República Dominicana)",
        language: "es",
        numberFormat: {
            currency: {
                symbol: "RD$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-DO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr-Cyrl-BA"] = $.extend(true, {}, invariant, {
        name: "sr-Cyrl-BA",
        englishName: "Serbian (Cyrillic, Bosnia and Herzegovina)",
        nativeName: "српски (Босна и Херцеговина)",
        language: "sr-Cyrl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "КМ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["недеља","понедељак","уторак","среда","четвртак","петак","субота"],["нед","пон","уто","сре","чет","пет","суб"],["н","п","у","с","ч","п","с"]],
                months: [["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""]],
                AM: null,
                PM: null,
                eras: [{"name":"н.е.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["sr-Cyrl-BA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sma-SE"] = $.extend(true, {}, invariant, {
        name: "sma-SE",
        englishName: "Sami, Southern (Sweden)",
        nativeName: "åarjelsaemiengiele (Sveerje)",
        language: "sma",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["aejlege","måanta","dæjsta","gaskevåhkoe","duarsta","bearjadahke","laavvardahke"],["aej","måa","dæj","gask","duar","bearj","laav"],["a","m","d","g","d","b","l"]],
                months: [["tsïengele","goevte","njoktje","voerhtje","suehpede","ruffie","snjaltje","mïetske","skïerede","golke","rahka","goeve",""],["tsïen","goevt","njok","voer","sueh","ruff","snja","mïet","skïer","golk","rahk","goev",""]],
                monthsGenitive: [["tsïengelen","goevten","njoktjen","voerhtjen","suehpeden","ruffien","snjaltjen","mïetsken","skïereden","golken","rahkan","goeven",""],["tsïen","goevt","njok","voer","sueh","ruff","snja","mïet","skïer","golk","rahk","goev",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "MMMM d\u0027. b. \u0027yyyy",
                    f: "MMMM d\u0027. b. \u0027yyyy HH:mm",
                    F: "MMMM d\u0027. b. \u0027yyyy HH:mm:ss",
                    M: "MMMM d\u0027. b. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sma-SE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-OM"] = $.extend(true, {}, invariant, {
        name: "ar-OM",
        englishName: "Arabic (Oman)",
        nativeName: "العربية (عمان)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                decimals: 3,
                symbol: "ر.ع.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-OM"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-JM"] = $.extend(true, {}, invariant, {
        name: "en-JM",
        englishName: "English (Jamaica)",
        nativeName: "English (Jamaica)",
        language: "en",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "J$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["en-JM"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-VE"] = $.extend(true, {}, invariant, {
        name: "es-VE",
        englishName: "Spanish (Bolivarian Republic of Venezuela)",
        nativeName: "Español (Republica Bolivariana de Venezuela)",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "Bs. F."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-VE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bs-Cyrl-BA"] = $.extend(true, {}, invariant, {
        name: "bs-Cyrl-BA",
        englishName: "Bosnian (Cyrillic, Bosnia and Herzegovina)",
        nativeName: "босански (Босна и Херцеговина)",
        language: "bs-Cyrl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "КМ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["недјеља","понедјељак","уторак","сриједа","четвртак","петак","субота"],["нед","пон","уто","сре","чет","пет","суб"],["н","п","у","с","ч","п","с"]],
                months: [["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""]],
                AM: null,
                PM: null,
                eras: [{"name":"н.е.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["bs-Cyrl-BA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sms-FI"] = $.extend(true, {}, invariant, {
        name: "sms-FI",
        englishName: "Sami, Skolt (Finland)",
        nativeName: "sääm´ǩiõll (Lää´ddjânnam)",
        language: "sms",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["pâ´sspei´vv","vuõssargg","mââibargg","seärad","nelljdpei´vv","piâtnâc","sue´vet"],["pâ","vu","mâ","se","ne","pi","su"],["p","v","m","s","n","p","s"]],
                months: [["ođđee´jjmään","tä´lvvmään","pâ´zzlâšttammään","njuhččmään","vue´ssmään","ǩie´ssmään","suei´nnmään","på´rǧǧmään","čõhččmään","kålggmään","skamm´mään","rosttovmään",""],["ođjm","tä´lvv","pâzl","njuh","vue","ǩie","suei","på´r","čõh","kålg","ska","rost",""]],
                monthsGenitive: [["ođđee´jjmannu","tä´lvvmannu","pâ´zzlâšttammannu","njuhččmannu","vue´ssmannu","ǩie´ssmannu","suei´nnmannu","på´rǧǧmannu","čõhččmannu","kålggmannu","skamm´mannu","rosttovmannu",""],["ođjm","tä´lvv","pâzl","njuh","vue","ǩie","suei","på´r","čõh","kålg","ska","rost",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "MMMM d\u0027. p. \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "MMMM d\u0027. p. \u0027yyyy H:mm",
                    F: "MMMM d\u0027. p. \u0027yyyy H:mm:ss",
                    M: "MMMM d\u0027. p. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sms-FI"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-YE"] = $.extend(true, {}, invariant, {
        name: "ar-YE",
        englishName: "Arabic (Yemen)",
        nativeName: "العربية (اليمن)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "ر.ي.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-YE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-029"] = $.extend(true, {}, invariant, {
        name: "en-029",
        englishName: "English (Caribbean)",
        nativeName: "English (Caribbean)",
        language: "en",
        numberFormat: {
            currency: {
                pattern: ["-$n","$n"],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["en-029"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-CO"] = $.extend(true, {}, invariant, {
        name: "es-CO",
        englishName: "Spanish (Colombia)",
        nativeName: "Español (Colombia)",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["($ n)","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-CO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr-Latn-RS"] = $.extend(true, {}, invariant, {
        name: "sr-Latn-RS",
        englishName: "Serbian (Latin, Serbia)",
        nativeName: "srpski (Srbija)",
        language: "sr-Latn",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "Din."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],["ned","pon","uto","sre","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n.e.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr-Latn-RS"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["smn-FI"] = $.extend(true, {}, invariant, {
        name: "smn-FI",
        englishName: "Sami, Inari (Finland)",
        nativeName: "sämikielâ (Suomâ)",
        language: "smn",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["pasepeivi","vuossargâ","majebargâ","koskokko","tuorâstâh","vástuppeivi","lávárdâh"],["pa","vu","ma","ko","tu","vá","lá"],["p","v","m","k","t","v","l"]],
                months: [["uđđâivemáánu","kuovâmáánu","njuhčâmáánu","cuáŋuimáánu","vyesimáánu","kesimáánu","syeinimáánu","porgemáánu","čohčâmáánu","roovvâdmáánu","skammâmáánu","juovlâmáánu",""],["uđiv","kuov","njuh","cuoŋ","vyes","kesi","syei","porg","čoh","roov","ska","juov",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "MMMM d\u0027. p. \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "MMMM d\u0027. p. \u0027yyyy H:mm",
                    F: "MMMM d\u0027. p. \u0027yyyy H:mm:ss",
                    M: "MMMM d\u0027. p. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["smn-FI"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-SY"] = $.extend(true, {}, invariant, {
        name: "ar-SY",
        englishName: "Arabic (Syria)",
        nativeName: "العربية (سوريا)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "ل.س.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-SY"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-BZ"] = $.extend(true, {}, invariant, {
        name: "en-BZ",
        englishName: "English (Belize)",
        nativeName: "English (Belize)",
        language: "en",
        numberFormat: {
            currency: {
                groupSizes: [3,0],
                symbol: "BZ$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                patterns: {
                    d: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd MMMM yyyy hh:mm tt",
                    F: "dddd, dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["en-BZ"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-PE"] = $.extend(true, {}, invariant, {
        name: "es-PE",
        englishName: "Spanish (Peru)",
        nativeName: "Español (Perú)",
        language: "es",
        numberFormat: {
            currency: {
                pattern: ["$ -n","$ n"],
                symbol: "S/."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-PE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr-Cyrl-RS"] = $.extend(true, {}, invariant, {
        name: "sr-Cyrl-RS",
        englishName: "Serbian (Cyrillic, Serbia)",
        nativeName: "српски (Србија)",
        language: "sr-Cyrl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "Дин."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["недеља","понедељак","уторак","среда","четвртак","петак","субота"],["нед","пон","уто","сре","чет","пет","суб"],["не","по","ут","ср","че","пе","су"]],
                months: [["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""]],
                AM: null,
                PM: null,
                eras: [{"name":"н.е.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr-Cyrl-RS"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-JO"] = $.extend(true, {}, invariant, {
        name: "ar-JO",
        englishName: "Arabic (Jordan)",
        nativeName: "العربية (الأردن)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: ["$n-","$ n"],
                decimals: 3,
                symbol: "د.ا.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-JO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-TT"] = $.extend(true, {}, invariant, {
        name: "en-TT",
        englishName: "English (Trinidad and Tobago)",
        nativeName: "English (Trinidad y Tobago)",
        language: "en",
        numberFormat: {
            currency: {
                groupSizes: [3,0],
                symbol: "TT$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                patterns: {
                    d: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd MMMM yyyy hh:mm tt",
                    F: "dddd, dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["en-TT"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-AR"] = $.extend(true, {}, invariant, {
        name: "es-AR",
        englishName: "Spanish (Argentina)",
        nativeName: "Español (Argentina)",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$-n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-AR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr-Latn-ME"] = $.extend(true, {}, invariant, {
        name: "sr-Latn-ME",
        englishName: "Serbian (Latin, Montenegro)",
        nativeName: "srpski (Crna Gora)",
        language: "sr-Latn",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],["ned","pon","uto","sre","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n.e.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr-Latn-ME"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-LB"] = $.extend(true, {}, invariant, {
        name: "ar-LB",
        englishName: "Arabic (Lebanon)",
        nativeName: "العربية (لبنان)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "ل.ل.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 1,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedEnglish: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedEnglish",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["أ","ا","ث","أ","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 1,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-LB"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-ZW"] = $.extend(true, {}, invariant, {
        name: "en-ZW",
        englishName: "English (Zimbabwe)",
        nativeName: "English (Zimbabwe)",
        language: "en",
        numberFormat: {
            currency: {
                symbol: "Z$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["en-ZW"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-EC"] = $.extend(true, {}, invariant, {
        name: "es-EC",
        englishName: "Spanish (Ecuador)",
        nativeName: "Español (Ecuador)",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["($ n)","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-EC"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr-Cyrl-ME"] = $.extend(true, {}, invariant, {
        name: "sr-Cyrl-ME",
        englishName: "Serbian (Cyrillic, Montenegro)",
        nativeName: "српски (Црна Гора)",
        language: "sr-Cyrl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["недеља","понедељак","уторак","среда","четвртак","петак","субота"],["нед","пон","уто","сре","чет","пет","суб"],["не","по","ут","ср","че","пе","су"]],
                months: [["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""]],
                AM: null,
                PM: null,
                eras: [{"name":"н.е.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr-Cyrl-ME"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-KW"] = $.extend(true, {}, invariant, {
        name: "ar-KW",
        englishName: "Arabic (Kuwait)",
        nativeName: "العربية (الكويت)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: ["$n-","$ n"],
                decimals: 3,
                symbol: "د.ك.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-KW"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-PH"] = $.extend(true, {}, invariant, {
        name: "en-PH",
        englishName: "English (Republic of the Philippines)",
        nativeName: "English (Philippines)",
        language: "en",
        numberFormat: {
            currency: {
                symbol: "Php"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["en-PH"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-CL"] = $.extend(true, {}, invariant, {
        name: "es-CL",
        englishName: "Spanish (Chile)",
        nativeName: "Español (Chile)",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-$ n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-CL"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-AE"] = $.extend(true, {}, invariant, {
        name: "ar-AE",
        englishName: "Arabic (U.A.E.)",
        nativeName: "العربية (الإمارات العربية المتحدة)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "د.إ.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-AE"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-UY"] = $.extend(true, {}, invariant, {
        name: "es-UY",
        englishName: "Spanish (Uruguay)",
        nativeName: "Español (Uruguay)",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["($ n)","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$U"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-UY"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-BH"] = $.extend(true, {}, invariant, {
        name: "ar-BH",
        englishName: "Arabic (Bahrain)",
        nativeName: "العربية (البحرين)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: ["$n-","$ n"],
                decimals: 3,
                symbol: "د.ب.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-BH"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-PY"] = $.extend(true, {}, invariant, {
        name: "es-PY",
        englishName: "Spanish (Paraguay)",
        nativeName: "Español (Paraguay)",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["($ n)","$ n"],
                ',': ".",
                '.': ",",
                symbol: "Gs"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-PY"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ar-QA"] = $.extend(true, {}, invariant, {
        name: "ar-QA",
        englishName: "Arabic (Qatar)",
        nativeName: "العربية (قطر)",
        language: "ar",
        isRTL: true,
        numberFormat: {
            pattern: ["n-"],
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "ر.ق.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            UmAlQura: $.extend(true, {}, standard, {
                name: "UmAlQura",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MMMM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MMMM/yyyy hh:mm tt",
                    F: "dd/MMMM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    _yearInfo: [
                        // MonthLengthFlags, Gregorian Date
                        [746, -2198707200000],
                        [1769, -2168121600000],
                        [3794, -2137449600000],
                        [3748, -2106777600000],
                        [3402, -2076192000000],
                        [2710, -2045606400000],
                        [1334, -2015020800000],
                        [2741, -1984435200000],
                        [3498, -1953763200000],
                        [2980, -1923091200000],
                        [2889, -1892505600000],
                        [2707, -1861920000000],
                        [1323, -1831334400000],
                        [2647, -1800748800000],
                        [1206, -1770076800000],
                        [2741, -1739491200000],
                        [1450, -1708819200000],
                        [3413, -1678233600000],
                        [3370, -1647561600000],
                        [2646, -1616976000000],
                        [1198, -1586390400000],
                        [2397, -1555804800000],
                        [748, -1525132800000],
                        [1749, -1494547200000],
                        [1706, -1463875200000],
                        [1365, -1433289600000],
                        [1195, -1402704000000],
                        [2395, -1372118400000],
                        [698, -1341446400000],
                        [1397, -1310860800000],
                        [2994, -1280188800000],
                        [1892, -1249516800000],
                        [1865, -1218931200000],
                        [1621, -1188345600000],
                        [683, -1157760000000],
                        [1371, -1127174400000],
                        [2778, -1096502400000],
                        [1748, -1065830400000],
                        [3785, -1035244800000],
                        [3474, -1004572800000],
                        [3365, -973987200000],
                        [2637, -943401600000],
                        [685, -912816000000],
                        [1389, -882230400000],
                        [2922, -851558400000],
                        [2898, -820886400000],
                        [2725, -790300800000],
                        [2635, -759715200000],
                        [1175, -729129600000],
                        [2359, -698544000000],
                        [694, -667872000000],
                        [1397, -637286400000],
                        [3434, -606614400000],
                        [3410, -575942400000],
                        [2710, -545356800000],
                        [2349, -514771200000],
                        [605, -484185600000],
                        [1245, -453600000000],
                        [2778, -422928000000],
                        [1492, -392256000000],
                        [3497, -361670400000],
                        [3410, -330998400000],
                        [2730, -300412800000],
                        [1238, -269827200000],
                        [2486, -239241600000],
                        [884, -208569600000],
                        [1897, -177984000000],
                        [1874, -147312000000],
                        [1701, -116726400000],
                        [1355, -86140800000],
                        [2731, -55555200000],
                        [1370, -24883200000],
                        [2773, 5702400000],
                        [3538, 36374400000],
                        [3492, 67046400000],
                        [3401, 97632000000],
                        [2709, 128217600000],
                        [1325, 158803200000],
                        [2653, 189388800000],
                        [1370, 220060800000],
                        [2773, 250646400000],
                        [1706, 281318400000],
                        [1685, 311904000000],
                        [1323, 342489600000],
                        [2647, 373075200000],
                        [1198, 403747200000],
                        [2422, 434332800000],
                        [1388, 465004800000],
                        [2901, 495590400000],
                        [2730, 526262400000],
                        [2645, 556848000000],
                        [1197, 587433600000],
                        [2397, 618019200000],
                        [730, 648691200000],
                        [1497, 679276800000],
                        [3506, 709948800000],
                        [2980, 740620800000],
                        [2890, 771206400000],
                        [2645, 801792000000],
                        [693, 832377600000],
                        [1397, 862963200000],
                        [2922, 893635200000],
                        [3026, 924307200000],
                        [3012, 954979200000],
                        [2953, 985564800000],
                        [2709, 1016150400000],
                        [1325, 1046736000000],
                        [1453, 1077321600000],
                        [2922, 1107993600000],
                        [1748, 1138665600000],
                        [3529, 1169251200000],
                        [3474, 1199923200000],
                        [2726, 1230508800000],
                        [2390, 1261094400000],
                        [686, 1291680000000],
                        [1389, 1322265600000],
                        [874, 1352937600000],
                        [2901, 1383523200000],
                        [2730, 1414195200000],
                        [2381, 1444780800000],
                        [1181, 1475366400000],
                        [2397, 1505952000000],
                        [698, 1536624000000],
                        [1461, 1567209600000],
                        [1450, 1597881600000],
                        [3413, 1628467200000],
                        [2714, 1659139200000],
                        [2350, 1689724800000],
                        [622, 1720310400000],
                        [1373, 1750896000000],
                        [2778, 1781568000000],
                        [1748, 1812240000000],
                        [1701, 1842825600000],
                        [0, 1873411200000]
                    ],
                    minDate: -2198707200000,
                    maxDate: 1873411199999,
                    toGregorian: function(hyear, hmonth, hday) {
                        var days = hday - 1,
                            gyear = hyear - 1318;
                        if (gyear < 0 || gyear >= this._yearInfo.length) return null;
                        var info = this._yearInfo[gyear],
                            gdate = new Date(info[1]),
                            monthLength = info[0];
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the gregorian date in the same timezone,
                        // not what the gregorian date was at GMT time, so we adjust for the offset.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        for (var i = 0; i < hmonth; i++) {
                            days += 29 + (monthLength & 1);
                            monthLength = monthLength >> 1;
                        }
                        gdate.setDate(gdate.getDate() + days);
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        // Date's ticks in javascript are always from the GMT time,
                        // but we are interested in the hijri date in the same timezone,
                        // not what the hijri date was at GMT time, so we adjust for the offset.
                        var ticks = gdate - gdate.getTimezoneOffset() * 60000;
                        if (ticks < this.minDate || ticks > this.maxDate) return null;
                        var hyear = 0,
                            hmonth = 1;
                        // find the earliest gregorian date in the array that is greater than or equal to the given date
                        while (ticks > this._yearInfo[++hyear][1]) { }
                        if (ticks !== this._yearInfo[hyear][1]) {
                            hyear--;
                        }
                        var info = this._yearInfo[hyear],
                            // how many days has it been since the date we found in the array?
                            // 86400000 = ticks per day
                            days = Math.floor((ticks - info[1]) / 86400000),
                            monthLength = info[0];
                        hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N
                        // now increment day/month based on the total days, considering
                        // how many days are in each month. We cannot run past the year
                        // mark since we would have found a different array entry in that case.
                        var daysInMonth = 29 + (monthLength & 1);
                        while (days >= daysInMonth) {
                            days -= daysInMonth;
                            monthLength = monthLength >> 1;
                            daysInMonth = 29 + (monthLength & 1);
                            hmonth++;
                        }
                        // remaining days is less than is in one month, thus is the day of the month we landed on
                        // hmonth-1 because in javascript months are zero based, stay consistent with that.
                        return [hyear, hmonth - 1, days + 1];
                    }
                }
            }),
            Hijri: $.extend(true, {}, standard, {
                name: "Hijri",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""],["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"بعد الهجرة","start":null,"offset":0}],
                twoDigitYearMax: 1451,
                patterns: {
                    d: "dd/MM/yy",
                    D: "dd/MM/yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd/MM/yyyy hh:mm tt",
                    F: "dd/MM/yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                },
                convert: {
                    // Adapted to Script from System.Globalization.HijriCalendar
                    ticks1970: 62135596800000,
                    // number of days leading up to each month
                    monthDays: [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],
                    minDate: -42521673600000,
                    maxDate: 253402300799999,
                    // The number of days to add or subtract from the calendar to accommodate the variances
                    // in the start and the end of Ramadan and to accommodate the date difference between
                    // countries/regions. May be dynamically adjusted based on user preference, but should
                    // remain in the range of -2 to 2, inclusive.
                    hijriAdjustment: 0,
                    toGregorian: function(hyear, hmonth, hday) {
                        var daysSinceJan0101 = this.daysToYear(hyear) + this.monthDays[hmonth] + hday - 1 - this.hijriAdjustment;
                        // 86400000 = ticks per day
                        var gdate = new Date(daysSinceJan0101 * 86400000 - this.ticks1970);
                        // adjust for timezone, because we are interested in the gregorian date for the same timezone
                        // but ticks in javascript is always from GMT, unlike the server were ticks counts from the base
                        // date in the current timezone.
                        gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());
                        return gdate;
                    },
                    fromGregorian: function(gdate) {
                        if ((gdate < this.minDate) || (gdate > this.maxDate)) return null;
                        var ticks = this.ticks1970 + (gdate-0) - gdate.getTimezoneOffset() * 60000,
                            daysSinceJan0101 = Math.floor(ticks / 86400000) + 1 + this.hijriAdjustment;
                        // very particular formula determined by someone smart, adapted from the server-side implementation.
                        // it approximates the hijri year.
                        var hday, hmonth, hyear = Math.floor(((daysSinceJan0101 - 227013) * 30) / 10631) + 1,
                            absDays = this.daysToYear(hyear),
                            daysInYear = this.isLeapYear(hyear) ? 355 : 354;
                        // hyear is just approximate, it may need adjustment up or down by 1.
                        if (daysSinceJan0101 < absDays) {
                            hyear--;
                            absDays -= daysInYear;
                        }
                        else if (daysSinceJan0101 === absDays) {
                            hyear--;
                            absDays = this.daysToYear(hyear);
                        }
                        else {
                            if (daysSinceJan0101 > (absDays + daysInYear)) {
                                absDays += daysInYear;
                                hyear++;
                            }
                        }
                        // determine month by looking at how many days into the hyear we are
                        // monthDays contains the number of days up to each month.
                        hmonth = 0;
                        var daysIntoYear = daysSinceJan0101 - absDays;
                        while (hmonth <= 11 && daysIntoYear > this.monthDays[hmonth]) {
                            hmonth++;
                        }
                        hmonth--;
                        hday = daysIntoYear - this.monthDays[hmonth];
                        return [hyear, hmonth, hday];
                    },
                    daysToYear: function(year) {
                        // calculates how many days since Jan 1, 0001
                        var yearsToYear30 = Math.floor((year - 1) / 30) * 30,
                            yearsInto30 = year - yearsToYear30 - 1,
                            days = Math.floor((yearsToYear30 * 10631) / 30) + 227013;
                        while (yearsInto30 > 0) {
                            days += (this.isLeapYear(yearsInto30) ? 355 : 354);
                            yearsInto30--;
                        }
                        return days;
                    },
                    isLeapYear: function(year) {
                        return ((((year * 11) + 14) % 30) < 11);
                    }
                }
            }),
            Gregorian_MiddleEastFrench: $.extend(true, {}, standard, {
                name: "Gregorian_MiddleEastFrench",
                firstDay: 6,
                days: [["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["di","lu","ma","me","je","ve","sa"]],
                months: [["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",""],["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"ap. J.-C.","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_Arabic: $.extend(true, {}, standard, {
                name: "Gregorian_Arabic",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            }),
            Gregorian_TransliteratedFrench: $.extend(true, {}, standard, {
                name: "Gregorian_TransliteratedFrench",
                firstDay: 6,
                days: [["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],["ح","ن","ث","ر","خ","ج","س"]],
                months: [["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""],["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]],
                AM: ["ص","ص","ص"],
                PM: ["م","م","م"],
                eras: [{"name":"م","start":null,"offset":0}],
                patterns: {
                    D: "dddd, MMMM dd, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy hh:mm tt",
                    F: "dddd, MMMM dd, yyyy hh:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ar-QA"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-IN"] = $.extend(true, {}, invariant, {
        name: "en-IN",
        englishName: "English (India)",
        nativeName: "English (India)",
        language: "en",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "Rs."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["en-IN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-BO"] = $.extend(true, {}, invariant, {
        name: "es-BO",
        englishName: "Spanish (Bolivia)",
        nativeName: "Español (Bolivia)",
        language: "es",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["($ n)","$ n"],
                ',': ".",
                '.': ",",
                symbol: "$b"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-BO"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-MY"] = $.extend(true, {}, invariant, {
        name: "en-MY",
        englishName: "English (Malaysia)",
        nativeName: "English (Malaysia)",
        language: "en",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                symbol: "RM"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["S","M","T","W","T","F","S"]],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, d MMMM, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, d MMMM, yyyy h:mm tt",
                    F: "dddd, d MMMM, yyyy h:mm:ss tt",
                    M: "d MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["en-MY"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-SV"] = $.extend(true, {}, invariant, {
        name: "es-SV",
        englishName: "Spanish (El Salvador)",
        nativeName: "Español (El Salvador)",
        language: "es",
        numberFormat: {
            currency: {
                groupSizes: [3,0],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-SV"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["en-SG"] = $.extend(true, {}, invariant, {
        name: "en-SG",
        englishName: "English (Singapore)",
        nativeName: "English (Singapore)",
        language: "en",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["S","M","T","W","T","F","S"]],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, d MMMM, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, d MMMM, yyyy h:mm tt",
                    F: "dddd, d MMMM, yyyy h:mm:ss tt",
                    M: "d MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["en-SG"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-HN"] = $.extend(true, {}, invariant, {
        name: "es-HN",
        englishName: "Spanish (Honduras)",
        nativeName: "Español (Honduras)",
        language: "es",
        numberFormat: {
            currency: {
                pattern: ["$ -n","$ n"],
                groupSizes: [3,0],
                symbol: "L."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-HN"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-NI"] = $.extend(true, {}, invariant, {
        name: "es-NI",
        englishName: "Spanish (Nicaragua)",
        nativeName: "Español (Nicaragua)",
        language: "es",
        numberFormat: {
            currency: {
                pattern: ["($ n)","$ n"],
                groupSizes: [3,0],
                symbol: "C$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-NI"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-PR"] = $.extend(true, {}, invariant, {
        name: "es-PR",
        englishName: "Spanish (Puerto Rico)",
        nativeName: "Español (Puerto Rico)",
        language: "es",
        numberFormat: {
            currency: {
                pattern: ["($ n)","$ n"],
                groupSizes: [3,0],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sá"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: ["a.m.","a.m.","A.M."],
                PM: ["p.m.","p.m.","P.M."],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-PR"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["es-US"] = $.extend(true, {}, invariant, {
        name: "es-US",
        englishName: "Spanish (United States)",
        nativeName: "Español (Estados Unidos)",
        language: "es",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0]
            },
            currency: {
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"],["do","lu","ma","mi","ju","vi","sa"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    M: "dd\u0027 de \u0027MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    }, cultures["es-US"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bs-Cyrl"] = $.extend(true, {}, invariant, {
        name: "bs-Cyrl",
        englishName: "Bosnian (Cyrillic)",
        nativeName: "босански",
        language: "bs-Cyrl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "КМ"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["недјеља","понедјељак","уторак","сриједа","четвртак","петак","субота"],["нед","пон","уто","сре","чет","пет","суб"],["н","п","у","с","ч","п","с"]],
                months: [["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""]],
                AM: null,
                PM: null,
                eras: [{"name":"н.е.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["bs-Cyrl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bs-Latn"] = $.extend(true, {}, invariant, {
        name: "bs-Latn",
        englishName: "Bosnian (Latin)",
        nativeName: "bosanski",
        language: "bs-Latn",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "KM"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],["ned","pon","uto","sri","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["bs-Latn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr-Cyrl"] = $.extend(true, {}, invariant, {
        name: "sr-Cyrl",
        englishName: "Serbian (Cyrillic)",
        nativeName: "српски",
        language: "sr-Cyrl",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "Дин."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["недеља","понедељак","уторак","среда","четвртак","петак","субота"],["нед","пон","уто","сре","чет","пет","суб"],["не","по","ут","ср","че","пе","су"]],
                months: [["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар",""],["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""]],
                AM: null,
                PM: null,
                eras: [{"name":"н.е.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr-Cyrl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr-Latn"] = $.extend(true, {}, invariant, {
        name: "sr-Latn",
        englishName: "Serbian (Latin)",
        nativeName: "srpski",
        language: "sr-Latn",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "Din."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],["ned","pon","uto","sre","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n.e.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr-Latn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["smn"] = $.extend(true, {}, invariant, {
        name: "smn",
        englishName: "Sami (Inari)",
        nativeName: "sämikielâ",
        language: "smn",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["pasepeivi","vuossargâ","majebargâ","koskokko","tuorâstâh","vástuppeivi","lávárdâh"],["pa","vu","ma","ko","tu","vá","lá"],["p","v","m","k","t","v","l"]],
                months: [["uđđâivemáánu","kuovâmáánu","njuhčâmáánu","cuáŋuimáánu","vyesimáánu","kesimáánu","syeinimáánu","porgemáánu","čohčâmáánu","roovvâdmáánu","skammâmáánu","juovlâmáánu",""],["uđiv","kuov","njuh","cuoŋ","vyes","kesi","syei","porg","čoh","roov","ska","juov",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "MMMM d\u0027. p. \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "MMMM d\u0027. p. \u0027yyyy H:mm",
                    F: "MMMM d\u0027. p. \u0027yyyy H:mm:ss",
                    M: "MMMM d\u0027. p. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["smn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["az-Cyrl"] = $.extend(true, {}, invariant, {
        name: "az-Cyrl",
        englishName: "Azeri (Cyrillic)",
        nativeName: "Азәрбајҹан дили",
        language: "az-Cyrl",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "ман."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Базар","Базар ертәси","Чәршәнбә ахшамы","Чәршәнбә","Ҹүмә ахшамы","Ҹүмә","Шәнбә"],["Б","Бе","Ча","Ч","Ҹа","Ҹ","Ш"],["Б","Бе","Ча","Ч","Ҹа","Ҹ","Ш"]],
                months: [["Јанвар","Феврал","Март","Апрел","Мај","Ијун","Ијул","Август","Сентјабр","Октјабр","Нојабр","Декабр",""],["Јан","Фев","Мар","Апр","Мај","Ијун","Ијул","Авг","Сен","Окт","Ноя","Дек",""]],
                monthsGenitive: [["јанвар","феврал","март","апрел","мај","ијун","ијул","август","сентјабр","октјабр","нојабр","декабр",""],["Јан","Фев","Мар","Апр","мая","ијун","ијул","Авг","Сен","Окт","Ноя","Дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["az-Cyrl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sms"] = $.extend(true, {}, invariant, {
        name: "sms",
        englishName: "Sami (Skolt)",
        nativeName: "sääm´ǩiõll",
        language: "sms",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["pâ´sspei´vv","vuõssargg","mââibargg","seärad","nelljdpei´vv","piâtnâc","sue´vet"],["pâ","vu","mâ","se","ne","pi","su"],["p","v","m","s","n","p","s"]],
                months: [["ođđee´jjmään","tä´lvvmään","pâ´zzlâšttammään","njuhččmään","vue´ssmään","ǩie´ssmään","suei´nnmään","på´rǧǧmään","čõhččmään","kålggmään","skamm´mään","rosttovmään",""],["ođjm","tä´lvv","pâzl","njuh","vue","ǩie","suei","på´r","čõh","kålg","ska","rost",""]],
                monthsGenitive: [["ođđee´jjmannu","tä´lvvmannu","pâ´zzlâšttammannu","njuhččmannu","vue´ssmannu","ǩie´ssmannu","suei´nnmannu","på´rǧǧmannu","čõhččmannu","kålggmannu","skamm´mannu","rosttovmannu",""],["ođjm","tä´lvv","pâzl","njuh","vue","ǩie","suei","på´r","čõh","kålg","ska","rost",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "MMMM d\u0027. p. \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "MMMM d\u0027. p. \u0027yyyy H:mm",
                    F: "MMMM d\u0027. p. \u0027yyyy H:mm:ss",
                    M: "MMMM d\u0027. p. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sms"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh"] = $.extend(true, {}, invariant, {
        name: "zh",
        englishName: "Chinese",
        nativeName: "中文",
        language: "zh",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$n"],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["周日","周一","周二","周三","周四","周五","周六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"公元","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["zh"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["nn"] = $.extend(true, {}, invariant, {
        name: "nn",
        englishName: "Norwegian (Nynorsk)",
        nativeName: "norsk (nynorsk)",
        language: "nn",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["søndag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],["sø","må","ty","on","to","fr","la"],["sø","må","ty","on","to","fr","la"]],
                months: [["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["nn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["bs"] = $.extend(true, {}, invariant, {
        name: "bs",
        englishName: "Bosnian",
        nativeName: "bosanski",
        language: "bs",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "KM"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],["ned","pon","uto","sri","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["bs"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["az-Latn"] = $.extend(true, {}, invariant, {
        name: "az-Latn",
        englishName: "Azeri (Latin)",
        nativeName: "Azərbaycan­ılı",
        language: "az-Latn",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "man."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"],["B","Be","Ça","Ç","Ca","C","Ş"],["B","Be","Ça","Ç","Ca","C","Ş"]],
                months: [["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr",""],["Yan","Fev","Mar","Apr","May","İyun","İyul","Avg","Sen","Okt","Noy","Dek",""]],
                monthsGenitive: [["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""],["Yan","Fev","Mar","Apr","May","İyun","İyul","Avg","Sen","Okt","Noy","Dek",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["az-Latn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sma"] = $.extend(true, {}, invariant, {
        name: "sma",
        englishName: "Sami (Southern)",
        nativeName: "åarjelsaemiengiele",
        language: "sma",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["aejlege","måanta","dæjsta","gaskevåhkoe","duarsta","bearjadahke","laavvardahke"],["aej","måa","dæj","gask","duar","bearj","laav"],["a","m","d","g","d","b","l"]],
                months: [["tsïengele","goevte","njoktje","voerhtje","suehpede","ruffie","snjaltje","mïetske","skïerede","golke","rahka","goeve",""],["tsïen","goevt","njok","voer","sueh","ruff","snja","mïet","skïer","golk","rahk","goev",""]],
                monthsGenitive: [["tsïengelen","goevten","njoktjen","voerhtjen","suehpeden","ruffien","snjaltjen","mïetsken","skïereden","golken","rahkan","goeven",""],["tsïen","goevt","njok","voer","sueh","ruff","snja","mïet","skïer","golk","rahk","goev",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "MMMM d\u0027. b. \u0027yyyy",
                    f: "MMMM d\u0027. b. \u0027yyyy HH:mm",
                    F: "MMMM d\u0027. b. \u0027yyyy HH:mm:ss",
                    M: "MMMM d\u0027. b. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sma"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["uz-Cyrl"] = $.extend(true, {}, invariant, {
        name: "uz-Cyrl",
        englishName: "Uzbek (Cyrillic)",
        nativeName: "Ўзбек",
        language: "uz-Cyrl",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "сўм"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["якшанба","душанба","сешанба","чоршанба","пайшанба","жума","шанба"],["якш","дш","сш","чш","пш","ж","ш"],["я","д","с","ч","п","ж","ш"]],
                months: [["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                monthsGenitive: [["январ","феврал","март","апрел","май","июн","июл","август","сентябр","октябр","ноябр","декабр",""],["Янв","Фев","Мар","Апр","мая","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "yyyy \u0027йил\u0027 d-MMMM",
                    f: "yyyy \u0027йил\u0027 d-MMMM HH:mm",
                    F: "yyyy \u0027йил\u0027 d-MMMM HH:mm:ss",
                    M: "d-MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["uz-Cyrl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mn-Cyrl"] = $.extend(true, {}, invariant, {
        name: "mn-Cyrl",
        englishName: "Mongolian (Cyrillic)",
        nativeName: "Монгол хэл",
        language: "mn-Cyrl",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n$","n$"],
                ',': " ",
                '.': ",",
                symbol: "₮"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"],["Ня","Да","Мя","Лх","Пү","Ба","Бя"],["Ня","Да","Мя","Лх","Пү","Ба","Бя"]],
                months: [["1 дүгээр сар","2 дугаар сар","3 дугаар сар","4 дүгээр сар","5 дугаар сар","6 дугаар сар","7 дугаар сар","8 дугаар сар","9 дүгээр сар","10 дугаар сар","11 дүгээр сар","12 дугаар сар",""],["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII",""]],
                monthsGenitive: [["1 дүгээр сарын","2 дугаар сарын","3 дугаар сарын","4 дүгээр сарын","5 дугаар сарын","6 дугаар сарын","7 дугаар сарын","8 дугаар сарын","9 дүгээр сарын","10 дугаар сарын","11 дүгээр сарын","12 дугаар сарын",""],["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yy.MM.dd",
                    D: "yyyy \u0027оны\u0027 MMMM d",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy \u0027оны\u0027 MMMM d H:mm",
                    F: "yyyy \u0027оны\u0027 MMMM d H:mm:ss",
                    M: "d MMMM",
                    Y: "yyyy \u0027он\u0027 MMMM"
                }
            })
        }
    }, cultures["mn-Cyrl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["iu-Cans"] = $.extend(true, {}, invariant, {
        name: "iu-Cans",
        englishName: "Inuktitut (Syllabics)",
        nativeName: "ᐃᓄᒃᑎᑐᑦ",
        language: "iu-Cans",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                groupSizes: [3,0],
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["ᓈᑦᑏᖑᔭ","ᓇᒡᒐᔾᔭᐅ","ᐊᐃᑉᐱᖅ","ᐱᖓᑦᓯᖅ","ᓯᑕᒻᒥᖅ","ᑕᓪᓕᕐᒥᖅ","ᓯᕙᑖᕐᕕᒃ"],["ᓈᑦᑏ","ᓇᒡᒐ","ᐊᐃᑉᐱ","ᐱᖓᑦᓯ","ᓯᑕ","ᑕᓪᓕ","ᓯᕙᑖᕐᕕᒃ"],["ᓈ","ᓇ","ᐊ","ᐱ","ᓯ","ᑕ","ᓯ"]],
                months: [["ᔮᓐᓄᐊᕆ","ᕖᕝᕗᐊᕆ","ᒫᑦᓯ","ᐄᐳᕆ","ᒪᐃ","ᔫᓂ","ᔪᓚᐃ","ᐋᒡᒌᓯ","ᓯᑎᐱᕆ","ᐅᑐᐱᕆ","ᓄᕕᐱᕆ","ᑎᓯᐱᕆ",""],["ᔮᓐᓄ","ᕖᕝᕗ","ᒫᑦᓯ","ᐄᐳᕆ","ᒪᐃ","ᔫᓂ","ᔪᓚᐃ","ᐋᒡᒌ","ᓯᑎᐱ","ᐅᑐᐱ","ᓄᕕᐱ","ᑎᓯᐱ",""]],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd,MMMM dd,yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd,MMMM dd,yyyy h:mm tt",
                    F: "dddd,MMMM dd,yyyy h:mm:ss tt",
                    Y: "MMMM,yyyy"
                }
            })
        }
    }, cultures["iu-Cans"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh-Hant"] = $.extend(true, {}, invariant, {
        name: "zh-Hant",
        englishName: "Chinese (Traditional)",
        nativeName: "中文(繁體)",
        language: "zh-Hant",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                symbol: "HK$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["週日","週一","週二","週三","週四","週五","週六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"公元","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["zh-Hant"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["nb"] = $.extend(true, {}, invariant, {
        name: "nb",
        englishName: "Norwegian (Bokmål)",
        nativeName: "norsk (bokmål)",
        language: "nb",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],["sø","ma","ti","on","to","fr","lø"],["sø","ma","ti","on","to","fr","lø"]],
                months: [["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d. MMMM yyyy",
                    f: "d. MMMM yyyy HH:mm",
                    F: "d. MMMM yyyy HH:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["nb"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["sr"] = $.extend(true, {}, invariant, {
        name: "sr",
        englishName: "Serbian",
        nativeName: "srpski",
        language: "sr",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "Din."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],["ned","pon","uto","sre","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n.e.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tg-Cyrl"] = $.extend(true, {}, invariant, {
        name: "tg-Cyrl",
        englishName: "Tajik (Cyrillic)",
        nativeName: "Тоҷикӣ",
        language: "tg-Cyrl",
        numberFormat: {
            ',': " ",
            '.': ",",
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                groupSizes: [3,0],
                ',': " ",
                '.': ";",
                symbol: "т.р."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                days: [["Яш","Душанбе","Сешанбе","Чоршанбе","Панҷшанбе","Ҷумъа","Шанбе"],["Яш","Дш","Сш","Чш","Пш","Ҷм","Шн"],["Яш","Дш","Сш","Чш","Пш","Ҷм","Шн"]],
                months: [["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                monthsGenitive: [["январи","феврали","марти","апрели","маи","июни","июли","августи","сентябри","октябри","ноябри","декабри",""],["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd.MM.yy",
                    D: "d MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d MMMM yyyy H:mm",
                    F: "d MMMM yyyy H:mm:ss",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["tg-Cyrl"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["dsb"] = $.extend(true, {}, invariant, {
        name: "dsb",
        englishName: "Lower Sorbian",
        nativeName: "dolnoserbšćina",
        language: "dsb",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ". ",
                firstDay: 1,
                days: [["njeźela","ponjeźele","wałtora","srjoda","stwortk","pětk","sobota"],["nje","pon","wał","srj","stw","pět","sob"],["n","p","w","s","s","p","s"]],
                months: [["januar","februar","měrc","apryl","maj","junij","julij","awgust","september","oktober","nowember","december",""],["jan","feb","měr","apr","maj","jun","jul","awg","sep","okt","now","dec",""]],
                monthsGenitive: [["januara","februara","měrca","apryla","maja","junija","julija","awgusta","septembra","oktobra","nowembra","decembra",""],["jan","feb","měr","apr","maj","jun","jul","awg","sep","okt","now","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"po Chr.","start":null,"offset":0}],
                patterns: {
                    d: "d. M. yyyy",
                    D: "dddd, \u0027dnja\u0027 d. MMMM yyyy",
                    t: "H.mm \u0027goź.\u0027",
                    T: "H:mm:ss",
                    f: "dddd, \u0027dnja\u0027 d. MMMM yyyy H.mm \u0027goź.\u0027",
                    F: "dddd, \u0027dnja\u0027 d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["dsb"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["smj"] = $.extend(true, {}, invariant, {
        name: "smj",
        englishName: "Sami (Lule)",
        nativeName: "julevusámegiella",
        language: "smj",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "kr"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 1,
                days: [["ájllek","mánnodahka","dijstahka","gasskavahkko","duorastahka","bierjjedahka","lávvodahka"],["ájl","mán","dis","gas","duor","bier","láv"],["á","m","d","g","d","b","l"]],
                months: [["ådåjakmánno","guovvamánno","sjnjuktjamánno","vuoratjismánno","moarmesmánno","biehtsemánno","sjnjilltjamánno","bårggemánno","ragátmánno","gålgådismánno","basádismánno","javllamánno",""],["ådåj","guov","snju","vuor","moar","bieh","snji","bårg","ragá","gålg","basá","javl",""]],
                monthsGenitive: [["ådåjakmáno","guovvamáno","sjnjuktjamáno","vuoratjismáno","moarmesmáno","biehtsemáno","sjnjilltjamáno","bårggemáno","ragátmáno","gålgådismáno","basádismáno","javllamáno",""],["ådåj","guov","snju","vuor","moar","bieh","snji","bårg","ragá","gålg","basá","javl",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "MMMM d\u0027. b. \u0027yyyy",
                    f: "MMMM d\u0027. b. \u0027yyyy HH:mm",
                    F: "MMMM d\u0027. b. \u0027yyyy HH:mm:ss",
                    M: "MMMM d\u0027. b. \u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["smj"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["uz-Latn"] = $.extend(true, {}, invariant, {
        name: "uz-Latn",
        englishName: "Uzbek (Latin)",
        nativeName: "U\u0027zbek",
        language: "uz-Latn",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                decimals: 0,
                ',': " ",
                '.': ",",
                symbol: "so\u0027m"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"],["yak.","dsh.","sesh.","chr.","psh.","jm.","sh."],["ya","d","s","ch","p","j","sh"]],
                months: [["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""],["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd/MM yyyy",
                    D: "yyyy \u0027yil\u0027 d-MMMM",
                    f: "yyyy \u0027yil\u0027 d-MMMM HH:mm",
                    F: "yyyy \u0027yil\u0027 d-MMMM HH:mm:ss",
                    M: "d-MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["uz-Latn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["mn-Mong"] = $.extend(true, {}, invariant, {
        name: "mn-Mong",
        englishName: "Mongolian (Traditional Mongolian)",
        nativeName: "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ",
        language: "mn-Mong",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,0]
            },
            currency: {
                pattern: ["$-n","$n"],
                groupSizes: [3,0],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["ᠭᠠᠷᠠᠭ ᠤᠨ ᠡᠳᠦᠷ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠨᠢᠭᠡᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠬᠣᠶᠠᠷ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠭᠤᠷᠪᠠᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠳᠥᠷᠪᠡᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠲᠠᠪᠤᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ"],["ᠭᠠᠷᠠᠭ ᠤᠨ ᠡᠳᠦᠷ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠨᠢᠭᠡᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠬᠣᠶᠠᠷ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠭᠤᠷᠪᠠᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠳᠥᠷᠪᠡᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠲᠠᠪᠤᠨ","ᠭᠠᠷᠠᠭ ᠤᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ"],["ᠡ‍","ᠨᠢ‍","ᠬᠣ‍","ᠭᠤ‍","ᠳᠥ‍","ᠲᠠ‍","ᠵᠢ‍"]],
                months: [["ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠦᠷᠪᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠵᠢᠷᠭᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠤᠯᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠨᠠᠢᠮᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠶᠢᠰᠦᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",""],["ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠦᠷᠪᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠵᠢᠷᠭᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠤᠯᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠨᠠᠢᠮᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠶᠢᠰᠦᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",""]],
                AM: null,
                PM: null,
                eras: [{"name":"ᠣᠨ ᠲᠣᠭᠠᠯᠠᠯ ᠤᠨ","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027ᠣᠨ ᠤ᠋\u0027 M\u0027ᠰᠠᠷ᠎ᠠ  ᠢᠢᠨ \u0027d\u0027 ᠤ᠋ ᠡᠳᠦᠷ\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027ᠣᠨ ᠤ᠋\u0027 M\u0027ᠰᠠᠷ᠎ᠠ  ᠢᠢᠨ \u0027d\u0027 ᠤ᠋ ᠡᠳᠦᠷ\u0027 H:mm",
                    F: "yyyy\u0027ᠣᠨ ᠤ᠋\u0027 M\u0027ᠰᠠᠷ᠎ᠠ  ᠢᠢᠨ \u0027d\u0027 ᠤ᠋ ᠡᠳᠦᠷ\u0027 H:mm:ss",
                    M: "M\u0027ᠰᠠᠷ᠎ᠠ\u0027 d\u0027ᠡᠳᠦᠷ\u0027",
                    Y: "yyyy\u0027ᠣᠨ\u0027 M\u0027ᠰᠠᠷ᠎ᠠ\u0027"
                }
            })
        }
    }, cultures["mn-Mong"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["iu-Latn"] = $.extend(true, {}, invariant, {
        name: "iu-Latn",
        englishName: "Inuktitut (Latin)",
        nativeName: "Inuktitut",
        language: "iu-Latn",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0]
            },
            currency: {
                symbol: "$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Naattiinguja","Naggajjau","Aippiq","Pingatsiq","Sitammiq","Tallirmiq","Sivataarvik"],["Nat","Nag","Aip","Pi","Sit","Tal","Siv"],["N","N","A","P","S","T","S"]],
                months: [["Jaannuari","Viivvuari","Maatsi","Iipuri","Mai","Juuni","Julai","Aaggiisi","Sitipiri","Utupiri","Nuvipiri","Tisipiri",""],["Jan","Viv","Mas","Ipu","Mai","Jun","Jul","Agi","Sii","Uut","Nuv","Tis",""]],
                patterns: {
                    d: "d/MM/yyyy",
                    D: "ddd, MMMM dd,yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "ddd, MMMM dd,yyyy h:mm tt",
                    F: "ddd, MMMM dd,yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["iu-Latn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["tzm-Latn"] = $.extend(true, {}, invariant, {
        name: "tzm-Latn",
        englishName: "Tamazight (Latin)",
        nativeName: "Tamazight",
        language: "tzm-Latn",
        numberFormat: {
            pattern: ["n-"],
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                symbol: "DZD"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': "-",
                firstDay: 6,
                days: [["Acer","Arime","Aram","Ahad","Amhadh","Sem","Sedh"],["Ace","Ari","Ara","Aha","Amh","Sem","Sed"],["Ac","Ar","Ar","Ah","Am","Se","Se"]],
                months: [["Yenayer","Furar","Maghres","Yebrir","Mayu","Yunyu","Yulyu","Ghuct","Cutenber","Ktuber","Wambir","Dujanbir",""],["Yen","Fur","Mag","Yeb","May","Yun","Yul","Ghu","Cut","Ktu","Wam","Duj",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM, yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dd MMMM, yyyy H:mm",
                    F: "dd MMMM, yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["tzm-Latn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["ha-Latn"] = $.extend(true, {}, invariant, {
        name: "ha-Latn",
        englishName: "Hausa (Latin)",
        nativeName: "Hausa",
        language: "ha-Latn",
        numberFormat: {
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "N"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Lahadi","Litinin","Talata","Laraba","Alhamis","Juma\u0027a","Asabar"],["Lah","Lit","Tal","Lar","Alh","Jum","Asa"],["L","L","T","L","A","J","A"]],
                months: [["Januwaru","Febreru","Maris","Afrilu","Mayu","Yuni","Yuli","Agusta","Satumba","Oktocba","Nuwamba","Disamba",""],["Jan","Feb","Mar","Afr","May","Yun","Yul","Agu","Sat","Okt","Nuw","Dis",""]],
                AM: ["Safe","safe","SAFE"],
                PM: ["Yamma","yamma","YAMMA"],
                eras: [{"name":"AD","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["ha-Latn"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh-CHS"] = $.extend(true, {}, invariant, {
        name: "zh-CHS",
        englishName: "Chinese (Simplified) Legacy",
        nativeName: "中文(简体) 旧版",
        language: "zh-CHS",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$n"],
                symbol: "¥"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["周日","周一","周二","周三","周四","周五","周六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"公元","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["zh-CHS"]);
    culture.calendar = culture.calendars.standard;
    culture = cultures["zh-CHT"] = $.extend(true, {}, invariant, {
        name: "zh-CHT",
        englishName: "Chinese (Traditional) Legacy",
        nativeName: "中文(繁體) 舊版",
        language: "zh-CHT",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                symbol: "HK$"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],["週日","週一","週二","週三","週四","週五","週六"],["日","一","二","三","四","五","六"]],
                months: [["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]],
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"公元","start":null,"offset":0}],
                patterns: {
                    d: "d/M/yyyy",
                    D: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm",
                    F: "yyyy\u0027年\u0027M\u0027月\u0027d\u0027日\u0027 H:mm:ss",
                    M: "M\u0027月\u0027d\u0027日\u0027",
                    Y: "yyyy\u0027年\u0027M\u0027月\u0027"
                }
            })
        }
    }, cultures["zh-CHT"]);
    culture.calendar = culture.calendars.standard;


})(jQuery);