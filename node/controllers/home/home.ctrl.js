const puppeteer = require('puppeteer')

exports.index = async (_, res) => {
    
    res.render('main.html')
}

exports.get_search = async (req, res) => {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()

    page.on('dialog', (dialog) => {
        dialog.accept()
    })

    await page.goto('http://www.letskorail.com/', {timeout: 0, waitUntil: 'domcontentloaded'})

    

    // await browser.close()
}

exports.get_login = (_, res) => {
    res.render('edit.html')
}

exports.post_login = async (req, res) => {
    console.log(req.body)

    const browser = await puppeteer.launch({
        headless: false
    })

    const page = await browser.newPage()

    page.on('dialog', (dialog) => {
        dialog.accept()
    })

    const korail_id2 = req.body.id2;
    const korail_id3 = req.body.id3;
    const korail_pw = req.body.pw;

    await page.goto('http://www.letskorail.com/korail/com/login.do', {timeout: 0, waitUntil: 'domcontentloaded'})

    await page.evaluate((id2, id3, pw) => {
        document.querySelector('#radInputFlg2').click()
        document.querySelector('#txtCpNo2').value = id2
        document.querySelector('#txtCpNo3').value = id3
        document.querySelector('#txtPwd1').value = pw
        document.querySelector('#loginDisplay2 > ul > li.btn_login > a > img').click()
    }, korail_id2, korail_id3, korail_pw);

    await page.waitForNavigation();


    // await browser.close()
    res.redirect('/')

}