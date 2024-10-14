// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var subject_pb = require('./subject_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_subject_v1_ListSubjectRequest(arg) {
  if (!(arg instanceof subject_pb.ListSubjectRequest)) {
    throw new Error('Expected argument of type meterus.subject.v1.ListSubjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_subject_v1_ListSubjectRequest(buffer_arg) {
  return subject_pb.ListSubjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_subject_v1_ListSubjectResponse(arg) {
  if (!(arg instanceof subject_pb.ListSubjectResponse)) {
    throw new Error('Expected argument of type meterus.subject.v1.ListSubjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_subject_v1_ListSubjectResponse(buffer_arg) {
  return subject_pb.ListSubjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_subject_v1_Subject(arg) {
  if (!(arg instanceof subject_pb.Subject)) {
    throw new Error('Expected argument of type meterus.subject.v1.Subject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_subject_v1_Subject(buffer_arg) {
  return subject_pb.Subject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meterus_subject_v1_SubjectId(arg) {
  if (!(arg instanceof subject_pb.SubjectId)) {
    throw new Error('Expected argument of type meterus.subject.v1.SubjectId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meterus_subject_v1_SubjectId(buffer_arg) {
  return subject_pb.SubjectId.deserializeBinary(new Uint8Array(buffer_arg));
}


var SubjectServiceService = exports.SubjectServiceService = {
  createSubject: {
    path: '/meterus.subject.v1.SubjectService/CreateSubject',
    requestStream: false,
    responseStream: false,
    requestType: subject_pb.Subject,
    responseType: subject_pb.Subject,
    requestSerialize: serialize_meterus_subject_v1_Subject,
    requestDeserialize: deserialize_meterus_subject_v1_Subject,
    responseSerialize: serialize_meterus_subject_v1_Subject,
    responseDeserialize: deserialize_meterus_subject_v1_Subject,
  },
  listSubjects: {
    path: '/meterus.subject.v1.SubjectService/ListSubjects',
    requestStream: false,
    responseStream: false,
    requestType: subject_pb.ListSubjectRequest,
    responseType: subject_pb.ListSubjectResponse,
    requestSerialize: serialize_meterus_subject_v1_ListSubjectRequest,
    requestDeserialize: deserialize_meterus_subject_v1_ListSubjectRequest,
    responseSerialize: serialize_meterus_subject_v1_ListSubjectResponse,
    responseDeserialize: deserialize_meterus_subject_v1_ListSubjectResponse,
  },
  getSubject: {
    path: '/meterus.subject.v1.SubjectService/GetSubject',
    requestStream: false,
    responseStream: false,
    requestType: subject_pb.SubjectId,
    responseType: subject_pb.Subject,
    requestSerialize: serialize_meterus_subject_v1_SubjectId,
    requestDeserialize: deserialize_meterus_subject_v1_SubjectId,
    responseSerialize: serialize_meterus_subject_v1_Subject,
    responseDeserialize: deserialize_meterus_subject_v1_Subject,
  },
  deleteSubject: {
    path: '/meterus.subject.v1.SubjectService/DeleteSubject',
    requestStream: false,
    responseStream: false,
    requestType: subject_pb.SubjectId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_meterus_subject_v1_SubjectId,
    requestDeserialize: deserialize_meterus_subject_v1_SubjectId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateSubject: {
    path: '/meterus.subject.v1.SubjectService/UpdateSubject',
    requestStream: false,
    responseStream: false,
    requestType: subject_pb.Subject,
    responseType: subject_pb.Subject,
    requestSerialize: serialize_meterus_subject_v1_Subject,
    requestDeserialize: deserialize_meterus_subject_v1_Subject,
    responseSerialize: serialize_meterus_subject_v1_Subject,
    responseDeserialize: deserialize_meterus_subject_v1_Subject,
  },
};

exports.SubjectServiceClient = grpc.makeGenericClientConstructor(SubjectServiceService);
