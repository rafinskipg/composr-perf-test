var phrases = [{
  url: 'test/phrase',
  "version": "2.2.2",
  get: {
    code: 'var corbel = require("corbel-js"); res.status(200).send({ hello : "world" }); ',
    doc: {}
  }
}, {
  "url": 'a/asd',
  "version": "2.2.2",
  "post": {
    "codehash": "dmFyIENvbXBvc3JFcnJvciA9IHJlcXVpcmUoJ0NvbXBvc3JFcnJvcicpOw0KdmFyIGNvcmJlbCA9IHJlcXVpcmUoJ2NvcmJlbC1qcycpOw0KDQppZiAoIXJlcS5ib2R5IHx8ICFyZXEuYm9keS5qd3QpIHsNCiAgcmVzLnN0YXR1cyg0MDEpLnNlbmQobmV3IENvbXBvc3JFcnJvcignZXJyb3I6and0OnVuZGVmaW5lZCcsICcnLCA0MDEpKTsNCn1lbHNlew0KDQogIHZhciBjb3JiZWxEcml2ZXIgPSBjb3JiZWwuZ2VuZXJhdGVEcml2ZXIoew0KICAgIGlhbVRva2VuOiAnJywNCiAgICBkb21haW4gOiBkb21haW4NCiAgfSk7DQoNCiAgdmFyIHRva2VuT2JqZWN0Ow0KDQogIC8qDQogICAqIFJlcXVlc3QgYSBzZXNzaW9uIHRva2VuIGZvciB0aGUgdXNlcg0KICAgKiBSZXF1aXJlZCBjbGFpbXM6DQogICAqIGlzczogQ0xJRU5UX0lEDQogICAqIGJhc2ljX2F1dGgudXNlcm5hbWU6IFVTRVJOQU1FDQogICAqIGJhc2ljX2F1dGgucGFzc3dvcmQ6IFBBU1NXT1JEDQogICAqIGF1ZDogJ2h0dHA6Ly9pYW0uYnF3cy5pbycNCiAgICogc2NvcGU6ICdzY29wZTEgc2NvcGUyJw0KICAgKiBleHA6IGVwb2NoICsgMWgNCiAgICovDQogIGNvcmJlbERyaXZlci5pYW0udG9rZW4oKS5jcmVhdGUoew0KICAgIGp3dDogcmVxLmJvZHkuand0DQogIH0sIHRydWUpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHsNCiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7DQoNCiAgICAvL1RlbmVtb3MgZWwgdG9rZW4gZGUgdXN1YXJpbywgYXNpbWlzbW8gdGFtYmllbiBlbCByZWZyZXNoIHkgZWwgZXhwaXJlcw0KICAgIHRva2VuT2JqZWN0ID0gcmVzcG9uc2UuZGF0YTsNCg0KICAgIC8vUmVjcmVhbW9zIGVsIGNvcmJlbERyaXZlciBjb24gbG9zIHNldHRpbmdzIGRlbCB1c3VhcmlvDQogICAgY29yYmVsRHJpdmVyID0gY29yYmVsLmdlbmVyYXRlRHJpdmVyKHsNCiAgICAgIGlhbVRva2VuOiB0b2tlbk9iamVjdCwNCiAgICAgIGRvbWFpbjogZG9tYWluDQogICAgfSk7DQoNCiAgICByZXMuY29va2llKCd0b2tlbicsIHRva2VuT2JqZWN0LmFjY2Vzc1Rva2VuLCB7ZXhwaXJlczogbmV3IERhdGUodG9rZW5PYmplY3QuZXhwaXJlc0F0KX0pOw0KICAgIA0KICAgIC8vRW5hYmxlIGFzc2V0cyBhY2Nlc3MgKG9ubHkgZm9yIHVzZXJzKQ0KICAgIC8vY29yYmVsRHJpdmVyLmFzc2V0cygpLmFjY2VzcygpOw0KDQogICAgLy9PYnRhaW4gdGhlIGxvZ2dlZCB1c2VyIGRhdGENCiAgICByZXR1cm4gY29yYmVsRHJpdmVyLmlhbS51c2VyKCdtZScpLmdldCgpOw0KICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7DQogICAgcmVzLnNlbmQoew0KICAgICAgdG9rZW5PYmplY3Q6IHRva2VuT2JqZWN0LA0KICAgICAgdXNlcjogcmVzcG9uc2UuZGF0YQ0KICAgIH0pOw0KICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHsNCiAgICByZXMuc3RhdHVzKGVyci5zdGF0dXMgPyBlcnIuc3RhdHVzIDogNTAwKS5zZW5kKGVycik7DQogIH0pOw0KfQ==",
    "doc": {
      "description": "Phrase for login a client using JWT. (claims: `iss`, `aud`, `scope`, `exp`)",
      "body": {

      },
      "responses": {

      }
    }
  }
}];

module.exports = phrases;