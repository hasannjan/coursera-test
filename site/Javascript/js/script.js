var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.lastName = "Zuckerberg";
company.ceo.favColor = "blue";

console.log(company["name"]);
console.log(company.ceo.firstName)