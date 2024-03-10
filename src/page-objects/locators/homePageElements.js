const homePageElements =  {
    navigationTab: (type, tabName) => `//*[@id="${type}"]//*[contains(text(),"${tabName}")]`,
}

export { homePageElements };