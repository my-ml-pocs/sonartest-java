// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test1', function() {
  this.timeout(30000)
  let driver
  let vars

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })

  afterEach(async function() {
    await driver.quit();
  })

  it('test1', async function() {
    await driver.get("http://localhost:8080/demo/library.html")
    await driver.findElement(By.css(".button-form:nth-child(4) > input")).click()
    await driver.findElement(By.linkText("Return")).click()
    await driver.findElement(By.id("register_book")).click()
    await driver.findElement(By.id("register_book")).sendKeys("some book")
    await driver.findElement(By.id("register_book_submit")).click()
    await driver.findElement(By.linkText("Return")).click()
    await driver.findElement(By.id("register_borrower")).click()
    await driver.findElement(By.id("register_borrower")).sendKeys("some borrower")
    await driver.findElement(By.id("register_borrower_submit")).click()
    await driver.findElement(By.linkText("Return")).click()
    await driver.findElement(By.id("lend_book")).click()
    await driver.findElement(By.id("lend_book")).sendKeys("some book")
    await driver.findElement(By.id("lend_borrower")).sendKeys("some borrower")
    await driver.findElement(By.id("lend_book_submit")).click()
    assert(await driver.findElement(By.id("result")).getText() == "SUCCESS")
  })

})
