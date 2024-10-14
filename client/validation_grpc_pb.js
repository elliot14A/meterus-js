// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var validation_pb = require('./validation_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_meterus_validation_v1_GetEntitlementValueRequest(arg) {
  if (!(arg instanceof validation_pb.GetEntitlementValueRequest)) {
    throw new Error('Expected argument of type meterus.validation.v1.GetEntitlementValueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_validation_v1_GetEntitlementValueRequest(buffer_arg) {
  return validation_pb.GetEntitlementValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_validation_v1_GetEntitlementValueResponse(arg) {
  if (!(arg instanceof validation_pb.GetEntitlementValueResponse)) {
    throw new Error('Expected argument of type meterus.validation.v1.GetEntitlementValueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_validation_v1_GetEntitlementValueResponse(buffer_arg) {
  return validation_pb.GetEntitlementValueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_validation_v1_ValidateApiKeyAndGetEntitlementValueRequest(arg) {
  if (!(arg instanceof validation_pb.ValidateApiKeyAndGetEntitlementValueRequest)) {
    throw new Error('Expected argument of type meterus.validation.v1.ValidateApiKeyAndGetEntitlementValueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_validation_v1_ValidateApiKeyAndGetEntitlementValueRequest(buffer_arg) {
  return validation_pb.ValidateApiKeyAndGetEntitlementValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_validation_v1_ValidateApiKeyAndGetEntitlementValueResponse(arg) {
  if (!(arg instanceof validation_pb.ValidateApiKeyAndGetEntitlementValueResponse)) {
    throw new Error('Expected argument of type meterus.validation.v1.ValidateApiKeyAndGetEntitlementValueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_validation_v1_ValidateApiKeyAndGetEntitlementValueResponse(buffer_arg) {
  return validation_pb.ValidateApiKeyAndGetEntitlementValueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_validation_v1_ValidateApiKeyRequest(arg) {
  if (!(arg instanceof validation_pb.ValidateApiKeyRequest)) {
    throw new Error('Expected argument of type meterus.validation.v1.ValidateApiKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_validation_v1_ValidateApiKeyRequest(buffer_arg) {
  return validation_pb.ValidateApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_validation_v1_ValidateApiKeyResponse(arg) {
  if (!(arg instanceof validation_pb.ValidateApiKeyResponse)) {
    throw new Error('Expected argument of type meterus.validation.v1.ValidateApiKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_validation_v1_ValidateApiKeyResponse(buffer_arg) {
  return validation_pb.ValidateApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ValidationServiceService = exports.ValidationServiceService = {
  validateApiKey: {
    path: '/meterus.validation.v1.ValidationService/ValidateApiKey',
    requestStream: false,
    responseStream: false,
    requestType: validation_pb.ValidateApiKeyRequest,
    responseType: validation_pb.ValidateApiKeyResponse,
    requestSerialize: serialize_meterus_validation_v1_ValidateApiKeyRequest,
    requestDeserialize: deserialize_meterus_validation_v1_ValidateApiKeyRequest,
    responseSerialize: serialize_meterus_validation_v1_ValidateApiKeyResponse,
    responseDeserialize: deserialize_meterus_validation_v1_ValidateApiKeyResponse,
  },
  validateApiKeyAndGetEntitlementValue: {
    path: '/meterus.validation.v1.ValidationService/ValidateApiKeyAndGetEntitlementValue',
    requestStream: false,
    responseStream: false,
    requestType: validation_pb.ValidateApiKeyAndGetEntitlementValueRequest,
    responseType: validation_pb.ValidateApiKeyAndGetEntitlementValueResponse,
    requestSerialize: serialize_meterus_validation_v1_ValidateApiKeyAndGetEntitlementValueRequest,
    requestDeserialize: deserialize_meterus_validation_v1_ValidateApiKeyAndGetEntitlementValueRequest,
    responseSerialize: serialize_meterus_validation_v1_ValidateApiKeyAndGetEntitlementValueResponse,
    responseDeserialize: deserialize_meterus_validation_v1_ValidateApiKeyAndGetEntitlementValueResponse,
  },
  getEntitlementValue: {
    path: '/meterus.validation.v1.ValidationService/GetEntitlementValue',
    requestStream: false,
    responseStream: false,
    requestType: validation_pb.GetEntitlementValueRequest,
    responseType: validation_pb.GetEntitlementValueResponse,
    requestSerialize: serialize_meterus_validation_v1_GetEntitlementValueRequest,
    requestDeserialize: deserialize_meterus_validation_v1_GetEntitlementValueRequest,
    responseSerialize: serialize_meterus_validation_v1_GetEntitlementValueResponse,
    responseDeserialize: deserialize_meterus_validation_v1_GetEntitlementValueResponse,
  },
};

exports.ValidationServiceClient = grpc.makeGenericClientConstructor(ValidationServiceService);
