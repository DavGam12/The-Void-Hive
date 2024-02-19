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
        HtSt = Heat Stones
        ClSt = Cool Stones
        CM = Cosmic Microwaves
        PC = Protostellar Clouds
        tBB = tiny Big Bang (CM Gen)
        IC = Interestellar Clouds (PC Gen)

        CSsec = CS/sec

        Gen = Generator
        Num = Number
        Conver = Convertaion (variable)
        Convertion = Convertion (function)

        CU = Crust UPgrades

        MB = Buyable (Multiple Boughts)

        
        Formula->{
            sec
            Conver
            Price
            MB Multi
        }
    }
*/

// Units
let CS = 0 // CS
let CP = 0 // CP
let Mt = 1 // Mt
let HtSt = 0 // HtSt
let ClSt = 0 // ClSt
let CM = 0 // CM
let PC = 0 // PC
// Units Total
let TotalHtSt = 0
let TotalClSt = 0
// Units/sec
let CSsec = 0 // CS  Formula
let CPsec = 0 // CP  Formula
let Mtsec = 0 // Mt  Formula
let HtStsec = 0 // HtSt  Formula
let ClStsec = 0 // ClSt  Formula
let CMsec = 0 // CM Formula
let PCsec = 0 // PC Formula
// Units/Convertion
let CPConver = 0 // CP  Formula
let MtConver = 0 // Mt  Formula
let HtStConver = 0 // HtSt Formula
let ClStConver = 0 // ClSt Formula
// Convertion Price
let HtStConverPrice = 1e6
let ClStConverPrice = 1e6


// Texts
let CSUnitText
let CPUnitText
let MtUnitText
let HtStUnitText
let ClStUnitText
let CMUnitText
let PCUnitText
let CSGenPriceUnitText
let CPGenPriceUnitText
let MtGenPriceUnitText
let tBBPriceUnitText
let ICPriceUnitText
let ConvertToCPUnitText
let ConvertToMtUnitText
let ConvertToHtStUnitText
let ConvertToClStUnitText
let MBCP1PriceText
let MBMt1PriceText
let MBCS1PriceText
// Usable In Every Function
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

        CSUnitText = document.getElementById("unitTextCS")
        CPUnitText = document.getElementById("unitTextCP")
        MtUnitText = document.getElementById("unitTextMt")
        HtStUnitText = document.getElementById("unitTextHtSt")
        ClStUnitText = document.getElementById("unitTextClSt")
        CMUnitText = document.getElementById("unitTextCM")
        PCUnitText = document.getElementById("unitTextPC")
        CSGenPriceUnitText = document.getElementById("CSGenPrice")
        CPGenPriceUnitText = document.getElementById("CPGenPrice")
        MtGenPriceUnitText = document.getElementById("MtGenPrice")
        tBBPriceUnitText = document.getElementById("tBBPrice")
        ICPriceUnitText = document.getElementById("ICPrice")
        ConvertToCPUnitText = document.getElementById("convertToCPUnitText")
        ConvertToMtUnitText = document.getElementById("convertToMtUnitText")
        ConvertToHtStUnitText = document.getElementById("ConvertToHtStUnitText")
        ConvertToClStUnitText = document.getElementById("ConvertToClStUnitText")
        MBCP1PriceText = document.getElementById("MBCP1PriceText")
        MBMt1PriceText = document.getElementById("MBMt1PriceText")
        MBCS1PriceText = document.getElementById("MBCS1PriceText")

    });


// Generators
// Number
let CSGenNum = 0 // Units
let CPGenNum = 0 // Units
let MtGenNum = 0 // Units
let tBBNum = 0 // Units
let ICNum = 0 // Units
// Prices
let CSGenPrice = 1 // Mt  Formula
let CPGenPrice = 1 // CS  Formula
let MtGenPrice = 1 // Mt  Formula
let tBBPrice = 1 // CM Formula
let ICPrice = 1 // PC Formula

// Upgrades
let cuCS1Multi = 1 // 2.5*CSsec
let cuCS2Multi = 1 // 5*CSsec
let cuCP1Multi = 1 // 2.5*CPsec
let cuCP2Multi = 1 // 5*CPsec
let cuMt1Multi = 1 // 10*Mtsec
let cuMt2Multi = 1 // 1000*Mtsec

// Buyables
let MBCP1Multi = 1 // CP  Formula
let MBMt1Multi = 1 // Mt  Formula
let MBCS1Multi = 1 // CS  Formula
// Prices
let MBCP1Price = 15 // CP  Formula
let MBMt1Price = 15 // Mt  Formula
let MBCS1Price = 15 // CS  Formula
// Number
let MBCP1Num = 0 // Units
let MBMt1Num = 0 // Units
let MBCS1Num = 0 // Units

// Crust Upgrades
let CrustUpgrades = [
    false, // CS 1
    false, // CS 2
    false, // CP 1
    false, // CP 2
    false, // Mt 1
    false // Mt 2
]

// First Prestige Layer
function HCReset(){
    CS = 0
    CP = 0
    Mt = 1

    CSGenNum = 0
    CPGenNum = 0
    MtGenNum = 0

    MBCP1Num = 0
    MBMt1Num = 0
    MBCS1Num = 0

    Unlocked[2] = false

    for (let iReset = 0; iReset<CrustUpgrades.length; iReset++){
        CrustUpgrades[iReset] = false
    }
}


// Unlocks
let Unlocked = [
    // Features
    false, // Heat
    false, // Cool
    // Buttons
    false, // Matetr Upgrades
    false, // Heat-Cool
    // Tabs
    false // Heat-Cool Tab ([0] && [1])
]

// Achievements
let AchMulti = [
    1, 1, 1, // 2, 4, 8  CS
    1, 1, 1, // 1.75, 3.5, 7  CP
    1, 1, 1 // 1.5, 3, 6  Mt
]

// Save-Load
// Save
function Save(){
    let gameData =
    {
        CS: CS, CP: CP, Mt: Mt,
        CSGenNum: CSGenNum, CPGenNum: CPGenNum, MtGenNum: MtGenNum,
        MBCP1Num: MBCP1Num, MBMt1Num: MBMt1Num, MBCS1Num: MBCS1Num,
        CrustUpgrades: CrustUpgrades,
        Unlocked: Unlocked,
        AchMulti: AchMulti,
    }

    let filename = "The Void Hive"

    let jsonData = JSON.stringify(gameData)
    let file = new Blob([jsonData], {type: "application/json"})

    let a = document.createElement("a")
    a.href = URL.createObjectURL(file)
    a.download = filename
    document.body.appendChild(a)
    a.click()

    console.log("Game data saved.")
}
// Load
function Load(){
    document.getElementById("LoadInput").click()
}
function LoadInfo(LoadInput){
    let file = LoadInput.files[0]
    const reader = new FileReader

    reader.onload = function(event){
        let jsonData = event.target.result
        let gameData = JSON.parse(jsonData)
        {
            CS = gameData.CS
            CP = gameData.CP
            Mt = gameData.Mt

            CSGenNum = gameData.CSGenNum
            CPGenNum = gameData.CPGenNum
            MtGenNum = gameData.MtGenNum

            MBCP1Num = gameData.MBCP1Num
            MBCS1Num = gameData.MBCS1Num
            MBMt1Num = gameData.MBMt1Num

            CrustUpgrades = gameData.CrustUpgrades

            Unlocked = gameData.Unlocked

            AchMulti = gameData.AchMulti
        }
        console.log("Game data loaded")
        console.log(gameData)
    }

    reader.readAsText(file)
}



// Tabs Visibility
let CD = document.getElementById("crustDrill")
let Upg = document.getElementById("generalUpgrades")
let Ach = document.getElementById("Achievements")
let HC = document.getElementById("Heat-Cool")
let HeatUpgrades = document.getElementById("HeatUpgrades")
let CoolUpgrades = document.getElementById("CoolUpgrades")
function VisibilityCD(){
    CD.style.visibility = "visible"
    Upg.style.visibility = "hidden"
    Ach.style.visibility = "hidden"
    HC.style.visibility = "hidden"
    HeatUpgrades.style.visibility = "hidden"
    CoolUpgrades.style.visibility = "hidden"
}
function VisibilityAch(){
    CD.style.visibility = "hidden"
    Upg.style.visibility = "hidden"
    Ach.style.visibility = "visible"
    HC.style.visibility = "hidden"
    HeatUpgrades.style.visibility = "hidden"
    CoolUpgrades.style.visibility = "hidden"
}
function VisibilityUpg(){
    CD.style.visibility = "hidden"
    Upg.style.visibility = "visible"
    Ach.style.visibility = "hidden"
    HC.style.visibility = "hidden"
    HeatUpgrades.style.visibility = "hidden"
    CoolUpgrades.style.visibility = "hidden"
}
function VisibilityHC(){
    CD.style.visibility = "hidden"
    Upg.style.visibility = "hidden"
    Ach.style.visibility = "hidden"
    HC.style.visibility = "visible"
    HeatUpgrades.style.visibility = "hidden"
    CoolUpgrades.style.visibility = "hidden"
}
// Upgrades Visibility
function VisibilityHeatUpgrades(){
    if (HeatUpgrades.style.visibility == "hidden"){
        HeatUpgrades.style.visibility = "visible"
    } else {HeatUpgrades.style.visibility = "hidden"}
}
function VisibilityCoolUpgrades(){
    if (CoolUpgrades.style.visibility == "hidden"){
        CoolUpgrades.style.visibility = "visible"
    } else {CoolUpgrades.style.visibility = "hidden"}
}


// Unlocks
// Features
function HeatUnlock() {
    let UnlockPrice = 10*k
    if (Mt>=UnlockPrice && !Unlocked[0]) {
        Mt -= UnlockPrice
        Unlocked[0] = true
    }
}
function CoolUnlock(){
    let UnlockPrice = 10*k
    if (Mt>=UnlockPrice && !Unlocked[1]) {
        Mt -= UnlockPrice
        Unlocked[1] = true
    }
}
// Buttons
function Unlockables(){
    if (Mt>5){
        Unlocked[2] = true
    }

    if (Mt>=1*k){
        Unlocked[3] = true
    }

    if (Unlocked[0] && Unlocked[1]){
        Unlocked[4] = true
    }
}


// Upgrades
function Upgrades(){
    if (CrustUpgrades[0]) {cuCS1Multi = 2.5}
    else if (!CrustUpgrades[0]){cuCS1Multi = 1}
    if (CrustUpgrades[1]) {cuCS2Multi = 5}
    else if (!CrustUpgrades[1]){cuCS2Multi = 1}
    if (CrustUpgrades[2]) {cuCP1Multi = 2.5}
    else if (!CrustUpgrades[2]){cuCP1Multi = 1}
    if (CrustUpgrades[3]) {cuCP2Multi = 5}
    else if (!CrustUpgrades[3]){cuCP2Multi = 1}
    if (CrustUpgrades[4]) {cuMt1Multi = 10}
    else if (!CrustUpgrades[4]){cuMt1Multi = 1}
    if (CrustUpgrades[5]) {cuMt2Multi = k}
    else if (!CrustUpgrades[5]){cuMt2Multi = 1}
}

// Achievements
function Achievements() {
    // CS
    let achCS1 = document.getElementById("AchCS1")
    if (CS>=5){ // 5 base
        AchMulti[0] = 2 // CS Boost
        achCS1.style.backgroundColor = "lightgreen"
    }
    let achCS2 = document.getElementById("AchCS2")
    if (CS>=100) { // base*20
        AchMulti[1] = 2 // CS Boost
        achCS2.style.backgroundColor = "lightgreen"
    }
    let achCS3 = document.getElementById("AchCS3")
    if (CS>=2000) { // base*20^2
        AchMulti[2] = 2 // CS Boost
        achCS3.style.backgroundColor = "lightgreen"
    }
    // CP
    let achCP1 = document.getElementById("AchCP1")
    if (CP>=5) { // 5 base
        AchMulti[3] = 1.75 // CP Boost
        achCP1.style.backgroundColor = "lightgreen"
    }
    let achCP2 = document.getElementById("AchCP2")
    if (CP>=100) { // base*20
        AchMulti[4] = 1.75 // CP Boost
        achCP2.style.backgroundColor = "lightgreen"
    }
    let achCP3 = document.getElementById("AchCP3")
    if (CP>=2000) { // base*20^2
        AchMulti[5] = 1.75 // CP Boost
        achCP3.style.backgroundColor = "lightgreen"
    }
    // Mt
    let achMt1 = document.getElementById("AchMt1")
    if (Mt>=5) { // 5 base
        AchMulti[6] = 1.5 // Mt Boost
        achMt1.style.backgroundColor = "lightgreen"
    }
    let achMt2 = document.getElementById("AchMt2")
    if (Mt>=100) { // base*20
        AchMulti[7] = 1.5 // Mt Boost
        achMt2.style.backgroundColor = "lightgreen"
    }
    let achMt3 = document.getElementById("AchMt3")
    if (Mt>=2000) { // base*20^2
        AchMulti[8] = 1.5 // Mt Boost
        achMt3.style.backgroundColor = "lightgreen"
    }
}
// Changed Background if Reached
function ShowAchievements(){
    let MainInfo = document.getElementById("MainInfo")

    let CS1 = document.getElementById("AchCS1")
    let CS1Info = document.getElementById("InfoCS1")
    CS1.addEventListener("mouseover", function(){
        CS1Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CS1.addEventListener("mouseout", function(){
        CS1Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let CS2 = document.getElementById("AchCS2")
    let CS2Info = document.getElementById("InfoCS2")
    CS2.addEventListener("mouseover", function(){
        CS2Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CS2.addEventListener("mouseout", function(){
        CS2Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let CS3 = document.getElementById("AchCS3")
    let CS3Info = document.getElementById("InfoCS3")
    CS3.addEventListener("mouseover", function(){
        CS3Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CS3.addEventListener("mouseout", function(){
        CS3Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let CP1 = document.getElementById("AchCP1")
    let CP1Info = document.getElementById("InfoCP1")
    CP1.addEventListener("mouseover", function(){
        CP1Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CP1.addEventListener("mouseout", function(){
        CP1Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let CP2 = document.getElementById("AchCP2")
    let CP2Info = document.getElementById("InfoCP2")
    CP2.addEventListener("mouseover", function(){
        CP2Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CP2.addEventListener("mouseout", function(){
        CP2Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })


    let CP3 = document.getElementById("AchCP3")
    let CP3Info = document.getElementById("InfoCP3")
    CP3.addEventListener("mouseover", function(){
        CP3Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CP3.addEventListener("mouseout", function(){
        CP3Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let Mt1 = document.getElementById("AchMt1")
    let Mt1Info = document.getElementById("InfoMt1")
    Mt1.addEventListener("mouseover", function(){
        Mt1Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    Mt1.addEventListener("mouseout", function(){
        Mt1Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let Mt2 = document.getElementById("AchMt2")
    let Mt2Info = document.getElementById("InfoMt2")
    Mt2.addEventListener("mouseover", function(){
        Mt2Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    Mt2.addEventListener("mouseout", function(){
        Mt2Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let Mt3 = document.getElementById("AchMt3")
    let Mt3Info = document.getElementById("InfoMt3")
    Mt3.addEventListener("mouseover", function(){
        Mt3Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    Mt3.addEventListener("mouseout", function(){
        Mt3Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    
}

// Formulas
function Formulas(){
    // Generations
    CSsec = 0.1*CSGenNum
    CPsec = 0.01*CPGenNum
    Mtsec = 0.001*MtGenNum
    if(tBBNum>0){CMsec = 1000**tBBNum}
    if(ICNum>0){PCsec = 10**ICNum}

    // Generators Prices
    CSGenPrice = 10**CSGenNum
    CPGenPrice = 2**CPGenNum
    MtGenPrice = 3**MtGenNum
    tBBPrice = 1+tBBNum
    ICPrice = 1+ICNum

    // Buyables Prices
    MBCP1Price = 15*(1+Math.pow(2, MBCP1Num)).toFixed(0)// CP
    MBMt1Price = 15*(1+Math.pow(2, MBMt1Num)).toFixed(0) // Mt
    MBCS1Price = 15*(1+Math.pow(2, MBCS1Num)).toFixed(0) // CS
    //Buyables Multis
    if (MBCP1Num>0){MBCP1Multi = 1.1*MBCP1Num}
    if (MBMt1Num>0){MBMt1Multi = 1.1*MBMt1Num}
    if (MBCS1Num>0){MBCS1Multi = 1.1*MBCS1Num}

    // Convertiors Prices
    CPConver = CS/10
    MtConver = CP/10

    HtStConverPrice = 1e6**(1+TotalHtSt)
    ClStConverPrice = 1e6*(10**TotalClSt)
    if(Mt>=HtStConverPrice){HtStConver = 1}
    else if (Mt<HtStConverPrice){HtStConver=0}
    if(Mt>=ClStConverPrice){ClStConver = 1}
    else if (Mt<ClStConverPrice){ClStConver=0}
    
    Upgrades()
    Achievements()
}

// Update Info
function Show(){
    CSUnitText.innerHTML = "Crust Shards: " + CS.toFixed(1) + " CS"
    CPUnitText.innerHTML = "Crust Pieces: " + CP.toFixed(1) + " CP"
    MtUnitText.innerHTML = "Matter: " + Mt.toFixed(1) + " Mt"
    HtStUnitText.innerHTML = "Heat Stones: " + HtSt.toFixed(1) + " HtSt"
    ClStUnitText.innerHTML = "Cool Stones: " + ClSt.toFixed(1) + " ClSt"
    CMUnitText.innerHTML = CM.toFixed(0) + " CM"
    PCUnitText.innerHTML =  PC.toFixed(0) + " PC"
    CSGenPriceUnitText.innerHTML = CSGenPrice + " Mt"
    CPGenPriceUnitText.innerHTML = CPGenPrice + " CP"
    MtGenPriceUnitText.innerHTML= MtGenPrice + " Mt"
    tBBPriceUnitText.innerHTML = tBBPrice + " HtSt"
    ICPriceUnitText.innerHTML = ICPrice + " ClSt"
    ConvertToCPUnitText.innerHTML = CPConver.toFixed(1) + " CP"
    ConvertToMtUnitText.innerHTML = MtConver.toFixed(1) + " Mt"
    ConvertToHtStUnitText.innerHTML = HtStConver.toFixed(1)
    ConvertToClStUnitText.innerHTML = ClStConver.toFixed(1)
    MBCP1PriceText.innerHTML = MBCP1Price + " CP"
    MBMt1PriceText.innerHTML = MBMt1Price + " Mt"
    MBCS1PriceText.innerHTML = MBCS1Price + " CS"

    Unlockables()
    Formulas()
    ColorVisibleShow()
    ShowAchievements()
}

// Color Changes on bought/unlock (upgrades/achievements)
function ColorVisibleShow(){
    // Colors
    // Crust Upgrades
    let cuCS1 = document.getElementById("crustUpgradeCS1")
    if (CrustUpgrades[0]){
        cuCS1.style.backgroundColor = "lightgreen"
    } else if (!CrustUpgrades[0]){cuCS1.style.backgroundColor = "white"}
    let cuCS2 = document.getElementById("crustUpgradeCS2")
    if (CrustUpgrades[1]){
        cuCS2.style.backgroundColor = "lightgreen"
    } else if (!CrustUpgrades[1]){cuCS2.style.backgroundColor = "white"}
    let cuCP1 = document.getElementById("crustUpgradeCP1")
    if (CrustUpgrades[2]){
        cuCP1.style.backgroundColor = "lightgreen"
    } else if (!CrustUpgrades[2]){cuCP1.style.backgroundColor = "white"}
    let cuCP2 = document.getElementById("crustUpgradeCP2")
    if (CrustUpgrades[3]){
        cuCP2.style.backgroundColor = "lightgreen"
    } else if (!CrustUpgrades[3]){cuCP2.style.backgroundColor = "white"}
    let cuMt1 = document.getElementById("crustUpgradeMt1")
    if (CrustUpgrades[4]){
        cuMt1.style.backgroundColor = "lightgreen"
    } else if (!CrustUpgrades[4]){cuMt1.style.backgroundColor = "white"}
    let cuMt2 = document.getElementById("crustUpgradeMt2")
    if (CrustUpgrades[5]){
        cuMt2.style.backgroundColor = "lightgreen"
    } else if (!CrustUpgrades[5]){cuMt2.style.backgroundColor = "white"}

    // Heat-Cool Unlock
    let unlockableHeat = document.getElementById("unlockableHeat")
    if (Unlocked[0]) {
        unlockableHeat.style.backgroundColor = "lightgreen"
    }
    let unlockableCool = document.getElementById("unlockableCool")
    if (Unlocked[1]) {
        unlockableCool.style.backgroundColor = "lightgreen"
    }


    // Visible
    // Matter Upgrades Unlock
    let MatterUpgrades = document.getElementById("matterUpgrades")
    if (Unlocked[2]){
        MatterUpgrades.style.visibility = "inherit"
    } else if (!Unlocked[2]){MatterUpgrades.style.visibility = "hidden"}
    // Heat-Cool Upgrades Unlock
    let HeatMainUpgrade = document.getElementById("unlockableHeat")
    let CoolMainUpgrade = document.getElementById("unlockableCool")
    if (Unlocked[3]){
        HeatMainUpgrade.style.visibility = "inherit"
        CoolMainUpgrade.style.visibility = "inherit"
    }
    // Heat-Cool Tab Unlock
    let HCButton = document.getElementById("HeatCoolTab")
    let UpgButton = document.getElementById("UpgradesTab")
    let HCUnits = document.getElementById("HeatCoolUnits")
    let UnitsBox = document.getElementById("UnitsBox")
    if (Unlocked[4]){
        HCButton.style.visibility = "visible"
        UpgButton.style.visibility = "visible"
        HCUnits.style.visibility = "visible"
        HCUnits.style.position = "relative"
        UnitsBox.style.height = "120px"
    }
}


// Increment
let LoopCountNum = 0
function MainLoop(){
    if (LoopCountNum != 0 && LoopCountNum % 100 === 0){
        Increment()
        LoopCountNum = 0
    } else {LoopCountNum++}

    Show()
}
function Increment(){
    
    CS += (((CSsec)*MBCS1Multi)*cuCS1Multi*cuCS2Multi)*AchMulti[0]*AchMulti[1]*AchMulti[2]
    CP += (((CPsec)*MBCP1Multi)*cuCP1Multi*cuCP2Multi)*AchMulti[3]*AchMulti[4]*AchMulti[5]
    Mt += (((Mtsec)*MBMt1Multi)*cuMt1Multi*cuMt2Multi)*AchMulti[6]*AchMulti[7]*AchMulti[8]

    CM += (((CMsec)))
    PC += (((PCsec)))
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
function BuytBB(){
    if (HtSt>=tBBPrice){
        HtSt -= tBBPrice
        tBBNum++
    }
}
function BuyIC(){
    if (ClSt>=ICPrice) {
        ClSt -= ICPrice
        ICNum++
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
function HtStConvertion(){
    if (Mt>=HtStConverPrice){
        HtSt += HtStConver
        TotalHtSt += HtStConver
        HCReset()
    }
}
function ClStConvertion(){
    if (Mt>=ClStConverPrice) {
        ClSt += ClStConver
        TotalClSt += ClStConver
        HCReset()
    }
}

// Crust Upgrades
function CUCS1(){
    let cuCS1Price = 10// CS
    if (CS>=cuCS1Price && !CrustUpgrades[0]){
        CS -= cuCS1Price
        CrustUpgrades[0] = true
    }
}
function CUCS2(){
    let cuCS2Price = 100 // CP
    if (CS>=cuCS2Price && !CrustUpgrades[1]){
        CS -= cuCS2Price
        CrustUpgrades[1] = true
    }
}
function CUCP1(){
    let cuCP1Price = 10 // CP
    if (CP>=cuCP1Price && !CrustUpgrades[2]){
        CP -= cuCP1Price
        CrustUpgrades[2] = true
    }
}
function CUCP2(){
    let cuCP2Price = 100 // Mt
    if (CP>=cuCP2Price && !CrustUpgrades[3]){
        CP -= cuCP2Price
        CrustUpgrades[3] = true
    }
}
function CUMt1(){
    let cuMt1Price = 10 // Mt
    if (Mt>=cuMt1Price && !CrustUpgrades[4]){
        Mt -= cuMt1Price
        CrustUpgrades[4] = true
    }
}
function CUMt2(){
    let cuMt2Price = k // Mt
    if (Mt>=cuMt2Price && !CrustUpgrades[5]){
        Mt -= cuMt2Price
        CrustUpgrades[5] = true
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

