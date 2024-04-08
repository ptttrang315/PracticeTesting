const homePageElements =  {
    navigationTab: (type, tabName) => `//*[@id="${type}"]//*[contains(text(),"${tabName}")]`,
}

module.exports = { homePageElements };