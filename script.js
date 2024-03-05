window.setInterval(MainLoop, 100) // Increment/sec


/*
    Abbreviations->{
        CS = Crust Shards
        CP = Crust Pieces
        Mt = Matter
        HtSt = Heat Stones
        ClSt = Cool Stones
        HtClSt = Heat-Cool Stones
        CM = Cosmic Microwaves
        PC = Protostellar Clouds
        tBB = tiny Big Bang (CM Gen)
        IC = Interestellar Clouds (PC Gen)
        EM = Elemental Matte
        FE = Fire Essence
        WE = Water Essence
        LE = Lightning Essen
        EE = Earth Essence

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
let EM = 0 // Elemental Matter
let FE = 0 // Fire Essence
let WE = 0 // Water Essence
let LE = 0 // Lightning Essence
let EE = 0 // Earth Essence
// Units/sec
let CSsec = 0 // CS  Formula
let CPsec = 0 // CP  Formula
let Mtsec = 0 // Mt  Formula
let CMsec = 0 // CM Formula
let PCsec = 0 // PC Formula
let FEsec = 0 // FE Formula
let WEsec = 0 // WE Formula
let LEsec = 0 // LE Formula
let EEsec = 0 // EE Formula
// Units/Convertion
let CPConver = 0 // CP  Formula
let MtConver = 0 // Mt  Formula
let HtStConver = 0 // HtSt Formula
let ClStConver = 0 // ClSt Formula
let EMConver = 0 // EM Formuña
// Convertion Price
let HtStConverPrice
let ClStConverPrice


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
let ConvertToEMUnitText
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
        ConvertToEMUnitText = document.getElementById("ConvertToEMUnitText")
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
// Crust Upgrades
let cuCS1Multi = 1 // 2.5*CSsec
let cuCS2Multi = 1 // 5*CSsec
let cuCP1Multi = 1 // 2.5*CPsec
let cuCP2Multi = 1 // 5*CPsec
let cuMt1Multi = 1 // 10*Mtsec
let cuMt2Multi = 1 // 1e3*Mtsec
// Boost Upgrades
let buCSMulti = 1 // 1e6*CSsec
let buCPMulti = 1 // 1e6*CPsec
let buMtMulti = 1 // 1e6*Mtsec
let buCMMulti = 1 // 1e6*CMsec
let buPCMulti = 1 // 1e6*PCsec
// Heat-Cool Upgrades
// Heat
let HtCM1Multi = 1 // CSsec*10
let HtCM2Multi = 1 // CMsec*CS/1e6
let HtCM3Multi = 1 // PCsec*2
let HtCM4Multi = 1 // CSsec*100
let HtCM5Multi = 1 // CM*PC/1e3
let HtCM6Multi = 1 // PC*5
let HtCM7Multi = 1 // PC*log10(CM)
let HtCM8Multi = 1 // CM*1e3
let HtCM9Multi = 1 // PC*10
let HtCM10Multi = 1 // CM*1000
// Cool
let ClPC1Multi = 1 // CPsec*10
let ClPC2Multi = 1 // PCsec*CP/1e6
let ClPC3Multi = 1 // CMsec*10
let ClPC4Multi = 1 // CPsec*100
let ClPC5Multi = 1 // PC*CM/1e9
let ClPC6Multi = 1 // CM*100
let ClPC7Multi = 1 // CM*1e3log10(PC)
let ClPC8Multi = 1 // PC*10
let ClPC9Multi = 1 // CM*100
let ClPC10Multi = 1 // PC*100

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
// Automation Upgrades
let AutomationUpgrades = [
    false, // CP Conver Auto
    false, // Mt Conver Auto
    false, // HtSt Conver Auto
    false // ClSt Conver Auto
]
// Boost Upgrades
let BoostUpgrades = [
    false, // CS Boost
    false, // CP Boost
    false, // Mt Boost
    false, // CM Boost
    false // PC Boost
]
// Heat-Cool Upgrades
// Heat
let HeatUpgrades = [
    // first row
    false, // CM 1
    false, // CM 2
    false, // CM 3
    false, // CM 4
    false, // CM 5
    false, // CM 6
    // second row
    false, // CM 7
    false, // CM 8
    false, // CM 9
    false // CM 10
]
// Cool
let CoolUpgrades = [
    // first row
    false, // PC 1
    false, // PC 2
    false, // PC 3
    false, // PC 4
    false, // PC 5
    false, // PC 6
    // second row
    false, // PC 7
    false, // PC 8
    false, // PC 9
    false // PC 10
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
    false, // Heat
    false, // Cool

    false, // Matter Upgrades
    false, // Heat-Cool

    false, // Heat-Cool Tab ([0] && [1])

    false, // Elemental Matter
    false, // Elemental Matter

    false // Elemental Matter Tab ([5] && [6])
]

// Achievements
let AchievementsData = [
    false, false, false, // CS
    false, false, false, // CP
    false, false, false, // Mt

    false, false, false, // Stones
    false, false, false, // CM
    false, false, false // PC
]
let AchMulti = [
    // Crust
    1, 1, 1, // 2, 2, 2  CS
    1, 1, 1, // 1.75, 1.75, 1.75  CP
    1, 1, 1, // 1.5, 1.5, 1.5  Mt
    // Heat-Cool
    1, 1, 1, // 1e3  CS, 1e3  CP, 1e3  Mt
    1, 1, 1, // 10, 10, 1e3  CM
    1, 1, 1 // 2, 5, 10  PC
]

// Save-Load
// Save
function Save(){
    let gameData =
    {
        CS: CS, CP: CP, Mt: Mt, HtSt: HtSt, ClSt: ClSt, CM: CM, PC: PC,
        CSGenNum: CSGenNum, CPGenNum: CPGenNum, MtGenNum: MtGenNum, tBBNum: tBBNum, ICNum: ICNum,
        MBCP1Num: MBCP1Num, MBMt1Num: MBMt1Num, MBCS1Num: MBCS1Num,
        CrustUpgrades: CrustUpgrades,
        AutomationUpgrades: AutomationUpgrades,
        BoostUpgrades: BoostUpgrades,
        HeatUpgrades: HeatUpgrades,
        CoolUpgrades: CoolUpgrades,
        Unlocked: Unlocked,
        AchievementsData: AchievementsData,
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
            HtSt = gameData.HtSt
            ClSt = gameData.ClSt
            CM = gameData.CM
            PC = gameData.PC

            CSGenNum = gameData.CSGenNum
            CPGenNum = gameData.CPGenNum
            MtGenNum = gameData.MtGenNum
            tBBNum = gameData.tBBNum
            ICNum = gameData.ICNum

            MBCP1Num = gameData.MBCP1Num
            MBCS1Num = gameData.MBCS1Num
            MBMt1Num = gameData.MBMt1Num

            CrustUpgrades = gameData.CrustUpgrades
            AutomationUpgrades = gameData.AutomationUpgrades
            BoostUpgrades = gameData.BoostUpgrades
            HeatUpgrades = gameData.HeatUpgrades
            CoolUpgrades = gameData.CoolUpgrades

            Unlocked = gameData.Unlocked

            AchievementsData = gameData.AchievementsData
        }
        console.log("Game data loaded")
        console.log(gameData)
    }

    reader.readAsText(file)
}



// Tabs Visibility
let MainInfoCU = document.getElementById("CrustUpgradesInfo")
let CDTab = document.getElementById("crustDrill")
let UpgTab = document.getElementById("generalUpgrades")
let AchTab = document.getElementById("Achievements")
let HCTab = document.getElementById("Heat-Cool")
let HeatUpgradesVisibility = document.getElementById("HeatUpgrades")
let CoolUpgradesVisibility = document.getElementById("CoolUpgrades")
let EMTab = document.getElementById("ElementalMatter")
let FETab = document.getElementById("FireEssence")
let WETab = document.getElementById("WaterEssence")
let LETab = document.getElementById("LightningEssence")
let EETab = document.getElementById("EarthEssence")
function VisibilityCD(){
    MainInfoCU.style.visibility = "inherit"
    CDTab.style.visibility = "visible"
    UpgTab.style.visibility = "hidden"
    AchTab.style.visibility = "hidden"
    HCTab.style.visibility = "hidden"
    HeatUpgradesVisibility.style.visibility = "hidden"
    CoolUpgradesVisibility.style.visibility = "hidden"
    EMTab.style.visibility = "hidden"
    FETab.style.visibility = "hidden"
    WETab.style.visibility = "hidden"
    LETab.style.visibility = "hidden"
    EETab.style.visibility = "hidden"
}
function VisibilityAch(){
    MainInfoCU.style.visibility = "hidden"
    CDTab.style.visibility = "hidden"
    UpgTab.style.visibility = "hidden"
    AchTab.style.visibility = "visible"
    HCTab.style.visibility = "hidden"
    HeatUpgradesVisibility.style.visibility = "hidden"
    CoolUpgradesVisibility.style.visibility = "hidden"
    EMTab.style.visibility = "hidden"
    FETab.style.visibility = "hidden"
    WETab.style.visibility = "hidden"
    LETab.style.visibility = "hidden"
    EETab.style.visibility = "hidden"
}
function VisibilityUpg(){
    MainInfoCU.style.visibility = "hidden"
    CDTab.style.visibility = "hidden"
    UpgTab.style.visibility = "visible"
    AchTab.style.visibility = "hidden"
    HCTab.style.visibility = "hidden"
    HeatUpgradesVisibility.style.visibility = "hidden"
    CoolUpgradesVisibility.style.visibility = "hidden"
    EMTab.style.visibility = "hidden"
    FETab.style.visibility = "hidden"
    WETab.style.visibility = "hidden"
    LETab.style.visibility = "hidden"
    EETab.style.visibility = "hidden"
}
function VisibilityHC(){
    MainInfoCU.style.visibility = "hidden"
    CDTab.style.visibility = "hidden"
    UpgTab.style.visibility = "hidden"
    AchTab.style.visibility = "hidden"
    HCTab.style.visibility = "visible"
    HeatUpgradesVisibility.style.visibility = "hidden"
    CoolUpgradesVisibility.style.visibility = "hidden"
    EMTab.style.visibility = "hidden"
    FETab.style.visibility = "hidden"
    WETab.style.visibility = "hidden"
    LETab.style.visibility = "hidden"
    EETab.style.visibility = "hidden"
}
function VisibilityEM(){
    MainInfoCU.style.visibility = "hidden"
    CDTab.style.visibility = "hidden"
    UpgTab.style.visibility = "hidden"
    AchTab.style.visibility = "hidden"
    HCTab.style.visibility = "hidden"
    HeatUpgradesVisibility.style.visibility = "hidden"
    CoolUpgradesVisibility.style.visibility = "hidden"
    EMTab.style.visibility = "visible"
    FETab.style.visibility = "hidden"
    WETab.style.visibility = "hidden"
    LETab.style.visibility = "hidden"
    EETab.style.visibility = "hidden"
}
function VisibilityFE(){
    MainInfoCU.style.visibility = "hidden"
    CDTab.style.visibility = "hidden"
    UpgTab.style.visibility = "hidden"
    AchTab.style.visibility = "hidden"
    HCTab.style.visibility = "hidden"
    HeatUpgradesVisibility.style.visibility = "hidden"
    CoolUpgradesVisibility.style.visibility = "hidden"
    EMTab.style.visibility = "hidden"
    FETab.style.visibility = "visible"
    WETab.style.visibility = "hidden"
    LETab.style.visibility = "hidden"
    EETab.style.visibility = "hidden"
}
function VisibilityWE(){
    MainInfoCU.style.visibility = "hidden"
    CDTab.style.visibility = "hidden"
    UpgTab.style.visibility = "hidden"
    AchTab.style.visibility = "hidden"
    HCTab.style.visibility = "hidden"
    HeatUpgradesVisibility.style.visibility = "hidden"
    CoolUpgradesVisibility.style.visibility = "hidden"
    EMTab.style.visibility = "hidden"
    FETab.style.visibility = "hidden"
    WETab.style.visibility = "visible"
    LETab.style.visibility = "hidden"
    EETab.style.visibility = "hidden"
}
function VisibilityLE(){
    MainInfoCU.style.visibility = "hidden"
    CDTab.style.visibility = "hidden"
    UpgTab.style.visibility = "hidden"
    AchTab.style.visibility = "hidden"
    HCTab.style.visibility = "hidden"
    HeatUpgradesVisibility.style.visibility = "hidden"
    CoolUpgradesVisibility.style.visibility = "hidden"
    EMTab.style.visibility = "hidden"
    FETab.style.visibility = "hidden"
    WETab.style.visibility = "hidden"
    LETab.style.visibility = "visible"
    EETab.style.visibility = "hidden"
}
function VisibilityEE(){
    MainInfoCU.style.visibility = "hidden"
    CDTab.style.visibility = "hidden"
    UpgTab.style.visibility = "hidden"
    AchTab.style.visibility = "hidden"
    HCTab.style.visibility = "hidden"
    HeatUpgradesVisibility.style.visibility = "hidden"
    CoolUpgradesVisibility.style.visibility = "hidden"
    EMTab.style.visibility = "hidden"
    FETab.style.visibility = "hidden"
    WETab.style.visibility = "hidden"
    LETab.style.visibility = "hidden"
    EETab.style.visibility = "visible"
}
// Upgrades Visibility
function VisibilityHeatUpgrades(){
    if (HeatUpgradesVisibility.style.visibility == "hidden"){
        HeatUpgradesVisibility.style.visibility = "visible"
    } else {HeatUpgradesVisibility.style.visibility = "hidden"}
}
function VisibilityCoolUpgrades(){
    if (CoolUpgradesVisibility.style.visibility == "hidden"){
        CoolUpgradesVisibility.style.visibility = "visible"
    } else {CoolUpgradesVisibility.style.visibility = "hidden"}
}


// Unlocks
// Features
// Heat-Cool
function HeatUnlock() {
    let UnlockPrice = 1e4
    if (Mt>=UnlockPrice && !Unlocked[0]) {
        Mt -= UnlockPrice
        Unlocked[0] = true
    }
}
function CoolUnlock(){
    let UnlockPrice = 1e4
    if (Mt>=UnlockPrice && !Unlocked[1]) {
        Mt -= UnlockPrice
        Unlocked[1] = true
    }
}
// Elemental Matter
function ElementalMatterUnlockHt(){
    if (CM>=1e19) {
        CM -= 1e19
        Unlocked[5] = true
    }
}
function ElementalMatterUnlockCl() {
    if (PC>=1e13){
        PC -= 1e13
        Unlocked[6] = true
    }
}
// Buttons
function Unlockables(){
    if (Mt>5){
        Unlocked[2] = true
    }

    if (Mt>=1e3){
        Unlocked[3] = true
    }

    if (Unlocked[0] && Unlocked[1]){
        Unlocked[4] = true
    }

    if (Unlocked[5] && Unlocked[6]) {
        Unlocked[7] = true
    }
}


// Upgrades
function Upgrades(){
    if (CrustUpgrades[0]) {cuCS1Multi = 2.5} // CS Boost
    else if (!CrustUpgrades[0]){cuCS1Multi = 1}
    if (CrustUpgrades[1]) {cuCS2Multi = 5} // CS Boost
    else if (!CrustUpgrades[1]){cuCS2Multi = 1}
    if (CrustUpgrades[2]) {cuCP1Multi = 2.5} // CP Boost
    else if (!CrustUpgrades[2]){cuCP1Multi = 1}
    if (CrustUpgrades[3]) {cuCP2Multi = 5} // CP Boost
    else if (!CrustUpgrades[3]){cuCP2Multi = 1}
    if (CrustUpgrades[4]) {cuMt1Multi = 10} // Mt Boost
    else if (!CrustUpgrades[4]){cuMt1Multi = 1}
    if (CrustUpgrades[5]) {cuMt2Multi = 1e3} // Mt Boost
    else if (!CrustUpgrades[5]){cuMt2Multi = 1}

    if (BoostUpgrades[0]) {buCSMulti = 1e6} // CS Boost
    else if (!BoostUpgrades[0]) {buCSMulti = 1}
    if (BoostUpgrades[1]) {buCPMulti = 1e6} // CP Boost
    else if (!BoostUpgrades[1]) {buCPMulti = 1}
    if (BoostUpgrades[2]) {buMtMulti = 1e6} // Mt Boost
    else if (!BoostUpgrades[2]) {buMtMulti = 1}
    if (BoostUpgrades[3]) {buCMMulti = 1e6} // CM Boost
    else if (!BoostUpgrades[3]) {buCMMulti = 1}
    if (BoostUpgrades[4]) {buPCMulti = 1e6} // PC Boost
    else if (!BoostUpgrades[4]) {buPCMulti = 1}

    if (HeatUpgrades[0]) {HtCM1Multi = 10} // CS Boost
    else if (!HeatUpgrades[0]) {HtCM1Multi = 1}
    if (HeatUpgrades[1] && CS>1) {HtCM2Multi = Math.log10(CS)} // CM Boost
    else if (!HeatUpgrades[1]) {HtCM2Multi = 1}
    if (HeatUpgrades[2]) {HtCM3Multi = 10} // PC Boost
    else if (!HeatUpgrades[2]) {HtCM3Multi = 1}
    if (HeatUpgrades[3]) {HtCM4Multi = 100} // CM Boost
    else if (!HeatUpgrades[3]) {HtCM4Multi = 1}
    if (HeatUpgrades[4] && CM>1) {HtCM5Multi = Math.log10(CM)} // Mt Boost
    else if (!HeatUpgrades[4]) {HtCM5Multi = 1}
    if (HeatUpgrades[5]) {HtCM6Multi = 10} // PC Boost
    else if (!HeatUpgrades[5]) {HtCM6Multi = 1}
    if (HeatUpgrades[6] && CM>1) {HtCM7Multi = Math.log10(CM)} // PC Boost
    else if (!HeatUpgrades[6]) {HtCM7Multi = 1}
    if (HeatUpgrades[7]) {HtCM8Multi = 1e3} // CM Boost
    else if (!HeatUpgrades[7]) {HtCM8Multi = 1}
    if (HeatUpgrades[8]) {HtCM9Multi = 10} // PC Boost
    else if (!HeatUpgrades[8]) {HtCM9Multi = 1}
    if (HeatUpgrades[9]) {HtCM10Multi = 1000} // CM Boost
    else if (!HeatUpgrades[9]) {HtCM10Multi = 1}

    if (CoolUpgrades[0]) {ClPC1Multi = 10} // CP Boost
    else if (!CoolUpgrades[0]) {ClPC1Multi = 1}
    if (CoolUpgrades[1] && CP>1) {ClPC2Multi = Math.log10(CP)} // PC Boost
    else if (!CoolUpgrades[1]) {ClPC2Multi = 1}
    if (CoolUpgrades[2]) {ClPC3Multi = 10} // CM Boost
    else if (!CoolUpgrades[2]) {ClPC3Multi = 1}
    if (CoolUpgrades[3]) {ClPC4Multi = 100} // PC Boost
    else if (!CoolUpgrades[3]) {ClPC4Multi = 1}
    if (CoolUpgrades[4] && PC>1) {ClPC5Multi = Math.log2(PC)} // Mt Boost
    else if (!CoolUpgrades[4]) {ClPC5Multi = 1}
    if (CoolUpgrades[5]) {ClPC6Multi = 100} // CM Boost
    else if (!CoolUpgrades[5]) {ClPC6Multi = 1}
    if (CoolUpgrades[6] && PC>1) {ClPC7Multi = Math.log2(PC)} // CM Boost
    else if (!CoolUpgrades[6]) {ClPC7Multi = 1}
    if (CoolUpgrades[7]) {ClPC8Multi = 10} // PC Boost
    else if (!CoolUpgrades[7]) {ClPC8Multi = 1}
    if (CoolUpgrades[8]) {ClPC9Multi = 100} // CM Boost
    else if (!CoolUpgrades[8]) {ClPC9Multi = 1}
    if (CoolUpgrades[9]) {ClPC10Multi = 10} // PC Boost
    else if (!CoolUpgrades[9]) {ClPC10Multi = 1}
    
}

// Achievements
function Achievements() {
    // Crust Drill Tab
    // CS
    if (CS>=1000 || AchievementsData[0]){
        AchMulti[0] = 2 // CS Boost
        AchievementsData[0] = true
    }
    if (CS>=1e6 || AchievementsData[1]) {
        AchMulti[1] = 2 // CS Boost
        AchievementsData[1] = true
    }
    if (CS>=1e12 || AchievementsData[2]) {
        AchMulti[2] = 2 // CS Boost
        AchievementsData[2] = true
    }
    // CP
    if (CP>=1000 || AchievementsData[3]) {
        AchMulti[3] = 1.75 // CP Boost
        AchievementsData[3] = true
    }
    if (CP>=1e6 || AchievementsData[4]) { 
        AchMulti[4] = 1.75 // CP Boost
        AchievementsData[4] = true
    }
    if (CP>=1e12 || AchievementsData[5]) {
        AchMulti[5] = 1.75 // CP Boost
        AchievementsData[5] = true
    }
    // Mt
    if (Mt>=1e6 || AchievementsData[6]) {
        AchMulti[6] = 1.5 // Mt Boost
        AchievementsData[6] = true
    }
    if (Mt>=1e15 || AchievementsData[7]) {
        AchMulti[7] = 1.5 // Mt Boost
        AchievementsData[7] = true
    }
    if (Mt>=1e30 || AchievementsData[8]) {
        AchMulti[8] = 1.5 // Mt Boost
        AchievementsData[8] = true
    }

    // Heat-Cool Tab
    // Heat-Cool Stones
    if ((HtSt>=100 && ClSt>=100) || AchievementsData[9]){
        AchMulti[9] = 1e3 // CS Boost
        AchievementsData[9] = true
    }
    if ((HtSt>=1e5 && ClSt>=1e5) || AchievementsData[10]) {
        AchMulti[10] = 1e3 // CP Boost
        AchievementsData[10] = true
    }
    if ((HtSt>=1e10 && ClSt>=1e10) || AchievementsData[11]) {
        AchMulti[11] = 1e3 // Mt Boost
        AchievementsData[11] = true
    }
    // CM
    if (CM>=1e10 || AchievementsData[12]) {
        AchMulti[12] = 10 // CM Boost
        AchievementsData[12] = true
    }
    if (CM>=1e25 || AchievementsData[13]) {
        AchMulti[13] = 10 // CM Boost
        AchievementsData[13] = true
    }
    if (CM>=1e50 || AchievementsData[14]) {
        AchMulti[14] = 10 // CM Boost
        AchievementsData[14] = true
    }
    // PC
    if (PC>=1e6 || AchievementsData[15]) {
        AchMulti[15] = 2 // PC Boost
        AchievementsData[15] = true
    }
    if (PC>=1e15 || AchievementsData[16]) {
        AchMulti[16] = 2 // PC Boost
        AchievementsData[16] = true
    }
    if (PC>=1e30 || AchievementsData[17]) {
        AchMulti[17] = 2.5 // PC Boost
        AchievementsData[17] = true
    }
}
// Info
function AchievementsInfo(){
    // Main Info
    let MainInfo = document.getElementById("MainInfoAch")

    // First Row
    let CS1 = document.getElementById("AchCS1")
    let CS1Info = document.getElementById("InfoCS1Ach")
    CS1.addEventListener("mouseover", function(){
        CS1Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CS1.addEventListener("mouseout", function(){
        CS1Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let CS2 = document.getElementById("AchCS2")
    let CS2Info = document.getElementById("InfoCS2Ach")
    CS2.addEventListener("mouseover", function(){
        CS2Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CS2.addEventListener("mouseout", function(){
        CS2Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let CS3 = document.getElementById("AchCS3")
    let CS3Info = document.getElementById("InfoCS3Ach")
    CS3.addEventListener("mouseover", function(){
        CS3Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CS3.addEventListener("mouseout", function(){
        CS3Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let CP1 = document.getElementById("AchCP1")
    let CP1Info = document.getElementById("InfoCP1Ach")
    CP1.addEventListener("mouseover", function(){
        CP1Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CP1.addEventListener("mouseout", function(){
        CP1Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let CP2 = document.getElementById("AchCP2")
    let CP2Info = document.getElementById("InfoCP2Ach")
    CP2.addEventListener("mouseover", function(){
        CP2Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CP2.addEventListener("mouseout", function(){
        CP2Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let CP3 = document.getElementById("AchCP3")
    let CP3Info = document.getElementById("InfoCP3Ach")
    CP3.addEventListener("mouseover", function(){
        CP3Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CP3.addEventListener("mouseout", function(){
        CP3Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let Mt1 = document.getElementById("AchMt1")
    let Mt1Info = document.getElementById("InfoMt1Ach")
    Mt1.addEventListener("mouseover", function(){
        Mt1Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    Mt1.addEventListener("mouseout", function(){
        Mt1Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let Mt2 = document.getElementById("AchMt2")
    let Mt2Info = document.getElementById("InfoMt2Ach")
    Mt2.addEventListener("mouseover", function(){
        Mt2Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    Mt2.addEventListener("mouseout", function(){
        Mt2Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let Mt3 = document.getElementById("AchMt3")
    let Mt3Info = document.getElementById("InfoMt3Ach")
    Mt3.addEventListener("mouseover", function(){
        Mt3Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    Mt3.addEventListener("mouseout", function(){
        Mt3Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })


    // Second Row
    let HtClSt1 = document.getElementById("AchHtClSt1")
    let HtClSt1Info = document.getElementById("InfoHtClSt1Ach")
    HtClSt1.addEventListener("mouseover", function(){
        HtClSt1Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    HtClSt1.addEventListener("mouseout", function(){
        HtClSt1Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let HtClSt2 = document.getElementById("AchHtClSt2")
    let HtClSt2Info = document.getElementById("InfoHtClSt2Ach")
    HtClSt2.addEventListener("mouseover", function(){
        HtClSt2Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    HtClSt2.addEventListener("mouseout", function(){
        HtClSt2Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let HtClSt3 = document.getElementById("AchHtClSt3")
    let HtClSt3Info = document.getElementById("InfoHtClSt3Ach")
    HtClSt3.addEventListener("mouseover", function(){
        HtClSt3Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    HtClSt3.addEventListener("mouseout", function(){
        HtClSt3Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let CM1 = document.getElementById("AchCM1")
    let CM1Info = document.getElementById("InfoCM1Ach")
    CM1.addEventListener("mouseover", function(){
        CM1Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CM1.addEventListener("mouseout", function(){
        CM1Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let CM2 = document.getElementById("AchCM2")
    let CM2Info = document.getElementById("InfoCM2Ach")
    CM2.addEventListener("mouseover", function(){
        CM2Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CM2.addEventListener("mouseout", function(){
        CM2Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let CM3 = document.getElementById("AchCM3")
    let CM3Info = document.getElementById("InfoCM3Ach")
    CM3.addEventListener("mouseover", function(){
        CM3Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    CM3.addEventListener("mouseout", function(){
        CM3Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

    let PC1 = document.getElementById("AchPC1")
    let PC1Info = document.getElementById("InfoPC1Ach")
    PC1.addEventListener("mouseover", function(){
        PC1Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    PC1.addEventListener("mouseout", function(){
        PC1Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let PC2 = document.getElementById("AchPC2")
    let PC2Info = document.getElementById("InfoPC2Ach")
    PC2.addEventListener("mouseover", function(){
        PC2Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    PC2.addEventListener("mouseout", function(){
        PC2Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })
    let PC3 = document.getElementById("AchPC3")
    let PC3Info = document.getElementById("InfoPC3Ach")
    PC3.addEventListener("mouseover", function(){
        PC3Info.style.visibility = "visible"
        MainInfo.style.visibility = "hidden"
    })
    PC3.addEventListener("mouseout", function(){
        PC3Info.style.visibility = "hidden"
        MainInfo.style.visibility = "inherit"
    })

}

// Formulas
function Formulas(){
    // Generations
    CSsec = 0.1*CSGenNum
    CPsec = 0.01*CPGenNum
    Mtsec = 0.01*MtGenNum

    if(tBBNum>0){CMsec = 10**(3*tBBNum)}
    if(ICNum>0){PCsec = 10**(ICNum)}

    // Generators Prices
    CSGenPrice = 10**CSGenNum
    CPGenPrice = 2**CPGenNum
    MtGenPrice = 3**MtGenNum
    tBBPrice = 10**tBBNum
    ICPrice = 10**ICNum

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

    HtStConverPrice = Math.log10(Mt/1e5)
    ClStConverPrice = Math.log10(Mt/1e5)

    HtStConver = HtStConverPrice
    ClStConver = ClStConverPrice

    Upgrades()
    Achievements()
}

// Update Info
function Show(){
    // Texts with Exponential
    // Units
    if (CS>=1e3){
        CSUnitText.innerHTML = "Crust Shards: " + CS.toExponential(1) + " CS"
    } else {CSUnitText.innerHTML = "Crust Shards: " + CS.toFixed(1) + " CS"}
    if (CP>=1e3){
        CPUnitText.innerHTML = "Crust Pieces: " + CP.toExponential(1) + " CP"
    } else {CPUnitText.innerHTML = "Crust Pieces: " + CP.toFixed(1) + " CP"}
    if (Mt>=1e3){
        MtUnitText.innerHTML = "Matter: " + Mt.toExponential(1) + " Mt"
    } else {MtUnitText.innerHTML = "Matter: " + Mt.toFixed(1) + " Mt"}
    if (HtSt>=1e3){
        HtStUnitText.innerHTML = "Heat Stones: " + HtSt.toExponential(1) + " HtSt"
    } else {HtStUnitText.innerHTML = "Heat Stones: " + HtSt.toFixed(1) + " HtSt"}
    if (ClSt>=1e3){
        ClStUnitText.innerHTML = "Cool Stones: " + ClSt.toExponential(1) + " ClSt"
    } else {ClStUnitText.innerHTML = "Cool Stones: " + ClSt.toFixed(1) + " ClSt"}
    if (CM>=1e3){
        CMUnitText.innerHTML = CM.toExponential(1) + " CM"
    } else {CMUnitText.innerHTML = CM.toFixed(0) + " CM"}
    if (PC>=1e3){
        PCUnitText.innerHTML =  PC.toExponential(1) + " PC"
    } else {PCUnitText.innerHTML =  PC.toFixed(0) + " PC"}
    // Generator Prices
    if (CSGenPrice>=1e3){
        CSGenPriceUnitText.innerHTML = CSGenPrice.toExponential(1) + " Mt"
    } else {CSGenPriceUnitText.innerHTML = CSGenPrice.toFixed(0) + " Mt"}
    if (CPGenPrice>=1e3){
        CPGenPriceUnitText.innerHTML = CPGenPrice.toExponential(1) + " CP"
    } else {CPGenPriceUnitText.innerHTML = CPGenPrice.toFixed(0) + " CP"}
    if (MtGenPrice>=1e3){
        MtGenPriceUnitText.innerHTML= MtGenPrice.toExponential(1) + " Mt"
    } else {MtGenPriceUnitText.innerHTML= MtGenPrice.toFixed(0) + " Mt"}
    if (tBBPrice>=1e3){
        tBBPriceUnitText.innerHTML = tBBPrice.toExponential(1) + " HtSt"
    } else {tBBPriceUnitText.innerHTML = tBBPrice.toFixed(0) + " HtSt"}
    if (ICPrice>=1e3){
        ICPriceUnitText.innerHTML = ICPrice.toExponential(1) + " ClSt"
    } else {ICPriceUnitText.innerHTML = ICPrice.toFixed(0) + " ClSt"}
    // Convertions
    if (CPConver>=1e3){
        ConvertToCPUnitText.innerHTML = CPConver.toExponential(1) + " CP"
    } else {ConvertToCPUnitText.innerHTML = CPConver.toFixed(1) + " CP"}
    if (MtConver>=1e3){
        ConvertToMtUnitText.innerHTML = MtConver.toExponential(1) + " Mt"
    } else {ConvertToMtUnitText.innerHTML = MtConver.toFixed(1) + " Mt"}
    if (HtStConver>=1e3){
        if (HtStConver>0) {
            ConvertToHtStUnitText.innerHTML = HtStConver.toExponential(1)
        } else ConvertToHtStUnitText.innerHTML = 0
    } else {
        if (HtStConver>0) {
            ConvertToHtStUnitText.innerHTML = HtStConver.toFixed(1)
        } else ConvertToHtStUnitText.innerHTML = 0
    }
    if (ClStConver>=1e3){
        if (ClStConver>0) {
            ConvertToClStUnitText.innerHTML = ClStConver.toExponential(1)
        } else ConvertToClStUnitText.innerHTML = 0
    } else {
        if (ClStConver>0) {
        ConvertToClStUnitText.innerHTML = ClStConver.toFixed(1)
        } else ConvertToClStUnitText.innerHTML = 0
    }
    if (EMConver>=1e3) {
        if (EMConver>0){
            ConvertToEMUnitText.innerHTML = EMConver.toExponential(1)
        } else ConvertToEMUnitText.innerHTML = 0
    } else {
        if (EMConver>0){
            ConvertToEMUnitText.innerHTML = EMConver.toFixed(1)
        } else ConvertToEMUnitText.innerHTML = 0
    }
    // Buyables Prices
    if (MBCP1Price>=1e3){
        MBCP1PriceText.innerHTML = MBCP1Price.toExponential(1) + " CP"
    } else {MBCP1PriceText.innerHTML = MBCP1Price.toFixed(0) + " CP"}
    if (MBMt1Price>=1e3){
        MBMt1PriceText.innerHTML = MBMt1Price.toExponential(1) + " Mt"
    } else {MBMt1PriceText.innerHTML = MBMt1Price.toFixed(0) + " Mt"}
    if (MBCS1Price>=1e3){
        MBCS1PriceText.innerHTML = MBCS1Price.toExponential(1) + " CS"
    } else {MBCS1PriceText.innerHTML = MBCS1Price.toFixed(0) + " CS"}

    /* Normal Texts
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
    */

    Unlockables()
    Formulas()
    ColorVisibleShow()
    UpgradesInfo()
    AchievementsInfo()
}

// Color Changes on bought/unlock (upgrades/achievements)
function ColorVisibleShow(){
    // Colors
    // Achievements
    // CS
    let AchCS1 = document.getElementById("AchCS1")
    if (AchMulti[0]==2){
        AchCS1.style.backgroundColor = "lightgreen"
    }
    let AchCS2 = document.getElementById("AchCS2")
    if (AchMulti[1]==2) {
        AchCS2.style.backgroundColor = "lightgreen"
    }
    let AchCS3 = document.getElementById("AchCS3")
    if (AchMulti[2]==2) {
        AchCS3.style.backgroundColor = "lightgreen"
    }
    // CP
    let AchCP1 = document.getElementById("AchCP1")
    if (AchMulti[3]==1.75) {
        AchCP1.style.backgroundColor = "lightgreen"
    }
    let AchCP2 = document.getElementById("AchCP2")
    if (AchMulti[4]==1.75) {
        AchCP2.style.backgroundColor = "lightgreen"
    }
    let AchCP3 = document.getElementById("AchCP3")
    if (AchMulti[5]==1.75) {
        AchCP3.style.backgroundColor = "lightgreen"
    }
    // Mt
    let AchMt1 = document.getElementById("AchMt1")
    if (AchMulti[6]==1.5) {
        AchMt1.style.backgroundColor = "lightgreen"
    }
    let AchMt2 = document.getElementById("AchMt2")
    if (AchMulti[7]==1.5) {
        AchMt2.style.backgroundColor = "lightgreen"
    }
    let AchMt3 = document.getElementById("AchMt3")
    if (AchMulti[8]==1.5) {
        AchMt3.style.backgroundColor = "lightgreen"
    }
    // Heat-Cool Stones
    let AchHtClSt1 = document.getElementById("AchHtClSt1")
    if (AchMulti[9]==1e3){
        AchHtClSt1.style.backgroundColor = "lightgreen"
    }
    let AchHtClSt2 = document.getElementById("AchHtClSt2")
    if (AchMulti[10]==1e3) {
        AchHtClSt2.style.backgroundColor = "lightgreen"
    }
    let AchHtClSt3 = document.getElementById("AchHtClSt3")
    if (AchMulti[11]==1e3) {
        AchHtClSt3.style.backgroundColor = "lightgreen"
    }
    // CM
    let AchCM1 = document.getElementById("AchCM1")
    if (AchMulti[12]==10) {
        AchCM1.style.backgroundColor = "lightgreen"
    }
    let AchCM2 = document.getElementById("AchCM2")
    if (AchMulti[13]==10) {
        AchCM2.style.backgroundColor = "lightgreen"
    }
    let AchCM3 = document.getElementById("AchCM3")
    if (AchMulti[14]==10) {
        AchCM3.style.backgroundColor = "lightgreen"
    }
    // PC
    let AchPC1 = document.getElementById("AchPC1")
    if (AchMulti[15]==2) {
        AchPC1.style.backgroundColor = "lightgreen"
    }
    let AchPC2 = document.getElementById("AchPC2")
    if (AchMulti[16]==2) {
        AchPC2.style.backgroundColor = "lightgreen"
    }
    let AchPC3 = document.getElementById("AchPC3")
    if (AchMulti[17]==2.5) {
        AchPC3.style.backgroundColor = "lightgreen"
    }

    // Upgrades
    // Crust
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
    // Automation
    let autoCPGen = document.getElementById("CPConverAutoUpg")
    if (AutomationUpgrades[0]){
        autoCPGen.style.backgroundColor = "lightgreen"
    } else if (!AutomationUpgrades[0]){autoCPGen.style.backgroundColor = "white"}
    let autoMtGen = document.getElementById("MtConverAutoUpg")
    if (AutomationUpgrades[1]){
        autoMtGen.style.backgroundColor = "lightgreen"
    } else if (!AutomationUpgrades[1]){autoMtGen.style.backgroundColor = "white"}
    let autoHtStGen = document.getElementById("HtStConverAutoUpg")
    if (AutomationUpgrades[2]){
        autoHtStGen.style.backgroundColor = "lightgreen"
    } else if (!AutomationUpgrades[2]){autoHtStGen.style.backgroundColor = "white"}
    let autoClStGen = document.getElementById("ClStConverAutoUpg")
    if (AutomationUpgrades[3]){
        autoClStGen.style.backgroundColor = "lightgreen"
    } else if (!AutomationUpgrades[3]){autoClStGen.style.backgroundColor = "white"}
    // Boosts
    let bCS = document.getElementById("CSBoostUpg")
    if (BoostUpgrades[0]) {
        bCS.style.backgroundColor = "lightgreen"
    } else if (!BoostUpgrades[0]) {bCS.style.backgroundColor = "white"}
    let bCP = document.getElementById("CPBoostUpg")
    if (BoostUpgrades[1]) {
        bCP.style.backgroundColor = "lightgreen"
    } else if (!BoostUpgrades[1]) {bCP.style.backgroundColor = "white"}
    let bMt = document.getElementById("MtBoostUpg")
    if (BoostUpgrades[2]) {
        bMt.style.backgroundColor = "lightgreen"
    } else if (!BoostUpgrades[2]) {bMt.style.backgroundColor = "white"}
    let bCM = document.getElementById("CMBoostUpg")
    if (BoostUpgrades[3]) {
        bCM.style.backgroundColor = "lightgreen"
    } else if (!BoostUpgrades[3]) {bCM.style.backgroundColor = "white"}
    let bPC = document.getElementById("PCBoostUpg")
    if (BoostUpgrades[4]) {
        bPC.style.backgroundColor = "lightgreen"
    } else if (!BoostUpgrades[4]) {bPC.style.backgroundColor = "white"}
    // Heat
    let HtCM1 = document.getElementById("HeatUpgradeCM1")
    if (HeatUpgrades[0]) {
        HtCM1.style.backgroundColor = "lightgreen"
    } else if (!HeatUpgrades[0]) {HtCM1.style.backgroundColor = "white"}
    let HtCM2 = document.getElementById("HeatUpgradeCM2")
    if (HeatUpgrades[1]) {
        HtCM2.style.backgroundColor = "lightgreen"
    } else if (!HeatUpgrades[1]) {HtCM2.style.backgroundColor = "white"}
    let HtCM3 = document.getElementById("HeatUpgradeCM3")
    if (HeatUpgrades[2]) {
        HtCM3.style.backgroundColor = "lightgreen"
    } else if (!HeatUpgrades[2]) {HtCM3.style.backgroundColor = "white"}
    let HtCM4 = document.getElementById("HeatUpgradeCM4")
    if (HeatUpgrades[3]) {
        HtCM4.style.backgroundColor = "lightgreen"
    } else if (!HeatUpgrades[3]) {HtCM4.style.backgroundColor = "white"}
    let HtCM5 = document.getElementById("HeatUpgradeCM5")
    if (HeatUpgrades[4]) {
        HtCM5.style.backgroundColor = "lightgreen"
    } else if (!HeatUpgrades[4]) {HtCM5.style.backgroundColor = "white"}
    let HtCM6 = document.getElementById("HeatUpgradeCM6")
    if (HeatUpgrades[5]) {
        HtCM6.style.backgroundColor = "lightgreen"
    } else if (!HeatUpgrades[5]) {HtCM6.style.backgroundColor = "white"}
    let HtCM7 = document.getElementById("HeatUpgradeCM7")
    if (HeatUpgrades[6]) {
        HtCM7.style.backgroundColor = "lightgreen"
    } else if (!HeatUpgrades[6]) {HtCM7.style.backgroundColor = "white"}
    let HtCM8 = document.getElementById("HeatUpgradeCM8")
    if (HeatUpgrades[7]) {
        HtCM8.style.backgroundColor = "lightgreen"
    } else if (!HeatUpgrades[7]) {HtCM8.style.backgroundColor = "white"}
    let HtCM9 = document.getElementById("HeatUpgradeCM9")
    if (HeatUpgrades[8]) {
        HtCM9.style.backgroundColor = "lightgreen"
    } else if (!HeatUpgrades[8]) {HtCM9.style.backgroundColor = "white"}
    let HtCM10 = document.getElementById("HeatUpgradeCM10")
    if (HeatUpgrades[9]) {
        HtCM10.style.backgroundColor = "lightgreen"
    } else if (!HeatUpgrades[9]) {HtCM10.style.backgroundColor = "white"}
    // Cool
    let ClPC1 = document.getElementById("CoolUpgradePC1")
    if (CoolUpgrades[0]) {
        ClPC1.style.backgroundColor = "lightgreen"
    } else if (!CoolUpgrades[0]) {ClPC1.style.backgroundColor = "white"}
    let ClPC2 = document.getElementById("CoolUpgradePC2")
    if (CoolUpgrades[1]) {
        ClPC2.style.backgroundColor = "lightgreen"
    } else if (!CoolUpgrades[1]) {ClPC2.style.backgroundColor = "white"}
    let ClPC3 = document.getElementById("CoolUpgradePC3")
    if (CoolUpgrades[2]) {
        ClPC3.style.backgroundColor = "lightgreen"
    } else if (!CoolUpgrades[2]) {ClPC3.style.backgroundColor = "white"}
    let ClPC4 = document.getElementById("CoolUpgradePC4")
    if (CoolUpgrades[3]) {
        ClPC4.style.backgroundColor = "lightgreen"
    } else if (!CoolUpgrades[3]) {ClPC4.style.backgroundColor = "white"}
    let ClPC5 = document.getElementById("CoolUpgradePC5")
    if (CoolUpgrades[4]) {
        ClPC5.style.backgroundColor = "lightgreen"
    } else if (!CoolUpgrades[4]) {ClPC5.style.backgroundColor = "white"}
    let ClPC6 = document.getElementById("CoolUpgradePC6")
    if (CoolUpgrades[5]) {
        ClPC6.style.backgroundColor = "lightgreen"
    } else if (!CoolUpgrades[5]) {ClPC6.style.backgroundColor = "white"}
    let ClPC7 = document.getElementById("CoolUpgradePC7")
    if (CoolUpgrades[6]) {
        ClPC7.style.backgroundColor = "lightgreen"
    } else if (!CoolUpgrades[6]) {ClPC7.style.backgroundColor = "white"}
    let ClPC8 = document.getElementById("CoolUpgradePC8")
    if (CoolUpgrades[7]) {
        ClPC8.style.backgroundColor = "lightgreen"
    } else if (!CoolUpgrades[7]) {ClPC8.style.backgroundColor = "white"}
    let ClPC9 = document.getElementById("CoolUpgradePC9")
    if (CoolUpgrades[8]) {
        ClPC9.style.backgroundColor = "lightgreen"
    } else if (!CoolUpgrades[8]) {ClPC9.style.backgroundColor = "white"}
    let ClPC10 = document.getElementById("CoolUpgradePC10")
    if (CoolUpgrades[9]) {
        ClPC10.style.backgroundColor = "lightgreen"
    } else if (!CoolUpgrades[9]) {ClPC10.style.backgroundColor = "white"}



    // Unlocks
    // Heat-Cool
    let unlockableHeat = document.getElementById("unlockableHeat")
    if (Unlocked[0]) {
        unlockableHeat.style.backgroundColor = "lightgreen"
    }
    let unlockableCool = document.getElementById("unlockableCool")
    if (Unlocked[1]) {
        unlockableCool.style.backgroundColor = "lightgreen"
    }
    // Elemental Matter
    let unlockableElementalMatterHt = document.getElementById("HeatUpgradeCMEM")
    if (Unlocked[5]) {
        unlockableElementalMatterHt.style.background = "linear-gradient(to bottom right, red, blue, green,  yellow, brown)"
        unlockableElementalMatterHt.style.color = "white"
    }
    let unlockableElementalMatterCl = document.getElementById("CoolUpgradePCEM")
    if (Unlocked[6]) {
        unlockableElementalMatterCl.style.background = "linear-gradient(to bottom right, red, blue, green,  yellow, brown)"
        unlockableElementalMatterCl.style.color = "white"
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
    // Elemental Matter and Essences Tabs
    let EMButton = document.getElementById("ElementalMatterTab")
    let FEButton = document.getElementById("FireEssenceTab")
    let WEButton = document.getElementById("WaterEssenceTab")
    let LEButton = document.getElementById("LightningEssenceTab")
    let EEButton = document.getElementById("EarthEssenceTab")
    if (Unlocked[7]){
        EMButton.style.visibility = "visible"
        FEButton.style.visibility = "visible"
        WEButton.style.visibility = "visible"
        LEButton.style.visibility = "visible"
        EEButton.style.visibility = "visible"
    }
}

// Close
function CloseHeatUpgrades(){
    document.getElementById("HeatUpgrades").style.visibility = "hidden"
}
function CloseCoolUpgrades(){
    document.getElementById("CoolUpgrades").style.visibility = "hidden"
}


// Increment
let LoopCountNum = 0
function MainLoop(){
    if (LoopCountNum != 0 && LoopCountNum % 10 === 0){
        Increment()
        LoopCountNum = 0
    } else {LoopCountNum++}

    Show()
}
function Increment(){
    CS += (((CSsec)*AchMulti[0]*AchMulti[1]*AchMulti[2]*AchMulti[9])*(cuCS1Multi*cuCS2Multi)*(buCSMulti)*(HtCM1Multi))*MBCS1Multi
    if (AutomationUpgrades[0]){CP += CPConver}
    CP += (((CPsec)*AchMulti[3]*AchMulti[4]*AchMulti[5]*AchMulti[10])*(cuCP1Multi*cuCP2Multi)*(buCPMulti)*(ClPC1Multi))*MBCP1Multi
    if (AutomationUpgrades[1]){Mt += MtConver}
    Mt += (((Mtsec)*AchMulti[6]*AchMulti[7]*AchMulti[8]*AchMulti[11])*(cuMt1Multi*cuMt2Multi)*(buMtMulti)*(HtCM5Multi)*(ClPC5Multi))*MBMt1Multi

    if (AutomationUpgrades[2]){HtSt += HtStConver*0.1}
    if (AutomationUpgrades[3]){ClSt += ClStConver*0.1}
    
    CM += (((CMsec)*AchMulti[12]*AchMulti[13]*AchMulti[14])*(buCMMulti)*(HtCM2Multi*HtCM8Multi*HtCM4Multi*HtCM9Multi)*(ClPC3Multi*ClPC6Multi*ClPC7Multi*ClPC10Multi))
    PC += (((PCsec)*AchMulti[15]*AchMulti[16]*AchMulti[17])*(buPCMulti)*(HtCM3Multi*HtCM6Multi*HtCM7Multi*HtCM10Multi)*(ClPC2Multi*ClPC8Multi*ClPC4Multi*ClPC9Multi))
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
    if (Mt>=HtStConverPrice && HtStConver>0){
        HtSt += HtStConver
        HCReset()
    }
}
function ClStConvertion(){
    if (Mt>=ClStConverPrice && ClStConver>0) {
        ClSt += ClStConver
        HCReset()
    }
}

// Upgrades
// Crust Upgrades
function CUCS1(){
    if (CS>=10 && !CrustUpgrades[0]){
        CS -= 10
        CrustUpgrades[0] = true
    }
}
function CUCS2(){
    if (CS>=100 && !CrustUpgrades[1]){
        CS -= 100
        CrustUpgrades[1] = true
    }
}
function CUCP1(){
    if (CP>=10 && !CrustUpgrades[2]){
        CP -= 10
        CrustUpgrades[2] = true
    }
}
function CUCP2(){
    if (CP>=100 && !CrustUpgrades[3]){
        CP -= 100
        CrustUpgrades[3] = true
    }
}
function CUMt1(){
    if (Mt>=10 && !CrustUpgrades[4]){
        Mt -= 10
        CrustUpgrades[4] = true
    }
}
function CUMt2(){
    if (Mt>=100 && !CrustUpgrades[5]){
        Mt -= 100
        CrustUpgrades[5] = true
    }
}
// General Upgrades
// Automation
function CPConverAuto(){
    if ((HtSt>=10 && ClSt>=10) && !AutomationUpgrades[0]){
        HtSt -= 10
        ClSt -= 10
        AutomationUpgrades[0] = true
    }
}
function MtConverAuto(){
    if ((HtSt>=100 && ClSt>=100) && !AutomationUpgrades[1]){
        HtSt -= 100
        ClSt -= 100
        AutomationUpgrades[1] = true
    }
}
function HtStConverAuto(){
    if ((HtSt>=1e3 && ClSt>=1e3) && !AutomationUpgrades[2]){
        HtSt -= 1e3
        ClSt -= 1e3
        AutomationUpgrades[2] = true
    }
}
function ClStConverAuto(){
    if ((HtSt>=1e3 && ClSt>=1e3) && !AutomationUpgrades[3]){
        HtSt -= 1e3
        ClSt -= 1e3
        AutomationUpgrades[3] = true
    }
}
// Boost
function CSBoost(){
    if (CM>=1e10 && !BoostUpgrades[0]){
        CM -= 1e10
        BoostUpgrades[0] = true
    }
}
function CPBoost(){
    if (CM>=1e15 && !BoostUpgrades[1]){
        CM -= 1e15
        BoostUpgrades[1] = true
    }
}
function MtBoost(){
    if (CM>=1e20 && !BoostUpgrades[2]){
        CM -= 1e20
        BoostUpgrades[2] = true
    }
}
function CMBoost(){
    if (PC>=1e10 && !BoostUpgrades[3]){
        PC -= 1e10
        BoostUpgrades[3] = true
    }
}
function PCBoost(){
    if (CM>=1e25 && !BoostUpgrades[4]){
        CM -= 1e25
        BoostUpgrades[4] = true
    }
}
// Heat-Cool Upgrades
// Heat
function HeatUpgradeCM1(){
    if (CM>=1e4 && !HeatUpgrades[0]){
        CM -= 1e4
        HeatUpgrades[0] = true
    }
}
function HeatUpgradeCM2(){
    if (CM>=1e9 && !HeatUpgrades[1]){
        CM -= 1e9
        HeatUpgrades[1] = true
    }
}
function HeatUpgradeCM3(){
    if (CM>=1e7 && !HeatUpgrades[2]){
        CM -= 1e7
        HeatUpgrades[2] = true
    }
}
function HeatUpgradeCM4(){
    if (CM>=1e5 && !HeatUpgrades[3]){
        CM -= 1e5
        HeatUpgrades[3] = true
    }
}
function HeatUpgradeCM5(){
    if (CM>=1e6 && !HeatUpgrades[4]){
        CM -= 1e6
        HeatUpgrades[4] = true
    }
}
function HeatUpgradeCM6(){
    if (CM>=1e8 && !HeatUpgrades[5]){
        CM -= 1e8
        HeatUpgrades[5] = true
    }
}
function HeatUpgradeCM7(){
    if (CM>=1e14 && !HeatUpgrades[6]){
        CM -= 1e14
        HeatUpgrades[6] = true
    }
}
function HeatUpgradeCM8(){
    if (CM>=1e12 && !HeatUpgrades[7]){
        CM -= 1e12
        HeatUpgrades[7] = true
    }
}
function HeatUpgradeCM9(){
    if (CM>=1e15 && !HeatUpgrades[8]){
        CM -= 1e15
        HeatUpgrades[8] = true
    }
}
function HeatUpgradeCM10(){
    if (CM>=1e16 && !HeatUpgrades[9]){
        CM -= 1e16
        HeatUpgrades[9] = true
    }
}

// Cool
function CoolUpgradePC1(){
    if (PC>=100 && !CoolUpgrades[0]){
        PC -= 100
        CoolUpgrades[0] = true
    }
}
function CoolUpgradePC2(){
    if (PC>=1e7 && !CoolUpgrades[1]){
        PC -= 1e7
        CoolUpgrades[1] = true
    }
}
function CoolUpgradePC3(){
    if (PC>=1e5 && !CoolUpgrades[2]){
        PC -= 1e5
        CoolUpgrades[2] = true
    }
}
function CoolUpgradePC4(){
    if (PC>=1000 && !CoolUpgrades[3]){
        PC -= 1000
        CoolUpgrades[3] = true
    }
}
function CoolUpgradePC5(){
    if (PC>=1e4 && !CoolUpgrades[4]){
        PC -= 1e4
        CoolUpgrades[4] = true
    }
}
function CoolUpgradePC6(){
    if (PC>=1e6 && !CoolUpgrades[5]){
        PC -= 1e6
        CoolUpgrades[5] = true
    }
}
function CoolUpgradePC7(){
    if (PC>=1e9 && !CoolUpgrades[6]){
        PC -= 1e9
        CoolUpgrades[6] = true
    }
}
function CoolUpgradePC8(){
    if (PC>=1e8 && !CoolUpgrades[7]){
        PC -= 1e8
        CoolUpgrades[7] = true
    }
}
function CoolUpgradePC9(){
    if (PC>=1e10 && !CoolUpgrades[8]){
        PC -= 1e10
        CoolUpgrades[8] = true
    }
}
function CoolUpgradePC10(){
    if (PC>=1e11 && !CoolUpgrades[9]){
        PC -= 1e11
        CoolUpgrades[9] = true
    }
}

// Info
function UpgradesInfo(){
    // Crust Upgrades
    let MainInfoCU = document.getElementById("MainInfoCrustUpgrades")

    let CP1 = document.getElementById("crustUpgradeCP1")
    let CP1Info = document.getElementById("InfoCP1Upg")
    CP1.addEventListener("mouseover", function (){
        CP1Info.style.visibility = "visible"
        MainInfoCU.style.visibility = "hidden"
    })
    CP1.addEventListener("mouseout", function (){
        CP1Info.style.visibility = "hidden"
        MainInfoCU.style.visibility = "inherit"
    })
    let CP2 = document.getElementById("crustUpgradeCP2")
    let CP2Info = document.getElementById("InfoCP2Upg")
    CP2.addEventListener("mouseover", function (){
        CP2Info.style.visibility = "visible"
        MainInfoCU.style.visibility = "hidden"
    })
    CP2.addEventListener("mouseout", function (){
        CP2Info.style.visibility = "hidden"
        MainInfoCU.style.visibility = "inherit"
    })
    let CS1 = document.getElementById("crustUpgradeCS1")
    let CS1Info = document.getElementById("InfoCS1Upg")
    CS1.addEventListener("mouseover", function (){
        CS1Info.style.visibility = "visible"
        MainInfoCU.style.visibility = "hidden"
    })
    CS1.addEventListener("mouseout", function (){
        CS1Info.style.visibility = "hidden"
        MainInfoCU.style.visibility = "inherit"
    })
    let CS2 = document.getElementById("crustUpgradeCS2")
    let CS2Info = document.getElementById("InfoCS2Upg")
    CS2.addEventListener("mouseover", function (){
        CS2Info.style.visibility = "visible"
        MainInfoCU.style.visibility = "hidden"
    })
    CS2.addEventListener("mouseout", function (){
        CS2Info.style.visibility = "hidden"
        MainInfoCU.style.visibility = "inherit"
    })
    let Mt1 = document.getElementById("crustUpgradeMt1")
    let Mt1Info = document.getElementById("InfoMt1Upg")
    Mt1.addEventListener("mouseover", function (){
        Mt1Info.style.visibility = "visible"
        MainInfoCU.style.visibility = "hidden"
    })
    Mt1.addEventListener("mouseout", function (){
        Mt1Info.style.visibility = "hidden"
        MainInfoCU.style.visibility = "inherit"
    })
    let Mt2 = document.getElementById("crustUpgradeMt2")
    let Mt2Info = document.getElementById("InfoMt2Upg")
    Mt2.addEventListener("mouseover", function (){
        Mt2Info.style.visibility = "visible"
        MainInfoCU.style.visibility = "hidden"
    })
    Mt2.addEventListener("mouseout", function (){
        Mt2Info.style.visibility = "hidden"
        MainInfoCU.style.visibility = "inherit"
    })
    let HtMain = document.getElementById("unlockableHeat")
    let HtMainInfo = document.getElementById("InfoHeatMainUpg")
    HtMain.addEventListener("mouseover", function (){
        HtMainInfo.style.visibility = "visible"
        MainInfoCU.style.visibility = "hidden"
    })
    HtMain.addEventListener("mouseout", function (){
        HtMainInfo.style.visibility = "hidden"
        MainInfoCU.style.visibility = "inherit"
    })
    let ClMain = document.getElementById("unlockableCool")
    let ClMainInfo = document.getElementById("InfoCoolMainUpg")
    ClMain.addEventListener("mouseover", function (){
        ClMainInfo.style.visibility = "visible"
        MainInfoCU.style.visibility = "hidden"
    })
    ClMain.addEventListener("mouseout", function (){
        ClMainInfo.style.visibility = "hidden"
        MainInfoCU.style.visibility = "inherit"
    })

    // General Upgrades
    let MainInfoGU = document.getElementById("MainInfoGeneralUpgrades")
    // Automation
    let CPConverAuto = document.getElementById("CPConverAutoUpg")
    let CPConverAutoInfo = document.getElementById("InfoCPConverAutoUpg")
    CPConverAuto.addEventListener("mouseover", function (){
        CPConverAutoInfo.style.visibility = "visible"
        MainInfoGU.style.visibility = "hidden"
    })
    CPConverAuto.addEventListener("mouseout", function (){
        CPConverAutoInfo.style.visibility = "hidden"
        MainInfoGU.style.visibility = "inherit"
    })
    let MtConverAuto = document.getElementById("MtConverAutoUpg")
    let MtConverAutoInfo = document.getElementById("InfoMtConverAutoUpg")
    MtConverAuto.addEventListener("mouseover", function (){
        MtConverAutoInfo.style.visibility = "visible"
        MainInfoGU.style.visibility = "hidden"
    })
    MtConverAuto.addEventListener("mouseout", function (){
        MtConverAutoInfo.style.visibility = "hidden"
        MainInfoGU.style.visibility = "inherit"
    })
    let HtStConverAuto = document.getElementById("HtStConverAutoUpg")
    let HtStConverAutoInfo = document.getElementById("InfoHtStConverAutoUpg")
    HtStConverAuto.addEventListener("mouseover", function (){
        HtStConverAutoInfo.style.visibility = "visible"
        MainInfoGU.style.visibility = "hidden"
    })
    HtStConverAuto.addEventListener("mouseout", function (){
        HtStConverAutoInfo.style.visibility = "hidden"
        MainInfoGU.style.visibility = "inherit"
    })
    let ClStConverAuto = document.getElementById("ClStConverAutoUpg")
    let ClStConverAutoInfo = document.getElementById("InfoClStConverAutoUpg")
    ClStConverAuto.addEventListener("mouseover", function (){
        ClStConverAutoInfo.style.visibility = "visible"
        MainInfoGU.style.visibility = "hidden"
    })
    ClStConverAuto.addEventListener("mouseout", function (){
        ClStConverAutoInfo.style.visibility = "hidden"
        MainInfoGU.style.visibility = "inherit"
    })
    // Boost
    let CSBoost = document.getElementById("CSBoostUpg")
    let CSBoostInfo = document.getElementById("InfoCSBoostUpg")
    CSBoost.addEventListener("mouseover", function (){
        CSBoostInfo.style.visibility = "visible"
        MainInfoGU.style.visibility = "hidden"
    })
    CSBoost.addEventListener("mouseout", function (){
        CSBoostInfo.style.visibility = "hidden"
        MainInfoGU.style.visibility = "inherit"
    })
    let CPBoost = document.getElementById("CPBoostUpg")
    let CPBoostInfo = document.getElementById("InfoCPBoostUpg")
    CPBoost.addEventListener("mouseover", function (){
        CPBoostInfo.style.visibility = "visible"
        MainInfoGU.style.visibility = "hidden"
    })
    CPBoost.addEventListener("mouseout", function (){
        CPBoostInfo.style.visibility = "hidden"
        MainInfoGU.style.visibility = "inherit"
    })
    let MtBoost = document.getElementById("MtBoostUpg")
    let MtBoostInfo = document.getElementById("InfoMtBoostUpg")
    MtBoost.addEventListener("mouseover", function (){
        MtBoostInfo.style.visibility = "visible"
        MainInfoGU.style.visibility = "hidden"
    })
    MtBoost.addEventListener("mouseout", function (){
        MtBoostInfo.style.visibility = "hidden"
        MainInfoGU.style.visibility = "inherit"
    })
    let CMBoost = document.getElementById("CMBoostUpg")
    let CMBoostInfo = document.getElementById("InfoCMBoostUpg")
    CMBoost.addEventListener("mouseover", function (){
        CMBoostInfo.style.visibility = "visible"
        MainInfoGU.style.visibility = "hidden"
    })
    CMBoost.addEventListener("mouseout", function (){
        CMBoostInfo.style.visibility = "hidden"
        MainInfoGU.style.visibility = "inherit"
    })
    let PCBoost = document.getElementById("PCBoostUpg")
    let PCBoostInfo = document.getElementById("InfoPCBoostUpg")
    PCBoost.addEventListener("mouseover", function (){
        PCBoostInfo.style.visibility = "visible"
        MainInfoGU.style.visibility = "hidden"
    })
    PCBoost.addEventListener("mouseout", function (){
        PCBoostInfo.style.visibility = "hidden"
        MainInfoGU.style.visibility = "inherit"
    })

    // Heat Upgrades
    let MainInfoHtU = document.getElementById("MainInfoHeatUpgrades")
    let HtCM1 = document.getElementById("HeatUpgradeCM1")
    let HtCM1Info = document.getElementById("InfoHtCM1")
    HtCM1.addEventListener("mouseover", function (){
        HtCM1Info.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCM1.addEventListener("mouseout", function (){
        HtCM1Info.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })
    let HtCM2 = document.getElementById("HeatUpgradeCM2")
    let HtCM2Info = document.getElementById("InfoHtCM2")
    HtCM2.addEventListener("mouseover", function (){
        HtCM2Info.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCM2.addEventListener("mouseout", function (){
        HtCM2Info.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })
    let HtCM3 = document.getElementById("HeatUpgradeCM3")
    let HtCM3Info = document.getElementById("InfoHtCM3")
    HtCM3.addEventListener("mouseover", function (){
        HtCM3Info.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCM3.addEventListener("mouseout", function (){
        HtCM3Info.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })
    let HtCM4 = document.getElementById("HeatUpgradeCM4")
    let HtCM4Info = document.getElementById("InfoHtCM4")
    HtCM4.addEventListener("mouseover", function (){
        HtCM4Info.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCM4.addEventListener("mouseout", function (){
        HtCM4Info.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })
    let HtCM5 = document.getElementById("HeatUpgradeCM5")
    let HtCM5Info = document.getElementById("InfoHtCM5")
    HtCM5.addEventListener("mouseover", function (){
        HtCM5Info.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCM5.addEventListener("mouseout", function (){
        HtCM5Info.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })
    let HtCM6 = document.getElementById("HeatUpgradeCM6")
    let HtCM6Info = document.getElementById("InfoHtCM6")
    HtCM6.addEventListener("mouseover", function (){
        HtCM6Info.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCM6.addEventListener("mouseout", function (){
        HtCM6Info.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })
    let HtCM7 = document.getElementById("HeatUpgradeCM7")
    let HtCM7Info = document.getElementById("InfoHtCM7")
    HtCM7.addEventListener("mouseover", function (){
        HtCM7Info.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCM7.addEventListener("mouseout", function (){
        HtCM7Info.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })
    let HtCM8 = document.getElementById("HeatUpgradeCM8")
    let HtCM8Info = document.getElementById("InfoHtCM8")
    HtCM8.addEventListener("mouseover", function (){
        HtCM8Info.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCM8.addEventListener("mouseout", function (){
        HtCM8Info.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })
    let HtCM9 = document.getElementById("HeatUpgradeCM9")
    let HtCM9Info = document.getElementById("InfoHtCM9")
    HtCM9.addEventListener("mouseover", function (){
        HtCM9Info.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCM9.addEventListener("mouseout", function (){
        HtCM9Info.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })
    let HtCM10 = document.getElementById("HeatUpgradeCM10")
    let HtCM10Info = document.getElementById("InfoHtCM10")
    HtCM10.addEventListener("mouseover", function (){
        HtCM10Info.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCM10.addEventListener("mouseout", function (){
        HtCM10Info.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })
    let HtCMEM = document.getElementById("HeatUpgradeCMEM")
    let HtCMEMInfo = document.getElementById("InfoHtCMEM")
    HtCMEM.addEventListener("mouseover", function (){
        HtCMEMInfo.style.visibility = "visible"
        MainInfoHtU.style.visibility = "hidden"
    })
    HtCMEM.addEventListener("mouseout", function (){
        HtCMEMInfo.style.visibility = "hidden"
        MainInfoHtU.style.visibility = "inherit"
    })

    // Cool Upgrades
    let MainInfoClU = document.getElementById("MainInfoCoolUpgrades")
    let ClPC1 = document.getElementById("CoolUpgradePC1")
    let ClPC1Info = document.getElementById("InfoClPC1")
    ClPC1.addEventListener("mouseover", function (){
        ClPC1Info.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPC1.addEventListener("mouseout", function (){
        ClPC1Info.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
    let ClPC2 = document.getElementById("CoolUpgradePC2")
    let ClPC2Info = document.getElementById("InfoClPC2")
    ClPC2.addEventListener("mouseover", function (){
        ClPC2Info.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPC2.addEventListener("mouseout", function (){
        ClPC2Info.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
    let ClPC3 = document.getElementById("CoolUpgradePC3")
    let ClPC3Info = document.getElementById("InfoClPC3")
    ClPC3.addEventListener("mouseover", function (){
        ClPC3Info.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPC3.addEventListener("mouseout", function (){
        ClPC3Info.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
    let ClPC4 = document.getElementById("CoolUpgradePC4")
    let ClPC4Info = document.getElementById("InfoClPC4")
    ClPC4.addEventListener("mouseover", function (){
        ClPC4Info.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPC4.addEventListener("mouseout", function (){
        ClPC4Info.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
    let ClPC5 = document.getElementById("CoolUpgradePC5")
    let ClPC5Info = document.getElementById("InfoClPC5")
    ClPC5.addEventListener("mouseover", function (){
        ClPC5Info.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPC5.addEventListener("mouseout", function (){
        ClPC5Info.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
    let ClPC6 = document.getElementById("CoolUpgradePC6")
    let ClPC6Info = document.getElementById("InfoClPC6")
    ClPC6.addEventListener("mouseover", function (){
        ClPC6Info.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPC6.addEventListener("mouseout", function (){
        ClPC6Info.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
    let ClPC7 = document.getElementById("CoolUpgradePC7")
    let ClPC7Info = document.getElementById("InfoClPC7")
    ClPC7.addEventListener("mouseover", function (){
        ClPC7Info.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPC7.addEventListener("mouseout", function (){
        ClPC7Info.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
    let ClPC8 = document.getElementById("CoolUpgradePC8")
    let ClPC8Info = document.getElementById("InfoClPC8")
    ClPC8.addEventListener("mouseover", function (){
        ClPC8Info.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPC8.addEventListener("mouseout", function (){
        ClPC8Info.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
    let ClPC9 = document.getElementById("CoolUpgradePC9")
    let ClPC9Info = document.getElementById("InfoClPC9")
    ClPC9.addEventListener("mouseover", function (){
        ClPC9Info.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPC9.addEventListener("mouseout", function (){
        ClPC9Info.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
    let ClPC10 = document.getElementById("CoolUpgradePC10")
    let ClPC10Info = document.getElementById("InfoClPC10")
    ClPC10.addEventListener("mouseover", function (){
        ClPC10Info.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPC10.addEventListener("mouseout", function (){
        ClPC10Info.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
    let ClPCEM = document.getElementById("CoolUpgradePCEM")
    let ClPCEMInfo = document.getElementById("InfoClPCEM")
    ClPCEM.addEventListener("mouseover", function (){
        ClPCEMInfo.style.visibility = "visible"
        MainInfoClU.style.visibility = "hidden"
    })
    ClPCEM.addEventListener("mouseout", function (){
        ClPCEMInfo.style.visibility = "hidden"
        MainInfoClU.style.visibility = "inherit"
    })
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