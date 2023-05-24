function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}

function check() {
    var jobValue = document.getElementsByName('txtJob')[0].value
    var a = ['grabify.link',
    'barefoot.pics',
    'bathtub.pics',
    'catsnthing.com',
    'catsnthings.fun',
    'dateing.club',
    'foot.wiki',
    'fortnight.space',
    'fortnitechat.site',
    'gamer.hair',
    'gamer.tattoo',
    'gamergirl.pro',
    'gamingfun.me',
    'headshot.monster',
    'imagehost.pics',
    'imagevault.cloud',
    'imghost.pics',
    'joinmy.site',
    'massive.boats',
    'massive.mom',
    'mymassive.store',
    'mymassive.top',
    'mymassive.yachts',
    'myprivate.pics',
    'noodshare.pics',
    'photovault.pics',
    'pichost.pics',
    'picshost.pics',
    'plz.life',
    'progaming.monster',
    'screenshare.pics',
    'screenshot.best',
    'shareit.pics',
    'shipment.website',
    'shrekis.life',
    'stonks.boats',
    'stonks.fun',
    'stopify.co',
    'sugma.mom',
    'thisdomainislong.lol',
    'toes.beauty',
    'toldyouso.lol',
    'toldyouso.pics',
    'yourmy.monster',
    'yum.mom',
    'gg.gg',
    'shorte.st',
    'shorturl.at',
    'adf.ly',
    'bc.vc',
    'ouo.io',
    'zzb.bz',
    'adfoc.us',
    'goo.gl',
    'wl.gl',
    'ed.tc',
    'bc.ax',
    'iplogger.org',
    'iplogger.com',
    'maper.info',
    'iplogger.ru',
    'iplogger.co',
    '2no.co',
    'yip.su',
    'iplogger.info',
    'ipgrabber.ru',
    'ipgraber.ru',
    'iplis.ru',
    '02ip.ru',
    'ezstat.ru',
    'iplogger.cn',
    ]
    if (isUrlValid(jobValue)){
        for (var i in a) {
            if (jobValue.indexOf(a[i]) > -1) {
                document.getElementById("result").innerHTML = "This is a tracking URL. Proceed with caution."; 
                document.getElementById("result").style.color = "red";
                break
            }else{
                document.getElementById("result").innerHTML = "This URL is safe to visit.";  
                document.getElementById("result").style.color = "green"
            }
        }
    }
    else{
        document.getElementById("result").innerHTML = "Invalid URL. Please enter a valid URL and try again.";  
        document.getElementById("result").style.color = "yellow"
    }
}
