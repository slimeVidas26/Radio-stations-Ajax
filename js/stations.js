 var stations = {
    s1: ['88FM','http://radiocast-rr-d.vidnt.com:8000/ipbc_IPBC88LAM','radiohaifa.jpg'],
    s8: ['גלגל"צ','http://glzwizzlv.bynetcdn.com/glglz_mp3','78.129.189.18229219.jpg'],
    s6: ['גל"צ','http://glzwizzlv.bynetcdn.com/glz_mp3','84.94.229.995998.jpg'],
    s7: ['אקו 99FM','http://99.livecdn.biz/99fm_aac','90.cdnwz.net90fm.png'],
    s5: ['רדיוס 100FM','http://100fm.streamgates.net/Radios100Fm','91fm.streamgates.netLev91Fm.jpg'],
    s4: ['רדיו תל אביב 102FM','http://102.livecdn.biz/102fm_aac','93fm.ilcast.com8000live.jpg'],
    s9: ['רדיו ללא הפסקה 103FM','http://103fm.live.streamgates.net/103fm_live/1multix/icecast.audio','93fm.ilcast.com8000live.png'],
    s2: ['רדיו אמצע הדרך','http://90.cdnwz.net/90fm','96.cdnwz.net96fm.jpg'],
    s3: ['רדיו לב המדינה','http://91fm.streamgates.net/Lev91Fm','99.livecdn.biz99fm_aac.jpg'],
    s19: ['קול הקמפוס 106FM','http://glzwizzlv.bynetcdn.com/glz_mp3','100fm.streamgates.netRadios100Fm.png'],
    s10: ['רשת ב','http://radiocast-rr-d.vidnt.com:8000/ipbc_IPBCbetLAM','101.cdnwz.net101fm.gif'],
    s16: ['רשת ג','http://radiocast-rr-d.vidnt.com:8000/ipbc_IPBCgimmelLAM','102.livecdn.biz102fm_aac.jpg'],
    s11: ['רדיו חיפה','http://46.4.83.17/radiohaifa','103fm.live.streamgates.net103fm_live1multixicecast.audio.png'],
    s56: ['רדיו רן פרסית','http://185.80.220.12:8047/stream','106fm.livecdn.biz7075.png'],
    s14: ['רדיו דרום','http://audio-darom.ecast.co.il:9000/darom97fm','185.80.220.128047stream.jpg'],
    s15: ['רדיו ישראל','http://shoutcast.ilcast.com:8190/;stream.mp3','194.153.101.1608000idc12.jpg'],
    s71: ['רדיו שנות ה 80-90','http://radiocast-rr-d.vidnt.com:8000/ipbc_IPBC80-90LA','212.150.158.1727777.jpg'],
    s17: ['ClickFM','http://listen.clickfm.co.il/clickfm','770tv.no-ip.org7777.jpg'],
    s18: ['Classic FM','http://media-ice.musicradio.com/ClassicFMMP3','1036fm.livecast.co.illive1036fm.jpg'],
    s27: ['רדיו קול הים האדום','http://eilat.cdnwz.net/102fm','1045.cdnwz.net1045fm.jpg'],
    s23: ['רדיו קול רגע','http://96.cdnwz.net/96fm','99701902-15f3-4f9d-b486-96067a70086c.png'],
    s25: ['רדיו ירושלים','http://101.cdnwz.net/101fm','a7452933-b6de-4c3c-be88-ab8345491875.jpg'],
    s26: ['קול המוזיקה','http://radiocast-rr-d.vidnt.com:8000/ipbc_IPBCkolhamusicaLAM','af8d3686e97b3119eef0b6268c8bb9c3.jpg'],
    s46: ['הרדיו הבינתחומי','http://194.153.101.160:8000/idc123.mp3','audio-darom.ecast.co.il9000darom97fm.jpg'],
    s28: ['תרבות','http://radiocast-rr-d.vidnt.com:8000/ipbc_IPBCtarbutLAM','audio-darom.ecast.co.il9000darom101.png'],
    s29: ['רדיו גלי ישראל','http://gly-switch1.level1.co.il:9000/live','best-smooth-jazz-radio.gif'],
    s30: ['רדיו קול השלום','http://uk2-vn.mixstream.net:8004/;','class-95-fm-singapore-250-250-image.jpg'],
    s31: ['רדיו קול ברמה','http://kb.cdnwz.net/kol_barama','colourfulradiologo_orig.jpg'],
    s32: ['רדיו קול הכנרת','http://kinneret.cdnwz.net/kinneret','cp11.livecdn.bizradiodance_aac.jpg'],
    s34: ['רדיו קול המרכז','http://78.129.189.182:29219/;stream.mp3','cradio.co.il9040.jpg'],
    s35: ['רדיו קול נתניה 106FM','http://netanya.cdnwz.net/netanya','d22fda41671330380917aef73df5ec37.jpg'],
    s37: ['רדיו 1FM','http://listen.clickfm.co.il/1FM','df621702-a544-4fd4-9e69-15ed44f17875.jpg'],
    s38: ['רדיו חוף אילת','http://84.94.229.99:5998/;','dyvl-bogo-2016-amfmph.jpg'],
    s39: ['רדיו סול','http://server1.live1.co.il:8016/sol','unnamed (7).png'],
    s43: ['קול רמת השרון','http://1036fm.livecast.co.il/live1036fm/','e5d103c9-d501-439b-aa7e-153ca1240a69.png'],
    s47: ['רדיו דרום 105.5','http://audio-darom.ecast.co.il:9000/darom101','unnamed (13).png'],
    s49: ['רדיו ביט','http://live.radio-beat.com/stream1/','unnamed (10).png'],
    s51: ['רדיו מזרחית','http://212.150.158.172:7777/;stream.mp3','f32abcbdf0b25ce18eb3e24e21833755.jpg'],
    s53: ['radio DANCE','http://cp11.livecdn.biz/radiodance_aac','fm-stations-nepal.png'],
    s55: ['רדיו כחול יוון','http://radio.kaholyavan.co.il/livegreece/','future.radiospace.israel_150x150.png'],
    s57: ['רדיו המזרח','http://cradio.co.il:9040/;','gagasi-fm-the-sound-of-the-city-south-africa.jpg'],
    s58: ['רדיו אזורית','http://knight.wavestreamer.com:8474/;','gly-switch1.level1.co.il9000live.png'],
    s59: ['רדיו הקצה','http://kzradio.livecast.co.il/kzradio_aac/','unnamed (14).png'],
    s60: ['רדיו קול הגליל העליון 105.3FM','http://server2.live1.co.il:8000/galil','glzwizzlv.bynetcdn.comglz_mp3.png'],
    s62: ['רדיו צפון ללא הפסקה','http://1045.cdnwz.net/1045fm','icecast.kab.tvheb.png'],
    s63: ['Jazz FM','http://streamerepsilon.jazz.fm:8000/;','kb.cdnwz.netkol_barama.png'],
    s64: ['Gold Radio Israel','http://streaming.radionomy.com/JamendoLounge','kinneret.cdnwz.netkinneret.jpg'],
    s65: ['רדיו קול עכו','http://radio.ilcast.com:8052/;','knight.wavestreamer.com8474.jpg'],
    s68: ['רדיו ארץ','http://radio.eretz.fm/eretz-mp3','kzradio.livecast.co.ilkzradio_aac.jpg'],
    s70: ['RADIO 69FM','http://radio.ilcast.com:8000/live','ligwalagwala-fm-south-africa-250-250-image.jpg'],
    s20: ['כאן מורשת','http://radiocast-rr-d.vidnt.com:8000/ipbc_IPBCmoreshetLAM','listen.clickfm.co.il1FM.png'],
    s12: ['מוזיקה קלאסית','http://radiocast-rr-d.vidnt.com:8000/ipbc_IPBCClassicLA','listen.clickfm.co.ilclickfm.gif'],
    s13: ['רדיו קול המזרח','http://www.menta-fm.co.il:8888/','live.radio-beat.comstream1.jpg'],
    s33: ['רדיו חולמים מזרחית','http://sweb.co.il:8008/;','Logos_FRANCE24_RVB_2013.svg.png'],
    s40: ['רדיו יאסו','http://radio-yasoo.ath.cx:7500/;','media.varnish.inn.co.ila7live.jpg'],
    s42: ['רדיו קבלה FM','http://icecast.kab.tv/heb.mp3','media.varnish.inn.co.ila7live.png'],
    s36: ['רדיו מבשר טוב','http://770tv.no-ip.org:7777/;','media-ice.musicradio.comClassicFMMP3.jpg'],
    s21: ['רדיו קול חי','http://93fm.ilcast.com:8000/live','netanya.cdnwz.netnetanya.png'],
    s22: ['ערוץ 7','http://media.varnish.inn.co.il/a7live','radio.eretz.fmeretz-mp3.jpg'],
    s24: ['רדיו קול הים התיכון','http://www.rs.mizrahit.fm:7777/;','radio.ilcast.com8000live.png']
}