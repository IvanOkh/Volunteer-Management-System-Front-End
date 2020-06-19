export class DogForm {
  // nameOfDog: string;
  // fname: string;
  // lname: string;

  // address: string;
  // city: string;
  // province: string; // 2 letter abbreviation
  // postalCode: string;
  // homePhone: string;
  // cellPhone: string;
  // email: string;
  // age: number;
  // //YOUR FAMILY AND LIFESTYLE
  // householdAgreement: boolean; // yes/no
  // membersIntroduced: boolean; // yes/no
  // dogAllergies: boolean; // yes/no
  // howManyAdults: number; // number of adults
  // howManyChildren: number; // number of children
  // childrenAges: string; // {#},{#},{#},{#}...
  // childrenDogHandling: string;
  // childrenVisiting: boolean; // yes/no
  // visitingFrequency: string; // daily OR weekly OR monthly OR annually
  // childrenPrepared: string;
  // familyBusy: string; // very busy OR a little OR not at all
  // familyActive: string; // very busy OR a little OR not at all
  // scheduleRegularity: string; // very regular OR very irregular OR moderate
  // familyPersonality: string;
  // familyPlans: string; // moving OR vacation OR change (change in schedule) OR {other}

  // //YOUR HOME
  // typeOfResidence: string; // house OR apartment OR condo OR trailer OR inner city OR suburban OR acreage OR rural OR {other}
  // own: boolean; // own/rent -> true/false
  // landlordContact: string;
  // dogsAllowed: boolean; // yes/no -> true/false
  // restrictions: string; // true,true,true -> String
  // livingSituationChanges: string;
  // yardType: string; // no yard OR fenced OR not fenced OR partially fenced
  // fenceType: string;
  // fenceHeight: number;
  // dogAddons: string; //true,true,true,true

  // //Current/Previous pets
  // otherDogs: boolean; // yes/no -> true/false
  // dogsInfo: string;
  // otherPets: boolean; // yes/no -> true/false
  // otherPetsInfo: string; // // {pet type},{pet type},{pet type},{pet type}....
  // spayedAndNeutered: number;
  // petLocation: string;
  // priorAdoption: boolean; // yes/no -> true/false
  // groupName: string;
  // surrenderedPet: boolean; // yes/no -> true/false
  // circumstances: string;
  // vetInfo: string;

  // //New Pet Info
  // primaryCaretaker: string;
  // hadDogs: boolean; // yes/no -> true/false
  // housebrokenBefore: boolean; // yes/no -> true/false
  // dogCorrectionPlan: string;
  // dogStayDay: string; // true,true,true,true,true,true,true,true
  // dogStayNight: string; // true,true,true,true,true,true,true,true
  // vacationHome: string; // at home with care OR boarding OR with family/friends OR {other}
  // leftAloneWeekday: number;
  // leftAloneWeekend: number;
  // petAdjustment: number;
  // dogActivities: string; // true,true,true.... x16 total
  // foodExpenses: number;
  // vetExpenses: number;
  // groomingExpenses: number;
  // boardingExpenses: number;
  // gender: string;
  // typeOfCoat: string;
  // dogAge: string;
  // breedTypeColour: string;
  // friendlyWithChildren: string; // V or S or N
  // friendlyWithDogs: string; // V or S or N
  // friendlyWithCats: string; // V or S or N
  // friendlyWithMe: string; // V or S or N
  // friendlyWithVisitors: string; // V or S or N
  // enjoyBeingGroomed: string; // V or S or N
  // enjoyBeingHeld: string; // V or S or N
  // enjoyBeingPetted: string; // V or S or N
  // beCalm: string; // V or S or N
  // beActive: string; // V or S or N
  // bePlayful: string; // V or S or N
  // beQuiet: string; // V or S or N
  // beIndependent: string; // V or S or N
  // wakeMeUpAtNight: string; // V or S or N
  // aggressiveBehaviour: string; // V or S or N
  // beProtective: string; // V or S or N
  // houseTrained: string;
  // obedienceTrained: string;
  // firstTimeOwner: string;
  // obedienceKnowledge: string;
  // handleDifficultDog: string;
  // trainingClasses: string;
  // lifeStyleChange: string;
  // medical: boolean;
  // dogPast: string;
  // insurance: boolean;
  // dogMaturing: boolean;
  // giveUpDog: string;
  // giveUpCirucumstances: string;

  // ref1_fname: string;
  // ref1_lname: string;
  // ref1_relationship: string;
  // ref1_phoneNumber: string;
  // ref1_email: string;

  // ref2_fname: string;
  // ref2_lname: string;
  // ref2_relationship: string;
  // ref2_phoneNumber: string;
  // ref2_email: string;

  // findOutAbout: string;
  //CONSTRUCTOR
  constructor(
    id: number,
    submissionDate: string,
    rejected: boolean,
    rejectionReason: string,
    nameOfDog: string,
    fname: string,
    lname: string,
    address: string,
    city: string,
    province: string,
    postalCode: string,
    homePhone: string,
    cellPhone: string,
    email: string,
    age: number,
    householdAgreement: boolean,
    membersIntroduced: boolean,
    dogAllergies: boolean,
    howManyAdults: number,
    howManyChildren: number,
    childrenAges: string,
    childrenDogHandling: string,
    childrenVisiting: boolean,
    visitingFrequency: string,
    childrenPrepared: string,
    familyBusy: string,
    familyActive: string,
    scheduleRegularity: string,
    familyPersonality: string,
    familyPlans: string,
    typeOfResidence: string,
    own: boolean,
    landlordContact: string,
    dogsAllowed: boolean,
    restrictions: string,
    livingSituationChanges: string,
    yardType: string,
    fenceType: string,
    fenceHeight: number,
    dogAddons: string,
    otherDogs: boolean,
    dogsInfo: string,
    otherPets: boolean,
    otherPetsInfo: string,
    spayedAndNeutered: number,
    petLocation: string,
    priorAdoption: boolean,
    groupName: string,
    surrenderedPet: boolean,
    circumstances: string,
    vetInfo: string,
    primaryCaretaker: string,
    hadDogs: boolean,
    housebrokenBefore: boolean,
    dogCorrectionPlan: string,
    dogStayDay: string,
    dogStayNight: string,
    vacationHome: string,
    leftAloneWeekday: number,
    leftAloneWeekend: number,
    petAdjustment: number,
    dogActivities: string,
    foodExpenses: number,
    vetExpenses: number,
    groomingExpenses: number,
    boardingExpenses: number,
    gender: string,
    typeOfCoat: string,
    dogAge: string,
    breedTypeColour: string,
    friendlyWithChildren: string,
    friendlyWithDogs: string,
    friendlyWithCats: string,
    friendlyWithMe: string,
    friendlyWithVisitors: string,
    enjoyBeingGroomed: string,
    enjoyBeingHeld: string,
    enjoyBeingPetted: string,
    beCalm: string,
    beActive: string,
    bePlayful: string,
    beQuiet: string,
    beIndependent: string,
    wakeMeUpAtNight: string,
    aggressiveBehaviour: string,
    beProtective: string,
    houseTrained: string,
    obedienceTrained: string,
    firstTimeOwner: string,
    obedienceKnowledge: string,
    handleDifficultDog: string,
    trainingClasses: string,
    lifeStyleChange: string,
    medical: boolean,
    dogPast: string,
    insurance: boolean,
    dogMaturing: boolean,
    giveUpDog: string,
    giveUpCirucumstances: string,
    ref1_fname: string,
    ref1_lname: string,
    ref1_relationship: string,
    ref1_phoneNumber: string,
    ref1_email: string,
    ref2_fname: string,
    ref2_lname: string,
    ref2_relationship: string,
    ref2_phoneNumber: string,
    ref2_email: string,
    findOutAbout: string
  ) {
    // this.nameOfDog = nameOfDog;
    // this.fname = fname;
    // this.lname = lname;
    // this.address = address;
    // this.city = city;
    // this.province = province;
    // this.postalCode = postalCode;
    // this.homePhone = homePhone;
    // this.cellPhone = cellPhone;
    // this.email = email;
    // this.age = age;
    // this.householdAgreement = householdAgreement;
    // this.membersIntroduced = membersIntroduced;
    // this.dogAllergies = dogAllergies;
    // this.howManyAdults = howManyAdults;
    // this.howManyChildren = howManyChildren;
    // this.childrenAges = childrenAges;
    // this.childrenDogHandling = childrenDogHandling;
    // this.childrenVisiting = childrenVisiting;
    // this.visitingFrequency = visitingFrequency;
    // this.childrenPrepared = childrenPrepared;
    // this.familyBusy = familyBusy;
    // this.familyActive = familyActive;
    // this.scheduleRegularity = scheduleRegularity;
    // this.familyPersonality = familyPersonality;
    // this.familyPlans = familyPlans;
    // this.typeOfResidence = typeOfResidence;
    // this.own = own;
    // this.landlordContact = landlordContact;
    // this.dogsAllowed = dogsAllowed;
    // this.restrictions = restrictions;
    // this.livingSituationChanges = livingSituationChanges;
    // this.yardType = yardType;
    // this.fenceType = fenceType;
    // this.fenceHeight = fenceHeight;
    // this.dogAddons = dogAddons;
    // this.otherDogs = otherDogs;
    // this.dogsInfo = dogsInfo;
    // this.otherPets = otherPets;
    // this.otherPetsInfo = otherPetsInfo;
    // this.spayedAndNeutered = spayedAndNeutered;
    // this.petLocation = petLocation;
    // this.priorAdoption = priorAdoption;
    // this.groupName = groupName;
    // this.surrenderedPet = surrenderedPet;
    // this.circumstances = circumstances;
    // this.vetInfo = vetInfo;
    // this.primaryCaretaker = primaryCaretaker;
    // this.hadDogs = hadDogs;
    // this.housebrokenBefore = housebrokenBefore;
    // this.dogCorrectionPlan = dogCorrectionPlan;
    // this.dogStayDay = dogStayDay;
    // this.dogStayNight = dogStayNight;
    // this.vacationHome = vacationHome;
    // this.leftAloneWeekday = leftAloneWeekday;
    // this.leftAloneWeekend = leftAloneWeekend;
    // this.petAdjustment = petAdjustment;
    // this.dogActivities = dogActivities;
    // this.foodExpenses = foodExpenses;
    // this.vetExpenses = vetExpenses;
    // this.groomingExpenses = groomingExpenses;
    // this.boardingExpenses = boardingExpenses;
    // this.gender = gender;
    // this.typeOfCoat = typeOfCoat;
    // this.dogAge = dogAge;
    // this.breedTypeColour = breedTypeColour;
    // this.friendlyWithChildren = friendlyWithChildren;
    // this.friendlyWithDogs = friendlyWithDogs;
    // this.friendlyWithCats = friendlyWithCats;
    // this.friendlyWithMe = friendlyWithMe;
    // this.friendlyWithVisitors = friendlyWithVisitors;
    // this.enjoyBeingGroomed = enjoyBeingGroomed;
    // this.enjoyBeingHeld = enjoyBeingHeld;
    // this.enjoyBeingPetted = enjoyBeingPetted;
    // this.beCalm = beCalm;
    // this.beActive = beActive;
    // this.bePlayful = bePlayful;
    // this.beQuiet = beQuiet;
    // this.beIndependent = beIndependent;
    // this.wakeMeUpAtNight = wakeMeUpAtNight;
    // this.aggressiveBehaviour = aggressiveBehaviour;
    // this.beProtective = beProtective;
    // this.houseTrained = houseTrained;
    // this.obedienceTrained = obedienceTrained;
    // this.firstTimeOwner = firstTimeOwner;
    // this.obedienceKnowledge = obedienceKnowledge;
    // this.handleDifficultDog = handleDifficultDog;
    // this.trainingClasses = trainingClasses;
    // this.lifeStyleChange = lifeStyleChange;
    // this.medical = medical;
    // this.dogPast = dogPast;
    // this.insurance = insurance;
    // this.dogMaturing = dogMaturing;
    // this.giveUpDog = giveUpDog;
    // this.giveUpCirucumstances = giveUpCirucumstances;
    // this.ref1_fname = ref1_fname;
    // this.ref1_lname = ref1_lname;
    // this.ref1_relationship = ref1_relationship;
    // this.ref1_phoneNumber = ref1_phoneNumber;
    // this.ref1_email = ref1_email;
    // this.ref2_fname = ref2_fname;
    // this.ref2_lname = ref2_lname;
    // this.ref2_relationship = ref2_relationship;
    // this.ref2_phoneNumber = ref2_phoneNumber;
    // this.ref2_email = ref2_email;
    // this.findOutAbout = findOutAbout;
  }
}
