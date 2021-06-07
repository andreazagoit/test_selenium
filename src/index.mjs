import { Builder, By, Key, until } from "selenium-webdriver";
import { credentials } from "./credentials.mjs";
import { facebookCloseCookie } from "./utils/utils.mjs";
import { facebookLogin } from "./utils/utils.mjs";

const startTest = async (data) => {
  console.log(`Executing process with user: ${data.username}`);
  let driver = new Builder()
    .forBrowser("firefox")
    .usingServer("http://localhost:4444/wd/hub")
    .build();
  try {
    await driver.get("https://facebook.com/");
    //await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    //await driver.wait(until.titleIs("webdriver - Google Search"), 1000)

    /* let privacyButton = await driver
      .findElement(By.css("button"))
      .sendKeys("webdriver", Key.RETURN); */

    const login = await facebookLogin({
      driver,
      username: data.username,
      password: data.password,
    });

    //const closeCookie = await facebookCloseCookie({ driver });

    //let privacyButton = await driver.findElements(By.css("button"));
    //privacyButton[1].click();

    /* setTimeout(async () => {
      await driver.quit();
    }, 5000); */

    /* process.on("exit", async () => {
      console.log("Stopping Web Client");
      await driver.quit();
    }); */
  } catch (error) {
    console.log("error", error);
  }
};

credentials.forEach((data) => {
  startTest(data);
});
