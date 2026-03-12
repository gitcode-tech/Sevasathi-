function recommendSchemes(user){

 let schemes=[];

 if(user.income < 200000)
 schemes.push("PM Awas Yojana");

 if(user.age > 60)
 schemes.push("Old Age Pension");

 if(user.gender === "Female")
 schemes.push("Beti Bachao Beti Padhao");

 if(user.caste === "SC" || user.caste === "ST")
 schemes.push("Scholarship for SC/ST");

 return schemes;
}

module.exports = recommendSchemes;
