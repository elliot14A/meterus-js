// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var entitlement_pb = require('./entitlement_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_entitlement_v1_CreateEntitlementRequest(arg) {
  if (!(arg instanceof entitlement_pb.CreateEntitlementRequest)) {
    throw new Error('Expected argument of type meterus.entitlement.v1.CreateEntitlementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_entitlement_v1_CreateEntitlementRequest(buffer_arg) {
  return entitlement_pb.CreateEntitlementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_entitlement_v1_Entitlement(arg) {
  if (!(arg instanceof entitlement_pb.Entitlement)) {
    throw new Error('Expected argument of type meterus.entitlement.v1.Entitlement');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_entitlement_v1_Entitlement(buffer_arg) {
  return entitlement_pb.Entitlement.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_entitlement_v1_EntitlementId(arg) {
  if (!(arg instanceof entitlement_pb.EntitlementId)) {
    throw new Error('Expected argument of type meterus.entitlement.v1.EntitlementId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_entitlement_v1_EntitlementId(buffer_arg) {
  return entitlement_pb.EntitlementId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_entitlement_v1_GetEntitlementOfSubjectRequest(arg) {
  if (!(arg instanceof entitlement_pb.GetEntitlementOfSubjectRequest)) {
    throw new Error('Expected argument of type meterus.entitlement.v1.GetEntitlementOfSubjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_entitlement_v1_GetEntitlementOfSubjectRequest(buffer_arg) {
  return entitlement_pb.GetEntitlementOfSubjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_entitlement_v1_GetEntitlementsOfSubjectRequest(arg) {
  if (!(arg instanceof entitlement_pb.GetEntitlementsOfSubjectRequest)) {
    throw new Error('Expected argument of type meterus.entitlement.v1.GetEntitlementsOfSubjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_entitlement_v1_GetEntitlementsOfSubjectRequest(buffer_arg) {
  return entitlement_pb.GetEntitlementsOfSubjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_entitlement_v1_GetEntitlementsOfSubjectResponse(arg) {
  if (!(arg instanceof entitlement_pb.GetEntitlementsOfSubjectResponse)) {
    throw new Error('Expected argument of type meterus.entitlement.v1.GetEntitlementsOfSubjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_entitlement_v1_GetEntitlementsOfSubjectResponse(buffer_arg) {
  return entitlement_pb.GetEntitlementsOfSubjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_entitlement_v1_UpdateEntitlementUsagePeriodRequest(arg) {
  if (!(arg instanceof entitlement_pb.UpdateEntitlementUsagePeriodRequest)) {
    throw new Error('Expected argument of type meterus.entitlement.v1.UpdateEntitlementUsagePeriodRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_entitlement_v1_UpdateEntitlementUsagePeriodRequest(buffer_arg) {
  return entitlement_pb.UpdateEntitlementUsagePeriodRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EntitlementServiceService = exports.EntitlementServiceService = {
  createEntitlement: {
    path: '/meterus.entitlement.v1.EntitlementService/CreateEntitlement',
    requestStream: false,
    responseStream: false,
    requestType: entitlement_pb.CreateEntitlementRequest,
    responseType: entitlement_pb.Entitlement,
    requestSerialize: serialize_meterus_entitlement_v1_CreateEntitlementRequest,
    requestDeserialize: deserialize_meterus_entitlement_v1_CreateEntitlementRequest,
    responseSerialize: serialize_meterus_entitlement_v1_Entitlement,
    responseDeserialize: deserialize_meterus_entitlement_v1_Entitlement,
  },
  deleteEntitlement: {
    path: '/meterus.entitlement.v1.EntitlementService/DeleteEntitlement',
    requestStream: false,
    responseStream: false,
    requestType: entitlement_pb.EntitlementId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_meterus_entitlement_v1_EntitlementId,
    requestDeserialize: deserialize_meterus_entitlement_v1_EntitlementId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getEntitlementsOfSubject: {
    path: '/meterus.entitlement.v1.EntitlementService/GetEntitlementsOfSubject',
    requestStream: false,
    responseStream: false,
    requestType: entitlement_pb.GetEntitlementsOfSubjectRequest,
    responseType: entitlement_pb.GetEntitlementsOfSubjectResponse,
    requestSerialize: serialize_meterus_entitlement_v1_GetEntitlementsOfSubjectRequest,
    requestDeserialize: deserialize_meterus_entitlement_v1_GetEntitlementsOfSubjectRequest,
    responseSerialize: serialize_meterus_entitlement_v1_GetEntitlementsOfSubjectResponse,
    responseDeserialize: deserialize_meterus_entitlement_v1_GetEntitlementsOfSubjectResponse,
  },
  getEntitlementOfSubject: {
    path: '/meterus.entitlement.v1.EntitlementService/GetEntitlementOfSubject',
    requestStream: false,
    responseStream: false,
    requestType: entitlement_pb.GetEntitlementOfSubjectRequest,
    responseType: entitlement_pb.Entitlement,
    requestSerialize: serialize_meterus_entitlement_v1_GetEntitlementOfSubjectRequest,
    requestDeserialize: deserialize_meterus_entitlement_v1_GetEntitlementOfSubjectRequest,
    responseSerialize: serialize_meterus_entitlement_v1_Entitlement,
    responseDeserialize: deserialize_meterus_entitlement_v1_Entitlement,
  },
  updateEntitlementUsagePeriod: {
    path: '/meterus.entitlement.v1.EntitlementService/UpdateEntitlementUsagePeriod',
    requestStream: false,
    responseStream: false,
    requestType: entitlement_pb.UpdateEntitlementUsagePeriodRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_meterus_entitlement_v1_UpdateEntitlementUsagePeriodRequest,
    requestDeserialize: deserialize_meterus_entitlement_v1_UpdateEntitlementUsagePeriodRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.EntitlementServiceClient = grpc.makeGenericClientConstructor(EntitlementServiceService);
