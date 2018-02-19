/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Create a shipment
 * @param {com.jda.shipment.visibility.CreateShipment} createShipment - the createShipment transaction
 * @transaction
 */
function createShipmentWithJSON(createShipment) {
    console.log('createShipmentWithJSON : BEGIN');

    var factory = getFactory();
    var NS = 'com.jda.shipment.visibility';

    var shipment = factory.newResource(NS, 'Shipment', createShipment["shipmentId"]);

    shipment.shipmentStatus =  createShipment["shipmentStatus"]
    shipment.freightTerms = createShipment["freightTerms"]

    var shipFromLocation = factory.newConcept(NS, 'Location');
    shipFromLocation.locationCode = createShipment["shipFromLocation"]["locationCode"]
    shipFromLocation.street = createShipment["shipFromLocation"]["street"]
    shipFromLocation.street2 = createShipment["shipFromLocation"]["street2"]
    shipFromLocation.street3 = createShipment["shipFromLocation"]["street3"]
    shipFromLocation.postalCode = createShipment["shipFromLocation"]["postalCode"]
    shipFromLocation.postOfficeBoxNumber = createShipment["shipFromLocation"]["postOfficeBoxNumber"]
    shipFromLocation.city = createShipment["shipFromLocation"]["city"]
    shipFromLocation.region = createShipment["shipFromLocation"]["region"]
    shipFromLocation.country = createShipment["shipFromLocation"]["country"]
    shipFromLocation.latitude = createShipment["shipFromLocation"]["latitude"]
    shipFromLocation.longitude = createShipment["shipFromLocation"]["longitude"]
    shipment.shipFromLocation = shipFromLocation

    var shipToLocation = factory.newConcept(NS, 'Location');
    shipToLocation.locationCode = createShipment["shipToLocation"]["locationCode"]
    shipToLocation.street = createShipment["shipToLocation"]["street"]
    shipToLocation.street2 = createShipment["shipToLocation"]["street2"]
    shipToLocation.street3 = createShipment["shipToLocation"]["street3"]
    shipToLocation.postalCode = createShipment["shipToLocation"]["postalCode"]
    shipToLocation.postOfficeBoxNumber = createShipment["shipToLocation"]["postOfficeBoxNumber"]
    shipToLocation.city = createShipment["shipToLocation"]["city"]
    shipToLocation.region = createShipment["shipToLocation"]["region"]
    shipToLocation.country = createShipment["shipToLocation"]["country"]
    shipToLocation.latitude = createShipment["shipToLocation"]["latitude"]
    shipToLocation.longitude = createShipment["shipToLocation"]["longitude"]
    shipment.shipToLocation = shipToLocation

    shipment.pickupFromDateTime = new Date(createShipment["pickupFromDateTime"])
    shipment.pickupToDateTime = new Date(createShipment["pickupToDateTime"])
    shipment.deliveryFromDateTime = new Date(createShipment["deliveryFromDateTime"])
    shipment.deliveryToDateTime = new Date(createShipment["deliveryToDateTime"])
    shipment.commodityCode = createShipment["commodityCode"]
    shipment.unitOfMeasure = createShipment["unitOfMeasure"]

    // create agreegated container informaiton for entire shipment
    var shipmentContainerInfo = createShipment["shipmentContainerInfo"]
    var shipmentContainerInfoConcept = factory.newConcept(NS, 'ShipmentContainerInfo');

    shipmentContainerInfoConcept.scaledWeight = shipmentContainerInfo["scaledWeight"]
    shipmentContainerInfoConcept.volume = shipmentContainerInfo["volume"]
    shipmentContainerInfoConcept.orderValue = shipmentContainerInfo["orderValue"]
    shipmentContainerInfoConcept.declaredValue = shipmentContainerInfo["declaredValue"]
    shipmentContainerInfoConcept.nominalWeight = shipmentContainerInfo["nominalWeight"]
    shipmentContainerInfoConcept.tareWeight = shipmentContainerInfo["tareWeight"]
    shipmentContainerInfoConcept.pieces = shipmentContainerInfo["pieces"]
    shipmentContainerInfoConcept.skids = shipmentContainerInfo["skids"]
    shipmentContainerInfoConcept.ladenLength = shipmentContainerInfo["ladenLength"]
    shipmentContainerInfoConcept.flexibleQuantity1 = shipmentContainerInfo["flexibleQuantity1"]
    shipmentContainerInfoConcept.flexibleQuantity2 = shipmentContainerInfo["flexibleQuantity2"]
    shipmentContainerInfoConcept.flexibleQuantity3 = shipmentContainerInfo["flexibleQuantity3"]
    shipmentContainerInfoConcept.flexibleQuantity4 = shipmentContainerInfo["flexibleQuantity4"]
    shipmentContainerInfoConcept.flexibleQuantity5 = shipmentContainerInfo["flexibleQuantity5"]

    shipment.shipmentContainerInfo = shipmentContainerInfoConcept

    // create shipment details 
    if (!shipment.shipmentDetails) {
        shipment.shipmentDetails = []
    }

    for (var shipmentDetailsIn in createShipment["shipmentDetails"]) {
        var shipmentDetailsConcept = factory.newConcept(NS, 'ShipmentDetails');

        shipmentDetailsConcept.shipmentDetailsId = shipmentDetailsIn["shipmentDetailsId"]
        shipmentDetailsConcept.itemNumber = shipmentDetailsIn["itemNumber"]
        shipmentDetailsConcept.itemPackageLevelIDCode = shipmentDetailsIn["itemPackageLevelIDCode"]
        shipmentDetailsConcept.itemGroupCode = shipmentDetailsIn["itemGroupCode"]
        shipmentDetailsConcept.itemType = shipmentDetailsIn["itemType"]
        shipmentDetailsConcept.originCountryCode = shipmentDetailsIn["originCountryCode"]
        shipmentDetailsConcept.quantity = shipmentDetailsIn["quantity"]
        shipmentDetailsConcept.numberOfUnits = shipmentDetailsIn["numberOfUnits"]
        shipmentDetailsConcept.length = shipmentDetailsIn["length"]
        shipmentDetailsConcept.width = shipmentDetailsIn["width"]
        shipmentDetailsConcept.height = shipmentDetailsIn["height"]

        var shipmentContainerInfo = shipmentDetailsIn["shipmentContainerInfo"]
        var shipmentContainerInfoConcept = factory.newConcept(NS, 'ShipmentContainerInfo');
    
        shipmentContainerInfoConcept.scaledWeight = shipmentContainerInfo["scaledWeight"]
        shipmentContainerInfoConcept.volume = shipmentContainerInfo["volume"]
        shipmentContainerInfoConcept.orderValue = shipmentContainerInfo["orderValue"]
        shipmentContainerInfoConcept.declaredValue = shipmentContainerInfo["declaredValue"]
        shipmentContainerInfoConcept.nominalWeight = shipmentContainerInfo["nominalWeight"]
        shipmentContainerInfoConcept.tareWeight = shipmentContainerInfo["tareWeight"]
        shipmentContainerInfoConcept.pieces = shipmentContainerInfo["pieces"]
        shipmentContainerInfoConcept.skids = shipmentContainerInfo["skids"]
        shipmentContainerInfoConcept.ladenLength = shipmentContainerInfo["ladenLength"]
        shipmentContainerInfoConcept.flexibleQuantity1 = shipmentContainerInfo["flexibleQuantity1"]
        shipmentContainerInfoConcept.flexibleQuantity2 = shipmentContainerInfo["flexibleQuantity2"]
        shipmentContainerInfoConcept.flexibleQuantity3 = shipmentContainerInfo["flexibleQuantity3"]
        shipmentContainerInfoConcept.flexibleQuantity4 = shipmentContainerInfo["flexibleQuantity4"]
        shipmentContainerInfoConcept.flexibleQuantity5 = shipmentContainerInfo["flexibleQuantity5"]
    
        shipmentDetailsConcept.shipmentContainerInfo = shipmentContainerInfoConcept
            
        shipment.shipmentDetails.push(shipmentDetailsConcept);
    }
    
    // create shipment legs 
    if (!shipment.shipmentLegs) {
        shipment.shipmentLegs = []
    }
    
    for (var shipmentLegsIn in createShipment["shipmentLegs"]) {
        var shipmentLegsConcept = factory.newConcept(NS, 'ShipmentLegs');

        shipmentLegsConcept.shipmentLegId = shipmentLegsIn["shipmentLegId"]
        shipmentLegsConcept.shipmentSequenceNumber = shipmentLegsIn["shipmentSequenceNumber"]

        var shipFromLocation = factory.newConcept(NS, 'Location');
        shipFromLocation.locationCode = shipmentLegsIn["shipFromLocation"]["locationCode"]
        shipFromLocation.street = shipmentLegsIn["shipFromLocation"]["street"]
        shipFromLocation.street2 = shipmentLegsIn["shipFromLocation"]["street2"]
        shipFromLocation.street3 = shipmentLegsIn["shipFromLocation"]["street3"]
        shipFromLocation.postalCode = shipmentLegsIn["shipFromLocation"]["postalCode"]
        shipFromLocation.postOfficeBoxNumber = shipmentLegsIn["shipFromLocation"]["postOfficeBoxNumber"]
        shipFromLocation.city = shipmentLegsIn["shipFromLocation"]["city"]
        shipFromLocation.region = shipmentLegsIn["shipFromLocation"]["region"]
        shipFromLocation.country = shipmentLegsIn["shipFromLocation"]["country"]
        shipFromLocation.latitude = shipmentLegsIn["shipFromLocation"]["latitude"]
        shipFromLocation.longitude = shipmentLegsIn["shipFromLocation"]["longitude"]           
        shipmentLegsConcept.shipFromLocation = shipFromLocation
    
        var shipToLocation = factory.newConcept(NS, 'Location');
        shipToLocation.locationCode = shipmentLegsIn["shipToLocation"]["locationCode"]
        shipToLocation.street = shipmentLegsIn["shipToLocation"]["street"]
        shipToLocation.street2 = shipmentLegsIn["shipToLocation"]["street2"]
        shipToLocation.street3 = shipmentLegsIn["shipToLocation"]["street3"]
        shipToLocation.postalCode = shipmentLegsIn["shipToLocation"]["postalCode"]
        shipToLocation.postOfficeBoxNumber = shipmentLegsIn["shipToLocation"]["postOfficeBoxNumber"]
        shipToLocation.city = shipmentLegsIn["shipToLocation"]["city"]
        shipToLocation.region = shipmentLegsIn["shipToLocation"]["region"]
        shipToLocation.country = shipmentLegsIn["shipToLocation"]["country"]
        shipToLocation.latitude = shipmentLegsIn["shipToLocation"]["latitude"]
        shipToLocation.longitude = shipmentLegsIn["shipToLocation"]["longitude"]
        shipmentLegsConcept.shipToLocation = shipToLocation
    

        shipmentLegsConcept.pickupArrivalDateTime = new Date(shipmentLegsIn["pickupArrivalDateTime"])
        shipmentLegsConcept.pickupDepartureDateTime = new Date(shipmentLegsIn["pickupDepartureDateTime"])
        shipmentLegsConcept.dropArrivalDateTime = new Date(shipmentLegsIn["dropArrivalDateTime"])
        shipmentLegsConcept.dropDepartureDateTime = new Date(shipmentLegsIn["dropDepartureDateTime"])
        shipmentLegsConcept.shipmentLegStatus = shipmentLegsIn["shipmentLegStatus"]

        shipment.shipmentLegs.push(shipmentLegsConcept);
    }
    
    // loggin info
    var loggingInfo = factory.newConcept(NS, 'LoggingInfo')
    loggingInfo.createdByUser = createShipment["loggingInfo"]["createdByUser"]
    loggingInfo.createdDateTime = new Date(createShipment["loggingInfo"]["createdDateTime"])
    loggingInfo.updatedByUser = createShipment["loggingInfo"]["updatedByUser"]
    loggingInfo.updatedDateTime = new Date(createShipment["loggingInfo"]["updatedDateTime"])

    shipment.loggingInfo = loggingInfo

    // save the order
    return getAssetRegistry(shipment.getFullyQualifiedType())
        .then(function (registry) {
            return registry.add(shipment);
        })
        .then(function(){
    		var createShipmentEvent = factory.newEvent(NS, 'CreateShipmentEvent');
            createShipmentEvent.shipmentId = shipment.shipmentId;
    		emit(createShipmentEvent);
    	});

	console.log('createShipmentWithJSON : END');
}

/**
 * Create a shipment
 * @param {com.jda.shipment.visibility.UpdateShipment} shipment - the UpdateShipment transaction
 * @transaction
 */
function updateShipmentWithJSON(shipment) {
    console.log('createShipmentWithJSON : BEGIN');

    var factory = getFactory();
    var NS = 'com.jda.shipment.visibility';

    var shipment = factory.newResource(NS, 'Shipment', createShipment["shipmentId"]);

    shipment.shipmentStatus =  createShipment["shipmentStatus"]
    shipment.freightTerms = createShipment["freightTerms"]

    var shipFromLocation = factory.newConcept(NS, 'Location');
    shipFromLocation.locationCode = createShipment["shipFromLocation"]["locationCode"]
    shipFromLocation.street = createShipment["shipFromLocation"]["street"]
    shipFromLocation.street2 = createShipment["shipFromLocation"]["street2"]
    shipFromLocation.street3 = createShipment["shipFromLocation"]["street3"]
    shipFromLocation.postalCode = createShipment["shipFromLocation"]["postalCode"]
    shipFromLocation.postOfficeBoxNumber = createShipment["shipFromLocation"]["postOfficeBoxNumber"]
    shipFromLocation.city = createShipment["shipFromLocation"]["city"]
    shipFromLocation.region = createShipment["shipFromLocation"]["region"]
    shipFromLocation.country = createShipment["shipFromLocation"]["country"]
    shipFromLocation.latitude = createShipment["shipFromLocation"]["latitude"]
    shipFromLocation.longitude = createShipment["shipFromLocation"]["longitude"]
    shipment.shipFromLocation = shipFromLocation

    var shipToLocation = factory.newConcept(NS, 'Location');
    shipToLocation.locationCode = createShipment["shipToLocation"]["locationCode"]
    shipToLocation.street = createShipment["shipToLocation"]["street"]
    shipToLocation.street2 = createShipment["shipToLocation"]["street2"]
    shipToLocation.street3 = createShipment["shipToLocation"]["street3"]
    shipToLocation.postalCode = createShipment["shipToLocation"]["postalCode"]
    shipToLocation.postOfficeBoxNumber = createShipment["shipToLocation"]["postOfficeBoxNumber"]
    shipToLocation.city = createShipment["shipToLocation"]["city"]
    shipToLocation.region = createShipment["shipToLocation"]["region"]
    shipToLocation.country = createShipment["shipToLocation"]["country"]
    shipToLocation.latitude = createShipment["shipToLocation"]["latitude"]
    shipToLocation.longitude = createShipment["shipToLocation"]["longitude"]
    shipment.shipToLocation = shipToLocation

    shipment.pickupFromDateTime = new Date(createShipment["pickupFromDateTime"])
    shipment.pickupToDateTime = new Date(createShipment["pickupToDateTime"])
    shipment.deliveryFromDateTime = new Date(createShipment["deliveryFromDateTime"])
    shipment.deliveryToDateTime = new Date(createShipment["deliveryToDateTime"])
    shipment.commodityCode = createShipment["commodityCode"]
    shipment.unitOfMeasure = createShipment["unitOfMeasure"]

    // create agreegated container informaiton for entire shipment
    var shipmentContainerInfo = createShipment["shipmentContainerInfo"]
    var shipmentContainerInfoConcept = factory.newConcept(NS, 'ShipmentContainerInfo');

    shipmentContainerInfoConcept.scaledWeight = shipmentContainerInfo["scaledWeight"]
    shipmentContainerInfoConcept.volume = shipmentContainerInfo["volume"]
    shipmentContainerInfoConcept.orderValue = shipmentContainerInfo["orderValue"]
    shipmentContainerInfoConcept.declaredValue = shipmentContainerInfo["declaredValue"]
    shipmentContainerInfoConcept.nominalWeight = shipmentContainerInfo["nominalWeight"]
    shipmentContainerInfoConcept.tareWeight = shipmentContainerInfo["tareWeight"]
    shipmentContainerInfoConcept.pieces = shipmentContainerInfo["pieces"]
    shipmentContainerInfoConcept.skids = shipmentContainerInfo["skids"]
    shipmentContainerInfoConcept.ladenLength = shipmentContainerInfo["ladenLength"]
    shipmentContainerInfoConcept.flexibleQuantity1 = shipmentContainerInfo["flexibleQuantity1"]
    shipmentContainerInfoConcept.flexibleQuantity2 = shipmentContainerInfo["flexibleQuantity2"]
    shipmentContainerInfoConcept.flexibleQuantity3 = shipmentContainerInfo["flexibleQuantity3"]
    shipmentContainerInfoConcept.flexibleQuantity4 = shipmentContainerInfo["flexibleQuantity4"]
    shipmentContainerInfoConcept.flexibleQuantity5 = shipmentContainerInfo["flexibleQuantity5"]

    shipment.shipmentContainerInfo = shipmentContainerInfoConcept

    // create shipment details 
    if (!shipment.shipmentDetails) {
        shipment.shipmentDetails = []
    }

    for (var shipmentDetailsIn in createShipment["shipmentDetails"]) {
        var shipmentDetailsConcept = factory.newConcept(NS, 'ShipmentDetails');

        shipmentDetailsConcept.shipmentDetailsId = shipmentDetailsIn["shipmentDetailsId"]
        shipmentDetailsConcept.itemNumber = shipmentDetailsIn["itemNumber"]
        shipmentDetailsConcept.itemPackageLevelIDCode = shipmentDetailsIn["itemPackageLevelIDCode"]
        shipmentDetailsConcept.itemGroupCode = shipmentDetailsIn["itemGroupCode"]
        shipmentDetailsConcept.itemType = shipmentDetailsIn["itemType"]
        shipmentDetailsConcept.originCountryCode = shipmentDetailsIn["originCountryCode"]
        shipmentDetailsConcept.quantity = shipmentDetailsIn["quantity"]
        shipmentDetailsConcept.numberOfUnits = shipmentDetailsIn["numberOfUnits"]
        shipmentDetailsConcept.length = shipmentDetailsIn["length"]
        shipmentDetailsConcept.width = shipmentDetailsIn["width"]
        shipmentDetailsConcept.height = shipmentDetailsIn["height"]

        var shipmentContainerInfo = shipmentDetailsIn["shipmentContainerInfo"]
        var shipmentContainerInfoConcept = factory.newConcept(NS, 'ShipmentContainerInfo');
    
        shipmentContainerInfoConcept.scaledWeight = shipmentContainerInfo["scaledWeight"]
        shipmentContainerInfoConcept.volume = shipmentContainerInfo["volume"]
        shipmentContainerInfoConcept.orderValue = shipmentContainerInfo["orderValue"]
        shipmentContainerInfoConcept.declaredValue = shipmentContainerInfo["declaredValue"]
        shipmentContainerInfoConcept.nominalWeight = shipmentContainerInfo["nominalWeight"]
        shipmentContainerInfoConcept.tareWeight = shipmentContainerInfo["tareWeight"]
        shipmentContainerInfoConcept.pieces = shipmentContainerInfo["pieces"]
        shipmentContainerInfoConcept.skids = shipmentContainerInfo["skids"]
        shipmentContainerInfoConcept.ladenLength = shipmentContainerInfo["ladenLength"]
        shipmentContainerInfoConcept.flexibleQuantity1 = shipmentContainerInfo["flexibleQuantity1"]
        shipmentContainerInfoConcept.flexibleQuantity2 = shipmentContainerInfo["flexibleQuantity2"]
        shipmentContainerInfoConcept.flexibleQuantity3 = shipmentContainerInfo["flexibleQuantity3"]
        shipmentContainerInfoConcept.flexibleQuantity4 = shipmentContainerInfo["flexibleQuantity4"]
        shipmentContainerInfoConcept.flexibleQuantity5 = shipmentContainerInfo["flexibleQuantity5"]
    
        shipmentDetailsConcept.shipmentContainerInfo = shipmentContainerInfoConcept
            
        shipment.shipmentDetails.push(shipmentDetailsConcept);
    }
    
    // create shipment legs 
    if (!shipment.shipmentLegs) {
        shipment.shipmentLegs = []
    }
    
    for (var shipmentLegsIn in createShipment["shipmentLegs"]) {
        var shipmentLegsConcept = factory.newConcept(NS, 'ShipmentLegs');

        shipmentLegsConcept.shipmentLegId = shipmentLegsIn["shipmentLegId"]
        shipmentLegsConcept.shipmentSequenceNumber = shipmentLegsIn["shipmentSequenceNumber"]

        var shipFromLocation = factory.newConcept(NS, 'Location');
        shipFromLocation.locationCode = shipmentLegsIn["shipFromLocation"]["locationCode"]
        shipFromLocation.street = shipmentLegsIn["shipFromLocation"]["street"]
        shipFromLocation.street2 = shipmentLegsIn["shipFromLocation"]["street2"]
        shipFromLocation.street3 = shipmentLegsIn["shipFromLocation"]["street3"]
        shipFromLocation.postalCode = shipmentLegsIn["shipFromLocation"]["postalCode"]
        shipFromLocation.postOfficeBoxNumber = shipmentLegsIn["shipFromLocation"]["postOfficeBoxNumber"]
        shipFromLocation.city = shipmentLegsIn["shipFromLocation"]["city"]
        shipFromLocation.region = shipmentLegsIn["shipFromLocation"]["region"]
        shipFromLocation.country = shipmentLegsIn["shipFromLocation"]["country"]
        shipFromLocation.latitude = shipmentLegsIn["shipFromLocation"]["latitude"]
        shipFromLocation.longitude = shipmentLegsIn["shipFromLocation"]["longitude"]           
        shipmentLegsConcept.shipFromLocation = shipFromLocation
    
        var shipToLocation = factory.newConcept(NS, 'Location');
        shipToLocation.locationCode = shipmentLegsIn["shipToLocation"]["locationCode"]
        shipToLocation.street = shipmentLegsIn["shipToLocation"]["street"]
        shipToLocation.street2 = shipmentLegsIn["shipToLocation"]["street2"]
        shipToLocation.street3 = shipmentLegsIn["shipToLocation"]["street3"]
        shipToLocation.postalCode = shipmentLegsIn["shipToLocation"]["postalCode"]
        shipToLocation.postOfficeBoxNumber = shipmentLegsIn["shipToLocation"]["postOfficeBoxNumber"]
        shipToLocation.city = shipmentLegsIn["shipToLocation"]["city"]
        shipToLocation.region = shipmentLegsIn["shipToLocation"]["region"]
        shipToLocation.country = shipmentLegsIn["shipToLocation"]["country"]
        shipToLocation.latitude = shipmentLegsIn["shipToLocation"]["latitude"]
        shipToLocation.longitude = shipmentLegsIn["shipToLocation"]["longitude"]
        shipmentLegsConcept.shipToLocation = shipToLocation
    

        shipmentLegsConcept.pickupArrivalDateTime = new Date(shipmentLegsIn["pickupArrivalDateTime"])
        shipmentLegsConcept.pickupDepartureDateTime = new Date(shipmentLegsIn["pickupDepartureDateTime"])
        shipmentLegsConcept.dropArrivalDateTime = new Date(shipmentLegsIn["dropArrivalDateTime"])
        shipmentLegsConcept.dropDepartureDateTime = new Date(shipmentLegsIn["dropDepartureDateTime"])
        shipmentLegsConcept.shipmentLegStatus = shipmentLegsIn["shipmentLegStatus"]

        shipment.shipmentLegs.push(shipmentLegsConcept);
    }
    
    // loggin info
    var loggingInfo = factory.newConcept(NS, 'LoggingInfo')
    loggingInfo.createdByUser = createShipment["loggingInfo"]["createdByUser"]
    loggingInfo.createdDateTime = new Date(createShipment["loggingInfo"]["createdDateTime"])
    loggingInfo.updatedByUser = createShipment["loggingInfo"]["updatedByUser"]
    loggingInfo.updatedDateTime = new Date(createShipment["loggingInfo"]["updatedDateTime"])

    shipment.loggingInfo = loggingInfo

    // save the order
    return getAssetRegistry(shipment.getFullyQualifiedType())
        .then(function (registry) {
            return registry.add(shipment);
        })
        .then(function(){
    		var createShipmentEvent = factory.newEvent(NS, 'CreateShipmentEvent');
            createShipmentEvent.shipmentId = shipment.shipmentId;
    		emit(createShipmentEvent);
    	});

	console.log('createShipmentWithJSON : END');
}

/**
 * Create a shipment
 * @param {com.jda.shipment.visibility.CreateShipment} createShipment - the createShipment transaction
 * @transaction
 */
function createShipment(createShipment) {
    console.log('createShipment');

    var factory = getFactory();
    var NS = 'com.jda.shipment.visibility';

    var shipment = factory.newResource(NS, 'Shipment', createShipment.shipmentId);

    shipmentStatus.shipmentStatus =  createShipment.shipmentStatus
    shipment.freightTerms = createShipment.freightTerms
    

    var shipFromLocation = factory.newConcept(NS, 'Location');
    shipFromLocation.locationCode = createShipment.shipFromLocation.locationCode
    shipFromLocation.street = createShipment.shipFromLocation.street
    shipFromLocation.street2 = createShipment.shipFromLocation.street2
    shipFromLocation.street3 = createShipment.shipFromLocation.street3
    shipFromLocation.postalCode = createShipment.shipFromLocation.postalCode
    shipFromLocation.postOfficeBoxNumber = createShipment.shipFromLocation.postOfficeBoxNumber
    shipFromLocation.city = createShipment.shipFromLocation.city
    shipFromLocation.region = createShipment.shipFromLocation.region
    shipFromLocation.country = createShipment.shipFromLocation.country
    shipFromLocation.latitude = createShipment.shipFromLocation.latitude
    shipFromLocation.longitude = createShipment.shipFromLocation.longitude
    shipment.shipFromLocation = shipFromLocation

    var shipToLocation = factory.newConcept(NS, 'Location');
    shipToLocation.locationCode = createShipment.shipToLocation.locationCode
    shipToLocation.street = createShipment.shipToLocation.street
    shipToLocation.street2 = createShipment.shipToLocation.street2
    shipToLocation.street3 = createShipment.shipToLocation.street3
    shipToLocation.postalCode = createShipment.shipToLocation.postalCode
    shipToLocation.postOfficeBoxNumber = createShipment.shipToLocation.postOfficeBoxNumber
    shipToLocation.city = createShipment.shipToLocation.city
    shipToLocation.region = createShipment.shipToLocation.region
    shipToLocation.country = createShipment.shipToLocation.country
    shipToLocation.latitude = createShipment.shipToLocation.latitude
    shipToLocation.longitude = createShipment.shipToLocation.longitude
    shipment.shipToLocation = shipToLocation

    shipment.pickupFromDateTime = createShipment.pickupFromDateTime
    shipment.pickupToDateTime = createShipment.pickupToDateTime 
    shipment.deliveryFromDateTime = createShipment.deliveryFromDateTime
    shipment.deliveryToDateTime = createShipment.deliveryToDateTime
    shipment.commodityCode = createShipment.commodityCode
    shipment.unitOfMeasure = createShipment.unitOfMeasure

    // create agreegated container informaiton for entire shipment
    var shipmentContainerInfo = createShipment.shipmentContainerInfo
    var shipmentContainerInfoConcept = factory.newConcept(NS, 'ShipmentContainerInfo');

    shipmentContainerInfoConcept.scaledWeight = shipmentContainerInfo.scaledWeight
    shipmentContainerInfoConcept.volume = shipmentContainerInfo.volume
    shipmentContainerInfoConcept.orderValue = shipmentContainerInfo.orderValue
    shipmentContainerInfoConcept.declaredValue = shipmentContainerInfo.declaredValue
    shipmentContainerInfoConcept.nominalWeight = shipmentContainerInfo.nominalWeight
    shipmentContainerInfoConcept.tareWeight = shipmentContainerInfo.tareWeight
    shipmentContainerInfoConcept.pieces = shipmentContainerInfo.pieces
    shipmentContainerInfoConcept.skids = shipmentContainerInfo.skids
    shipmentContainerInfoConcept.ladenLength = shipmentContainerInfo.ladenLength
    shipmentContainerInfoConcept.flexibleQuantity1 = shipmentContainerInfo.flexibleQuantity1
    shipmentContainerInfoConcept.flexibleQuantity2 = shipmentContainerInfo.flexibleQuantity2
    shipmentContainerInfoConcept.flexibleQuantity3 = shipmentContainerInfo.flexibleQuantity3
    shipmentContainerInfoConcept.flexibleQuantity4 = shipmentContainerInfo.flexibleQuantity4
    shipmentContainerInfoConcept.flexibleQuantity5 = shipmentContainerInfo.flexibleQuantity5

    shipment.shipmentContainerInfo = shipmentContainerInfoConcept

    // create shipment details 
    if (!shipment.shipmentDetails) {
        shipment.shipmentDetails = []
    }

    for (var shipmentDetailsIn in createShipment.shipmentDetails) {
        var shipmentDetailsConcept = factory.newConcept(NS, 'ShipmentDetails');

        shipmentDetailsConcept.shipmentDetailsId = shipmentDetailsIn.shipmentDetailsId
        shipmentDetailsConcept.itemNumber = shipmentDetailsIn.itemNumber
        shipmentDetailsConcept.itemPackageLevelIDCode = shipmentDetailsIn.itemPackageLevelIDCode
        shipmentDetailsConcept.itemGroupCode = shipmentDetailsIn.itemGroupCode
        shipmentDetailsConcept.itemType = shipmentDetailsIn.itemType
        shipmentDetailsConcept.originCountryCode = shipmentDetailsIn.originCountryCode
        shipmentDetailsConcept.quantity = shipmentDetailsIn.quantity
        shipmentDetailsConcept.numberOfUnits = shipmentDetailsIn.numberOfUnits
        shipmentDetailsConcept.length = shipmentDetailsIn.length
        shipmentDetailsConcept.width = shipmentDetailsIn.width
        shipmentDetailsConcept.height = shipmentDetailsIn.height

        var shipmentContainerInfo = shipmentDetailsIn.shipmentContainerInfo
        var shipmentContainerInfoConcept = factory.newConcept(NS, 'ShipmentContainerInfo');
    
        shipmentContainerInfoConcept.scaledWeight = shipmentContainerInfo.scaledWeight
        shipmentContainerInfoConcept.volume = shipmentContainerInfo.volume
        shipmentContainerInfoConcept.orderValue = shipmentContainerInfo.orderValue
        shipmentContainerInfoConcept.declaredValue = shipmentContainerInfo.declaredValue
        shipmentContainerInfoConcept.nominalWeight = shipmentContainerInfo.nominalWeight
        shipmentContainerInfoConcept.tareWeight = shipmentContainerInfo.tareWeight
        shipmentContainerInfoConcept.pieces = shipmentContainerInfo.pieces
        shipmentContainerInfoConcept.skids = shipmentContainerInfo.skids
        shipmentContainerInfoConcept.ladenLength = shipmentContainerInfo.ladenLength
        shipmentContainerInfoConcept.flexibleQuantity1 = shipmentContainerInfo.flexibleQuantity1
        shipmentContainerInfoConcept.flexibleQuantity2 = shipmentContainerInfo.flexibleQuantity2
        shipmentContainerInfoConcept.flexibleQuantity3 = shipmentContainerInfo.flexibleQuantity3
        shipmentContainerInfoConcept.flexibleQuantity4 = shipmentContainerInfo.flexibleQuantity4
        shipmentContainerInfoConcept.flexibleQuantity5 = shipmentContainerInfo.flexibleQuantity5
    
        shipmentDetailsConcept.shipmentContainerInfo = shipmentContainerInfoConcept
            
        shipment.shipmentDetails.push(shipmentDetailsConcept);
    }

    // create shipment legs 
    if (!shipment.shipmentLegs) {
        shipment.shipmentLegs = []
    }
    
    for (var shipmentLegsIn in createShipment.shipmentLegs) {
        var shipmentLegsConcept = factory.newConcept(NS, 'ShipmentLegs');

        shipmentLegsConcept.shipmentLegId = shipmentLegsIn.shipmentLegId
        shipmentLegsConcept.shipmentSequenceNumber = shipmentLegsIn.shipmentSequenceNumber

        var shipFromLocation = factory.newConcept(NS, 'Location');
        shipFromLocation.locationCode = shipmentLegsIn.shipFromLocation.locationCode
        shipFromLocation.street = shipmentLegsIn.shipFromLocation.street
        shipFromLocation.street2 = shipmentLegsIn.shipFromLocation.street2
        shipFromLocation.street3 = shipmentLegsIn.shipFromLocation.street3
        shipFromLocation.postalCode = shipmentLegsIn.shipFromLocation.postalCode
        shipFromLocation.postOfficeBoxNumber = shipmentLegsIn.shipFromLocation.postOfficeBoxNumber
        shipFromLocation.city = shipmentLegsIn.shipFromLocation.city
        shipFromLocation.region = shipmentLegsIn.shipFromLocation.region
        shipFromLocation.country = shipmentLegsIn.shipFromLocation.country
        shipFromLocation.latitude = shipmentLegsIn.shipFromLocation.latitude
        shipFromLocation.longitude = shipmentLegsIn.shipFromLocation.longitude
        shipmentLegsConcept.shipFromLocation = shipFromLocation
    
        var shipToLocation = factory.newConcept(NS, 'Location');
        shipToLocation.locationCode = shipmentLegsIn.shipToLocation.locationCode
        shipToLocation.street = shipmentLegsIn.shipToLocation.street
        shipToLocation.street2 = shipmentLegsIn.shipToLocation.street2
        shipToLocation.street3 = shipmentLegsIn.shipToLocation.street3
        shipToLocation.postalCode = shipmentLegsIn.shipToLocation.postalCode
        shipToLocation.postOfficeBoxNumber = shipmentLegsIn.shipToLocation.postOfficeBoxNumber
        shipToLocation.city = shipmentLegsIn.shipToLocation.city
        shipToLocation.region = shipmentLegsIn.shipToLocation.region
        shipToLocation.country = shipmentLegsIn.shipToLocation.country
        shipToLocation.latitude = shipmentLegsIn.shipToLocation.latitude
        shipToLocation.longitude = shipmentLegsIn.shipToLocation.longitude
        shipmentLegsConcept.shipToLocation = shipToLocation
    

        shipmentLegsConcept.pickupArrivalDateTime = shipmentLegsIn.pickupArrivalDateTime
        shipmentLegsConcept.pickupDepartureDateTime = shipmentLegsIn.pickupDepartureDateTime
        shipmentLegsConcept.dropArrivalDateTime = shipmentLegsIn.dropArrivalDateTime
        shipmentLegsConcept.dropDepartureDateTime = shipmentLegsIn.dropDepartureDateTime
        shipmentLegsConcept.shipmentLegStatus = shipmentLegsIn.shipmentLegStatus

        shipment.shipmentLegs.push(shipmentLegsConcept);
    }

    // loggin info

    var loggingInfo = factory.newConcept(NS, 'LoggingInfo')
    loggingInfo.createdByUser = createShipment.loggingInfo.createdByUser
    loggingInfo.createdDateTime = createShipment.loggingInfo.createdDateTime
    loggingInfo.updatedByUser = createShipment.loggingInfo.updatedByUser
    loggingInfo.updatedDateTime = createShipment.loggingInfo.updatedDateTime

    shipment.loggingInfo = loggingInfo

    // save the order
    return getAssetRegistry(shipment.getFullyQualifiedType())
        .then(function (registry) {
            return registry.add(shipment);
        })
        .then(function(){
    		var createShipmentEvent = factory.newEvent(NS, 'CreateShipmentEvent');
            createShipmentEvent.shipmentId = shipment.shipmentId;
    		emit(createShipmentEvent);
    	});
}

