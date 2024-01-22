import { faker } from '@faker-js/faker';

// export const gstData = [
//     {
//         gstNumber: "29GGGGG1314R9Z6",
//         gstin: "07AABCZ5840K1ZZ",
//         name: "Zomato Foods Private Limited",
//         status: "Active",
//         constitution: "Private Limited Company",
//         type:"Regular",
//         registrationDate: "November 20,2020",
//         updationDate: "November 20,2020",
//         stateJurisdcitionDetails: "Ward 100",
//         centreJurisdictionDetails: "NA"
//     }
// ]

export function createFakeGstData(gstNumber) {
    const gstData = {
        gstin: faker.string.numeric(12),
        name: faker.company.name(),
        status: faker.helpers.arrayElement(['Active', 'Inactive']),
        constitution: faker.helpers.arrayElement(['Private Limited Company', 'Public Limited Company', 'Proprietorship']),
        type: faker.helpers.arrayElement(['Regular', 'Composition']),
        registrationDate: faker.date.past().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        updationDate: faker.date.past().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        stateJurisdcitionDetails: 'Ward ' + faker.number.int(200),
        centreJurisdictionDetails: 'NA',
        gstNumber
      };
  
    return gstData;
}

export const keyMapper = (oldKeyValue) => {
    switch (oldKeyValue) {
      case "gstNumber":
        return "GST Number";
      case "gstin":
        return "GSTIN";
      case "name":
        return "Legal Name of Business";
      case "status":
        return "GSTIN Status";
      case "constitution":
        return "Constitution of Business";
      case "type":
        return "Taxpayer Type";
      case "registrationDate":
        return "Date of Registration";
      case "stateJurisdcitionDetails":
        return "State Jurisdiction Details";
      case "centreJurisdictionDetails":
        return "Centre Jurisdiction Details";
      case "updationDate":
        return "Date of Updation"
    }
  };