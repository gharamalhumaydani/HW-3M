let Year = 1999
if ((Year % 4 == 0 && Year % !100 == 0) || (Year % 400 == 0) ){
    console.log(`${Year} -- " is a leap year`)
} else {
    console.log(`${Year} -- is not a leap year`)
}
