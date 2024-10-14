// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var grant_pb = require('./grant_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_grant_v1_CreateEntitlementGrantRequest(arg) {
  if (!(arg instanceof grant_pb.CreateEntitlementGrantRequest)) {
    throw new Error('Expected argument of type meterus.grant.v1.CreateEntitlementGrantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_grant_v1_CreateEntitlementGrantRequest(buffer_arg) {
  return grant_pb.CreateEntitlementGrantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_grant_v1_GetGrantsOfSubjectRequest(arg) {
  if (!(arg instanceof grant_pb.GetGrantsOfSubjectRequest)) {
    throw new Error('Expected argument of type meterus.grant.v1.GetGrantsOfSubjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_grant_v1_GetGrantsOfSubjectRequest(buffer_arg) {
  return grant_pb.GetGrantsOfSubjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_grant_v1_GetGrantsOfSubjectResponse(arg) {
  if (!(arg instanceof grant_pb.GetGrantsOfSubjectResponse)) {
    throw new Error('Expected argument of type meterus.grant.v1.GetGrantsOfSubjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_grant_v1_GetGrantsOfSubjectResponse(buffer_arg) {
  return grant_pb.GetGrantsOfSubjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_grant_v1_Grant(arg) {
  if (!(arg instanceof grant_pb.Grant)) {
    throw new Error('Expected argument of type meterus.grant.v1.Grant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_grant_v1_Grant(buffer_arg) {
  return grant_pb.Grant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_grant_v1_GrantId(arg) {
  if (!(arg instanceof grant_pb.GrantId)) {
    throw new Error('Expected argument of type meterus.grant.v1.GrantId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_grant_v1_GrantId(buffer_arg) {
  return grant_pb.GrantId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_grant_v1_UpdateGrantRequest(arg) {
  if (!(arg instanceof grant_pb.UpdateGrantRequest)) {
    throw new Error('Expected argument of type meterus.grant.v1.UpdateGrantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_grant_v1_UpdateGrantRequest(buffer_arg) {
  return grant_pb.UpdateGrantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GrantServiceService = exports.GrantServiceService = {
  createEntitlementGrant: {
    path: '/meterus.grant.v1.GrantService/CreateEntitlementGrant',
    requestStream: false,
    responseStream: false,
    requestType: grant_pb.CreateEntitlementGrantRequest,
    responseType: grant_pb.Grant,
    requestSerialize: serialize_meterus_grant_v1_CreateEntitlementGrantRequest,
    requestDeserialize: deserialize_meterus_grant_v1_CreateEntitlementGrantRequest,
    responseSerialize: serialize_meterus_grant_v1_Grant,
    responseDeserialize: deserialize_meterus_grant_v1_Grant,
  },
  deleteEntitlementGrant: {
    path: '/meterus.grant.v1.GrantService/DeleteEntitlementGrant',
    requestStream: false,
    responseStream: false,
    requestType: grant_pb.GrantId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_meterus_grant_v1_GrantId,
    requestDeserialize: deserialize_meterus_grant_v1_GrantId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getGrantsOfSubject: {
    path: '/meterus.grant.v1.GrantService/GetGrantsOfSubject',
    requestStream: false,
    responseStream: false,
    requestType: grant_pb.GetGrantsOfSubjectRequest,
    responseType: grant_pb.GetGrantsOfSubjectResponse,
    requestSerialize: serialize_meterus_grant_v1_GetGrantsOfSubjectRequest,
    requestDeserialize: deserialize_meterus_grant_v1_GetGrantsOfSubjectRequest,
    responseSerialize: serialize_meterus_grant_v1_GetGrantsOfSubjectResponse,
    responseDeserialize: deserialize_meterus_grant_v1_GetGrantsOfSubjectResponse,
  },
  getGrantById: {
    path: '/meterus.grant.v1.GrantService/GetGrantById',
    requestStream: false,
    responseStream: false,
    requestType: grant_pb.GrantId,
    responseType: grant_pb.Grant,
    requestSerialize: serialize_meterus_grant_v1_GrantId,
    requestDeserialize: deserialize_meterus_grant_v1_GrantId,
    responseSerialize: serialize_meterus_grant_v1_Grant,
    responseDeserialize: deserialize_meterus_grant_v1_Grant,
  },
  updateGrant: {
    path: '/meterus.grant.v1.GrantService/UpdateGrant',
    requestStream: false,
    responseStream: false,
    requestType: grant_pb.UpdateGrantRequest,
    responseType: grant_pb.Grant,
    requestSerialize: serialize_meterus_grant_v1_UpdateGrantRequest,
    requestDeserialize: deserialize_meterus_grant_v1_UpdateGrantRequest,
    responseSerialize: serialize_meterus_grant_v1_Grant,
    responseDeserialize: deserialize_meterus_grant_v1_Grant,
  },
};

exports.GrantServiceClient = grpc.makeGenericClientConstructor(GrantServiceService);
