const grpc = require("@grpc/grpc-js");
const services = require("./generated/meter_grpc_pb");
const messages = require("./generated/meter_pb");
const timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb");
const struct_pb = require("google-protobuf/google/protobuf/struct_pb");

class MeteringServiceClient {
  #client;
  #api_key;

  constructor(address, api_key, credentials) {
    this.#client = new services.MeteringServiceClient(
      address,
      credentials || grpc.credentials.createInsecure(),
    );
    this.#api_key = api_key;
  }

  getAuthMetadata() {
    const metadata = new grpc.Metadata();
    metadata.set("authorization", `Bearer ${this.#api_key}`);
    return metadata;
  }

  ingest(cloudEvent) {
    return new Promise((resolve, reject) => {
      const request = new messages.CloudEvent();
      request.setId(cloudEvent.id);
      request.setSource(cloudEvent.source);
      request.setSpecVersion(cloudEvent.specversion);
      request.setType(cloudEvent.type);
      if (cloudEvent.time) {
        const timestamp = new timestamp_pb.Timestamp();
        timestamp.fromDate(new Date(cloudEvent.time));
        request.setTime(timestamp);
      }
      request.setSubject(cloudEvent.subject);
      if (cloudEvent.data) {
        const dataStruct = struct_pb.Struct.fromJavaScript(cloudEvent.data);
        request.setData(dataStruct);
      }
      this.#client.ingest(
        request,
        this.getAuthMetadata(),
        (error, response) => {
          if (error) reject(error);
          else resolve(response);
        },
      );
    });
  }

  listMeters(limit, page) {
    return new Promise((resolve, reject) => {
      const request = new messages.ListMetersRequest();
      request.setLimit(limit);
      request.setPage(page);
      this.#client.listMeters(
        request,
        this.getAuthMetadata(),
        (error, response) => {
          if (error) reject(error);
          else
            resolve({
              meters: response.getMetersList().map(this.#meterToObject),
              total: response.getTotal(),
            });
        },
      );
    });
  }

  createMeter(meterData) {
    return new Promise((resolve, reject) => {
      const request = new messages.CreateMeterRequest();
      request.setSlug(meterData.slug);
      request.setDescription(meterData.description);
      request.setAggregation(meterData.aggregation);
      request.setGroupByList(meterData.groupBy);
      request.setCreatedBy(meterData.createdBy);
      request.setEventType(meterData.eventType);
      if (meterData.valueProperty)
        request.setValueProperty(meterData.valueProperty);

      this.#client.createMeter(
        request,
        this.getAuthMetadata(),
        (error, response) => {
          if (error) reject(error);
          else resolve(this.#meterToObject(response));
        },
      );
    });
  }

  getMeter(meterIdOrSlug) {
    return new Promise((resolve, reject) => {
      const request = new messages.MeterId();
      request.setMeterIdOrSlug(meterIdOrSlug);
      this.#client.getMeter(
        request,
        this.getAuthMetadata(),
        (error, response) => {
          if (error) reject(error);
          else resolve(this.#meterToObject(response));
        },
      );
    });
  }

  deleteMeter(meterIdOrSlug) {
    return new Promise((resolve, reject) => {
      const request = new messages.MeterId();
      request.setMeterIdOrSlug(meterIdOrSlug);
      this.#client.deleteMeter(
        request,
        this.getAuthMetadata(),
        (error, response) => {
          if (error) reject(error);
          else resolve(response);
        },
      );
    });
  }

  queryMeter(queryData) {
    return new Promise((resolve, reject) => {
      const request = new messages.QueryMeterRequest();

      request.setMeterIdOrSlug(queryData.meterIdOrSlug);

      if (queryData.from) {
        const fromTimestamp = new timestamp_pb.Timestamp();
        fromTimestamp.fromDate(new Date(queryData.from));
        request.setFrom(fromTimestamp);
      }

      if (queryData.to) {
        const toTimestamp = new timestamp_pb.Timestamp();
        toTimestamp.fromDate(new Date(queryData.to));
        request.setTo(toTimestamp);
      }

      if (queryData.subject) {
        request.setSubjectList(queryData.subject);
      }

      if (queryData.filterGroupBy) {
        const filterGroupByMap = request.getFilterGroupByMap();
        Object.entries(queryData.filterGroupBy).forEach(([key, values]) => {
          const filterGroupValues = new messages.FilterGroupValues();
          filterGroupValues.setValuesList(values);
          filterGroupByMap.set(key, filterGroupValues);
        });
      }

      if (queryData.groupBy) {
        request.setGroupByList(queryData.groupBy);
      }

      if (queryData.windowSize) {
        request.setWindowSize(queryData.windowSize);
      }

      if (queryData.windowTimeZone) {
        request.setWindowTimeZone(queryData.windowTimeZone);
      }

      this.#client.queryMeter(
        request,
        this.getAuthMetadata(),
        (error, response) => {
          if (error) {
            console.error("Query error:", error);
            reject(error);
          } else {
            resolve(this.#queryMeterResponseToObject(response));
          }
        },
      );
    });
  }

  #meterToObject(meter) {
    return {
      id: meter.getId(),
      slug: meter.getSlug(),
      description: meter.getDescription(),
      aggregation: meter.getAggregation(),
      valueProperty: meter.getValueProperty(),
      groupBy: meter.getGroupByList(),
      eventType: meter.getEventType(),
      createdBy: meter.getCreatedBy(),
      createdAt:
        meter.getCreatedAt() &&
        new Date(
          meter.getCreatedAt().getSeconds() * 1000 +
            meter.getCreatedAt().getNanos() / 1000000,
        ).toISOString(),
    };
  }

  #queryMeterResponseToObject(response) {
    return {
      data: response.getDataList().map((row) => ({
        from: this.#timestampToISOString(row.getFrom()),
        to: this.#timestampToISOString(row.getTo()),
        value: row.getValue(),
        groupBy: row.getGroupBy() ? row.getGroupBy().toJavaScript() : null,
      })),
      from: this.#timestampToISOString(response.getFrom()),
      to: this.#timestampToISOString(response.getTo()),
      windowSize: response.getWindowSize(),
    };
  }

  #timestampToISOString(timestamp) {
    if (!timestamp) {
      return null;
    }
    return new Date(
      timestamp.getSeconds() * 1000 + timestamp.getNanos() / 1000000,
    ).toISOString();
  }
}

module.exports = MeteringServiceClient;
