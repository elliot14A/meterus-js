// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_key_pb = require('./api_key_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
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

function serialize_meterus_api_key_v1_ApiKey(arg) {
  if (!(arg instanceof api_key_pb.ApiKey)) {
    throw new Error('Expected argument of type meterus.api_key.v1.ApiKey');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_api_key_v1_ApiKey(buffer_arg) {
  return api_key_pb.ApiKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_api_key_v1_CreateApiKeyRequest(arg) {
  if (!(arg instanceof api_key_pb.CreateApiKeyRequest)) {
    throw new Error('Expected argument of type meterus.api_key.v1.CreateApiKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_api_key_v1_CreateApiKeyRequest(buffer_arg) {
  return api_key_pb.CreateApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_api_key_v1_ListApiKeysRequest(arg) {
  if (!(arg instanceof api_key_pb.ListApiKeysRequest)) {
    throw new Error('Expected argument of type meterus.api_key.v1.ListApiKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_api_key_v1_ListApiKeysRequest(buffer_arg) {
  return api_key_pb.ListApiKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_api_key_v1_ListApiKeysResponse(arg) {
  if (!(arg instanceof api_key_pb.ListApiKeysResponse)) {
    throw new Error('Expected argument of type meterus.api_key.v1.ListApiKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_api_key_v1_ListApiKeysResponse(buffer_arg) {
  return api_key_pb.ListApiKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_api_key_v1_Token(arg) {
  if (!(arg instanceof api_key_pb.Token)) {
    throw new Error('Expected argument of type meterus.api_key.v1.Token');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_api_key_v1_Token(buffer_arg) {
  return api_key_pb.Token.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_api_key_v1_UpdateApiKeyRequest(arg) {
  if (!(arg instanceof api_key_pb.UpdateApiKeyRequest)) {
    throw new Error('Expected argument of type meterus.api_key.v1.UpdateApiKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_api_key_v1_UpdateApiKeyRequest(buffer_arg) {
  return api_key_pb.UpdateApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiKeyServiceService = exports.ApiKeyServiceService = {
  createApiKey: {
    path: '/meterus.api_key.v1.ApiKeyService/CreateApiKey',
    requestStream: false,
    responseStream: false,
    requestType: api_key_pb.CreateApiKeyRequest,
    responseType: api_key_pb.ApiKey,
    requestSerialize: serialize_meterus_api_key_v1_CreateApiKeyRequest,
    requestDeserialize: deserialize_meterus_api_key_v1_CreateApiKeyRequest,
    responseSerialize: serialize_meterus_api_key_v1_ApiKey,
    responseDeserialize: deserialize_meterus_api_key_v1_ApiKey,
  },
  getApiKey: {
    path: '/meterus.api_key.v1.ApiKeyService/GetApiKey',
    requestStream: false,
    responseStream: false,
    requestType: api_key_pb.Token,
    responseType: api_key_pb.ApiKey,
    requestSerialize: serialize_meterus_api_key_v1_Token,
    requestDeserialize: deserialize_meterus_api_key_v1_Token,
    responseSerialize: serialize_meterus_api_key_v1_ApiKey,
    responseDeserialize: deserialize_meterus_api_key_v1_ApiKey,
  },
  listApiKeys: {
    path: '/meterus.api_key.v1.ApiKeyService/ListApiKeys',
    requestStream: false,
    responseStream: false,
    requestType: api_key_pb.ListApiKeysRequest,
    responseType: api_key_pb.ListApiKeysResponse,
    requestSerialize: serialize_meterus_api_key_v1_ListApiKeysRequest,
    requestDeserialize: deserialize_meterus_api_key_v1_ListApiKeysRequest,
    responseSerialize: serialize_meterus_api_key_v1_ListApiKeysResponse,
    responseDeserialize: deserialize_meterus_api_key_v1_ListApiKeysResponse,
  },
  updateApiKey: {
    path: '/meterus.api_key.v1.ApiKeyService/UpdateApiKey',
    requestStream: false,
    responseStream: false,
    requestType: api_key_pb.UpdateApiKeyRequest,
    responseType: api_key_pb.ApiKey,
    requestSerialize: serialize_meterus_api_key_v1_UpdateApiKeyRequest,
    requestDeserialize: deserialize_meterus_api_key_v1_UpdateApiKeyRequest,
    responseSerialize: serialize_meterus_api_key_v1_ApiKey,
    responseDeserialize: deserialize_meterus_api_key_v1_ApiKey,
  },
  revokeApiKey: {
    path: '/meterus.api_key.v1.ApiKeyService/RevokeApiKey',
    requestStream: false,
    responseStream: false,
    requestType: api_key_pb.Token,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_meterus_api_key_v1_Token,
    requestDeserialize: deserialize_meterus_api_key_v1_Token,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ApiKeyServiceClient = grpc.makeGenericClientConstructor(ApiKeyServiceService);
