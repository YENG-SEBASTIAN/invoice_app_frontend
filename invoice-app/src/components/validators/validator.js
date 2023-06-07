
export default function validatorsInfo(values){

    let errors = {};

    if(!values.billFromAddress.trim()){
        errors.billFromAddress = "Enter street address";
    }

    if(!values.fromCity.trim()){
        errors.fromCity = "Enter city name";
    }
    if(!values.fromPostCode.trim()){
        errors.fromPostCode = "Enter postal code";
    }
    if(!values.fromCountry.trim()){
        errors.fromCountry = "Enter country name";
    }

    if(!values.clientName.trim()){
        errors.clientName = "Enter your client name";
    }
    if(!values.clientEmail.trim()){
        errors.clientEmail = "Enter client email";
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.clientEmail)){
        errors.clientEmail = "Enter a valid email";
    }
    if(!values.clientStreetAddress.trim()){
        errors.clientStreetAddress = "Enter client street address";
    }
    
    if(!values.toCity.trim()){
        errors.toCity = "Enter city name";
    }
    if(!values.toPostCode.trim()){
        errors.toPostCode = "Enter postal code";
    }
    if(!values.toCountry.trim()){
        errors.toCountry = "Enter country name";
    }

    if(!values.invoiceDate.trim()){
        errors.invoiceDate = "Enter invoice date";
    }
    if(!values.projectDescription.trim()){
        errors.projectDescription = "Enter project description";
    }

    if(!values.itemName.trim()){
        errors.itemName = "Enter item name";
    }
    if(!values.itemCity.trim()){
        errors.itemCity = "Enter City";
    }
    if(!values.itemPrice.trim()){
        errors.itemPrice = "Enter item price";
    }
    if(!values.totalItem.trim()){
        errors.totalItem = "Enter total";
    }

    return errors
}