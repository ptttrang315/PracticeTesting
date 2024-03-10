const webInputsElements =  {
    inputType: (type) => `[id ='input-${type}']`,
    outputType: (type) => `[id ='output-${type}']`,
    displayBtn: '//*[@id="btn-display-inputs"]',
    clearBtn: '//*[@id="btn-clear-inputs"]',
}

export { webInputsElements }