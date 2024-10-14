// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var feature_pb = require('./feature_pb.js');
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

function serialize_meterus_feature_v1_CreateFeatureRequest(arg) {
  if (!(arg instanceof feature_pb.CreateFeatureRequest)) {
    throw new Error('Expected argument of type meterus.feature.v1.CreateFeatureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_feature_v1_CreateFeatureRequest(buffer_arg) {
  return feature_pb.CreateFeatureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_feature_v1_Feature(arg) {
  if (!(arg instanceof feature_pb.Feature)) {
    throw new Error('Expected argument of type meterus.feature.v1.Feature');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_feature_v1_Feature(buffer_arg) {
  return feature_pb.Feature.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_feature_v1_FeatureId(arg) {
  if (!(arg instanceof feature_pb.FeatureId)) {
    throw new Error('Expected argument of type meterus.feature.v1.FeatureId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_feature_v1_FeatureId(buffer_arg) {
  return feature_pb.FeatureId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_feature_v1_ListFeatureRequest(arg) {
  if (!(arg instanceof feature_pb.ListFeatureRequest)) {
    throw new Error('Expected argument of type meterus.feature.v1.ListFeatureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_feature_v1_ListFeatureRequest(buffer_arg) {
  return feature_pb.ListFeatureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_feature_v1_ListFeatureResponse(arg) {
  if (!(arg instanceof feature_pb.ListFeatureResponse)) {
    throw new Error('Expected argument of type meterus.feature.v1.ListFeatureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_feature_v1_ListFeatureResponse(buffer_arg) {
  return feature_pb.ListFeatureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_feature_v1_UpdateFeatureRequest(arg) {
  if (!(arg instanceof feature_pb.UpdateFeatureRequest)) {
    throw new Error('Expected argument of type meterus.feature.v1.UpdateFeatureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_feature_v1_UpdateFeatureRequest(buffer_arg) {
  return feature_pb.UpdateFeatureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FeatureServiceService = exports.FeatureServiceService = {
  createFeature: {
    path: '/meterus.feature.v1.FeatureService/CreateFeature',
    requestStream: false,
    responseStream: false,
    requestType: feature_pb.CreateFeatureRequest,
    responseType: feature_pb.Feature,
    requestSerialize: serialize_meterus_feature_v1_CreateFeatureRequest,
    requestDeserialize: deserialize_meterus_feature_v1_CreateFeatureRequest,
    responseSerialize: serialize_meterus_feature_v1_Feature,
    responseDeserialize: deserialize_meterus_feature_v1_Feature,
  },
  listFeatures: {
    path: '/meterus.feature.v1.FeatureService/ListFeatures',
    requestStream: false,
    responseStream: false,
    requestType: feature_pb.ListFeatureRequest,
    responseType: feature_pb.ListFeatureResponse,
    requestSerialize: serialize_meterus_feature_v1_ListFeatureRequest,
    requestDeserialize: deserialize_meterus_feature_v1_ListFeatureRequest,
    responseSerialize: serialize_meterus_feature_v1_ListFeatureResponse,
    responseDeserialize: deserialize_meterus_feature_v1_ListFeatureResponse,
  },
  getFeature: {
    path: '/meterus.feature.v1.FeatureService/GetFeature',
    requestStream: false,
    responseStream: false,
    requestType: feature_pb.FeatureId,
    responseType: feature_pb.Feature,
    requestSerialize: serialize_meterus_feature_v1_FeatureId,
    requestDeserialize: deserialize_meterus_feature_v1_FeatureId,
    responseSerialize: serialize_meterus_feature_v1_Feature,
    responseDeserialize: deserialize_meterus_feature_v1_Feature,
  },
  deleteFeature: {
    path: '/meterus.feature.v1.FeatureService/DeleteFeature',
    requestStream: false,
    responseStream: false,
    requestType: feature_pb.FeatureId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_meterus_feature_v1_FeatureId,
    requestDeserialize: deserialize_meterus_feature_v1_FeatureId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateFeature: {
    path: '/meterus.feature.v1.FeatureService/UpdateFeature',
    requestStream: false,
    responseStream: false,
    requestType: feature_pb.UpdateFeatureRequest,
    responseType: feature_pb.Feature,
    requestSerialize: serialize_meterus_feature_v1_UpdateFeatureRequest,
    requestDeserialize: deserialize_meterus_feature_v1_UpdateFeatureRequest,
    responseSerialize: serialize_meterus_feature_v1_Feature,
    responseDeserialize: deserialize_meterus_feature_v1_Feature,
  },
};

exports.FeatureServiceClient = grpc.makeGenericClientConstructor(FeatureServiceService);
