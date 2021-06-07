import { Builder, By, Key, until } from "selenium-webdriver";

export const facebookLogin = async ({ driver, username, password }) => {
  return new Promise(async (resolve, reject) => {
    console.log(
      `Try login with username: ${username} and password: ${password}`
    );
    const emailInput = await driver
      .findElement(By.css("input[name=email]"))
      .sendKeys(username);
    const passwordInput = await driver
      .findElement(By.css("input[name=pass]"))
      .sendKeys(password);

    const loginInput = await driver
      .findElement(By.name("login"))
      .sendKeys(Key.RETURN);

    resolve({
      success: true,
    });
  });
};

export const facebookCloseCookie = async ({ driver }) => {
  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      console.log(`Try to close the banner`);
      const bannerCookie = await driver
        .findElement(By.css("div[role=dialog]"))
        .sendKeys(Key.RETURN);

      console.log("bannerCookie", bannerCookie);

      resolve({
        success: true,
      });
    }, 2000);
  });
};
