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
function createShipment(createShipment) {
    console.log('createShipment');

    var factory = getFactory();
    var NS = 'com.jda.shipment.visibility';
    var NS_M = 'org.acme.vehicle.lifecycle.manufacturer';
    var NS_D = 'org.vda';

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
            var createShipmentEvent = factory.newEvent(NS_M, 'CreateShipmentEvent');
            createShipmentEvent.shipmentId = shipment.shipmentId;
            emit(createShipmentEvent);
        });
}


/**
 * Initialize some test assets and participants useful for running a demo.
 * @param {com.jda.shipment.visibility.SetupDemo} setupDemo - the SetupDemo transaction
 * @transaction
 */
function setupDemo(setupDemo) {

    var factory = getFactory();
    var NS = 'com.jda.shipment.visibility';

    // create the grower
    var grower = factory.newResource(NS, 'Grower', 'farmer@email.com');
    var growerAddress = factory.newConcept(NS, 'Address');
    growerAddress.country = 'USA';
    grower.address = growerAddress;
    grower.accountBalance = 0;

    // create the importer
    var importer = factory.newResource(NS, 'Importer', 'supermarket@email.com');
    var importerAddress = factory.newConcept(NS, 'Address');
    importerAddress.country = 'UK';
    importer.address = importerAddress;
    importer.accountBalance = 0;

    // create the shipper
    var shipper = factory.newResource(NS, 'Shipper', 'shipper@email.com');
    var shipperAddress = factory.newConcept(NS, 'Address');
    shipperAddress.country = 'Panama';
    shipper.address = shipperAddress;
    shipper.accountBalance = 0;

    // create the contract
    var contract = factory.newResource(NS, 'Contract', 'CON_001');
    contract.grower = factory.newRelationship(NS, 'Grower', 'farmer@email.com');
    contract.importer = factory.newRelationship(NS, 'Importer', 'supermarket@email.com');
    contract.shipper = factory.newRelationship(NS, 'Shipper', 'shipper@email.com');
    var tomorrow = setupDemo.timestamp;
    tomorrow.setDate(tomorrow.getDate() + 1);
    contract.arrivalDateTime = tomorrow; // the shipment has to arrive tomorrow
    contract.unitPrice = 0.5; // pay 50 cents per unit
    contract.minTemperature = 2; // min temperature for the cargo
    contract.maxTemperature = 10; // max temperature for the cargo
    contract.minPenaltyFactor = 0.2; // we reduce the price by 20 cents for every degree below the min temp
    contract.maxPenaltyFactor = 0.1; // we reduce the price by 10 cents for every degree above the max temp

    // create the shipment
    var shipment = factory.newResource(NS, 'Shipment', 'SHIP_001');
    shipment.type = 'BANANAS';
    shipment.status = 'IN_TRANSIT';
    shipment.unitCount = 5000;
    shipment.contract = factory.newRelationship(NS, 'Contract', 'CON_001');
    return getParticipantRegistry(NS + '.Grower')
        .then(function (growerRegistry) {
            // add the growers
            return growerRegistry.addAll([grower]);
        })
        .then(function() {
            return getParticipantRegistry(NS + '.Importer');
        })
        .then(function(importerRegistry) {
            // add the importers
            return importerRegistry.addAll([importer]);
        })
        .then(function() {
            return getParticipantRegistry(NS + '.Shipper');
        })
        .then(function(shipperRegistry) {
            // add the shippers
            return shipperRegistry.addAll([shipper]);
        })
        .then(function() {
            return getAssetRegistry(NS + '.Contract');
        })
        .then(function(contractRegistry) {
            // add the contracts
            return contractRegistry.addAll([contract]);
        })
        .then(function() {
            return getAssetRegistry(NS + '.Shipment');
        })
        .then(function(shipmentRegistry) {
            // add the shipments
            return shipmentRegistry.addAll([shipment]);
        });
}