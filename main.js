function check() {
    var jobValue = document.getElementsByName('txtJob')[0].value
    var a = ['mymassive.yachts',
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
    ]

    for (var i in a) {
        if (jobValue.indexOf(a[i]) > -1) {
            document.getElementById("result").innerHTML = "Grabify url detected!"; 
            document.getElementById("result").style.color = "red";
            break
        }else{
            document.getElementById("result").innerHTML = "Url is clear";  
            document.getElementById("result").style.color = "green"
        }
    }
}
