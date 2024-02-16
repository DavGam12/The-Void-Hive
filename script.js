window.setInterval(MainLoop, 10) // Increment/sec

// e3^n constants
const k = 1000
const M = 1000*k
const B = 1000*M

/*
    Abbreviations->{
        CS = Crust Shards
        CP = Crust Pieces
        Mt = Matter

        CSsec = CS/sec

        Gen = Generator
        Num = Number
        Conver = Convertaion (variable)
        Convertion = Convertion (function)

        CU = Crust UPgrades

        MB = Buyable (Multiple Boughts)
    }
*/

// Units
let CS = 0 // CS
let CP = 0 // CP
let Mt = 1e7 // Mt
// Units/sec
let CSsec = 0 // CS
let CPsec = 0 // CP
let Mtsec = 0 // Mt
// Units/Convertion
let CPConver = 0 // CP
let MtConver = 0 // Mt
// Convertion Prices
let CPConverPrice = 10 // CS
let MtConverPrice = 10 // CP


// Texts
let CSUnitText
let CPUnitText
let MtUnitText
let CSGenPriceUnitText
let CPGenPriceUnitText
let MtGenPriceUnitText
let ConvertToCPUnitText
let ConvertToMtUnitText
let ConvertToCPUnitTextCost
let ConvertToMtUnitTextCost
let MBCP1PriceText
let MBMt1PriceText
let MBCS1PriceText
// Usable In Every Function
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

        MtUnitText = document.getElementById("unitTextMt")
        CPUnitText = document.getElementById("unitTextCP")
        CSUnitText = document.getElementById("unitTextCS")
        CSGenPriceUnitText = document.getElementById("CSGenPrice")
        CPGenPriceUnitText = document.getElementById("CPGenPrice")
        MtGenPriceUnitText = document.getElementById("MtGenPrice")
        ConvertToCPUnitText = document.getElementById("convertToCPUnitText")
        ConvertToMtUnitText = document.getElementById("convertToMtUnitText")
        ConvertToCPUnitTextCost = document.getElementById("convertToCPUnitTextCost")
        ConvertToMtUnitTextCost = document.getElementById("convertToMtUnitTextCost")
        MBCP1PriceText = document.getElementById("MBCP1PriceText")
        MBMt1PriceText = document.getElementById("MBMt1PriceText")
        MBCS1PriceText = document.getElementById("MBCS1PriceText")

    });


// Upgrades
let cuCS1Multi = 1 // 5*CSsec
let cuCS2Multi = 1 // 10*CSsec
let cuCP1Multi = 1 // 5*CPsec
let cuCP2Multi = 1 // 10*CPsec
let cuMt1Multi = 1 // 10*Mtsec
let cuMt2Multi = 1 // 1000*Mtsec

// Buyables
let MBCP1Multi = 1 // CP
let MBMt1Multi = 1 // Mt
let MBCS1Multi = 1 // CS
// Prices
let MBCP1Price = 15 // CP
let MBMt1Price = 15 // Mt
let MBCS1Price = 15 // CS
let MBCP1Num = 0 // Units
let MBMt1Num = 0 // Units
let MBCS1Num = 0 // Units

// Generators
let CSGenNum = 0 // Units
let CPGenNum = 0 // Units
let MtGenNum = 0 // Units
// Prices
let CSGenPrice = 1 // Mt
let CPGenPrice = 1 // CS
let MtGenPrice = 10 // Mt

// Tabs Visibility
let CD = document.getElementById("crustDrill")
let CU = document.getElementById("generalUpgrades")
let Ach = document.getElementById("Achievements")
let HC = document.getElementById("Heat-Cool")
function VisibilityCD(){
    CD.style.visibility = "visible"
    CU.style.visibility = "hidden"
    Ach.style.visibility = "hidden"
    HC.style.visibility = "hidden"
}
function VisibilityCU(){
    CD.style.visibility = "hidden"
    CU.style.visibility = "visible"
    Ach.style.visibility = "hidden"
    HC.style.visibility = "hidden"
}
function VisibilityAch(){
    CD.style.visibility = "hidden"
    CU.style.visibility = "hidden"
    Ach.style.visibility = "visible"
    HC.style.visibility = "hidden"
}
function VisibilityHC(){
    CD.style.visibility = "hidden"
    CU.style.visibility = "hidden"
    Ach.style.visibility = "hidden"
    HC.style.visibility = "visible"
}
// Tabs Buttons Visibility


// Unlock Features
let HeatUnlockBought = false
let CoolUnlockBought = false
function HeatUnlock() {
    let unlockableHeat = document.getElementById("unlockableHeat")
    if (Mt>=M && !HeatUnlockBought) {
        HeatUnlockBought = true
        Mt -= M
        unlockableHeat.style.backgroundColor = "lightgreen"
    }
    
    let HCButton = document.getElementById("HeatCoolTab")
    if (HeatUnlockBought && CoolUnlockBought){
        HCButton.style.visibility = "visible"   
    }
}
function CoolUnlock(){
    let unlockableCool = document.getElementById("unlockableCool")
    if (Mt>=M && !CoolUnlockBought) {
        CoolUnlockBought = true
        Mt -= M
        unlockableCool.style.backgroundColor = "lightgreen"
    }

    let HCButton = document.getElementById("HeatCoolTab")
    if (HeatUnlockBought && CoolUnlockBought){
        HCButton.style.visibility = "visible"   
    }
}


//Archievements
let AchMulti = 
[
    1, 1, // 1.5, 3
    1, 1 // 2.25, 9
]
function Archievements() {
    let archCS1 = document.getElementById("AchCS1")
    if (CP>=10 || archCS1.style.backgroundColor === "lightgreen"){
        AchMulti[0] = 2 // CS Boost
        archCS1.style.backgroundColor = "lightgreen"
    }

    let archCS2 = document.getElementById("AchCS2")
    if (Mt>=10 || archCS2.style.backgroundColor === "lightgreen") {
        AchMulti[1] = 4 // CS Boost
        archCS2.style.backgroundColor = "lightgreen"
    }

    let archCP1 = document.getElementById("AchCP1")
    if (CP>=100 || archCP1.style.backgroundColor === "lightgreen") {
        AchMulti[2] = 2 // CP Boost
        archCP1.style.backgroundColor = "lightgreen"
    }

    let archCP2 = document.getElementById("AchCP2")
    if (Mt>=100 || archCP2.style.backgroundColor === "lightgreen") {
        AchMulti[3] = 4 // CP Boost
        archCP2.style.backgroundColor = "lightgreen"
    }
}

// Formulas
function Formulas(){
    // Generations
    CSsec = 0.1*CSGenNum
    CPsec = 0.01*CPGenNum
    Mtsec = 0.001*MtGenNum

    // Generators Prices
    CSGenPrice = 10**CSGenNum
    CPGenPrice = 10**(CPGenNum*2)
    if (MtGenNum>0){MtGenPrice = 10**(MtGenNum*3)}

    // Buyables Prices
    MBCP1Price = 15*(1+Math.pow(2, MBCP1Num)).toFixed(0)// CP
    MBMt1Price = 15*(1+Math.pow(2, MBMt1Num)).toFixed(0) // Mt
    MBCS1Price = 15*(1+Math.pow(2, MBCS1Num)).toFixed(0) // CS
    //Buyables Multis
    if (MBCP1Num>0){MBCP1Multi = 1.1*MBCP1Num}
    if (MBMt1Num>0){MBMt1Multi = 1.1*MBMt1Num}
    if (MBCS1Num>0){MBCS1Multi = 1.1*MBCS1Num}

    // Convertiors Prices
    CPConver = CS/(CPConverPrice*(1+CPConver/1000))
    MtConver = CP/(MtConverPrice*(1+MtConver/100))
    
    Archievements()
}

// Update Info
function Show(){
    CSUnitText.innerHTML = "Crust Shards: " + CS.toFixed(1) + " CS"
    CPUnitText.innerHTML = "Crust Pieces: " + CP.toFixed(1) + " CP"
    MtUnitText.innerHTML = "Matter: " + Mt.toFixed(1) + " Mt"
    CSGenPriceUnitText.innerHTML = CSGenPrice + " Mt"
    CPGenPriceUnitText.innerHTML = CPGenPrice + " CP"
    MtGenPriceUnitText.innerHTML = MtGenPrice + " Mt"
    ConvertToCPUnitText.innerHTML = CPConver.toFixed(1) + " CP"
    ConvertToMtUnitText.innerHTML = MtConver.toFixed(1) + " Mt"
    MBCP1PriceText.innerHTML = MBCP1Price + " CP"
    MBMt1PriceText.innerHTML = MBMt1Price + " Mt"
    MBCS1PriceText.innerHTML = MBCS1Price + " CS"

    Unlockables()
    Formulas()
}

// Unlock Buttons
function Unlockables(){
    let MatterUpgrades = document.getElementById("matterUpgrades")
    if (Mt>5){
        MatterUpgrades.style.visibility = "inherit"
    }

    let HeatMainUpgrade = document.getElementById("unlockableHeat")
    if (Mt>=1*k){
        HeatMainUpgrade.style.visibility = "inherit"
    }

    let CoolMainUpgrade = document.getElementById("unlockableCool")
    if (Mt>=1*k){
        CoolMainUpgrade.style.visibility = "inherit"
    }
}

// Increment
let LoopCountNum = 0
function MainLoop(){
    if (LoopCountNum != 0 && LoopCountNum % 1 === 0){
        Increment()
        LoopCountNum = 0
    } else {LoopCountNum++}

    Show()
}
function Increment(){
    
    CS += (((CSsec)*MBCS1Multi)*cuCS1Multi*cuCS2Multi)*AchMulti[0]*AchMulti[1]
    CP += (((CPsec)*MBCP1Multi)*cuCP1Multi*cuCP2Multi)*AchMulti[2]*AchMulti[3]
    Mt += (((Mtsec)*MBMt1Multi)*cuMt1Multi*cuMt2Multi)

}

// Generators
function BuyGenCS(){
    if (Mt>=CSGenPrice){
        CSGenNum++
        Mt -= CSGenPrice
    }
}
function BuyGenCP(){
    if (CP>=CPGenPrice){
        CPGenNum++
        CP -= CPGenPrice
    }
}
function BuyGenMt(){
    if (Mt>=MtGenPrice){
        MtGenNum++
        Mt -= MtGenPrice
    }
}

// Convertions
function CPConvertion(){
    CP += CPConver
    CS = 0
}
function MtConvertion(){
    Mt += MtConver
    CP = 0
}

// Crust Upgrades
let cucs1bought = false
function CUCS1(){
    let cuCS1 = document.getElementById("crustUpgradeCS1")
    let cuCS1Price = 10// CS
    if (CS>=cuCS1Price && !cucs1bought){
        cuCS1Multi = 2.5
        cuCS1.style.backgroundColor = "lightgreen"
        CS -= cuCS1Price
        cucs1bought = true
    }
}
let cucs2bought = false
function CUCS2(){
    let cuCS2 = document.getElementById("crustUpgradeCS2")
    let cuCS2Price = 100 // CP
    if (CS>=cuCS2Price && !cucs2bought){
        cuCS2Multi = 5
        cuCS2.style.backgroundColor = "lightgreen"
        CS -= cuCS2Price
        cucs2bought = true
    }
}
let cucp1bought = false
function CUCP1(){
    let cuCP1 = document.getElementById("crustUpgradeCP1")
    let cuCP1Price = 10 // CP
    if (CP>=cuCP1Price && !cucp1bought){
        cuCP1Multi = 2.5
        cuCP1.style.backgroundColor = "lightgreen"
        CP -= cuCP1Price
        cucp1bought = true
    }
}
let cucp2bought = false
function CUCP2(){
    let cuCP2 = document.getElementById("crustUpgradeCP2")
    let cuCP2Price = 100 // Mt
    if (CP>=cuCP2Price && !cucp2bought){
        cuCP2Multi = 5
        cuCP2.style.backgroundColor = "lightgreen"
        CP -= cuCP2Price
        cucp2bought = true
    }
}
let cumt1bought = false
function CUMt1(){
    let cuMt1 = document.getElementById("crustUpgradeMt1")
    let cuMt1Price = 100 // Mt
    if (Mt>=cuMt1Price && !cumt1bought){
        cuMt1Multi = 10
        cuMt1.style.backgroundColor = "lightgreen"
        Mt -= cuMt1Price
        cumt1bought = true
    }
}
let cumt2bought = false
function CUMt2(){
    let cuMt2 = document.getElementById("crustUpgradeMt2")
    let cuMt2Price = k // Mt
    if (Mt>=cuMt2Price && !cumt2bought){
        cuMt2Multi = k
        cuMt2.style.backgroundColor = "lightgreen"
        Mt -= cuMt2Price
        cumt2bought = true
    }
}

// Buyables
function BuyMBCP1(){
    if (CP>=MBCP1Price){
        MBCP1Num++
        CP -= MBCP1Price
    }
}
function BuyMBMt1(){
    if (Mt>=MBMt1Price){
        MBMt1Num++
        Mt -= MBMt1Price
    }
}
function BuyMBCS1(){
    if (CS>=MBCS1Price){
        MBCS1Num++
        CS -= MBCS1Price
    }
}
