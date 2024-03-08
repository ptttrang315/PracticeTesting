const homePageElements =  {
    navTab: (type, tabName) => `//*[@id="${type}"]//*[contains(text(),"${tabName}")]`,
    navigateTab:`//*[@id="Examples"]//*[contains(text(),"Web inputs")]`,

}

export { homePageElements };