import {By} from 'selenium-webdriver'; 
import {BasePage} from './basePage';

export class CookieClick extends BasePage {
    engBtn: By = By.xpath('//div[@id="langSelect-EN"]'); 
    popUp: By = By.xpath('//a[@class="cc_btn cc_btn_accept_all"]');
    bigCookie: By = By.xpath('//button[@id="bigCookie"]'); 
    cursorBtn: By = By.xpath('(//div[@class="product unlocked enabled"])[1]'); 
    legBtn: By = By.xpath('//div[text()="Legacy"]'); 
    ascendBtn: By = By.xpath('//a[text()="Ascend"]'); 
    reincarnateBtn: By = By.xpath('//a[@id="ascendButton"]'); 
    yesBtn: By = By.xpath('//a[@id="promptOption0"]'); 
    twitterBtn: By = By.xpath('(//a[@*])[6]'); 
    xTwitBtn: By = By.xpath('(//div[@class="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"])[3]')
    twitHeader: By = By.xpath('(//span[@class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"])[5]');

    constructor() {
        super({url:"https://orteil.dashnet.org/cookieclicker/"})
    }

    async repeatClick(num, elementBy) {
        for (let i = 0; i < num; i++){
            await this.click(elementBy)
        }
    }
    async switchTabs() {
        let currentTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(currentTabs[1]);
        await this.driver.sleep(5000);
        await this.click(this.xTwitBtn); 
        let text = await this.getText(this.twitHeader);
        expect(text).toContain("Orteil")
        await this.driver.close(); 
        await this.driver.switchTo().window(currentTabs[0]);
    }

}