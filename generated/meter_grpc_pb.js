// GENERATED CODE -- DO NOT EDIT!

"use strict";

var grpc = require("@grpc/grpc-js");

var meter_pb = require("./meter_pb.js");

var google_protobuf_timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb.js");

var google_protobuf_struct_pb = require("google-protobuf/google/protobuf/struct_pb.js");

var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb.js");

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error("Expected argument of type google.protobuf.Empty");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_meterus_meter_v1_CloudEvent(arg) {
  if (!(arg instanceof meter_pb.CloudEvent)) {
    throw new Error("Expected argument of type meterus.meter.v1.CloudEvent");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_meter_v1_CloudEvent(buffer_arg) {
  return meter_pb.CloudEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_meter_v1_CreateMeterRequest(arg) {
  if (!(arg instanceof meter_pb.CreateMeterRequest)) {
    throw new Error(
      "Expected argument of type meterus.meter.v1.CreateMeterRequest",
    );
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_meter_v1_CreateMeterRequest(buffer_arg) {
  return meter_pb.CreateMeterRequest.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_meterus_meter_v1_ListMeterSubjectsRequest(arg) {
  if (!(arg instanceof meter_pb.ListMeterSubjectsRequest)) {
    throw new Error(
      "Expected argument of type meterus.meter.v1.ListMeterSubjectsRequest",
    );
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_meter_v1_ListMeterSubjectsRequest(buffer_arg) {
  return meter_pb.ListMeterSubjectsRequest.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_meterus_meter_v1_ListMeterSubjectsResponse(arg) {
  if (!(arg instanceof meter_pb.ListMeterSubjectsResponse)) {
    throw new Error(
      "Expected argument of type meterus.meter.v1.ListMeterSubjectsResponse",
    );
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_meter_v1_ListMeterSubjectsResponse(buffer_arg) {
  return meter_pb.ListMeterSubjectsResponse.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_meterus_meter_v1_ListMetersRequest(arg) {
  if (!(arg instanceof meter_pb.ListMetersRequest)) {
    throw new Error(
      "Expected argument of type meterus.meter.v1.ListMetersRequest",
    );
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_meter_v1_ListMetersRequest(buffer_arg) {
  return meter_pb.ListMetersRequest.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_meterus_meter_v1_ListMetersResponse(arg) {
  if (!(arg instanceof meter_pb.ListMetersResponse)) {
    throw new Error(
      "Expected argument of type meterus.meter.v1.ListMetersResponse",
    );
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_meter_v1_ListMetersResponse(buffer_arg) {
  return meter_pb.ListMetersResponse.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_meterus_meter_v1_Meter(arg) {
  if (!(arg instanceof meter_pb.Meter)) {
    throw new Error("Expected argument of type meterus.meter.v1.Meter");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_meter_v1_Meter(buffer_arg) {
  return meter_pb.Meter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_meter_v1_MeterId(arg) {
  if (!(arg instanceof meter_pb.MeterId)) {
    throw new Error("Expected argument of type meterus.meter.v1.MeterId");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_meter_v1_MeterId(buffer_arg) {
  return meter_pb.MeterId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_meter_v1_QueryMeterRequest(arg) {
  if (!(arg instanceof meter_pb.QueryMeterRequest)) {
    throw new Error(
      "Expected argument of type meterus.meter.v1.QueryMeterRequest",
    );
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_meter_v1_QueryMeterRequest(buffer_arg) {
  return meter_pb.QueryMeterRequest.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_meterus_meter_v1_QueryMeterResponse(arg) {
  if (!(arg instanceof meter_pb.QueryMeterResponse)) {
    throw new Error(
      "Expected argument of type meterus.meter.v1.QueryMeterResponse",
    );
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_meter_v1_QueryMeterResponse(buffer_arg) {
  return meter_pb.QueryMeterResponse.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

var MeteringServiceService = (exports.MeteringServiceService = {
  ingest: {
    path: "/meterus.meter.v1.MeteringService/Ingest",

    requestStream: false,

    responseStream: false,

    requestType: meter_pb.CloudEvent,

    responseType: google_protobuf_empty_pb.Empty,

    requestSerialize: serialize_meterus_meter_v1_CloudEvent,

    requestDeserialize: deserialize_meterus_meter_v1_CloudEvent,

    responseSerialize: serialize_google_protobuf_Empty,

    responseDeserialize: deserialize_google_protobuf_Empty,
  },

  listMeters: {
    path: "/meterus.meter.v1.MeteringService/ListMeters",

    requestStream: false,

    responseStream: false,

    requestType: meter_pb.ListMetersRequest,

    responseType: meter_pb.ListMetersResponse,

    requestSerialize: serialize_meterus_meter_v1_ListMetersRequest,

    requestDeserialize: deserialize_meterus_meter_v1_ListMetersRequest,

    responseSerialize: serialize_meterus_meter_v1_ListMetersResponse,

    responseDeserialize: deserialize_meterus_meter_v1_ListMetersResponse,
  },

  createMeter: {
    path: "/meterus.meter.v1.MeteringService/CreateMeter",

    requestStream: false,

    responseStream: false,

    requestType: meter_pb.CreateMeterRequest,

    responseType: meter_pb.Meter,

    requestSerialize: serialize_meterus_meter_v1_CreateMeterRequest,

    requestDeserialize: deserialize_meterus_meter_v1_CreateMeterRequest,

    responseSerialize: serialize_meterus_meter_v1_Meter,

    responseDeserialize: deserialize_meterus_meter_v1_Meter,
  },

  getMeter: {
    path: "/meterus.meter.v1.MeteringService/GetMeter",

    requestStream: false,

    responseStream: false,

    requestType: meter_pb.MeterId,

    responseType: meter_pb.Meter,

    requestSerialize: serialize_meterus_meter_v1_MeterId,

    requestDeserialize: deserialize_meterus_meter_v1_MeterId,

    responseSerialize: serialize_meterus_meter_v1_Meter,

    responseDeserialize: deserialize_meterus_meter_v1_Meter,
  },

  deleteMeter: {
    path: "/meterus.meter.v1.MeteringService/DeleteMeter",

    requestStream: false,

    responseStream: false,

    requestType: meter_pb.MeterId,

    responseType: google_protobuf_empty_pb.Empty,

    requestSerialize: serialize_meterus_meter_v1_MeterId,

    requestDeserialize: deserialize_meterus_meter_v1_MeterId,

    responseSerialize: serialize_google_protobuf_Empty,

    responseDeserialize: deserialize_google_protobuf_Empty,
  },

  queryMeter: {
    path: "/meterus.meter.v1.MeteringService/QueryMeter",

    requestStream: false,

    responseStream: false,

    requestType: meter_pb.QueryMeterRequest,

    responseType: meter_pb.QueryMeterResponse,

    requestSerialize: serialize_meterus_meter_v1_QueryMeterRequest,

    requestDeserialize: deserialize_meterus_meter_v1_QueryMeterRequest,

    responseSerialize: serialize_meterus_meter_v1_QueryMeterResponse,

    responseDeserialize: deserialize_meterus_meter_v1_QueryMeterResponse,
  },

  listMeterSubjects: {
    path: "/meterus.meter.v1.MeteringService/ListMeterSubjects",

    requestStream: false,

    responseStream: false,

    requestType: meter_pb.ListMeterSubjectsRequest,

    responseType: meter_pb.ListMeterSubjectsResponse,

    requestSerialize: serialize_meterus_meter_v1_ListMeterSubjectsRequest,

    requestDeserialize: deserialize_meterus_meter_v1_ListMeterSubjectsRequest,

    responseSerialize: serialize_meterus_meter_v1_ListMeterSubjectsResponse,

    responseDeserialize: deserialize_meterus_meter_v1_ListMeterSubjectsResponse,
  },
});

exports.MeteringServiceClient = grpc.makeGenericClientConstructor(
  MeteringServiceService,
);
