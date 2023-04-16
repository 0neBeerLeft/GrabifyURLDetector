function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}

function check() {
    var jobValue = document.getElementsByName('txtJob')[0].value
    var a = ['mymassive.yachts',
    'grabify.link',
    'stonks.boats',
    'stonks.fun',
    'toes.beauty',
    'barefoot.pics',
    'shareit.pics',
    'gamer.tattoo',
    'shipment.website',
    'imagevault.cloud',
    'sugma.mom',
    'yum.mom',
    'plz.life',
    'massive.mom',
    'massive.boats',
    'mymassive.store',
    'mymassive.top',
    'gamer.hair',
    'bathtub.pics',
    'foot.wiki',
    'thisdomainislong.lol',
    'gamergirl.pro',
    'picshost.pics',
    'pichost.pics',
    'imghost.pics',
    'imagehost.pics',
    'toldyouso.lol',
    'toldyouso.pics',
    'screenshare.pics',
    'myprivate.pics',
    'noodshare.pics',
    'cheapcinema.club',
    'dateing.club',
    'shrekis.life',
    'headshot.monster',
    'progaming.monster',
    'yourmy.monster',
    'screenshot.best',
    'gamingfun.me',
    'catsnthing.com',
    'catsnthings.fun',
    'joinmy.site',
    'fortnitechat.site',
    'fortnight.space',
    'stopify.co',
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
    'wl.gl',
    'ed.tc',
    'bc.ax',
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
