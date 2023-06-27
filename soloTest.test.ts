import {CookieClick} from './soloPage'

const cookie = new CookieClick()

test('click the cookie and a bunch of other stuff', async () => {
    await cookie.navigate();
    await cookie.driver.manage().window().maximize()
    await cookie.click(cookie.engBtn); 
    await cookie.driver.sleep(3000);
    await cookie.click(cookie.popUp) 
    await cookie.repeatClick(200, cookie.bigCookie); 
    await cookie.click(cookie.cursorBtn); 
    await cookie.repeatClick(50, cookie.bigCookie); 
    await cookie.click(cookie.legBtn); 
    await cookie.click(cookie.ascendBtn); 
    await cookie.click(cookie.reincarnateBtn); 
    await cookie.click(cookie.yesBtn); 
    await cookie.driver.sleep(2000); 
    await cookie.click(cookie.twitterBtn); 
    await cookie.switchTabs(); 
    await cookie.driver.sleep(2000); 
    await cookie.driver.quit()
})